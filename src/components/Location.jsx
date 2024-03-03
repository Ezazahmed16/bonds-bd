import React from 'react';

const Location = () => {
  return (
    <div className='mb-10'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.571253586243!2d90.35085971040141!3d23.79827728684849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f2ca7ea815%3A0xd448000766cc5ff9!2sMirpur%201%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1709433599705!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: '2' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
