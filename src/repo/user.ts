export type User = {
  id: string;
  email: string;
};

// Eventually this will parse a user from a valid token (auth0)
// Auth0 isn't wired up yet so we'll just return stubbed data for now
export const get = (): User | null => {
  return {
    id: "some_user_id",
    email: "some_email@email.com",
  };
};
