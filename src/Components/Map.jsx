// MapEmbed.jsx
import React from "react";

/**
 * MapEmbed
 * - Renders a responsive iframe embedding a map for a given address.
 * - Uses Google Maps with the 'q' query and output=embed (no API key required).
 *
 * Props:
 *  - address (string) optional. Defaults to the address you provided.
 *  - className (string) optional. Extra classes to apply to wrapper.
 *
 * Example:
 *  <MapEmbed />
 *  <MapEmbed address="Eiffel Tower, Paris" className="h-96" />
 */

export default function MapEmbed({
  address = "Unit 1007A, 7B and 8A, WellDone TechPark, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018",
  className = "",
}) {
  const encoded = encodeURIComponent(address);
  const src = `https://maps.google.com/maps?q=${encoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`w-full ${className}`}>
      {/* Responsive 16:9 wrapper using Tailwind */}
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-md shadow">
        <iframe
          title={`Map: ${address}`}
          src={src}
          className="absolute left-0 top-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Map showing location: ${address}`}
        />
      </div>
    </div>
  );
}
