import { Variables } from "..";

function BookmarkIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20.1216C21 20.9223 20.1059 21.3983 19.4417 20.9512L12.5583 16.3186C12.2208 16.0915 11.7792 16.0915 11.4417 16.3186L4.55834 20.9512C3.89409 21.3983 3 20.9223 3 20.1216V3Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C21 2.44772 20.5523 2 20 2H4C3.44772 2 3 2.44772 3 3V20.1216C3 20.3205 3.05932 20.5149 3.17039 20.6799C3.47875 21.1381 4.10016 21.2596 4.55834 20.9512L11.4417 16.3186C11.7792 16.0915 12.2208 16.0915 12.5583 16.3186L19.4417 20.9512C19.6067 21.0623 19.8011 21.1216 20 21.1216C20.5523 21.1216 21 20.6739 21 20.1216V3ZM5 4H19V18.243L13.675 14.6594L13.4932 14.5462C12.5076 13.9802 11.2781 14.018 10.325 14.6594L5 18.242V4Z" />
    </svg>       
  `;
}

export default BookmarkIcon;