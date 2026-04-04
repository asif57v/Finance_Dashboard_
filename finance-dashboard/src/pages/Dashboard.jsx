import SummaryCards from "../components/dashboard/SummaryCards";
import Charts from "../components/dashboard/Charts";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-500 text-sm">Overview of your finances</p>
      </div>

      {/* Cards */}
      <SummaryCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Charts />

        {/* Extra Card (Insights Preview) */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold mb-4">Quick Insight</h3>
          <p className="text-gray-600 text-sm">
            Track your spending patterns and manage your budget effectively.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            💡 Tip: Try reducing unnecessary expenses this week.
          </div>
        </div>
      </div>

    </div>
  );
}