import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import {
  aboutImage,
  categories,
  ctaImage,
  heroImage,
  photos,
  type Video,
} from "@/lib/portfolio-data";
import { VideoTile } from "@/components/portfolio/VideoTile";
import { Lightbox } from "@/components/portfolio/Lightbox";

const TITLE = "Tami Eaton — UGC Creator, Spokesperson & Content Strategist";
const DESC =
  "Warm, relatable, authentic content for 1,000+ brands. UGC video, spokesperson talking heads, voiceovers and product photography by Tami Eaton.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const EMAIL = "tamieatonugc@gmail.com";
const NAV = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Testimonials", "#testimonials"],
] as const;

const BRANDS = [
  "L'Oréal", "European Wax Center", "IGK", "Fiverr", "Rocket Money", "Mindvalley", "Eufora",
  "DRMTLGY", "Maëlys", "Fancii", "Oats Overnight", "Blackout Coffee Co.", "Bones Coffee",
  "Runna", "Collaro", "Drift", "PawfyPawfy", "Get Dandy",
];

const SERVICES = [
  ["UGC Video", "Native, scroll-stopping content built for paid social and organic feeds."],
  ["Spokesperson & Talking Head", "On-camera delivery that explains your product with warmth and confidence."],
  ["Voiceover", "Clear, relatable narration layered over product and lifestyle footage."],
  ["Unboxing, Demos & Reviews", "First-impression and how-it-works content that builds trust before purchase."],
  ["Greenscreen & Skits", "Story-driven formats for apps, tech and education-led products."],
  ["Product Photography", "Editorial lifestyle and detail imagery of your product in real use."],
] as const;

const TESTIMONIALS = [
  {
    q: "Working with Tami was an outstanding experience for our brand. Her storytelling brought our product to life, engaging and resonating with our audience in a powerful way. The quality of her work was top-notch, delivered with a high level of professionalism and creativity that matched our brand's identity perfectly. In short, she exceeded our expectations in every aspect — creativity, timeliness, and communication.",
    a: "Le Skyebleu",
  },
  {
    q: "Tami hit the UGC video out of the park. She is very professional, responsive, reliable, and just flat out gets it. We sent her the product and gave her some general directions and she ran with it and really delivered above our expectations.",
    a: "Lava Craft Cocktail Co.",
  },
  {
    q: "Tami’s work blew me away! She took the agreed script and really brought it to life with her story telling skills. I could tell that she really understood the products and benefits. Fantastic camera work and editing skills.",
    a: "SilentWakeUp",
  },
  {
    q: "We recently had the pleasure of working with Tami for the second time on a project involving social media and advertising content. Her communication skills and ability to deliver high-quality content consistently impress us.",
    a: "WanaKome",
  },
  {
    q: "She nailed it, and I’m excited to use her content in my upcoming ad campaign — highly recommend Tami, she really adds that high end ‘influencer’ type feel to her content — just what I was looking for.",
    a: "Karl O'Hare",
  },
];

function Index() {
  const [active, setActive] = useState<Video | null>(null);
  const [menu, setMenu] = useState(false);
  const close = useCallback(() => setActive(null), []);

  return (
    <div className="bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="eyebrow text-[0.75rem] tracking-[0.34em]">Tami Eaton</a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="eyebrow link-line">{l}</a>
            ))}
            <a href="#contact" className="eyebrow border border-foreground px-5 py-2.5 transition-colors hover:bg-foreground hover:text-background">
              Let's work together
            </a>
          </nav>
          <button className="eyebrow md:hidden" onClick={() => setMenu((m) => !m)} aria-expanded={menu}>
            {menu ? "Close" : "Menu"}
          </button>
        </div>
        {menu && (
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-8 pt-4 md:hidden">
            {[...NAV, ["Let's work together", "#contact"] as const].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenu(false)} className="font-display py-2 text-4xl">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-24 md:grid-cols-12 md:px-10 md:pb-24 md:pt-28">
        <div className="relative z-10 flex flex-col justify-end md:col-span-6 md:pb-10">
          <p className="eyebrow rise text-muted-foreground">UGC Creator / Spokesperson / Content Strategist</p>
          <h1 className="font-display rise mt-6 text-[clamp(3rem,7vw,6.75rem)] leading-[0.92]" style={{ animationDelay: ".1s" }}>
            Content that makes people <em className="text-accent">stop,</em> trust &amp; take action.
          </h1>
          <p className="rise mt-8 max-w-md text-base leading-relaxed text-muted-foreground" style={{ animationDelay: ".2s" }}>
            Warm, relatable, authentic and confident on camera — with a marketing &amp; sales background that shapes
            every hook, script and story.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".3s" }}>
            <a href="#work" className="eyebrow bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85">Explore my work</a>
            <a href="#contact" className="eyebrow border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background">Let's work together</a>
          </div>
        </div>
        <div className="relative md:col-span-6">
          <img src={heroImage} alt="Tami Eaton holding a product in warm sunlight" fetchPriority="high" className="aspect-[4/5] w-full object-cover md:aspect-[3/4]" />
          <span className="giant pointer-events-none absolute -bottom-6 -left-4 select-none text-background/90 md:-left-24">Tami</span>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-y border-border">
        <dl className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {[
            ["1,000+", "Brands created for"],
            ["7 Years", "Of experience"],
            ["Marketing", "& sales background"],
            ["Scottsdale", "Arizona, USA"],
          ].map(([a, b], i) => (
            <div key={a} className={`px-5 py-8 md:px-10 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}>
              <dt className="font-display text-3xl md:text-4xl">{a}</dt>
              <dd className="eyebrow mt-2 text-muted-foreground">{b}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto grid max-w-[1440px] scroll-mt-16 gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <img src={aboutImage} alt="Portrait of Tami Eaton at her desk" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <p className="eyebrow text-accent">About</p>
          <h2 className="font-display mt-6 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.95]">
            Warm. Relatable.<br />Authentic. <em>Confident.</em>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I'm Tami — a creator, spokesperson and storyteller who has made content for over 1,000 brands. My
            marketing &amp; sales background means I don't just film a product; I think about who's watching, what
            stops their scroll and what earns their trust.
          </p>
          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-8 text-sm">
            {["Millennial, 38", "Based in Scottsdale, AZ", "Marketing & sales background", "Wellness & fitness lover", "Wife & dog mom", "Two French Bulldogs"].map((x) => (
              <li key={x} className="text-muted-foreground">— {x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* BRANDS */}
      <section aria-label="Trusted by brands" className="border-y border-border py-8">
        <p className="eyebrow mb-6 text-center text-muted-foreground">Trusted by 1,000+ brands, including</p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee flex w-max gap-14">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="font-display whitespace-nowrap text-xl text-taupe md:text-2xl">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-16 pt-24 md:pt-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-accent">Selected work</p>
          <h2 className="font-display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]">
            Real content. <em>Strategic storytelling.</em>
          </h2>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((c, i) => (
              <a key={c.id} href={`#${c.id}`} className="eyebrow link-line text-muted-foreground hover:text-foreground">
                {String(i + 1).padStart(2, "0")} {c.title}
              </a>
            ))}
            <a href="#photography" className="eyebrow link-line text-muted-foreground hover:text-foreground">07 Product Photography</a>
          </nav>
        </div>
        {categories.map((c, i) => (
          <Chapter key={c.id} cat={c} n={i} onOpen={setActive} />
        ))}
      </section>

      {/* PHOTOGRAPHY */}
      <section id="photography" className="scroll-mt-16 bg-card py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-accent">07 — Product Photography</p>
              <h2 className="giant mt-4 !text-[clamp(4rem,11vw,11rem)]">Still<em> life.</em></h2>
            </div>
            <p className="max-w-sm text-muted-foreground md:col-span-4 md:col-start-9">
              Beyond video — editorial product imagery shot in real moments: in hand, in use and in beautiful detail.
            </p>
          </div>
          <div className="mt-14 columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
            {photos.map((src, i) => (
              <img key={src} src={src} alt={`Product photography by Tami Eaton, image ${i + 1}`} loading="lazy" decoding="async"
                className="mb-3 w-full break-inside-avoid transition-[filter] duration-700 hover:brightness-105 md:mb-5" />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto grid max-w-[1440px] scroll-mt-16 gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-4">
          <p className="eyebrow text-accent">Services</p>
          <h2 className="font-display mt-6 text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95]">What I create <em>for brands.</em></h2>
          <img src={photos[6]} alt="Tami filming skincare content in a mirror" loading="lazy" className="mt-10 hidden aspect-[3/4] w-full object-cover md:block" />
        </div>
        <ol className="md:col-span-7 md:col-start-6">
          {SERVICES.map(([t, d], i) => (
            <li key={t} className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-8 last:border-b md:grid-cols-[4rem_1fr_1fr] md:gap-8">
              <span className="eyebrow pt-3 text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">{t}</h3>
              <p className="col-start-2 text-muted-foreground md:col-start-3 md:pt-2">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-16 border-t border-border py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-accent">Testimonials</p>
          <figure className="mt-10 grid gap-8 md:grid-cols-12">
            <span className="font-display text-[10rem] leading-[0.6] text-accent md:col-span-1" aria-hidden>“</span>
            <div className="md:col-span-10">
              <blockquote className="font-display text-[clamp(1.6rem,3.2vw,2.9rem)] leading-[1.15]">{TESTIMONIALS[0].q}</blockquote>
              <figcaption className="eyebrow mt-8 text-muted-foreground">— {TESTIMONIALS[0].a}</figcaption>
            </div>
          </figure>
          <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
            {TESTIMONIALS.slice(1).map((t) => (
              <figure key={t.a} className="bg-background p-8 md:p-12">
                <blockquote className="text-lg leading-relaxed">“{t.q}”</blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">Let's do this</p>
            <h2 className="font-display mt-6 text-[clamp(2.75rem,6vw,6rem)] leading-[0.92]">
              Ready to create something your audience will <em className="text-accent">remember?</em>
            </h2>
            <p className="mt-8 max-w-md text-ink-foreground/70">Email me to go over your project and a custom rate.</p>
            <a href={`mailto:${EMAIL}`} className="eyebrow mt-10 inline-block bg-ink-foreground px-9 py-4 text-ink transition-opacity hover:opacity-85">
              Let's work together
            </a>
            <p className="mt-6"><a href={`mailto:${EMAIL}`} className="link-line text-ink-foreground/80">{EMAIL}</a></p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <img src={ctaImage} alt="Tami Eaton sitting on stairs" loading="lazy" className="aspect-[3/4] w-full object-cover opacity-90" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-ink-foreground/15 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="font-display text-4xl">Tami Eaton</p>
            <p className="eyebrow mt-2 text-ink-foreground/60">UGC Creator / Spokesperson / Content Strategist</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {[...NAV, ["Contact", "#contact"] as const].map(([l, h]) => (
              <a key={h} href={h} className="eyebrow link-line text-ink-foreground/80">{l}</a>
            ))}
          </nav>
          <p className="eyebrow text-ink-foreground/50">© {new Date().getFullYear()} Tami Eaton</p>
        </div>
      </footer>

      <Lightbox video={active} onClose={close} />
    </div>
  );
}

type Cat = (typeof categories)[number];

function ChapterHead({ cat, n, align = "left" }: { cat: Cat; n: number; align?: "left" | "right" }) {
  return (
    <div className={`flex flex-col gap-4 ${align === "right" ? "md:items-end md:text-right" : ""}`}>
      <p className="eyebrow text-accent">{String(n + 1).padStart(2, "0")} — {cat.meta}</p>
      <h3 className="giant">{cat.title}</h3>
      <p className="text-sm text-muted-foreground">Featuring work for {cat.brands.join(", ")}</p>
    </div>
  );
}

function Chapter({ cat, n, onOpen }: { cat: Cat; n: number; onOpen: (v: Video) => void }) {
  const v = cat.videos as unknown as [Video, ...Video[]];
  const idx = (i: number) => `${n + 1}.${i + 1}`;
  const layout = n % 3;

  return (
    <article id={cat.id} className="mx-auto max-w-[1440px] scroll-mt-20 overflow-hidden px-5 py-20 md:px-10 md:py-28">
      {layout === 0 && (
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-12"><ChapterHead cat={cat} n={n} /></div>
          <VideoTile video={v[0]} index={idx(0)} onOpen={onOpen} className="md:col-span-5" />
          <div className="grid grid-cols-2 gap-4 md:col-span-6 md:col-start-7 md:mt-40 md:gap-6">
            {v.slice(1).map((x, i) => (
              <VideoTile key={x.preview} video={x} index={idx(i + 1)} onOpen={onOpen} className={i % 2 ? "md:mt-24" : ""} />
            ))}
          </div>
        </div>
      )}
      {layout === 1 && (
        <div className="grid gap-8 md:grid-cols-12">
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1 md:col-span-7 md:grid-cols-3 md:gap-6">
            {v.slice(1).map((x, i) => (
              <VideoTile key={x.preview} video={x} index={idx(i + 1)} onOpen={onOpen} className={i === 1 ? "md:mt-20" : ""} />
            ))}
          </div>
          <div className="order-1 flex flex-col gap-8 md:order-2 md:col-span-5">
            <ChapterHead cat={cat} n={n} align="right" />
            <VideoTile video={v[0]} index={idx(0)} onOpen={onOpen} className="md:ml-auto md:w-4/5" />
          </div>
        </div>
      )}
      {layout === 2 && (
        <div>
          <ChapterHead cat={cat} n={n} />
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {v.map((x, i) => (
              <VideoTile key={x.preview} video={x} index={idx(i)} onOpen={onOpen}
                className={`w-[68vw] shrink-0 snap-start md:w-auto ${i % 2 ? "md:translate-y-16" : ""}`} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
