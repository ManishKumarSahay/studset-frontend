import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/challenges`)
      .then(res => setChallenges(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Hiring Challenges</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map(c => (
          <div key={c._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-600">{c.companyName} • {c.location}</p>
            <p className="mt-2 text-sm text-gray-700">{c.description}</p>
            <div className="mt-3 text-xs text-gray-500">{new Date(c.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
