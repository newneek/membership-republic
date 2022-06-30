import * as React from 'react';

function ChevronDoubleDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M3.70711 9.29289L12 17.5858L20.2929 9.29289C20.6834 8.90237 21.3166 8.90237 21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289ZM3.70711 3.29289L12 11.5858L20.2929 3.29289C20.6834 2.90237 21.3166 2.90237 21.7071 3.29289C22.0976 3.68342 22.0976 4.31658 21.7071 4.70711L12.7071 13.7071C12.3166 14.0976 11.6834 14.0976 11.2929 13.7071L2.29289 4.70711C1.90237 4.31658 1.90237 3.68342 2.29289 3.29289C2.68342 2.90237 3.31658 2.90237 3.70711 3.29289Z"
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.70711 9.29289L12 17.5858L20.2929 9.29289C20.6834 8.90237 21.3166 8.90237 21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289ZM3.70711 3.29289L12 11.5858L20.2929 3.29289C20.6834 2.90237 21.3166 2.90237 21.7071 3.29289C22.0976 3.68342 22.0976 4.31658 21.7071 4.70711L12.7071 13.7071C12.3166 14.0976 11.6834 14.0976 11.2929 13.7071L2.29289 4.70711C1.90237 4.31658 1.90237 3.68342 2.29289 3.29289C2.68342 2.90237 3.31658 2.90237 3.70711 3.29289Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChevronDoubleDownIcon;