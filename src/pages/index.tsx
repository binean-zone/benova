import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Modernize Your Insurance Core.<br />
            <span className={styles.heroAccent}>Without Disrupting Your Business.</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            Binean Nova transforms legacy Ingenium systems into a modern, cloud-ready platform —
            reducing costs by 40%, accelerating deployments from hours to minutes, and future-proofing
            your technology for decades to come.
          </p>
          <div className={styles.heroCta}>
            <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/intro">
              Discover Nova
            </Link>
            <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/docs/ing_on_cloud">
              See Success Story
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function PainPointsSection() {
  const painPoints = [
    { icon: '⏳', title: 'Hours of Downtime', desc: 'Every deployment is a manual, high-risk event taking hours to complete.' },
    { icon: '💸', title: 'Rising Costs', desc: 'Legacy infrastructure on AIX/COBOL is expensive to maintain with shrinking talent pools.' },
    { icon: '🔒', title: 'Integration Barriers', desc: 'No REST APIs, no modern protocols — connecting to digital services is a constant struggle.' },
    { icon: '⚠️', title: 'Compliance Risk', desc: 'Manual processes and scattered credentials create audit nightmares and security gaps.' },
  ];

  return (
    <section className={styles.painSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            The Challenges You Face Every Day
          </Heading>
          <p className={styles.sectionSubtitle}>
            Running a legacy insurance core system means dealing with problems that slow your business down.
          </p>
        </div>
        <div className={styles.painGrid}>
          {painPoints.map((item, idx) => (
            <div key={idx} className={styles.painCard}>
              <span className={styles.painIcon}>{item.icon}</span>
              <Heading as="h3" className={styles.painTitle}>{item.title}</Heading>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const solutions = [
    {
      icon: '🚀',
      title: 'Deploy in Minutes, Not Hours',
      desc: 'Automated CI/CD pipelines and intelligent compilation reduce deployment time from hours to minutes with zero-touch operations.',
    },
    {
      icon: '📉',
      title: 'Cut Infrastructure Costs by 40%',
      desc: 'Migrate from expensive on-premise AIX to cloud-native Linux. Pay only for what you use.',
    },
    {
      icon: '🔗',
      title: 'Connect to Anything',
      desc: 'REST APIs, modern protocols, and an open integration layer let you connect to any digital service or partner ecosystem.',
    },
    {
      icon: '🛡️',
      title: 'Security Built Into the Foundation',
      desc: 'AES-256-GCM encryption, memory-safe Rust core, zero plaintext persistence — security by design, not afterthought.',
    },
    {
      icon: '🤖',
      title: 'Intelligent Automation',
      desc: 'From smart COBOL compilation to automated batch scheduling and health monitoring — your team focuses on innovation, not maintenance.',
    },
    {
      icon: '📈',
      title: 'Scale Without Limits',
      desc: 'Microservices architecture and distributed databases ensure your platform grows with your business.',
    },
  ];

  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Nova: Your Path to Modern Insurance Technology
          </Heading>
          <p className={styles.sectionSubtitle}>
            A proven platform that bridges your legacy investment with the future your business demands.
          </p>
        </div>
        <div className={styles.solutionGrid}>
          {solutions.map((item, idx) => (
            <div key={idx} className={styles.solutionCard}>
              <span className={styles.solutionIcon}>{item.icon}</span>
              <Heading as="h3" className={styles.solutionCardTitle}>{item.title}</Heading>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    { value: '9', unit: 'months', label: 'Full cloud migration completed' },
    { value: '40%', unit: '', label: 'Infrastructure cost reduction' },
    { value: '99.95%', unit: '', label: 'System uptime achieved' },
    { value: '10x', unit: '', label: 'Faster compilation speed' },
  ];

  return (
    <section className={styles.metricsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Proven Results in Production
          </Heading>
          <p className={styles.sectionSubtitle}>
            Real metrics from a live deployment at a leading insurance enterprise.
          </p>
        </div>
        <div className={styles.metricsGrid}>
          {metrics.map((item, idx) => (
            <div key={idx} className={styles.metricCard}>
              <div className={styles.metricValue}>
                {item.value}<span className={styles.metricUnit}>{item.unit}</span>
              </div>
              <p className={styles.metricLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const phases = [
    {
      name: 'Nexus',
      icon: '🌐',
      status: 'Available Now',
      tagline: 'The Digital Foundation',
      desc: 'Automated DevOps toolchain, intelligent compilation, centralized management, and military-grade security for your existing Ingenium system.',
    },
    {
      name: 'Orbit',
      icon: '🪐',
      status: 'Coming Soon',
      tagline: 'The Core of Modernization',
      desc: 'Transform Ingenium into REST services, eliminate legacy middleware, and begin core migration to high-performance Rust.',
    },
    {
      name: 'Vista',
      icon: '🌄',
      status: 'Planned',
      tagline: 'A Vision for Experience',
      desc: 'Complete UI modernization with React, intuitive customer-facing interfaces, and next-generation product design.',
    },
    {
      name: 'Apex',
      icon: '🏔️',
      status: 'Planned',
      tagline: 'The Summit of Innovation',
      desc: 'Full re-architecture of business logic and data — a completely modern, limitless insurance platform.',
    },
  ];

  return (
    <section className={styles.roadmapSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            A Clear Roadmap to Transformation
          </Heading>
          <p className={styles.sectionSubtitle}>
            Four strategic phases — each delivering immediate value while building toward your future.
          </p>
        </div>
        <div className={styles.roadmapTimeline}>
          {phases.map((phase, idx) => (
            <div key={idx} className={styles.roadmapCard}>
              <div className={styles.roadmapIcon}>{phase.icon}</div>
              <div className={styles.roadmapContent}>
                <div className={styles.roadmapBadge}>{phase.status}</div>
                <Heading as="h3" className={styles.roadmapName}>{phase.name}</Heading>
                <p className={styles.roadmapTagline}>{phase.tagline}</p>
                <p className={styles.roadmapDesc}>{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Transform Your Insurance Platform?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Start with Nexus today — see results in weeks, not years.
          </p>
          <div className={styles.ctaButtons}>
            <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/intro">
              Get Started
            </Link>
            <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/docs/nova">
              Explore the Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Modern Insurance Core Platform"
      description="Binean Nova transforms legacy Ingenium insurance systems into modern, cloud-ready platforms — reducing costs, accelerating deployment, and future-proofing your business.">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <MetricsSection />
      <RoadmapSection />
      <CtaSection />
    </Layout>
  );
}
