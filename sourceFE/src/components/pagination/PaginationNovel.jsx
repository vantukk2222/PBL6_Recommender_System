import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";
function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${
        active
          ? "bg-blue-500 text-blue-500  border-2 border-blue-500"
          : "text-black  border-2 border-blue-200"
      }
      ${
        !disabled
          ? "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          : "text-blue-200 bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() =>
            gotoPage({
              currentPage: pageIndexToMap + 1,
              totalPages: pageCount + 1,
            })
          }
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() =>
            gotoPage({
              currentPage: 1,
              totalPages: pageCount + 1,
            })
          }
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() =>
            gotoPage({
              currentPage: pageCount + 1,
              totalPages: pageCount + 1,
            })
          }
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

function PaginationNav1Presentation({ pageIndex, setPageIndex, pageCount }) {
  //   const [pageIndex, setPageIndex] = useState(0);
  //   const pageCount = 10;
  return (
    <div className="flex gap-3 flex-wrap p-6 py-12">
      <PaginationNav1
        gotoPage={setPageIndex}
        canPreviousPage={pageIndex - 1 > 0}
        canNextPage={pageIndex - 1 < pageCount - 1}
        pageCount={pageCount - 1}
        pageIndex={pageIndex - 1}
      />
    </div>
  );
}

Button2.propTypes = {
  content: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
PaginationNav1.propTypes = {
  gotoPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
};
PaginationNav1Presentation.propTypes = {
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
  pageCount: PropTypes.number,
};

export { PaginationNav1Presentation };
