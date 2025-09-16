
import React, { useState } from "react";
import Animation from "../components/Animation";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      e.target.reset();
    } else {
      console.error("Error:", data);
      setResult("❌ Failed to send. Try again later.");
    }
  };

  return (
    <section id="contact">
      <Animation threshold={0.2} variant="fade">
      <div className="flex items-center justify-center sm:mt-32 sm:mb-32 mt-20 mb-20 bg-black">
        <div className="relative w-full max-w-md rounded-2xl p-5 shadow-[0_0_25px_rgba(168,85,247,0.7),inset_0_0_25px_rgba(168,85,247,0.5)]">
          <div className="rounded-2xl bg-black/80 backdrop-blur-xl sm:p-8 p-2">
            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 [text-shadow:0_0_15px_rgba(236,72,153,0.8)]">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 🔑 Required: Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="9613b1b1-fcb8-4fb8-9d1f-4d6e37ec0928" // replace with your Web3Forms access key
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="off"
                className="w-full p-3 rounded-full bg-transparent border border-gray-400/50 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                autoComplete="off"
                className="w-full p-3 rounded-full bg-transparent border border-gray-400/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                required
                className="w-full p-3 rounded-2xl bg-transparent border border-gray-400/50 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-white text-xl bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                Submit
              </button>
            </form>

            {result && (
              <p className="text-center mt-4 text-sm text-gray-300">{result}</p>
            )}
          </div>
        </div>
      </div>
      </Animation>
    </section>
  );
};

export default Contact;
