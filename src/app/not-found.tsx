import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="py-14 flex flex-col items-center justify-center px-6 text-center bg-white">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/images/brand-logo.png" // update path if needed
          alt="Contour Cosmetic Clinic Logo"
          width={160}
          height={60}
          priority
        />
        <Image
          src="/images/brand-text.png" // update path if needed
          alt="Contour Cosmetic Clinic Logo"
          width={160}
          height={60}
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist or may have been moved. Let’s get you back
        to something helpful.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="px-6 py-3 rounded-lg bg-primary text-white  transition">
          Go to Home
        </Link>

        <Link
          href="/services"
          className="px-6 py-3 rounded-lg border border-black text-black hover:bg-gray-100 transition"
        >
          View Services
        </Link>
      </div>
    </main>
  );
}
