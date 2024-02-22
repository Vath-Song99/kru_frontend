import React from "react";

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  return (
    <>
      <form className="w-full relative my-5">
        <input
          type="text"
          placeholder="Searching..."
          className="w-full shadow-md pl-20 pr-4 py-3.5 rounded-lg border focus:outline-none focus:border-[#7B2CBF] text-left"
        />
        <button
          type="submit"
          className="absolute left-10 top-0 mt-3 mr-4 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#455445"
              d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.904 7.904 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96c0 4.39 3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94l3.75 3.75zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96z"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export { SearchInput };
