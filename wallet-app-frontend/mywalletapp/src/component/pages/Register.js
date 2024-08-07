import React, { useContext, useState } from 'react';
import UserContext from '../context/Context';
import axios from 'axios';

const Register = () => {

    const { username, setUsername, password, setPassword, email, setEmail, firstName, setFirstName, lastName, setLastName } = useContext(UserContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/register', { username, password, firstName, lastName, email });
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    return (
        // <div>
        //     <div><h2>Register</h2></div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>Username</label>
        //             <input
        //                 type="text"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)} />
        //         </div>
        //         <div>
        //             <label>Password</label>
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <div>
        //             <button type="submit">Register</button>
        //         </div>
        //     </form>
        // </div>

        <div className="h-full">
    {/* <!-- Container --> */}
    <div className="mx-auto">
        <div className=" flex justify-center px-4 py-24">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
                <div className="w-auto h-auto bg-blue-500 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-center bg-contain bg-no-repeat rounded-l-lg"
                    style={{ backgroundImage: 'url( https://cdni.iconscout.com/illustration/premium/thumb/new-user-registration-4489362-3723269.png?f=webp)' }}></div>
                {/* <!-- Col --> */}
                <div className=" w-full lg:w-7/12  bg-white border-2 dark:bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="py-4 text-2xl text-center text-gray-800 font-bold dark:text-white">Create an Account!</h3>
                    <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                Username
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="username"
                                type="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="******************"
                                />
                                <p className="text-xs italic text-red-500">Please choose a password.</p>
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                                    Confirm Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register Account
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />

                        <div className="text-center">
                            <a className="inline-block text-sm font-semibold text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                                Already have an account? Login!
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};


export default Register;
