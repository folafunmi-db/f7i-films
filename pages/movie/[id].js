import Head from "next/head";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Cast from "../../components/Cast";
import Latest from "../../components/Latest";
import { useGetDetails, useGetCast } from "../api/hello.js";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { SpinnerDotted } from "spinners-react";
import { useSession } from "next-auth/client";

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

const HelpDiv = styled.div`
	background-size: cover;
	background-position: center;
	background: #8d54e7;
	min-height: 24rem;
	${tw`shadow-xl rounded-lg w-full bg-center text-white my-4 bg-cover flex flex-col sm:flex-row justify-center items-center px-6 py-4 gap-4`}
`;

const MovieList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	grid-gap: 2rem;
	width: 100%;
	margin-bottom: 2rem;
`;

const MovieSection = tw.div`w-full flex flex-col gap-4 font-bold font-exo text-2xl justify-start items-start`;

function generateArrayOfNumbers(numbers) {
	return [...Array(numbers).keys()].slice(1);
}

const MoviePage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { details, isLoading, isError } = useGetDetails(id);
	const { casts, isLoadingCast, isErrorCast, url } = useGetCast(id);

	const [session, loading] = useSession();
	const ten = generateArrayOfNumbers(10);

	console.log(url);
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
							image={details.backdrop_path}
							url={url}
							title={details.original_title}
							id={details.id}
							vote={details.vote_average}
							overview={details.overview}
							isLoading={isLoading}
						/>
					)}

					<MovieSection>
						CAST
						<MovieList>
							{isErrorCast && "No Cast"}
							{isLoadingCast && !isErrorCast ? (
								<>
									{ten.map((item, idx) => (
										<Cast
											url={url}
											image=""
											title="..."
											id="..."
											vote="..."
											key={`Empty ${idx}`}
										/>
									))}
								</>
							) : (
								<>
									{casts &&
										casts.cast.map((item, idx) => (
											<Cast
												url={url}
												image={
													!isLoading &&
													item.profile_path
												}
												title={
													!isLoading
														? item.name
														: "..."
												}
												id={
													!isLoading ? item.id : "..."
												}
												department={
													!isLoading
														? item.known_for_department
														: "..."
												}
												character={
													!isLoading
														? item.character
														: "..."
												}
												id={
													!isLoading ? item.id : "..."
												}
												vote={item.popularity}
												key={`Cast ${idx}`}
											/>
										))}
								</>
							)}
						</MovieList>
					</MovieSection>
				</Main>
			</Container>
			<Credentials>
				Made with 💜 by{" "}
				<Link href="https://github.com/folafunmi-db">
					<Fola>Folafunmi</Fola>
				</Link>
			</Credentials>
		</Shell>
	);
};

export default MoviePage;
