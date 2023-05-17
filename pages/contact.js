import Head from 'next/head';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { loadEnvConfig } from '@next/env';


export default function Contact ({ settings }) {
  console.log("contact.js loaded");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const apiKey = settings?.w3ckey || process.env.WEBFORMS_ACCESSKEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Hosei Nakajima",
      subject: "New Message from Hosei"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <>
      <Head>
        <title>Hosei Nakajima - Contact</title>
      </Head>

      <div className="mx-10">
        <h1 className="mt-5 mb-3 text-3xl font-semibold tracking-tight text-center">Contact</h1>

        <div className="grid my-10 md:grid-cols-2">
          <div>
            {/* left side where the contact info is */}
            <h2 className="text-2xl font-semibold">
              Contact Info
            </h2>
            <p className="max-w-sm my-5">
            Please reach out to me for anything!
            </p>
            <div className="mt-1 flex">
              <svg className="w-4 h-4 mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21.25C11.853 21.2514 11.7093 21.2059 11.59 21.12C11.29 20.93 4.25 16.2 4.25 10.45C4.25 8.39452 5.06652 6.42328 6.51992 4.96987C7.97333 3.51647 9.94457 2.69995 12 2.69995C14.0554 2.69995 16.0267 3.51647 17.4801 4.96987C18.9335 6.42328 19.75 8.39452 19.75 10.45C19.75 16.2 12.75 20.93 12.41 21.12C12.2907 21.2059 12.147 21.2514 12 21.25ZM12 4.24995C10.3494 4.24463 8.7642 4.89454 7.59238 6.05699C6.42056 7.21943 5.75794 8.79939 5.75 10.45C5.75 14.66 10.54 18.51 12 19.58C13.46 18.51 18.25 14.66 18.25 10.45C18.2421 8.79939 17.5794 7.21943 16.4076 6.05699C15.2358 4.89454 13.6506 4.24463 12 4.24995Z" />
                <path d="M12 12.75C11.4561 12.75 10.9244 12.5887 10.4722 12.2865C10.0199 11.9844 9.66747 11.5549 9.45933 11.0524C9.25119 10.5499 9.19673 9.99695 9.30284 9.4635C9.40895 8.93006 9.67086 8.44005 10.0555 8.05546C10.4401 7.67086 10.9301 7.40895 11.4635 7.30284C11.997 7.19673 12.5499 7.25119 13.0524 7.45933C13.5549 7.66747 13.9844 8.01995 14.2865 8.47218C14.5887 8.92442 14.75 9.4561 14.75 10C14.75 10.7293 14.4603 11.4288 13.9445 11.9445C13.4288 12.4603 12.7293 12.75 12 12.75ZM12 8.75C11.7528 8.75 11.5111 8.82331 11.3055 8.96066C11.1 9.09802 10.9398 9.29324 10.8452 9.52165C10.7505 9.75005 10.7258 10.0014 10.774 10.2439C10.8223 10.4863 10.9413 10.7091 11.1161 10.8839C11.2909 11.0587 11.5137 11.1778 11.7561 11.226C11.9986 11.2742 12.2499 11.2495 12.4784 11.1549C12.7068 11.0602 12.902 10.9 13.0393 10.6945C13.1767 10.4889 13.25 10.2472 13.25 10C13.25 9.66848 13.1183 9.35054 12.8839 9.11612C12.6495 8.8817 12.3315 8.75 12 8.75Z" />
              </svg>
              <span>11215 Reserach Blvd. #1076, Austin, TX 78759</span>
            </div>
            <div className="mt-1 flex">
              <svg className="w-4 h-4 mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path fill="white" d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
              </svg>
              <Link href="mailto:migitarion168@gmail.com">migitarion168@gmail.com</Link>
            </div>
            <div className="mt-1 mb-3 flex">
              <svg className="w-4 h-4 mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path id="Vector" d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z" />
              </svg>
              <Link href="tel:+1(469)926-3139">+1(469)926-3139</Link>
            </div>
          </div>

          {/* right side where the contact form is */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}>
              </input>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4  ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none focus:ring-4  ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100 "
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 d rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("message", {
                    required: "Enter your Message"
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try again."}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}