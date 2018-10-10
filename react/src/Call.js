import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Controls from './Controls'
import Callers from './Callers'
import Video from './Video'
import styled from 'react-emotion'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  query Room($id: ID!){
    room(id:$id){
      name
      sid
      users {
        name
      }
    }
  }`

const Container = styled('div')`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "sidebar buttons"
    "sidebar callers";
`

export default class Call extends Component {
  render () {
    return (
      <Query query={query} variables={{id: this.props.roomID}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            console.log(error)
            return <p>Error :(</p>
          }
          console.log(data)
          return (
            <Container>
              <Video sid={data.room.sid} />
              <Controls changeRoomID={this.props.changeRoomID} />
              <Sidebar />
              <Callers />
            </Container>
          )
        }}
      </Query>
    )
  }
}
