import * as React from 'react';

function BriefcaseAltIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M10 1C9.20435 1 8.44129 1.31607 7.87868 1.87868C7.31607 2.44129 7 3.20435 7 4V5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V11.7527L3.3805 12.3302C6.04206 13.4065 8.94999 14 12 14L12.0012 14C14.9568 14.0036 17.8851 13.4359 20.6252 12.328C20.6375 12.323 20.6499 12.3182 20.6625 12.3137L22 11.8341V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7957 5 19 5H17V4C17 3.20435 16.6839 2.44129 16.1213 1.87868C15.5587 1.31607 14.7956 1 14 1H10ZM15 5V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V5H15ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12Z"
          fill="inherit"
        />
        <path
          d="M22 13.9588L21.3562 14.1897C18.3827 15.3892 15.2058 16.0039 11.9994 16C8.6857 16 5.5217 15.3543 2.62489 14.182L2.61406 14.1776L2 13.9207V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7957 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7957 22 18V13.9588Z"
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
        d="M7.8787 1.87868C8.44131 1.31607 9.20437 1 10 1H14C14.7957 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V5H19C19.7957 5 20.5587 5.31607 21.1213 5.87868C21.684 6.44129 22 7.20435 22 8V13.2317C22.0004 13.247 22.0004 13.2624 22 13.2776V18C22 18.7957 21.684 19.5587 21.1213 20.1213C20.5587 20.6839 19.7957 21 19 21H5.00002C4.20437 21 3.44131 20.6839 2.8787 20.1213C2.31609 19.5587 2.00002 18.7957 2.00002 18V13.2776C1.99967 13.2623 1.99967 13.247 2.00002 13.2317V8C2.00002 7.20435 2.31609 6.44129 2.8787 5.87868C3.44131 5.31607 4.20437 5 5.00002 5H7.00002V4C7.00002 3.20435 7.31609 2.44129 7.8787 1.87868ZM9.00002 5H15V4C15 3.73478 14.8947 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.7348 3 9.48045 3.10536 9.29291 3.29289C9.10538 3.48043 9.00002 3.73478 9.00002 4V5ZM5.00002 7C4.7348 7 4.48045 7.10536 4.29291 7.29289C4.10538 7.48043 4.00002 7.73478 4.00002 8V12.5703C6.49099 13.4944 9.18498 14 12 14L12.0012 14C14.7331 14.0033 17.4418 13.5185 20 12.5701V8C20 7.73478 19.8947 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7H5.00002ZM20 14.6915C17.4255 15.5602 14.7231 16.0033 11.9994 16C9.20278 15.9999 6.51277 15.54 4.00002 14.6918V18C4.00002 18.2652 4.10538 18.5196 4.29291 18.7071C4.48045 18.8946 4.7348 19 5.00002 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8947 18.5196 20 18.2652 20 18V14.6915ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12Z"
        fill="inherit"
      />
    </svg>
  )
}

export default BriefcaseAltIcon;