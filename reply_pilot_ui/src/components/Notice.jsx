const Notice = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <div className="flex justify-center items-center text-sm font-medium text-center space-x-2">
                    <span>
                        The backend server may take a few seconds to wake up due to free-tier hosting limitations.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Notice;