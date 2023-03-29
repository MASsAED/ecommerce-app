import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Login = () => {
  return (
    <>
          <Meta title={"Login"} />
          <BreadCrumb title="Login" />
          <div className="login-wrapper home-wrapper py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                              <h3 className="text-center mb-3">Login</h3>
                              <form action="" className="d-flex flex-column gap-15">
                                  <div>
                                      <input type="email" name="email" placeholder="Email" className="form-control" />
                                  </div>
                                  <div className="mt-1">
                                      <input type="password" name="password" placeholder="Password" className="form-control" />

                                  </div>
                                  <div>
                                      <Link to="/forgot-password">Forgot Password?</Link>
                                      <div className="d-flex align-items-center justify-content-center gap-15">
                                          <button className="button border-0" type="submit">Login</button>
                                          <Link to='/signup' className="button signup">SignUp</Link>

                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Login
