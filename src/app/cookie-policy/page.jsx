"use client";

import { useRouter } from "next/navigation";

export default function CookiePolicy() {
  const router = useRouter();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      
      <p className="mb-4">
        Nivram Innovations uses cookies and similar tracking technologies to enhance your experience on our website.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device that help websites recognize your browser and remember information.
      </p>
      <h2 className="text-2xl font-semibold mb-2">How We Use Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To remember your preferences and settings.</li>
        <li>To analyze site usage and improve functionality.</li>
        <li>To provide targeted marketing and advertising.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
      <p>
        You can control or disable cookies through your browser settings. Disabling cookies may affect some features of our site.
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
