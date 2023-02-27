import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const PaginitionOne = ({ getPage, pageNumber }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1); //pour add a number +0
    getPage(data.selected + 1);
  };
  const pageCount = 500;
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageNumber}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-link"
        nextClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default PaginitionOne;
