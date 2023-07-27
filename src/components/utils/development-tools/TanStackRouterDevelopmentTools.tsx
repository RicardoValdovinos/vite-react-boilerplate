import React from "react";

export const TanStackRouterDevelopmentTools = import.meta.env.PROD
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/router-devtools").then((result) => ({
				default: result.TanStackRouterDevtools,
			}))
	  );
