import React from 'react';

import NewsItem from './NewsItem';
import Http from '../services/http';
import AppConstants from '../constants/common';

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

    this.dataIds = [];
    this.state = ({
      page: 0,
      dataList: [],
      prevBtnDisabledStatus: true,
      nextBtnDisabledStatus: false,
    });
  }
  /**
   * Set data retrieved from server.
   *
   * @param {Object} data
   * @memberof App
   */
  setDataList = (data) => {
    const dataList = this.state.dataList.map((item) => ({ ...item }));

    dataList.push(data);
    this.setState({ dataList });
  }

  /**
   * Set id's of data into state.
   *
   * @param {Array<Number>} dataIds Id's of data in array.
   * @memberof App
   */
  setDataIds = (dataIds) => {
    this.setState({ dataIds });
  }

  /**
   * Empty the list of data in state.
   *
   * @memberof NewsList
   */
  emptyDataList = () => this.setState({ dataList: [] })

  /**
   * Update page number with value by either increase or decrease.
   *
   * @param {number} by Increase or Decrease value normally +-1.
   * @memberof NewsList
   */
  updatePage = (by) => {
    let { page, prevBtnDisabledStatus, nextBtnDisabledStatus } = this.state;

    page += by;
    page = Math.max(0, page);
    const MAX_LIMIT_PAGE_INDEX = Math.floor(this.dataIds.length / AppConstants.PAGINATION_LIMIT);

    page = Math.min(page, MAX_LIMIT_PAGE_INDEX);

    prevBtnDisabledStatus = page <= 0;
    nextBtnDisabledStatus = page >= MAX_LIMIT_PAGE_INDEX;

    this.setState({
      page,
      prevBtnDisabledStatus,
      nextBtnDisabledStatus,
    });
    this.setDataListForCurrentPage();
  }

  /**
   * This function is automatically called after render is done.
   *
   * @memberof App
   */
  async componentDidMount() {

    // if (this.dataIds.length <= 0) {
    const path = this.checkPath();
    const dataIds = await Http.get(path);

    this.dataIds = dataIds.data;
    // }
    this.setDataListForCurrentPage();
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
      case AppConstants.API_NEW_STORIES.toLowerCase():
        return AppConstants.API_NEW_STORIES;
      case AppConstants.API_BEST_STORIES.toLowerCase():
        return AppConstants.API_BEST_STORIES;
      case AppConstants.API_TOP_STORIES:
        return AppConstants.API_TOP_STORIES;
      default:
        return AppConstants.API_TOP_STORIES;
    }
  }

  /**
   * Set data for current page into state.
   *
   * @memberof NewsList
   */
  setDataListForCurrentPage = () => {
    this.emptyDataList();
    const start = this.state.page * AppConstants.PAGINATION_LIMIT;

    for (let i = start; i < start + AppConstants.PAGINATION_LIMIT && i < this.dataIds.length; i++) {
      Http
        .get(`${AppConstants.API_ITEM}/${this.dataIds[i]}`)
        .then((response) => {
          this.setDataList(response.data);
        });
    }
  }

  /**
   * Renders JSX component.
   *
   * @returns
   * @memberof NewsList
   */
  render() {
    const { dataList, prevBtnDisabledStatus, nextBtnDisabledStatus } = this.state;

    const listItem = dataList.map((item) =>
      <li key={item.id}>
        <NewsItem item={item} />
      </li>
    );

    return (
      <div>
        <ul className="accordion" id="accordionExample">
          {listItem}
        </ul>
        <button
          disabled={prevBtnDisabledStatus}
          onClick={() => this.updatePage(AppConstants.PAGINATION_DECREMENT_FACTOR)}
        >
          Prev
        </button>
        <button
          disabled={nextBtnDisabledStatus}
          onClick={() => this.updatePage(AppConstants.PAGINATION_INCREMENT_FACTOR)}
        >
          Next
        </button>
      </div>
    );
  }
}

export default NewsList;
