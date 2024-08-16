'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import UserDetails from './UserDetails'; // Adjust the import path as necessary


export default function AllUsers() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // State to track selected user
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL}api/users/get-users`);
        if (response.ok) {
          const allUsers = await response.json();
          setData(allUsers);
        } else {
          console.error('API response error:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center min-h-[80vh] flex flex-col justify-center items-center">
      <div class="flex justify-center items-center">
  <div class="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
</div>
    </div>;
  }

  const filteredUsers = data.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set selected user ID
  };

  const handleBack = () => {
    setSelectedUser(null); // Clear selected user ID to go back
  };

  // Conditional rendering
  if (selectedUser) {
    return <UserDetails user={selectedUser} onBack={handleBack} />;
  }

  return (
    <div className="bg-white text-black min-h-screen p-4">
      <div className="text-center flex flex-col gap-4 max-w-screen-2xl m-auto">
        <h1 className="text-4xl">جميع المستخدمين</h1>
        <div className="border-b-2 md:w-80 w-40 mx-auto"></div>
        <div className="my-4 w-full md:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="بحث..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-input w-full p-2 border rounded"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border hidden lg:table-cell">Email</th>
                <th className="py-2 px-4 border">الاسم</th>
                <th className="py-2 px-4 border">الهاتف</th>
                <th className="py-2 px-4 border hidden lg:table-cell">ميزانية</th>
                <th className="py-2 px-4 border hidden lg:table-cell">جاهز</th>
                <th className="py-2 px-4 border hidden lg:table-cell">كيف</th>
                <th className="py-2 px-4 border hidden lg:table-cell">Created Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr 
                  key={user._id} 
                  onClick={() => handleUserClick(user)} 
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-2 px-4 border hidden lg:table-cell">{user.email}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.phone}</td>
                  <td className="py-2 px-4 border hidden lg:table-cell">{user.budget}</td>
                  <td className="py-2 px-4 border hidden lg:table-cell">{user.ready}</td>
                  <td className="py-2 px-4 border hidden lg:table-cell">{user.how}</td>
                  <td className="py-2 px-4 border hidden lg:table-cell">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
