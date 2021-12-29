import * as React from 'react';

function VideoCameraIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H13C13.7956 5 14.5587 5.31607 15.1213 5.87868C15.6839 6.44129 16 7.20435 16 8V8.38212L19.1059 6.82953C19.4107 6.6772 19.7496 6.60523 20.09 6.62056C20.4304 6.63589 20.7613 6.73796 21.0512 6.91708C21.3411 7.09619 21.5805 7.34642 21.7465 7.64401C21.9126 7.9416 21.9998 8.27669 22 8.61747V15.382C21.9998 15.7228 21.9126 16.0584 21.7465 16.356C21.5805 16.6536 21.3411 16.9038 21.0512 17.0829C20.7613 17.262 20.4304 17.3641 20.09 17.3794C19.7495 17.3948 19.4108 17.3229 19.106 17.1705L16 15.6179V16C16 16.7957 15.6839 17.5587 15.1213 18.1213C14.5587 18.6839 13.7957 19 13 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8C2 7.20435 2.31607 6.44129 2.87868 5.87868ZM16 13.3819L20 15.3815V8.61853L16 10.6181V13.3819ZM14 8C14 7.73478 13.8946 7.48043 13.7071 7.29289C13.5196 7.10536 13.2652 7 13 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H13C13.2652 17 13.5196 16.8946 13.7071 16.7071C13.8946 16.5196 14 16.2652 14 16V8Z"
        fill="inherit"
      />
    </svg>
  )
}

export default VideoCameraIcon;