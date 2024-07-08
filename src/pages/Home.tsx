import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const changeLanguage = (lng: string | undefined) => {
		void i18n.changeLanguage(lng);
	};

	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<p className="text-white text-6xl">{t("title")}</p>
			<button
				onClick={() => {
					changeLanguage("pt");
				}}
			>
				pt
			</button>
			<button
				onClick={() => {
					changeLanguage("en");
				}}
			>
				en
			</button>
		</div>
	);
};
