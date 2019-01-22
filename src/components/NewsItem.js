import React from 'react';
import { Link } from 'react-router-dom';

import AppConstants from '../constants/common';

/**
 * Renders single item of news.
 *
 * @class NewsItem
 * @extends {React.Component}
 */
class NewsItem extends React.Component {
  /**
   *
   *
   * @returns
   * @memberof NewsItem
   */
  render() {
    const { id, title, by, time, type, url, descendants } = this.props.item;

    return (
      <div className="card">
        <h4>{title}</h4>
        <div>

          author : <span>{by} </span>
          created At : <span>{new Date(time).toLocaleString()} </span>
          type : <span>{type}</span>
          <span onClick={() => window.location.href = url}> Read More</span>
          Comments: <Link to={`${AppConstants.API_ITEM}/${id}`}>{descendants}</Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
