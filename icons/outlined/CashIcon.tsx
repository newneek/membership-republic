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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H15C15.7956 4 16.5587 4.31607 17.1213 4.87868C17.6839 5.44129 18 6.20435 18 7V8H19C19.7957 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2043 22 11V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7957 20 19 20H9C8.20435 20 7.44129 19.6839 6.87868 19.1213C6.31607 18.5587 6 17.7956 6 17V16H5C4.20435 16 3.44129 15.6839 2.87868 15.1213C2.31607 14.5587 2 13.7956 2 13V7C2 6.20435 2.31607 5.44129 2.87868 4.87868ZM8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H9C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11V17ZM16 8H9C8.20435 8 7.44129 8.31607 6.87868 8.87868C6.31607 9.44129 6 10.2044 6 11V14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H15C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7V8ZM14 13C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14C13 14.2652 13.1054 14.5196 13.2929 14.7071C13.4804 14.8946 13.7348 15 14 15C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14C15 13.7348 14.8946 13.4804 14.7071 13.2929C14.5196 13.1054 14.2652 13 14 13ZM11.8787 11.8787C12.4413 11.3161 13.2043 11 14 11C14.7957 11 15.5587 11.3161 16.1213 11.8787C16.6839 12.4413 17 13.2043 17 14C17 14.7957 16.6839 15.5587 16.1213 16.1213C15.5587 16.6839 14.7957 17 14 17C13.2043 17 12.4413 16.6839 11.8787 16.1213C11.3161 15.5587 11 14.7957 11 14C11 13.2043 11.3161 12.4413 11.8787 11.8787Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CashIcon;