import * as React from 'react';

function InformationCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13V16C11 16.5523 11.4477 17 12 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15V12C13 11.4477 12.5523 11 12 11H11Z"
        fill="inherit"
      />
    </svg>
  )
}

export default InformationCircleIcon;