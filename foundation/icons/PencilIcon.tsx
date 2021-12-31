import { Variables } from "..";

function PencilIcon(
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
      <path d="M22.0003 5.49886C22.0003 6.42721 21.6315 7.31753 20.9751 7.97397L20.1822 8.76684L15.232 3.81663L16.0249 3.02376C16.6813 2.36732 17.5717 1.99854 18.5 1.99854C19.4283 1.99854 20.3187 2.36732 20.9751 3.02376C21.6315 3.6802 22.0003 4.57052 22.0003 5.49886Z" />
      <path d="M13.8178 5.23085L18.768 10.1811L7.20711 21.742C7.01957 21.9295 6.76522 22.0349 6.5 22.0349H3C2.44772 22.0349 2 21.5871 2 21.0349V17.4629C2 17.1976 2.10536 16.9433 2.29289 16.7558L13.8178 5.23085Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z" />
    </svg>    
  `;
}

export default PencilIcon;