import tw, { styled } from "twin.macro";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";

const Shell = tw.div`w-full px-0 py-2 flex flex-wrap justify-center sm:justify-between items-center gap-4`;

const Logo = tw.div`flex w-max cursor-pointer justify-center items-end gap-3 text-2xl font-exo font-bold`;

const LogoText = tw.h1`hidden sm:block`;

const Navs = tw.nav`flex  justify-between items-center gap-6 font-medium`;

const Route = tw.p`cursor-pointer whitespace-nowrap transition font-medium hover:text-purple-700 focus:outline-none`;

const User = tw.div`font-bold flex justify-center items-center gap-3`;

const UserImage = tw.img`w-10 h-10 rounded-full`;

const NavBar = () => {
	const [session, loading] = useSession();

	return (
		<Shell>
			<Link href="/">
				<Logo>
					<Image width="45" height="45" src="/favicon.ico" />
					<LogoText>Film App</LogoText>
				</Logo>
			</Link>

			<Navs>
				<Route>Home</Route>
				{session ? (
					<Route onClick={() => signOut()}>Sign Out</Route>
				) : (
					<Route onClick={() => signIn()}>Sign In</Route>
				)}
				<User>
					{loading ? (
						"Hold on..."
					) : (
						<>
							{session && <UserImage src={session.user.image} />}
							Hi, {session ? session.user.name : "User"}
						</>
					)}
				</User>
			</Navs>
		</Shell>
	);
};

export default NavBar;
