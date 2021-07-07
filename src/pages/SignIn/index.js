import styles from "./SignIn.modules.css";
import React from "react";
import SignInForm from "../../components/SingInForm";
import PropTypes from "prop-types";

<div className={styles.body}>
  <container></container>
</div>;

function SignIn({ location }) {
  const { state } = location;
  return (
    <div>
      {state?.success && <h2>Sign Up Was Successful</h2>} <SignInForm />
    </div>
  );
}

SignIn.propTypes = {
  location: PropTypes.object,
};

export default SignIn;
