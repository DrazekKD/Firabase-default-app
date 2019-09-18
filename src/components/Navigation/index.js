import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'
import SignOutButton from "../SignOut";
import {AuthUserContext} from '../Session'
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

const Navigation = ({ sessionStore }) => (
		sessionStore.authUser ? (
				<NavigationAuth authUser={sessionStore.authUser}/>
			) : (
				<NavigationNonAuth/>
			)
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

export default compose(
		inject('sessionStore'),
		observer,
	)(Navigation);

export {NavigationAuth, NavigationNonAuth}