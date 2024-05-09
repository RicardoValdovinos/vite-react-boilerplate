import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type createRouter, RouterProvider } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { ThemeProvider } from "@/components/theme-provider";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<RouterProvider router={router} />
				{/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
			</ThemeProvider>
		</QueryClientProvider>
	);
};


export default App;
