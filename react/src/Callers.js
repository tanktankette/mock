import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import environment from './environment'
import {graphql, QueryRenderer} from 'react-relay'

const query = graphql`
  query CallersRoomsQuery {
    rooms {
      description
    }
  }
`

const Container = styled('div')`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: row;
  justify-self: end;
  align-self: end;
  justify-content: flex-end;
  margin: 20px;
`

const callerStyling = css`
  width: 64px;
  padding: 10px;
  &:hover {
    background-color: grey;
  };
`

export default class Callers extends Component {
  render () {
    return (
      <Container>
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

            const rooms = Array(props.rooms.length).fill(<img src='caller.png' class={callerStyling} alt='' />)
            return rooms
          }}
        />

      </Container>
    )
  }
}
