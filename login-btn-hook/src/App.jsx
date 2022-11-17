import React from "react";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import CheckLogin from "./components/checkLogin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  doLogin() {
    this.setState({ isLogin: true });
  }
  doLogout() {
    this.setState({ isLogin: false });
  }
  render() {
    return (
      <>
        <CheckLogin data={this.state} />

        {this.state.isLogin ? (
          <LogoutButton
            runDoLogout={() => {
              this.doLogout();
            }}
          />
        ) : (
          <LoginButton
            runDoLogin={() => {
              this.doLogin();
            }}
          />
        )}
      </>
    );
  }
}

export default App;
