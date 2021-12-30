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
        d="M8.00507 10.9949C7.44998 10.9949 7 11.4449 7 11.9999C7 12.555 7.44998 13.005 8.00507 13.005L10.9949 13.005V15.9949C10.9949 16.55 11.4449 17 11.9999 17C12.555 17 13.005 16.55 13.005 15.9949V13.005L15.9949 13.005C16.55 13.005 17 12.555 17 11.9999C17 11.4449 16.55 10.9949 15.9949 10.9949H13.005V8.00507C13.005 7.44998 12.555 7 11.9999 7C11.4449 7 10.9949 7.44998 10.9949 8.00507V10.9949H8.00507Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PlusBoxIcon;