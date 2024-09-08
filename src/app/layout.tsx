import type { Metadata } from "next";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
	title: "Deaanandagunawan.com",
	description: "Personal website of Dea Ananda Gunawan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-primary-dark">
			<body>{children}</body>
		</html>
	);
}
