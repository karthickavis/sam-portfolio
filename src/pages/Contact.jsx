
export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            className="bg-[#1e293b] p-8 rounded-lg shadow-md"
           
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-[#334155] text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-[#334155] text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-[#334155] text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-[#1e293b] p-8 rounded-lg shadow-md text-gray-300">
            <h3 className="text-2xl text-cyan-300 font-semibold mb-4">
              Let's Connect
            </h3>
            <p className="mb-4">
              Feel free to reach out if you'd like to collaborate or just have a chat!
            </p>
            <p><span className="font-semibold">📧 Email:</span> samjebaraj19@gmail.com</p>
            <p><span className="font-semibold">📞 Phone:</span> +91 6383262068</p>
            <p><span className="font-semibold">📍 Location:</span> Chennai, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

