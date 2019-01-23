import React from 'react';

import Comments from './Comments';

/**
 * This component is called when post is clicked.
 * It shows post title and comments.
 *
 * @param {Object} props
 */
const SinglePost = (props) => {
  const { data } = props;

  return (
    <div>
      <h2>{data.title}</h2>
      <Comments data={data.kids} />
    </div>
  );
};

export default SinglePost;
