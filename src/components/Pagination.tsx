type Props = {
  onClick: (arg: number) => void;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ onClick, currentPage, totalPages }: Props) => {
  const pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }
  return (
    <div className="flex justify-center">
      <button
        className={`border-[1px] rounded-l-md p-5 ${
          currentPage - 1 <= 0
            ? 'text-[#BDBDBD] bg-transparent'
            : 'text-highlight  bg-white '
        }`}
        onClick={() => onClick(currentPage - 1)}
      >
        Prev
      </button>
      {pagesArray.map((item) => {
        return (
          <button
            className={`py-6 px-5  bg-white border-[1px] ${
              currentPage === item
                ? 'bg-highlight text-white'
                : 'text-highlight'
            }`}
            key={item}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        );
      })}
      <button
        className={`border-[1px] rounded-l-md p-5 ${
          currentPage === totalPages
            ? 'text-[#BDBDBD] bg-transparent'
            : 'text-highlight  bg-white '
        }`}
        onClick={() => onClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
