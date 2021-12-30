import * as React from 'react';

function AcademicCapIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'filled') {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4061 4.08619C12.1476 3.97127 11.8524 3.97127 11.5939 4.08619L2.59386 8.08619C2.23273 8.24669 2 8.60481 2 9C2 9.39519 2.23273 9.75331 2.59386 9.91381L5.92145 11.3927L5.10325 15.4838C5.03538 15.6515 5 15.824 5 16C5 17.6568 8.13401 19 12 19C15.866 19 19 17.6568 19 16C19 15.824 18.9646 15.6515 18.8968 15.4838L18.0786 11.3927L21.4061 9.91381C21.7673 9.75331 22 9.39519 22 9C22 8.60481 21.7673 8.24669 21.4061 8.08619L12.4061 4.08619ZM13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9C11 8.44771 11.4477 8 12 8C12.5523 8 13 8.44771 13 9Z"
          fill="inherit"
        />
      </svg>
    );
  }
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
        d="M12 10C12.5523 10 13 9.55229 13 9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9C11 9.55229 11.4477 10 12 10Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5939 4.08619C11.8524 3.97127 12.1476 3.97127 12.4061 4.08619L21.4061 8.08619C21.7673 8.24669 22 8.60481 22 9C22 9.39519 21.7673 9.75331 21.4061 9.91381L18.0786 11.3927L18.8968 15.4838C18.9646 15.6515 19 15.824 19 16C19 17.6568 15.866 19 12 19C8.13401 19 5 17.6568 5 16C5 15.824 5.03538 15.6515 5.10325 15.4838L5.92145 11.3927L2.59386 9.91381C2.23273 9.75331 2 9.39519 2 9C2 8.60481 2.23273 8.24669 2.59386 8.08619L11.5939 4.08619ZM12.4061 13.9138L16.2054 12.2252L16.9302 15.8488C16.7869 15.9644 16.542 16.1201 16.1619 16.283C15.1987 16.6958 13.7286 17 12 17C10.2714 17 8.8013 16.6958 7.83809 16.283C7.458 16.1201 7.21313 15.9644 7.06984 15.8488L7.79456 12.2252L11.5939 13.9138C11.8524 14.0287 12.1476 14.0287 12.4061 13.9138ZM5.46221 9L12 11.9057L18.5378 9L12 6.09432L5.46221 9Z"
        fill="inherit"
      />
    </svg>
  );
}

export default AcademicCapIcon;
