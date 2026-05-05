import React from 'react'
import Link from 'next/link';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the description of blog 1"
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the description of blog 2"
    }
  ];

  return (
    <main>
      <div className='mt-6 mb-6'>
        Blogs page
      </div>
      <hr className='mb-2'/>
      <ul>
        {blogs.map((blog) => (
          <li className='mb-5' key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Blog;