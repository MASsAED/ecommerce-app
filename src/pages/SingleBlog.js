import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <>
          <Meta title={"Dynamic Blog Name"} />
          <BreadCrumb title="Dynamic Blog Name" />
          <div className="blog-Wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="single-blog-card">
                              <Link to="/blogs" className="d-flex gap-10 align-items-center">
                                  <HiArrowNarrowLeft className="fs-4"/>Go Back To Blogs</Link>
                              <h3 className="title">
                                     A Beatiful Sunday Morning Renaissance
                              </h3>
                              <img src="images/headphoneblog.webp" className="img-fluid w-100 my-4" alt="blog" />
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero! Veniam minima delectus voluptatem odio corporis, perspiciatis error aut reiciendis iusto minus sit ab assumenda alias, at necessitatibus culpa distinctio!
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </>
  )
}

export default SingleBlog
