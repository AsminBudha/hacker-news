import React from 'react';
import { Link } from 'react-router-dom';

import Http from '../services/http';
import AppConstants from '../constants/common';

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
   * This function is called automatically after render is finished.
   * It retrieve data of current item from API.
   *
   * @memberof NewsItem
   */
  componentDidMount() {
    const { id } = this.props;

    Http
      .get(`${AppConstants.API_ITEM}/${id}`)
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
    const element = data ?
      <div>
        <h4>{data.title}</h4>
        <div>

          author : <span>{data.by} </span>
          created At : <span>{new Date(data.time).toLocaleString()} </span>
          type : <span>{data.type}</span>
          <span onClick={() => window.location.href = data.url}> Read More</span>
          Comments:
          <Link to={
            {
              pathname: `${AppConstants.API_ITEM}/:${data.id}`,
              state: { data: data }
            }}
          >
            {data.descendants}
          </Link>
        </div>
      </div> : 'Loading';

    return (
      <div className="card">
        {element}
      </div >
    );
  }
}

export default NewsItem;
