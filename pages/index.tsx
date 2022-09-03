import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Homepage</title>
				<meta name="keywords" content="cats" />
			</Head>
			<div className="text-center">
				<h1 className="text-5xl font-normal leading-normal mt-0 mb-2">Homepage</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sed vero
					molestias voluptas, consectetur nobis hic assumenda reprehenderit alias id,
					necessitatibus earum! Ad, consequatur? Fugiat natus consectetur animi tenetur
					deleniti!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus
					quibusdam vitae ducimus neque, illo recusandae voluptates sint debitis, aperiam
					maxime corporis incidunt quas, cupiditate ipsum enim voluptatem dignissimos sed.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, est nisi.
					Ducimus distinctio deserunt commodi soluta eligendi voluptatibus. Vel labore
					officia itaque perspiciatis tempore perferendis vero, sint illo quidem cumque.
				</p>
			</div>
		</>
	);
};

export default Home;
