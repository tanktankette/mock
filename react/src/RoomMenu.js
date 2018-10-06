import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    rooms {
      id
      sid
    }
  }`

// const createRoom = gql`
//   mutation {
//     createRoom(name:"hi"){
//       name
//     }
//   }`

// const deleteRoom = gql`
// mutation {
//   deleteRoom(id:"hi"){
//     name
//   }
// }`

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
            console.log(room.sid)
            return (
              <div>
                <div>{room.id}</div>
                <button value={room.id} onClick={this.props.deleteRoom}>delete</button>
                <button value={room.sid} onClick={this.props.changeRoomID}>connect</button>
              </div>
            )
          })
          return rooms
        }}
      </Query>
    )
  }
}
