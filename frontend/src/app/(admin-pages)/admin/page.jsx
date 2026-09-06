import {
  Download,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  Star,
  Plus,
  Truck,
  CreditCard,
  MoreVertical,
  Filter,
} from "lucide-react";

const Page = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$48,295",
      change: "+12.5% ↑",
      icon: <DollarSign size={19} />,
      bg: "bg-emerald-100 text-emerald-600",
      isPositive: true,
    },
    {
      title: "Total Orders",
      value: "1,284",
      change: "+8.2% ↑",
      icon: <ShoppingBag size={19} />,
      bg: "bg-blue-100 text-blue-600",
      isPositive: true,
    },
    {
      title: "Total Customers",
      value: "5,643",
      change: "+23.1% ↑",
      icon: <Users size={19} />,
      bg: "bg-purple-100 text-purple-600",
      isPositive: true,
    },
    {
      title: "Products",
      value: "847",
      change: "-2.4% ↓",
      icon: <Package size={19} />,
      bg: "bg-amber-100 text-amber-600",
      isPositive: false,
    },
  ];

  const products = [
    {
      name: "Wireless Headphones",
      sales: "342 sales",
      amount: "$10,260",
      rating: "4.8",
      emoji: "🎧",
    },
    {
      name: "Smart Watch Pro",
      sales: "289 sales",
      amount: "$11,560",
      rating: "4.8",
      emoji: "⌚",
    },
    {
      name: "Laptop Backpack",
      sales: "245 sales",
      amount: "$7,350",
      rating: "4.8",
      emoji: "🎒",
    },
    {
      name: "USB-C Hub",
      sales: "198 sales",
      amount: "$3,960",
      rating: "4.8",
      emoji: "🔌",
    },
  ];

  const orders = [
    {
      id: "#ORD-001",
      customer: "Sarah Johnson",
      items: "3 items",
      amount: "$245.00",
      status: "Delivered",
      time: "2 hours ago",
    },
    {
      id: "#ORD-002",
      customer: "Michael Chen",
      items: "2 items",
      amount: "$189.50",
      status: "Processing",
      time: "4 hours ago",
    },
    {
      id: "#ORD-003",
      customer: "Emma Williams",
      items: "4 items",
      amount: "$329.00",
      status: "Delivered",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="min-h-screen  bg-gray-50 text-gray-800 p-6 space-y-6">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-200/60 p-1 rounded-lg text-sm font-medium text-gray-600">
            <button className="px-3 py-1 bg-white text-gray-900 rounded-md shadow-sm">
              Today
            </button>
            <button className="px-3 py-1 hover:text-gray-900">Week</button>
            <button className="px-3 py-1 hover:text-gray-900">Month</button>
          </div>

          <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-3"
            key={stat.title}
          >
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-lg ${stat.bg}`}>{stat.icon}</div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
              >
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-xs text-gray-500">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Sales Overview</h3>
            <button className="text-xs font-semibold text-blue-600 hover:underline">
              View All →
            </button>
          </div>

          <div className="h-48 flex flex-col justify-between">
            <div className="flex items-end justify-between h-36 border-b border-gray-100 pb-2 px-2 gap-2">
              {[35, 55, 45, 70, 50, 80, 65, 90, 58, 75, 68, 85].map(
                (height, index) => (
                  <div
                    key={index}
                    className="w-full bg-blue-50 hover:bg-blue-100 rounded-t h-full flex items-end transition-colors"
                  >
                    <div
                      className="w-full bg-blue-600 rounded-t transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ),
              )}
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 px-1 pt-2">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Top Products</h3>
            <button className="text-xs font-semibold text-blue-600 hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {products.map((product) => (
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                key={product.name}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl bg-gray-100 p-2 rounded-lg">
                    {product.emoji}
                  </span>
                  <div className="flex flex-col">
                    <strong className="text-xs font-semibold text-gray-900">
                      {product.name}
                    </strong>
                    <span className="text-[11px] text-gray-500">
                      {product.sales} • {product.amount}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold bg-amber-50 px-2 py-1 rounded">
                  <Star size={12} fill="currentColor" />
                  {product.rating}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Recent Orders</h3>
            <div className="flex gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-200">
                <Filter size={15} />
              </button>
              <button className="text-xs font-semibold text-blue-600 hover:underline">
                View All
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {orders.map((order) => (
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-gray-100 rounded-lg gap-3 hover:border-gray-200 transition-all"
                key={order.id}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                    <ShoppingBag size={16} />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-xs text-gray-900">
                      {order.id}
                    </strong>
                    <span className="text-xs text-gray-500">
                      {order.customer} • {order.items}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <strong className="text-xs text-gray-900">
                    {order.amount}
                  </strong>

                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {order.status}
                  </span>

                  <span className="text-xs text-gray-400">{order.time}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-900">Quick Actions</h3>
            <p className="text-xs text-gray-500 mb-4">
              Manage your store efficiently
            </p>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs py-2.5 rounded-lg transition-colors">
              <Plus size={16} />
              Add New Product
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs py-2.5 rounded-lg transition-colors">
              <Truck size={16} />
              Process Orders
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs py-2.5 rounded-lg transition-colors">
              <CreditCard size={16} />
              Manage Payments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
