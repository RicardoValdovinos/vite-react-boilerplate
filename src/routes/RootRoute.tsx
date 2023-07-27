import { Outlet, RootRoute } from "@tanstack/router";
import type { FunctionComponent } from "../common/types";

export const rootRoute = new RootRoute({
	component: (): FunctionComponent => <Outlet />,
});
