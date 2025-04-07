# Kuverse Marketplace

The kuverse.app is an application designed to empower NFT (Non-Fungible Token) holders by providing them with a user-friendly platform to manage and monetize their NFT assets. The app will focus on the user experience, allowing for seamless and clean usability for everyone.

original repository: https://github.com/KuverseApp/kuverse-mvp

## Bugfix

1. I created the `WalletAddres` component that returns a `div` with the connected metamask address. And I placed it in `Profile.js`.

2. The bug occurred because the connector did not connect to the provider on each refresh. I solved the problem of logging out on page reload by storing the connectorIndex in localStorage. Then, in useEffect, I retrieved that index and used it to access the correct connector within the connectors array. This ensured that when I restarted the application, the connection was reestablished correctly without losing the login state.

#### Note: Since web3.js will be archived it is interesting to transition to Ethers.js
