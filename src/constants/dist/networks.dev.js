"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contracts = exports.NETWORK_LABEL = void 0;

var _sdk = require("@sushiswap/sdk");

var _NETWORK_LABEL;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NETWORK_LABEL = (_NETWORK_LABEL = {}, _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MAINNET, 'Ethereum'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.RINKEBY, 'Rinkeby'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.ROPSTEN, 'Ropsten'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.GÖRLI, 'Görli'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.KOVAN, 'Kovan'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FANTOM, 'Fantom'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FANTOM_TESTNET, 'Fantom Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MATIC, 'Matic'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MATIC_TESTNET, 'Matic Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.XDAI, 'xDai'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.BSC, 'BSC'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.BSC_TESTNET, 'BSC Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.MOONBASE, 'Moonbase'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.AVALANCHE, 'Avalanche'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.FUJI, 'Fuji'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HECO, 'HECO'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HECO_TESTNET, 'HECO Testnet'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HARMONY, 'Harmony'), _defineProperty(_NETWORK_LABEL, _sdk.ChainId.HARMONY_TESTNET, 'Harmony Testnet'), _defineProperty(_NETWORK_LABEL, 5000, 'Mantle Mainnet'),_defineProperty(_NETWORK_LABEL, 5001, 'Mantletest'), _NETWORK_LABEL);
exports.NETWORK_LABEL = NETWORK_LABEL;
var Contracts = {
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
  }
};
exports.Contracts = Contracts;
