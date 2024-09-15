"use client"
import { useRouter } from 'next/router';

const ApplyPage = ({ params }) => {
  const { titleee } = params; // Destructure params to get the 'id'

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apply for Position {titleee}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Add form fields here */}
        <div>
          <label htmlFor="name" className="block text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        {/* Add more fields as needed */}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
