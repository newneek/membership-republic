import { Variables } from "..";

function PlusBoxIcon(
  params: {
    type?: 'outlined' | 'filled';
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  } = {},
) {
  const fillValue = Variables.themeColors[params.fill] ?? 'black'
  if (params.type === 'filled') {
    return `
      <svg 
        width="${params.width ?? 24}" 
        height="${params.height ?? 24}" 
        fill="${fillValue}"  
        stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
        strokeWidth="${params.strokeWidth ?? 0}"
        viewBox="0 0 24 24"
      >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM8 11C7.44492 11 6.99493 11.45 6.99493 12.0051C6.99493 12.5602 7.44492 13.0101 8 13.0101L10.9949 13.005V15.9949C10.9949 16.55 11.4449 17 11.9999 17C12.555 17 13.005 16.55 13.005 15.9949V13.005L15.9949 13.0101C16.55 13.0101 17 12.5602 17 12.0051C17 11.45 16.55 11 15.9949 11L13.005 10.9949L13 8C13 7.44492 12.55 6.99493 11.9949 6.99493C11.4398 6.99493 10.9899 7.44492 10.9899 8L10.9949 10.9949L8 11Z" />
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
    <path d="M8.00507 10.9949C7.44998 10.9949 7 11.4449 7 11.9999C7 12.555 7.44998 13.005 8.00507 13.005L10.9949 13.005V15.9949C10.9949 16.55 11.4449 17 11.9999 17C12.555 17 13.005 16.55 13.005 15.9949V13.005L15.9949 13.005C16.55 13.005 17 12.555 17 11.9999C17 11.4449 16.55 10.9949 15.9949 10.9949H13.005V8.00507C13.005 7.44998 12.555 7 11.9999 7C11.4449 7 10.9949 7.44998 10.9949 8.00507V10.9949H8.00507Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z" />
    </svg>    
  `;
}

export default PlusBoxIcon;