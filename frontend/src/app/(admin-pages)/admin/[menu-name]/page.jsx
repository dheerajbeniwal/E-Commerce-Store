import CategoryPage from "../../category/page";
import ColorsPage from "../../colors/page";
import DashboardPage from "../../dashboard/page";
import ProductsPage from "../../products/page";
import RoomsPage from "../../rooms/page";
import OrdersPage from "../../orders/page";

const menuPages = {
  dashboard: DashboardPage,
  category: CategoryPage,
  products: ProductsPage,
  "rooms-type": RoomsPage,
  rooms: RoomsPage,
  orders: OrdersPage,
  colors: ColorsPage,
};

export default async function AdminMenuPage({ params }) {
  const { "menu-name": menuName } = await params;
  const Page = menuPages[menuName.toLowerCase()];

  return Page ? <Page /> : <CategoryPage />;
}
