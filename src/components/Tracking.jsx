import { useEffect } from "react";
const Tracking = () => {
  useEffect(() => {
    // Google Tag Manager
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KT9PBLPP8P";
    document.head.appendChild(gtagScript);
    const gtagConfig = document.createElement("script");
    gtagConfig.innerHTML = ` 
window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-KT9PBLPP8P'); 
`;
    document.head.appendChild(gtagConfig);
    // Meta Pixel Code
    const fbPixelScript = document.createElement("script");
    fbPixelScript.innerHTML = ` 
!function(f,b,e,v,n,t,s) 
{if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
n.queue=[];t=b.createElement(e);t.async=!0; 
t.src=v;s=b.getElementsByTagName(e)[0]; 
s.parentNode.insertBefore(t,s)}(window, document,'script', 
'https://connect.facebook.net/en_US/fbevents.js'); 
fbq('init', '1364766421634471'); 
fbq('track', 'PageView'); 
`;
    document.head.appendChild(fbPixelScript);
    // Add NoScript Fallback for Meta Pixel
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none" 
src="https://www.facebook.com/tr?id=1364766421634471&ev=PageView&noscript=1
 " />`;
    document.body.appendChild(noscript);
  }, []);
  return null; // This component only injects scripts, so it doesn't render anything
};
export default Tracking;
