import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>{props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//       <div>
//         {props.isAdmin && (
//           <p>This is private info for admin viewership only.</p>
//         )}
//         <WrappedComponent {...props} />
//       </div>
//     );
// }

// const AdminInfo = withAdminWarning(Info);

const requireAuth = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>please login to see this page.</p>
        )}
      </div>
    );
}

const AuthInfo = requireAuth(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="authentication success. showing details..." />,
  document.getElementById("app-root")
);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="my details here" />,
//   document.getElementById("app-root")
// );