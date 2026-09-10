/**
 * Binean EVA page — English.
 *
 * EVA is the shared product layer made up of Echelon, Vista and Aice.
 * BENOVA is an industry application of the model, adding Nexus and Orbit for
 * Ingenium.
 */
export default {
  seo: {
    title: 'Binean EVA — One process for people, services and AI',
    description:
      'Binean EVA combines Echelon, Vista and Aice into a controllable operating model: the system orchestrates, people decide and AI assists through one flow of work.',
    keywords:
      'Binean EVA, Echelon, Vista, Aice, human in the loop, AI workflow, multi-agent orchestration, private AI, process automation',
  },

  brandName: 'Binean EVA',
  headerCta: 'Discuss a use case',

  notice: {
    text: 'EVA is being built specification-first, proving one real process before expanding the surface.',
    linkLabel: 'Talk with Binean',
  },

  nav: [
    { href: '#problem', label: 'Problem' },
    { href: '#model', label: 'EVA model' },
    { href: '#value', label: 'Value' },
    { href: '#applications', label: 'Applications' },
    { href: '#benova', label: 'BENOVA' },
  ],

  hero: {
    back: 'Back to BENOVA',
    eyebrow: 'Echelon · Vista · Aice',
    title: 'One process. People, services and AI complete it together.',
    lead: 'EVA is Binean\'s controllable operating model for business processes. Echelon holds the flow of work, Vista brings each Task to the responsible person, and Aice performs or assists with the work suited to AI.',
    primaryCta: { label: 'Explore the EVA model', href: '#model' },
    secondaryCta: { label: 'Choose a use case', href: '#eva-contact' },
    outcome: 'The outcome',
    outcomeText: 'Less manual handling, important decisions kept with the right person, and an evidence trail for every step.',
  },

  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Real processes always cross people and systems',
    lead: 'A case does not simply pass through APIs. It waits for a person to review it, asks AI to read documents, calls a business service, then returns for a decision. When each participant uses a separate mechanism, state fragments and accountability becomes hard to follow.',
    items: [
      {
        icon: '↗',
        title: 'Handoffs break easily',
        desc: 'Email, spreadsheets, queues and scripts each hold a different part of the same case. Nobody sees the full journey.',
      },
      {
        icon: '◎',
        title: 'AI becomes a black box',
        desc: 'A model output without its source data, reviewer and processing state is difficult to trust in real operations.',
      },
      {
        icon: '⌁',
        title: 'Automation gets locked in',
        desc: 'Changing one step from a person to AI or a service often means rebuilding the flow, integrations and controls around it.',
      },
    ],
  },

  model: {
    id: 'model',
    eyebrow: 'The EVA model',
    title: 'Three layers, one closed loop of work',
    lead: 'EVA makes a clear separation between orchestration, interaction and execution. Each layer owns its part while using Tasks and Outcomes to work together.',
    pillars: [
      {
        key: 'E',
        name: 'Echelon',
        role: 'Orchestration engine',
        color: '#5eead4',
        desc: 'Holds Flow and Process state, emits Tasks, receives Outcomes and decides the next step from one source of authority.',
        features: ['Long-running, versioned processes', 'One Task for a person, service or AI', 'Event-based recovery and inspection'],
        link: { label: 'Explore Echelon', href: 'echelon/' },
      },
      {
        key: 'V',
        name: 'Vista',
        role: 'The human workbench',
        color: '#fb7185',
        desc: 'Presents the Task, data and actions a person needs. Vista captures user intent without making business decisions on its own.',
        features: ['Tasks, forms and context in one place', 'Clear processing state', 'An interface shaped by the Flow'],
      },
      {
        key: 'A',
        name: 'Aice',
        role: 'AI capability',
        color: '#a3e635',
        desc: 'Takes a complete Task suited to AI, or drafts an answer inside a Human Task for the responsible person to review, edit and confirm.',
        features: ['Extraction, classification and summary', 'Drafts that match the output schema', 'Human control where it matters'],
      },
    ],
    flow: {
      title: 'One contract from end to end',
      caption: 'Changing the executor does not require a new Flow: a person can handle it today, Aice can assist tomorrow, and a service can take over once the rules are clear.',
      steps: [
        { num: '01', title: 'Echelon emits a Task', desc: 'The Flow defines the work and its input data.' },
        { num: '02', title: 'Vista or Aice executes', desc: 'A person, AI or service receives exactly the work assigned.' },
        { num: '03', title: 'The Outcome returns', desc: 'Result and status come back through the same contract.' },
        { num: '04', title: 'Echelon navigates', desc: 'Basal chooses the next step and preserves one source of truth.' },
      ],
    },
  },

  value: {
    id: 'value',
    eyebrow: 'Value',
    title: 'Automation grows without giving up control',
    lead: 'EVA is designed for processes that need both machine speed and human judgement.',
    items: [
      {
        icon: '◫',
        title: 'One inspectable journey',
        desc: 'The Task, executor, result and transition live in one event trail instead of being scattered across tools.',
      },
      {
        icon: '✓',
        title: 'People keep important decisions',
        desc: 'Aice can draft and recommend; the responsible person still confirms outcomes with material consequences.',
      },
      {
        icon: '⇄',
        title: 'Handover when ready',
        desc: 'A Task can move from a person to AI and then a service as the data, confidence and rules become clear enough.',
      },
      {
        icon: '⌂',
        title: 'Designed for private environments',
        desc: 'The architecture aims to run on infrastructure the organisation chooses when data cannot leave its control boundary.',
      },
    ],
  },

  applications: {
    id: 'applications',
    eyebrow: 'Applications',
    title: 'Start with one process that has cases, rules and a reviewer',
    lead: 'EVA fits work with clear input, several stages and a need to preserve evidence for the final decision.',
    items: [
      {
        num: '01',
        title: 'Case intake and validation',
        desc: 'AI extracts and checks data while people focus on exceptions and the final decision.',
      },
      {
        num: '02',
        title: 'Multi-stage approvals',
        desc: 'Services prepare data, Vista brings the Task to the right role, and Echelon keeps the conditions and history.',
      },
      {
        num: '03',
        title: 'Investigation and incident response',
        desc: 'Machines collect signals, AI assembles context, and a person approves action before the system continues.',
      },
    ],
    note: 'A strong pilot starts with one Flow, one case type and one integration, with measurable success criteria.',
  },

  benova: {
    id: 'benova',
    eyebrow: 'From EVA to BENOVA',
    title: 'EVA is the foundation. BENOVA applies it to Ingenium.',
    lead: 'Inside BENOVA, Echelon, Vista and Aice coordinate processes across people, services and AI. Nexus adds Ingenium-specific DevOps; Orbit lets the legacy core and new services run behind one API facade.',
    formula: [
      { name: 'EVA', desc: 'Orchestration · Experience · AI' },
      { name: 'Nexus + Orbit', desc: 'Operations · Ingenium integration' },
      { name: 'BENOVA', desc: 'Core modernization one step at a time' },
    ],
    cta: { label: 'Explore BENOVA', href: '' },
  },

  cta: {
    id: 'eva-contact',
    title: 'Choose a process small enough to prove the value.',
    lead: 'Bring one process with heavy manual handling, real cases and a person accountable for the outcome. Binean will help identify what a service should do, where Aice can assist and where a person must keep decision authority.',
    label: 'Discuss a use case in 30 minutes',
    subject: 'EVA - Discuss a use case',
    back: 'View BENOVA',
  },
};
