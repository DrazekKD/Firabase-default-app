import React from 'react';
import { compose } from 'recompose';

import { inject, observer } from "mobx-react";
import {PasswordForgetForm} from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, withEmailVerification } from '../Session';

const AccountPage = ({ sessionStore }) => (

			<div>
				<h1>Account Page {sessionStore.authUser.email}</h1>
				<PasswordForgetForm/>
				<PasswordChangeForm/>
			</div>
);
const condition = authUser => !!authUser;
export default compose(
	inject('sessionStore'),
	observer,
	withEmailVerification,
	withAuthorization(condition),
)(AccountPage)