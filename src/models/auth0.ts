export type Auth0Token = {
  auth0Id: string;
  name: string;
  email: string;
  emailVerified: boolean;
};

export type Auth0TokenInput = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
  nonce: string;
};

/*
example user input from auth0 after parsing JWT
{
  nickname: 'ainsley',
  name: 'ainsley@nested.com',
  picture: 'example.com',
  updated_at: '2019-12-04T23:50:41.883Z',
  email: 'ainsley@nested.com',
  email_verified: false,
  iss: 'https://dev-z5xko62d.auth0.com/',
  sub: 'auth0|5de83f3760b3850e65adbc02',
  aud: 'ofE9GiXsqnl4sh4QbvxisgUfOIDfz5el',
  iat: 1575503709,
  exp: 1575539709,
  nonce: 'SxhUsO4NJ.ben0Nha85eOl2_YnA36Z7dVNRHzlKju8q'
}
*/
/* eslint-disable @typescript-eslint/camelcase */
export const parseToken = ({ sub, nickname, email, email_verified }: Auth0TokenInput): Auth0Token => {
  return {
    auth0Id: sub,
    name: nickname,
    email: email,
    emailVerified: email_verified,
  };
};
/* eslint-enable @typescript-eslint/camelcase */
