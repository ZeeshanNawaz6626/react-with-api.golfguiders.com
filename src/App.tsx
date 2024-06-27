import React, { useEffect } from 'react';
import './App.css';
import Fetch from './components/Fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import axios from 'axios';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  // const client = ...
client
.query({
  query: gql`
   query{
  getPostsByDistance{
    postid
    
  }
}

  `,
})
.then((result) => console.log("result",result));
  return (
    <div className="App">
      <header className="App-header">
        <h1>React + TypeScript + GraphQL</h1>
        <Fetch/>
      </header>
    </div>
  );
}

export default App;
