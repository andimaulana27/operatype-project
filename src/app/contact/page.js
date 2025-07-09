// src/app/contact/page.js
import Button from "@/components/Button";
import DropdownIcon from "@/components/icons/DropdownIcon";

export default function ContactPage() {
  
  const inputStyle = "w-full bg-[#EFEFEF] border-transparent px-6 text-[16px] text-[#3F3F3F] font-normal placeholder:text-[#3F3F3F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8705C] transition-shadow duration-300";

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6">

        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-medium text-[#3F3F3F]">Get in Touch</h1>
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            <p className="mt-4 text-[18px] font-light text-[#3F3F3F] leading-relaxed">
              We"re excited to hear about your ideas. Reach out and let"s create something timeless together.
            </p>
          </div>
        </section>

        {/* PERUBAHAN UTAMA ADA DI DALAM SECTION INI */}
        <section className="pb-16 sm:pb-24">
          {/* Menggunakan max-w-3xl agar lebih proporsional */}
          <div className="max-w-3xl mx-auto">
            <form action="#" method="POST" className="space-y-6">
              
              {/* Menggunakan grid untuk layout 2 kolom yang responsif */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  // Ukuran sekarang fleksibel dengan tinggi tetap
                  className={`${inputStyle} h-[65px] rounded-[44px]`}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${inputStyle} h-[65px] rounded-[44px]`}
                  placeholder="Your Email Address"
                />
              </div>

              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  // Ukuran sekarang fleksibel dengan tinggi tetap
                  className={`${inputStyle} h-[65px] rounded-[44px] appearance-none pr-12`}
                >
                  <option>Subject</option>
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Custom License</option>
                  <option>Support</option>
                </select>
                <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  // Ukuran sekarang fleksibel dengan tinggi tetap
                  className={`${inputStyle} h-[196px] rounded-[44px] py-4 resize-none`}
                  placeholder="Message"
                />
              </div>

              <div>
                <Button 
                  href="#"
                  variant="primary" 
                  // Ukuran sekarang fleksibel dengan tinggi tetap
                  className="w-full h-[79px] flex items-center justify-center text-[22px] font-medium rounded-[44px]"
                  onClick={(e) => { e.preventDefault(); alert("Form submitted!"); }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}