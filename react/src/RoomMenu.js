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
            return (
              <div>
                <div>{room.id}</div>
                <DeleteButton id={room.id} query={query} />
                <button value={room.id} onClick={this.props.changeRoomID}>connect</button>
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
