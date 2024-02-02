const RESOURCE = 'posts';
const produceRequest = require('../produceRequest');

module.exports = {
  /**
   * method two : mock data with mockjs (http://mockjs.com/)
   */
  ...produceRequest(
    RESOURCE,
    ['forum/posts/channel/1', 'forum/posts/OSSPolicy'],
    'GET',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data,
      })
  ),

  ...produceRequest(RESOURCE, ['forum/posts'], 'POST', (res, data) =>
    res.json({
      status: 200,
      message: 'success',
    })
  ),
};
