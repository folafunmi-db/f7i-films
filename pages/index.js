import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useAuth } from "react-use-auth";

const NavBar = tw.div``;

export default function Home() {
	const {
		isAuthenticated,
		isAuthenticating,
		login,
		logout,
		signup,
		user,
	} = useAuth();

	return (
		<>
			<Head>
				<title>Film App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar>{isAuthenticated() ? "Logged In" : "Logged Out"}</NavBar>
			<main>
				<h1>{isAuthenticating ? "Verifying ..." : "Done"}</h1>
				<button onClick={logout}>Logout</button>
				<button onClick={login}>Login</button>
				<button onClick={signup}>Signup</button>
				<h1>{!isAuthenticating ? user.name : "people"}</h1>
			</main>

			<footer>Footer</footer>
		</>
	);
}
