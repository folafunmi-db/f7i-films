import tw, { styled } from "twin.macro";
import { BiStar } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

const Container = styled.div`
	background-size: cover;
	background-position: center;
	background: #7c3aed;
	min-height: 24rem;
	${tw`shadow-xl rounded-lg w-full bg-center text-white my-4 bg-cover flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-4`}
`;

const Pic = styled.div`
	min-height: 20rem;
	${({ image, url }) =>
		image &&
		`background-image: url("https://image.tmdb.org/t/p/w500/${image}");`};
	${tw` w-full sm:w-2/5 bg-cover bg-center rounded-lg cursor-pointer`}
`;

const Group = tw.div`flex flex-col w-full gap-3 sm:w-3/5`;

const Title = tw.h2`text-2xl font-bold text-yellow-400 whitespace-nowrap cursor-pointer overflow-x-hidden overflow-ellipsis`;

const Rating = styled.h2`
	${tw`text-xl flex w-max justify-center items-center font-bold gap-1`};
`;

const Overview = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const WatchList = tw.button` focus:outline-none active:bg-yellow-300 outline-none font-medium bg-yellow-400 hover:shadow-lg px-2 w-max py-4 rounded-lg font-m flex justify-between items-center text-purple-700`;

const useStateWithLocalStorage = (localStorageKey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKey) || false
	);

	useEffect(() => {
		if (value === true) {
			localStorage.setItem(localStorageKey, value);
		}else{
				localStorage.removeItem(localStorageKey);
		}
	}, [value]);

	return [value, setValue];
};

const Latest = ({ image, url, title, vote, id, overview, isLoading }) => {
	const [session, loading] = useSession();
	const [added, setAdded] = useStateWithLocalStorage(`Movie${id}`);

	return (
		<Container>
			<Link href={`/movie/${id}`}>
				<Pic image={isLoading ? false : image}></Pic>
			</Link>
			<Group>
				<Link href={`/movie/${id}`}>
					<Title>{title}</Title>
				</Link>
				<Rating>
					<BiStar style={{ color: "#fbbf24" }} />
					{vote}
				</Rating>
				{loading ? <Overview>Hold on...</Overview> : ""}
				{session ? (
					<WatchList onClick={() => setAdded(!added)}>
						{added ? "Added to Watchlist" : "+ Add to Watchlist"}
					</WatchList>
				) : (
					""
				)}
				<Overview>{overview}</Overview>
			</Group>
		</Container>
	);
};

export default Latest;
