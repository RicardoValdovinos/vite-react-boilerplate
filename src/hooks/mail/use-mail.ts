import { atom, useAtom } from "jotai";
import type { Mail } from "@/features/mail/data.tsx";
import { mails } from "@/features/mail/data.tsx";


type Config = {
	selected: Mail["id"] | null;
}

const configAtom = atom<Config>({
	selected: mails?.[0]?.id ?? null,
});

export function useMail() {
	return useAtom(configAtom);
}