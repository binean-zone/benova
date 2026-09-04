/**
 * Binean Echelon page — English.
 *
 * Echelon is a multi-agent orchestration engine, NOT written for any one
 * industry, and this page has to stand on its own without BENOVA framing it.
 * BENOVA appears exactly twice, as the first deployment.
 *
 * Register: objective, no first-person singular. "We" appears only in the
 * contact block, where the company speaks.
 *
 * Specification detail from the spine project stays out of here: that
 * repository is proprietary.
 */
export default {
  seo: {
    title: 'Binean Echelon — Orchestration for humans, machines and AI | Binean',
    description:
      'Binean Echelon (BE) is a multi-agent orchestration engine: people, services and AI agents share one Agent concept. The architecture, the design decisions and what each one costs, and a scored evaluation placing Echelon alongside Temporal, Camunda, Conductor, Step Functions and the AI agent frameworks.',
    keywords:
      'Binean Echelon, multi-agent orchestration, workflow orchestration, human in the loop, AI agent orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, LangGraph, event-driven, Spine',
  },

  brandName: 'Binean',
  headerCta: 'Contact',

  notice: {
    text: 'Binean Echelon is at the specification and prototype stage, and is not ready for operational use.',
    linkLabel: 'Contact by email',
  },

  nav: [
    { href: '#model', label: 'Model' },
    { href: '#apprenticeship', label: 'Learning' },
    { href: '#decisions', label: 'Design' },
    { href: '#comparison', label: 'Evaluation' },
    { href: '#fit', label: 'Fit' },
    { href: '#status', label: 'Status' },
  ],

  hero: {
    back: 'Home',
    eyebrow: 'Binean Echelon',
    title: 'One model for orchestrating humans, machines and AI',
    lead: 'Binean Echelon is a multi-agent orchestration engine. A person, a service and an AI agent are described by the same concept, receive work through the same mechanism, and report results under the same contract. This page sets out the model, the design decisions and what each one costs, and a scored evaluation placing Echelon alongside the orchestration engines available today.',
  },

  sections: [
    {
      id: 'problem',
      eyebrow: 'The problem',
      title: 'One process, three kinds of executor, three separate mechanisms',
      body: [
        'Most processes worth orchestrating share one structure: some steps software completes in milliseconds, some steps a person must read and decide on, and a growing share handed to a model. Claims assessment, credit approval, content moderation, incident response and hiring all take this form, with elapsed times measured in hours or months.',
        'Two common implementations run into the same wall. A sequence of function calls fails at the first human step, because a process cannot hold a waiting state for days. Message queues push state, retries and completion records into every individual step, and the shape of the process disappears from the source code.',
        'Orchestration engines exist to close that gap. What separates them is how they model the world. Most split it into several kinds of step — a service step, a step assigned to a person, and more recently a step that calls an agent — each with its own lifecycle, its own way of being handed work and its own way of reporting back. The cost of integrating those kinds compounds over time and often becomes the most complex part of the system.',
        'Binean Echelon takes the opposite assumption. The work to be handed out, the capability required to perform it, and the result returned share one structure regardless of who performs it. What differs is latency and calling protocol, and both belong to the execution layer rather than to the process model.',
      ],
    },
    {
      id: 'brain',
      eyebrow: 'Architecture',
      title: 'Six separated roles',
      lead: 'BE is the abbreviation for Binean Echelon; what follows describes how the system divides responsibility, modeled on a nervous system.',
      body: [
        'A central nervous system does not describe how the hand grips. Its task is to establish where it stands in a chain of action, decide the next step, emit the signal and take in the response. Echelon divides responsibility on the same principle.',
      ],
      glossary: [
        {
          term: 'Basal — the cortex',
          desc: 'The sole navigation authority. No executor advances a process on its own, so process state always has a single source of truth.',
        },
        {
          term: 'Spine — the spinal cord',
          desc: 'The event-driven conduction model: work is emitted, outcomes are collected, ordering is preserved. This is the most tightly specified part of Echelon and its core.',
        },
        {
          term: 'Reflex',
          desc: 'An agent built into the core that handles the mechanical work every process needs: conditional branching, reshaping data between steps, and invoking another process as a capability.',
        },
        {
          term: 'Agent — the executing organ',
          desc: 'Whoever performs the work: a person, a service, or a model. At the orchestration layer all three follow one contract.',
        },
        {
          term: 'Scheduler — the body clock',
          tag: 'Not in V1',
          desc: 'Holds every registered deadline and wakes a Process when one falls due. Without it Echelon can wait but cannot move on by itself; time has to be fed in by an external actor.',
        },
        {
          term: 'Timeout — the deadline reflex',
          tag: 'Not in V1',
          desc: 'Decides what happens when a Task runs past its deadline: cancel it and take another edge, or leave it running and open a parallel escalation branch.',
        },
      ],
      after: [
        'This division also fixes what Echelon does **not** cover. How a service reaches a database, how a model is invoked, and how a person signs into a form all belong to the execution layer and sit outside the model.',
        'The first four roles are in the V1 specification. Scheduler and Timeout belong to the architecture but are not yet specified, and that is exactly why Echelon loses a point on long-running processes in the evaluation below.',
      ],
    },
    {
      id: 'model',
      eyebrow: 'The model',
      title: 'Five nouns and a single authority',
      lead: 'Echelon keeps the concept count to a minimum. The whole model reduces to five nouns.',
      glossary: [
        {
          term: 'Flow',
          desc: 'The process definition. Immutable, carrying an exact versioned identity; updating a process produces a new Flow rather than editing the old one.',
        },
        {
          term: 'Process',
          desc: 'One run of one Flow, carrying its own business state as JSON data.',
        },
        {
          term: 'Task',
          desc: 'A unit of work inside a Process. Input is validated before the work is handed out; the result returns through an independent Outcome.',
        },
        {
          term: 'Skill',
          desc: 'The capability a Task requires, described by an input and output schema. A Flow can also act as a Skill, so processes compose.',
        },
        {
          term: 'Agent',
          desc: 'Whoever executes a Task. Echelon defines exactly one Agent concept and does not classify it; this is a design decision, covered below.',
        },
      ],
      after: [
        'Orchestration is the responsibility of **Basal**. It is not a passive router: Basal actively claims a batch of events, determines the next step for each Process, then writes the entire result to the storage layer as one atomic unit. At any moment a Process is under the authority of exactly one Basal.',
      ],
    },
    {
      id: 'apprenticeship',
      eyebrow: 'Principle',
      title: 'Work should flow from people to AI to machines',
      lead: 'Echelon does not treat the three kinds of executor as equals. They are ranked by cost and latency, and that ranking sets what Echelon is for.',
      glossary: [
        {
          term: 'Machine Agent',
          desc: 'Fastest and cheapest. A service answers in milliseconds, the cost is close to infrastructure alone, and repeated runs give the same result. In exchange it only handles work already described completely as rules.',
        },
        {
          term: 'AI Agent',
          desc: 'Orders of magnitude slower than a machine and billed per call, but it takes on work with no clear rules yet — the work that previously required a person.',
        },
        {
          term: 'Human Agent',
          desc: 'Slowest and most expensive, measured in hours or days, and it does not scale on demand. In exchange it is the only place with judgement for work nobody has managed to write down as rules.',
        },
      ],
      after: [
        'That ranking has a blunt consequence: a process that leaves work with people forever pays the highest price forever. Echelon\u2019s job is therefore not only to orchestrate three kinds of executor smoothly, but to **push each piece of work down to a cheaper tier once it is ready**.',
        'The mechanism is apprenticeship. While a person still holds a Skill, every execution already produces a clean input\u2013output pair: `Task.input` is schema-validated and materialized exactly once, and the result returns through an independent Outcome. No extra collection tooling is needed \u2014 the training data for the successor is the incumbent\u2019s own execution history.',
        'And because a Skill is described by schema rather than by kind of executor, the handover never touches the process definition. A Step that points at a specialist today points at a model six months later and at a service a year after that \u2014 all three times it is the same Task requiring the same Skill. This is where the one-Agent-concept decision pays off.',
        '**Meta Agent** goes one level further. It is an executor that performs no step in the process but adjusts the process itself: tuning a Step\u2019s schema and prompt against observed results, and proposing Flow changes when the data shows a branch no longer holds. It is the one executor whose Skill is changing another executor\u2019s Skill.',
        'What makes that acceptable inside an audited process is the versioning decision. A Meta Agent editing a Flow does not overwrite the running definition: it produces a new Flow version, while every Process already started stays pinned to the old one. A case already handled is never retroactively handled differently because the system tuned itself. Without that constraint, letting a system rewrite its own process is not something you can put in front of a compliance function.',
        'To be clear about status: apprenticeship and Meta Agent are in the design, not in V1. The V1 specification goes only as far as making them possible \u2014 a single Agent concept, Skills described by schema, and immutable Flow version identity.',
      ],
    },
    {
      id: 'decisions',
      eyebrow: 'Design decisions',
      title: 'Four points where Echelon departs from the field',
      lead: 'The four decisions below shape the whole model. Each carries a cost, stated directly underneath it.',
      decisions: [
        {
          title: 'The specification is the product, not the documentation',
          desc: 'The specification is written first and implemented second. The conformance suite exists to prove the specification correct, not to prove the code runs. As a result, behaviour is defined independently of any language, and a second implementation can be verified as equivalent.',
          cost: 'Cost: delivery speed. Most engines on the market ship considerably faster because they never have to settle a specification first.',
        },
        {
          title: 'One Agent concept, with no classification of human, machine or AI',
          desc: 'Echelon does not define "user task", "service task" and "agent step" as three separate kinds. There is a Task and a reference to an Agent. People, services and models are all agents; resolving that reference into concrete execution capacity belongs to the runtime layer. This is the largest departure from the market and the easiest point to object to.',
          cost: 'Cost: everything that normally accompanies a "human task" concept elsewhere — forms, work queues, permissions, delegation — is absent and has to be built a layer up.',
        },
        {
          title: 'The core does not own the storage layer',
          desc: 'Reading events, writing results, claiming tasks and applying outcomes are all replaceable boundaries. The core defines semantics; whether it runs on Postgres, Kafka or a queue the organisation already operates is the adopter’s decision. For organisations with existing infrastructure and constraints on where data may reside, this is a precondition rather than a feature.',
          cost: 'Cost: there is no single-step install path. Engines that ship their own storage layer start up far more quickly.',
        },
        {
          title: 'Process versioning is a first-class concept',
          desc: 'Every Flow carries an exact versioned identity, and every Process is pinned to the version it started on. A running Process does not change behaviour mid-flight because the definition was just updated. For processes that live for months or years — a loan file, a contract, an investigation — this is a hard requirement.',
          cost: 'Cost: there is no mechanism for hot-patching a Process that is running incorrectly. Remediation goes through recovery, not through editing the definition.',
        },
      ],
    },
    {
      id: 'applications',
      eyebrow: 'Application scope',
      title: 'The problems Echelon targets',
      body: [
        'Echelon is not tied to a particular line of business. Fit is determined by the structure of the problem rather than the sector: processes that run long, involve several kinds of executor, and must leave an auditable record throughout.',
      ],
      glossary: [
        {
          term: 'Business processes with approvals',
          desc: 'Claims, credit, procurement, hiring. Systems assemble the file, people decide, systems carry out the result.',
        },
        {
          term: 'AI in the loop',
          desc: 'A model proposes, a person approves or rejects, and that judgement returns as training data. Requires a pause point for a human without keeping a process alive for the duration of the wait.',
        },
        {
          term: 'Operations and incident response',
          desc: 'An alert opens a process, part of it runs automatically, and part of it halts for confirmation before anything touches a system in service.',
        },
        {
          term: 'Coordinating multiple AI agents',
          desc: 'Several agents pursuing one goal, needing a single record of who holds which piece of work, what is complete, and who has authority over the next step.',
        },
      ],
      after: [
        'The list above is design scope, not a customer list. The first deployment is BENOVA, Binean’s insurance core modernization programme. Insurance was chosen as the opening application because it concentrates several hard constraints into one system: processes lasting years, multi-level approvals, strict audit requirements, and infrastructure that cannot be replaced in a single move.',
      ],
    },
  ],

  comparison: {
    id: 'comparison',
    eyebrow: 'Evaluation',
    title: 'Echelon against the market, scored on six criteria',
    lead: 'The six criteria below follow from the class of problem just described and are scored on a 0–5 scale. The first four concern the model; the last two concern product maturity.',
    max: 5,
    chartTitle: 'Echelon, Temporal and Camunda 8 across six criteria',
    chartCaption:
      'Only three products are plotted so the figure stays readable; all six appear in the score table below. The dashed outline is Echelon, marking scores that reflect the specified design rather than measurements from a production system.',
    provisionalLabel: 'scored on design',
    axes: [
      {
        key: 'agent',
        label: 'Unified executor model',
        group: 'design',
        desc: 'People, machines and AI described by one concept rather than three kinds of step.',
      },
      {
        key: 'longrun',
        label: 'Long-running processes',
        group: 'design',
        desc: 'Running for days, pausing for external executors, acting on its own deadlines, and recovering from failure without losing state.',
      },
      {
        key: 'infra',
        label: 'Infrastructure independence',
        group: 'design',
        desc: 'Where it runs and where state is stored decided by the organisation, not imposed by the engine.',
      },
      {
        key: 'version',
        label: 'Process versioning',
        group: 'design',
        desc: 'A run already in flight keeps its behaviour when the process definition is updated.',
      },
      {
        key: 'tooling',
        label: 'Tooling and SDKs',
        group: 'ops',
        desc: 'Operations UI, forms, work queues, SDKs across several languages.',
      },
      {
        key: 'maturity',
        label: 'Production maturity',
        group: 'ops',
        desc: 'How far it is proven at real scale, together with community and vendor support.',
      },
    ],
    products: [
      {
        name: 'Binean Echelon',
        kind: 'Multi-agent orchestration',
        scores: [5, 3, 5, 5, 1, 1],
        plot: true,
        provisional: true,
        note: 'The first four criteria are why Echelon exists; the last two are the gap still to be closed. It loses a point on long-running processes for having no timer: Echelon can wait, but cannot yet act when a deadline passes.',
      },
      {
        name: 'Temporal',
        kind: 'Durable execution',
        scores: [2, 5, 3, 2, 5, 5],
        plot: true,
        note: 'The sensible default if an orchestration engine is needed today; workflow versioning is a widely reported weak point.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, model-driven',
        scores: [3, 5, 3, 4, 5, 5],
        plot: true,
        note: 'The closest reference point wherever people take part in the process, though it keeps human steps and service steps firmly apart.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Microservice orchestration',
        scores: [2, 4, 3, 4, 4, 5],
        note: 'Shares the process-as-data principle but is tuned for chaining services rather than for mixed executors.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Serverless state machines',
        scores: [2, 4, 1, 3, 4, 5],
        note: 'Near-zero operational cost and deep AWS integration; the low infrastructure-independence score follows directly from that.',
      },
      {
        name: 'LangGraph, CrewAI, AutoGen',
        kind: 'AI agent frameworks',
        scores: [2, 2, 3, 1, 4, 4],
        note: 'Very fast at building agent loops within a single program run; waiting days for a human approval sits outside the original model.',
      },
    ],
    table: {
      product: 'Product',
      design: 'Model',
      designSub: 'first 4 criteria',
      ops: 'Operations',
      opsSub: 'last 2 criteria',
      total: 'Total',
      caption: 'Per-criterion scores on a 0–5 scale, with subtotals for the two groups.',
    },
    verdict: [
      'On a plain sum, Camunda 8 leads and Echelon places fourth of six. That number describes the position accurately: Echelon scores 18 out of 20 on the model criteria and 2 out of 10 on the operational ones.',
      'How the table is read matters more than the ranking. For an organisation that has to deploy this quarter, the two operational criteria are decisive, and the reasonable choice sits among the mature products. Echelon is worth considering only where the first four criteria are non-negotiable constraints and the organisation is willing to engage from the design stage.',
    ],
    method: {
      title: 'On the scoring',
      body: 'The scores are Binean’s own, based on each product’s public documentation, and assume the six criteria carry equal weight — an assumption that holds for no real organisation. Different weights produce a different ranking. The table also deliberately leaves out the apprenticeship and Meta Agent dimension described above: most products here do not attempt it, and scoring a category with only one entrant says nothing. Airflow, Dagster and Prefect are absent because they solve a different problem: scheduled data pipeline orchestration. Scoring them on this scale would mislead in both directions.',
    },
  },

  fit: {
    id: 'fit',
    eyebrow: 'Conditions of use',
    title: 'When it fits, and when it does not',
    good: {
      title: 'Echelon is worth considering when',
      items: [
        'Processes mix people, machines and AI, and those three should not be three separate mechanisms.',
        'Processes run from hours to months, with waiting periods, approvals and work that has to be retried.',
        'The organisation is constrained to existing infrastructure, or must be able to audit where data is stored.',
        'A run already started must keep its behaviour when the process is updated.',
        'A specification that can be read is worth more than a product with more features.',
      ],
    },
    bad: {
      title: 'Echelon does not fit when',
      items: [
        'Production deployment is required this quarter. Echelon is not ready for that.',
        'The process is machine calling machine and finishes in seconds. A queue or a direct call suffices; an engine only adds a layer.',
        'Forms, work queues and an admin interface are needed immediately. Camunda provides them; Echelon does not.',
        'The team builds in Java, Go or Python and needs an SDK for it. There is one implementation today, in Rust.',
        'A community, a plugin ecosystem, or a vendor with an out-of-hours support commitment is required.',
      ],
    },
  },

  status: {
    id: 'status',
    eyebrow: 'Status',
    title: 'Current level of completeness',
    body: [
      'Spine’s V1 specification has settled most of the core semantics, and a Rust implementation runs end to end with a passing test suite. V1 is nonetheless **not yet implementation-ready**: parts of the specification are still being corrected as implementation continues to surface contradictions.',
      'In short, Echelon at this point is a carefully considered design plus a working skeleton that tests it, not a product ready for operation. This is also why the two operational criteria in the evaluation score 1 out of 5.',
      'For organisations running processes of the class described above, the most valuable conversation at this stage is about the design: where the model is wrong, and which real situations it has not accounted for.',
    ],
  },

  cta: {
    title: 'A conversation about the design',
    lead: 'We want to hear from people who run processes of this class directly, particularly about the points where the model is expected not to hold.',
    label: 'Book a 30-minute conversation',
    subject: 'Binean Echelon - Design conversation',
    back: 'See BENOVA — the first deployment',
  },
};
