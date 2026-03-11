"use client";

export default function TrustedUsers() {
  const highlights = [
    "Smart parking platform for property owners, enterprises, and drivers",
    "Integrated operations across access, payments, and reporting",
    "Focused on security, reliability, and scalable deployments",
  ];

  const stats = [
    { label: "Years in Market", value: "8+" },
    { label: "Operational Locations", value: "120+" },
    { label: "Enterprise Deployments", value: "40+" },
    { label: "Monthly Transactions", value: "1M+" },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 sm:p-7 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 md:gap-8 items-start">
            <div>
              <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm font-medium text-blue-700">
                About The Company
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900 max-w-2xl">
                Building smarter parking ecosystems for modern cities
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Hala Park helps transform underused parking into efficient,
                revenue-generating infrastructure with digital-first operations.
                Our solutions support residential towers, commercial properties,
                and enterprise facilities.
              </p>

              <div className="mt-5 space-y-2.5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <p className="text-sm sm:text-base text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  <p className="text-2xl sm:text-3xl font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
