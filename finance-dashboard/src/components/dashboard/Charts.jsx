import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  // Safe check
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Balance Trend</h3>
        <span className="text-sm text-gray-500">Last Transactions</span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          {/* X Axis */}
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
          />

          {/* Y Axis with ₹ */}
          <YAxis 
            tickFormatter={(value) => `₹${value}`}
            tick={{ fontSize: 12 }}
          />

          {/* Tooltip (hover values) */}
          <Tooltip 
            formatter={(value) => [`₹${value}`, "Amount"]}
            contentStyle={{ borderRadius: "8px", border: "none" }}
          />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5, strokeWidth: 2 }}
            activeDot={{ r: 7 }}
            label={{ position: "top", fill: "#111827", fontSize: 12 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}