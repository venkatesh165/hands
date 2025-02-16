export function Footer() {
  return (
    <footer className="mt-auto bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hustlers & Seekers. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a
              href="/privacy-policy"
              className="hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-primary-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 