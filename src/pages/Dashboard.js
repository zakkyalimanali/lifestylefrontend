// import React , { useEffect, useState , useContext}  from 'react'
// import AuthContext from '../context/AuthContext';
// import UserProfileAPI from '../api/UserProfileAPI'

// function Dashboard() {
//   const { username } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     UserProfileAPI.get('/')
//     .then((res) => {
//       setUserData(res.data)
//     })
//     .catch((error) => {
//       console.error('Error fetching user data:', error);
//     });
//   },[])
//   return (
//     // <div>
//     //   <h1>Dashboard</h1>
//     //      <h3>{username}</h3>
//     // </div>
//     <div>
//       <h1>Dashboard</h1>
//       {userData && (
//         <h3>Email: {userData.email}</h3>
//       )}
//     </div>

//   )
// }

// // export default Dashboard

// import React, { useEffect, useState, useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import UserProfileAPI from '../api/UserProfileAPI';

// function Dashboard() {
//   const { username } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     UserProfileAPI.get('/')
//       .then((res) => {
//         console.log('API Response:', res.data); // Log the response data
//         setUserData(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   console.log('Current Username:', username); // Log the username

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {userData && (
//         <h3>Email: {userData.email}</h3>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useEffect, useState, useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import UserProfileAPI from '../api/UserProfileAPI';

// function Dashboard() {
//   const { authTokens } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (authTokens) {
//       // Send the authentication token with the request
//       UserProfileAPI.get('/', {
//         headers: {
//           Authorization: `Bearer ${authTokens.accessToken}`,
//         },
//       })
//         .then((res) => {
//           setUserData(res.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching user data:', error);
//         });
//     }
//   }, [authTokens]);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {userData && (
//         <h3>Email: {userData.email}</h3>
//       )}
//     </div>
//   );
// }

// // export default Dashboard;

// import React, { useEffect, useState, useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import UserProfileAPI from '../api/UserProfileAPI';

// function Dashboard() {
//   const { authTokens } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (authTokens) {
//       // Send the authentication token with the request
//       UserProfileAPI.get('/1', {
//         headers: {
//           Authorization: `Bearer ${authTokens.accessToken}`,
//         },
//       })
//         .then((res) => {
//           setUserData(res.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching user data:', error);
//         });
//     }
//   }, [authTokens]);

//   console.log('user data:', userData); // Log the username

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {userData && (
//         <h3>Email: {userData.email}</h3>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserProfileAPI from '../api/UserProfileAPI';
import axios from 'axios';

function Dashboard() {
  const { authTokens } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   if (authTokens) {
  //     // Send the authentication token with the request
  //     UserProfileAPI.get('/current/', {
  //       headers: {
  //         Authorization: `Bearer ${authTokens.accessToken}`,
  //       },
  //     })
  //       .then((res) => {
  //         setUserData(res.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching user data:', error);
  //       });
  //   }
  // }, [authTokens]);

  useEffect(() => {
    if (authTokens && authTokens.accessToken) {
      UserProfileAPI.get('/current_user/', {
        // axios.get(`http://127.0.0.1:8000/api/current_user/`, {
        headers: {
          Authorization: `Bearer ${authTokens.accessToken}`,
        },
      })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
     console.log()
  }, [authTokens]);
 

  console.log('user data:', userData); // Log the username

  return (
    <div>
      <h1>Dashboard</h1>
      {userData && (
        <h3>Email: {userData.email}</h3>
      )}
    </div>
  );
}

export default Dashboard;