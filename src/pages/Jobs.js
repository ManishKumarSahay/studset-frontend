import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/jobs`)
      .then(res => setJobs(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Job Openings</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => <JobCard key={job._id} job={job} />)}
      </div>
    </div>
  );
}
