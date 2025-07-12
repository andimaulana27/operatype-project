// src/app/(main)/privacy/page.js

// PERBAIKAN: Data diperbarui menjadi 11 poin lengkap sesuai gambar
const privacyPolicyData = [
  {
    title: "Information We Collect",
    content: "We collect two types of information when you visit or use our Website:",
    sections: [
      {
        subtitle: "a. Personal Information:",
        text: "When you register an account, make a purchase, or interact with our Website, we may collect the following personal information:",
        points: [
          "Name",
          "Email address",
          "Shipping and billing address",
          "Payment information (e.g., PayPal details)",
          "Phone number (optional)"
        ]
      },
      {
        subtitle: "b. Non-Personal Information:",
        text: "We may also collect non-personal information related to your interaction with the Website, including:",
        points: [
          "IP address",
          "Browser type and version",
          "Device type and operating system",
          "Pages visited and time spent on the Website",
          "Referring URL"
        ]
      }
    ]
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide and improve our services, including:",
    subpoints: [
      "Processing your orders and delivering Products.",
      "Sending order confirmations, receipts, and updates regarding your purchase.",
      "Responding to your inquiries and providing customer support.",
      "Improving the Website and making it more user-friendly.",
      "Personalizing your experience with our Products and promotions.",
      "Complying with legal requirements."
    ]
  },
  {
    title: "Sharing Your Information",
    content: "We will not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
    subpoints: [
      "Service Providers: We may share your personal information with trusted third-party service providers who assist in processing payments, delivering products, and performing other essential services.",
      "Legal Compliance: If required by law or in response to a valid legal request, we may disclose your information to law enforcement or regulatory authorities.",
      "Business Transfers: In the event of a merger, acquisition, or sale of operatype.co, your information may be transferred as part of the business transaction."
    ]
  },
  {
    title: "Data Security",
    content: "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
  },
  {
    title: "Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small text files stored on your device that help us remember your preferences and improve our services. You can choose to disable cookies through your browser settings, but this may impact the functionality of the Website."
  },
  {
    title: "Your Rights and Choices",
    content: "You have the right to:",
    subpoints: [
      "Access and update your personal information at any time through your account settings.",
      "Request to delete your account or personal data by contacting us at operatype.co@gmail.com.",
      "Opt-out of receiving promotional emails by clicking the unsubscribe link in our emails or contacting us directly."
    ]
  },
  {
    title: "Third-Party Links",
    content: "Our Website may contain links to third-party websites or services that are not operated by operatype.co. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before interacting with them."
  },
  {
    title: "Children's Privacy",
    content: "Our Website is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 18, we will take steps to delete that information."
  },
  {
    title: "International Transfers",
    content: "If you are accessing the Website from outside Indonesia, please be aware that your information may be transferred to, stored, and processed in countries where our servers are located. By using our Website, you consent to the transfer of your information to countries outside of your own, which may have different data protection laws."
  },
  {
    title: "Changes to This Privacy Policy",
    content: "We reserve the right to update or change this Privacy Policy at any time. When we make changes, the updated policy will be posted on this page with an updated effective date. Please review this Privacy Policy periodically to stay informed of any updates."
  },
  {
    title: "Contact Information",
    content: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:\nEmail: operatype.co@gmail.com"
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3F3F3F]">Privacy Policy</h1>
          <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-6"></div>
          <p className="mt-4 text-sm font-light text-gray-400">
            Effective Date: July 12, 2025
          </p>
           <p className="mt-6 text-base text-gray-500 font-light max-w-4xl mx-auto">
            At operatype.co, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to safeguard your data.
          </p>
        </div>
        
        <div className="space-y-8">
          {privacyPolicyData.map((policy, index) => (
            <div key={index}>
              <h2 className="text-xl font-medium text-[#C8705C]">
                {index + 1}. {policy.title}
              </h2>
              {/* Menggunakan 'whitespace-pre-wrap' untuk menghormati baris baru pada 'Contact Information' */}
              <p className="mt-2 text-gray-500 font-light whitespace-pre-wrap">
                {policy.content}
              </p>
              
              {/* Logika untuk menampilkan sub-poin umum */}
              {policy.subpoints && (
                <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                  {policy.subpoints.map((point, i) => (
                    <li key={i} className="text-gray-500 font-light">{point}</li>
                  ))}
                </ul>
              )}

              {/* Logika khusus untuk menampilkan poin a dan b pada pasal 1 */}
              {policy.sections && policy.sections.map((section, secIndex) => (
                <div key={secIndex} className="mt-4 pl-4">
                    <h3 className="text-base font-medium text-[#C8705C]">{section.subtitle}</h3>
                    <p className="mt-1 text-gray-500 font-light">{section.text}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                        {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-gray-500 font-light">{point}</li>
                        ))}
                    </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}