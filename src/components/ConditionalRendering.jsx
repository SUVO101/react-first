import style from "../css/ConditionalRendering.module.css";

// const ConditionalRendering = () => {
//   const isLoggedIn = false;
//     return (
//       <div>
//           { isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1> }
//       </div>
//     )
// };

// const ConditionalRendering = () => {
//   const isLoggedIn = false;
//   let message;

//   if (isLoggedIn) {
//     message = <h1>Welcome User</h1>;
//   } else {
//     message = <h1>Please Login</h1>;
//   }

//   return <div>{message}</div>;
// };

const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div>
        { <h1 className={isLoggedIn ? style.welcome : style.login}>{isLoggedIn?'Welcome User':'Please Login'}</h1>}
    </div>
  );
};
// const ConditionalRendering = () => {
//   const isLoggedIn = true;

//   return (
//     <div>
//         { isLoggedIn &&<h1>Welcome User</h1> }
//     </div>
//   );
// };

export default ConditionalRendering;
