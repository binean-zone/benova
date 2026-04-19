---
sidebar_position: 3
---

# ☁️ ING on Cloud

---

## Introduction

The **Ingenium Modernization** project at Sun Life Vietnam is a challenging yet highly successful digital transformation journey — migrating the Ingenium system to the cloud in less than a year (including the POC phase). This process required close collaboration, an innovative mindset, and strong determination from the entire project team.

> ⚡ **Important:** Deploying Ingenium on the cloud is the **strategic starting point for the Nova project**. Migrating the entire system from AIX to Linux is a **mandatory prerequisite** for organizations that want to adopt Nova in production environments. This is the key technical foundation for comprehensive modernization with Nova.

**Key migration tasks:**
- Building a new connection layer between Ingenium and ActiveMQ (replacing the unsupported IBM MQ/CICS)
- Migrating Ingenium from NetExpress to Visual COBOL
- Migrating Ingenium and related applications from AIX to Linux, then to the cloud
- Migrating PathFinder from WebSphere to JBoss (as WebSphere is no longer updated)
- Migrating PathFinder from HTTP to JSP

Throughout the migration, the team overcame numerous technological, operational, and integration challenges. With a proactive, creative spirit and relentless effort, the project achieved the goal of moving Ingenium to the cloud in just over 9 months — laying a solid foundation for the next development steps.

---

## Motivation for Cloud Migration

Migrating the Ingenium system to the cloud was driven by both strategic and practical motivations:

- **Optimized operational costs** — Shift to a flexible pay-as-you-go model, minimizing upfront investment and optimizing long-term IT budgets
- **Flexible scalability** — Rapidly scale resources up or down to meet business demands without physical infrastructure constraints
- **Accelerated innovation and deployment** — Automated deployment environments supporting DevOps and CI/CD, shortening development, testing, and time-to-market cycles
- **Enhanced security and compliance** — Multiple layers of security, monitoring, access control, and compliance with international standards
- **Reduced dependence on legacy technologies** — Gradually eliminate outdated components (AIX, MQ, WebSphere...), reducing personnel risks and vendor lock-in
- **Digital transformation and ecosystem integration** — A solid foundation for integrating digital services, expanding partner ecosystems, and enabling multi-channel connections

> **In summary:** Cloud migration is not just a technology trend — it is a strategic move to enhance competitiveness, optimize operations, and prepare for sustainable growth.

---

## Overall Cloud Architecture

The deployment model of Ingenium on a modern cloud platform is designed to maximize scalability, flexibility, automation, and security. For legal and professional reasons, this document presents only general principles and architecture without project-specific details.

All critical servers and services — MQ, Ingenium, PathFinder, and Db2 — have been migrated to the cloud and deployed on Linux. Choosing Linux as the primary operating system optimizes performance, increases stability, reduces licensing costs, and unlocks the full range of modern cloud tools and services.

Running all servers on Linux completely eliminates dependence on the outdated and unsupported AIX operating system. This migration not only optimizes performance and reduces costs but also opens up the ability to fully leverage modern cloud technologies — providing a solid foundation for innovation and sustainable development.

All components are organized flexibly, supporting automated deployment (CI/CD), intelligent monitoring, and easy integration with new digital services in the future.

---

## Key Benefits of the Cloud Model

- **Flexible scalability** — Easily scale resources according to actual needs without additional physical infrastructure investment
- **Optimized operational costs** — Pay only for resources actually used, minimizing waste
- **Enhanced security and compliance** — Multiple layers of security, access control, continuous monitoring, and compliance support
- **Automation and operational optimization** — CI/CD, intelligent monitoring, autoscaling, backup, and disaster recovery
- **Innovation and digital transformation** — A solid foundation for integrating digital services, developing new products, and expanding ecosystems

---

## Limitations & Future Directions

While migrating Ingenium to the cloud brings many benefits, there are important considerations:

- **Linux migration is mandatory** — Nova only supports Linux for server environments (ST, AT, PRD) and Windows for development (Dev). Migrating from AIX to Linux is a prerequisite for adopting Nova.

- **VS Code as primary IDE** — The project requires Visual Studio Code as the primary development environment, offering a more modern experience compared to Eclipse. Other IDEs are not currently supported.

- **No dedicated DevOps tooling yet** — At this stage, all DevOps processes must be performed manually or semi-manually. This limitation is the primary motivation for the **Nexus phase**, which aims to deliver a comprehensive VS Code extension that fully supports Continuous Delivery for Ingenium.

- **Cloud is optional** — While cloud migration brings significant value, it is not a strict requirement. Organizations can deploy the Nova model on on-premise infrastructure if it aligns with their strategy. Nova is designed to support both cloud and on-premise models.

- **Cost management** — Operating on the cloud requires proper resource management processes, cost monitoring, and optimization to avoid waste.

- **Security and compliance** — Cloud migration requires close attention to security, legal compliance, and customer data protection — especially in the financial and insurance sectors.

- **Phased migration recommended** — To minimize risks, organizations should develop a phased roadmap, thoroughly testing each stage before full-scale production deployment.

- **JSP performance limitations** — After migrating PathFinder to JSP, some performance issues have been observed — specifically, the need to re-render entire elements during updates. The continued reliance on legacy JSP technology also presents challenges for long-term maintainability. Addressing these limitations will be a focus for future enhancement phases.

---

## Scope of Support & Licensing

This project **does not provide source code, licenses, or any resources directly related to the Ingenium system**. We only offer a third-party solution that supports integration and gradual upgrading of the existing Ingenium system, step by step transitioning to a new, modern, and more powerful insurance core.

Migrating Ingenium from AIX to Linux can be performed through the original vendor or by contacting us — a team with proven experience in similar migration projects. We are committed to providing optimal consulting, reasonable costs, and solutions tailored to your organization's actual needs.

> **Note:** This project only provides integration and migration solutions and does not interfere with the copyright or source code of the original system.

---

## Legal Disclaimer

This document is provided for reference and consulting purposes only.
All trademarks, product names, and company names mentioned herein are the property of their respective owners.
This project is not affiliated with, endorsed by, or sponsored by Sun Life, DXC Technology, or any other third party mentioned.
No source code, license, or proprietary information of Ingenium or any third-party system is provided or distributed as part of this documentation or related services.

By using or referencing this document, you acknowledge and agree to comply with all applicable intellectual property laws and the terms stated above.
