import React from 'react';

import NewsItem from './NewsItem';
import http from '../services/http';
import * as appConstants from '../constants/common';

/**
 * Display list of item.
 *
 * @class NewsList
 * @extends {React.Component}
 */
class NewsList extends React.Component {
  /**
   * Creates an instance of NewsList.
   *
   * @param {*} props
   * @memberof NewsList
   */
  constructor(props) {
    super(props);

    this.state = ({
      page: 0,
      dataIds: [],
      prevBtnDisabledStatus: true,
      nextBtnDisabledStatus: false,
    });
  }

  /**
   * Update page number with value by either increase or decrease.
   *
   * @param {number} incrementFactor Increase or Decrease value normally +-1.
   * @memberof NewsList
   */
  updatePage = (incrementFactor) => {
    const { dataIds } = this.state;
    let { page, prevBtnDisabledStatus, nextBtnDisabledStatus } = this.state;

    page += incrementFactor;
    page = Math.max(0, page);
    const MAX_LIMIT_PAGE_INDEX = Math.floor(dataIds.length / appConstants.PAGINATION_LIMIT);

    page = Math.min(page, MAX_LIMIT_PAGE_INDEX);

    prevBtnDisabledStatus = page <= 0;
    nextBtnDisabledStatus = page >= MAX_LIMIT_PAGE_INDEX;

    this.setState({
      page,
      prevBtnDisabledStatus,
      nextBtnDisabledStatus,
    });
  }

  /**
   * Check current url and returns respective API_PATH to retrieve data.
   *
   * @memberof NewsList
   */
  checkPath = () => {
    const { location: {
      pathname
    } } = this.props;

    switch (pathname.toLowerCase()) {
      case appConstants.API_NEW_STORIES.toLowerCase():
        return appConstants.API_NEW_STORIES;
      case appConstants.API_BEST_STORIES.toLowerCase():
        return appConstants.API_BEST_STORIES;
      case appConstants.API_TOP_STORIES:
        return appConstants.API_TOP_STORIES;
      default:
        return appConstants.API_TOP_STORIES;
    }
  }

  /**
   * This function is automatically called after render is done.
   * Retrieve news ids from API and set into state.
   *
   * @memberof App
   */
  componentDidMount() {
    const path = this.checkPath();
    const dataIds = http.getNews(path);

    dataIds.then((res) => {
      this.setState({
        dataIds: res.data
      });
    });
  }

  /**
   * Renders JSX component.
   * Component with news list and pagination button below.
   *
   * @returns
   * @memberof NewsList
   */
  render() {
    const { prevBtnDisabledStatus, nextBtnDisabledStatus, dataIds, page } = this.state;
    const start = page * appConstants.PAGINATION_LIMIT;
    const end = Math.min(start + appConstants.PAGINATION_LIMIT, dataIds.length);
    const dataIdList = dataIds.slice(start, end);
    const listItem = dataIdList.map((id) =>
      <li key={id}>
        <NewsItem id={id} />
      </li>
    );
    const prevBtnDisabledStatusTxt = prevBtnDisabledStatus ? 'disabled' : '';
    const nextBtnDisabledStatusTxt = nextBtnDisabledStatus ? 'disabled' : '';

    return (
      <div>
        <ul>
          {listItem}
        </ul>
        <div>
          <ul className="pagination justify-content-center">
            <li
              className={`page-item ${prevBtnDisabledStatusTxt}`}
              onClick={() => this.updatePage(appConstants.PAGINATION_DECREMENT_FACTOR)}>
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">{page + 1}</a></li>
            <li
              className={`page-item ${nextBtnDisabledStatusTxt}`}
              onClick={() => this.updatePage(appConstants.PAGINATION_INCREMENT_FACTOR)}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      </div >
    );
  }
}

export default NewsList;
