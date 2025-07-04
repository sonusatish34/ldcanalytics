// api/analytics/by-city.js
const { analyticsDataClient } = require('../../utils/analyticsClient.js');

let cachedCityData = null;
let lastCityFetchTime = 0;
const CACHE_DURATION_MS = 60 * 1000;

export default async function handler(req, res) {
  const now = Date.now();

  if (cachedCityData && now - lastCityFetchTime < CACHE_DURATION_MS) {
    return res.status(200).json(cachedCityData);
  }

  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${process.env.REACT_APP_GOOGLE_CLIENT_EMAIL_LDC}`,
      dimensions: [{ name: 'city' }],
      metrics: [{ name: 'activeUsers' }],
    });

    const allCities = response.rows
      ?.map((row) => ({
        city: row.dimensionValues?.[0]?.value || 'Unknown',
        activeUsers: parseInt(row.metricValues?.[0]?.value || '0', 10),
      }))
      .sort((a, b) => b.activeUsers - a.activeUsers);

    cachedCityData = { cities: allCities };
    lastCityFetchTime = now;

    res.status(200).json(cachedCityData);
  } catch (err) {
    console.error('Error fetching city-based real-time data', err);
    res.status(500).send('City Analytics API error');
  }
}
