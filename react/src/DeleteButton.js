import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const deleteRoom = gql`
mutation DeleteRoom($id: ID!){
  deleteRoom(id:$id){
    name
  }
}`

export default class RoomMenu extends Component {
  render () {
    return (
      <Mutation
        mutation={deleteRoom}
        update={this.props.update}
      >
        {(deleteRoom, { data }) => (
          <button
            onClick={() => {
              deleteRoom({ variables: { id: this.props.id } })
            }}
          >
            Delete
          </button>
        )}
      </Mutation>
    )
  }
}
