'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Sprout, Droplets, Sun, Wind, AlertCircle } from 'lucide-react';

const growthData = [
    { day: 'Day 1', actual: 2, predicted: 2.1 },
    { day: 'Day 3', actual: 4.5, predicted: 4.8 },
    { day: 'Day 5', actual: 8.2, predicted: 8.5 },
    { day: 'Day 7', actual: 12.1, predicted: 12.4 },
    { day: 'Day 9', actual: 18.5, predicted: 19.0 },
    { day: 'Day 11', actual: 24.2, predicted: 25.1 },
    { day: 'Day 13', actual: 32.8, predicted: 33.5 },
];

const sensorData = [
    { time: '08:00', moisture: 45, light: 400 },
    { time: '10:00', moisture: 42, light: 850 },
    { time: '12:00', moisture: 38, light: 1200 },
    { time: '14:00', moisture: 35, light: 1150 },
    { time: '16:00', moisture: 60, light: 600 }, // Irrigation event
    { time: '18:00', moisture: 58, light: 200 },
];

export default function MicrogreenDashboard() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center bg-green-50 dark:bg-green-900/20">
                <div>
                    <h3 className="font-bold text-lg text-green-900 dark:text-green-100">Zone A: Arugula Batch #42</h3>
                    <p className="text-xs text-green-700 dark:text-green-300">Harvest Forecast: 3 Days • Confidence: 94%</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium border border-green-200">
                    <Sprout size={14} /> Optimal Growth
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                        <Droplets size={16} />
                        <span className="text-xs font-bold uppercase">Moisture</span>
                    </div>
                    <p className="text-xl font-bold">58%</p>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                    <div className="flex items-center gap-2 text-amber-600 mb-1">
                        <Sun size={16} />
                        <span className="text-xs font-bold uppercase">Light (PAR)</span>
                    </div>
                    <p className="text-xl font-bold">200 µmol</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center gap-2 text-purple-600 mb-1">
                        <Wind size={16} />
                        <span className="text-xs font-bold uppercase">VPD</span>
                    </div>
                    <p className="text-xl font-bold">0.8 kPa</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="flex items-center gap-2 text-red-600 mb-1">
                        <AlertCircle size={16} />
                        <span className="text-xs font-bold uppercase">Alerts</span>
                    </div>
                    <p className="text-xl font-bold">0 Active</p>
                </div>
            </div>

            {/* Charts */}
            <div className="p-4 grid gap-6">
                {/* Growth Prediction */}
                <div>
                    <h4 className="text-sm font-bold mb-3 text-gray-500 uppercase tracking-wider">Yield Prediction Model (XGBoost)</h4>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={growthData}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="actual" stroke="#10B981" fillOpacity={1} fill="url(#colorActual)" name="Actual Height (mm)" />
                                <Area type="monotone" dataKey="predicted" stroke="#6EE7B7" strokeDasharray="5 5" fill="none" name="Predicted (mm)" />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
