# Shinobi-Name-Service-Contract

The Shinobi-Name-Service-Contract is a smart contract repository built for the Mumbai Polygon network. It implements the ERC721 token standard and provides a decentralized name service for registering and resolving domain names associated with ERC721 tokens.

## Features

- **Domain Registration:** Users can register unique domain names associated with their ERC721 tokens on the Mumbai Polygon network.
- **Domain Resolution:** The contract allows users to resolve the registered domain names to retrieve associated token information.
- **Record Management:** Owners of registered domains can set and retrieve additional records associated with their domains.
- **Token Metadata:** Each registered token has metadata, including name, description, image, and length, stored in a JSON format.

## Prerequisites

To interact with the Shinobi-Name-Service-Contract, you'll need the following:

- A development environment with Solidity compiler support (e.g., Remix, Hardhat).
- Access to the Mumbai Polygon network.
- A wallet with MATIC (Polygon's native token) to pay for domain registration fees.

## Usage

1. Deploy the contract: Deploy the Shinobi-Name-Service-Contract on the Mumbai Polygon network, providing the desired top-level domain (TLD) during deployment.

2. Register a domain: Use the `register` function to register a domain name by providing the desired name and paying the registration fee in MATIC.

3. Retrieve domain information: Use the `getAddress` function to retrieve the address associated with a registered domain. Use the `getRecord` function to retrieve additional records associated with a domain.

4. Manage records (domain owners only): Domain owners can set and retrieve additional records using the `setRecord` and `getRecord` functions, respectively.

5. Explore all registered names: Use the `getAllNames` function to retrieve an array of all registered domain names.

## Example

```solidity
// Register a domain name
register("mydomain");

// Retrieve the address associated with a domain
getAddress("mydomain");

// Set a record associated with a domain (domain owner only)
setRecord("mydomain", "Additional record information");

// Retrieve the record associated with a domain
getRecord("mydomain");
```

Please note that this is a simplified example, and you may need to adapt the code and functions according to your specific requirements.

## License

This project is licensed under the [UNLICENSED](LICENSE) license. You are free to use, modify, and distribute the code as per your needs.

## Credits

The Shinobi-Name-Service-Contract makes use of the following libraries and dependencies:

- OpenZeppelin Contracts: [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- StringUtils Library: [StringUtils.sol](https://github.com/ensdomains/ens-contracts/blob/master/contracts/ethregistrar/StringUtils.sol)
- Base64 Library: [Base64.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Base64.sol)

Please refer to the respective sources for licensing information and additional details.

Feel free to modify and customize the [README.md](README.md) file according to your specific requirements and project details.
