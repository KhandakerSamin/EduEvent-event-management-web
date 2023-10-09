import React from "react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
            <h1 className="text-4xl md:text-6xl text-white mt-6 md:mt-8 text-center">
                Oops!
            </h1>
            <h1 className="text-4xl md:text-6xl text-white mt-6 md:mt-8 text-center">
                Something Went Wrong
            </h1>
            <p className="text-lg md:text-xl text-white mt-4 md:mt-6 text-center">
                It looks like you've encountered an interstellar error.
            </p>
            <button
                onClick={() => window.history.back()}
                className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            >
                Take Me Back
            </button>
        </div>
    );
};

export default ErrorPage;
