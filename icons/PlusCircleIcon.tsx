import * as React from 'react';

function PlusCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893ZM6.75757 12C6.75757 11.4477 7.20528 11 7.75757 11H11.0002V7.75732C11.0002 7.20504 11.4479 6.75732 12.0002 6.75732C12.5525 6.75732 13.0002 7.20504 13.0002 7.75732V11H16.2429C16.7951 11 17.2429 11.4477 17.2428 12C17.2429 12.5522 16.7951 13 16.2429 13H13.0002V16.2426C13.0002 16.7949 12.5525 17.2426 12.0002 17.2426C11.4479 17.2426 11.0002 16.7949 11.0002 16.2426V13H7.75757C7.20528 13 6.75757 12.5522 6.75757 12Z"
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
        d="M7.75747 11C7.20519 11 6.75747 11.4477 6.75748 12C6.75747 12.5523 7.20519 13 7.75747 13H11.0001V16.2426C11.0001 16.7949 11.4478 17.2426 12.0001 17.2426C12.5524 17.2426 13.0001 16.7949 13.0001 16.2426V13H16.2428C16.795 13 17.2428 12.5523 17.2428 12C17.2428 11.4477 16.795 11 16.2428 11H13.0001V7.75736C13.0001 7.20507 12.5524 6.75736 12.0001 6.75736C11.4478 6.75736 11.0001 7.20507 11.0001 7.75736V11H7.75747Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 13.3132 2.25866 14.6136 2.7612 15.8268C3.26375 17.0401 4.00035 18.1425 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C13.3132 22 14.6136 21.7413 15.8268 21.2388C17.0401 20.7362 18.1425 19.9997 19.0711 19.0711C19.9997 18.1425 20.7362 17.0401 21.2388 15.8268C21.7413 14.6136 22 13.3132 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 13.0506 19.7931 14.0909 19.391 15.0615C18.989 16.0321 18.3997 16.914 17.6569 17.6569C16.914 18.3997 16.0321 18.989 15.0615 19.391C14.0909 19.7931 13.0506 20 12 20C10.9494 20 9.90914 19.7931 8.93853 19.391C7.96793 18.989 7.08601 18.3997 6.34315 17.6569C5.60028 16.914 5.011 16.0321 4.60896 15.0615C4.20693 14.0909 4 13.0506 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PlusCircleIcon;