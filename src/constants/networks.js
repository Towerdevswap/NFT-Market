//import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  1: 'Ethereum',
  4: 'Rinkeby',
  3: 'Ropsten',
  5: 'Görli',
  42: 'Kovan',
  250: 'Fantom',
  4002: 'Fantom Testnet',
  137: 'Matic',
  80001: 'Matic Testnet',
  100: 'xDai',
  56: 'BSC',
  97: 'BSC Testnet',
  //[ChainId.MOONBASE]: 'Moonbase',
  43114: 'Avalanche',
  43113: 'Fuji',
  //[ChainId.HECO]: 'HECO',
  //[ChainId.HECO_TESTNET]: 'HECO Testnet',
  //[ChainId.HARMONY]: 'Harmony',
  //[ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
  5001: 'Mantletest',
  5000: 'Mantle Mainnet',
};

export const Contracts = {
  5001: {
    auction: '0xa600cB121981F5ddAd5b1fcaa6978e19FE64a8A2',
    sales: ' 0x78055d027e577d66571063f35D8bb10723C9b4F8',
    bundleSales: '0x4AA52F195E9510366E019Ac89Ab3a393d743220d',
    factory: '0x5c8368097Ffe1C0B63954f5826C5270557e204C4', //FantomNFTFactory
    privateFactory: '0xfa86e08b354e85325248275C9BE65022cB3ffa09', //FantomNFTFactoryPrivate
    artFactory: '0x59cf5dACe811646fa0d0b97acd714b1BA55E622d', //FantomArtFactory
    privateArtFactory: '0x4c9956e24CC0F720D44D4F6482f803e26c2E4537', //FantomArtFactoryPrivate
    zooBooster: '',
    zooElixir: '0xa0e0CD417D8C22B1811794757923fDaa24EAB02a',
    zooAlchemy: '0xa0e0CD417D8C22B1811794757923fDaa24EAB02a',
    zooGenes: '0xa0e0CD417D8C22B1811794757923fDaa24EAB02a',
    sasAirdrop: ''
  },
  5000: {
    auction: '',
    sales: '',
    bundleSales: '',
    factory: '', //FantomNFTFactory
    privateFactory: '', //FantomNFTFactoryPrivate
    artFactory: '', //FantomArtFactory
    privateArtFactory: '', //FantomArtFactoryPrivate
    zooBooster: '',
    zooElixir: '',
    zooAlchemy: '',
    zooGenes: '',
    sasAirdrop: ''
  },
};

/*

FantomAddressRegistry : 0xD28dd1E12516bE902a09c67654D4F996A3C5EEB5
FantomMarketplace : 0x78055d027e577d66571063f35D8bb10723C9b4F8
FantomBundleMarketplace : 0x4AA52F195E9510366E019Ac89Ab3a393d743220d
FantomArtFactory : 0x59cf5dACe811646fa0d0b97acd714b1BA55E622d
FantomArtFactoryPrivate : 0x4c9956e24CC0F720D44D4F6482f803e26c2E4537
FantomArtion : 0xB07b344795539d9d7e0908281f0688412Ae0FCfC // OriginX
FantomArtTradable : 0xc25ee2eB99E9F76645C34027a591C14A9E71B960 // OriginNFT
FantomArtTradablePrivate : 0x2aaEe02C21631a83eE8752Ae7f9F0c5d8D42eD40 // OriginNFT
FantomAuction : 0xa600cB121981F5ddAd5b1fcaa6978e19FE64a8A2
FantomNFTFactory : 0x5c8368097Ffe1C0B63954f5826C5270557e204C4
FantomNFTFactoryPrivate : 0xfa86e08b354e85325248275C9BE65022cB3ffa09
FantomNFTTradable : 0x6Ba1990F502D1C8C89548Bb8ffb833e595dF52D0
FantomNFTTradablePrivate : 0xAaeb28b19CBEea919227Ad83CbA9767AA339DEFf
FantomPriceFeed : 0x909Ca960beD6dA225c43F2eDb593cF112f1B6e7a
FantomTokenRegistry : 0x4c5766Cd715711921dd81b0BA30020EB56a7496A

*/
