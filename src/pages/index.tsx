import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroInner}>
          <p className={styles.kicker}>For insurers running the Ingenium core · COBOL · AIX · MQ</p>
          <Heading as="h1" className={styles.heroTitle}>
            Modernize your Ingenium insurance core — step by step, without a risky rip-and-replace.
          </Heading>
          <p className={styles.heroText}>
            Nova brings your legacy COBOL/Ingenium platform into a modern toolchain: automated deployments,
            REST APIs, and cloud-ready infrastructure. <strong>Proven in production</strong> with a real
            AIX-to-Linux migration completed in ~9 months and deployment time reduced from ~3 hours to ~20 minutes.
          </p>
          <div className={styles.heroActions}>
            <a
              className={clsx('button button--lg', styles.primaryButton)}
              href="mailto:ingenium.modernization@gmail.com?subject=Nova%20Executive%20Consultation%20Request"
            >
              Schedule 30-Min Discovery Call →
            </a>
            <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/investment_case">
              View Investment Case
            </Link>
          </div>
          <p className={styles.heroFootnote}>
            Keep your Ingenium logic · Deploy on cloud, on-prem or hybrid · No vendor lock-in
          </p>
        </div>
      </div>
    </header>
  );
}

function SnapshotSection(): ReactNode {
  const snapshot = [
    {
      title: 'What Nova is',
      desc: 'A third-party modernization platform for insurers on the Ingenium life core. It integrates with and gradually upgrades your existing system — it does not replace or touch your Ingenium licence or source.',
    },
    {
      title: 'The problem it fixes',
      desc: 'Legacy COBOL on AIX with hour-long compiles, manual deployments, no REST APIs, and a shrinking COBOL talent pool — all slowing product launches and raising run-cost.',
    },
    {
      title: 'What you get first',
      desc: 'Nexus: a VS Code toolchain that automates COBOL builds, deployments, and environment management. Hours become minutes, and COBOL becomes AI-assisted inside a modern IDE.',
    },
    {
      title: 'Why it is credible',
      desc: 'Built from a real Ingenium-to-cloud migration completed in ~9 months. You keep full IP ownership; deploy on cloud, on-prem, or hybrid. No vendor lock-in.',
    },
  ];

  return (
    <section className={styles.sectionIntro}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">What Nova is, in plain terms</Heading>
          <p>
            If you run Ingenium, here is exactly what this is, the problem it solves, and where you start.
          </p>
        </div>
        <div className={styles.cardGrid4}>
          {snapshot.map((item) => (
            <article key={item.title} className={styles.cardStrong}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PressureSection(): ReactNode {
  const pressurePoints = [
    {
      title: 'COBOL builds take hours',
      desc: 'Small changes trigger long compiles. Releases are slow, and engineers wait instead of shipping.',
    },
    {
      title: 'AIX is expensive & aging',
      desc: 'Proprietary AIX, IBM MQ and WebSphere carry high licence and maintenance cost, and the COBOL talent pool keeps shrinking.',
    },
    {
      title: 'Manual, risky deployments',
      desc: 'Releases and environment setup are manual and drift over time — the same test passes in one environment and fails in another.',
    },
    {
      title: 'No modern APIs',
      desc: 'Without REST endpoints, connecting to digital channels, bancassurance partners, and new products needs fragile workarounds.',
    },
  ];

  return (
    <section className={styles.sectionLight}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">The problems Ingenium teams face every day</Heading>
          <p>These slow product launches, raise run-cost, and increase operational risk.</p>
        </div>
        <div className={styles.cardGrid4}>
          {pressurePoints.map((item) => (
            <article key={item.title} className={styles.card}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueSection(): ReactNode {
  const pillars = [
    'Reduce deployment time from around 3 hours to around 20 minutes with automated COBOL builds and one-click releases in VS Code.',
    'Reduce legacy platform dependency by moving from AIX/MQ/WebSphere toward open, Linux-based infrastructure (cloud optional).',
    'Open your core with REST APIs so digital channels and partners integrate without MQ middleware.',
    'Preserve your Ingenium business logic and data — modernize around it, phase by phase, with rollback at every step.',
  ];

  return (
    <section className={styles.sectionDark}>
      <div className="container">
        <div className={styles.sectionHead}> 
          <Heading as="h2">The benefits, in concrete terms</Heading>
          <p>Every benefit maps to a specific operational change — not a slogan.</p>
        </div>
        <div className={styles.valueListWrap}>
          <ol className={styles.valueList}>
            {pillars.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ResultsSection(): ReactNode {
  const metrics = [
    { value: '3h -> 20m', label: 'Deployment time reduction for a representative change (proven in production)' },
    { value: '~5 min', label: 'Planned downtime per deployment window' },
    { value: '9 months', label: 'AIX-to-Linux migration completed (real timeline)' },
    { value: 'In production', label: 'Reference rollout status' },
  ];

  return (
    <section className={styles.sectionLight}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">Results from a real Ingenium modernization</Heading>
          <p>Measured on an anonymized production migration — indicative of what your programme can target.</p>
        </div>
        <div className={styles.metricGrid}>
          {metrics.map((item) => (
            <article key={item.label} className={styles.metricCard}>
              <p className={styles.metricValue}>{item.value}</p>
              <p className={styles.metricLabel}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection(): ReactNode {
  const phases = [
    {
      name: 'Foundation',
      status: 'Prerequisite',
      desc: 'Move Ingenium from AIX to Linux (cloud or on-prem). Proven in ~9 months. This is the base every later phase builds on.',
    },
    {
      name: 'Nexus',
      status: 'Available now',
      desc: 'VS Code DevOps toolchain: automated COBOL compilation, deployments, environment management, and encrypted credentials. A representative deployment moved from ~3 hours to ~20 minutes.',
    },
    {
      name: 'Orbit',
      status: 'In development',
      desc: 'Expose Ingenium as REST APIs, remove MQ middleware, and begin migrating critical logic from COBOL to high-performance Rust.',
    },
    {
      name: 'Vista',
      status: 'Planned',
      desc: 'Modern React interfaces for customers and agents, replacing legacy JSP screens with a responsive digital experience.',
    },
    {
      name: 'Apex',
      status: 'Planned',
      desc: 'Full re-architecture of business logic and data into a completely modern, cloud-native insurance platform.',
    },
  ];

  return (
    <section className={styles.sectionSand}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">A clear, phased roadmap — each step delivers value on its own</Heading>
          <p>You start with the Foundation and Nexus, see results, then decide how far to go. No forced timeline, no big-bang.</p>
        </div>
        <div className={styles.roadmapGrid}>
          {phases.map((phase) => (
            <article key={phase.name} className={styles.roadmapCard}>
              <p className={styles.roadmapStatus}>{phase.status}</p>
              <Heading as="h3" className={styles.roadmapName}>{phase.name}</Heading>
              <p>{phase.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection(): ReactNode {
  return (
    <section className={styles.sectionProof}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">Why executive teams choose Nova over alternatives</Heading>
        </div>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <Heading as="h3" className={styles.comparisonTitle}>Big-bang core replacement</Heading>
            <p className={styles.comparisonCon}>Multi-year programme, very high budget, high failure risk</p>
          </div>
          <div className={styles.comparisonCard}>
            <Heading as="h3" className={styles.comparisonTitle}>Do nothing</Heading>
            <p className={styles.comparisonCon}>Run-cost keeps rising and the COBOL talent gap widens every year</p>
          </div>
          <div className={styles.comparisonCard}>
            <Heading as="h3" className={styles.comparisonTitle}>Generic modernization vendors</Heading>
            <p className={styles.comparisonCon}>Consulting-heavy, without hands-on Ingenium/COBOL migration experience</p>
          </div>
          <div className={clsx(styles.comparisonCard, styles.comparisonWinner)}>
            <Heading as="h3" className={styles.comparisonTitle}>Nova phased approach</Heading>
            <p className={styles.comparisonPro}>6-week Windows-first POC for fast executive visibility, then 6-month trial continuation under governance gates</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection(): ReactNode {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBox}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to discuss your Ingenium roadmap?
          </Heading>
          <p className={styles.ctaText}>
            Start with a scoped POC on one of your own Ingenium flows — prove the build-and-deploy
            improvement before committing to anything bigger.
          </p>
          <p className={styles.ctaText}>
            Free 30-minute discovery call. No sales pitch — just an honest assessment of whether Nova fits your situation.
          </p>
          <div className={styles.heroActions}>
            <a
              className={clsx('button button--lg', styles.primaryButton)}
              href="mailto:ingenium.modernization@gmail.com?subject=Nova%20Discovery%20Call%20Request&body=Name:%0ACompany:%0ARole:%0APreferred%20date/time:%0ABrief%20context:"
            >
              Schedule Discovery Call Now
            </a>
            <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/executive_faq">
              Review Executive FAQ First
            </Link>
          </div>
          <p className={styles.ctaFooter}>
            📧 ingenium.modernization@gmail.com · Typical response within 2 business days
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Nova — Modernize Your Ingenium Insurance Core"
      description="Nova modernizes the legacy Ingenium (COBOL/AIX) insurance core in stages: automated deployments, REST APIs, and cloud-ready infrastructure — without a risky rip-and-replace.">
      <HeroSection />
      <SnapshotSection />
      <PressureSection />
      <ValueSection />
      <ResultsSection />
      <RoadmapSection />
      <ProofSection />
      <CtaSection />
    </Layout>
  );
}
