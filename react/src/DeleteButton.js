import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { css } from 'emotion'

const style = css`
  position: relative;
  top: 59px;
  left: 60px;
`

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
        update={(cache, { data: { deleteRoom } }) => {
          const { rooms } = cache.readQuery({ query: this.props.query })
          // I think find would be faster than filter here but I'm not sure
          cache.writeQuery({
            query: this.props.query,
            data: { rooms: rooms.filter(room => room.id !== this.props.id) }
          })
        }}
      >
        {(deleteRoom, { data }) => (
          <button className={style} onClick={() => { deleteRoom({ variables: { id: this.props.id } }) }}>
            Delete
          </button>
        )}
      </Mutation>
    )
  }
}
