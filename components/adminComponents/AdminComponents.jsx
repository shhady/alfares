'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Home, FileText, Users, PlusCircle, Menu, LogOut, PenLine } from 'lucide-react';
import AddProperty from '@/components/add-property/AddProperty';
import BlogForm from '@/components/blogForm/BlogForm';
import AllProperties from '@/components/adminComponents/all-properties/AllProperties';
import AllUsers from '@/components/adminComponents/all-users/AllUsers';
import { SignOutButton } from '@clerk/nextjs';
import AllBlogsAdmin from './all-blogs/AllBlogsAdmin';

export default function AdminComponents() {
  const [showForm, setShowForm] = useState('add-property-form');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSidebarToggle = () => {
    if (!isDesktop) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleClickIcon = (e, show) => {
    e.stopPropagation();
    setIsSidebarOpen(false);
    setShowForm(show);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={` z-40 p-2 lg:p-8 bg-gray-600 text-white transition-all duration-300 ${
          isSidebarOpen ? 'fixed w-1/2 h-screen' : 'w-16 sticky top-24'
        } lg:w-64`}
        onClick={handleSidebarToggle}
      >
       
        
        {/* Sticky icons */}
        <nav className="flex flex-col space-y-2 sticky top-24">
        <div className="flex items-center justify-between p-2 ">
          <h2 className={`text-xl font-bold ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>My App</h2>
          <button className="lg:hidden focus:outline-none" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e) => handleClickIcon(e, 'add-property-form')}>
            <PlusCircle className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>اضف مشروع</span>
          </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e) => handleClickIcon(e, 'add-blog-form')}>
            <PenLine className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>اضف مقالة</span>
          </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e) => handleClickIcon(e, 'All-properties')}>
            <Home className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>جميع المشاريع</span>
          </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e) => handleClickIcon(e, 'All-blogs')}>
            <FileText className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>جميع المقالات</span>
          </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md" onClick={(e) => handleClickIcon(e, 'All-users')}>
            <Users className="w-6 h-6" /> <span className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>جميع المستخدمين</span>
          </div>
          <div className="flex gap-2 items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
            <LogOut className="w-6 h-6" /> <SignOutButton className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block ml-2`}>خروج</SignOutButton>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-800 transition-all duration-300">
        {showForm === 'add-property-form' && <AddProperty />}
        {showForm === 'add-blog-form' && <BlogForm setShowForm={setShowForm} />}
        {showForm === 'All-properties' && <AllProperties />}
        {showForm === 'All-blogs' && <AllBlogsAdmin />}
        {showForm === 'All-users' && <AllUsers />}
      </div>
    </div>
  );
}
