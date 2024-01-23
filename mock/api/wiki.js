const RESOURCE = 'wiki';
const produceRequest = require('../produceRequest');

module.exports = {
  ...produceRequest(RESOURCE, ['wiki'], 'GET', (res, data) =>
    res.json({
      status: 200,
      message: 'success',
      data: data,
    })
  ),
};
