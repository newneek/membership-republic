import { Variables } from "..";

function GraphIcon(
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
      <path d="M17.2222 6.4532L18.8408 8.06804L13.3556 13.5405L9.65767 9.85109C9.2193 9.41374 8.51118 9.41374 8.07282 9.85109L1.32877 16.5908C0.890409 17.0281 0.890409 17.7346 1.32877 18.172C1.76713 18.6093 2.47526 18.6093 2.91362 18.172L8.85962 12.2285L12.5576 15.9179C12.996 16.3553 13.7041 16.3553 14.1425 15.9179L20.4257 9.66045L22.0442 11.2753C22.3927 11.6229 22.9996 11.3762 22.9996 10.8828V6.06071C23.0109 5.74671 22.7636 5.5 22.4489 5.5H17.6269C17.1211 5.5 16.8738 6.10556 17.2222 6.4532Z" />
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
    <path d="M17.2222 6.4532L18.8408 8.06804L13.3556 13.5405L9.65767 9.85109C9.2193 9.41374 8.51118 9.41374 8.07282 9.85109L1.32877 16.5908C0.890409 17.0281 0.890409 17.7346 1.32877 18.172C1.76713 18.6093 2.47526 18.6093 2.91362 18.172L8.85962 12.2285L12.5576 15.9179C12.996 16.3553 13.7041 16.3553 14.1425 15.9179L20.4257 9.66045L22.0442 11.2753C22.3927 11.6229 22.9996 11.3762 22.9996 10.8828V6.06071C23.0109 5.74671 22.7636 5.5 22.4489 5.5H17.6269C17.1211 5.5 16.8738 6.10556 17.2222 6.4532Z" />
    </svg>    
  `;
}

export default GraphIcon;