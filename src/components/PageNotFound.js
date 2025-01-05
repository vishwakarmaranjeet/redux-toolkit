const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-2xl mt-4 text-gray-700">Oops! Page Not Found</p>
                <p className="text-lg mt-2 text-gray-500">
                    The page you are looking for does not exist or has been moved.
                </p>
                <div className="mt-3">
                    <a
                        href="/"
                        className="inline-block px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
