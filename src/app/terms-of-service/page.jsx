"use client";

import { useRouter } from "next/navigation";

export default function TermsOfService() {
  const router = useRouter();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      
      <p className="mb-4">
        Welcome to Nivram Innovations! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You agree to use our services only for lawful purposes.</li>
        <li>Unauthorized use may result in termination of access.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, and software on this site are owned by or licensed to Nivram Innovations.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        We provide our services "as is" without warranties of any kind. We are not liable for damages arising from use of our services.
      </p>
      <h2 className="text-2xl font-semibold mb-6">Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of our services constitutes acceptance of the new terms.
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
