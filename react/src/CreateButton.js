import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createRoom = gql`
mutation CreateRoom($name: String!){
  createRoom(name:$name){
    id
  }
}`

export default class CreateButton extends Component {
  render () {
    return (
      <Mutation
        mutation={createRoom}
        update={(cache, { data: { createRoom } }) => {
          const { rooms } = cache.readQuery({ query: this.props.query })
          rooms.push(createRoom)
          console.log('pushing new room to query cache')
          console.log(createRoom)
          cache.writeQuery({
            query: this.props.query,
            data: { rooms: rooms }
          })
        }}
      >
        {(CreateRoom, { data }) => (
          <button onClick={() => { CreateRoom({ variables: { name: 'hi' } }) }} >
            Create
          </button>
        )}
      </Mutation>
    )
  }
}
