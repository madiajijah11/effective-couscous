import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<div>NotFound</div>;
		</>
	);
};

export default NotFound;
