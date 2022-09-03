import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<div className="text-center">
				<h1 className="text-9xl">404</h1>
				<h1 className="text-7xl">Ooooppppssss.....</h1>
				<h1 className="text-7xl">
					Page not found, go back to <Link href="/">Homepage</Link>
				</h1>
			</div>
		</>
	);
};

export default NotFound;
