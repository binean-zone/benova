/**
 * Binean Engine page — English.
 *
 * Written at the architecture and design-decision level. Specification detail
 * from the spine project stays out of here: that repository is proprietary.
 */
export default {
  seo: {
    title: 'Binean Engine — Orchestration for hybrid agents | BENOVA',
    description:
      'Binean Engine is the orchestration framework behind BENOVA: Flow, Process, Task and Agent, with Basal as the single navigation authority. An architecture introduction, the design decisions behind it, and a straight comparison with Temporal, Camunda, Conductor and Step Functions.',
    keywords:
      'Binean Engine, Spine, workflow orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, event-driven, human in the loop, AI agent orchestration',
  },

  hero: {
    back: 'BENOVA',
    eyebrow: 'The E in ENOVA',
    title: 'Orchestration is the hard part, not the plumbing',
    lead: 'Binean Engine is the orchestration framework behind BENOVA. At its core is Spine — an event-driven workflow model specified before it was implemented. This page covers what Engine is, where it departs from the market, and what it cannot do yet.',
  },

  sections: [
    {
      id: 'problem',
      eyebrow: 'The problem',
      title: 'An insurance process does not fit inside one running program',
      body: [
        'Take a claim. The system pulls the policy, an assessor reviews the file, a model scores the risk, a manager approves it if the amount crosses a threshold, then finance pays out. Four different kinds of executor, on four different pieces of infrastructure, and the whole thing measured in days rather than milliseconds.',
        'Write that as a sequence of function calls and it breaks at the first human step: a process cannot sit and wait three days. Write it as message queues and every step has to carry its own state, its own retries, its own record of what already ran — and nobody can see the shape of the process any more.',
        'This is the problem orchestration engines exist to solve. The question is not whether you need one, but how the one you pick models the world.',
      ],
    },
    {
      id: 'model',
      eyebrow: 'The model',
      title: 'Five nouns, and a single authority',
      lead: 'Spine deliberately keeps the concept count as small as it can. Almost everything in the system reduces to these five nouns.',
      glossary: [
        {
          term: 'Flow',
          desc: 'The process definition. Immutable, with an exact versioned identity — changing a process produces a new Flow rather than editing the old one.',
        },
        {
          term: 'Process',
          desc: 'One run of one Flow. It carries its own business state as JSON data.',
        },
        {
          term: 'Task',
          desc: 'A unit of work inside a Process. It arrives with validated input and reports back through an independent Outcome.',
        },
        {
          term: 'Skill',
          desc: 'The capability a Task requires, described by an input and output schema. A Flow can also act as a Skill, so processes compose.',
        },
        {
          term: 'Agent',
          desc: 'Whatever executes a Task. Spine has exactly one Agent concept and does not classify it — see below; this is a design decision, not an omission.',
        },
      ],
      after: [
        'Coordinating all of that is **Basal**. It is not a passive router waiting to be called: Basal drives the loop — it claims a batch of events, decides what happens next for each Process, and hands the whole result to the storage layer as one unit. At any moment a Process has exactly one Basal with authority over it.',
        'Alongside it sits **Reflex**, an agent built into the core that handles the mechanical work every process needs: conditional branching, reshaping data between steps, and invoking another Flow as a Skill.',
      ],
    },
    {
      id: 'decisions',
      eyebrow: 'Design decisions',
      title: 'Four places Spine departs from the crowd',
      lead: 'These are the choices worth arguing about. Each one costs something, and the cost is written down here too.',
      decisions: [
        {
          title: 'The specification is the product, not the documentation',
          desc: 'Spine writes the specification first and implements second; the conformance suite exists to prove the specification right, not to prove the code runs. The consequence is that behaviour is defined independently of any language, and a second implementation can be checked for equivalence.',
          cost: 'The cost is speed. Most engines on the market ship features far faster because they never have to settle a specification first.',
        },
        {
          title: 'One Agent concept — human and machine are not separate kinds',
          desc: 'Spine has no "user task" and "service task" as distinct types. There is a Task and a reference to an Agent. A person, a service and a model are all agents; interpreting that reference as concrete execution capacity belongs to the runtime layer.',
          cost: 'In exchange, everything that usually rides along with a "human task" concept elsewhere — forms, work queues, permissions, delegation — Spine does not hand you. You build it, or you wait for Vista.',
        },
        {
          title: 'The core does not own your storage',
          desc: 'Reading events, writing results, claiming tasks and applying outcomes are all replaceable boundaries. The core defines semantics; whether it runs on Postgres, Kafka or a queue you already operate is your decision. For an insurer with existing infrastructure and audit constraints, that matters.',
          cost: 'The cost is that there is no install-and-run path. Engines that ship their own storage layer get you started far more quickly.',
        },
        {
          title: 'Process versioning is a first-class primitive',
          desc: 'Every Flow has an exact versioned identity, and a Process is pinned to the version it started on. A process already in flight never changes behaviour mid-run because somebody edited the definition. For insurance contracts that live for years, this is not a detail.',
          cost: 'In exchange there is no hot-patching a process that is running wrong. Fixing it goes through recovery, not through editing the definition.',
        },
      ],
    },
  ],

  comparison: {
    id: 'comparison',
    eyebrow: 'Comparison',
    title: 'Where Spine sits in the market',
    lead: 'There is no tick-box table here. Those tables always favour whoever drew them, and in this case it would favour us absurdly: all four products below run in production at serious scale today, and Spine does not.',
    items: [
      {
        name: 'Temporal',
        kind: 'Durable execution',
        strength:
          'You write the process as ordinary code in your language and the engine guarantees it runs to completion even when machines die. Battle-tested at very large scale, with SDKs across many languages. If you need an orchestration engine today, this is the sensible default.',
        diff:
          'Temporal gets determinism by replaying event history, so workflow code must obey particular constraints and changing a workflow version is a well-known sore point. Spine takes the other road: the process is data rather than code, and determinism comes from narrowly restricting what the data-transformation step is allowed to do.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, model-driven',
        strength:
          'Standard BPMN, a visual modeller that business people can actually read, and a mature human-task story — forms, work queues and permissions all ship with it. This is the closest competitor for an insurance problem.',
        diff:
          'Camunda draws a firm line between user tasks and service tasks; Spine deliberately does not. Camunda hands you a great deal that works immediately; Spine hands you a smaller model and a core that stays out of your infrastructure. If what you need is forms and work queues by next month, Camunda has them and Spine does not.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Microservice orchestration',
        strength:
          'Processes described as JSON, well suited to stitching services into a business flow. Lighter than BPMN, quick to start with, and available commercially with an operations UI.',
        diff:
          'It shares the "process as data" idea with Spine. The difference is emphasis: Spine leans on immutable versioned identity and replaceable boundaries, while Conductor leans on operational convenience for a fleet of microservices.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Serverless state machines',
        strength:
          'Nothing to operate, deep integration with the rest of AWS, priced per state transition. If your systems already live entirely inside AWS, this is the path of least friction.',
        diff:
          'The trade is hard vendor coupling. For an insurance core running on-premise or hybrid, most of the value evaporates. Spine treats where it runs as your decision.',
      },
      {
        name: 'Airflow, Dagster, Prefect',
        kind: 'Data orchestration — a different category',
        strength:
          'Excellent for scheduled data pipelines: dependencies between steps, backfills, run monitoring.',
        diff:
          'Listed here to prevent a bad comparison. They solve "run these things in the right order on a schedule", not "a business process that lives for days, involves people, and needs approvals". Do not pick this family for Spine’s problem, or the reverse.',
      },
    ],
  },

  fit: {
    id: 'fit',
    eyebrow: 'Straight assessment',
    title: 'When it fits, and when it does not',
    good: {
      title: 'Spine is worth considering if',
      items: [
        'Your processes mix people, machines and AI, and you would rather those not be three different mechanisms.',
        'You are constrained to run on infrastructure you already have, or you must be able to audit where data sits.',
        'Processes live for years and you need certainty that a case opened this year will not change behaviour because of next year’s update.',
        'You value having a specification you can read over having a product with more features.',
      ],
    },
    bad: {
      title: 'Do not pick Spine if',
      items: [
        'You need to be in production this quarter. Spine is not ready, and saying otherwise would be dishonest.',
        'You need forms, work queues and an admin UI out of the box. Camunda has them; Spine does not.',
        'Your team writes Java, Go or Python and needs an SDK for it. There is one implementation today, in Rust.',
        'You need a community, a plugin ecosystem, or a vendor you can call at two in the morning.',
      ],
    },
  },

  status: {
    id: 'status',
    eyebrow: 'Status',
    title: 'Where Spine actually stands',
    body: [
      'The V1 specification has settled most of the core semantics and there is a Rust implementation that runs end to end with a passing test suite. But V1 is **not yet implementation-ready**: parts of the specification are still being corrected because implementing it keeps surfacing contradictions.',
      'Put plainly: Spine today is a carefully considered design plus a working skeleton that tests the design, not a product to put into operation. Nexus is the only part of BENOVA that already runs on a live Ingenium system.',
      'If you operate an insurance core and this model seems worth arguing about, the most useful conversation right now is about the design — where we have it wrong, and where you have already hit this in practice.',
    ],
  },

  cta: {
    title: 'Argue about the design',
    lead: 'We want to hear from people who actually operate an insurance core, especially about the places you think this model breaks.',
    label: 'Book a 30-minute call',
    subject: 'Binean Engine - Design conversation',
    back: 'See the whole BENOVA ecosystem',
  },
};
