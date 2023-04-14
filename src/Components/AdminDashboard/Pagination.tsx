import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./index.css";

interface PaginationProps {
  currentPage: number;
  totalPages: any;
  onChange: (page: number) => void;
  setPage: (page: number) => void;
  interviewsData: any;
  setPaginatedData: any;
  perPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
  setPage,
  interviewsData,
  setPaginatedData,
 
  perPage,
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const [endPage, setEndPage] = useState<number>(0);

  useEffect(() => {
    const newPages: number[] = [];
    let startPage = currentPage;
    let endPage = totalPages;
    const maxPages = 3; // Maximum number of visible pages in the middle

    if (totalPages > maxPages) {
      const middlePage = Math.floor(maxPages / 2);

      if (currentPage > middlePage) {
        startPage = currentPage - middlePage;
        endPage = currentPage + middlePage;
      } else {
        startPage = 1;
        endPage = maxPages;
      }
     
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPages + 1;
      }
      setEndPage(endPage);
    }

    for (let i = startPage; i <= endPage; i++) {
      newPages?.push(i);
    }

    setPages(newPages);
  }, [currentPage, totalPages]);

  const handlePageChange = (page: any) => {

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    if (page !== currentPage && page >= 1 && page <= totalPages) {
      const lecturdata = interviewsData.slice(startIndex, endIndex);
      setPaginatedData(lecturdata);
      setPage(page);
     
      onChange(page);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <Button
            isDisabled={currentPage === 1}
            w="auto"
            borderRadius="6px"
            h="32px"
            className="page-link"
            bg="white"
            color="rgb(107,114,128)"
            border="1px solid rgb(209,213,219)"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <Button
              bg={currentPage === page ? "rgb(37,54,235)" : "white"}
              color={currentPage === page ? "white" : "rgb(107,114,128)"}
              w="auto"
              borderRadius="6px"
              h="32px"
              _hover={{ bg: "blue", color: "white" }}
              border="1px solid rgb(209,213,219)"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
            
          </li>
        ))}


        {totalPages > 3 && pages[pages.length - 1] < totalPages && (
        
            <li>
              <Button
                w="auto"
                borderRadius="6px"
                h="32px"
                bg="white"
                color="rgb(107,114,128)"
                border="1px solid rgb(209,213,219)"
                onClick={() => handlePageChange(Number(currentPage) + 1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </li>

     )}
     </ul>
      
    </nav>
  );
};

export default Pagination;
