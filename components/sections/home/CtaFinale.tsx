'use client';

import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

// CTA finale: schermo intero blu mare profondo. Headline grande + 2 CTA grandi
// (WhatsApp + telefono). Nessun form, niente "form 4 campi" in fondo.

export function CtaFinale() {
  const t = useTranslations('Home.ctaFinale');
  const reduce = useReducedMotion();

  return (
    <section
      className="relative bg-primary-deep py-40 sm:py-56 overflow-hidden"
      style={{color: 'var(--cream-on-dark)'}}
    >
      {/* Soft glow decorativo terracotta in alto-destra */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(176, 94, 64, 0.18) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
        <motion.p
          className="eyebrow text-cream-on-dark/70 mb-10"
          initial={reduce ? false : {opacity: 0, y: 8}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('eyebrow')}
        </motion.p>

        <AnimatedHeading
          as="h2"
          text={t('h2')}
          className="font-display text-display-xl font-light text-cream-on-dark max-w-[16ch] leading-[0.95]"
          style={{fontStretch: '95%'}}
        />

        <motion.p
          className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.6] max-w-[52ch]"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('body')}
        </motion.p>

        <motion.div
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1]}}
        >
          <a
            href="https://wa.me/393756413379"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
            style={{color: 'var(--cream-on-dark)'}}
          >
            {t('ctaWhatsApp')}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>
          <a
            href="tel:+393756413379"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark tabular-nums hover:bg-cream-on-dark/8 transition-colors"
          >
            {t('ctaCall')}
          </a>
        </motion.div>

        <motion.p
          className="mt-14 text-[14px] text-cream-on-dark/60"
          initial={reduce ? false : {opacity: 0}}
          whileInView={reduce ? undefined : {opacity: 1}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 0.8, delay: 0.55}}
        >
          {t('emailPre')}{' '}
          <a
            href="mailto:info@ncctaxisiracusa.com"
            className="text-cream-on-dark underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
          >
            info@ncctaxisiracusa.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
