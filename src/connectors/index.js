// import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
//import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
//import { Wallet } from 'ethers';
import { NetworkConnector } from './NetworkConnector';

//import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === '5001';

const RPC = isMainnet
  ? {
    [5000]: 'https://rpc.mantle.xyz',
  }
  : {
    [5001]: 'https://rpc.testnet.mantle.xyz',
  };

export const network = new NetworkConnector({
  defaultChainId: 5001,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
      5000, // fantom
    ]
    : [
      5001, // fantom testnet
    ],
});

export const walletconnect = new WalletConnectConnector({
  rpcUrl: 'https://rpc.testnet.mantle.xyz',
  chainId: 5001,
  networkId: 5001,
  rpc: {
    5000: 'https://rpc.testnet.mantle.xyz',
    5001: 'https://rpc.testnet.mantle.xyz',
  }
});

// export const walletlink = new WalletLinkConnector({
//   url: 'https://rpc.zookeeper.finance',
//   appName: 'OpenZoo',
//   appLogoUrl: ARTION_LOGO_URL,
// });
