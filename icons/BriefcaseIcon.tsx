import * as React from 'react';

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
    return (
      <svg
        width="24"
        height="24"
        strokeWidth="0"
        viewBox="0 0 24 24"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 6V7H5C3.89543 7 3 7.89543 3 9V12H10C10 11.4477 10.4477 11 11 11H13C13.5523 11 14 11.4477 14 12H21V9C21 7.89543 20.1046 7 19 7H17V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6ZM15 6H9V7H15V6Z"
          fill="inherit"
        />
        <path
          d="M21 14H14V15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15V14H3V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14Z"
          fill="inherit"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      strokeWidth="0"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6V7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H17V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6ZM15 6H9V7H15V6ZM19 9V12H15C15 10.8954 14.1046 10 13 10H11C9.89543 10 9 10.8954 9 12H5V9H19ZM9 14H5V18H19V14H15V15C15 16.1046 14.1046 17 13 17H11C9.89543 17 9 16.1046 9 15V14ZM13 12H11V15H13V12Z"
        fill="inherit"
      />
    </svg>
  );
}

export default BriefcaseIcon;
