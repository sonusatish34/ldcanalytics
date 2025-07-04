// utils/analyticsClient.js
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL_LDC,
    private_key: process.env.REACT_APP_API_KEY?.replace(/\\n/g, '\n'),
  },
});

const analyticsDataClientBng = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL_BNG,
    private_key: process.env.GOOGLE_PRIVATE_KEY_BNG?.replace(/\\n/g, '\n'),
  },
});

module.exports = { analyticsDataClient, analyticsDataClientBng };
