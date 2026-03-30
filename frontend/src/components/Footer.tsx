export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FinDev • All rights reserved.
        </p>
        <div className="mt-3 flex items-center justify-center gap-5 text-sm">
          <a href="#" className="hover:text-blue-600">
            YouTube
          </a>
          <a href="#" className="hover:text-blue-600">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-600">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-600">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
