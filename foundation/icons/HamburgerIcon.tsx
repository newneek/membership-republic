import { Variables } from "..";

function HamburgerIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 5.44772 4.39797 5 4.88889 5H19.1111C19.602 5 20 5.44772 20 6C20 6.55228 19.602 7 19.1111 7H4.88889C4.39797 7 4 6.55228 4 6ZM4 12C4 11.4477 4.39797 11 4.88889 11H19.1111C19.602 11 20 11.4477 20 12C20 12.5523 19.602 13 19.1111 13H4.88889C4.39797 13 4 12.5523 4 12ZM4 18C4 17.4477 4.39797 17 4.88889 17H19.1111C19.602 17 20 17.4477 20 18C20 18.5523 19.602 19 19.1111 19H4.88889C4.39797 19 4 18.5523 4 18Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 5.44772 4.39797 5 4.88889 5H19.1111C19.602 5 20 5.44772 20 6C20 6.55228 19.602 7 19.1111 7H4.88889C4.39797 7 4 6.55228 4 6ZM4 12C4 11.4477 4.39797 11 4.88889 11H19.1111C19.602 11 20 11.4477 20 12C20 12.5523 19.602 13 19.1111 13H4.88889C4.39797 13 4 12.5523 4 12ZM4 18C4 17.4477 4.39797 17 4.88889 17H19.1111C19.602 17 20 17.4477 20 18C20 18.5523 19.602 19 19.1111 19H4.88889C4.39797 19 4 18.5523 4 18Z" />
    </svg>    
  `;
}

export default HamburgerIcon;