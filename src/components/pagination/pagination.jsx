import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({
  pagesNumber,
  currentPageNumber,
  handleChangePageNumber,
}) {
  const handleNext = () => {
    handleChangePageNumber(currentPageNumber + 1);
  };

  const handlePrev = () => {
    handleChangePageNumber(currentPageNumber - 1);
  };

  return (
    <Pagination>
      {pagesNumber > 5 && <Pagination.First />}
      <Pagination.Prev disabled={currentPageNumber < 2} onClick={handlePrev} />

      {Array.from(Array(pagesNumber), (e, i) => {
        return (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPageNumber}
            onClick={() => handleChangePageNumber(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        disabled={currentPageNumber > pagesNumber - 1}
        onClick={handleNext}
      />
      {pagesNumber > 5 && <Pagination.Last />}
    </Pagination>
  );
}

PaginationComponent.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  handleChangePageNumber: PropTypes.func.isRequired,
};

export default PaginationComponent;
