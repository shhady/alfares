'use client'
import React, { useState, useEffect } from 'react';
import { Home, FileText, Users, PlusCircle, Menu } from 'lucide-react';
import AddProperty from '@/components/add-property/AddProperty';
import BlogForm from '@/components/blogForm/BlogForm';
import AllProperties from '@/components/adminComponents/all-properties/AllProperties';
import AllUsers from '@/components/adminComponents/all-users/AllUsers';

export default function AdminComponents() {
  const [showForm, setShowForm] = useState('add-property-form');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleSidebarToggle = (e) => {
    if (!isDesktop) {
       
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleClickIcon = (e, show) => {
    e.stopPropagation();
    setIsSidebarOpen(false);
     setShowForm(show);
  }
  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className={`z-50 p-2 lg:p-8 bg-gray-600 text-white transition-all duration-300 ${isSidebarOpen ? 'fixed w-full h-screen' : 'w-16'} lg:w-64`} onClick={handleSidebarToggle}>
        <div className="flex items-center justify-between p-2">
          <h2 className={`text-xl font-bold ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>My App</h2>
          <button className="lg:hidden focus:outline-none" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e)=>handleClickIcon(e,'add-property-form')}>
            <PlusCircle className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>اضف مشروع</span>
          </a>
          <a href="#" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e)=>handleClickIcon(e,'add-blog-form')}>
            <FileText className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>اضف مدونه</span>
          </a>
          <a href="#" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e)=>handleClickIcon(e,'All-properties')}>
            <Home className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>جميع المشاريع</span>
          </a>
          <a href="#" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e)=>handleClickIcon(e,'All-users')}>
            <Users className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>جميع المستخدمين</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-800 transition-all duration-300">
        {showForm === 'add-property-form' && <AddProperty />}
        {showForm === 'add-blog-form' && <BlogForm />}
        {showForm === 'All-properties' && <AllProperties />}
        {showForm === 'All-users' && <AllUsers />}
      </div>
    </div>
  );
}
