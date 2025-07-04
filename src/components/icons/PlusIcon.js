// src/components/icons/PlusIcon.js
const PlusIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M250 475V25" stroke="currentColor" strokeWidth="40" /> 
      <path d="M25 250L475 250" stroke="currentColor" strokeWidth="40" />
    </svg>
  );
};
export default PlusIcon;