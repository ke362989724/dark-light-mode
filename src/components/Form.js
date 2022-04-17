import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign">Sign in</p>
      <form className="form1">
        <input type="text" className="username" placeholder="Username" />
        <input type="password" className="password" placeholder="Password" />
        <a href="./" className="submit">
          Sign in
        </a>
        <p className="forgot">
          <a href="./">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
