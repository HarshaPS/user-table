import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pagination extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            pager: {}
        };
    }

    componentWillMount() {
        if (this.props.users && this.props.users.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.users !== prevProps.users) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        let { users, pageSize } = this.props;
        let pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(users.length, page, pageSize);
        let pageOfusers = users.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        this.props.onChangePage(pageOfusers);
    }

    getPager(totalusers, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 5;
        let totalPages = Math.ceil(totalusers / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalusers - 1);
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalusers: totalusers,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

      return (
        <ul className="pagination justify-content-end">
          <li className={pager.currentPage === 1 ? 'page-item disabled' : 'page-item'}>
              <a className="page-link" onClick={() => this.setPage(1)}>First</a>
          </li>
          <li className={pager.currentPage === 1 ? 'page-item disabled' : 'page-item'}>
              <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
          </li>
          {pager.pages.map((page, index) =>
              <li key={index} className={pager.currentPage === page ? 'page-item active' : 'page-item'}>
                  <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
              </li>
          )}
          <li className={pager.currentPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
              <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
          </li>
          <li className={pager.currentPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
              <a className="page-link" onClick={() => this.setPage(pager.totalPages)}>Last</a>
          </li>
      </ul>
      );
  }
}

const propTypes = {
  users: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number
}

const defaultProps = {
  initialPage: 1,
  pageSize: 5
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;