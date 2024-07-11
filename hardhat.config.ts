import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: ["0x私钥放这里"]
    }
  }
};

export default config;
