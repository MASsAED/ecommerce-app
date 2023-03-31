import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "https://amz.luxewatches.co.uk/app/uploads/2023/01/06150233/Rolex-Oyster-Perpetual-Datejust-36-Bi-metal-16233_F-1.png" };
    const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
          <Meta title={"Product Name"} />
          <BreadCrumb title="Product Name" />
          <div className="main-product-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-6">
                          <div className="main-product-image">
                              <div>
                                  <ReactImageZoom {...props} />
                              </div>
                          </div>
                          <div className="other-product-images d-flex flex-wrap gap-15">
                              <div>
                                <img src="https://amz.luxewatches.co.uk/app/uploads/2023/01/06150233/Rolex-Oyster-Perpetual-Datejust-36-Bi-metal-16233_F-1.png" className="img-fluid" alt="watch" />
                              </div>
                              <div>
                                <img src="https://amz.luxewatches.co.uk/app/uploads/2023/01/06150233/Rolex-Oyster-Perpetual-Datejust-36-Bi-metal-16233_F-1.png" className="img-fluid" alt="watch" />
                              </div>
                              <div>
                                <img src="https://amz.luxewatches.co.uk/app/uploads/2023/01/06150233/Rolex-Oyster-Perpetual-Datejust-36-Bi-metal-16233_F-1.png" className="img-fluid" alt="watch" />
                              </div>
                              <div>
                                <img src="https://amz.luxewatches.co.uk/app/uploads/2023/01/06150233/Rolex-Oyster-Perpetual-Datejust-36-Bi-metal-16233_F-1.png" className="img-fluid" alt="watch" />
                              </div>
                          </div>
                      </div>
                      <div className="col-6">
                          <div className="main-product-details"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="description-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <h4>Description</h4>
                          <div className="bg-white p-3">
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores, aliquam dolorem labore, error in nisi voluptates molestiae nobis fugiat dolorum eos! Ipsum commodi soluta deleniti exercitationem doloremque repellat molestiae?
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <section className="reviws-wrapper home-wrapper-2 ">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <h3>Reviews</h3>
                          <div className="review-inner-wrapper">
                              <div className="review-head d-flex justify-content-between align-items-end">
                                  <div>
                                      <h4 className="mb-2">Costomers Reviews</h4>
                                      <div className="d-flex align-items-center gap-10">
                                          <ReactStars
                                              count={5}
                                              size={24}
                                              edit={false}
                                              value={3}
                                              activeColor="#ffd700"
                                          />
                                          <p className="mb-0">Based on 2 Reviews</p>
                                      </div>
                                  </div>
                                  {
                                      orderedProduct && (
                                          <div>
                                              <a className="text-dark text-decoration-underline" href="">Write a Reveiw</a>
                                          </div>
                                      )}
                              </div>
                              <div className="review-form py-4">
                                  <h4>Write a Review</h4>
                                  <form action="" className="d-flex flex-column gap-15">
                                      <div>
                                          <ReactStars
                                              count={5}
                                              size={24}
                                              edit={true}
                                              value={3}
                                              activeColor="#ffd700"
                                          />
                                      </div>
                                      <div>
                                          <textarea
                                              type="text"
                                              className="form-control w-100"
                                              placeholder="Comments"
                                              id=""
                                              cols="30"
                                              rows="4"
                                              name=""
                                          ></textarea>
                                      </div>
                                      <div className="d-flex justify-content-end">
                                          <button className="button border-0">Submit Review</button>
                                      </div>
                                  </form>
                              </div>
                              <div className="reviews mt-4">
                                  <div className="review">
                                      <div className="d-flex align-items-center gap-10">
                                          <h6 className="mb-0">Masoud Saed</h6>
                                          <ReactStars
                                              count={5}
                                              size={24}
                                              edit={false}
                                              value={3}
                                              activeColor="#ffd700"
                                          />
                                      </div>
                                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit debitis inventore vero officia provident obcaecati, rem autem similique consectetur harum? Ab quam cumque quia eos magnam, esse assumenda officiis fugiat!</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="popular-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <h3 className="section-heading">
                              Our Popular Products
                          </h3>
                      </div>
                  </div>
                  <div className="row">

                      <ProductCard />
                  </div>
              </div>
          </section>
    </>
  )
}

export default SingleProduct
