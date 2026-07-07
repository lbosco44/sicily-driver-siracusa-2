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

      {/* 01b-2 — TRANSFER PRIVATI IN SICILIA: intro SEO (contenuto cliente), centrata */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-[64ch] mx-auto text-center">
            <span aria-hidden="true" className="mx-auto mb-8 block h-px w-12 bg-accent" />
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] text-balance"
              style={{fontStretch: '95%'}}
            >
              {tForm('introTitle')}
            </h2>
            <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-ink-soft">
              {tForm('introBody1')}
            </p>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.7] text-ink-soft">
              {tForm('introBody2')}
            </p>
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

      {/* 01d-2 — AEROPORTI SERVITI: card aeroporto con codice IATA (contenuto cliente).
            Catania = scalo principale (card in evidenza con filetto accent + badge pieno);
            Comiso/Palermo/Trapani = card con badge codice in outline. */}
      <section className="bg-canvas-deep py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          {/* Header di sezione con filetto */}
          <div className="flex items-center gap-5 mb-12 sm:mb-14">
            <h2
              className="font-display text-display-sm font-light text-ink leading-[1.1]"
              style={{fontStretch: '95%'}}
            >
              {tForm('airportEyebrow')}
            </h2>
            <span
              aria-hidden="true"
              className="hidden sm:block h-px flex-1 bg-[var(--border-strong)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Catania Fontanarossa — scalo principale */}
            <article className="relative flex flex-col overflow-hidden rounded-sm border border-[var(--border-strong)] bg-canvas p-8 sm:p-10">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-accent"
              />
              <div className="flex items-center gap-3">
                <span
                  className="font-display text-[14px] font-medium tracking-[0.18em] rounded px-2.5 py-1 bg-accent"
                  style={{color: 'var(--cream-on-dark)'}}
                >
                  CTA
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary">
                  Catania Fontanarossa
                </span>
              </div>
              <h3
                className="mt-6 font-display text-[22px] sm:text-[26px] font-light text-ink leading-tight"
                style={{fontStretch: '95%'}}
              >
                {tForm('airportCatTitle')}
              </h3>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-ink-soft">
                {tForm('airportCatBody')}
              </p>
            </article>

            {/* Comiso · Palermo · Trapani */}
            <article className="flex flex-col rounded-sm border border-[var(--border-strong)] bg-canvas p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                {['CIY', 'PMO', 'TPS'].map((code) => (
                  <span
                    key={code}
                    className="font-display text-[14px] font-medium tracking-[0.18em] text-ink border border-[var(--border-strong)] rounded px-2.5 py-1"
                  >
                    {code}
                  </span>
                ))}
              </div>
              <h3
                className="mt-6 font-display text-[22px] sm:text-[26px] font-light text-ink leading-tight"
                style={{fontStretch: '95%'}}
              >
                {tForm('airportOtherTitle')}
              </h3>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-ink-soft">
                {tForm('airportOtherBody')}
              </p>
            </article>
          </div>

          {/* Chiusura — nota accentata */}
          <p className="mt-10 sm:mt-12 border-l-2 border-accent pl-6 font-display italic text-[16px] sm:text-[18px] leading-[1.6] text-ink max-w-[72ch]">
            {tForm('airportClosing')}
          </p>
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

      {/* 01e-2 — CHI SCEGLIE SICILY DRIVER: clientela (contenuto cliente) */}
      <section className="bg-canvas-deep py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-[64ch]">
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] text-balance"
              style={{fontStretch: '95%'}}
            >
              {tForm('audienceTitle')}
            </h2>
            <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-ink-soft">
              {tForm('audienceBody')}
            </p>
          </div>
        </div>
      </section>

      {/* 01f — DESTINAZIONI PIÙ RICHIESTE: chip cliccabili che precompilano il form */}
      <section className="bg-canvas py-20 sm:py-28">
        <PopularDestinations />
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

      {/* 05 — FAQ editorial accordion (dimensioni compatte — cliente 07/07/2026) */}
      <section className="bg-canvas-deep py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <h2
            className="font-display text-display-sm font-light text-ink max-w-[18ch] mb-10 sm:mb-12"
            style={{fontStretch: '95%'}}
          >
            {hub.faqH2Pre}{' '}
            <span className="italic text-accent">{hub.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-1">
                  <summary className="cursor-pointer list-none py-5 flex items-start justify-between gap-6">
                    <h3
                      className="font-display text-[18px] sm:text-[20px] font-light text-ink leading-[1.3] max-w-[48ch] group-open:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl text-accent leading-none mt-0.5 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-6 pr-10 text-[15px] sm:text-[16px] leading-[1.7] text-ink-soft max-w-prose">
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
