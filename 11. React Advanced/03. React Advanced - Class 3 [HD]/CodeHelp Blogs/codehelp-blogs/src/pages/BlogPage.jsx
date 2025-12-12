import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { BlogDetails } from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';


export const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
  const [blog, setBlog] = useState([]);
  const [relatedBlog, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error aagya in blog id wali call me");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className='w-[640px] mx-auto mt-12 flex flex-col'>
      <div className='mb-5'>
        <button
          className='rounded-md border px-4 py-1 cursor-pointer'
          onClick={() => navigation(-1)}>
          Back
        </button>
      </div>

      {
        loading ?
          (
            <div>
              <p> Loading</p>
            </div>) :
          (blog ?
            (
              <div>
                <BlogDetails post={blog} />
                <h2 className='font-bold text-2xl my-4 underline'>Related Blogs</h2>
                {
                  relatedBlog.map((post) => (
                    <div key={post.id}>
                      <BlogDetails post={post} />
                    </div>
                  ))
                }
              </div>
            ) :
            (<div>No Blog Found</div>))
      }
    </div>
  )
}
