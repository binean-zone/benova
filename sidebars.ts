import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  benovaSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Transformation Story",
    },
    {
      type: "doc",
      id: "operating_model",
      label: "Operating Model",
    },
    {
      type: "doc",
      id: "investment_case",
      label: "Investment Case",
    },
    {
      type: "doc",
      id: "poc_plan",
      label: "POC Plan",
    },
    {
      type: "doc",
      id: "executive_faq",
      label: "Executive FAQ",
    },
    {
      type: "doc",
      id: "next_steps",
      label: "Next Steps",
    },
    {
      type: "doc",
      id: "commercial_guide",
      label: "Commercial Guide",
    },
    {
      type: "doc",
      id: "risk_governance",
      label: "Risk and Governance",
    },
  ],
};

export default sidebars;
