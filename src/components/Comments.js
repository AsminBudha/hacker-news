import React from 'react';

import SingleComment from './SingleComment';

/**
 * Component for comments box and comments list.
 *
 * @param {Object} props Object of params send by calling object.
 */
const Comments = ({ data = [] }) => {
  const items = data
    .map((id) => {
      return <li key={id}><SingleComment id={id} /></li>;
    });

  return (
    <ul className='comments'>
      {items}
    </ul>
  );
};

export default Comments;
