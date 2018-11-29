const ethCloneTxdecoder = require('./decodeETHCloneUtils');
const btcCloneTxdecoder = require('./decodeBTCCloneUtils');
const envConfig = require('../../config/envConfig');
const networks = require('../networks/networks');

const decodeTx = (rawTx, environment, coin) => {
  environment = environment || envConfig.get('blockchain_environment');
  coin = coin || envConfig.get('coin_symbol');

  switch (coin) {
    case 'ETH':
    case 'ETC':
      return ethCloneTxdecoder(rawTx);
    // for all the bitcoin clones
    default:
      return btcCloneTxdecoder(rawTx, networks[coin][environment]);
  }
};

module.exports = decodeTx;
