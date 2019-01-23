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
    <div className='card'>
      <div className='card-header'>{data.title}</div>
      <div className='card-body'>
        <Comments data={data.kids} />
      </div>

    </div>
  );
};

export default SinglePost;
