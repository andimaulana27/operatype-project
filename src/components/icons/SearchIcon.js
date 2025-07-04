// src/components/icons/SearchIcon.js

const SearchIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >   
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M203.286 34.8489C110.261 34.8489 34.8494 110.26 34.8494 203.285C34.8494 296.311 110.261 371.721 203.286 371.721C296.311 371.721 371.722 296.311 371.722 203.285C371.722 110.26 296.311 34.8489 203.286 34.8489ZM0.000488281 203.285C0.000488281 91.0139 91.0143 0 203.286 0C315.557 0 406.571 91.0139 406.571 203.285C406.571 315.556 315.557 406.57 203.286 406.57C91.0143 406.57 0.000488281 315.556 0.000488281 203.285Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M330.36 330.36C337.165 323.555 348.196 323.555 355.001 330.36L494.396 469.755C501.201 476.56 501.201 487.591 494.396 494.396C487.591 501.2 476.561 501.2 469.756 494.396L330.36 355C323.555 348.195 323.555 337.165 330.36 330.36Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SearchIcon;