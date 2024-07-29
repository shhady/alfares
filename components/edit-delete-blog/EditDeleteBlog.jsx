'use client';
import React, { useState } from 'react';
import { FilePenLine, Trash2 } from 'lucide-react';
import Modal from '../modal/Modal';
import { useRouter } from 'next/navigation'

export default function EditDeleteBlog({ blog, onBlogUpdate }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [content, setContent] = useState(blog.content);
  const router = useRouter()

  const handleUpdate = async () => {
    const response = await fetch(`/api/blogs/update-blog/${blog._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, content }),
    });

    if (response.ok) {
      setShowUpdateModal(false);
      onBlogUpdate();
    } else {
      alert('Failed to update the blog');
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/blogs/delete-blog/${blog._id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setShowDeleteModal(false);
      router.push('/blog', { scroll: false })
      // Redirect to another page or update the UI
    } else {
      alert('Failed to delete the blog');
    }
  };

  return (
    <div className='flex gap-4'>
      <button onClick={() => setShowUpdateModal(true)}>
        <FilePenLine />
      </button>
      <button onClick={() => setShowDeleteModal(true)}>
        <Trash2 />
      </button>

      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        confirmText="مسح"
        cancelText="الغاء"
      >
        <div className='h-1/2-screen'>
          <p className='text-black'>هل انت متأكد؟ </p>
        </div>
      </Modal>

      <Modal
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        onConfirm={handleUpdate}
        confirmText="تعديل"
        cancelText="الغاء"
      >
        <div className='flex flex-col gap-4 text-black'>
          <label>
            العنوان:
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border p-2 rounded'
          />
          <label>
            الكاتب:
          </label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border p-2 rounded'
          />
          <label>
            المحتوى:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border p-2 rounded flex-1'
            style={{ minHeight: '400px' }}
          />
        </div>
      </Modal>
    </div>
  );
}
