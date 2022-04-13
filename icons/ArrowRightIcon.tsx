import * as React from 'react';

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4478 2.44772 11 3 11L18.5858 11.0001L13.2929 5.7071C12.9024 5.31658 12.9024 4.68341 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C21.8946 11.4805 22 11.7348 22 12.0001C22 12.2653 21.8946 12.5196 21.7071 12.7072L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071Z"
          fill="inherit"
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
        d="M13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4478 2.44772 11 3 11L18.5858 11.0001L13.2929 5.7071C12.9024 5.31658 12.9024 4.68341 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C21.8946 11.4805 22 11.7348 22 12.0001C22 12.2653 21.8946 12.5196 21.7071 12.7072L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071Z"
        fill="inherit"
      />
    </svg>
  );
}

export default ArrowRightIcon;
