import { html } from 'lit';

import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => html`
  <header>
    <div class="storybook-header">
      <div>
        <img style="width: 55px;" src="./panda.svg" />
      </div>
      <div>
        ${user
          ? Button({ size: 'small', onClick: onLogout, label: 'Log out' })
          : html`${Button({
              size: 'small',
              onClick: onLogin,
              label: 'Log in',
            })}
            ${Button({
              primary: true,
              size: 'small',
              onClick: onCreateAccount,
              label: 'Sign up',
            })}`}
      </div>
    </div>
  </header>
`;
