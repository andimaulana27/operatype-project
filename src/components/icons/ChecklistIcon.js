// src/components/icons/ChecklistIcon.js

const ChecklistIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_215_415)">
        <path
          d="M250 0C388.333 0 500 111.667 500 250C500 388.333 388.333 500 250 500C111.667 500 0 388.333 0 250C0 111.667 111.667 0 250 0ZM381.083 131.083L187.5 324.625L118.958 256.083L89.4167 285.583L187.5 383.625L410.625 160.583L381.083 131.083Z"
          fill="#C8705C"
        />
      </g>
      <defs>
        <clipPath id="clip0_215_415">
          <rect width="500" height="500" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChecklistIcon;