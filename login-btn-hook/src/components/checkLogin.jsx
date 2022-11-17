import React from "react";

const DoCheckLogin = (props) => {
  let result = "You're logged out.";
  if (props.data.isLogin) result = "You're logged in.";
  return (
    <>
      <div>{result}</div>
    </>
  );
};

// class DoCheckLogin extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let result = "You're logged out.";
//     if (this.props.data.isLogin) result = "You're logged in.";
//     return (
//       <>
//         <div>{result}</div>
//       </>
//     );
//   }
// }

export default DoCheckLogin;
