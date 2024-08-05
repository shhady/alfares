'use client';
import React, { useRef, useEffect } from 'react';

export default function Reels() {
  const iframes = useRef([]);

  useEffect(() => {
    const handleIframeClick = (index) => {
      iframes.current.forEach((iframe, i) => {
        if (i !== index && iframe) {
          const src = iframe.src;
          iframe.src = ''; // Clear src to stop the video
          iframe.src = src; // Reset src to its original value
        }
      });
    };

    iframes.current.forEach((iframe, index) => {
      if (iframe) {
        iframe.addEventListener('click', () => handleIframeClick(index));
      }
    });

    return () => {
      iframes.current.forEach((iframe, index) => {
        if (iframe) {
          iframe.removeEventListener('click', () => handleIframeClick(index));
        }
      });
    };
  }, []);

  const videoUrls = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F482518941038126%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F443671848640160%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F845098887196159%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1434653767184935%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F800700985599718%2F&show_text=false&width=267&t=0"
  ];

  return (
    <div className='flex justify-start items-center gap-2 py-8 max-w-screen-2xl m-auto overflow-x-auto pr-2'>
    {videoUrls.map((url, index) => (
      <iframe
        key={index}
        ref={el => iframes.current[index] = el}
        src={url}
        width="200"
        height="300"
        style={{ border: 'none', overflow: 'hidden',minWidth:"210px", minHeight:"300px" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
        
      ></iframe>
    ))}
  </div>
  );
}
