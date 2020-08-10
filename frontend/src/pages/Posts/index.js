import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../../store/getActions';

import { Post } from '../../components/Post';
import Navbar from '../../components/Navbar'


const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return posts.map(post => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <>
      <Navbar />
      <section>
        <h1>Posts</h1>
        {renderPosts()}
      </section>
    </>
  )
}

export default PostsPage;
