import * as React from 'react';

function ThumbUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.40002 12.5999C2.40002 12.3635 2.44658 12.1295 2.53704 11.9111C2.6275 11.6927 2.76009 11.4943 2.92723 11.3271C3.09438 11.16 3.29281 11.0274 3.51119 10.9369C3.72958 10.8465 3.96365 10.7999 4.20002 10.7999C4.4364 10.7999 4.67047 10.8465 4.88885 10.9369C5.10724 11.0274 5.30567 11.16 5.47282 11.3271C5.63996 11.4943 5.77255 11.6927 5.86301 11.9111C5.95347 12.1295 6.00002 12.3635 6.00002 12.5999V19.7999C6.00002 20.2773 5.81038 20.7351 5.47282 21.0727C5.13525 21.4103 4.67741 21.5999 4.20002 21.5999C3.72263 21.5999 3.2648 21.4103 2.92723 21.0727C2.58967 20.7351 2.40002 20.2773 2.40002 19.7999V12.5999ZM7.20002 12.3995V18.9155C7.19982 19.3615 7.32389 19.7987 7.55832 20.1781C7.79275 20.5576 8.12827 20.8641 8.52722 21.0635L8.58722 21.0935C9.25309 21.4263 9.98723 21.5997 10.7316 21.5999H17.2308C17.7859 21.6001 18.3238 21.408 18.7531 21.0561C19.1824 20.7043 19.4764 20.2146 19.5852 19.6703L21.0252 12.4703C21.0948 12.1221 21.0863 11.7629 21.0003 11.4184C20.9143 11.074 20.7529 10.7529 20.5278 10.4783C20.3027 10.2037 20.0195 9.98254 19.6986 9.83065C19.3777 9.67875 19.0271 9.59994 18.672 9.5999H14.4V4.7999C14.4 4.16338 14.1472 3.55293 13.6971 3.10285C13.247 2.65276 12.6365 2.3999 12 2.3999C11.6818 2.3999 11.3765 2.52633 11.1515 2.75137C10.9265 2.97642 10.8 3.28164 10.8 3.5999V4.4003C10.8 5.43888 10.4632 6.44944 9.84002 7.2803L8.16002 9.5195C7.53688 10.3504 7.20002 11.3609 7.20002 12.3995Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ThumbUpIcon;