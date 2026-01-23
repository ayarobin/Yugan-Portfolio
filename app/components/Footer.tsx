export default function Footer() {
  return (
    <footer className="w-full text-center py-4 border-t border-gray-800 bg-[#111] text-[#ededed] mt-8 flex items-center justify-center gap-8">
      <a
        href="https://www.instagram.com/yugan.999/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="inline-flex items-center justify-center hover:text-pink-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0a1.13 1.13 0 0 1 2.25 0z"/>
        </svg>
      </a>
      <span>&copy; 2026 Yugan. All rights reserved.</span>
    </footer>
  );
}