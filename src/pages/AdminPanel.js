import React, { useState } from 'react';
import axios from 'axios';

export default function AdminPanel(){
  const token = localStorage.getItem('studset_token');
  const [job, setJob] = useState({ companyName:'', role:'', description:'', location:'', package:'', logoUrl:'' });
  const [challenge, setChallenge] = useState({ name:'', companyName:'', location:'', description:'' });
  const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

  const addJob = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/jobs`, job, authHeaders);
      alert('Job added');
    }catch(err){ alert(err.response?.data?.message || 'Failed') }
  };
  const addChallenge = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/challenges`, challenge, authHeaders);
      alert('Challenge added');
    }catch(err){ alert(err.response?.data?.message || 'Failed') }
  };
  const logout = () => { localStorage.removeItem('studset_token'); window.location.href = '/' };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <button onClick={logout} className="px-3 py-1 rounded bg-red-500 text-white">Logout</button>
      </div>

      <form onSubmit={addJob} className="bg-white p-4 rounded shadow space-y-2">
        <h3 className="font-semibold">Add Job Opening</h3>
        <input className="w-full p-2 border rounded" placeholder="Company Name" value={job.companyName} onChange={e=>setJob({...job, companyName:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Role" value={job.role} onChange={e=>setJob({...job, role:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Location" value={job.location} onChange={e=>setJob({...job, location:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Package" value={job.package} onChange={e=>setJob({...job, package:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Logo URL" value={job.logoUrl} onChange={e=>setJob({...job, logoUrl:e.target.value})} />
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={job.description} onChange={e=>setJob({...job, description:e.target.value})} />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Add Job</button>
      </form>

      <form onSubmit={addChallenge} className="bg-white p-4 rounded shadow space-y-2">
        <h3 className="font-semibold">Add Hiring Challenge</h3>
        <input className="w-full p-2 border rounded" placeholder="Challenge Name" value={challenge.name} onChange={e=>setChallenge({...challenge, name:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Company Name" value={challenge.companyName} onChange={e=>setChallenge({...challenge, companyName:e.target.value})} />
        <input className="w-full p-2 border rounded" placeholder="Location" value={challenge.location} onChange={e=>setChallenge({...challenge, location:e.target.value})} />
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={challenge.description} onChange={e=>setChallenge({...challenge, description:e.target.value})} />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Add Challenge</button>
      </form>
    </div>
  );
}
