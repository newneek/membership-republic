import { Variables } from "..";

function ReplyIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.163 20.7198C14.7654 20.3365 14.7539 19.7034 15.1373 19.3059L18.6465 15.6667L11.3571 15.6667C9.98448 15.6667 8.72596 15.4887 7.53131 15.0122C6.3329 14.5342 5.25364 13.7777 4.20873 12.6941C1.99965 10.4032 1.99984 8.04979 2 6.05087L2 4C2 3.44771 2.44772 3 3 3C3.55229 3 4 3.44771 4 4L4 6C4 7.9902 4.01912 9.61623 5.64841 11.3059C6.53208 12.2223 7.38138 12.7992 8.27226 13.1545C9.1669 13.5113 10.1584 13.6667 11.3571 13.6667L18.6465 13.6667L15.1373 10.0275C14.7539 9.62991 14.7654 8.99685 15.163 8.61349C15.5606 8.23013 16.1936 8.24164 16.577 8.6392L21.7198 13.9725C22.0934 14.3599 22.0934 14.9734 21.7198 15.3608L16.577 20.6941C16.1936 21.0917 15.5606 21.1032 15.163 20.7198Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.163 20.7198C14.7654 20.3365 14.7539 19.7034 15.1373 19.3059L18.6465 15.6667L11.3571 15.6667C9.98448 15.6667 8.72596 15.4887 7.53131 15.0122C6.3329 14.5342 5.25364 13.7777 4.20873 12.6941C1.99965 10.4032 1.99984 8.04979 2 6.05087L2 4C2 3.44771 2.44772 3 3 3C3.55229 3 4 3.44771 4 4L4 6C4 7.9902 4.01912 9.61623 5.64841 11.3059C6.53208 12.2223 7.38138 12.7992 8.27226 13.1545C9.1669 13.5113 10.1584 13.6667 11.3571 13.6667L18.6465 13.6667L15.1373 10.0275C14.7539 9.62991 14.7654 8.99685 15.163 8.61349C15.5606 8.23013 16.1936 8.24164 16.577 8.6392L21.7198 13.9725C22.0934 14.3599 22.0934 14.9734 21.7198 15.3608L16.577 20.6941C16.1936 21.0917 15.5606 21.1032 15.163 20.7198Z" />
    </svg>    
  `;
}

export default ReplyIcon;