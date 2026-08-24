/**
 * BENOVA — English version.
 *
 * All English copy lives here. Anything that does not change with language
 * lives in shared.mjs. Edit, then run `npm run build`.
 */
import { brandName, emails, mail, planetVisuals, siteUrl, themeColor } from './shared.mjs';

export default {
  locale: { code: 'en', label: 'English', short: 'EN', path: 'en/' },

  brand: {
    name: brandName,
    tagline: 'A modernization ecosystem for the Ingenium insurance core',
    emails,
  },

  ui: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    toggleTheme: 'Switch between light and dark',
    headerCta: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    answersPrefix: 'Answers',
    contactTitle: 'Contact',
    contactNote: 'Email is currently our only contact channel.',
    companyLine: 'A product of',
    languageNav: 'Choose language',
  },

  notice: {
    text: 'This site is still being built out. Content and product roadmap will keep being updated.',
    linkLabel: 'Contact us by email',
  },

  seo: {
    title: 'BENOVA — Modernize Ingenium. Powered by AI and Rust.',
    description:
      'BENOVA is a next-generation insurance core ecosystem for companies running Ingenium: migrate from COBOL/AIX to a cloud-native platform with Rust and AI, following the Strangler Fig strategy, without interrupting operations.',
    keywords:
      'BENOVA, Ingenium modernization, insurance core, COBOL modernization, Strangler Fig, Rust, AI Agent, cloud-native, Binean',
    url: siteUrl,
    themeColor,
  },

  nav: [
    { label: 'Problem', href: '#problem' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Adoption', href: '#adoption' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'For insurers running Ingenium · COBOL · AIX · IBM MQ',
    headline: ['Modernize Ingenium.', 'Powered by AI and Rust.'],
    sub: 'BENOVA — a next-generation insurance core ecosystem that lets you migrate off the legacy platform onto modern cloud-native infrastructure without interrupting operations.',
    primaryCta: { label: 'Explore the architecture', href: '#ecosystem' },
    secondaryCta: { label: 'Talk to us', href: '#contact' },
    note: 'Keep your business logic · Your Ingenium licence untouched · Cloud, on-premise or hybrid',
    // The B at the centre of the solar system is the initial of Binean, the company.
    core: { key: 'B' },
    satellites: [
      { key: 'E', name: 'Engine', desc: 'Orchestration framework' },
      { key: 'N', name: 'Nexus', desc: 'DevOps for Ingenium' },
      { key: 'O', name: 'Orbit', desc: 'Hybrid service host' },
      { key: 'V', name: 'Vista', desc: 'Flow & task management' },
      { key: 'A', name: 'AI Agent', desc: 'Speaks Agent Client Protocol' },
    ].map((s) => ({ ...s, ...planetVisuals[s.key] })),
  },

  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'The old core is not wrong. It is just costing more than the value it returns.',
    lead: 'Ingenium has run your business correctly for decades. What is no longer sustainable is the cost of running it, the speed of shipping on it, and the talent pool around it.',
    pains: [
      {
        icon: '💸',
        title: 'Platform costs keep climbing',
        desc: 'AIX, IBM MQ and WebSphere are proprietary licences whose maintenance cost rises every year while the capability stays the same.',
      },
      {
        icon: '👤',
        title: 'The COBOL talent pool is shrinking',
        desc: 'The engineers who know COBOL are retiring. Hiring replacements is close to impossible and retraining takes years.',
      },
      {
        icon: '🐢',
        title: 'Too slow for digital delivery',
        desc: 'Hour-long compiles, manual deployments, no REST API — every new digital channel or partner needs another layer of patched-together middleware.',
      },
      {
        icon: '⚠️',
        title: 'Operational risk accumulates',
        desc: 'DEV/SIT/UAT drift away from PRD over time, producing "works here, breaks there" defects and audit gaps.',
      },
    ],
    bridge:
      'Replacing the whole core is a multi-year programme with very high risk. BENOVA takes a different route.',
  },

  ecosystem: {
    id: 'ecosystem',
    eyebrow: 'Core ecosystem',
    title: 'Five elements, one platform',
    lead: 'BENOVA = B + ENOVA. B is Binean, the company behind the platform. ENOVA is five elements: Engine orchestrates, Nexus operates, Orbit opens the core, Vista handles experience and AI Agent accelerates. Each element solves one layer of the modernization problem and can be adopted independently, in whatever order suits you.',
    engine: {
      key: 'E',
      name: 'Engine',
      role: 'Orchestration framework',
      status: 'In development',
      icon: '🧠',
      desc: 'The orchestration framework of BENOVA, made up of several independent projects. Its core is Spine: a Flow defines the process, each run is a Process, and a Process produces Tasks handed to an Agent. Spine deliberately does not classify Agents — the same slot can be a person, a service, or an AI Agent.',
      highlights: ['Event-driven', 'Specification first, implementation second', 'One Agent concept: human, machine or AI'],
      children: [
        {
          key: 'Spine',
          icon: '🦴',
          title: 'Spine — the orchestration model',
          desc: 'The event-driven workflow model inside Engine. A Flow is an immutable, versioned process definition, a Process is one run, a Task is one unit of work. The specification is written first; the implementation and conformance tests exist to prove the specification correct.',
        },
        {
          key: 'Basal',
          icon: '🔀',
          title: 'Basal — the navigation authority',
          desc: 'Not a passive router: Basal is the single authority over navigation, and it actively drives the processing loop. It owns the Process lifecycle, Task state transitions, join conditions and recovery.',
        },
        {
          key: 'Reflex',
          icon: '⚡',
          title: 'Reflex — the built-in Task Agent',
          desc: 'An Agent that ships inside the core and handles the mechanical work of every Flow: compiler-generated gateways, script-driven data binding, and calling another Flow as a Skill to start a child process.',
        },
        {
          key: 'Scheduler',
          icon: '⏱️',
          title: 'Scheduler & Timeout',
          desc: 'A separate project inside Engine, in development, covering scheduling and timeout supervision. The goal: no Task ever hangs silently — an overdue Task raises an event, a compensation and an alert.',
        },
      ],
    },
    agents: [
      {
        key: 'N',
        name: 'Nexus',
        role: 'DevOps for Ingenium',
        status: 'Available',
        icon: '🛠️',
        desc: 'A DevOps toolchain built specifically for Ingenium, running inside VS Code. It turns risky manual operations into standardized, repeatable pipelines.',
        features: [
          'Parallel COBOL compilation driven by a dependency graph',
          'Verified database backup and restore',
          'Policy management: export, import and copy across environments',
          'Start/stop regions and automate day-to-day operations',
          'Credentials encrypted with AES-256-GCM, never written to logs in clear text',
        ],
      },
      {
        key: 'O',
        name: 'Orbit',
        role: 'Hybrid service host',
        status: 'In development',
        icon: '🛰️',
        desc: 'Where the old and the new run side by side. Orbit hosts new Rust services and legacy Ingenium behind a single API facade — the technical foundation for the Strangler Fig strategy.',
        features: [
          'Run Rust services and Ingenium side by side in one host',
          'Expose the core as REST APIs and drop the MQ middleware',
          'Ship new capability without taking the legacy system down',
          'Query policies 24/7, including during batch windows',
          'Move one flow at a time, with a way back at every step',
        ],
      },
      {
        key: 'V',
        name: 'Vista',
        role: 'Flow & task management',
        status: 'On the roadmap',
        icon: '🖥️',
        desc: 'A user interface designed around flows rather than screens. A user starts a flow, the system creates a process, the process produces Tasks and assigns them to a machine, a human or an AI.',
        features: [
          'Start a flow from the menu → a new process is created',
          'The process produces Tasks, assigned to machine / human / AI',
          'Human tasks are completed through a form, results return to the process',
          'Basal takes the result and navigates to the next step',
          'Admin area: manage users, flows and tasks, and monitor processes',
        ],
      },
      {
        key: 'A',
        name: 'AI Agent',
        role: 'Artificial intelligence',
        status: 'On the roadmap',
        icon: '✨',
        desc: 'AI is not a feature bolted on the side; it is a kind of Agent, on equal footing with humans and machines. The AI Agent receives Tasks from Spine exactly as any other Agent does — so work can be handed over piece by piece.',
        features: [
          'Speaks ACP — Agent Client Protocol',
          'Takes on Tasks automatically according to a confidence threshold',
          'Learns from operational data and processing history',
          'Suggests process improvements and flags anomalies',
          'Always keeps a human in the loop for high-risk decisions',
        ],
      },
    ],
  },

  strategy: {
    id: 'adoption',
    eyebrow: 'How you adopt it',
    title: 'Strangler Fig — replace gradually, never all at once',
    lead: 'Orbit wraps around Ingenium and tightens on one business flow at a time: the new flow runs on Rust and AI while the old one keeps serving customers. Once a flow is stable on the new platform, the corresponding COBOL is retired. There is no "big bang" day.',
    steps: [
      {
        num: '01',
        title: 'Wrap',
        desc: 'Orbit sits in front of Ingenium and exposes the core as REST APIs without changing a single line of COBOL.',
      },
      {
        num: '02',
        title: 'Redirect',
        desc: 'Basal routes each business flow: modernized flows go to Rust/AI, the rest still go to Ingenium.',
      },
      {
        num: '03',
        title: 'Replace',
        desc: 'Tasks are reimplemented in Rust or handed to the AI Agent, run in parallel and reconciled against the legacy result.',
      },
      {
        num: '04',
        title: 'Retire',
        desc: 'Once every flow runs on the new platform, the corresponding COBOL is retired, on the schedule you choose.',
      },
    ],
    caption:
      'Behind one API facade, traffic shifts from Ingenium to Rust and AI one business flow at a time.',
    diagram: {
      alt: 'Strangler Fig diagram: new business flows pass through Orbit into Rust services and AI while the remaining flows still reach Ingenium COBOL, with the proportion shifting over time.',
      banner: 'One API facade — no "big bang" day',
      channels: ['Digital channels', 'web · app · partners'],
      facade: ['ORBIT', 'REST API', 'facade'],
      legacy: ['Ingenium · COBOL', 'existing business logic, still serving customers'],
      modern: ['Rust services + AI Agent', 'flows reimplemented, run in parallel and reconciled'],
      target: ['CORE', 'new'],
      phases: ['01 Wrap', '02 Redirect', '03 Replace', '04 Retire'],
    },
  },

  benefits: {
    id: 'benefits',
    eyebrow: 'Benefits',
    title: 'Four problems, four answers',
    lead: 'Every benefit maps to a specific technical change — not a slogan.',
    items: [
      {
        icon: '💸',
        title: 'Step off proprietary licences',
        answers: 'Platform costs keep climbing',
        desc: 'Orbit removes the MQ middleware; new services are containerized and orchestrated with Kubernetes. The more flows you move, the smaller the licensed footprint you keep paying for.',
      },
      {
        icon: '👤',
        title: 'Less work that needs a scarce specialist',
        answers: 'The COBOL talent pool is shrinking',
        desc: 'Rust engineers are scarce too — the difference is that the Rust community is still growing while COBOL only shrinks. More importantly: Nexus standardizes build and deployment, so less work strictly requires a core specialist, and you do not need to write Rust yourself to use Nexus or Orbit.',
      },
      {
        icon: '🚀',
        title: 'Shorter time to ship',
        answers: 'Too slow for digital delivery',
        desc: 'Parallel compilation and automated deployment replace manual steps. REST APIs are already there, so new channels and partners do not wait on a bespoke middleware layer.',
      },
      {
        icon: '🛡️',
        title: 'Reproducible environments, no more drift',
        answers: 'Operational risk accumulates',
        desc: 'Nexus rebuilds DEV/SIT/UAT from a versioned baseline and shows schema and reference-data differences against PRD — no more "works here, breaks there". Credentials are encrypted, and batch jobs are scheduled and alerted instead of run by hand.',
      },
    ],
    note: 'You keep your business logic, your data and your ownership. BENOVA integrates with Ingenium; it does not replace your licence or modify its source.',
  },

  cta: {
    id: 'contact',
    title: 'Ready to transform your insurance core?',
    lead: 'Start with a tightly scoped POC on one of your own Ingenium business flows. Prove the build-and-deploy improvement first, then decide how far to go.',
    primary: {
      label: 'Request a demo',
      href: `${mail}?subject=${encodeURIComponent('BENOVA - Demo request')}`,
    },
    secondary: {
      label: 'Book a 30-minute call',
      href: `${mail}?subject=${encodeURIComponent('BENOVA - 30 minute call')}`,
    },
    note: 'We currently take enquiries by email only. A 30-minute conversation, no commitment.',
  },

  footer: {
    blurb: 'Modernizing the Ingenium insurance core one step at a time, without interrupting operations.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Engine', href: '#ecosystem' },
          { label: 'Nexus', href: '#ecosystem' },
          { label: 'Orbit', href: '#ecosystem' },
          { label: 'Vista', href: '#ecosystem' },
          { label: 'AI Agent', href: '#ecosystem' },
        ],
      },
      {
        title: 'Learn',
        links: [
          { label: 'The problem', href: '#problem' },
          { label: 'How you adopt it', href: '#adoption' },
          { label: 'Benefits', href: '#benefits' },
          { label: 'Contact', href: '#contact' },
        ],
      },
    ],
    legal: [],
    copyright: '© 2026 BENOVA. All rights reserved.',
  },
};
