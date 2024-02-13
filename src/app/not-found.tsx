import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8">
      <Image
        src="/icons/triangle-exclamation.svg"  // Add a relevant image for the 404 error (replace with your own)
        alt="404 Error"
        width={200}
        height={200}
      />
      <h2 className="text-4xl font-bold mt-4">Oops! Page not found</h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        Go back to the homepage
      </Link>
    </main>
  );
}
