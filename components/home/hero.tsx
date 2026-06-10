import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, BlossomIcon, CodeIcon } from "@/components/ui/icons";
import { siteInfo } from "@/data/site";

export function Hero() {
  return (
    <section className="blossom-photo relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f5b9d0]/20 blur-3xl" />
        <span className="petal right-[18%] top-[17%]" />
        <span className="petal right-[10%] top-[35%] [animation-delay:1.8s]" />
        <span className="petal right-[27%] top-[49%] [animation-delay:3.4s]" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-surface/72 px-3.5 py-2 text-sm font-medium text-teal shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-teal shadow-[0_0_14px_rgba(194,79,124,0.45)]" />
            {siteInfo.availability}
          </div>

          <p className="mt-8 text-base font-semibold tracking-wide text-teal">
            Hello, I&apos;m {siteInfo.shortName}.
          </p>
          <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-copy sm:text-6xl lg:text-7xl">
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
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#f2a9c6]/30 to-[#b8d8eb]/20 blur-2xl" />
            <div className="surface relative overflow-hidden rounded-[1.75rem]">
              <BlossomIcon className="absolute -right-8 -top-8 size-36 text-teal/8" />
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#e68aad]" />
                  <span className="size-2.5 rounded-full bg-[#f0c2d4]" />
                  <span className="size-2.5 rounded-full bg-[#92bad4]" />
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
                    <span className="text-[#a94670]">&quot;scalable systems&quot;</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-teal">values</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-copy">[</span>
                    <span className="text-[#a94670]">&quot;problem solving&quot;</span>
                    <span className="text-muted">,</span>{" "}
                    <span className="text-[#a94670]">
                      &quot;performance&quot;
                    </span>
                    <span className="text-copy">]</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-teal">approach</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-[#a94670]">
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
