'use client';

import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, CheckCircle, Thermometer, Droplets, Battery, Wifi } from 'lucide-react';

// Types
interface SensorReading {
    time: string;
    temp: number;
    moisture: number;
}

export default function SmartRoofingDashboard() {
    const [data, setData] = useState<SensorReading[]>([]);
    const [currentReading, setCurrentReading] = useState<SensorReading | null>(null);
    const [alert, setAlert] = useState<boolean>(false);

    // Simulate realistic data
    useEffect(() => {
        // Generate initial history (last 24h)
        const initialData: SensorReading[] = [];
        const now = new Date();
        for (let i = 24; i >= 0; i--) {
            const timePoint = new Date(now.getTime() - i * 60 * 60 * 1000);
            const hour = timePoint.getHours();

            // Realistic patterns: Temp rises during day, Moisture varies slightly
            const baseTemp = 70;
            const dailyCycle = Math.sin(((hour - 6) * Math.PI) / 12) * 15; // Peak at 12pm (+6h offset)
            const noise = (Math.random() - 0.5) * 2;

            const temp = Math.round((baseTemp + dailyCycle + noise) * 10) / 10;
            const moisture = hour > 18 || hour < 6 ? 12 + Math.random() * 3 : 8 + Math.random() * 2; // Higher moisture at night (dew)

            initialData.push({
                time: `${hour.toString().padStart(2, '0')}:00`,
                temp,
                moisture: Math.round(moisture * 10) / 10
            });
        }
        setData(initialData);
        setCurrentReading(initialData[initialData.length - 1]);

        // Live updates
        const interval = setInterval(() => {
            setData(prev => {
                const lastTime = new Date();
                const newHour = lastTime.getHours();
                const newMin = lastTime.getMinutes();

                // Simulate "live" fluctuation
                const lastReading = prev[prev.length - 1];
                const newTemp = Math.round((lastReading.temp + (Math.random() - 0.5)) * 10) / 10;
                // Randomly spike moisture to test alert
                const spike = Math.random() > 0.95 ? 15 : 0;
                const newMoisture = Math.round((lastReading.moisture + (Math.random() - 0.5) + spike) * 10) / 10;

                const newReading = {
                    time: `${newHour.toString().padStart(2, '0')}:${newMin.toString().padStart(2, '0')}`,
                    temp: newTemp,
                    moisture: newMoisture
                };

                setCurrentReading(newReading);
                setAlert(newMoisture > 25); // Alert threshold

                return [...prev.slice(1), newReading];
            });
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    if (!currentReading) return <div className="p-8 text-center">Initializing Sensors...</div>;

    return (
        <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border transition-colors duration-500 overflow-hidden ${alert ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-200 dark:border-slate-700'}`}>
            {/* Dashboard Header */}
            <div className={`p-4 border-b flex justify-between items-start ${alert ? 'bg-red-50 dark:bg-red-900/20 border-red-100' : 'bg-gray-50 dark:bg-slate-900/50 border-gray-200 dark:border-slate-700'}`}>
                <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        Building A - Sector 4
                        {alert && <span className="animate-pulse text-red-600 text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-white rounded-full">Alert Triggered</span>}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1"><Wifi size={12} /> LTE-M Connected</span>
                        <span className="flex items-center gap-1"><Battery size={12} /> 94%</span>
                    </p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {alert ? <><AlertTriangle size={14} /> High Moisture</> : <><CheckCircle size={14} /> System Normal</>}
                </div>
            </div>

            {/* Alert Banner */}
            {alert && (
                <div className="bg-red-600 text-white px-4 py-2 text-sm font-medium flex justify-between items-center animate-pulse">
                    <span>⚠️ CRITICAL: Moisture levels exceed 25% threshold.</span>
                    <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs">Acknowledge</button>
                </div>
            )}

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                        <Thermometer size={18} />
                        <span className="text-sm font-medium">Avg Temp</span>
                    </div>
                    <p className="text-2xl font-bold">{currentReading.temp}°F</p>
                </div>
                <div className={`p-4 rounded-lg transition-colors ${alert ? 'bg-red-100 dark:bg-red-900/30 text-red-700' : 'bg-cyan-50 dark:bg-cyan-900/20'}`}>
                    <div className={`flex items-center gap-2 mb-1 ${alert ? 'text-red-700' : 'text-cyan-600'}`}>
                        <Droplets size={18} />
                        <span className="text-sm font-medium">Moisture</span>
                    </div>
                    <p className="text-2xl font-bold">{currentReading.moisture}%</p>
                </div>
            </div>

            {/* Charts */}
            <div className="p-4">
                <h4 className="text-sm font-medium mb-4 text-gray-500">24h History</h4>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2180B4" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#2180B4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} interval={4} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} domain={['dataMin - 5', 'dataMax + 5']} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                labelStyle={{ color: '#6B7280', fontSize: '12px' }}
                            />
                            <Area type="monotone" dataKey="temp" stroke="#2180B4" fillOpacity={1} fill="url(#colorTemp)" strokeWidth={2} name="Temperature (°F)" />
                            {/* Hidden moisture line for tooltip context if needed, or could map dual axis */}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
