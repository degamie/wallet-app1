// import React, { createContext, useState } from 'react';

// // const MyContext = createContext("");

// // const MyProvider = ({ children }) => {
// //     const [firstName, setFirstName] = useState('');
// //     const [lastName, setLastName] = useState('');
// //     const [userName, setUserName] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [email, setEmail] = useState('');

// //   return (
// //     <MyContext.Provider value={{ state, setState }}>
// //       {children}
// //     </MyContext.Provider>
// //   );
// // };

// // export { MyContext, MyProvider };

import React, { createContext, useState } from 'react';



// Create a context with default values

const UserContext = createContext({

firstName: '',
lastName: '',
username: '',
password: '',
email: '',

setUsername: () => {},
setPassword: () => {},
setEmail: () => {},
setFirstName: () => {},
setLastName: () => {}

});

export const UserProvider = ({ children }) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

  return (

    <UserContext.Provider value={{ username, setUsername, password, setPassword, email, setEmail, firstName, setFirstName, lastName, setLastName }}>

      {children}

    </UserContext.Provider>

  );

};

export default UserContext;


