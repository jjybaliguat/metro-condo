import React from "react";

const policies = [
  {
    title: "1. Information We Collect",
    description: (
      <>
        <p>We may collect the following personal data from users:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Full name</li>
          <li>Email address</li>
          <li>Mobile number</li>
          <li>Location or address (if voluntarily provided)</li>
          <li>Property preferences and inquiry details</li>
          <li>IP address and browser information</li>
          <li>Social media account (if contacted via social platforms)</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Collect Your Data",
    description: (
      <>
        <p>We collect your data through:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Contact forms and inquiry submissions</li>
          <li>Property reservation or consultation requests</li>
          <li>Social media messaging</li>
          <li>Email correspondence</li>
          <li>Website analytics tools (e.g., Google Analytics)</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    description: (
      <>
        <p>Your personal data may be used for the following purposes:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>To respond to inquiries and provide information about our real estate services</li>
          <li>To schedule property viewings or consultations</li>
          <li>To provide updates on listings, promotions, or events (only with your consent)</li>
          <li>To improve our website and customer service</li>
          <li>To comply with legal or regulatory obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Sharing and Disclosure",
    description: (
      <>
        <p>We do not sell or rent your personal information. However, we may share your data with:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Partner developers or licensed real estate brokers for coordination</li>
          <li>Service providers under confidentiality agreements</li>
          <li>Government agencies if required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Protection and Security",
    description: (
      <>
        <p>We implement technical and organizational measures such as:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Secure hosting platforms</li>
          <li>Password-protected databases</li>
          <li>Limited access to authorized personnel</li>
        </ul>
        <p className="mt-2">
          No data transmission is 100% secure. You share data with us at your own risk.
        </p>
      </>
    ),
  },
  {
    title: "6. Your Data Privacy Rights",
    description: (
      <>
        <p>Under the Data Privacy Act of 2012 (RA 10173), you have the right to:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Access your personal data</li>
          <li>Correct inaccurate or outdated data</li>
          <li>Withdraw consent at any time</li>
          <li>Request deletion of your data</li>
          <li>File a complaint with the National Privacy Commission (NPC)</li>
        </ul>
        <p className="mt-2">
          Contact us to exercise any of these rights.
        </p>
      </>
    ),
  },
  {
    title: "7. Retention of Data",
    description:
      "We retain your personal information only as long as necessary to fulfill the purposes outlined or as required by law.",
  },
  {
    title: "8. Cookies and Analytics",
    description:
      "We may use cookies and similar technologies for analytics and to improve your experience. You may disable cookies in your browser settings.",
  },
  {
    title: "9. Third-Party Links",
    description:
      "Our Site may contain links to external websites. We are not responsible for their privacy practices. Please review their privacy policies.",
  },
  {
    title: "10. Updates to This Policy",
    description:
      "We may update this Privacy Policy from time to time. Continued use of the Site means you accept the updated policy. The latest version is always available on our website.",
  },
  {
    title: "11. Contact Us",
    description: (
      <>
        If you have questions about this Privacy Policy, contact us at:
        <ul className="list-none mt-2 ml-2">
          <li>📧 <strong>Email:</strong> metrocondoliving@gmail.com</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {policy.title}
              </h2>
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                {policy.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
