import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { themeChange } from "theme-change";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
