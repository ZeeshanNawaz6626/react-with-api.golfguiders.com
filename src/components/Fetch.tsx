import React, { useEffect } from "react";
import ApiClient from "./ApiClient";

function Fetch() {
  useEffect(() => {
    const value = { user_id: 'c9816081-a164-42e0-8f74-1b325ef75edd' };
    const options = { consistency: 'LOCAL_QUORUM' };
    const response = ApiClient.postDataWithVariables("social", {
      query: `
             query($value: user_tournamentInput) {
          user_tournament(value: $value) {
    values
    {
      user_id
      created
    }
  }
}
            `,
            variables: { value: value, options: options },
    });
   
    
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return <div>Fetch</div>;
}

export default Fetch;
