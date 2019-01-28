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
   *
   * @returns
   * @memberof NewsItem
   */
  render() {
    const { data } = this.state;
    let element;

    if (data) {
      const { data: { id, title, by, time, type, descendants } } = this.state;

      element =
        <div>
          <h4>{title}</h4>
          <div>
            author : <span>{by} </span>
            created At : <span>{new Date(time).toLocaleString()} </span>
            type : <span>{type}</span>
            <span onClick={this.redirectToOriginalPost}> Read More</span>
            Comments:
            <Link to={
              {
                pathname: `${appConstants.API_ITEM}/${id}`,
                state: { data: data }
              }}
            >
              {descendants}
            </Link>
          </div>
        </div>;
    } else {
      element = 'Loading';
    }

    return (
      <div className="card">
        {element}
      </div >
    );
  }
}

export default NewsItem;
