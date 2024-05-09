import { accounts, mails } from "@/features/mail/data.tsx";
import { Mail } from "@/components/mail/mail.tsx";


export default function MailPage() {
	// const layout = localStorage.getItem("react-resizable-panels:layout");
	// const collapsed = localStorage.getItem("react-resizable-panels:collapsed");

	const defaultLayout = [265, 440, 655]; // layout ? JSON.parse(layout) as Array<number> :
	const defaultCollapsed = false; //collapsed ? JSON.parse(collapsed) as boolean : false;

	return (
		<>
			<div className="md:hidden">
				<img
					src=""
					width={1280}
					height={727}
					alt="Mail"
					className="hidden dark:block"
				/>
				<img
					src=""
					width={1280}
					height={727}
					alt="Mail"
					className="block dark:hidden"
				/>
			</div>
			<div className="hidden flex-col md:flex">
				<Mail
					accounts={accounts}
					mails={mails}
					defaultLayout={defaultLayout}
					defaultCollapsed={defaultCollapsed}
					navCollapsedSize={4}
				/>
			</div>
		</>
	);
}