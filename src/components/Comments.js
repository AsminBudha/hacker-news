import React from 'react';

/**
 * This class renders comments for single Post.
 *
 * @class Comments
 * @extends {React.Component}
 */
class Comments extends React.Component {
  /**
   * Creates an instance of Comments.
   *
   * @param {*} props
   * @memberof Comments
   */
  constructor(props) {
    super(props);
  }

  /**
   * This function is called automaticall after component is rendered.
   *
   * @memberof Comments
   */
  componentDidMount() {

  }
  /**
   * Render is automatically called to render its components.
   *
   * @returns
   * @memberof Comments
   */
  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

export default Comments;
