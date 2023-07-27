import { Route } from "@tanstack/router";
import Home from "../pages/Home";
import { rootRoute } from "./RootRoute";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
});
