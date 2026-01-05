# Smart Roofing Performance Monitor - PRD

## 1. Problem Definition
**The Problem:** Commercial flat roofs are prone to leaks and insulation failure. These issues are often invisible until water penetrates the building, causing expensive damage to inventory and equipment.
**Impact:** Emergency roof repairs cost 3x more than preventative maintenance. Unplanned downtime affects business operations.
**Target Audience:** Commercial Roofing Contractors (who want to offer maintenance services) and Facility Managers (who manage assets).

## 2. Solution Overview
**Vision:** An IoT-enabled dashboard that visualizes real-time temperature and moisture data from roof sensors, predicting failures before they happen.
**Value Prop:** "See inside your roof." Transform roofing from a reactive repair expense to a proactive managed asset.

## 3. User Personas
### Primary: Sarah - The Facility Manager
*   **Role:** Manages a 500,000 sq ft logistics center.
*   **Pain Point:** Fear of water damage destroying inventory during heavy storms. Hate late-night emergency calls.
*   **Goal:** Knows exactly which part of the roof is vulnerable before it leaks.
*   **Success:** "I check the dashboard once a week, and I sleep better when it rains."

### Secondary: Mike - The Roofing Contractor
*   **Role:** Owner of "Apex Commercial Roofing".
*   **Pain Point:** Losing maintenance contracts to cheaper competitors.
*   **Goal:** Differentiate by offering "Tech-Enabled Maintenance Packages".
*   **Success:** Using the data to justify preventative repair quotes to clients.

## 4. User Stories
| ID | As a... | I want to... | So that... | Priority |
| :--- | :--- | :--- | :--- | :--- |
| P1 | Facility Manager | See a "Health Score" for my roof | I know if I need to take action immediately | High |
| P2 | Contractor | Receive an SMS alert when moisture > 25% | I can dispatch a crew before the leak spreads | High |
| P3 | Data Analyst | Export historical sensor data | I can correlate weather events with roof performance | Medium |

## 5. Technical Specifications
*   **Sensors:** DHT22 (Temp/Humidity) + Capacitive Moisture Sensor.
*   **Connectivity:** MQTT over LTE-M (simulated for demo).
*   **Backend:** Python FastAPI for data ingestion.
*   **Frontend:** Next.js Dashboard with Recharts.
*   **Data Structure:** `timestamp`, `sector_id`, `temperature_f`, `moisture_pct`, `battery_level`.

## 6. Success Metrics
*   **Detection Time:** Reduce leak detection time from **weeks** to **hours**.
*   **Cost Savings:** Potential to save clients **$15k+ per incident** in water damage remediation.
*   **Alert Accuracy:** < 5% False Positive rate (calibrated to day/night humidity cycles).
