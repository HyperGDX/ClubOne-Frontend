const RESOURCE = 'license';
const produceRequest = require('../produceRequest');

module.exports = {
  ...produceRequest(RESOURCE, ['license/loginWithUsrPwd'], 'POST', (res, data) =>
    res.json({
      status: 200,
      message: 'success',
      data: data,
    })
  ),
};
