import * as React from 'react';

function HighlightAddIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 0H19V2H17V4H19V6H21V4H23V2H21V0Z" fill="inherit"/>
      <path
        d="M15 2H5C3.89543 2 3 2.89543 3 4V16L9.00537 22H19C20.1046 22 21 21.1046 21 20V8H19V20H10V15H5V4H15V2Z"
        fill="inherit"
      />
      <path d="M7 7H17V9H7V7Z" fill="inherit"/>
      <path d="M7 11H17V13H7V11Z" fill="inherit" />
      <path d="M17 15H12V17H17V15Z" fill="inherit" />
    </svg>
  )
}

export default HighlightAddIcon;