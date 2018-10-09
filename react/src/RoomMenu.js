import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import DeleteButton from './DeleteButton'
import CreateButton from './CreateButton'

const query = gql`
  {
    rooms {
      id
      sid
    }
  }`

export default class RoomMenu extends Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update (cache, { data: { deleteRoom } }) {
    const { rooms } = cache.readQuery({ query: query })
    cache.writeQuery({
      query: query,
      data: { rooms: rooms.concat([deleteRoom]) }
    })
  }

  render () {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            console.log(error)
            return <p>Error :(</p>
          }

          const rooms = data.rooms.map((room) => {
            console.log(room.sid)
            return (
              <div>
                <div>{room.id}</div>
                <DeleteButton id={room.id} update={this.update} />
                <button value={room.sid} onClick={this.props.changeRoomID}>connect</button>
              </div>
            )
          })
          rooms.push(<CreateButton changeRoom={this.props.changeRoomID} />)
          return rooms
        }}
      </Query>
    )
  }
}
