import * as React from 'react';

function HightlightAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 0H21V2H23V4H21V6H19V4H17V2H19V0Z" fill="inherit"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2H16V5H18V7H21V20C21 21.1046 20.1046 22 19 22H9.00537L3 16V4C3 2.89543 3.89543 2 5 2ZM17 7H7V9H17V7ZM17 11H7V13H17V11ZM12 15H17V17H12V15ZM10 15V21L4 15H10Z"
        fill="inherit"
      />
    </svg>
  )
}

export default HightlightAddIcon;