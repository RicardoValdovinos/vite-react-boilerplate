import React from "react";

export const TanStackTableDevelopmentTools = import.meta.env.PROD
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-table-devtools").then((result) => ({
				default: result.ReactTableDevtools,
			}))
	  );
