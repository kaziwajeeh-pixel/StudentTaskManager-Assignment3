# Student Task Manager DApp

## Overview

Student Task Manager is a decentralized application (DApp) developed using Solidity, Truffle, Ganache, and MetaMask.

It allows students to manage their tasks through a smart contract deployed on a local Ethereum blockchain.

## Technologies Used

- Solidity – Smart contract development
- Truffle – Smart contract compilation and deployment
- Ganache – Local blockchain network
- MetaMask – Wallet connection and transaction approval
- Ethers.js – Frontend and blockchain interaction
- HTML, CSS, and JavaScript – User interface

## Features

- Connect MetaMask wallet
- Connect to the local Ganache network
- Load the deployed StudentTaskManager smart contract
- Add new tasks to the blockchain
- View existing tasks
- Mark tasks as completed or pending
- Read task information directly from the smart contract

## Network Configuration

| Setting | Value |
|---|---|
| Network | Ganache Local |
| RPC URL | http://127.0.0.1:7545 |
| Chain ID | 1337 |
| Truffle Network ID | 5777 |
| Currency | ETH |

## Smart Contract Deployment

The project uses Truffle migrations to deploy the smart contracts.

To compile the contracts:

```bash
truffle compile
```

To deploy them to Ganache:

```bash
truffle migrate --reset --network development
```

## Deployed Contract

The StudentTaskManager contract was deployed to the local Ganache blockchain.

**Contract Address:**

`0xbf4767b35b2357E2609100fB43164b1B2E8B527c`

Note: This address is specific to the current Ganache deployment. It may change if the contracts are redeployed.

## Running the Application

1. Start Ganache and ensure the local blockchain is running.
2. Open MetaMask and connect to the Ganache Local network.
3. Import a Ganache test account into MetaMask.
4. Open the project folder in Visual Studio Code.
5. Open `index.html` using the Live Server extension.
6. Connect MetaMask to the application.
7. Enter or verify the deployed contract address.
8. Click Load Contract.
9. Add tasks and update their completion status.

## Project Structure

```text
assignment 3/
│
├── contracts/
│   ├── SmartContract.sol
│   └── Migrations.sol
│
├── migrations/
│   ├── 1_initial_migration.js
│   └── 2_deploy_contract.js
│
├── build/
├── test/
├── index.html
├── style.css
├── task-illustration.svg
├── truffle-config.js
└── README.md
```

## Screenshots

Screenshots demonstrating smart contract compilation, deployment, wallet connection, contract interaction, and task management are included with the assignment submission.

## Conclusion

The project demonstrates how a Solidity smart contract can be deployed using Truffle and Ganache and connected to a frontend application through MetaMask. It provides a practical example of blockchain-based task management and interaction with decentralized applications.