import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define the GraphQL query
    const query = `
      query {
        post {
          values {
            postid
          }
        }
      }
    `;

    // Define the config for the Axios request
    const config = {
      method: 'post',
      url: 'http://9b34938d-3593-42df-8ce8-fa1d3243308b-us-east-1.apps.astra.datastax.com/api/graphql/social',
      headers: {
        'Content-Type': 'application/json',
        'x-cassandra-token': 'AstraCS:WFBsNbvLkXcelBOAGQAqFFdR:54b30786c540e548f5e901ac220b7ab613dc12ebb2e0c5c9a62caf1980527787',
      },
      data: JSON.stringify({ query }),
    };

    // Make the request
    axios(config)
      .then((response) => {
        const data = response.data.data.post.values;
        setPosts(data);
        console.log("post",data);
        
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default FetchPosts;
