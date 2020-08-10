import React, { useEffect } from 'react'
import { fetchPost } from '../../store/getActions';
import { fetchComments } from '../../store/getActions';

import { Post } from  '../../components/Post';
import { Comment } from '../../components/Comment';
import Navbar from '../../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';

const SinglePost = ({
  match,
  // dispatch,
  // post,
  // comments,
  // hasErrors,
  // loading,
}) => {
  const dispatch =  useDispatch();
  const { post, loading, hasErrors } = useSelector(state => state.post);
  const { comments, loading: commentsLoading, hasErrors: commentsError } = useSelector(state => state.comments);

  useEffect(() => {
    const { id } = match.params

    dispatch(fetchComments(id))
    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    if (loading) return <p>Loading post...</p>
    if (hasErrors) return <p>Unable to display post.</p>

    return <Post post={post} />
  }

  const renderComments = () => {
    if (commentsLoading) return <p>Loading comments...</p>
    if (commentsError) return <p>Unable to display comments.</p>

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <>
      <Navbar />
      <section>
        {renderPost()}
        <h2>Comments</h2>
        {renderComments()}
      </section>
    </>
  )
}

export default SinglePost;
