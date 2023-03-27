import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
      <div className="col-3">
          <div className="blog-card">
              <div className="blog-image">
                  <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
              </div>
              <div className="blog-content">
                  <p className="date">26 March, 2023</p>
                  <h5 className="title">A Beautiful sunday morning renaissanc</h5>
                  <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae vero at ipsam, doloremque.
                  </p>
                  <Link to="/" className="button">Read More</Link>
              </div>
          </div>
    </div>
  )
}

export default BlogCard
