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
        <p>No data available</p>
      </div>
    );
  }

  // Format data
  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}