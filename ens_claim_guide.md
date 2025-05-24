# ENS Subdomain Setup for TRUTH

### 1. Buy Your Main ENS Domain
Use [https://app.ens.domains](https://app.ens.domains) to buy a root domain (e.g. `truthdao.eth`).

### 2. Set Up Subdomains
Use the ENS app or write to the ENS registry to create subdomains:
- `join.truthdao.eth`
- `dao.truthdao.eth`
- `wallet.truthdao.eth`

### 3. Point to IPFS
Use ENS text records to point subdomains to your deployed IPFS hash.

Example:
```
Key: contenthash
Value: ipfs://QmYourHashHere
```

This gives users a clean Web3 URL: `https://join.truthdao.eth`
