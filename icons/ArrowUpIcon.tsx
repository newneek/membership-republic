import * as React from 'react';

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M19.7071 10.7071C19.3166 11.0976 18.6834 11.0976 18.2929 10.7071L13 5.41423L13 21C13 21.5523 12.5523 22 12 22C11.4478 22 11 21.5523 11 21L11.0001 5.4142L5.7071 10.7071C5.31658 11.0976 4.68341 11.0976 4.29289 10.7071C3.90237 10.3166 3.90237 9.68341 4.29289 9.29289L11.2929 2.29289C11.4805 2.10535 11.7348 2 12.0001 2C12.2653 2 12.5196 2.10536 12.7072 2.2929L19.7071 9.2929C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071Z"          fill="inherit"
        />
      </svg>
    );
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
        d="M19.7071 10.7071C19.3166 11.0976 18.6834 11.0976 18.2929 10.7071L13 5.41423L13 21C13 21.5523 12.5523 22 12 22C11.4478 22 11 21.5523 11 21L11.0001 5.4142L5.7071 10.7071C5.31658 11.0976 4.68341 11.0976 4.29289 10.7071C3.90237 10.3166 3.90237 9.68341 4.29289 9.29289L11.2929 2.29289C11.4805 2.10535 11.7348 2 12.0001 2C12.2653 2 12.5196 2.10536 12.7072 2.2929L19.7071 9.2929C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071Z"        fill="inherit"
      />
    </svg>
  );
}

export default ArrowUpIcon;
