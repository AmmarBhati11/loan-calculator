import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-6 sm:p-10">
      <img src="https://http.cat/404" alt="404 Not Found" className="mx-auto w-full max-w-xs" />
      <h2 className="text-xl mt-4 text-gray-800 dark:text-white">Oops! Page Not Found</h2>
      <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Return to Home</Link>
    </div>
  );
}
