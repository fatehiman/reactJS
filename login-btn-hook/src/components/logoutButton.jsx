import React from "react";
import "../index.css";

class LogoutButton extends React.Component {
  render() {
    return (
      <>
        <button
          className="logout"
          onClick={() => {
            this.props.runDoLogout();
          }}
        >
          Logout
        </button>
      </>
    );
  }
}

export default LogoutButton;
