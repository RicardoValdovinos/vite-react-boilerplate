import React from "react";
import { isProduction } from "../../../common/utils";

export const TanStackTableDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-table-devtools").then((result) => ({
				default: result.ReactTableDevtools,
			}))
	  );
