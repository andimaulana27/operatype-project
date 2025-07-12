// src/app/(main)/terms/page.js

// PERBAIKAN: Struktur data diperbarui untuk mengakomodasi sub-poin (list)
const termsOfServiceData = [
  {
    title: "Acceptance of Terms",
    content: "By using our Website or purchasing our Products, you agree to be bound by these Terms, as well as any additional terms or conditions that may apply to specific sections of the Website or Products. If you do not agree with these Terms, please refrain from using the Website."
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify, update, or change these Terms at any time. When we make changes, the updated Terms will be posted on this page with an updated effective date. Please review these Terms periodically to stay informed of any changes."
  },
  {
    title: "Product Availability",
    content: "We offer a variety of digital fonts for purchase on operatype.co. All Products are digital files and will be delivered to you electronically upon successful payment. Availability and pricing of Products may change without notice. We do not guarantee the availability of any specific Product at all times."
  },
  {
    title: "Use of Products",
    content: "By purchasing a font from operatype.co, you are granted a non-exclusive, non-transferable license to use the Product for personal or commercial purposes, depending on the type of license purchased. You may not:",
    subpoints: [
      "Resell, sublicense, or distribute the fonts.",
      "Modify, reverse-engineer, or use the fonts in a way that violates copyright laws.",
      "Use the fonts for unlawful purposes.",
      "For detailed licensing information, please refer to our License Agreement."
    ]
  },
  {
    title: "Account Registration",
    content: "To purchase Products from operatype.co, you may need to create an account. You agree to provide accurate and up-to-date information during the registration process and to update your account details if necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account."
  },
  {
    title: "Payment and Pricing",
    content: "All prices for Products are listed in USD (United States Dollar) and are subject to change. Payment must be made in full at the time of purchase. We accept payment via PayPal. By providing your payment details, you authorize us to change the full price of the Product to your selected payment method."
  },
  {
    title: "Refunds and Returns",
    content: "Due to the nature of digital products, all sales are final, and no refunds will be issued once a font has been delivered or downloaded. Please review the product details and ensure compatibility before making your purchase."
  },
  {
    title: "Intellectual Property",
    content: "All Products, including but not limited to fonts, logos, images, and content on operatype.co, are protected by copyright, trademark, and other intellectual property laws. The ownership of these Products remains with operatype.co or the respective rights holders."
  },
  {
    title: "User Conduct",
    content: "You agree to use the Website in compliance with all applicable laws and regulations. You shall not:",
    subpoints: [
        "Engage in activities that could damage, disable, or impair the Website.",
        "Attempt to gain unauthorized access to any part of the Website or the systems of operatype.co.",
        "Submit false or misleading information on the Website."
    ]
  },
  {
    title: "Limitation of Liability",
    content: "To the fullest extent permitted by law, operatype.co shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or the Products, including any errors, inaccuracies, or interruptions of service."
  },
  {
    title: "Privacy Policy",
    content: "By using our Website and purchasing our Products, you consent to the collection, use, and sharing of your personal data as outlined in our Privacy Policy."
  },
  {
    title: "Termination",
    content: "We reserve the right to suspend or terminate your access to the Website or your account at our discretion, without prior notice, if you violate these Terms."
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of Indonesia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Indonesia."
  },
  {
    title: "Contact Information",
    content: "If you have have any questions or concerns about these Terms or the Products, please contact us at:",
    subpoints: [
        "Email: operatype.co@gmail.com",
        "Phone: [Phone Number]"
    ]
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3F3F3F]">Terms of Service</h1>
          <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-6"></div>
          <p className="mt-4 text-sm font-light text-gray-400">
            Effective Date: July 12, 2025
          </p>
           <p className="mt-6 text-base text-gray-500 font-light max-w-4xl mx-auto">
            Welcome to operatype.co. Please read these Terms of Service (“Terms”) carefully before using our website, or purchasing any products offered through operatype.co. By accessing or using the Website, you agree to comply with and be bound by these Terms.
          </p>
        </div>
        
        <div className="space-y-8">
          {termsOfServiceData.map((term, index) => (
            <div key={index}>
              <h2 className="text-xl font-medium text-[#C8705C]">
                {index + 1}. {term.title}
              </h2>
              <p className="mt-2 text-gray-500 font-light">
                {term.content}
              </p>
              {/* PERBAIKAN: Logika untuk menampilkan list jika ada */}
              {term.subpoints && (
                <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                  {term.subpoints.map((point, i) => (
                    <li key={i} className="text-gray-500 font-light">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}