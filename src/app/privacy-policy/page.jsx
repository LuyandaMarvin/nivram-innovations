"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="mb-4">
        At Nivram Innovations, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information you provide directly (e.g., name, email).</li>
        <li>Usage data such as IP address, browser type, and pages visited.</li>
        <li>Cookies and tracking technologies.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and improve our services.</li>
        <li>To communicate with you about updates, offers, or support.</li>
        <li>To analyze usage and enhance user experience.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">
        We implement industry-standard measures to protect your data against unauthorized access, alteration, or disclosure.
      </p>
      <h2 className="text-2xl font-semibold mb-6">Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data. Contact us anytime at <a href="mailto:hello@nivraminnovations.co.za" className="text-sky-400 underline">hello@nivraminnovations.co.za</a>.
      </p>

      <button
        onClick={() => router.back()}
        className="mt-8 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
      >
        ← Back
      </button>
    </main>
  );
}
