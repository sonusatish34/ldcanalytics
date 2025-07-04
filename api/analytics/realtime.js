// api/analytics/realtime.js
const { analyticsDataClient } = require('../../utils/analyticsClient');

export default async function handler(req, res) {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${process.env.REACT_APP_GA4_PROPERTY_ID_LDC}`,
      dimensions: [
        { name: 'minutesAgo' },
        { name: 'country' },
      ],
      metrics: [{ name: 'activeUsers' }],
      // dw
    });

    res.status(200).json(response);
  } catch (err) {
    console.error('Error fetching real-time data', err);
    res.status(500).send('Real-time API error');
  }
}
