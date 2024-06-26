import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../queries';

interface SomeData {
  postid: string;
  // created: string;
  // description: string;
}

interface SomeDataResponse {
  someData: SomeData[];
}

const SomeComponent: React.FC = () => {
  const { loading, error, data } = useQuery<SomeDataResponse>(GET_DATA);
console.log("data",data);
// const [user, setUser] = useState(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
       
      </ul>
    </div>
  );
};

export default SomeComponent;
