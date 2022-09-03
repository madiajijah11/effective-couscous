import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<div className="text-center">
				<h1 className="text-5xl font-normal leading-normal mt-0 mb-2">About</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil et suscipit iure
					nisi sed ipsum commodi laudantium nam rerum quae laboriosam iste officiis,
					corrupti aut aliquam quod? Ut, sequi voluptatem!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam
					consequuntur eos voluptatem aliquam? Culpa nostrum minus dolorem iure modi nihil
					necessitatibus vitae sapiente, eos similique omnis pariatur quidem aliquam?
				</p>
			</div>
		</>
	);
};

export default About;
