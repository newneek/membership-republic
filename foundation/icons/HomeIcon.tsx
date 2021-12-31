import { Variables } from "..";

function HomeIcon(
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
      <path d="M13.0013 16.0002V19.9992C13.0013 21.1042 13.8967 22 15.0013 22H19.9973C21.1019 22 21.9973 21.1042 21.9973 19.9992V13.0031C21.9973 12.5132 21.8176 12.0403 21.4923 11.6741L13.4954 2.67173C12.7 1.77622 11.3014 1.77607 10.5057 2.6714L2.5053 11.6737C2.1798 12.04 2 12.513 2 13.0031V19.9992C2 21.1042 2.89543 22 4 22H9.00157C10.1061 22 11.0016 21.1042 11.0016 19.9992V16.0002H13.0013Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0013 19.9992V16.0002H11.0016V19.9992C11.0016 21.1042 10.1061 22 9.00157 22H4C2.89543 22 2 21.1042 2 19.9992V13.0031C2 12.513 2.1798 12.04 2.5053 11.6737L10.5057 2.6714C11.3014 1.77607 12.7 1.77622 13.4954 2.67173L21.4923 11.6741C21.8176 12.0403 21.9973 12.5132 21.9973 13.0031V19.9992C21.9973 21.1042 21.1019 22 19.9973 22H15.0013C13.8967 22 13.0013 21.1042 13.0013 19.9992ZM19.9973 13.0031L12.0004 4.00077L4 13.0031V19.9992H9.00157V13.9994H15.0013V19.9992H19.9973V13.0031Z" />
    </svg>    
  `;
}

export default HomeIcon;