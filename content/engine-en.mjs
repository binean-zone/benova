/**
 * Binean Engine page — English.
 *
 * Engine is a multi-agent orchestration engine, NOT written for any one
 * industry. BENOVA is its first application, not its scope. Every sentence
 * here has to read correctly to someone outside insurance.
 *
 * Written at the architecture and design-decision level. Specification detail
 * from the spine project stays out of here: that repository is proprietary.
 */
export default {
  seo: {
    title: 'Binean Engine — A coordinating brain for humans, machines and AI | Binean',
    description:
      'Binean Engine (BE) is a multi-agent orchestration engine: a person, a service and an AI agent are one and the same Agent concept. The architecture, the design decisions and what each one costs, and a straight comparison with Temporal, Camunda, Conductor, Step Functions and the AI agent frameworks.',
    keywords:
      'Binean Engine, brain engine, multi-agent orchestration, workflow orchestration, human in the loop, AI agent orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, LangGraph, event-driven, Spine',
  },

  hero: {
    back: 'BENOVA',
    eyebrow: 'BE — Binean Engine, and Brain Engine',
    title: 'A coordinating brain for humans, machines and AI',
    lead: 'Binean Engine is not built for one industry. It is an orchestration engine in which a person, a service and an AI agent are the same concept. BENOVA — insurance core modernization — is its first application, not its boundary. This page covers what Engine is, where it departs from the market, and what it cannot do yet.',
  },

  sections: [
    {
      id: 'problem',
      eyebrow: 'The problem',
      title: 'Three kinds of executor, one process, no shared mechanism',
      body: [
        'Most work worth orchestrating has the same shape: some steps a machine finishes in milliseconds, some steps a person has to read and decide on, and a growing number handed to a model. Claims handling, credit approval, content moderation, incident response, hiring — underneath, each is a chain of work that humans, machines and AI take turns on, stretched across hours or months.',
        'Write that as a sequence of function calls and it breaks at the first human step: a running process cannot sit and wait three days. Write it as message queues and every step has to carry its own state, its own retries, its own record of what already ran — and nobody can see the shape of the process any more.',
        'This is what orchestration engines exist to solve. But nearly all of them solve it by splitting the world up: a "service task" is one kind, a "user task" is another, and AI agents now get bolted on as a third. Each kind gets its own lifecycle, its own way of being handed work, its own way of reporting back. Over time, most of the system\'s complexity ends up in the seams between those three.',
        'Engine starts from the opposite assumption: the three were never different. The work to hand out, the capability needed to do it, and the result that comes back have the same shape no matter who performs it. What differs is latency and how you reach them — and that belongs to the runtime layer, not to the model.',
      ],
    },
    {
      id: 'brain',
      eyebrow: 'Why brain engine',
      title: 'BE reads as Binean Engine, and also as Brain Engine',
      lead: 'The name is not just wordplay. It describes how the system is actually divided.',
      body: [
        'A brain does not care whether a signal ends up at a hand, at the vocal cords, or at some smooth muscle. Its job is to know where it is in a chain of action, decide what happens next, send the signal, and wait for what comes back. Engine is built in that shape.',
      ],
      glossary: [
        {
          term: 'Cortex — Basal',
          desc: 'The single place allowed to decide the next step. No executor advances a process on its own, so process state always has exactly one source of truth.',
        },
        {
          term: 'Spinal cord — Spine',
          desc: 'The conduction model: work goes out, outcomes come back, event-driven and in order. This is the most carefully specified part of Engine and its core.',
        },
        {
          term: 'Reflex',
          desc: 'The mechanical work that never needs to reach the brain: conditional branching, reshaping data between steps, invoking a sub-process as a capability.',
        },
        {
          term: 'Limbs — Agent',
          desc: 'Whatever executes. A person, a service, or a model. To the brain all three are the same kind of output: hand out work, wait, take the result.',
        },
      ],
      after: [
        'The important part of the metaphor is what it does **not** claim: a brain does not describe how the hand grips. Neither does Engine — it defines what work must happen and in what order, not how a service reaches a database, how a model gets called, or how a person signs into a form.',
      ],
    },
    {
      id: 'model',
      eyebrow: 'The model',
      title: 'Five nouns, and a single authority',
      lead: 'Engine deliberately keeps the concept count as small as it can. Almost everything in the system reduces to these five nouns.',
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
          desc: 'Whatever executes a Task. Engine has exactly one Agent concept and does not classify it — see below; this is a design decision, not an omission.',
        },
      ],
      after: [
        'Coordinating all of that is **Basal**. It is not a passive router waiting to be called: Basal drives the loop — it claims a batch of events, decides what happens next for each Process, and hands the whole result to the storage layer as one unit. At any moment a Process has exactly one Basal with authority over it.',
        'Because a Skill is described by schema rather than by kind of executor, a step can change who performs it without a single word of the process definition changing. Work a specialist does by hand today, a model takes over in six months, and a service absorbs a year later — all three times it is the same Task requiring the same Skill.',
      ],
    },
    {
      id: 'decisions',
      eyebrow: 'Design decisions',
      title: 'Four places Engine departs from the crowd',
      lead: 'These are the choices worth arguing about. Each one costs something, and the cost is written down here too.',
      decisions: [
        {
          title: 'The specification is the product, not the documentation',
          desc: 'Engine writes the specification first and implements second; the conformance suite exists to prove the specification right, not to prove the code runs. The consequence is that behaviour is defined independently of any language, and a second implementation can be checked for equivalence.',
          cost: 'The cost is speed. Most engines on the market ship features far faster because they never have to settle a specification first.',
        },
        {
          title: 'One Agent concept — human, machine and AI are not separate kinds',
          desc: 'Engine has no "user task", "service task" and "agent step" as three distinct types. There is a Task and a reference to an Agent. A person, a service and a model are all agents; interpreting that reference as concrete execution capacity belongs to the runtime layer. This is the largest departure from the market, and the easiest one to object to.',
          cost: 'In exchange, everything that usually rides along with a "human task" concept elsewhere — forms, work queues, permissions, delegation — Engine does not hand you. You build it a layer up; inside BENOVA, that is Vista’s job.',
        },
        {
          title: 'The core does not own your storage',
          desc: 'Reading events, writing results, claiming tasks and applying outcomes are all replaceable boundaries. The core defines semantics; whether it runs on Postgres, Kafka or a queue you already operate is your decision. For an organisation with existing infrastructure and rules about where data is allowed to sit, that matters.',
          cost: 'The cost is that there is no install-and-run path. Engines that ship their own storage layer get you started far more quickly.',
        },
        {
          title: 'Process versioning is a first-class primitive',
          desc: 'Every Flow has an exact versioned identity, and a Process is pinned to the version it started on. A process already in flight never changes behaviour mid-run because somebody edited the definition. For processes that live for months or years — a loan file, a contract, an investigation — this is not a detail.',
          cost: 'In exchange there is no hot-patching a process that is running wrong. Fixing it goes through recovery, not through editing the definition.',
        },
      ],
    },
    {
      id: 'applications',
      eyebrow: 'Applications',
      title: 'BENOVA is Engine’s first application, not its scope',
      body: [
        'BENOVA uses Engine to modernize the Ingenium insurance core: Engine orchestrates, Nexus operates, Orbit opens the core as APIs, Vista handles the human-facing side, and AI Agent speaks Agent Client Protocol. That is one way to assemble it — not the only one.',
        'Insurance was chosen as the first application because it forces Engine to be right about several hard things at once: processes that live for years, multi-level approvals, strict audit constraints, and infrastructure that cannot be replaced in one move. An engine that survives there finds most other places lighter.',
        'Below are the settings with the same problem shape. To be clear: this is design scope, not a customer list — BENOVA is the only one being built.',
      ],
      glossary: [
        {
          term: 'Business processes with approvals',
          desc: 'Claims, credit, procurement, hiring. Machines assemble the file, a person decides, systems carry out the result — and the whole thing has to leave an auditable trail.',
        },
        {
          term: 'AI in the loop',
          desc: 'A model proposes, a human approves or rejects, and that judgement flows back as data. It needs a place to pause for a person without keeping a process alive for the whole wait.',
        },
        {
          term: 'Operations and incident response',
          desc: 'An alert starts a process, part of it runs automatically, and part of it stops for human confirmation before anything touches a live system.',
        },
        {
          term: 'Coordinating several AI agents',
          desc: 'Multiple agents pursuing one goal. You need to know who holds which piece of work, what is finished, and who is allowed to decide the next step — rather than letting agents call each other.',
        },
      ],
    },
  ],

  comparison: {
    id: 'comparison',
    eyebrow: 'Comparison',
    title: 'Where Engine sits in the market',
    lead: 'There is no tick-box table here. Those tables always favour whoever drew them, and in this case it would favour us absurdly: the products below all run in production at serious scale today, and Engine does not.',
    items: [
      {
        name: 'Temporal',
        kind: 'Durable execution',
        strength:
          'You write the process as ordinary code in your language and the engine guarantees it runs to completion even when machines die. Battle-tested at very large scale, with SDKs across many languages. If you need an orchestration engine today, this is the sensible default.',
        diff:
          'Temporal gets determinism by replaying event history, so workflow code must obey particular constraints and changing a workflow version is a well-known sore point. Engine takes the other road: the process is data rather than code, and determinism comes from narrowly restricting what the data-transformation step is allowed to do.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, model-driven',
        strength:
          'Standard BPMN, a visual modeller that business people can actually read, and a mature human-task story — forms, work queues and permissions all ship with it. Wherever people take part in the process, this is the closest competitor.',
        diff:
          'Camunda draws a firm line between user tasks and service tasks; Engine deliberately does not. Camunda hands you a great deal that works immediately; Engine hands you a smaller model and a core that stays out of your infrastructure. If what you need is forms and work queues by next month, Camunda has them and Engine does not.',
      },
      {
        name: 'LangGraph, CrewAI, AutoGen',
        kind: 'AI agent frameworks',
        strength:
          'Very fast to build agent loops with: tool calling, role splitting, several agents talking to each other, and the whole ecosystem around language models. If your problem fits inside one working session of a few minutes, this is where to start.',
        diff:
          'This family orchestrates within a single program run; waiting three days for a human approval is something you bolt on yourself. Engine inverts that: waiting on a person is the ordinary case, and an AI agent is simply one Agent among them — handed work the same way, reporting back the same way, timed out the same way as any other.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Microservice orchestration',
        strength:
          'Processes described as JSON, well suited to stitching services into a business flow. Lighter than BPMN, quick to start with, and available commercially with an operations UI.',
        diff:
          'It shares the "process as data" idea with Engine. The difference is emphasis: Engine leans on immutable versioned identity and replaceable boundaries, while Conductor leans on operational convenience for a fleet of microservices.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Serverless state machines',
        strength:
          'Nothing to operate, deep integration with the rest of AWS, priced per state transition. If your systems already live entirely inside AWS, this is the path of least friction.',
        diff:
          'The trade is hard vendor coupling. For on-premise or hybrid systems — and for organisations bound by rules about where data may sit — most of the value evaporates. Engine treats where it runs as your decision.',
      },
      {
        name: 'Airflow, Dagster, Prefect',
        kind: 'Data orchestration — a different category',
        strength:
          'Excellent for scheduled data pipelines: dependencies between steps, backfills, run monitoring.',
        diff:
          'Listed here to prevent a bad comparison. They solve "run these things in the right order on a schedule", not "a process that lives for days, involves people, and needs approvals". Do not pick this family for Engine’s problem, or the reverse.',
      },
    ],
  },

  fit: {
    id: 'fit',
    eyebrow: 'Straight assessment',
    title: 'When it fits, and when it does not',
    good: {
      title: 'Engine is worth considering if',
      items: [
        'Your processes mix people, machines and AI, and you would rather those not be three different mechanisms.',
        'Processes live for hours to months: there is waiting, there are approvals, and things have to be retried.',
        'You are constrained to run on infrastructure you already have, or you must be able to audit where data sits.',
        'You need certainty that a run already started will not change behaviour because of a later update to the process.',
        'You value having a specification you can read over having a product with more features.',
      ],
    },
    bad: {
      title: 'Do not pick Engine if',
      items: [
        'You need to be in production this quarter. Engine is not ready, and saying otherwise would be dishonest.',
        'Your process is machine calling machine and finishes in seconds. A queue or a direct call is enough; an engine only adds a layer.',
        'You need forms, work queues and an admin UI out of the box. Camunda has them; Engine does not.',
        'Your team writes Java, Go or Python and needs an SDK for it. There is one implementation today, in Rust.',
        'You need a community, a plugin ecosystem, or a vendor you can call at two in the morning.',
      ],
    },
  },

  status: {
    id: 'status',
    eyebrow: 'Status',
    title: 'Where Engine actually stands',
    body: [
      'Spine’s V1 specification has settled most of the core semantics and there is a Rust implementation that runs end to end with a passing test suite. But V1 is **not yet implementation-ready**: parts of the specification are still being corrected because implementing it keeps surfacing contradictions.',
      'Put plainly: Engine today is a carefully considered design plus a working skeleton that tests the design, not a product to put into operation. Inside BENOVA it is Nexus that already runs on a live Ingenium system; Engine does not.',
      'If you run processes where people, machines and AI all take part, and this model seems worth arguing about, the most useful conversation right now is about the design — where we have it wrong, and where you have already hit this in practice.',
    ],
  },

  cta: {
    title: 'Argue about the design',
    lead: 'We want to hear from people who actually operate processes like these, especially about the places you think this model breaks.',
    label: 'Book a 30-minute call',
    subject: 'Binean Engine - Design conversation',
    back: 'See BENOVA — Engine’s first application',
  },
};
