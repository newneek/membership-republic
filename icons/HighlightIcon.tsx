import * as React from 'react';

function HighlightIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
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
          d="M9.00537 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V16L9.00537 22ZM10 15V21L4 15H10ZM17 7H7V9H17V7ZM7 11H17V13H7V11ZM17 15H12V17H17V15Z"
          fill="inherit"
        />
      </svg>
    )
  }
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
      <path d="M7 11H17V13H7V11Z" fill="inherit"/>
      <path d="M17 15H12V17H17V15Z" fill="inherit"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00537 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V16L9.00537 22ZM19 4H5V15H10V20H19V4Z"
        fill="inherit"
      />
    </svg>
  )
}

export default HighlightIcon;