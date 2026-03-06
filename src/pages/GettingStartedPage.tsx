import React from 'react';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome to Our App</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This is the getting started page. You can see a video here.
          </p>
        </div>
        <div className="p-6">
          <video
            src="https://video.example.com/video.mp4"
            controls
            className="w-full h-auto max-h-[70vh]" // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
}
