import React from 'react';

import Comment from './Comments';
import http from '../services/http';

/**
 * This class shows single comment.
 *
 * @class SingleComment
 * @extends {React.Component}
 */
class SingleComment extends React.Component {
  /**
   * Creates an instance of SingleComment.
   *
   * @param {*} props
   * @memberof SingleComment
   */
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  /**
   * Retrieve data for current comments from API and set into state.
   *
   * @memberof SingleComment
   */
  componentDidMount() {
    const { id } = this.props;

    http
      .getItem(id)
      .then((response) => {
        if (response.data.deleted) {
          return;
        }
        this.setState({
          data: response.data,
        });
      });
  }

  /**
   * Render component for current comments and its sub comments.
   *
   * @returns
   * @memberof SingleComment
   */
  render() {
    const { data } = this.state;
    const element = data ? data.text : 'Loading';
    const subComments = data ? <Comment data={data.kids} /> : '';

    return (
      <div>
        <p className='card'>{element}</p>
        {subComments}
      </div>
    );
  }
}

export default SingleComment;
