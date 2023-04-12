interface Props {
  onClick?: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => {
        if (onClick) onClick();
      }}>
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"></path>
      </svg>
    </button>
  );
};

export default Hamburger;
