import * as React from 'react';

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M7.70711 8.7071C7.31659 9.09763 6.68342 9.09763 6.2929 8.70711C5.90237 8.31659 5.90237 7.68342 6.29289 7.2929L11.2928 2.2929C11.4804 2.10536 11.7347 2 11.9999 2C12.2652 2 12.5195 2.10536 12.7071 2.29289L17.7071 7.29289C18.0976 7.68341 18.0976 8.31658 17.7071 8.7071C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L13 5.4142V16C13 16.5523 12.5522 17 12 17C11.4477 17 11 16.5523 11 16V5.41423L7.70711 8.7071Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V20H4V15Z"
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
        d="M7.70711 8.7071C7.31659 9.09763 6.68342 9.09763 6.2929 8.70711C5.90237 8.31659 5.90237 7.68342 6.29289 7.2929L11.2928 2.2929C11.4804 2.10536 11.7347 2 11.9999 2C12.2652 2 12.5195 2.10536 12.7071 2.29289L17.7071 7.29289C18.0976 7.68341 18.0976 8.31658 17.7071 8.7071C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L13 5.4142V16C13 16.5523 12.5522 17 12 17C11.4477 17 11 16.5523 11 16V5.41423L7.70711 8.7071Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V20H4V15Z"
        fill="inherit"
      />
    </svg>
  );
}

export default UploadIcon;
