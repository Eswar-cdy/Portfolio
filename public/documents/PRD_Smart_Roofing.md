# Smart Roofing Performance Monitor - PRD

## 1. Problem Definition
**The Problem:** Commercial flat roofs are prone to leaks and insulation failure. These issues are often invisible until water penetrates the building, causing expensive damage to inventory and equipment.
**Impact:** Emergency roof repairs cost 3x more than preventative maintenance. Unplanned downtime affects business operations.
**Target Audience:** Commercial Roofing Contractors (who want to offer maintenance services) and Facility Managers (who manage assets).

## 2. Solution Overview
**Vision:** An IoT-enabled dashboard that visualizes real-time temperature and moisture data from roof sensors, predicting failures before they happen.
**Value Prop:** "See inside your roof." Transform roofing from a reactive repair expense to a proactive managed asset.

## 3. User Stories
| ID | As a... | I want to... | So that... | Priority |
| :--- | :--- | :--- | :--- | :--- |
| P1 | Facility Manager | See a "Health Score" for my roof | I know if I need to take action immediately | High |
| P2 | Contractor | Receive an email alert when moisture > 20% | I can dispatch a crew to the exact location | High |
| P3 | Data Analyst | Export historical sensor data | I can correlate weather events with roof performance | Medium |

## 4. Technical Specifications
*   **Sensors:** Temperature/Humidity sensors (simulated for this project).
*   **Backend:** Python script to generate synthetic sensor data.
*   **Frontend:** Next.js Dashboard with Recharts.
*   **Data Structure:** `timestamp`, `sensor_id`, `temperature_f`, `moisture_pct`, `battery_level`.

## 5. Success Metrics
*   **Detection Time:** Reduce leak detection time from weeks to hours.
*   **Cost Savings:** Potential to save clients $15k+ per incident in water damage.
