const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const app = express();
const PORT = 4000;

// Allow requests from frontend (adjust origin if needed)
app.use(cors());

const credentials = JSON.parse(fs.readFileSync('./credentials.json', 'utf8'));
const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

app.get('/api/live-users', async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: 'properties/YOUR_GA4_PROPERTY_ID', // Replace this
      dimensions: [{ name: 'unifiedScreenName' }],
      metrics: [{ name: 'activeUsers' }],
    });

    const totalUsers = response.rows?.reduce((sum, row) => sum + parseInt(row.metricValues[0].value), 0) || 0;

    res.json({ activeUsers: totalUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
