import { Variables } from "..";

function PollIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM8 11C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H8ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9H12C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7H8ZM7 16C7 15.45 7.45 15 8 15H10C10.55 15 11 15.45 11 16C11 16.55 10.55 17 10 17H8C7.45 17 7 16.55 7 16Z" />
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
    <path d="M8 11C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H8Z" />
    <path d="M8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9H12C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7H8Z" />
    <path d="M7 16C7 15.45 7.45 15 8 15H10C10.55 15 11 15.45 11 16C11 16.55 10.55 17 10 17H8C7.45 17 7 16.55 7 16Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2L19 2ZM20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4L19 4C19.5523 4 20 4.44771 20 5Z" />
    </svg>    
  `;
}

export default PollIcon;