export default function About() {
    return (
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About This Project</h2>
        <p className="text-gray-700 dark:text-gray-300">This is a loan calculator project with React. It includes:</p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
          <li>Loan EMI Calculator</li>
          <li>Live exchange rates</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>404 Error page with redirection</li>
        </ul>
      </div>
    );
  }
  