import React from 'react';

const GoogleTagManager = () => {
    const googleTagManagerCode = `
    <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-NBNNQP9");
  </script>
    `;
  
    return (
      <div dangerouslySetInnerHTML={{ __html: googleTagManagerCode }} />
    );
  };
  
  export default GoogleTagManager;