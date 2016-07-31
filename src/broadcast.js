const Type = require('./type').Type;
const util = require('util');

const noop = function() {}
const toRoom = (location, firstParty, secondParty, players) => config => {

  util.log('broadcast ->>>>', config);
  const firstPartyMsger = Type.isPlayer(firstParty) ?
    firstParty.say : noop;
  const secondPartyMsger = Type.isPlayer(secondParty) ?
    secondParty.say : noop;
  const thirdPartyMsger = msg => players.broadcastAt(msg, firstParty);

  if (config.firstPartyMessage) {
    firstPartyMsger(config.firstPartyMessage);
  }
  if (config.secondPartyMessage) {
    secondPartyMsger(config.secondPartyMessage);
  }
  if (config.thirdPartyMessage) {
    thirdPartyMsger(config.thirdPartyMessage);
  }

};

exports.Broadcast = { toRoom };
