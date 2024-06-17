import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { CommentIcon } from "../icons/sidebar/commenticon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { OdersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0 scroll">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon isActive={pathname === "/"} />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/users"}
                title="Users"
                icon={<AccountsIcon isActive={pathname === "/users"} />}
                href="/users"
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title="Products"
                icon={<ProductsIcon isActive={pathname === "/products"}/>}
                href="/products"
              />
              <SidebarItem
                isActive={pathname === "/review&comments"}
                title="Review and Comments"
                icon={<CommentIcon />}
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                href={["profile"]}
                title="Transactions"
              />
              <SidebarItem
                isActive={pathname === "/oders"}
                title="Oders"
                icon={<OdersIcon isActive={pathname === "/oders"}/>}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<ReportsIcon isActive={pathname === "/reports"}/>}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<SettingsIcon isActive={pathname === "/settings"}/>}
              />
            </SidebarMenu>

          </div>
        </div>
      </div>
    </aside>
  );
};
