import * as React from 'react';

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20.1216C21 20.9223 20.1059 21.3983 19.4417 20.9512L12.5583 16.3186C12.2208 16.0915 11.7792 16.0915 11.4417 16.3186L4.55834 20.9512C3.89409 21.3983 3 20.9223 3 20.1216V3Z"
        fill="inherit"
      />
    </svg>
  )
}

export default BookmarkIcon;