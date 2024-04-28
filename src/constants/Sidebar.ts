import { GoProjectTemplate } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Results from "../pages/Results";
import Users from "../pages/Users";
import Sessions from "../pages/Sessions";
import MyAccount from "../pages/MyAccount";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    shortPath: "/",
    Icon: IoHomeOutline,
    Element: Dashboard,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    shortPath: "/users",
    Icon: MdOutlineCampaign,
    Element: Users,
  },

  {
    title: "Results",
    path: "/dashboard/results",
    shortPath: "/results",
    Icon: MdOutlineAccountTree,
    Element:Results,
  },
  {
    title: "Sessions",
    path: "/dashboard/sessions",
    shortPath: "/sessions",
    Icon: GoProjectTemplate,
    Element: Sessions,
  },
  {
    title: "MyAccount",
    path: "/dashboard/myaccount",
    shortPath: "/myaccount",
    Icon: IoIosNotifications,
    Element: MyAccount,
  },
  {
    title: "Logout",
    path: "/logout",
    shortPath: "/logout",
    Icon: CiLogout,
    Element: Logout,
  }
];

