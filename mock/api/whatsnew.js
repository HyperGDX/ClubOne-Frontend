const RESOURCE = 'cards';
const produceRequest = require('../produceRequest');

module.exports = {
  ...produceRequest(RESOURCE, ['whatsNew/cards'], 'GET', (res, data) =>
    res.json({
      status: 200,
      message: 'success',
      data: data,
    })
  ),
};
