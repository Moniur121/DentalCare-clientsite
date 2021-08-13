import React from 'react';
import './Blog.css';
import wilson from '../../images/wilson.png';
import BlogDetails from '../BlogDetails/BlogDetails';
const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]
const Blog = () => {
    return (
        <section className=" homeSection-containerBg" id="blog">
            <div className="container py-5">
                <div className="section-header text-center py-5 mb-5">
                    <h4 style={{ color: '#7FFFD4' }}>OUR BLOG</h4>
                    <h2 style={{ color: '#203047' }}>From Our Blog News</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;