export default function Footer() {
  return (
    <footer className="relative bg-[#3b2f2f] text-white py-16 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Brand */}
        <h3 className="text-2xl sm:text-3xl font-serif mb-3">
          Crevia Desserts
        </h3>

        <p className="mb-8 opacity-90">
          Handcrafted cheesecake cups. Made with care.
        </p>

        {/* Address & Timings */}
        <div className="mb-10 text-sm opacity-90 space-y-3">
          <p>
            <span className="font-medium">📍 Address:</span><br />
            Shop no. 4 Avasar namkeen , Luv Kush Apartment, near icici bank tulsidham, Zadeshwar road Bharuch.
            Bharuch, Gujarat – 392011
          </p>

          <p>
            <span className="font-medium">⏰ Timings:</span><br />
            Monday – Saturday: 8:30PM To 11:00PM
          </p>
        </div>

        {/* Partners */}
        <div className="mb-10">
          <h4 className="text-lg font-medium mb-4">
            Partners
          </h4>

          <div className="space-y-2 text-sm opacity-90">
            {/* Replace with real names & numbers */}
            <p>Mihir Bavarva – +91 93164 47370</p>
            <p>Niyati – +91 12345 67890</p>
            <p>Shubham Parmar – +91 70966 03264</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://www.instagram.com/creviadesserts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-white text-[#3b2f2f]
                     rounded-full font-medium shadow-lg"
        >
          DM us on Instagram
        </a>

        {/* Copyright */}
        <p className="mt-10 text-xs opacity-60">
          © {new Date().getFullYear()} Crevia Desserts · All Rights Reserved
        </p>
        <p className="text-sm opacity-70">
          Designed & Developed by Tirth Barot
        </p>
      </div>
    </footer>
  );
}
