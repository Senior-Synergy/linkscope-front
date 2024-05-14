import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen justify-center items-center space-y-4 p-4">
          <FaQuestionCircle className="w-32 h-32" />
          <h2 className="text-4xl font-bold text-center">
            Oops! Page not found
          </h2>
          <p className="max-w-lg  text-center">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link href="/" className="text-primary text-center hover:underline">
            Go back to the homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
