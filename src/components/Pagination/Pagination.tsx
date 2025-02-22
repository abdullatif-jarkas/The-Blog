import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  
  export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
    return (
      <div className="pagination border-t flex flex-col sm:flex-row gap-5 justify-between text-sm font-medium items-center pb-30 text-Normal dark:text-white pt-5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-sm font-medium flex items-center"
        >
        <IoMdArrowBack  className="mr-2 w-5 h-5"/>
          Previous
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-lg   ${
                currentPage === index + 1 ? 'bg-design text-date dark:text-emerald-950' : 'text-Normal dark:text-white'
              }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-sm font-medium flex items-center"
        >
          Next
          <IoMdArrowForward className="ml-2 w-5 h-5"/>
        </button>
      </div>
    );
  }
  