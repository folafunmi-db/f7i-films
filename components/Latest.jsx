import tw, { styled } from "twin.macro";
import {useGetLatest } from "../pages/api/hello"

const Container = styled.div`
	background-size: cover;
	background-position: center;
	background: #8d54e7;
	${tw`shadow-md rounded-lg h-80 w-full`}
`;

const Latest = () => {
	const { latest, isLoading, isError } = useGetLatest();

	return <Container></Container>;
};

export default Latest;
