import React from 'react';
import './BlogDetails.css';
const BlogDetails = ({ blog }) => {
    return (
        <section>
            <div class="col common-card blog-cardEffect py-4 p-3">
                <div className=" d-flex align-items-center">
                    <img className="mx-3" src={blog.authorImg} alt="" width="60" />
                    <div className="mt-5">
                        <p style={{ color: '#1CC7C1' }}>{blog.author}</p>
                        <p className="text-muted mt">{blog.date}</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{blog.title}</p>
                    <p className="text-muted">{blog.description}</p>
                </div>
                <div className="hover-content p-5">
                    <p  className="mb-2">{blog.author}</p>
                    <p className="mt">{blog.date}</p>
                    <p >{blog.description}</p>
                </div>

            </div>

        </section>
    );
};

export default BlogDetails;