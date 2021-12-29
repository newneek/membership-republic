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
        d="M4.40364 4.08509C4.09438 3.94865 3.73712 3.97768 3.45394 4.16226C3.17076 4.34684 3 4.66198 3 5V10C3 10.4845 3.34728 10.8993 3.82421 10.9844L12.3114 12.5L3.82421 14.0156C3.34728 14.1007 3 14.5155 3 15V20C3 20.338 3.17076 20.6532 3.45394 20.8377C3.73712 21.0223 4.09438 21.0514 4.40364 20.9149L21.4036 13.4149C21.7661 13.255 22 12.8962 22 12.5C22 12.1038 21.7661 11.745 21.4036 11.5851L4.40364 4.08509Z"
        fill="inherit"
      />
    </svg>
  )
}

export default SendIcon;