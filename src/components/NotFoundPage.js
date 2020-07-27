import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="max-w-screen-md mx-auto p-4 mt-6">
            <div className="ml-6 pt-1">
                <h1 className="text-2xl text-orange-600 leading-tight">
                    404 Page Not Found
                </h1>
                <Link to="/" className="text-base text-gray-700 leading-normal">Go back to homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
