import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: any) {
	return (
		<div className="h-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
