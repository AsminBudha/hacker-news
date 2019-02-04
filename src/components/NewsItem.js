import React from 'react';
import { Link } from 'react-router-dom';

import http from '../services/http';
import * as appConstants from '../constants/common';

/**
 * Renders single item of news.
 *
 * @class NewsItem
 * @extends {React.Component}
 */
class NewsItem extends React.Component {
  /**
   * Creates an instance of NewsItem.
   *
   * @param {*} props
   * @memberof NewsItem
   */
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  /**
   * Redirect the page to orignal post site.
   *
   * @memberof NewsItem
   */
  redirectToOriginalPost = () => {
    const { data: { url } } = this.state;

    window.location.href = url;
  }

  /**
   * This function is called automatically after render is finished.
   * It retrieve data of current item from API.
   *
   * @memberof NewsItem
   */
  componentDidMount() {
    const { id } = this.props;

    http
      .getItem(id)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      });
  }

  /**
   * JSX element to render.
   *
   * @returns
   * @memberof NewsItem
   */
  render() {
    const { data } = this.state;
    let element;

    if (data) {
      const { data: { id, title, by, time, type, descendants } } = this.state;
      const createdDate = new Date(time).toLocaleString();

      element =
        <div className='card card-wrapper'>
          <div className='card-header'>{title}</div>
          <div className='card-body'>
            <h6 className='blockquote-footer'>
              <cite title={by}>{by}</cite>
            </h6>

            <h6 className="card-subtitle mb-2 text-muted">
              Created At: {createdDate}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">Type: {type}</h6>
            <Link className='card-subtitle mb-2'
              to={
                {
                  state: { data: data },
                  pathname: `${appConstants.API_ITEM}/${id}`,
                }}
            >
              Comments: {descendants}
            </Link>
            <button
              onClick={this.redirectToOriginalPost}
              className="btn btn-primary card-read-more"
            >
              Read More
            </button>
          </div>
        </div>;
    } else {
      element = <div className="card">Loading</div>;
    }

    return (
      <>
        {element}
      </>
    );
  }
}

export default NewsItem;
