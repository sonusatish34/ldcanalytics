// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// const app = express();
// const PORT = 4000;

// // // Allow requests from frontend (adjust origin if needed)
// // app.use(cors());

// // const credentials = JSON.parse(fs.readFileSync('./credentials.json', 'utf8'));
// // const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

// // app.get('/api/live-users', async (req, res) => {
// //   try {
// //     const [response] = await analyticsDataClient.runRealtimeReport({
// //       property: 'properties/YOUR_GA4_PROPERTY_ID', // Replace this
// //       dimensions: [{ name: 'unifiedScreenName' }],
// //       metrics: [{ name: 'activeUsers' }],
// //     });

// //     const totalUsers = response.rows?.reduce((sum, row) => sum + parseInt(row.metricValues[0].value), 0) || 0;

// //     res.json({ activeUsers: totalUsers });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Error fetching data' });
// //   }
// // });

// // app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// // server.js
// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// const app = express();
// app.use(cors());

// const analyticsDataClient = new BetaAnalyticsDataClient({
//   keyFilename: "credentials.json", // 👈 your credentials file
// });

// app.get("/api/analytics", async (req, res) => {
//   try {
//     const [response] = await analyticsDataClient.runReport({
//       property: `properties/411346119`, // 👈 replace with your GA4 property ID
//       dateRanges: [{ startDate: "27-08-2025", endDate: "27-08-2025" }],
//       dimensions: [{ name: "city" }],
//       metrics: [{ name: "activeUsers" }],
//     });

//     // Extract useful data
//     const cityData = response.rows.map(row => ({
//       city: row.dimensionValues[0].value,
//       users: parseInt(row.metricValues[0].value, 10),
//     }));

//     // Send it to frontend
//     res?.json({
//       totalUsers: cityData.reduce((acc, cur) => acc + cur.users, 0),
//       usersPerMinute: Array.from({ length: 30 }, (_, i) => ({
//         minute: i + 1,
//         users: Math.floor(Math.random() * 20 + 5), // mock data
//       })),
//       cityData,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch analytics data" });
//   }
// });

// const PORT = 4000;
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


// server.js
// import express from "express";
// import cors from "cors";
// import { BetaAnalyticsDataClient } from "@google-analytics/data";
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const app = express();
app.use(cors());

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "credentials.json", // Your service account file
});
const analyticsDataClientBng = new BetaAnalyticsDataClient({
  keyFilename: "creddozzy.json", // Your service account file
});

const GA4_PROPERTY_ID = "418895192"; // replace with your GA4 Property ID
const GA4_PROPERTY_ID_BNG = "459883853"; // replace with your GA4 Property ID

app.get("/api/analytics", async (req, res) => {
  try {
    const [report] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dimensions: [{ name: "city" }],
      metrics: [{ name: "activeUsers" }],
    });

    const countryData = report.rows?.map((row) => ({
      country: row.dimensionValues[0].value,
      users: parseInt(row.metricValues[0].value),
    })) || [];

    res.json({
      totalUsers: countryData.reduce((sum, r) => sum + r.users, 0),
      usersPerMinute: Array.from({ length: 30 }, (_, i) => ({
        minute: i + 1,
        users: Math.floor(Math.random() * 20 + 1), // Simulated per-minute data
      })),
      countryData,
    });
  } catch (error) {
    console.error("Error fetching GA data:", error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

app.get("/api/analytics-dozzy", async (req, res) => {
  try {
    const [report] = await analyticsDataClientBng.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dimensions: [{ name: "city" }],
      metrics: [{ name: "activeUsers" }],
    });

    const countryData = report.rows?.map((row) => ({
      country: row.dimensionValues[0].value,
      users: parseInt(row.metricValues[0].value),
    })) || [];

    res.json({
      totalUsers: countryData.reduce((sum, r) => sum + r.users, 0),
      usersPerMinute: Array.from({ length: 30 }, (_, i) => ({
        minute: i + 1,
        users: Math.floor(Math.random() * 20 + 1), // Simulated per-minute data
      })),
      countryData,
    });
  } catch (error) {
    console.error("Error fetching GA data:", error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

app.get("/analytics/realtime", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dimensions: [
        { name: "minutesAgo" },
        { name: "country" },
      ],
      metrics: [{ name: "activeUsers" }],
    });

    res.json(response);
  } catch (err) {
    console.error("Error fetching real-time data", err);
    res.status(500).send("Real-time API error");
  }
});
app.get("/analytics/realtimedozzy", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID_BNG}`,
      dimensions: [
        { name: "minutesAgo" },
        { name: "country" },
      ],
      metrics: [{ name: "activeUsers" }],
    });

    res.json(response);
  } catch (err) {
    console.error("Error fetching real-time data", err);
    res.status(500).send("Real-time API error");
  }
});

// app.get("/analytics/by-city", async (req, res) => {
//   try {
//     const [response] = await analyticsDataClient.runRealtimeReport({
//       property: `properties/${GA4_PROPERTY_ID}`,
//       dimensions: [{ name: "city" }],
//       metrics: [{ name: "activeUsers" }],
//     });

//     // Filter specific cities
//     const citiesToInclude = ["Hyderabad", "warangal", "Vijayawada", "Visakhapatnam"]; // Vizag = Visakhapatnam
//     const filteredRows = response.rows?.filter((row) =>
//       citiesToInclude.includes(row.dimensionValues?.[0]?.value)
//     );

//     res.json({
//       cities: filteredRows?.map((row) => ({
//         city: row.dimensionValues?.[0]?.value,
//         activeUsers: row.metricValues?.[0]?.value,
//       })),
//     });
//   } catch (err) {
//     console.error("Error fetching city-based real-time data", err);
//     res.status(500).send("City Analytics API error");
//   }
// });


// old uosude
let cachedCityData = null;
let lastCityFetchTime = 0;
const CACHE_DURATION_MS = 60 * 1000; // 1 minute

app.get("/analytics/by-city", async (req, res) => {
  const now = Date.now();

  // Use cache if it's still valid
  if (cachedCityData && now - lastCityFetchTime < CACHE_DURATION_MS) {
    return res.json(cachedCityData);
  }

  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dimensions: [{ name: "city" }],
      metrics: [{ name: "activeUsers" }],
    });

    const allCities = response.rows
      ?.map((row) => ({
        city: row.dimensionValues?.[0]?.value || "Unknown",
        activeUsers: parseInt(row.metricValues?.[0]?.value || "0", 10),
      }))
      .sort((a, b) => b.activeUsers - a.activeUsers);

    cachedCityData = { cities: allCities };
    lastCityFetchTime = now;

    res.json(cachedCityData);
  } catch (err) {
    console.error("Error fetching city-based real-time data", err);
    res.status(500).send("City Analytics API error");
  }
});


let cachedCityDataBng = null;
let lastCityFetchTimeBng = 0;
const CACHE_DURATION_MSBng = 60 * 1000; // 1 minute

app.get("/analytics/by-city-bangalore", async (req, res) => {
  const now = Date.now();

  // Use cache if it's still valid
  if (cachedCityDataBng && now - lastCityFetchTimeBng < CACHE_DURATION_MSBng) {
    return res.json(cachedCityDataBng);
  }

  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID_BNG}`,
      dimensions: [{ name: "city" }],
      metrics: [{ name: "activeUsers" }],
    });

    const allCities = response.rows
      ?.map((row) => ({
        city: row.dimensionValues?.[0]?.value || "Unknown",
        activeUsers: parseInt(row.metricValues?.[0]?.value || "0", 10),
      }))
      .sort((a, b) => b.activeUsers - a.activeUsers);

    cachedCityDataBng = { cities: allCities };
    lastCityFetchTimeBng = now;

    res.json(cachedCityDataBng);
  } catch (err) {
    console.error("Error fetching city-based real-time data", err);
    res.status(500).send("City Analytics API error");
  }
});







app.get("/analytics/overview", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [
        { startDate: "30daysAgo", endDate: "today" },
        { startDate: "7daysAgo", endDate: "today" },
        { startDate: "yesterday", endDate: "today" }
      ],
      metrics: [{ name: "activeUsers" }]
    });

    res.json(response);
  } catch (err) {
    console.error("Error fetching analytics data", err);
    res.status(500).send("Analytics error");
  }
});
app.get("/analytics/overview", async (req, res) => {
  try {
    const [response] = await analyticsDataClientBng.runReport({
      property: `properties/${GA4_PROPERTY_ID_BNG}`,
      dateRanges: [
        { startDate: "30daysAgo", endDate: "today" },
        { startDate: "7daysAgo", endDate: "today" },
        { startDate: "yesterday", endDate: "today" }
      ],
      metrics: [{ name: "activeUsers" }]
    });

    res.json(response);
  } catch (err) {
    console.error("Error fetching analytics data", err);
    res.status(500).send("Analytics error");
  }
});

app.listen(4000, () => {
  console.log("GA4 Backend running on http://localhost:4000");
});


