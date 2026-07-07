import Image from 'next/image';
import {Testimonianza} from '@/components/sections/home/Testimonianza';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {CityContent} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';
import {WHATSAPP_HREF} from '@/lib/contact';
import {TransferHero} from '@/components/sections/transfer/TransferHero';
import {TransferForm} from '@/components/sections/transfer/TransferForm';
import {PopularDestinations} from '@/components/sections/transfer/PopularDestinations';

// TransferNarrative — pagina /transfer-aeroporti-porti-sicilia (EN /sicily-airport-port-transfers).
// Stesso design language delle pagine NCC città (NccCityNarrative), ma:
//   1. hero in stile homepage (titolo + pill preventivo WhatsApp + recensioni)
//   2. sezione dedicata "Le tratte più richieste" (boarding-pass cards)
// Le altre sezioni (cosa include / flotta / FAQ / tour / recensioni / CTA)
// sono identiche alle pagine città per coerenza. Cliente 09/06/2026.

export async function TransferNarrative({hub}: {hub: CityContent}) {
  const tCommon = await getTranslations('NccPage');
  const tForm = await getTranslations('TransferForm');

  const reassure = [
    {title: tForm('reassure1Title'), body: tForm('reassure1Body')},
    {title: tForm('reassure2Title'), body: tForm('reassure2Body')},
    {title: tForm('reassure3Title'), body: tForm('reassure3Body')},
    {title: tForm('reassure4Title'), body: tForm('reassure4Body')}
  ];
  const steps = [
    {title: tForm('step1Title'), body: tForm('step1Body')},
    {title: tForm('step2Title'), body: tForm('step2Body')},
    {title: tForm('step3Title'), body: tForm('step3Body')}
  ];
  const faqs = tForm.raw('faqs') as {q: string; a: string}[];

  return (
    <>
      {/* 01 — HERO stile homepage: copy transfer + pill + recensioni */}
      <TransferHero
        title={hub.h1}
        subhead={hub.heroSubhead}
        image={hub.heroImage}
        ctaLabel={tCommon('ctaWhatsApp')}
      />

      {/* 01b — ORGANIZZA UN TRANSFER: form richiesta + blocco "arrivo senza sorprese".
            Cliente 07/07/2026: la CTA "Organizza un transfer" (pagina Servizi) porta
            qui; l'utente compila partenza/arrivo a testo libero e riceve una proposta. */}
      <section className="bg-canvas-deep py-20 sm:py-28" id="organizza-transfer">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.05] text-balance"
              style={{fontStretch: '95%'}}
            >
              {tForm('sectionTitle')}
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] text-ink-soft max-w-[46ch] mx-auto">
              {tForm('sectionSubtitle')}
            </p>
          </div>

          {/* Card "booking widget" centrata e in evidenza: bianca su sfondo
              profondo, bordo marcato + ombra ampia → galleggia e attira. */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-canvas p-6 sm:p-10 md:p-12 shadow-[0_40px_90px_-30px_rgba(31,26,20,0.45)]">
            <TransferForm />
          </div>

        </div>
      </section>

      {/* 01c — IL TUO ARRIVO SENZA SORPRESE: promessa + 4 card di rassicurazione */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-[62ch] mx-auto text-center">
            <span aria-hidden="true" className="mx-auto mb-8 block h-px w-12 bg-accent" />
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] text-balance"
              style={{fontStretch: '95%'}}
            >
              {tForm('arrivoTitle')}
            </h2>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.7] text-ink-soft">
              {tForm('arrivoBody')}
            </p>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {reassure.map((c, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-sm border border-[var(--border-strong)] bg-canvas/70 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:bg-canvas hover:shadow-[0_16px_40px_rgba(31,26,20,0.08)]"
              >
                <span className="font-display text-[15px] text-accent-strong tabular-nums">
                  0{i + 1}
                </span>
                <span aria-hidden="true" className="mt-3 block h-px w-8 bg-accent/40" />
                <h3
                  className="mt-4 font-display text-[20px] sm:text-[22px] font-light text-ink leading-tight"
                  style={{fontStretch: '95%'}}
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 01d — COME FUNZIONA: 3 step numerati */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] text-balance"
              style={{fontStretch: '95%'}}
            >
              {tForm('howTitle')}
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] text-ink-soft">
              {tForm('howSubtitle')}
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {steps.map((s, i) => (
              <li key={i} className="text-center md:text-left">
                <span
                  aria-hidden="true"
                  className="font-display text-[56px] sm:text-[64px] font-light text-accent/25 leading-none tabular-nums"
                >
                  0{i + 1}
                </span>
                <h3
                  className="mt-3 font-display text-[22px] sm:text-[24px] font-light text-ink leading-tight"
                  style={{fontStretch: '95%'}}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-ink-soft max-w-[34ch] mx-auto md:mx-0">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 01e — OGNI VIAGGIO È DIVERSO: pitch servizio su misura + foto reale */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">
            <div>
              <h2
                className="font-display text-display-sm font-light text-ink leading-[1.1] text-balance"
                style={{fontStretch: '95%'}}
              >
                {tForm('bespokeTitle')}
              </h2>
              <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-[54ch]">
                {tForm('bespokeBody')}
              </p>
            </div>
            <figure className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-sm">
              <Image
                src="/images/home/driver-2.jpeg"
                alt={tForm('bespokeImageAlt')}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 01f — DESTINAZIONI PIÙ RICHIESTE: chip cliccabili che precompilano il form */}
      <section className="bg-canvas py-20 sm:py-28">
        <PopularDestinations />
      </section>

      {/* 02 — COSA INCLUDE IL SERVIZIO — checklist editorial 2 colonne */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-12 sm:mb-14"
            style={{fontStretch: '95%'}}
          >
            {hub.includesH2Pre}{' '}
            <span className="italic text-accent">{hub.includesH2Accent}</span>
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-1">
            {hub.includes.map((item, i) => (
              <li
                key={i}
                className="group flex items-start gap-4 rounded-md -mx-3 px-3 py-4 transition-colors duration-200 hover:bg-canvas"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/12 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-cream-on-dark"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[16px] sm:text-[17px] leading-[1.55] text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — LE TRATTE PIÙ RICHIESTE — boarding-pass cards (cliente 09/06/2026:
            "non voglio una lista brutta, qualcosa di figo, ordinato, semplice,
            adattabile a mobile"). Ogni tratta = card origine → destinazione con
            connettore tratteggiato, stile biglietto. Grid 1col mobile / 2col desktop. */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {hub.routesH2Pre}{' '}
              <span className="italic text-accent">{hub.routesH2Accent}</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {hub.routes.map((r, i) => (
              <li key={i}>
                <div className="group flex items-center gap-3 sm:gap-4 h-full rounded-sm border border-[var(--border-strong)] bg-canvas-warm/40 px-5 py-6 sm:px-7 sm:py-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:bg-canvas-warm/70 hover:shadow-[0_16px_40px_rgba(31,26,20,0.08)]">
                  <span
                    className="flex-1 min-w-0 font-display text-[16px] sm:text-[19px] font-light text-ink-soft leading-snug"
                    style={{fontStretch: '95%'}}
                  >
                    {r.from}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 48 12"
                    fill="none"
                    className="shrink-0 w-9 sm:w-12 text-accent"
                  >
                    <line
                      x1="0"
                      y1="6"
                      x2="40"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 2.5 L45.5 6 L38 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="flex-1 min-w-0 text-right font-display text-[16px] sm:text-[19px] font-medium text-ink leading-snug"
                    style={{fontStretch: '95%'}}
                  >
                    {r.to}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-9 sm:mt-10 text-[15px] sm:text-[16px] leading-[1.6] text-ink-soft">
            {hub.routesMicrocopy}
          </p>
        </div>
      </section>

      {/* 04 — LA FLOTTA — schede prodotto editorial */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-12 sm:mb-14"
            style={{fontStretch: '95%'}}
          >
            {hub.fleetH2Pre}{' '}
            <span className="italic text-accent">{hub.fleetH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {hub.fleet.map((f, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-sm border border-[var(--border-strong)] bg-canvas/60 p-7 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:bg-canvas hover:shadow-[0_16px_40px_rgba(31,26,20,0.08)]"
              >
                <h3
                  className="font-display text-[24px] sm:text-[28px] font-light text-ink leading-tight"
                  style={{fontStretch: '95%'}}
                >
                  {f.model}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-10 bg-accent"
                />
                <p className="mt-5 text-[17px] sm:text-[18px] font-medium text-ink">
                  {f.pax}
                </p>
                <dl className="mt-5 space-y-4 flex-1">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-1">
                      {tCommon('fleetTableLuggage')}
                    </dt>
                    <dd className="text-[15px] leading-[1.5] text-ink-soft">
                      {f.luggage}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-1">
                      {tCommon('fleetTableComfort')}
                    </dt>
                    <dd className="text-[15px] leading-[1.5] text-ink-soft">
                      {f.comfort}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 pt-5 border-t border-[var(--border)] font-display italic text-[15px] sm:text-[16px] text-accent leading-snug">
                  {f.ideal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — FAQ editorial accordion */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {hub.faqH2Pre}{' '}
            <span className="italic text-accent">{hub.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-light text-ink leading-[1.2] max-w-[48ch] group-open:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl text-accent leading-none mt-2 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12 text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-prose">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — NON SOLO TRANSFER: I NOSTRI TOUR */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {hub.nearbyToursH2Pre}{' '}
              <span className="italic text-accent">{hub.nearbyToursH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {hub.nearbyTours.map((tour, i) => (
              <Link
                key={i}
                href={tour.href}
                className="group relative overflow-hidden aspect-[4/5] grain"
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  style={{filter: 'saturate(0.85) brightness(0.86) contrast(1.06)'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-7 sm:p-8 flex flex-col justify-end">
                  <h3
                    className="font-display italic text-[26px] sm:text-[30px] font-light text-cream-on-dark leading-tight"
                    style={{fontStretch: '95%'}}
                  >
                    {tour.title}
                  </h3>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] font-medium text-cream-on-dark/85 inline-flex items-center gap-2">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonianza />

      {/* 07 — CTA finale */}
      <section
        className="relative bg-primary-deep py-32 sm:py-40 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176, 94, 64, 0.15) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <AnimatedHeading
            as="h2"
            text={hub.ctaH2}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {hub.ctaSubhead}
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tCommon('ctaWhatsApp')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 transition-colors"
            >
              {tCommon('ctaQuote')}
            </Link>
          </div>

          <p className="mt-12 text-[14px] text-cream-on-dark/60">
            {tCommon('ctaEmailPre')}{' '}
            <a
              href="mailto:info@ncctaxisiracusa.com"
              className="text-cream-on-dark underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
            >
              info@ncctaxisiracusa.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
