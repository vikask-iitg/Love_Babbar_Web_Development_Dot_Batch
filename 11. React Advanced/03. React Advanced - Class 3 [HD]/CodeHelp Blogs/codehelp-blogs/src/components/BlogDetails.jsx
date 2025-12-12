import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const BlogDetails = ({ post }) => {
    return (
        <div>
            <NavLink to={`/blog/${post.id}`}>
                <span className='font-bold text-xl'>{post.title}</span>
            </NavLink>
            <p className='text-[10px]'>
                By
                <span className='italic'> {post.author} </span>
                on {" "}
                <NavLink to={`/categories/${post.category?.replaceAll(" ", "-")}`}>
                    <span className='underline font-bold'> {post.category}</span>
                </NavLink>
            </p>
            <p className='text-[10px]'>
                Posted on {post.date}
            </p>
            <p className='text-[14px] mt-2.5'>
                {post.content}
            </p>
            <div className='flex gap-3'>
                {post?.tags?.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag?.replaceAll(" ", "-")}`}>
                        <span className='text-blue-500 underline font-bold text-xs'>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
