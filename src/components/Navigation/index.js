import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'
import SignOutButton from "../SignOut";
import {AuthUserContext} from '../Session'

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{authUser =>
				authUser
					? <NavigationAuth authUser={authUser}/>
					: <NavigationNonAuth/>
			}
		</AuthUserContext.Consumer>
	</div>
);
const NavigationAuth = ({authUser}) => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		{!!authUser.roles[ROLES.ADMIN] && (
			<li>
				<Link to={ROUTES.ADMIN}>Admin</Link>
			</li>
		)}
		<li>
			<SignOutButton/>
		</li>
	</ul>
);
const NavigationNonAuth = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={ROUTES.SIGN_IN}>Sign In</Link>
				</li>
				<li>
					<Link to={ROUTES.LANDING}> Landing</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;

export {NavigationAuth, NavigationNonAuth}