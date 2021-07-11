# Bitgem UI

This is the UI for the https://bitgem.co site. This site is built using React, NextJS and TailwindCSS

## Initial setup

To develop locally you will need to clone three projects:

Contracts - [https://github.com/nftgem/nftgem-contracts](https://https://github.com/nftgem/nftgem-contracts)

Subgraph - [https://github.com/nftgem/nftgem-subgraph](https://github.com/nftgem/nftgem-subgraph)

UI - [https://github.com/nftgem/bitgem-ui](https://github.com/nftgem/bitgem-uihttps://)

You will need to follow these steps to:

1. Run a local hardhat network and deploy the bitgem contracts to it.
2. Run a local graph node through docker that indexes data through mapping our contract events.
3. Run UI

## Contracts setup

1. `git clone git@github.com:nftgem/nftgem-contracts.git` then cd into that directory.
2. `git checkout pricklywiggles` Currently the branch that has working code is my personal branch, this will change in the future.
3. `git submodule update --init --recursive` to recursively setup all nested submodules.
4. run `yarn`
5. `npx hardhat node --hostname 0.0.0.0 --watch --export bitgem-ui/abis/1337/bitgems.json` - This will run your local ethereum node, deploy the contracts to it and copy the json file with addresses and abis for the bitgems-ui project to consume. Wait until everything is deployed.

## Subgraph setup

1. in the submodule bitgem-ui, open the bitgems.json file you generated on step 5 from the contracts setup.
2. Find NFTGemPoolFactory in that file and copy the contract address to your clipboard.
3. cd into the nftgem-subgraph submodule directory
4. edit the subgraph.yaml file, replace the source address for NFTGemPoolFactory with the item in your clipboard and save.
5. Install docker if you don't have it.
6. `yarn` - install dependencies.
7. `yarn local:reset` - This will run a local docker container with a graph node.
8. `yarn local:create` - this will create a subgraph in the local graph node.
9. `yarn codegen` - generates assemblyscript files.
10. `yarn local:deploy` - this will deploy the nftgem subgraph. At this point you can open [http://127.0.0.1:8000/subgraphs/name/nftgem/nftgem-subgraph](http://127.0.0.1:8000/subgraphs/name/nftgem/nftgem-subgraph) to see the iql interface

## Running the ui

I recommend cloning the bitgem-ui project directly and working on your branch rather than working from the submodule directory within nftgem-contracts, unless you are very comfortable working with submodules.

1. clone the bitgem-ui project somewhere in your computer
2. copy the bitgem-ui/abis/1337/bitgems.json file to the project you cloned.
3. `yarn` to install
4. `yarn dev`
5. Go to [https://localhost:3000](https://localhost:3000)
6. Set up your local network on metamask.
   1. Open metamask > Settings > Networks
   2. Network name: localhost
   3. RPC url: http://localhost:8545
   4. chain id: 1337

If at any point you edit or add Graphql operations from src/graph/operations.graphql, you will need to regenerate the typescript bindings and react-query code by running `yarn codegen` **This must be done while you have are running the subgraph locally as graphql-codegen uses the deployed schema to generate this code**

## Notes on testing

To be able to test, you need to get into the accounts created by hardhat that have your local ETH and either use those accounts or (my preference) create a new account in a different chrome profile and send the local ETH from the hardhat created account to that new account. Note that you will have to redo this every time you deploy your local ethereum node. Be systematic about how you create and delete these profiles and you'll save yourself a lot of grief. If you ever get a problem while submitting a transaction with an error related to a nonce problem, it's probably that you're trying to use an account that has an eth balance from a previous eth node deployment.

## Notes

Data flow:

- Designed a data flow that accounts for certain challenges of the services we use. Mainly:
  - The single source of truth for the data we display comes from thegraph.
  - Thegraph is indexed from mapping functions that are triggered from contract events. This means there’s a delta of time between contract events firing and the data being available to be pulled from the graph.
  - Thegraph subscriptions are not stable, so we can’t count of those to keep our data fresh.
  - In general, we can’t rely on contract-related methods (like transaction.wait() results) to know when there’s fresh data to pull.
- The solution implemented is based on polling the graphql server (this is what thegraph devs recommend). see below for section on QueryManagerContext.
  - We maintain a pending cache with data that we’ve submitted to the blockchain (like a claim when one was submitted or a gem one a claim was collected) but before the result is available from thegraph.
  - We use hooks that merge the pending cache with the server cache to display our lists with optimistic updates.
  - We poll the server while there are pending items and clear the pending items when they have been indexed by thegraph.
- As we go we can identify places where we can decrease prevent excessive polling using these methods:
  - tell react-query not to poll when the browser window is in the background.
  - manually decrease polling intervals.
  - we already do not poll certain queries unless we know we are waiting for data (like a claim that was submitted)

Server cache and query manager:

- QueryManagerContext maintains a list of gql queries and polls at a given interval.

  - The interval at which each query is polled can be set in two ways by users of the manager:
  - imperatively, you an consume the context provided, it contains dispatch methods to set the intervals. Setting the interval this way will affect the polling interval from that moment forward independently of any component lifecycle.
  - Preferred use is to control this declaratively, you can use the useClaimQueryRefetchInterval hook in any given component, during the life of the component, the query will be polled at the interval given, once the component unmount, the poll interval will go back to what it was previously.

imperative:

```
const {setClaimRefetchInterval} = useQueryManager();
...

setClaimRefetchInterval(5000);  // claims will be polled every 5 seconds.
```

declarative:

```
useClaimRefetchInterval(5000); // while in this component, fetch at this interval. goes back to previous interval when unmounted.
```

- Usage example: while on the pools page, we use the useClaimQueryRefetchInterval to poll thegraph very frequently, this updates the pool prices as they go up, once the user navigates away from that page, the query interval goes back to its previous setting.
- Query manager uses react-query to manage the server cache and uses fetching functions generated by graphql-codegen using a graphql-request fetcher.
- You can find/add new graphql queries under /graph. Add a query to operations.graphql and then run `yarn cogegen` to generate the typescript bindings and react-query hooks.
  Web3ReactManager
- Handles the network connection, eagerly connects to approved wallets and reconnects when there are issues.
- Still need to work on the UX for edge cases around connection issues.
- you can add new networks under /lib/connectors.ts and /lib/network-connector.ts
- Code for multi-networks is based on sushiswap

Web3Events

- There are three contract event based hooks:
- useWeb3Event(contract, eventId, eventHandler): while the component is mounted, trigger eventHandler when eventId on contract fires.
- useWeb3Notification(contract, eventId, message): displays a toast message when a contract event fires.
- useCacheInvalidationOnEvent(contract, eventId, queryKey): might need this at some point, it invalidates the cache for all queries that match the given queryKey, triggering a refetch if any of them are currently mounted or being polled.
