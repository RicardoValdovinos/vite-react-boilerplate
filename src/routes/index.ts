import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/Home.tsx";
import MailPage from "@/pages/Mail.tsx";

export const Route = createFileRoute("/")({
	component: HomePage,
});

export const MailRoute = createFileRoute("/")({
	component: MailPage,
});