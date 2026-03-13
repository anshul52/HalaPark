import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/97143782022?text=Hello%20HalaPark%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20parking%20solutions.";

const contactMethods = [
  {
    label: "Email",
    value: "info@halapark.com",
    href: "mailto:info@halapark.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+971 4 3782022",
    href: "tel:+97143782022",
    icon: PhoneCall,
  },
];

export default function SupportContactCTA() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_32%),linear-gradient(135deg,#071424_0%,#0f1f38_48%,#123b66_100%)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8 md:p-10">
          <div className="absolute -top-16 right-8 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -bottom-14 left-6 h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
                Get In Touch
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[3.1rem]">
                Ready to Transform Your Parking Operations?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Whether you want to list a space, integrate our platform, or
                explore enterprise solutions, our team is ready to help.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-200">
                Email:{" "}
                <a
                  href="mailto:info@halapark.com"
                  className="font-medium text-white transition hover:text-cyan-200"
                >
                  info@halapark.com
                </a>{" "}
                <span className="px-2 text-white/35">|</span>
                Phone:{" "}
                <a
                  href="tel:+97143782022"
                  className="font-medium text-white transition hover:text-cyan-200"
                >
                  +971 4 3782022
                </a>
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                    Support
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Talk to the team directly
                  </p>
                </div>

                <span className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-cyan-300/10 text-cyan-100 sm:inline-flex">
                  <PhoneCall className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {contactMethods.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-4 transition hover:border-cyan-300/30 hover:bg-slate-950/40"
                    >
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-all text-base font-medium text-white sm:text-lg">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
