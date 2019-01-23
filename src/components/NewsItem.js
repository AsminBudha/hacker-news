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
      <div className='card card-wrapper'>
        <div className='card-header'>{data.title}</div>
        <div className='card-body'>
          <h6 className='blockquote-footer'>
            <cite title={data.by} >{data.by}</cite>
          </h6>

          <h6 className="card-subtitle mb-2 text-muted">Created At: {new Date(data.time).toLocaleString()} </h6>
          <h6 className="card-subtitle mb-2 text-muted">Type: {data.type}</h6>
          <Link className='card-subtitle mb-2 text-muted'
            to={
              {
                pathname: `${AppConstants.API_ITEM}/:${data.id}`,
                state: { data: data }
              }}
          >
            Comments: {data.descendants}
          </Link>
          <button onClick={() => window.location.href = data.url} className="btn btn-primary card-read-more">Read More</button>
        </div>
      </div> : <div className="card">Loading</div>;

    return (
      <>
        {element}
      </>
    );
  }
}

export default NewsItem;
