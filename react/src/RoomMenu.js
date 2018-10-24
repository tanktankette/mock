import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CreateButton from './CreateButton'
import RoomIcon from './RoomIcon'

const query = gql`
  {
    rooms {
      id
      name
      sid
    }
  }`

export default class RoomMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.changeName = this.changeName.bind(this)
  }

  changeName (e) {
    this.setState({name: e.target.value})
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
            return (
              <RoomIcon
                key={room.id}
                name={this.state.name}
                changeRoom={this.props.changeRoom}
                room={room}
                query={query}
              />
            )
          })
          return (
            <div>
              <CreateButton changeRoom={this.props.changeRoom} query={query} />
              <br /><br />
              <input type='text' placeholder='name' value={this.state.name} onChange={this.changeName} />
              {rooms}
            </div>
          )
        }}
      </Query>
    )
  }
}
