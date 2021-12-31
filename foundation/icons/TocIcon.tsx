import { Variables } from "..";

function TocIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7C4.55228 7 5 6.55228 5 6ZM21 6C21 5.44772 20.5523 5 20 5H8C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H20C20.5523 7 21 6.55228 21 6ZM21 12C21 11.4477 20.5523 11 20 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H20C20.5523 13 21 12.5523 21 12ZM7 18C7 17.4477 7.44772 17 8 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H8C7.44772 19 7 18.5523 7 18ZM3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12ZM5 18C5 17.4477 4.55228 17 4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7C4.55228 7 5 6.55228 5 6ZM21 6C21 5.44772 20.5523 5 20 5H8C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H20C20.5523 7 21 6.55228 21 6ZM21 12C21 11.4477 20.5523 11 20 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H20C20.5523 13 21 12.5523 21 12ZM7 18C7 17.4477 7.44772 17 8 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H8C7.44772 19 7 18.5523 7 18ZM3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12ZM5 18C5 17.4477 4.55228 17 4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18Z" />
    </svg>    
  `;
}

export default TocIcon;