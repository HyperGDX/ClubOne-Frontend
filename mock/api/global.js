const RESOURCE = 'global';
const produceRequest = require('../produceRequest');

module.exports = {
  /**
   * method two : mock data with mockjs (http://mockjs.com/)
   */
  [`GET global/whatIsNew/en`]: (_req, res) => {
    const file = path.join(__dirname, `../data/news.html`);
    const html = fs.readFileSync(file, 'utf-8');
    return res.send(html);
  },

  ...produceRequest(
    RESOURCE,
    [
      'promotionBanner',
      'company/license',
      'livedDashboard',
      'globalSettings',
      'globalSettings/categories/featureShow',
      'globalSettings/orgs/976a4c7c-eea3-4363-8f91-87b80d4e73d1/categories/featureShow',
      'globalSettings/orgs/8f0d85ab-affe-4e7d-b782-f83e9473103f/categories/featureShow',
      'globalSettings/orgs/undefined/categories/featureShow',
      'company/permissions',
      'globalSettings/highProfileUsers',
      'globalSettings/highProfileDomains',
      'globalSettings/services/1/approvedUsers',
      'globalSettings/internalDomains',
      'globalSettings/services/1/approvedHeaders',
      'globalSettings/orgs/976a4c7c-eea3-4363-8f91-87b80d4e73d1/services/1/blockedLists',
      'globalSettings/services/1/blockedLists',
      'globalSettings/highProfileDomains',
      'org/gmailInline/protectionInfo',
      'globalSettings/suspiciousObjects/enabledStatus',
      'globalSettings/internalDomains',
      'globalSettings/services/gmailInline/protectionSettings',
      'globalSettings/services/exchangeInline/otherProtectionSettings',
      'globalSettings/services/exchangeInline/protectionSettings',
      'globalSettings/services/teamsChat/appId',
      'globalSettings/services/teamsChat/licensingModelSettings',
      'globalSettings/clickTimeProtection/configuration',
      'globalSettings/passwordExtractionRules',
      'notificationMailbox',
      'globalSettings/recipientGroups/types/0',
      'globalSettings/recipientGroups',
      'globalSettings/notificationEmailSettings',
      'globalSettings/nameSpoofingDetectionExceptionList',
      'globalSettings/highProfileExceptionUserList',
      'globalSettings/predictiveMachineLearningExceptionList',
      'globalSettings/internalDomains',
      'globalSettings/services/21/approvedHeaders',
      'globalSettings/microsoftIdentityProtection/conditionalAccessPolicy',
      'globalSettings/microsoftIdentityProtection/conditionalAccessPolicy/users',
    ],
    'GET',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: data,
      })
  ),

  ...produceRequest(
    RESOURCE,
    [
      'globalSettings/highProfileUsers',
      'globalSettings/recipientGroups/1',
      'globalSettings/services/1/approvedHeaders',
      'globalSettings/nameSpoofingDetectionExceptionList',
      'globalSettings/highProfileExceptionUserList',
      'globalSettings/internalDomains',
    ],
    'DELETE',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: {
          deleteCount: 1,
        },
      })
  ),

  ...produceRequest(
    RESOURCE,
    [
      'globalSettings/highProfileUsers',
      'globalSettings/services/1/approvedUsers',
      'globalSettings/services/gmailInline/protectionSettings',
      'globalSettings/services/exchangeInline/otherProtectionSettings',
      'globalSettings/services/exchangeInline/inlineProtectionSettings',
      'globalSettings/services/teamsChat/licensingModelSettings',
      'globalSettings/clickTimeProtection/configuration',
      'globalSettings/passwordExtractionRules/test',
      'globalSettings/passwordExtractionRules/batchDelete',
      'globalSettings/passwordExtractionRulesSwitch',
      'globalSettings/passwordExtractionRules',
      'globalSettings/recipientGroups/1/applyToAllPolicies',
      'globalSettings/recipientGroups',
      'globalSettings/services/1/approvedHeaders',
      'globalSettings/nameSpoofingDetectionExceptionList',
      'globalSettings/highProfileExceptionUserList',
      'globalSettings/internalDomains',
    ],
    'POST',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: data,
      })
  ),

  ...produceRequest(
    RESOURCE,
    [
      'globalSettings/services/1/approvedUsers',
      'globalSettings/highProfileDomains',
    ],
    'DELETE',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: data,
      })
  ),

  ...produceRequest(
    RESOURCE,
    [
      'globalSettings/services/1/approvedHeaders/enabledStatus',
      'globalSettings/services/1/blockedLists/enabledStatus',
    ],
    'PATCH',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: data,
      })
  ),

  ...produceRequest(
    RESOURCE,
    [
      'globalSettings/recipientGroups',
      'globalSettings/notificationEmailSettings',
      'globalSettings/suspiciousObjects/enabledStatus',
      'globalSettings/highProfileDomains',
    ],
    'PUT',
    (res, data) =>
      res.json({
        status: 200,
        message: 'success',
        data: data,
      })
  ),
};
