import { useForm } from "react-hook-form";
import type { FunctionComponent } from "../common/types";
import { ReactHookFormDevelopmentTools } from "../components/utils/development-tools/ReactHookFormDevelopmentTools";

const Home = (): FunctionComponent => {
	const { control } = useForm();

	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<p className="text-white text-6xl">Hello, world!</p>
			<ReactHookFormDevelopmentTools control={control} />
		</div>
	);
};

export default Home;
