"use client";

export default function ClientsPartners() {
  const clients = [
    "Marina Heights",
    "Skyline Residences",
    "MetroPoint Offices",
    "Pearl Bay Mall",
    "BlueGate Towers",
    "CityHub Retail",
    "Palm Horizon",
    "Axis Business Park",
  ];

  const partners = [
    {
      title: "Payment Gateways",
      description: "Support for cards, wallets, and contactless transactions.",
    },
    {
      title: "Access Control",
      description: "ANPR, RFID, and barrier systems connected in one flow.",
    },
    {
      title: "Property Platforms",
      description: "Easy integrations for residential and commercial operators.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-5 sm:p-7 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs sm:text-sm font-medium">
                Our Clients & Partners
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight max-w-2xl">
                Trusted across properties, retail spaces, and enterprise parking networks
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto">
              <div className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-center min-w-[90px]">
                <p className="text-base sm:text-lg font-semibold text-slate-900">500+</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Properties</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-center min-w-[90px]">
                <p className="text-base sm:text-lg font-semibold text-slate-900">40+</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Enterprise Clients</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-center min-w-[90px]">
                <p className="text-base sm:text-lg font-semibold text-slate-900">25+</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Integration Partners</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {clients.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-sm sm:text-base font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {partners.map((partner) => (
              <div
                key={partner.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <p className="text-base sm:text-lg font-semibold text-slate-900">{partner.title}</p>
                <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
