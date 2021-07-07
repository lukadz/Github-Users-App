import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ROUTES from "../consts/index";
import GuestGuard from "../components/GuestGuard/index";
import AuthGuard from "../components/AuthGuard/index";
import User from "../pages/User";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";

export default [
  { path: ROUTES.PAGE_SIGN_IN, exact: true, page: SignIn, guard: GuestGuard },
  { path: ROUTES.PAGE_SIGN_UP, exact: false, page: SignUp, guard: GuestGuard },
  {
    path: ROUTES.PAGE_DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_USER,
    exact: false,
    page: User,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_FAVORITE,
    exact: false,
    page: Favorites,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_SEARCH,
    exact: false,
    page: Search,
    guard: AuthGuard,
  },
];
