import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-screen flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="Hero" className="w-full h-48 object-cover mb-4 rounded-lg" /> */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to WalletApp</h1>
                <p className="text-gray-700 mb-6">
                    Manage your funds easily and securely. Add funds, transfer money, and keep track of your balance, all in one place.
                    </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/auth/login" className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center">
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                        Login
                    </Link>
                    <Link to="/auth/register" className="bg-gray-200 text-gray-900 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 flex items-center">
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
