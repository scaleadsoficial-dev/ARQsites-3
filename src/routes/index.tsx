import { createFileRoute } from "@tanstack/react-router";

const WHATSAPP =
  "https://wa.me/5562981100408?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20Andr%C3%A9%20Lenza.";
const INSTAGRAM = "https://instagram.com/studioandrelenza";
const EMAIL = "andre@studioandrelenza.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio André Lenza — Arquitetura e Interiores premiados" },
      {
        name: "description",
        content:
          "Studio André Lenza, Goiânia. Arquitetura e interiores reconhecidos pela ArchDaily, Architizer A+Awards, Paris Design Awards e LAD.",
      },
      { property: "og:title", content: "Studio André Lenza — Arquitetura premiada" },
      {
        property: "og:description",
        content: "Arquitetura goiana reconhecida internacionalmente. Arquitetura | Interiores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const awards = [
  "ArchDaily",
  "Architizer A+Awards",
  "Paris Design Awards",
  "LAD — Latin American Design Awards",
  "Loop Design Awards",
  "Gold Line",
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-ink-foreground md:px-10">
          <a href="#" className="eyebrow text-sm">
            Studio André Lenza
          </a>
          <div className="hidden gap-10 md:flex">
            {[
              ["Reconhecimento", "#reconhecimento"],
              ["Projetos", "#projetos"],
              ["O arquiteto", "#arquiteto"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="eyebrow opacity-80 transition hover:opacity-100">
                {l}
              </a>
            ))}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="eyebrow border border-ink-foreground/60 px-4 py-2 transition hover:bg-ink-foreground hover:text-ink"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Vista aérea de piscina com deck de madeira e jardim tropical"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 text-ink-foreground md:px-10 md:pb-28">
          <p className="eyebrow animate-rise opacity-80">Arquitetura | Interiores — Goiânia</p>
          <h1 className="animate-rise mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            O reconhecimento fala por si.
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg opacity-85">
            Arquitetura goiana de linhas retas e raiz modernista, celebrada pelas mais importantes
            publicações e premiações do mundo.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="animate-rise eyebrow mt-10 inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Falar com André Lenza
          </a>
        </div>
      </section>

      {/* Awards strip */}
      <section id="reconhecimento" className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow text-accent">Publicado e premiado em</p>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 font-display text-xl md:grid-cols-3 md:text-2xl">
            {awards.map((a) => (
              <li key={a} className="border-t border-ink-foreground/20 pt-4">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project 1 — ArchDaily */}
      <section id="projetos" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:pt-10">
            <p className="eyebrow text-accent">01 — Publicado na ArchDaily</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Casa Jabuticabeiras
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Assinada pelo Studio André Lenza, a Casa Jabuticabeiras foi publicada na
                ArchDaily.com, celebrando a arquitetura brasileira em cada detalhe.
              </p>
              <p>
                O projeto conta com mobiliário assinado e selecionado na ID+D, criando uma
                composição que valoriza a arquitetura, o design e a personalidade da casa.
              </p>
            </div>
          </div>
          <figure className="md:col-span-7">
            <img
              src="/images/casa-1.jpg"
              alt="Sala de jantar da Casa Jabuticabeiras com forro de madeira"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <img src="/images/casa-2.jpg" alt="Casa Jabuticabeiras, ambiente interno" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          <img src="/images/casa-3.jpg" alt="Casa Jabuticabeiras, detalhe" className="aspect-[4/5] w-full object-cover md:mt-24" loading="lazy" />
        </div>
      </section>

      {/* Project 2 — Architizer */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7 md:order-1">
              <img src="/images/award-1.jpg" alt="Poltrona de madeira e couro em ambiente com marcenaria" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-5 md:order-2 md:pt-10">
              <p className="eyebrow text-accent">02 — Architizer A+Awards</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                De Goiás para o cenário internacional
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  O Studio André Lenza foi reconhecido no Architizer A+Awards, uma das mais
                  importantes premiações de arquitetura do mundo.
                </p>
                <p>
                  Um projeto que ultrapassa fronteiras, com marcenaria executada pela Pallazzo
                  Ambientes — transformando conceito em experiência e detalhe em permanência.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <img src="/images/award-2.jpg" alt="Projeto premiado no Architizer, ambiente" className="aspect-[4/5] w-full object-cover md:mt-24" loading="lazy" />
            <img src="/images/award-3.jpg" alt="Projeto premiado no Architizer, detalhe" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Architect */}
      <section id="arquiteto" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <img src="/images/andre.jpg" alt="Retrato do arquiteto André Lenza" className="w-full bg-card object-cover grayscale" loading="lazy" />
          <div>
            <p className="eyebrow text-accent">O arquiteto</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">André Lenza</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Arquiteto e urbanista formado pela Universidade Presbiteriana Mackenzie, em São
                Paulo, André Lenza iniciou a carreira ainda estudante no escritório do arquiteto e
                designer Arthur Casas.
              </p>
              <p>
                Da escola paulista de tradição modernista, herdou o estilo minimalista, marcado por
                linhas retas — e em cada projeto incorpora elementos de sua terra natal, Goiás.
              </p>
              <p>
                Premiado no Paris Design Awards, LAD e Loop Design Awards, integra pelo segundo ano
                consecutivo o time da Gold Line.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl text-primary">Arquitetura</p>
                <p className="mt-1 text-sm text-muted-foreground">Residencial e comercial</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">Interiores</p>
                <p className="mt-1 text-sm text-muted-foreground">Mobiliário e marcenaria autorais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-10">
          <div>
            <img src="/images/logo.png" alt="Logo Studio André Lenza" className="w-40 invert" loading="lazy" />
            <h2 className="mt-10 font-display text-4xl leading-tight md:text-6xl">
              Um projeto à altura do seu nome.
            </h2>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-10 inline-block bg-accent px-8 py-4 text-accent-foreground transition hover:bg-ink-foreground"
            >
              Falar com André Lenza
            </a>
          </div>
          <dl className="space-y-8 self-end text-lg">
            <div>
              <dt className="eyebrow text-accent">Endereço</dt>
              <dd className="mt-2 opacity-85">
                R. Camilo Flamarion, 54 — Serrinha
                <br />
                Goiânia — GO, 74835-010
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-accent">E-mail</dt>
              <dd className="mt-2"><a href={`mailto:${EMAIL}`} className="opacity-85 hover:opacity-100">{EMAIL}</a></dd>
            </div>
            <div>
              <dt className="eyebrow text-accent">Instagram</dt>
              <dd className="mt-2"><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="opacity-85 hover:opacity-100">@studioandrelenza</a></dd>
            </div>
            <div>
              <dt className="eyebrow text-accent">WhatsApp</dt>
              <dd className="mt-2"><a href={WHATSAPP} target="_blank" rel="noreferrer" className="opacity-85 hover:opacity-100">+55 62 98110-0408</a></dd>
            </div>
          </dl>
        </div>
        <p className="mx-auto mt-20 max-w-7xl px-6 text-sm opacity-50 md:px-10">
          © {new Date().getFullYear()} Studio André Lenza. Arquitetura | Interiores.
        </p>
      </section>
    </main>
  );
}
