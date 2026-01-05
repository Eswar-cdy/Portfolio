import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

def generate_sensor_data(days=7, interval_minutes=60):
    """
    Generates synthetic sensor data for a smart roof monitoring system.
    Simulates daily temperature cycles and a potential moisture leak event.
    """
    start_time = datetime.now() - timedelta(days=days)
    timestamps = [start_time + timedelta(minutes=i*interval_minutes) for i in range(days * 24 * (60 // interval_minutes))]
    
    data = []
    
    for ts in timestamps:
        # Simulate daily temperature cycle (cooler at night, hotter at day)
        hour = ts.hour
        base_temp = 65
        temp_fluctuation = 15 * np.sin((hour - 6) * np.pi / 12) # Peak at 12 PM
        noise = random.uniform(-2, 2)
        temp = base_temp + temp_fluctuation + noise
        
        # Simulate moisture (normally low, but spikes during a "leak event")
        moisture = random.uniform(5, 12) # Normal range 5-12%
        
        # Simulate a leak event starting 2 days ago
        if ts > (datetime.now() - timedelta(days=2)):
            moisture += random.uniform(15, 30) # Spike to 20-40%
            
        data.append({
            "timestamp": ts.strftime("%Y-%m-%d %H:%M:%S"),
            "sensor_id": "ROOF-SENSOR-01",
            "temperature_f": round(temp, 1),
            "moisture_pct": round(moisture, 1),
            "status": "CRITICAL" if moisture > 20 else "NORMAL"
        })
        
    return pd.DataFrame(data)

if __name__ == "__main__":
    df = generate_sensor_data()
    filename = "roof_sensor_data.csv"
    df.to_csv(filename, index=False)
    print(f"Successfully generated {len(df)} records of sensor data to {filename}")
    print(df.head())
