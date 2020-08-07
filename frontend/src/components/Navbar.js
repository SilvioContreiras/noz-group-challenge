import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <section>
      <Link to="/home">Dashboard</Link>
      <Link to="/posts">Posts</Link>
    </section>
    <div>
      <Link to='/'>Login</Link>
    </div>
  </nav>
)


export default Navbar;
