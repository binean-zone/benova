/**
 * Binean Orbit page — English.
 *
 * Orbit moves Ingenium one module at a time: isolate COBOL behind a stable
 * contract, build the Rust implementation, verify it, then shift traffic.
 */
export default {
  seo: {
    title: 'Binean Orbit — Move Ingenium from COBOL to Rust gradually',
    description:
      'Binean Orbit turns Ingenium into a hybrid core, allowing each COBOL module to be isolated, rebuilt in Rust and moved behind a stable Web API one step at a time.',
    keywords:
      'Binean Orbit, Ingenium modernization, COBOL to Rust, hybrid core, Strangler Fig, insurance core API, policy administration, gradual modernization',
  },

  brandName: 'Binean Orbit',
  headerCta: 'Discuss Orbit',

  notice: {
    text: 'Orbit is taking shape; its Rust Web API and COBOL bridge form the foundation for the next design round.',
    linkLabel: 'Discuss a module',
  },

  nav: [
    { href: '#hybrid', label: 'Hybrid core' },
    { href: '#journey', label: 'Journey' },
    { href: '#premium-allocation', label: 'Example' },
    { href: '#orbit-agent', label: 'Orbit Agent' },
    { href: '#orbit-status', label: 'Status' },
  ],

  hero: {
    back: 'Back to BENOVA',
    eyebrow: 'One module at a time · One core · No big bang',
    title: 'Move Ingenium to Rust. One piece at a time.',
    lead: 'Orbit puts a stable Web API in front of Ingenium so COBOL and Rust can serve the same core together. Each module is isolated, redesigned and moved at its own level of readiness — while the rest keeps operating.',
    primaryCta: { label: 'See the migration journey', href: '#journey' },
    secondaryCta: { label: 'See a module example', href: '#premium-allocation' },
    visual: {
      label: 'Orbit Hybrid Core',
      api: 'Stable Web API',
      request: 'Policy request',
      cobol: 'COBOL modules',
      rust: 'Rust modules',
      caption: 'Routing shifts by module, without a single shared cutover day.',
    },
  },

  hybrid: {
    id: 'hybrid',
    eyebrow: 'Hybrid by design',
    title: 'The old and new run together behind a stable boundary',
    lead: 'Orbit creates a shared facade for policy processing and administration capabilities. Callers do not need to know whether the module behind it currently runs in COBOL or Rust.',
    items: [
      {
        icon: '↔',
        title: 'One Web API',
        desc: 'Digital channels, services and Flows call the same contract throughout the migration journey.',
      },
      {
        icon: '◫',
        title: 'Move by module',
        desc: 'Each business capability gets its own boundary and pace, matched to its complexity and risk.',
      },
      {
        icon: '↶',
        title: 'Keep a way back',
        desc: 'COBOL continues serving until the Rust implementation has been reconciled and is trusted to receive routing.',
      },
    ],
  },

  journey: {
    id: 'journey',
    eyebrow: 'Module-by-module',
    title: 'Four steps for one piece of COBOL to become Rust',
    lead: 'Orbit starts by drawing a boundary around the existing module. Reimplementation begins only after its inputs, outputs and responsibility are clear.',
    steps: [
      {
        num: '01',
        title: 'Run hybrid',
        desc: 'Place Orbit in front of Ingenium so requests can reach COBOL or Rust behind the same API.',
        tag: 'COBOL + RUST',
      },
      {
        num: '02',
        title: 'Isolate the module',
        desc: 'Split the core by business capability, define the contract and wrap the current COBOL module behind that boundary.',
        tag: 'STABLE CONTRACT',
      },
      {
        num: '03',
        title: 'Redesign in Rust',
        desc: 'Build a Rust implementation against the same contract and reconcile its results with the running logic.',
        tag: 'VERIFY',
      },
      {
        num: '04',
        title: 'Complete the move',
        desc: 'Shift routing to Rust when confidence is sufficient, stabilize it in practice and retire the corresponding COBOL.',
        tag: 'RUST',
      },
    ],
    note: 'A large core is modernized through many small, verifiable decisions instead of one wholesale replacement.',
  },

  example: {
    id: 'premium-allocation',
    eyebrow: 'An example first module',
    title: 'Premium Allocation: a small boundary rich in business rules',
    lead: 'When a customer pays, the module splits that money according to rules configured for the product.',
    input: 'Customer payment',
    engine: 'Premium Allocation',
    outputs: [
      { key: 'S', title: 'Suspense', desc: 'Hold money until the appropriate time.' },
      { key: 'P', title: 'Policy account', desc: 'Allocate money to the policy account.' },
      { key: 'E', title: 'Excess', desc: 'Move the amount beyond conditions into excess.' },
    ],
    copy: 'Orbit isolates the current COBOL logic behind a contract, builds an equivalent Rust implementation, reconciles the results and shifts routing when confidence is sufficient.',
  },

  agent: {
    id: 'orbit-agent',
    eyebrow: 'Inside the EVA model',
    title: 'Orbit is the Agent for policy processing and administration',
    lead: 'Hybrid-core capabilities are offered as Skills through the Web API. Echelon can give Orbit a Task inside a Flow without depending on whether the implementation currently runs in COBOL or Rust.',
    nodes: [
      { key: 'E', title: 'Echelon Flow', desc: 'Assigns business Tasks and keeps the journey.' },
      { key: 'O', title: 'Orbit Agent', desc: 'Selects a policy Skill through the Web API.' },
      { key: 'H', title: 'Hybrid Core', desc: 'Routes to a COBOL or Rust module.' },
    ],
    skillsLabel: 'Policy skills',
    skills: ['Inquiry', 'Validation', 'Processing', 'Administration'],
  },

  status: {
    id: 'orbit-status',
    eyebrow: 'Foundation / Direction',
    title: 'Orbit has technical connection points; the product is still taking shape',
    lead: 'The current source shows the direction through a Rust Web API, authentication and COBOL communication. The next round will turn those parts into a coherent module migration architecture.',
    foundation: {
      tag: 'FOUNDATION · AVAILABLE',
      title: 'The initial hybrid bridge',
      items: ['Rust Web API service', 'Authentication and role mapping', 'COBOL IPC and multi-worker dispatcher', 'An initial policy-processing structure'],
    },
    direction: {
      tag: 'DIRECTION · TAKING SHAPE',
      title: 'The core migration path',
      items: ['A stable contract for each module', 'COBOL and Rust running side by side', 'Reconciliation before routing shifts', 'Orbit Skills for Echelon Flows'],
    },
    note: 'Orbit is not positioned as a core replacement ready today. Each module will need its own scope, evidence and migration criteria.',
  },

  cta: {
    id: 'orbit-contact',
    title: 'Choose a module small enough to begin and real enough to prove.',
    lead: 'Start with a capability that has a clear boundary, running logic and results that can be reconciled. Binean will help define the contract, hybrid path and routing criteria that fit it.',
    label: 'Discuss a module',
    subject: 'Binean Orbit - Discuss an Ingenium module',
    back: 'View BENOVA',
  },
};
