import React from 'react';

export default ({ client, slot }) => {
  return (
    <div className="ad">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto">
      </ins>
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script>(adsbygoogle = window.adsbygoogle || []).push();</script>
    </div>
  );
};
