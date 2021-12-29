import * as React from 'react';

function PlusBoxIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM8 11C7.44492 11 6.99493 11.45 6.99493 12.0051C6.99493 12.5602 7.44492 13.0101 8 13.0101L10.9949 13.005V15.9949C10.9949 16.55 11.4449 17 11.9999 17C12.555 17 13.005 16.55 13.005 15.9949V13.005L15.9949 13.0101C16.55 13.0101 17 12.5602 17 12.0051C17 11.45 16.55 11 15.9949 11L13.005 10.9949L13 8C13 7.44492 12.55 6.99493 11.9949 6.99493C11.4398 6.99493 10.9899 7.44492 10.9899 8L10.9949 10.9949L8 11Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PlusBoxIcon;