import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

function Pagination({ totalPages, setCurrentPage }) {
  const [currentButton, setCurrentButton] = useState(1);
  //   const pages = 10;
  const numOfPages = [];

  for (let i = 1; i <= totalPages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <nav
      style={{ display: "flex", justifyContent: "end" }}
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            <span className="fas fa-angle-left"></span>
          </Link>
        </li>
        {numOfPages.map((page, key) => {
          return (
            <li
              key={key}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
            >
              <Link
                className="page-link"
                to="#!"
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numOfPages.length ? prev : prev + 1
              )
            }
          >
            <span className="fas fa-angle-right"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
