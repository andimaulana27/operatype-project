// src/app/license/page.js
import Button from '@/components/Button';
import ChecklistIcon from '@/components/icons/ChecklistIcon';

export default function LicensePage() {
  const licenses = [
    {
      title: "Desktop License",
      subtitle: "For Creating Graphics & Documents",
      details: "Our standard license for using fonts on a desktop computer. Perfect for freelancers, students, and creating a vast array of static design work.",
      features: [
        "Install the font on up to 2 computers per user.",
        "Create logos, branding, and marketing materials.",
        "Create rasterized images (JPEG, PNG) for web, ads, and social media.",
        "Create physical end products for sale (merchandise, packaging, print).",
        "Use in videos (YouTube, social media, etc.)."
      ]
    },
    {
      title: "Website License",
      subtitle: "For Use on the Web",
      details: "Allows you to embed the font into a single website's code, so it appears as live, selectable text.",
      features: [
        "Use on one (1) website domain.",
        "License covers up to 50,000 monthly pageviews. (Contact us for higher traffic sites).",
        "Provided in WOFF & WOFF2 file formats for web optimization.",
        "This is for live text using CSS @font-face."
      ]
    },
    {
      title: "App License",
      subtitle: "For Mobile & Desktop Applications",
      details: "Required if you are embedding the font file into the code of a mobile or desktop application.",
      features: [
        "Embed in one (1) application title (e.g. one iOS app, one Android app, or one PC/Mac game).",
        "Covers unlimited installations of your application.",
        "The font file must be secured within the app&apos;s package and not accessible by end-users."
      ]
    },
    {
      title: "E-pub License",
      subtitle: "For E-books & Digital Publications",
      details: "For embedding the font into an electronic publication like an e-book, e-magazine, or interactive PDF.",
      features: [
        "Use for one (1) publication title (e.g. one book title, regardless of how many times it&apos;s sold).",
        "The font must be embedded in a secure, non-extractable format (e.g., EPUB, AZW, PDF)."
      ]
    },
    {
      title: "Broadcast License",
      subtitle: "For TV, Film, and Streaming",
      details: "A specific license for using the font in motion pictures, television shows, video streaming services, and broadcast commercials.",
      features: [
        "Use in titles, credits, or other text within one (1) film, one (1) television series, or a broadcast advertising campaign.",
        "License term is typically for one year and renewable.",
        "Pricing is based on the scale and reach of the production. Please contact us for a quote."
      ]
    },
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6">

        <section className="py-16 sm:py-24 text-center">
          <h1 className="text-[48px] font-medium text-[#3F3F3F]">Our Licenses</h1>
          <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6" style={{ height: '4px' }}></div>
          <p className="mt-4 text-[18px] font-light text-[#3F3F3F]">
            Simple, clear, and comprehensive terms to help you create with confidence.
          </p>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
            
            {licenses.map((license) => (
              // PERUBAHAN DI SINI: Kembali ke struktur awal di dalam kartu
              <div key={license.title} className="w-[554px] border border-[#3F3F3F] rounded-2xl p-8 flex flex-col">
                <h2 className="text-[28px] font-medium text-[#3F3F3F]">{license.title}</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
                <p className="text-[20px] font-normal text-[#3F3F3F]">{license.subtitle}</p>
                <p className="text-[16px] font-light text-[#3F3F3F] my-6">{license.details}</p>
                {/* Menghapus mt-auto dari sini */}
                <ul className="space-y-4">
                  {license.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-x-3">
                      <ChecklistIcon className="w-[20px] h-[20px] text-[#C8705C] flex-shrink-0 mt-px" />
                      <span className="font-light text-[#3F3F3F] text-[16px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="w-[554px] border border-[#3F3F3F] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <h2 className="text-[28px] font-medium text-[#3F3F3F]">Need a Custom Solution?</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
                <p className="text-[18px] font-normal text-[#3F3F3F] mt-2">
                  On a Limited Budget or Need a Custom License?
                </p>
                <p className="text-[16px] font-light text-[#3F3F3F] my-6 max-w-md">
                  Our team can create a tailored package that fits your project&apos;s unique scope and budget. We&apos;re here to help.
                </p>
                <Button 
                  href="/contact?subject=Custom+License+Inquiry"
                  variant="primary"
                  className="w-[329px] h-[68px] text-[21px] font-medium flex items-center justify-center mt-4"
                >
                  Contact Us
                </Button>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}