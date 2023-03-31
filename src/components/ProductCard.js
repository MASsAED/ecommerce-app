import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                        <img src="images/watch-1.png" className="img-fluid" alt="watch" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones balk 10 pack multi colors for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={3}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni provident doloremque rem inventore, ducimus enim suscipit, voluptatum harum, animi voluptatibus fugit possimus hic temporibus. Asperiores dolorem iure maxime adipisci cumque?
                        </p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="compare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link to=":id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                        <img src="images/watch-1.png" className="img-fluid" alt="watch" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones balk 10 pack multi colors for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={3}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none" } `}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni provident doloremque rem inventore, ducimus enim suscipit, voluptatum harum, animi voluptatibus fugit possimus hic temporibus. Asperiores dolorem iure maxime adipisci cumque?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="compare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
