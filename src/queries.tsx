// src/queries.js

import { gql } from '@apollo/client';

export const GET_DATA = gql`
query{
  user_tournament{
     values{
      user_id
      created
    }
  }
}
`;


