/*
  RoomMenu:
    This component fetches and presents the user with a list of rooms to connect to. Eventually this
    component will use a GraphQL subscription instead of just a query so that it can keep up to date
    on room deletions. As is, it only fetches the data once and doesn't know if a room has been
    closed or added by another user.
*/
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CreateButton from './CreateButton'
import RoomIcon from './RoomIcon'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
`

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
          console.log(data)
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
              <Container>
                {rooms}
              </Container>
            </div>
          )
        }}
      </Query>
    )
  }
}
