import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="my-auto">
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <Image
          src="/icons/triangle-exclamation.svg"
          alt="404 Error"
          width={100}
          height={100}
        />
        <h2 className="text-4xl font-bold text-center">Oops! Page not found</h2>
        <p className="text-gray-600 max-w-lg  text-center">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="text-link text-center hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
