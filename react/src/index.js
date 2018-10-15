import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://ec2-54-185-231-170.us-west-2.compute.amazonaws.com:4000/api'
})

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'))
registerServiceWorker()
