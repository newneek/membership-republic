import * as React from 'react';

function FormatSizeIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M15.9971 20C15.649 20 15.3542 19.8785 15.1125 19.6354C14.8708 19.3924 14.75 19.0972 14.75 18.75V6.5H10.75C10.4028 6.5 10.1076 6.37818 9.86458 6.13455C9.62153 5.89093 9.5 5.5951 9.5 5.24705C9.5 4.89902 9.62153 4.60417 9.86458 4.3625C10.1076 4.12083 10.4028 4 10.75 4H21.25C21.5972 4 21.8924 4.12182 22.1354 4.36545C22.3785 4.60907 22.5 4.9049 22.5 5.25295C22.5 5.60098 22.3785 5.89583 22.1354 6.1375C21.8924 6.37917 21.5972 6.5 21.25 6.5H17.25V18.75C17.25 19.0972 17.1282 19.3924 16.8846 19.6354C16.6409 19.8785 16.3451 20 15.9971 20ZM6.99705 20C6.64902 20 6.35417 19.8785 6.1125 19.6354C5.87083 19.3924 5.75 19.0972 5.75 18.75V11.5H3.75C3.40278 11.5 3.10764 11.3782 2.86457 11.1346C2.62153 10.8909 2.5 10.5951 2.5 10.247C2.5 9.89902 2.62153 9.60417 2.86457 9.3625C3.10764 9.12083 3.40278 9 3.75 9H10.25C10.5972 9 10.8924 9.12182 11.1354 9.36545C11.3785 9.60907 11.5 9.9049 11.5 10.253C11.5 10.601 11.3785 10.8958 11.1354 11.1375C10.8924 11.3792 10.5972 11.5 10.25 11.5H8.25V18.75C8.25 19.0972 8.12818 19.3924 7.88455 19.6354C7.64093 19.8785 7.3451 20 6.99705 20Z"
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
        d="M15.9971 20C15.649 20 15.3542 19.8785 15.1125 19.6354C14.8708 19.3924 14.75 19.0972 14.75 18.75V6.5H10.75C10.4028 6.5 10.1076 6.37818 9.86458 6.13455C9.62153 5.89093 9.5 5.5951 9.5 5.24705C9.5 4.89902 9.62153 4.60417 9.86458 4.3625C10.1076 4.12083 10.4028 4 10.75 4H21.25C21.5972 4 21.8924 4.12182 22.1354 4.36545C22.3785 4.60907 22.5 4.9049 22.5 5.25295C22.5 5.60098 22.3785 5.89583 22.1354 6.1375C21.8924 6.37917 21.5972 6.5 21.25 6.5H17.25V18.75C17.25 19.0972 17.1282 19.3924 16.8846 19.6354C16.6409 19.8785 16.3451 20 15.9971 20ZM6.99705 20C6.64902 20 6.35417 19.8785 6.1125 19.6354C5.87083 19.3924 5.75 19.0972 5.75 18.75V11.5H3.75C3.40278 11.5 3.10764 11.3782 2.86457 11.1346C2.62153 10.8909 2.5 10.5951 2.5 10.247C2.5 9.89902 2.62153 9.60417 2.86457 9.3625C3.10764 9.12083 3.40278 9 3.75 9H10.25C10.5972 9 10.8924 9.12182 11.1354 9.36545C11.3785 9.60907 11.5 9.9049 11.5 10.253C11.5 10.601 11.3785 10.8958 11.1354 11.1375C10.8924 11.3792 10.5972 11.5 10.25 11.5H8.25V18.75C8.25 19.0972 8.12818 19.3924 7.88455 19.6354C7.64093 19.8785 7.3451 20 6.99705 20Z"
        fill="inherit"
      />
    </svg>
  );
}

export default FormatSizeIcon;