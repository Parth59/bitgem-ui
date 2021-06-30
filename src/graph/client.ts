import {GraphQLClient} from 'graphql-request';

const GRAPH_ENDPOINT =
  'http://127.0.0.1:8000/subgraphs/name/nftgem/nftgem-subgraph';

const client = new GraphQLClient(GRAPH_ENDPOINT);

export {client};
