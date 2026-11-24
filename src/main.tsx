import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { config } from "./config";

// Meta Pixel (só carrega se o ID estiver preenchido em config.ts)
if (config.pixelId) {
  /* eslint-disable */
  // @ts-ignore
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  // @ts-ignore
  window.fbq("init", config.pixelId);
  // @ts-ignore
  window.fbq("track", "PageView");
}

createRoot(document.getElementById("root")!).render(<App />);
