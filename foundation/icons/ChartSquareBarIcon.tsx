import { Variables } from "..";

function ChartSquareBarIcon(
  params: {
    type?: 'outline' | 'solid';
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  } = {},
) {
  const fillValue = Variables.themeColors[params.fill] ?? 'black'
  if (params.type === 'solid') {
    return `
      <svg 
        width="${params.width ?? 24}" 
        height="${params.height ?? 24}" 
        fill="${fillValue}"  
        stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
        strokeWidth="${params.strokeWidth ?? 0}"
        viewBox="0 0 24 24"
      >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM16 7C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V8C15 7.44772 15.4477 7 16 7ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10ZM8 13C8.55228 13 9 13.4477 9 14V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V14C7 13.4477 7.44772 13 8 13Z" />
      </svg>      
    `;
  }
  return `
    <svg 
      width="${params.width ?? 24}" 
      height="${params.height ?? 24}" 
      fill="${fillValue}"  
      stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
      strokeWidth="${params.strokeWidth ?? 0}"
      viewBox="0 0 24 24"
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6ZM16 7C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V8C15 7.44772 15.4477 7 16 7ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10ZM8 13C8.55228 13 9 13.4477 9 14V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V14C7 13.4477 7.44772 13 8 13Z" />
    </svg>                
  `;
}

export default ChartSquareBarIcon;