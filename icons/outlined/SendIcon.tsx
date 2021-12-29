import * as React from 'react';

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.45394 4.16226C3.73712 3.97768 4.09438 3.94865 4.40364 4.08509L21.4036 11.5851C21.7661 11.745 22 12.1038 22 12.5C22 12.8962 21.7661 13.255 21.4036 13.4149L4.40364 20.9149C4.09438 21.0514 3.73712 21.0223 3.45394 20.8377C3.17076 20.6532 3 20.338 3 20V15C3 14.5155 3.34728 14.1007 3.82421 14.0156L12.3114 12.5L3.82421 10.9844C3.34728 10.8993 3 10.4845 3 10V5C3 4.66198 3.17076 4.34684 3.45394 4.16226ZM15.0096 14.0498L5 15.8372V18.4658L15.0096 14.0498ZM15.0096 10.9502L5 6.53417V9.16276L15.0096 10.9502Z"
        fill="inherit"
      />
    </svg>
  )
}

export default SendIcon;