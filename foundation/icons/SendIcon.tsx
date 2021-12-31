import { Variables } from "..";

function SendIcon(
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
      <path d="M4.40364 4.08509C4.09438 3.94865 3.73712 3.97768 3.45394 4.16226C3.17076 4.34684 3 4.66198 3 5V10C3 10.4845 3.34728 10.8993 3.82421 10.9844L12.3114 12.5L3.82421 14.0156C3.34728 14.1007 3 14.5155 3 15V20C3 20.338 3.17076 20.6532 3.45394 20.8377C3.73712 21.0223 4.09438 21.0514 4.40364 20.9149L21.4036 13.4149C21.7661 13.255 22 12.8962 22 12.5C22 12.1038 21.7661 11.745 21.4036 11.5851L4.40364 4.08509Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45394 4.16226C3.73712 3.97768 4.09438 3.94865 4.40364 4.08509L21.4036 11.5851C21.7661 11.745 22 12.1038 22 12.5C22 12.8962 21.7661 13.255 21.4036 13.4149L4.40364 20.9149C4.09438 21.0514 3.73712 21.0223 3.45394 20.8377C3.17076 20.6532 3 20.338 3 20V15C3 14.5155 3.34728 14.1007 3.82421 14.0156L12.3114 12.5L3.82421 10.9844C3.34728 10.8993 3 10.4845 3 10V5C3 4.66198 3.17076 4.34684 3.45394 4.16226ZM15.0096 14.0498L5 15.8372V18.4658L15.0096 14.0498ZM15.0096 10.9502L5 6.53417V9.16276L15.0096 10.9502Z" />
    </svg>    
  `;
}

export default SendIcon;