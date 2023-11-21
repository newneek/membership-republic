import * as React from 'react';

function PushPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5L8.00002 11.1301L5.94824 13.5238C5.11423 14.4968 5.8056 16 7.08713 16H11V22L12 23L13 22V16H16.9129C18.1944 16 18.8858 14.4968 18.0518 13.5238L16 11.1301V5C16.5523 4.99999 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H8Z"
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
        d="M8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5L8.00002 11.1301L5.94824 13.5238C5.11423 14.4968 5.8056 16 7.08713 16H11V22L12 23L13 22V16H16.9129C18.1944 16 18.8858 14.4968 18.0518 13.5238L16 11.1301V5C16.5523 4.99999 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H8ZM10 11.1301V5H14V11.1301C14 11.6075 14.1708 12.0692 14.4815 12.4317L15.8258 14H8.17424L9.51853 12.4317C9.82923 12.0692 10 11.6075 10 11.1301Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d=""
        fill="inherit"
      />
    </svg>
  );
}

export default PushPinIcon;

