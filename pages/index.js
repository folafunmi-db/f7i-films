import Head from "next/head";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import Latest from "../components/Latest";
import { useGetMovies } from "./api/hello.js";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SpinnerDotted } from "spinners-react";

const Shell = styled.div`
	background-color: #7c3aed;
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
	${tw`relative font-bold  text-yellow-400 cursor-pointer`}

	&::before {
		content: "";
		position: absolute;
		background: #fbbf24;
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
	margin-bottom: 2rem;
`;

const MovieSection = tw.div`w-full flex flex-col gap-4 font-bold font-exo text-2xl justify-start items-start`;

const HelpDiv = styled.div`
	background-size: cover;
	background-position: center;
	background: #7c3aed;
	min-height: 24rem;
	${tw`shadow-xl rounded-lg w-full bg-center text-white my-4 bg-cover flex flex-col sm:flex-row justify-center items-center px-6 py-4 gap-4`}
`;

const Button = tw.button` text-white bg-purple-600 shadow-lg flex justify-center items-center rounded-lg p-4 cursor-pointer hover:bg-purple-500 focus:outline-none`;

const Group = tw.div`flex justify-around items-center mb-4`;

function generateArrayOfNumbers(numbers) {
	return [...Array(numbers).keys()].slice(1);
}

export default function Home() {
	const [pageIndex, setPageIndex] = useState(1);
	const { movies, isLoading, isError, url } = useGetMovies(pageIndex);

	const emtpy = generateArrayOfNumbers(20);

	const nextPage = () => {
		setPageIndex(pageIndex + 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const prevPage = () => {
		if (pageIndex === 1) {
			return;
		} else {
			setPageIndex(pageIndex - 1);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};
	return (
		<Shell>
			<Head>
				<title>Film App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<NavBar />
				<Main>
					{isLoading ? (
						<HelpDiv>
							Loading...
							<SpinnerDotted
								size={50}
								thickness={100}
								speed={100}
								color="rgba(255, 255, 255, 1)"
							/>
						</HelpDiv>
					) : (
						<Latest
							image={movies.results[0].backdrop_path}
							url={url}
							title={movies.results[0].original_title}
							id={movies.results[0].id}
							vote={movies.results[0].vote_average}
							overview={movies.results[0].overview}
							isLoading={isLoading}
						/>
					)}

					<MovieSection>
						MOST POPULAR MOVIES
						<MovieList>
							{isLoading ? (
								<>
									{emtpy.map((item, idx) => (
										<Movie
											url={url}
											image=""
											title="..."
											id="..."
											vote="..."
											key={`Empty Movie ${idx}`}
										/>
									))}
								</>
							) : (
								<>
									{movies.results.map((item, idx) => (
										<Movie
											url={url}
											image={
												!isLoading && item.poster_path
											}
											title={
												!isLoading
													? item.original_title
													: "..."
											}
											id={!isLoading ? item.id : "..."}
											vote={item.vote_average}
											key={`Movie ${idx}`}
										/>
									))}
								</>
							)}
						</MovieList>
					</MovieSection>

					<Group>
						<Button onClick={prevPage}>
							<BsArrowLeft />
						</Button>
						<Button onClick={nextPage}>
							<BsArrowRight />
						</Button>
					</Group>
				</Main>

				<Footer></Footer>
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
