import Image from "next/image";
import Error from "../assets/images/error.png";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div className="flex flex-col gap-12 justify-center items-center min-h-screen font-jakarta -mt-6">
        <Image src={Error} alt="Cute Cat" className="w-[300px]" />
        <h1 className="text-lg md:text-xl font-bold px-4">
          Oopps... Page Not Found.
        </h1>
        <Link href="/">
          <button className="font-semibold px-4 py-1 rounded-md bg-purple-700 text-white">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
