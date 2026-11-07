export default {
  seo: {
    title: 'Binean Echelon — Split work across agents, keep every step under control',
    description: 'Echelon provides multi-agent orchestration for flows that split tasks across agents or involve many steps. The web service runs; production qualification is ongoing.',
    keywords: 'Binean Echelon, multi-agent orchestration, task splitting, per-step handling, load balancing, NOVA',
  },
  brandName: 'Binean Echelon',
  headerCta: 'Discuss your needs',
  notice: {
    text: 'Echelon is a multi-agent orchestration layer for flows that split tasks across agents or involve many steps. The web service runs; production qualification is ongoing.',
    linkLabel: 'Discuss an evaluation',
  },
  nav: [
    { href: '#model', label: 'Features' },
    { href: '#apprenticeship', label: 'Collaboration' },
    { href: '#decisions', label: 'Benefits' },
    { href: '#fit', label: 'Is it for you?' },
    { href: '#status', label: 'Status' },
  ],
  hero: {
    back: 'Home',
    eyebrow: 'Binean Echelon',
    title: 'Split work across agents. Keep control of every step.',
    lead: 'Use Echelon when a flow needs tasks split across agents, or when a large number of steps needs load balancing and per-step error handling. It is an additional path alongside the other components, not a layer between Vista and Orbit.',
  },
  sections: [
    {
      id: 'problem',
      eyebrow: 'Your team’s challenge',
      title: 'One failed step should not break the whole flow.',
      body: [
        'When a flow involves several agents or a very large number of steps, one error or one slow point can break the whole flow. Echelon tracks and handles work step by step so the team can see exactly which step needs attention.',
        'Components still call each other directly — Vista calls Orbit. Echelon takes part only when a flow needs task splitting or per-step control, so it does not become a bottleneck on the default path.',
      ],
    },
    {
      id: 'model',
      eyebrow: 'Key features',
      title: 'Step-by-step orchestration, when the flow needs it.',
      glossary: [
        { term: 'Split tasks across agents', desc: 'A flow can assign parts of the work to specialist agents instead of concentrating everything in one processing path.' },
        { term: 'Load balance by step', desc: 'Distribute pending steps so more agents can take part when the workload is large.' },
        { term: 'Handle errors per step, not the whole flow', desc: 'Track results at step level to identify what needs follow-up or human intervention.' },
        { term: 'External agents claim tasks and submit results', desc: 'Agents claim tasks and submit results over HTTP/JSON; state is stored durably for later inspection.' },
      ],
    },
    {
      id: 'apprenticeship',
      eyebrow: 'Effective collaboration',
      title: 'Agents run the steps. People keep the decisions.',
      lead: 'Each role is explicit: agents handle the work assigned to them, and people decide when business judgement is needed.',
      glossary: [
        { term: 'Agents', desc: 'Run the steps assigned to them and submit results for Echelon to record.' },
        { term: 'People', desc: 'Handle exceptions and take responsibility for decisions that need business judgement.' },
        { term: 'AI — planned', desc: 'Not a shipping capability; important results still need human review.' },
      ],
    },
    {
      id: 'decisions',
      eyebrow: 'Business benefits',
      title: 'Use it when needed, not on every call.',
      decisions: [
        { title: 'Use it only when needed', desc: 'Vista still calls Orbit directly; Echelon takes part only when a flow needs task splitting or per-step control.', cost: 'Value: the default path stays simple, with no unnecessary extra hop.' },
        { title: 'Load balance when steps are many', desc: 'Distribute pending steps across agents when the workload grows.', cost: 'Value: more agents can work on the same flow when needed.' },
        { title: 'Keep failures local to a step', desc: 'A failed step is recorded on its own, without losing track of the others.', cost: 'Value: narrow the scope of what needs follow-up or human handling.' },
        { title: 'Clear flow versions for review on change', desc: 'Published flow versions are identified clearly for comparison when working practices change.', cost: 'Value: a basis for review before putting changes into use.' },
      ],
    },
    {
      id: 'applications',
      eyebrow: 'Suggested applications',
      title: 'Start where a flow has many steps or many agents.',
      body: [
        'Flows that process a large number of steps and need load balancing and per-step tracking are a suitable direction to evaluate Echelon.',
        'Flows that split work across specialist agents are also a direction to evaluate. These examples are intended uses, not deployed customer references.',
      ],
    },
  ],
  fit: {
    id: 'fit',
    eyebrow: 'Is it for you?',
    title: 'Evaluate against your needs and readiness.',
    good: {
      title: 'A practical evaluation starts when',
      items: ['A flow needs tasks split across agents.', 'A large number of steps needs load balancing.', 'Errors need to be handled per step.', 'A specific evaluation scope and owner can be assigned.'],
    },
    bad: {
      title: 'Discuss further if',
      items: ['The flow is a simple Vista ↔ Orbit path — use the direct route.', 'You need a fully qualified production release immediately.', 'Multi-node high availability or multi-organization operation is mandatory.', 'You need shipping AI, scheduling or deadline handling.'],
    },
  },
  status: {
    id: 'status',
    eyebrow: 'Product status',
    title: 'The web service runs; production qualification continues.',
    body: [
      'Echelon has a working multi-agent orchestration web service: publish flows and skills, create processes, send events and read state over HTTP/JSON; external agents claim tasks and submit results over HTTP; state is stored durably. Initial scope is a single operating node; production qualification is not complete.',
      'Echelon is not on the default call path: Vista calls Orbit directly, and Echelon takes part when a flow needs it. This keeps Echelon’s load low and everyday calls from taking an extra hop.',
      'Scheduling and deadline handling are not implemented. Aira remains in design. Support, security and operational scope need agreement for each evaluation.',
    ],
  },
  cta: {
    title: 'Which of your flows needs work split across agents?',
    lead: 'Identify a flow with many steps or several agents, choose an evaluation scope and agree on the results you need to see before expanding.',
    label: 'Discuss Echelon',
    subject: 'Echelon - Discuss our needs',
    back: 'Back to BENOVA',
  },
};
