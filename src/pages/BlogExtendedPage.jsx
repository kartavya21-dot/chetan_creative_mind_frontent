import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'

const BlogExtendedPage = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState("");

    useEffect(() => {
        if(blogId){
          const _blog = assets.BLOGS[blogId];
          setBlog(_blog);
        }
    }, [blogId])

  return (
    <div className='p-3 min-h-screen'>
        <h1 className='text-3xl font-bold md:text-4xl'>{blog.title}</h1>
        <hr className='text-gray-300 my-3'/>
        <p className='px-2 text-md md:text-xl'>{blog.paragraphs}</p>
    </div>
  )
}

export default BlogExtendedPage