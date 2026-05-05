import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: "about us",
  description: "This is the about us page of our website",
};


const layout = ({children}) => {
  return (
    <div>
        <nav className='mt-6 mb-6'>
          <ul className="flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
          </ul>
        </nav>
        {children}
    </div>
  )
}

export default layout
