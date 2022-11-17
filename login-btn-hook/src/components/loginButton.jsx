import React from "react";

const LoginButton = (props) => {
  return(
    <button className="login" onClick={() => props.runDoLogin()}>
      Login
    </button>
  );
};

// class LoginButton extends React.Component {
//   render() {
//     return (
//       <>
//         <button className="login" onClick={() => this.props.runDoLogin()}>
//           Login
//         </button>
//       </>
//     );
//   }
// }

export default LoginButton;
