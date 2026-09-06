import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-xs text-gray-500">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-full md:w-80">
        <Search size={18} className="text-gray-400" />
        <input
          className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          placeholder="Search anything..."
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            A
          </div>
          <div className="flex flex-col text-left">
            <strong className="text-xs font-semibold text-gray-900">
              Admin
            </strong>
            <span className="text-[10px] text-gray-500">Super Admin</span>
          </div>
          <span className="text-xs text-gray-400">⌄</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
