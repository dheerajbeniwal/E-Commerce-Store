const orders = [
  {
    id: "#ORD-001",
    customer: "Sarah Johnson",
    total: "$245.00",
    status: "Delivered",
  },
  {
    id: "#ORD-002",
    customer: "Michael Chen",
    total: "$189.50",
    status: "Processing",
  },
  {
    id: "#ORD-003",
    customer: "Emma Williams",
    total: "$329.00",
    status: "Delivered",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-800">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="mt-1 text-sm text-gray-500">
          Review and manage customer orders.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.total}
                </td>
                <td className="px-6 py-4 text-teal-600">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
