import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		"https://api.thecatapi.com/v1/images/search?limit=21&api_key=live_2F69qqLovCi8LyeH6B6zPetMDbUkOJTp2UkBsKLsHL0y4puMETLgz28sfFgQwVY8"
	);
	const data = await res.json();

	return {
		props: { cats: data },
	};
};

const Cats: NextPage = ({ cats }: any) => {
	return (
		<div>
			<Head>
				<title>Cats List</title>
			</Head>
			<div className="text-center">
				<h1 className="text-5xl font-normal leading-normal mt-0 mb-2">Cats</h1>
			</div>
			<hr />
			<div>
				<section className="mt-4 mb-4 mx-auto w-10/12 relative">
					<div className="grid grid-cols-3 justify-center gap-3">
						{cats ? (
							cats.map((cat: any) => (
								<div key={cat.id} className="card shadow-xl">
									<figure>
										<img
											src={cat.url}
											alt={cat.id}
											className="w-full h-full"
										/>
									</figure>
								</div>
							))
						) : (
							<p className="mt-10 alert alert-info absolute left-1/2 -ml-20">
								Please wait loading images...
								<progress className="progress w-56"></progress>
							</p>
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Cats;
