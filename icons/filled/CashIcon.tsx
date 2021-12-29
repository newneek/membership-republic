import * as React from 'react';

function CashIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V13C2 13.7956 2.31607 14.5587 2.87868 15.1213C3.32202 15.5647 3.88985 15.8549 4.5 15.9581V11C4.5 9.80653 4.97411 8.66193 5.81802 7.81802C6.66193 6.97411 7.80652 6.5 9 6.5H17.9581C17.8549 5.88985 17.5647 5.32202 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4H5Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.87868 8.87868C6.31607 9.44129 6 10.2044 6 11V17C6 17.7956 6.31607 18.5587 6.87868 19.1213C7.44129 19.6839 8.20435 20 9 20H19C19.7957 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 10.2043 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7957 8 19 8H9C8.20435 8 7.44129 8.31607 6.87868 8.87868ZM15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CashIcon;