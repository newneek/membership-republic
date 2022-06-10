import * as React from 'react';

function QuestionMarkCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34783 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34783 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34783 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34783 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711ZM12 8.39997C11.7891 8.39976 11.582 8.45511 11.3993 8.56044C11.2167 8.66577 11.065 8.81737 10.9596 8.99996C10.8835 9.14142 10.7797 9.26614 10.6545 9.36676C10.5293 9.46737 10.3851 9.54182 10.2306 9.58569C10.0761 9.62956 9.91432 9.64196 9.75491 9.62215C9.59551 9.60234 9.4417 9.55073 9.30261 9.47038C9.16352 9.39003 9.04197 9.28256 8.94518 9.15437C8.8484 9.02617 8.77833 8.87984 8.73914 8.72406C8.69995 8.56828 8.69244 8.40622 8.71704 8.24749C8.74165 8.08875 8.79787 7.93657 8.88239 7.79996C9.27865 7.1137 9.89028 6.57736 10.6224 6.27412C11.3546 5.97088 12.1663 5.91769 12.9317 6.12279C13.6972 6.3279 14.3736 6.77984 14.856 7.40852C15.3384 8.03721 15.6 8.80751 15.6 9.59997C15.6002 10.3447 15.3695 11.0712 14.9397 11.6794C14.5099 12.2876 13.9021 12.7476 13.2 12.996V13.2C13.2 13.5182 13.0736 13.8234 12.8485 14.0485C12.6235 14.2735 12.3182 14.4 12 14.4C11.6817 14.4 11.3765 14.2735 11.1515 14.0485C10.9264 13.8234 10.8 13.5182 10.8 13.2V12C10.8 11.6817 10.9264 11.3765 11.1515 11.1514C11.3765 10.9264 11.6817 10.8 12 10.8C12.3182 10.8 12.6235 10.6735 12.8485 10.4485C13.0736 10.2234 13.2 9.91822 13.2 9.59997C13.2 9.2817 13.0736 8.97648 12.8485 8.75144C12.6235 8.52639 12.3182 8.39997 12 8.39997ZM12 18C12.3182 18 12.6235 17.8735 12.8485 17.6485C13.0736 17.4235 13.2 17.1182 13.2 16.8C13.2 16.4817 13.0736 16.1765 12.8485 15.9514C12.6235 15.7264 12.3182 15.6 12 15.6C11.6817 15.6 11.3765 15.7264 11.1515 15.9514C10.9264 16.1765 10.8 16.4817 10.8 16.8C10.8 17.1182 10.9264 17.4235 11.1515 17.6485C11.3765 17.8735 11.6817 18 12 18Z"
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
        d="M12 8.39997C11.7891 8.39976 11.582 8.45511 11.3993 8.56044C11.2167 8.66577 11.065 8.81737 10.9596 8.99996C10.8835 9.14142 10.7797 9.26614 10.6545 9.36676C10.5293 9.46737 10.3851 9.54182 10.2306 9.58569C10.0761 9.62956 9.91432 9.64196 9.75491 9.62215C9.59551 9.60234 9.4417 9.55073 9.30261 9.47038C9.16352 9.39003 9.04197 9.28256 8.94518 9.15437C8.8484 9.02617 8.77833 8.87984 8.73914 8.72406C8.69995 8.56828 8.69244 8.40622 8.71704 8.24749C8.74165 8.08875 8.79787 7.93657 8.88239 7.79996C9.27865 7.1137 9.89028 6.57736 10.6224 6.27412C11.3546 5.97088 12.1663 5.91769 12.9317 6.12279C13.6972 6.3279 14.3736 6.77984 14.856 7.40852C15.3384 8.03721 15.6 8.80751 15.6 9.59997C15.6002 10.3447 15.3695 11.0712 14.9397 11.6794C14.5099 12.2876 13.9021 12.7476 13.2 12.996V13.2C13.2 13.5182 13.0736 13.8234 12.8485 14.0485C12.6235 14.2735 12.3182 14.4 12 14.4C11.6817 14.4 11.3765 14.2735 11.1515 14.0485C10.9264 13.8234 10.8 13.5182 10.8 13.2V12C10.8 11.6817 10.9264 11.3765 11.1515 11.1514C11.3765 10.9264 11.6817 10.8 12 10.8C12.3182 10.8 12.6235 10.6735 12.8485 10.4485C13.0736 10.2234 13.2 9.91822 13.2 9.59997C13.2 9.2817 13.0736 8.97648 12.8485 8.75144C12.6235 8.52639 12.3182 8.39997 12 8.39997Z"
        fill="inherit"
      />
      <path
        d="M12 18C12.3182 18 12.6235 17.8735 12.8485 17.6485C13.0736 17.4235 13.2 17.1182 13.2 16.8C13.2 16.4817 13.0736 16.1765 12.8485 15.9514C12.6235 15.7264 12.3182 15.6 12 15.6C11.6817 15.6 11.3765 15.7264 11.1515 15.9514C10.9264 16.1765 10.8 16.4817 10.8 16.8C10.8 17.1182 10.9264 17.4235 11.1515 17.6485C11.3765 17.8735 11.6817 18 12 18Z"
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

export default QuestionMarkCircleIcon;