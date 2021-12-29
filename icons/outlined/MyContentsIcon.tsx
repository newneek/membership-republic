import * as React from 'react';

function MyContentsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 7H7V9H17V7Z" fill="inherit"/>
      <path d="M17 11H7V13H17V11Z" fill="inherit"/>
      <path d="M7 15H17V17H7V15Z" fill="inherit"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2ZM5 4V20H19V4H5Z"
        fill="inherit"
      />
    </svg>
  )
}

export default MyContentsIcon;