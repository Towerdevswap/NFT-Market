"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contracts = exports.NETWORK_LABEL = void 0;

var _sdk = require("@sushiswap/sdk");

var _NETWORK_LABEL;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NETWORK_LABEL = (_NETWORK_LABEL = {}, _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MAINNET, 'Ethereum'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.RINKEBY, 'Rinkeby'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.ROPSTEN, 'Ropsten'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.GÖRLI, 'Görli'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.KOVAN, 'Kovan'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FANTOM, 'Fantom'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FANTOM_TESTNET, 'Fantom Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MATIC, 'Matic'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MATIC_TESTNET, 'Matic Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.XDAI, 'xDai'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.BSC, 'BSC'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.BSC_TESTNET, 'BSC Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MOONBASE, 'Moonbase'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.AVALANCHE, 'Avalanche'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FUJI, 'Fuji'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HECO, 'HECO'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HECO_TESTNET, 'HECO Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HARMONY, 'Harmony'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HARMONY_TESTNET, 'Harmony Testnet'), _defineProperty(_NETWORK_LABEL, 888, 'Wanchain'),_defineProperty(_NETWORK_LABEL, 5001, 'Mantletest'), _defineProperty(_NETWORK_LABEL, 999, 'Wanchain Testnet'), _NETWORK_LABEL);
exports.NETWORK_LABEL = NETWORK_LABEL;
var Contracts = {
  888: {
    auction: '0x8930F0CAFdA831181Fd3f5dCCCAEb0418b615b56',
    sales: '0xF6BFd75B6255B073AE36b66b099fF90DF0C57e22',
    bundleSales: '0xc1e06346D910067b2261e43FCd4FA523e9877670',
    factory: '0x8a5537bf123d95d0908be54ED46551bD41b36db7', //FantomNFTFactory
    privateFactory: '0xB3E21271194b2F6F6DA79E676e1fBC8aa088Bcfb', //FantomNFTFactoryPrivate
    artFactory: '0xa91D2825828BD40Ead230db7649F0bb8bAF894Cb', //FantomArtFactory
    privateArtFactory: '0x3e070bE392D6a54D4A9AF51d4A476f951aA3993B', //FantomArtFactoryPrivate
    zooBooster: '0x38034B2E6ae3fB7FEC5D895a9Ff3474bA0c283F6',
    zooElixir: '0xA67213608Db9D4BFFAc75baD01Ca5B1f4ad0724c',
    zooAlchemy: '0x23A9f34aa1e45f9E191A6615d24A781607a1bcb1'
  },
  5001: {
    auction: '0xEA94662576179559035a0C4099cc91C80bDEd3d0',
    sales: '0x749d1680a76f5ee54534E959d1B4Afb8fB1bC25a',
    bundleSales: '0x0f603eEE133D323F41FABf0ffCdAF1Ad82d89BbD',
    factory: '0xa9091494aEDA8Bd0B505D5f3a77B3f74c5c0b903', //FantomNFTFactory
    privateFactory: '0xDA1fB6597714bac00a8Db98Bd2CBFde122A4a3a4', //FantomNFTFactoryPrivate
    artFactory: '0x5C72BB2Ac4FB1AC95Bb912B05FC96A0d0FB2B0f3', //FantomArtFactory
    privateArtFactory: '0x8c89f6D67c5aAfF35467307fa21C2e91C42b8cC5', //FantomArtFactoryPrivate
    zooBooster: '',
    zooElixir: '',
    zooAlchemy: '',
    zooGenes: '',
    sasAirdrop: ''
  },
  999: {
    auction: '0x7e408f989deD4ac3ce2AdddD96b8E518Cbdc9aa0',
    sales: '0x271b096921Fa5891D48CF2bF43F42fc32Fa69fDf',
    bundleSales: '0x23fcfcE2ec048f3e78d2c8EFfE598F81B0330C3c',
    factory: '0x94e75dD5194b4Cd800fF8DB232dE2500ee3E785f',
    //FantomNFTFactory
    privateFactory: '0xB628A26232F5E24B771D268C8680877DA9e8D209',
    //FantomNFTFactoryPrivate
    artFactory: '0x01C619F89247284268DA8837ffEE8fBb5a78eA22',
    //FantomArtFactory
    privateArtFactory: '0xCaa6ff4Db9a762dcdc725D69DD5d9B392A66d933',
    //FantomArtFactoryPrivate
    zooBooster: '0xbCF9F4fae90dA7c4BB05DA6f9E9A9A39dc5Ce979',
    zooElixir: '0xDe3f8DA0Cf18b4ddc5e2f3d94ca3694c241507Bd',
    zooAlchemy: '0x910A1a6b133A6A869141722872Eb19609A16B511'
  }
};
exports.Contracts = Contracts;
