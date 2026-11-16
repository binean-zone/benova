export default {
  seo: {
    title: 'Binean NOVA — Modernize the insurance core',
    description: 'NOVA brings together four solution families — Nexus, Orbit, Vista and Add-ons — with Orbit–Vista as the first delivery focus. Start with one insurance business function and evaluate it within an agreed scope.',
    keywords: 'Binean NOVA, Nexus, Orbit, Vista, Add-ons, Aster, Astra, insurance core modernization',
  },
  brandName: 'Binean NOVA',
  headerCta: 'Assess with NOVA',
  notice: {
    text: 'NOVA is completing its Orbit–Vista focus. Readiness for each family is described in the current status section.',
    linkLabel: 'Discuss your scope',
  },
  nav: [
    { href: '#architecture', label: 'Overview' },
    { href: '#axis', label: 'Central axis' },
    { href: '#families', label: 'Four families' },
    { href: '#status', label: 'Status' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    back: 'Back to BENOVA',
    eyebrow: 'Modernization model · Four solution families',
    title: 'Modernize the insurance core.',
    emphasis: 'Step by step, under control.',
    lead: 'NOVA brings together four solution families — Nexus, Orbit, Vista and Add-ons. Orbit and Vista form the central axis and the first delivery focus: start with one insurance business function, evaluate it within an agreed scope and decide the next step.',
    primaryCta: { label: 'Assess one insurance business function', href: '#contact' },
    secondaryCta: { label: 'See the four families', href: '#families' },
    highlights: [
      'Four solution families, one model',
      'Orbit–Vista at the central axis',
      'Preserve accumulated business value',
      'Keep unclear transactions visible',
    ],
  },
  architecture: {
    id: 'architecture',
    eyebrow: 'Model overview',
    title: 'Four solution families, one central axis.',
    lead: 'Nexus, Orbit, Vista and Add-ons are the four solution families of NOVA. Orbit and Vista form the central axis and the first delivery focus; Nexus supports development and operations; Add-ons extends the model with complementary directions.',
    diagram: {
      label: 'NOVA model diagram',
      description: 'NOVA’s four solution families: Nexus supports development and operations; Orbit connects and coordinates capabilities from existing systems, with the Aster demonstration software; Vista provides one consistent workspace; Add-ons includes the complementary directions AIRA and AIRAS plus the long-term direction Astra. Orbit and Vista form the central axis.',
      caption: 'The diagram shows the roles of the four solution families and the Orbit–Vista central axis.',
      axisLabel: 'Central axis · first delivery focus',
      families: {
        nexus: {
          eyebrow: 'N · DEVELOPMENT AND OPERATIONS',
          title: 'Nexus',
          lines: ['Build and shared admin', 'DevOps, batch, operations'],
        },
        orbit: {
          eyebrow: 'O · CENTRAL AXIS',
          title: 'Orbit',
          lines: ['Connect existing capabilities', 'Coordinate business flows'],
          nested: {
            eyebrow: 'DEMONSTRATION',
            title: 'Aster',
            lines: ['Demonstration software'],
          },
        },
        vista: {
          eyebrow: 'V · CENTRAL AXIS',
          title: 'Vista',
          lines: ['One consistent workspace', 'Menus, forms, tables'],
        },
        addons: {
          eyebrow: 'A · EXTENSION',
          title: 'Add-ons',
          lines: ['AIRA, AIRAS directions', 'Extend around Orbit–Vista'],
          nested: {
            eyebrow: 'LONG-TERM DIRECTION',
            title: 'Astra',
            lines: ['Next-gen insurance core'],
          },
        },
      },
    },
  },
  axis: {
    id: 'axis',
    eyebrow: 'Central axis',
    title: 'Orbit–Vista: connect, coordinate and work.',
    lead: 'Orbit and Vista form the central axis: Orbit connects and coordinates business capabilities; Vista brings them to users in one consistent workspace. This is NOVA’s first delivery focus.',
    items: [
      {
        icon: 'core',
        title: 'Connect existing business capabilities',
        desc: 'Orbit works with existing programs and data, opening modern ways to use them with limited deep changes to the core.',
      },
      {
        icon: 'routing',
        title: 'Coordinate business flows',
        desc: 'The processing steps of a business function are coordinated in one flow, with time and load controls.',
      },
      {
        icon: 'control',
        title: 'Report unclear transaction outcomes',
        desc: 'When an outcome is unclear, the system reports it so operations can reconcile instead of resending the transaction automatically.',
      },
      {
        icon: 'layout',
        title: 'One consistent workspace',
        desc: 'Vista brings menus, forms, data tables and actions into the same way of working across business functions.',
      },
    ],
  },
  families: {
    id: 'families',
    eyebrow: 'Four solution families',
    title: 'One role per family in the model.',
    lead: 'All four solution families belong to the NOVA model; Orbit and Vista form the central axis and the first delivery focus.',
    items: [
      {
        icon: 'code',
        title: 'Nexus — development and operations tools',
        desc: 'The development and operations family: build, environments, test data and shared administration. Its intended scope extends to DevOps, batch and daily operational tasks.',
      },
      {
        icon: 'routing',
        title: 'Orbit — connect and coordinate',
        desc: 'Connects business capabilities from existing systems, coordinates processing flows and opens modern ways to use them with limited deep changes to the core. The Aster demonstration software ships with the Orbit family so a flow can be experienced without using a running system.',
      },
      {
        icon: 'vista',
        title: 'Vista — one consistent workspace',
        desc: 'Menus, tabs, forms, data tables and actions follow the same way of working, so users can move between business functions without relearning the interface.',
      },
      {
        icon: 'spark',
        title: 'Add-ons — complementary capabilities',
        desc: 'Complementary directions around the Orbit–Vista axis, including AIRA, AIRAS and the long-term direction of Astra — a next-generation insurance core. This is a direction of the model.',
      },
    ],
  },
  value: {
    id: 'status',
    eyebrow: 'Value and status',
    title: 'Intended value and current readiness.',
    business: {
      label: 'VALUE',
      title: 'Modernize incrementally and preserve business value',
      desc: 'NOVA aims to improve the user experience and expand services while establishing a path to transition individual business functions. Each step needs verification of correctness, performance and operational requirements; the core system remains responsible for business permissions and rules.',
      points: [
        'Change each layer independently',
        'Modern integration with limited deep changes to the core',
        'Clear boundaries between presentation, coordination and business logic',
      ],
    },
    status: {
      label: 'CURRENT STATUS',
      title: 'The Orbit–Vista focus is being completed',
      desc: 'The current focus is Orbit–Vista integration and evaluation per business function. Readiness of each solution is confirmed per capability and deployment environment.',
      points: [
        'Orbit: core processing components are running; NOVA integration is being completed.',
        'Vista: working shell in use; sign-in and Orbit integration being completed.',
        'Nexus: shared build and administration tools; the DevOps and operations scope is expanding.',
        'Add-ons: complementary directions, with Astra in the long-term direction.',
      ],
    },
    note: 'Value is evaluated per business function; costs, security and operational conditions are agreed before implementation.',
  },
  adoption: {
    id: 'adoption',
    eyebrow: 'When it fits',
    title: 'Start with one insurance business function.',
    lead: 'Worth evaluating when the business wants to expand services on the existing core and prepare an incremental modernization path.',
    needs: [
      'One consistent workspace across several business functions',
      'Modern integration with limited deep changes to the core',
      'Visibility of unclear transactions for reconciliation',
      'Expansion in steps, based on evaluated results',
    ],
    fitLabel: 'ASSESSMENT SCOPE',
    fitTitle: 'Choose one insurance business function and take it end to end.',
    fitDesc: 'Choose one function from the workspace to the core. Compare it with the current system against agreed criteria before choosing the next step.',
    faqLink: { label: 'Common deployment questions', href: '#readiness' },
  },
  readiness: {
    id: 'readiness',
    eyebrow: 'Deployment questions',
    title: 'What needs to be clear before deployment.',
    items: [
      {
        question: 'Do we need to replace the entire core at the outset?',
        answer: 'Not necessarily. You can begin by letting Orbit work with existing programs and data after checking compatibility. The direction is to expand services, then transition individual business functions when ready; each change needs its own scope and testing.',
      },
      {
        question: 'How are Orbit and Vista different from a typical gateway or interface?',
        answer: 'Orbit connects and coordinates business capabilities from existing systems, while Vista brings those capabilities to users in one consistent workspace. Compatibility for each system is assessed before adoption.',
      },
      {
        question: 'What does starting with one insurance business function mean?',
        answer: 'Choose one specific function, agree the current state, acceptance criteria and connections to preserve. The assessment result is the basis for deciding whether to expand or verify further.',
      },
      {
        question: 'What happens when a transaction outcome is unclear?',
        answer: 'The system stops and reports clearly; it does not replay the transaction automatically. Operations reconcile through the agreed process. A timeout does not mean the transaction was rolled back.',
      },
      {
        question: 'Does Vista replace the current interface immediately?',
        answer: 'Not necessarily. Start with one group of functions and run it alongside the current interface.',
      },
      {
        question: 'What is needed to deploy?',
        answer: 'Define the insurance business function to assess, review compatibility with the existing system, and agree on goals, acceptance criteria and the specific deployment conditions. These conditions are confirmed before work begins.',
      },
      {
        question: 'Where does Nexus fit in the model?',
        answer: 'Nexus is one of NOVA’s four solution families. Current tools concentrate on build and shared administration; the DevOps, batch and daily operations scope is confirmed against specific needs.',
      },
      {
        question: 'What is Aster?',
        answer: 'Aster is demonstration software that ships with the Orbit family, so a working flow can be experienced without using a running system. Evaluating a real system still requires compatibility review and an agreed test scope.',
      },
    ],
  },
  cta: {
    id: 'contact',
    title: 'Define an assessment scope with NOVA.',
    lead: 'Share an insurance business function to improve and the connections to preserve. Agree on the current state, acceptance criteria and requirements for the next delivery step.',
    subject: 'Binean NOVA - Insurance business assessment',
    label: 'Request an insurance business assessment',
    back: 'Explore BENOVA',
  },
};
