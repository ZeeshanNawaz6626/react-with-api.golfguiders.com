import React, { useEffect } from "react";
import ApiClient from "./ApiClient";

function Fetch() {
  // useEffect(() => {
  //     console.log("called");

  //     fetch('/graphql', {
  //         method: "post",
  //         headers: {
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //             query: `query {
  //                 getPostsByDistance {
  //                     postid
  //                 }
  //             }`
  //         })
  //     })
  //     .then(res => res.json()) // Convert response to JSON format
  //     .then(data => console.log(data)) // Log the JSON response data to the console
  //     .catch(error => console.error('Error fetching data:', error)); // Handle any errors during fetch
  // }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  useEffect(() => {
    const response = ApiClient.postDataWithVariables("social", {
      query: `
             query{
  user_tournament{
    values
    {
      user_id
      created
    }
  }
}
            `,
    });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return <div>Fetch</div>;
}

export default Fetch;
