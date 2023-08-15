import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(
        sessionStorage.getItem('loggedIn') === 'true'
    );

    useEffect(() => {
        if (loggedIn) {
            sessionStorage.setItem('loggedIn', 'true');
        } else {
            sessionStorage.removeItem('loggedIn');
        }
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}




// import React, { createContext, useContext } from 'react';

// const AuthContext = createContext();


  

// export function AuthProvider({ children }) {
//     const [loggedIn, setLoggedIn, handleLogin, handleLogout, isLoggedIn] = useState(false);

//     return (
//         <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }
