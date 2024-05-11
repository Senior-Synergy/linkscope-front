import Link from "next/link";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="my-auto">
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <FaExclamationTriangle className="w-32 h-32"/>
        <h2 className="text-4xl font-bold text-center">Oops! Page not found</h2>
        <p className="text-gray-600 max-w-lg  text-center">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="text-primary text-center hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
