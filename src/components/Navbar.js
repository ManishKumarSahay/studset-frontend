import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">StudSet</Link>
        <div className="space-x-4">
          <Link to="/jobs" className="hover:underline">Job Openings</Link>
          <Link to="/challenges" className="hover:underline">Hiring Challenges</Link>
          <Link to="/founder" className="hover:underline">Founder Portfolio</Link>
          <Link to="/admin/login" className="ml-4 inline-block px-3 py-1 rounded bg-indigo-600 text-white">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
