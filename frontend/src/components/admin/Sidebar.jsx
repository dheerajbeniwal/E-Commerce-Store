"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutGrid,
  Tag,
  ShoppingBag,
  BedDouble,
  Palette,
  Settings,
  PanelLeftClose,
  LogOut,
} from "lucide-react";

const mainMenu = [
  { label: "Dashboard", icon: LayoutGrid, href: "/admin" },
  { label: "Category", icon: Tag, href: "/admin/category" },
  { label: "Rooms-type", icon: BedDouble, href: "/admin/rooms-type" },
  { label: "Products", icon: ShoppingBag, href: "/admin/products" },
  { label: "Orders", icon: Palette, href: "/admin/orders" },
];

const systemMenu = [{ label: "Settings", icon: Settings, href: "/settings" }];

function isActiveRoute(pathname, href) {
  if (href === "/admin") {
    return pathname === "/admin";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={`flex h-screen flex-col justify-between border-r border-white/5 bg-[#0b1120] text-slate-300 shadow-2xl shadow-slate-950/20 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        <div className="flex items-center justify-between px-3 py-5">
          {!collapsed && (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal-400 to-emerald-600 shadow-lg shadow-emerald-900/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 12 15 9" />
                  <path d="M12 4v1" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight text-white">
                  AdminPanel
                </p>
                <p className="text-xs font-medium leading-tight text-teal-400">
                  Pro Dashboard
                </p>
              </div>
            </div>
          )}

          {collapsed && (
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal-400 to-emerald-600 shadow-lg shadow-emerald-900/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 12 15 9" />
                <path d="M12 4v1" />
              </svg>
            </div>
          )}

          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={toggleSidebar}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <PanelLeftClose
              className={`h-4 w-4 transition-transform duration-300 ${
                collapsed ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        <nav className="mt-4 px-3">
          {!collapsed && (
            <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-500">
              MAIN MENU
            </p>
          )}

          <ul className="space-y-1">
            {mainMenu.map(({ label, icon: Icon, href }) => {
              const isActive = isActiveRoute(pathname, href);

              return (
                <li key={label}>
                  <Link
                    href={href}
                    title={collapsed ? label : ""}
                    className={`group relative flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      collapsed ? "justify-center" : "gap-3"
                    } ${
                      isActive
                        ? "bg-emerald-500/10 text-teal-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-teal-400" />
                    )}
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive
                          ? "text-teal-300"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    />
                    {!collapsed && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          {!collapsed && (
            <p className="mt-6 px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-500">
              SYSTEM
            </p>
          )}

          <ul className="space-y-1">
            {systemMenu.map(({ label, icon: Icon, href }) => {
              const isActive = isActiveRoute(pathname, href);

              return (
                <li key={label}>
                  <Link
                    href={href}
                    title={collapsed ? label : ""}
                    className={`group relative flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      collapsed ? "justify-center" : "gap-3"
                    } ${
                      isActive
                        ? "bg-emerald-500/10 text-teal-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-teal-400" />
                    )}
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive
                          ? "text-teal-300"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    />
                    {!collapsed && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5 px-3 py-4">
        <div
          className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}
        >
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-teal-400 to-emerald-600 text-sm font-semibold text-white">
              A
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0b1120]" />
          </div>

          {!collapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">
                  Admin
                </p>
                <p className="truncate text-xs text-slate-500">Super Admin</p>
              </div>
              <button
                type="button"
                aria-label="Log out"
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
