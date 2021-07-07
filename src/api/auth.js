import axios from "axios";

async function userSignUp(user) {
  const response = await axios.post(
    `https://comm-auth.kapo.dev/auth/signup`,
    user,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
}
async function userSignIn({ username, password }) {
  const response = await axios.post(
    `https://comm-auth.kapo.dev/auth/signin`,
    { username, password },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
}

export { userSignUp, userSignIn };
