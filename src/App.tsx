import React, { useEffect } from 'react';
import './App.css';
import Fetch from './components/Fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import axios from 'axios';

function App() {
  const client = new ApolloClient({
    uri: '/graphql',
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


// const client = new ApolloClient({
//   uri: 'http://9b34938d-3593-42df-8ce8-fa1d3243308b-us-east-1.apps.astra.datastax.com/api/graphql/social',
//   cache: new InMemoryCache(),
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'x-cassandra-token': 'AstraCS:WFBsNbvLkXcelBOAGQAqFFdR:54b30786c540e548f5e901ac220b7ab613dc12ebb2e0c5c9a62caf1980527787',
//   },
// });

// client
//   .query({
//     query: gql`
//       query {
//         post {
//           values {
//             postid
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("Result:", result))
//   .catch((error) => {
//     console.error("Error:", error);
//     if (error.networkError) {
//       console.error("Network Error:", error.networkError);
//     }
//     // if (error.graphQLErrors) {
//     //   error.graphQLErrors.forEach(({ message, locations, path }) =>
//     //     console.error(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`)
//     //   );
//     // }
//   });

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + TypeScript + GraphQL</h1>
        {/* <SomeComponent /> */}
        {/* <Fetch/> */}
        {/* <FetchPosts/> */}
      </header>
    </div>
  );
}

export default App;
