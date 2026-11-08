export default {
  seo: {
    title: 'Binean NOVA — Modernize your backend one capability at a time',
    description: 'NOVA aims to expand services and modernize backends incrementally, combining a workspace, orchestration, backend connectivity and development tools. The early-release package is in development.',
    keywords: 'Binean NOVA, Orbit, Vista, Aster, request orchestration, workspace, backend connectivity, early release package',
  },
  brandName: 'Binean NOVA',
  headerCta: 'Assess with NOVA',
  notice: {
    text: 'NOVA is being completed for early release. Component readiness is described in the current status section.',
    linkLabel: 'Discuss your scope',
  },
  nav: [
    { href: '#architecture', label: 'Overview' },
    { href: '#flow', label: 'Request flow' },
    { href: '#components', label: 'Components' },
    { href: '#status', label: 'Status' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    back: 'Back to BENOVA',
    eyebrow: 'Early release package: Orbit · Vista · Aster',
    title: 'Modernize your backend one capability at a time.',
    emphasis: 'Preserve existing value. Create room for change.',
    lead: 'NOVA aims to expand services on your existing backend, then transition individual capabilities when ready. Vista serves users, Orbit coordinates requests, and Aster connects the backend. Nexus, the build and operations toolkit, joins in a later phase.',
    primaryCta: { label: 'Assess one business capability', href: '#contact' },
    secondaryCta: { label: 'See the model overview', href: '#architecture' },
    highlights: [
      'One unified workspace',
      'Gateways tailored to existing systems',
      'Build on existing backend value',
      'Adopt and evaluate step by step',
    ],
  },
  architecture: {
    id: 'architecture',
    eyebrow: 'Model overview',
    title: 'A clear path from the user to the backend.',
    lead: 'Orbit adapts how application requests are received. Aster handles connections to compatible backends. Vista provides the workspace for incremental modernization (Strangler Fig). Nexus build and operations tools belong to a later phase.',
    diagram: {
      label: 'NOVA model diagram',
      description: 'The NOVA integration model in development: Vista provides the workspace, Orbit coordinates requests, and Aster connects the existing business backend. Vista connects to Orbit. Nexus, Echelon and Aira sit in a dashed later-phase frame: Nexus brings build and operations tools, and Echelon adds orchestration for flows needing multiple agents.',
      caption: 'Orbit handles application-facing connections; Aster handles backend-facing connections. Compatibility and transition scope are verified for each business capability.',
      users: {
        eyebrow: 'USERS AND CHANNELS',
        title: 'Business users',
        lines: ['Web browser', 'Other applications', 'Integrated systems'],
      },
      backend: {
        eyebrow: 'BUILD ON EXISTING VALUE',
        title: 'Core business backend',
        lines: ['Existing programs', 'Existing data stores', 'Access and business rules'],
      },
      vista: {
        eyebrow: 'USER WORKSPACE',
        title: 'Vista',
        lines: ['Menus, tabs and working views', 'Forms, tables and actions', 'Secure sign-in through Gateway'],
      },
      orbit: {
        eyebrow: 'ORCHESTRATION',
        title: 'Orbit',
        lines: ['Multiple customizable gateways', 'Shared business orchestration', 'Auth, timeouts, cancel, load'],
      },
      aster: {
        eyebrow: 'BACKEND CONNECTIVITY',
        title: 'Aster',
        lines: ['Record-level backend access', 'Sessions and process groups', 'Two-way data mapping'],
      },
      later: {
        label: 'LATER PHASE · STILL PART OF THE OVERALL DESIGN',
        nexus: {
          eyebrow: 'BUILD AND OPERATIONS',
          title: 'Nexus',
          lines: ['Incremental backend builds', 'Environment and data refresh', 'Work inside VS Code'],
        },
        echelon: {
          eyebrow: 'MULTI-AGENT',
          title: 'Echelon',
          lines: ['Share tasks across many agents', 'Balance load, errors per step'],
        },
        aira: {
          eyebrow: 'AI ASSISTANCE',
          title: 'Aira',
          lines: ['Read and summarize documents', 'A reviewer decides'],
        },
      },
    },
  },
  flow: {
    id: 'flow',
    eyebrow: 'Request flow',
    title: 'Four steps of a request.',
    lead: 'How a request moves through the model.',
    items: [
      {
        icon: 'layout',
        title: 'Users act in Vista',
        desc: 'Choose a function, fill in forms or work with tables; the browser only interacts with the workspace.',
      },
      {
        icon: 'shield',
        title: 'The Gateway forwards securely',
        desc: 'The server-side connection layer receives actions from Vista and forwards requests to Orbit under the agreed security configuration.',
      },
      {
        icon: 'routing',
        title: 'Orbit verifies and runs the flow',
        desc: 'Validate the token, accept the request into a bounded queue and run the matching business flow.',
      },
      {
        icon: 'link',
        title: 'Aster works with the backend',
        desc: 'Map data into records the backend understands, receive and validate the result, then return a screen or data to Vista.',
      },
    ],
  },
  capabilities: {
    id: 'components',
    eyebrow: 'Components',
    title: 'One responsibility per component',
    lead: 'The early-release package has three components, each with its own role and able to change independently.',
    items: [
      {
        icon: 'layout',
        title: 'Vista — one unified workspace',
        desc: 'Menus, tabs, tables and forms in one working interface, so users can move between business functions without relearning how to work.',
      },
      {
        icon: 'shield',
        title: 'Secure sign-in sessions',
        desc: 'The design keeps connection credentials on the server, separate from the user interface. Authentication and session requirements are agreed during integration.',
      },
      {
        icon: 'routing',
        title: 'Orbit — customizable connection gateways',
        desc: 'Customizable ingress gateways adapt to existing application calls and data formats. They share business orchestration, with the aim of limiting changes to connected systems.',
      },
      {
        icon: 'control',
        title: 'Coordinated business flows',
        desc: 'Flows coordinate business steps with time limits, cancellation and load control. Each change is tested against its backend and intended scope of use.',
      },
      {
        icon: 'link',
        title: 'Aster — business backend connectivity',
        desc: 'Maps data and manages processing sessions through backend connection profiles. Integration testing establishes compatibility for specific versions and business capabilities.',
      },
      {
        icon: 'control',
        title: 'Two-way data mapping and sessions',
        desc: 'Data is mapped into the records the backend understands and back again. Processing sessions are tracked and cleaned up when they finish.',
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
      desc: 'NOVA aims to improve the user experience and expand services while establishing a path to transition individual capabilities. Each step needs verification of correctness, performance and operational requirements; the backend owns business permissions and rules.',
      points: [
        'Change each layer independently',
        'Customize connection gateways to preserve existing integrations',
        'Clear boundaries between presentation, coordination and business logic',
      ],
    },
    status: {
      label: 'CURRENT STATUS',
      title: 'Being completed for release',
      desc: 'Integration across NOVA components is being completed. NOVA is not yet a generally deployable release.',
      points: [
        'Orbit: webservice runtime running; shared HTTP/JSON gateway in progress.',
        'Vista: application shell in use; sign-in and Orbit integration in progress.',
        'Aster: adapter tested in simulation and independently reviewed; validation on real systems is scoped step by step.',
      ],
    },
    note: 'Assessment scope depends on actual readiness. Nexus, Echelon and Aira are peer components in a later phase.',
  },
  adoption: {
    id: 'adoption',
    eyebrow: 'When it fits',
    title: 'Start with one business function.',
    lead: 'Worth evaluating when the business wants to expand services on the existing backend and prepare an incremental modernization path.',
    needs: [
      'A modern, consistent workspace across several business functions',
      'Preserve existing application connections through customizable gateways',
      'Expand first, then transition selected capabilities based on verified results',
      'Session, timeout and load control in one coordination layer',
    ],
    fitLabel: 'ASSESSMENT SCOPE',
    fitTitle: 'Choose one business function and take it end to end.',
    fitDesc: 'Choose one function from the workspace to the backend. Compare it with the current system against agreed criteria before choosing the next step.',
    faqLink: { label: 'Common deployment questions', href: '#readiness' },
  },
  readiness: {
    id: 'readiness',
    eyebrow: 'Deployment questions',
    title: 'What needs to be clear before deployment.',
    items: [
      {
        question: 'Do we need to replace the entire backend at the outset?',
        answer: 'You can begin by connecting existing programs and data through Aster after checking compatibility. The direction is to expand services, then transition individual capabilities when ready; each change needs its own scope and testing.',
      },
      {
        question: 'Does Vista replace the current interface immediately?',
        answer: 'Not necessarily. Start with one group of functions and run it alongside the current interface.',
      },
      {
        question: 'How is Orbit different from a typical API gateway?',
        answer: 'Orbit combines customizable connection gateways with shared business orchestration, session management, timeouts and load control. A suitable gateway can preserve existing client calls and data formats; compatibility is verified before adoption.',
      },
      {
        question: 'Is Aster a separate product?',
        answer: 'Aster is the backend connectivity component within NOVA. Configuration profiles describe compatible backends; keeping Orbit and Vista unchanged when switching backends depends on the contract and test results. Integration scope is confirmed before deployment.',
      },
      {
        question: 'Does the demo run on my real system?',
        answer: 'The demo uses the bundled reference backend to illustrate processing separately from your running system. Evaluation on a real backend requires compatibility review, a connection profile and an agreed test scope.',
      },
      {
        question: 'What happens when a transaction outcome is unclear?',
        answer: 'The system stops and reports clearly; it does not replay the transaction automatically. Operations reconcile through the agreed process. A timeout does not mean the transaction was rolled back.',
      },
      {
        question: 'What is needed to deploy?',
        answer: 'A compatible business backend, servers for Orbit and the Gateway inside the internal network, and acceptance criteria. Versions, security and capacity are agreed per deployment; Orbit is not exposed directly to the internet.',
      },
      {
        question: 'Where does Nexus fit in the model?',
        answer: 'Nexus is a later-phase component. Its build, environment and test-data tools have been used in real environments on their own, and the integrated NOVA experience belongs to a later phase. Evaluating the early-release package does not depend on it.',
      },
      {
        question: 'Where does Echelon fit in the model?',
        answer: 'Echelon is a peer component in a later phase. Vista connects to Orbit; Echelon adds orchestration when a flow needs task sharing across multiple agents, load balancing or per-step error handling.',
      },
    ],
  },
  cta: {
    id: 'contact',
    title: 'Define an assessment scope with NOVA.',
    lead: 'Share a capability to improve and the connections to preserve. Agree on a baseline, acceptance criteria and requirements for the next delivery step.',
    subject: 'Binean NOVA - Business capability assessment',
    label: 'Request a capability assessment',
    back: 'Explore BENOVA',
  },
};
