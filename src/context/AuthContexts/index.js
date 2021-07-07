import { initialState, reducer } from "./reducer";
import { parseToken, toggleSession } from "../../jwt/jwt";
import { authLogin, authLogout } from "./actions";
import { createContext, useContext, useEffect, useReducer } from "react";
import { userSignIn } from "../../api/auth";
import { initializeAuthEffect } from "./effect";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(username, password) {
    const response = await userSignIn(username, password);
    const { token } = response;
    toggleSession(token);
    const { payload } = parseToken(token);
    dispatch(authLogin(payload));
  }

  function logout() {
    toggleSession(null);
    dispatch(authLogout());
  }

  useEffect(() => {
    initializeAuthEffect(dispatch);
  }, []);

  if (!state.isInitialized) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }

  return context;
}

export { AuthContextProvider, useAuth };
