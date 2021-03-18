import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useSession } from "next-auth/client";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import Latest from "../components/Latest";
import { useGetMovies } from "./api/hello.js";

const Shell = styled.div`
	background-color: #8d54e7;
	/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ecb682'/%3E%3Cstop offset='1' stop-color='%23ecb682' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e7959b'/%3E%3Cstop offset='1' stop-color='%23e7959b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e883b6'/%3E%3Cstop offset='1' stop-color='%23e883b6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ebe494'/%3E%3Cstop offset='1' stop-color='%23ebe494' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ee776f'/%3E%3Cstop offset='1' stop-color='%23ee776f' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23de96e3'/%3E%3Cstop offset='1' stop-color='%23de96e3' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E"); */
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
	${tw`w-full min-h-screen flex flex-col gap-4 justify-around items-center`}
`;

const Container = styled.div`
	width: 90%;
	min-width: 250px;
	min-height: 90%;
	@media screen and (max-width: 500px) {
		width: 96%;
	}

	${tw`bg-white flex flex-col shadow-lg my-4 rounded-xl px-4 py-3 font-m text-sm font-normal`};
`;

const Credentials = tw.div`flex font-m mb-4 text-white justify-center items-center gap-2 font-medium`;

const Fola = styled.p`
	${tw`relative font-bold text-white  cursor-pointer`}

	&::before {
		content: "";
		position: absolute;
		background: white;
		height: 2px;
		width: 100%;
		bottom: 0;
		transform: scaleX(0);
		transition: 0.2s ease-in;
	}
	&:hover {
		transition: 0.2s ease-in;
		&::before {
			transform: scaleX(1);
			transition: 0.2s ease-in;
		}
	}
`;

const Main = tw.main`w-full flex flex-col gap-4`;

const Footer = tw.footer`flex`;

const MovieList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	grid-gap: 2rem;
	width: 100%;
`;

const MovieSection = tw.div`w-full flex flex-col gap-4 font-bold font-exo text-2xl justify-start items-start`;

export default function Home() {
	const [session, loading] = useSession();
	const { movies, isLoading, isError, url } = useGetMovies(1);

	console.log(movies);
	return (
		<Shell>
			<Head>
				<title>Film App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<NavBar />
				<Main>
					<Latest />
					<MovieSection>
						MOST POPULAR MOVIES
						{isLoading ? (
							"Loading..."
						) : (
							<MovieList>
								{movies.results.map((item, idx) => (
									<Movie
										url={url}
										image={item.backdrop_path}
										title={item.original_title}
										id={item.id}
										vote={item.vote_average}
									/>
								))}
							</MovieList>
						)}
					</MovieSection>
				</Main>

				<Footer>Footer</Footer>
			</Container>
			<Credentials>
				Made with 💜 by{" "}
				<Link href="https://github.com/folafunmi-db">
					<Fola>Folafunmi</Fola>
				</Link>
			</Credentials>
		</Shell>
	);
}
