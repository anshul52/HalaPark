import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesBySlug, servicesData } from "@/modules/home/servicesData";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#what-we-do"
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0088FF] hover:text-[#0088FF]"
        >
          Back to Services
        </Link>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0088FF]">
            Service Detail
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {service.detailIntro}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.detailSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Key Highlights
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Typical Use Cases
              </h2>
              <ul className="mt-4 space-y-3">
                {service.useCases.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Expected Outcomes
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {service.outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#cfe6ff] bg-[#f4f9ff] px-4 py-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
