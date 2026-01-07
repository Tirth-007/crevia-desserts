export default function Footer() {
  return (
    <footer className="relative bg-[#3b2f2f] text-white py-16 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-serif mb-4">
          Crevia Finest Desserts
        </h3>

        <p className="mb-6 opacity-90">
          Handcrafted cheesecake cups. Made with care.
        </p>

        <a
          href="https://www.instagram.com/creviadesserts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-white text-[#3b2f2f]
                     rounded-full font-medium shadow-lg"
        >
          Order via Instagram
        </a>

        <p className="mt-10 text-sm opacity-60">
          © 2026 Crevia Desserts · All Rights Reserved
        </p>
        <p className="text-sm opacity-70">
        Crafted with Love 🤍 by Tirth Barot
       </p>
      </div>
    </footer>
  );
}



