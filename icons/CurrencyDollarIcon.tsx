import * as React from 'react';

function CurrencyDollarIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
    return (
      <svg
        width="24"
        height="24"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4334 9.41784C10.5882 9.31464 10.7794 9.2224 11 9.15101V10.849C10.7794 10.7776 10.5882 10.6854 10.4334 10.5822C10.0693 10.3394 10 10.1139 10 10C10 9.8861 10.0693 9.66058 10.4334 9.41784Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 14.849L13 13.151C13.2206 13.2224 13.4118 13.3146 13.5666 13.4178C13.9308 13.6606 14 13.8861 14 14C14 14.1139 13.9307 14.3394 13.5666 14.5822C13.4118 14.6854 13.2206 14.7776 13 14.849Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V7.09199C10.3784 7.20873 9.80348 7.43407 9.32398 7.75374C8.6023 8.23485 8 9.00933 8 10C8 10.9907 8.6023 11.7651 9.32398 12.2463C9.80348 12.5659 10.3784 12.7913 11 12.908L11 14.8492C10.609 14.7223 10.3192 14.5319 10.1567 14.3446C9.79471 13.9275 9.16313 13.8827 8.74599 14.2447C8.32885 14.6067 8.28411 15.2382 8.64607 15.6554C9.20855 16.3036 10.0596 16.7308 11 16.9076L11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17L13 16.908C13.6216 16.7913 14.1965 16.5659 14.676 16.2463C15.3977 15.7651 16 14.9907 16 14C16 13.0093 15.3977 12.2348 14.676 11.7537C14.1965 11.4341 13.6216 11.2087 13 11.092V9.15075C13.391 9.27771 13.6808 9.46809 13.8434 9.65538C14.2053 10.0725 14.8369 10.1173 15.254 9.7553C15.6712 9.39335 15.7159 8.76176 15.354 8.34462C14.7915 7.69637 13.9405 7.26915 13 7.09236V7Z"
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C12.5523 6 13 6.44772 13 7V7.09236C13.9405 7.26915 14.7915 7.69637 15.354 8.34462C15.7159 8.76176 15.6712 9.39335 15.254 9.7553C14.8369 10.1173 14.2053 10.0725 13.8434 9.65538C13.6808 9.4681 13.391 9.27771 13 9.15075L13 11.092C13.6216 11.2087 14.1965 11.4341 14.676 11.7537C15.3977 12.2348 16 13.0093 16 14C16 14.9907 15.3977 15.7651 14.676 16.2463C14.1965 16.5659 13.6216 16.7913 13 16.908L13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17L11 16.9076C10.0596 16.7308 9.20855 16.3036 8.64607 15.6554C8.28411 15.2382 8.32885 14.6067 8.74599 14.2447C9.16313 13.8827 9.79471 13.9275 10.1567 14.3446C10.3192 14.5319 10.609 14.7223 11 14.8492L11 12.908C10.3784 12.7913 9.80348 12.5659 9.32398 12.2463C8.6023 11.7651 8 10.9907 8 10C8 9.00933 8.6023 8.23485 9.32398 7.75374C9.80348 7.43407 10.3784 7.20873 11 7.09199V7C11 6.44772 11.4477 6 12 6ZM11 9.15101C10.7794 9.2224 10.5882 9.31464 10.4334 9.41784C10.0693 9.66058 10 9.8861 10 10C10 10.1139 10.0693 10.3394 10.4334 10.5822C10.5882 10.6854 10.7794 10.7776 11 10.849L11 9.15101ZM13 13.151L13 14.849C13.2206 14.7776 13.4118 14.6854 13.5666 14.5822C13.9308 14.3394 14 14.1139 14 14C14 13.8861 13.9308 13.6606 13.5666 13.4178C13.4118 13.3146 13.2206 13.2224 13 13.151Z"
        fill="inherit"
      />
    </svg>
  );
}

export default CurrencyDollarIcon;
