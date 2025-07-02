// src/components/icons/DropdownIcon.js

const DropdownIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 135L249.293 363.293C249.683 363.683 250.317 363.683 250.707 363.293L479 135"
        stroke="currentColor"
        strokeWidth="30"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DropdownIcon;