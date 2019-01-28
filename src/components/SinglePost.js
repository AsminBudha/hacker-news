import React from 'react';

import Comments from './Comments';

/**
 * This component is called when post is clicked.
 * It shows post title and comments.
 *
 * @param {Object} props
 */
const SinglePost = (props) => {
  const { data: { title, kids } } = props;

  return (
    <div>
      <h2>{title}</h2>
      <Comments data={kids} />
    </div>
  );
};

export default SinglePost;
