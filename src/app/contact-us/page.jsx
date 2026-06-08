export default function ContactUs() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-zinc-700">
      <h1 className="text-4xl font-bold mb-6 text-zinc-900">Contact Us</h1>

      <p className="mb-6">
        You can contact Nivram Innovations for product enquiries, support, billing, refunds, cancellations, or general business questions using the details below.
      </p>

      <div className="border border-zinc-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-900">Nivram Innovations</h2>
        <dl className="space-y-3">
          <div>
            <dt className="text-sm font-medium text-zinc-500">Email</dt>
            <dd>
              <a href="mailto:hello@nivraminnovations.com" className="text-[#e11d48] underline">
                hello@nivraminnovations.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">Location</dt>
            <dd>Cape Town, South Africa</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">Business Type</dt>
            <dd>Software products, SaaS platforms, mobile apps, web applications, AI products, and digital services.</dd>
          </div>
        </dl>
      </div>

      <p className="text-sm text-zinc-500">
        We aim to respond to business and support enquiries within 1 to 2 business days.
      </p>
    </main>
  );
}
