import React, { Component } from 'react'
import environment from './environment'
import {graphql, QueryRenderer} from 'react-relay'

const query = graphql`
  query RoomMenuRoomsQuery {
    rooms {
      id
      sid
      users {
        name
      }
    }
  }
`

export default class RoomMenu extends Component {
  render () {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            console.log(error)
            return <div>Error</div>
          }

          if (!props) {
            return <div>Loading...</div>
          }

          const rooms = props.rooms.map((room) => {
            console.log(room.sid)
            return <button value={room.sid} onClick={this.props.changeRoomID}>{room.id}</button>
          })
          return rooms
        }}
      />
    )
  }
}
