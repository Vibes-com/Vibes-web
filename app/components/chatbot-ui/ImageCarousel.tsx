"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="portfolio"
          className="h-24 w-36 object-cover rounded-lg cursor-zoom-in transition-transform hover:scale-105"
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
        />
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((url) => ({ src: url }))}
        plugins={[Zoom]}
      />
    </div>
  );
}
