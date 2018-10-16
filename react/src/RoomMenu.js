import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import DeleteButton from './DeleteButton'
import CreateButton from './CreateButton'
import ConnectButton from './ConnectButton'

const query = gql`
  {
    rooms {
      id
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
              <div key={room.id}>
                <div>{room.id}</div>
                <DeleteButton id={room.id} query={query} />
                <ConnectButton id={room.id} name={this.state.name} changeRoom={this.props.changeRoom} />
              </div>
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
