import React from 'react';
import { format } from 'date-fns';

export default function JobCard({ job }) {
  const created = new Date(job.createdAt);
  const dt = format(created, 'dd MMM, hh:mm a');
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="flex items-center gap-4">
        <img src={job.logoUrl || 'https://via.placeholder.com/64'} alt="logo" className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{job.companyName}</h3>
          <p className="text-sm text-gray-600">{job.role} • {job.location}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700">{job.description}</p>
      <div className="mt-3 text-xs text-gray-500 flex justify-between items-center">
        <span>{job.package}</span>
        <span>{dt}</span>
      </div>
    </div>
  );
}
