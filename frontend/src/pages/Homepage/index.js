import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'

const Home = () => (
 <>
  <Navbar />
  <section>
    <h1>Home</h1>
    <p>This is the dashboard.</p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </section>
 </>
)

export default Home;
