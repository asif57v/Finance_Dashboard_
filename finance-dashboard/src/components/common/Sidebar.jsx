export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 h-screen bg-[#0f172a] text-white flex flex-col p-5">

      <h1 className="text-2xl font-bold mb-10">💰 FinTrack</h1>

      <nav className="flex flex-col gap-3 text-sm">

        <button 
          onClick={() => setPage("dashboard")} 
          className="hover:bg-gray-700 p-2 rounded transition"
        >
          📊 Dashboard
        </button>

        <button 
          onClick={() => setPage("transactions")} 
          className="hover:bg-gray-700 p-2 rounded transition"
        >
          💳 Transactions
        </button>

        <button 
          onClick={() => setPage("insights")} 
          className="hover:bg-gray-700 p-2 rounded transition"
        >
          💡 Insights
        </button>

      </nav>

      <div className="mt-auto text-xs text-gray-400">
        © 2026 FinTrack
      </div>
    </div>
  );
}