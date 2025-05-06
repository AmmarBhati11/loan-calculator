import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 shadow-md">
      <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm sm:text-base">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/exchange-rate" className="hover:underline">Exchange Rate (Live)</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/error" className="hover:underline">Error Page</Link>
      </nav>
    </header>
  );
}
