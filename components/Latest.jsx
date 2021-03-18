import tw, { styled } from "twin.macro";
import { BiStar } from "react-icons/bi";

const Container = styled.div`
	background-size: cover;
	background-position: center;
	background: #8d54e7;
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

const Title = tw.h2`text-2xl font-bold whitespace-nowrap overflow-x-hidden overflow-ellipsis`;

const Rating = styled.h2`
	${tw`text-xl flex w-max justify-center items-center font-bold gap-1`};
`;

const Overview = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const Latest = ({ image, url, title, vote, id, overview, isLoading }) => {
	return (
		<Container>
			<Pic image={isLoading ? false : image}></Pic>
			<Group>
				<Title>{title}</Title>
				<Rating>
					<BiStar />
					{vote}
				</Rating>
				<Overview>{overview}</Overview>
			</Group>
		</Container>
	);
};

export default Latest;
