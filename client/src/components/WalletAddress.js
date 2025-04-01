import React from "react";
import { useWeb3React } from "@web3-react/core";

const WalletAddress = () => {
  const { account } = useWeb3React();

  return (
    <div>
      <h3>Wallet Address: {account ? account : "Not connected"}</h3>
    </div>
  );
};

export default WalletAddress;
