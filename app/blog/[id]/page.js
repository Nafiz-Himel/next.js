import { notFound } from 'next/navigation';
import React from 'react'

const blogPage = async ({params}) => {
    const{id} = await params;

    if(id === "3" || id > "3") {
        notFound();
    }
  return (
    <div className='mt-6'>
      The blog id is: {id}
    </div>
  )
}

export default blogPage
