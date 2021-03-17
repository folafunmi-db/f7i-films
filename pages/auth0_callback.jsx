import { useEffect } from "react";
import { useAuth } from "react-use-auth";
import tw, { styled } from "twin.macro";

const Auth0CallbackPage = () => {
	const { handleAuthentication } = useAuth();
	useEffect(() => {
		handleAuthentication();
	}, [handleAuthentication]);
  
	return (
		<h1>
			This is the auth callback page, you should be redirected
			immediately!
		</h1>
	);
};
export default Auth0CallbackPage;
