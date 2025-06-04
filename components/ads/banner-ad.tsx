"use client";

import { useEffect, useRef } from "react";

export default function BannerAd() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This ensures the ad is only loaded once the component is mounted
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      atOptions = {
        'key' : '',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    adContainerRef.current?.appendChild(script);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "";
    adContainerRef.current?.appendChild(script2);

    return () => {
      // Cleanup if component unmounts
      if (adContainerRef.current) {
        if (script.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(script);
        }
        if (script2.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(script2);
        }
      }
    };
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-hidden max-w-full">
      <div
        ref={adContainerRef}
        className="ad-container"
        style={{ width: "728px", height: "90px" }}
      ></div>
    </div>
  );
}
