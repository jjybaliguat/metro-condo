// app/terms/page.tsx or pages/terms.tsx
import React from "react";

const terms = [
  {
    title: "1. Use of the Site",
    description: (
      <>
        <p>
          Metro Condo Living provides real estate-related content, listings, and services
          for informational purposes only. You may use this Site for personal,
          non-commercial use and in accordance with these Terms.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Use the Site in any unlawful manner.</li>
          <li>Attempt to gain unauthorized access to any part of the Site.</li>
          <li>Copy, scrape, or reproduce any content without written permission.</li>
          <li>Interfere with the proper working of the Site.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Intellectual Property Rights",
    description:
      "All content on this Site, including but not limited to text, graphics, logos, images, videos, design, and software, is the property of Metro Condo Living or its content providers and is protected by copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "3. Real Estate Listings & Content",
    description:
      "Property listings and project details are for informational purposes only and do not constitute a binding offer. Metro Condo Living does not guarantee accuracy or availability. Users are advised to verify property details independently.",
  },
  {
    title: "4. Third-Party Links",
    description:
      "Our Site may contain links to third-party websites or services. These links are for convenience and do not imply endorsement. Metro Condo Living is not responsible for their content or accuracy.",
  },
  {
    title: "5. User Submissions",
    description:
      "By submitting any content (inquiries, messages, etc.), you agree not to submit unlawful, defamatory, or infringing material. You grant Metro Condo Living the right to use and display such content.",
  },
  {
    title: "6. Disclaimer of Warranties",
    description:
      'The Site and its content are provided "as is" and "as available." Metro Condo Living does not guarantee uptime, error-free content, or the completeness of the information. Use the Site at your own risk.',
  },
  {
    title: "7. Limitation of Liability",
    description:
      "Metro Condo Living is not liable for any direct, indirect, incidental, or consequential damages related to your use of the Site, including errors in listings, system failures, or data loss.",
  },
  {
    title: "8. Modifications to Terms",
    description:
      "We may update these Terms without prior notice. Continued use of the Site indicates your acceptance of the updated Terms. Please review regularly.",
  },
  {
    title: "9. Privacy Policy",
    description:
      "Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.",
  },
  {
    title: "10. Governing Law",
    description:
      "These Terms are governed by the laws of the Republic of the Philippines. Any disputes will be subject to the exclusive jurisdiction of the courts in Metro Manila.",
  },
  {
    title: "11. Contact Us",
    description: (
      <>
        For any questions or concerns about these Terms, please contact us at:
        <ul className="list-none mt-2 ml-2">
          <li>📧 <strong>Email:</strong> metrocondolifestyle@gmail.com</li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Terms of Use
        </h1>
        <div className="space-y-6">
          {terms.map((term, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {term.title}
              </h2>
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                {term.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
