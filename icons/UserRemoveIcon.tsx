import * as React from 'react';

function UserRemoveIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M5.46447 3.46447C6.40215 2.52678 7.67392 2 9 2C10.3261 2 11.5979 2.52678 12.5355 3.46447C13.4732 4.40215 14 5.67392 14 7C14 8.32608 13.4732 9.59785 12.5355 10.5355C11.5979 11.4732 10.3261 12 9 12C7.67392 12 6.40215 11.4732 5.46447 10.5355C4.52678 9.59785 4 8.32608 4 7C4 5.67392 4.52678 4.40215 5.46447 3.46447ZM14 12C14 11.4477 14.4477 11 15 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15C14.4477 13 14 12.5523 14 12ZM4.05025 15.0503C5.36301 13.7375 7.14348 13 9 13C10.8565 13 12.637 13.7375 13.9497 15.0503C15.2625 16.363 16 18.1435 16 20V21C16 21.5523 15.5523 22 15 22H3C2.44772 22 2 21.5523 2 21V20C2 18.1435 2.7375 16.363 4.05025 15.0503Z"
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
        d="M9 4C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7C6 7.79565 6.31607 8.55871 6.87868 9.12132C7.44129 9.68393 8.20435 10 9 10C9.79565 10 10.5587 9.68393 11.1213 9.12132C11.6839 8.55871 12 7.79565 12 7C12 6.20435 11.6839 5.44129 11.1213 4.87868C10.5587 4.31607 9.79565 4 9 4ZM5.46447 3.46447C6.40215 2.52678 7.67392 2 9 2C10.3261 2 11.5979 2.52678 12.5355 3.46447C13.4732 4.40215 14 5.67392 14 7C14 8.32608 13.4732 9.59785 12.5355 10.5355C11.5979 11.4732 10.3261 12 9 12C7.67392 12 6.40215 11.4732 5.46447 10.5355C4.52678 9.59785 4 8.32608 4 7C4 5.67392 4.52678 4.40215 5.46447 3.46447ZM14 12C14 11.4477 14.4477 11 15 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15C14.4477 13 14 12.5523 14 12ZM4.05025 15.0503C5.36301 13.7375 7.14348 13 9 13C10.8565 13 12.637 13.7375 13.9497 15.0503C15.2625 16.363 16 18.1435 16 20V21C16 21.5523 15.5523 22 15 22H3C2.44772 22 2 21.5523 2 21V20C2 18.1435 2.7375 16.363 4.05025 15.0503ZM9 15C7.67392 15 6.40215 15.5268 5.46447 16.4645C4.52678 17.4021 4 18.6739 4 20H14C14 18.6739 13.4732 17.4021 12.5355 16.4645C11.5979 15.5268 10.3261 15 9 15Z"
        fill="inherit"
      />
    </svg>
  )
}

export default UserRemoveIcon;