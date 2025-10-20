"use client";

export default function MapImageSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full px-6 py-12 mx-auto gap-4">
      {/* LEFT SIDE - MAP */}
      <div className="w-full lg:w-3/5 sm:h-[180vh] lg:h-auto">
        {/* Google Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.961694195385!2d73.9170324!3d18.5186032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09db7c3c4d5%3A0x7b6b8a0e12345678!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1697750000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0 "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="w-full lg:w-2/5 relative h-96 lg:h-auto">
        <img
          src="/assets/contact/NearMap.png" // replace with your path
          alt="Map Side Image"
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
    </section>
  );
}
