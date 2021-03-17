import Head from "next/head";
import tw, { styled } from "twin.macro";

const NavBar = tw.div``;

export default function Home() {
	return (
		<>
			<Head>
				<title>Film App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar>Nav Bar</NavBar>
			<main>Main</main>

			<footer>Footer</footer>
		</>
	);
}
