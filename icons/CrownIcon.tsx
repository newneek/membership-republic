import * as React from 'react';

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M10.9683 5.7448C11.4592 5.00857 12.541 5.00857 13.0318 5.7448L16.2271 10.5377L19.8609 7.63067C20.7647 6.90768 22.0784 7.70726 21.8515 8.84214L20.0193 18.0031C19.9033 18.5828 19.3944 19 18.8033 19H5.19684C4.60576 19 4.09684 18.5827 3.98092 18.0031L2.14872 8.84214C1.92175 7.70727 3.23552 6.90768 4.13926 7.63067L7.77307 10.5377L10.9683 5.7448Z"
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
        d="M10.9683 5.7448C11.4592 5.00857 12.541 5.00857 13.0318 5.7448L16.2271 10.5377L19.8609 7.63067C20.7647 6.90768 22.0784 7.70726 21.8515 8.84214L20.0193 18.0031C19.9033 18.5828 19.3944 19 18.8033 19H5.19684C4.60576 19 4.09684 18.5827 3.98092 18.0031L2.14872 8.84214C1.92175 7.70727 3.23552 6.90768 4.13926 7.63067L7.77307 10.5377L10.9683 5.7448ZM12.0001 7.80274L8.97735 12.3369C8.57396 12.9419 7.73885 13.0716 7.17098 12.6173L4.51905 10.4958L5.81989 17H18.1803L19.4811 10.4958L16.8292 12.6173C16.2613 13.0716 15.4262 12.9419 15.0228 12.3369L12.0001 7.80274Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CrownIcon;