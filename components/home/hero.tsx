import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, CodeIcon } from "@/components/ui/icons";
import { siteInfo } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal/8 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky/8 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/8 px-3 py-1.5 text-sm font-medium text-teal">
            <span className="size-2 rounded-full bg-teal shadow-[0_0_14px_rgba(20,184,166,0.9)]" />
            {siteInfo.availability}
          </div>

          <p className="mt-8 text-base font-semibold tracking-wide text-sky">
            Hello, I&apos;m {siteInfo.shortName}.
          </p>
          <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-copy sm:text-6xl lg:text-7xl">
            I engineer software{" "}
            <span className="text-gradient">from system to screen.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {siteInfo.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects">
              Explore my work
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start a conversation
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={2} className="lg:pl-4">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal/15 to-sky/5 blur-2xl" />
            <div className="surface relative overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#FB7185]" />
                  <span className="size-2.5 rounded-full bg-[#FBBF24]" />
                  <span className="size-2.5 rounded-full bg-teal" />
                </div>
                <span className="font-mono text-xs text-muted">
                  engineer.ts
                </span>
              </div>

              <div className="space-y-5 p-6 font-mono text-sm leading-7 sm:p-8">
                <p>
                  <span className="text-sky">const</span>{" "}
                  <span className="text-copy">engineer</span>{" "}
                  <span className="text-muted">=</span>{" "}
                  <span className="text-copy">{"{"}</span>
                </p>
                <div className="space-y-2 pl-5 sm:pl-8">
                  <p>
                    <span className="text-teal">focus</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-[#F9A8D4]">&quot;scalable systems&quot;</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-teal">values</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-copy">[</span>
                    <span className="text-[#F9A8D4]">&quot;problem solving&quot;</span>
                    <span className="text-muted">,</span>{" "}
                    <span className="text-[#F9A8D4]">
                      &quot;performance&quot;
                    </span>
                    <span className="text-copy">]</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-teal">approach</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-[#F9A8D4]">
                      &quot;full-stack + systems&quot;
                    </span>
                  </p>
                </div>
                <p className="text-copy">{"};"}</p>

                <div className="mt-8 flex items-center gap-3 border-t border-line pt-5 text-muted">
                  <CodeIcon className="size-5 text-teal" />
                  <span className="text-xs sm:text-sm">
                    Python / Django / React / Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
