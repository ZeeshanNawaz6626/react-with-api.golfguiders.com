import { ApolloError } from '@apollo/client';
// import { client } from '@App/apollo/ApiClient';
import axios from "axios";
// import Toast from 'react-native-toast-message';

class ApiHandle {

   private CassandraBaseUrl = "/graphql/";
   public authorizationToken = "AstraCS:WFBsNbvLkXcelBOAGQAqFFdR:54b30786c540e548f5e901ac220b7ab613dc12ebb2e0c5c9a62caf1980527787";

   // Methods with second error callback
//    public sendPostWithAuthWithCallback(variables, mutation, successCallback: (res) => void, errorCallback: (error) => void): void {
//       client.mutate({ variables: variables, mutation: mutation,fetchPolicy: 'no-cache'}).then((res) => {
//          successCallback(res);
//       }).catch((error) => {
//          errorCallback(error);
//       });
//    }

//    public sendGetWithAuthWithCallback(variables, query, successCallback: (res) => void, errorCallback: (error) => void): void {
//       client.query({variables: variables,query: query,fetchPolicy: 'no-cache'}).then((res) => {
//          successCallback(res);
//       }).catch((error) => {
//          errorCallback(error);
//       });
//    }

//    public async sendPostWithAuth(variables, mutation): Promise<{ data, errors }> {
//       const { data, errors } = await client.mutate({variables: variables,mutation: mutation,fetchPolicy: 'no-cache'});
//       return { data, errors };
//    }

//    public async sendVariablesGetWithAuth(variables, query): Promise<{ data, loading: boolean, error: ApolloError }> {
//       const { data, loading, error } = await client.query({variables: variables,query: query,fetchPolicy: 'no-cache'});
//       return { data, loading, error };
//    }

//    public async sendGetWithAuth(query): Promise<{ data, loading: boolean, error: ApolloError }> {
//       const { data, loading, error } = await client.query({query: query,fetchPolicy: 'no-cache'});
//       return { data, loading, error };
//    }

//    public subscribeGetWithAuth = (query, successCallback, errorCallback): void => {
//       client.subscribe({ query: query,fetchPolicy: 'network-only'}).subscribe({
//          next(data) {
//             successCallback(data);
//          },
//          error(err) {
//             errorCallback(err);
//          },
//       });
//    };

//    public stopSubscription = (query): void => {
//       client.subscribe({ query: query,fetchPolicy: 'network-only'}).subscribe({
//          next(data) {
//             console.log(data);
//          },
//       }).unsubscribe();
//    };

//    public async postData(keyspace:string, query: any): Promise<any> {
//       const endpoint = this.CassandraBaseUrl + keyspace;
//       // const authorizationToken = await tokenService.getAccessToken();
//       const headers = { 'Content-Type': 'application/json' };
//       if (this.authorizationToken) {
//          headers['x-cassandra-token'] = this.authorizationToken;
//       }

//       try {
//          const response = await axios.post(endpoint, { query }, { headers });
//          console.log("response from cassandra", response);

//          return response.data;
//       } catch (error) {
//          console.log(error)
//          Toast.show({
//             type: 'error',
//             text1: error?.message,
//             text2: '',
//             topOffset:60,
//          });
//          return undefined;
//       }
//    }


   public async postDataWithVariables(keyspace:string, obj: any): Promise<any> {
      const endpoint = this.CassandraBaseUrl + keyspace;
      // const authorizationToken = await tokenService.getAccessToken();
    //   const headers = { 'Content-Type': 'application/json' };
    //   if (this.authorizationToken) {
        // 
        interface Headers {
            'Content-Type': string;
            'x-cassandra-token'?: string;
          }
          
          const headers: any = {
            'Content-Type': 'application/json',
            'x-cassandra-token':'AstraCS:WFBsNbvLkXcelBOAGQAqFFdR:54b30786c540e548f5e901ac220b7ab613dc12ebb2e0c5c9a62caf1980527787'
          };
          
        //   headers['x-cassandra-token'] = this.authorizationToken;
          
    //   }

      try {
         const response = await axios.post(endpoint, { ...obj }, { headers });
         console.log("response from cassandra", response);

         return response.data;
      } catch (error) {
         console.log(error)
         return undefined;
      }
   }

//    public async getData(keyspace:string, query: string): Promise<any> {
//       const endpoint = this.CassandraBaseUrl + keyspace;
//       // const authorizationToken = await tokenService.getAccessToken();
//       const headers = { 'Content-Type': 'application/json', 'x-cassandra-token': this.authorizationToken };

//       try {
//          const response = await axios.get(endpoint, { query }, { headers });
//          console.log("response from cassandra", response);

//          return response.data;
//       } catch (error) {
//          Toast.show({
//             type: 'error',
//             text1: error?.message,
//             text2: '',
//             topOffset:60,
//          });
//          return undefined;
//       }
//    }
}
const ApiClient = new ApiHandle();
export default ApiClient;
