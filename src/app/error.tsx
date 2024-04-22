"use client";

import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="my-auto">
      <div className="flex flex-col justify-center items-center gap-8 p-4">
        <Image
          src="/icons/triangle-exclamation.svg"
          alt="404 Error"
          width={150}
          height={150}
        />
        <h2 className="text-4xl font-bold text-center">
          Something went wrong!
        </h2>
        <p className="text-gray-600 max-w-lg  text-center">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <div className="flex gap-4">
          <Button
            className="px-4 py-2 w-40"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Again
          </Button>
          <Link href="/">
            <Button className="px-4 py-2 w-40" primary>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
