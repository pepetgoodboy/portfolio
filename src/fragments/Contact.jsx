import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Finger from "../assets/images/finger.gif";
import Footer from "@/components/Footer";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Contact() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mpwaqqro", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Thank you for your message.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <div className="mx-auto w-5/6 font-jakarta py-12">
        <div className="mx-auto">
          <h2
            data-aos="fade-up"
            className="text-4xl font-semibold sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 text-transparent mb-8 text-center"
          >
            Contact Me
          </h2>
          <div
            data-aos="fade-up"
            className="mx-auto w-11/12 md:w-full rounded-xl bg-cover bg-center bg-no-repeat bg-fixed bg-purple-500 dark:bg-neutral-800"
          >
            <div className="mx-auto mb-24 p-8 sm:p-24">
              <div className="text-center pb-8">
                <h1 className="text-3xl font-semibold text-gray-100 sm:text-5xl">
                  Love to hear from you,
                </h1>
                <div className="flex gap-2 items-center justify-center">
                  <h1 className="text-3xl font-semibold text-gray-100 sm:text-5xl">
                    Get in touch
                  </h1>
                  <Image
                    unoptimized
                    src={Finger}
                    alt="finger"
                    className="w-8 sm:w-10"
                  />
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="sm:px-0 xl:px-24"
                id="form"
              >
                <div className="w-full justify-center gap-x-8 gap-y-4 grid grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-100 font-medium">
                      Your Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md text-gray-500 h-10 px-2 dark:bg-white outline-none focus:outline-purple-500"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="text-gray-100 font-medium">
                      Email Address
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md text-gray-500 h-10 px-2 dark:bg-white outline-none focus:outline-purple-500"
                      />
                    </label>
                  </div>
                </div>
                <div className="py-4">
                  <label className="text-gray-100 font-medium">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full rounded-md text-gray-500 h-28 px-2 dark:bg-white outline-none focus:outline-purple-500"
                    />
                  </label>
                </div>
                <div className="text-center">
                  <button
                    className="px-6 py-2 bg-[#800080] dark:bg-black text-white font-semibold rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
