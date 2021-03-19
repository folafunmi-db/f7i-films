import tw, { styled } from "twin.macro";
import { BiStar } from "react-icons/bi";
import Link from "next/link";

const Container = styled.div`
	/* background-color: #fffaa0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffc68c'/%3E%3Cstop offset='1' stop-color='%23ffc68c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffa4aa'/%3E%3Cstop offset='1' stop-color='%23ffa4aa' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff90c8'/%3E%3Cstop offset='1' stop-color='%23ff90c8' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fffaa0'/%3E%3Cstop offset='1' stop-color='%23fffaa0' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff8077'/%3E%3Cstop offset='1' stop-color='%23ff8077' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f9a9ff'/%3E%3Cstop offset='1' stop-color='%23f9a9ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
	background-attachment: fixed; */
	background-size: cover;
	background-position: center;
	/* background: rgba(255, 255, 255, 0.2); */
	/* backdrop-filter: blur(40px); */
	/* border: 3px solid transparent; */
	/* background-clip: padding-box; */
	background-color: #7c3aed;
	height: 28rem;
	width: 95%;

	${tw`shadow-lg hover:shadow-xl transition text-white font-m rounded-lg  flex flex-col justify-around items-center`}
`;

const Pic = styled.div`
	height: 20rem;
	${({ image, url }) =>
		image &&
		`background-image: url("https://image.tmdb.org/t/p/w500/${image}");`};
	${tw` w-11/12 bg-cover bg-center rounded-lg`}
	transition: .1s ease-in;

	&:hover {
		transform: scaleX(1.09) scaleY(1.09);
		transition: 0.1s ease-in;
	}
`;

const Group = styled.div`
	/* height: 3rem; */
	width: 100%;
	${tw` w-11/12 flex flex-col justify-start items-start gap-1 `}
`;

const Title = tw.h2` flex justify-start items-center gap-2 text-sm whitespace-nowrap w-full text-yellow-400 overflow-x-hidden overflow-ellipsis`;

const Inner = tw.h2`text-white w-max`

const Cast = ({ image, url, title, vote, id, character, department }) => {
	return (
		<Container>
			<Pic image={image} url={url}></Pic>
			<Group>
				<Title>
					Name: <Inner>{title}</Inner>
				</Title>
				<Title>
					Character: <Inner>{character}</Inner>
				</Title>
				<Title>
					Department: <Inner>{department}</Inner>
				</Title>
				<Title>
					Popularity: <Inner>{vote}</Inner>
				</Title>
			</Group>
		</Container>
	);
};

export default Cast;
