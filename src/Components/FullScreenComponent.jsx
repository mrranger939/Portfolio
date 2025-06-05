import React from "react";

const FullScreenComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md overflow-auto">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Full Screen Content</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This is the full screen component. It has its own scrollbar and can contain any content you want. You can customize it further based on your needs.
        </p>
        <div className="h-64 overflow-y-auto p-4 bg-gray-200 dark:bg-gray-800 rounded-md">
          <p className="text-gray-800 dark:text-gray-400">
            Sample scrollable content inside this component. Add more content to make the scrollbar visible.
          </p>
          <p className="mt-4 text-gray-800 dark:text-gray-400">
            Scroll down to explore more content in this section.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default FullScreenComponent;
