# ☁️ ING on Cloud

---

## 📝 Introduction

The **Ingenium Modernization** project at Sun Life Vietnam is a challenging yet highly successful digital transformation journey, migrating the Ingenium system to the cloud in less than a year (including the POC phase). This process required close collaboration, an innovative mindset, and strong determination from the entire project team.

> ⚡ **Important Note:** Deploying Ingenium on the cloud is the **strategic starting point for the Nova project**. In particular, migrating the entire system from AIX to Linux is a **mandatory requirement** if your organization wants to apply Nova in official operating environments. This is a key technical foundation for comprehensive modernization with Nova.

**Key migration tasks:**
- Building a new connection layer between Ingenium and ActiveMQ (replacing the unsupported IBM MQ/CICS)
- Migrating Ingenium from NetExpress to Visual Cobol
- Migrating Ingenium and related applications from AIX to Linux, then to the cloud
- Migrating PathFinder from WebSphere to JBoss (as WebSphere is no longer updated)
- Migrating PathFinder from HTTP to JSP

Throughout the migration process, the team faced many technological, operational, and integration challenges. However, with a proactive, creative spirit and relentless effort, the project achieved the goal of "moving Ingenium to the cloud" in a record time of just over 9 months, laying a solid foundation for the company's next development steps.

---

## 🚀 Motivation for Cloud Migration

Migrating the Ingenium system to the cloud stems from both strategic and practical motivations:

- **Optimized operational costs:** Cloud enables organizations to shift to a flexible pay-as-you-go model, minimizing upfront investment and optimizing long-term IT budgets.
- **Flexible scalability:** Cloud allows rapid scaling up or down of resources to meet business demands without being limited by physical infrastructure.
- **Accelerated innovation and deployment:** Cloud provides automated deployment environments, supporting DevOps and CI/CD, shortening development, testing, and time-to-market for new products.
- **Enhanced security and compliance:** Modern cloud platforms offer multiple layers of security, monitoring, access control, and compliance with international standards, giving organizations greater peace of mind regarding data safety.
- **Reduced dependence on legacy technologies:** Cloud migration is an opportunity to gradually eliminate outdated components (AIX, MQ, WebSphere...), reducing personnel risks and vendor lock-in.
- **Support for digital transformation and ecosystem integration:** Cloud provides a solid foundation for integrating digital services, expanding partner ecosystems, enabling multi-channel connections, and quickly responding to future digital transformation needs.

> **In summary:** Cloud migration is not just a technology trend but a strategic move to enhance competitiveness, optimize operations, and prepare for sustainable growth.

---

## 🏗️ Overall Cloud Architecture

The deployment model of Ingenium (ING) on a modern cloud platform is designed to maximize the benefits of scalability, flexibility, automation, and security that cloud infrastructure offers. For legal and professional reasons, this document only presents general principles and architecture, without going into project-specific details.

Overall, all critical servers and services such as MQ, Ingenium, PathFinder, and Db2 have been migrated to the cloud and deployed on Linux. Choosing Linux as the primary operating system optimizes performance, increases stability, reduces licensing costs, and leverages the full range of modern cloud tools and services.

The model where all servers run on Linux is a crucial starting point for this project, completely eliminating dependence on the outdated and unsupported AIX operating system. Migrating to Linux not only optimizes performance and reduces licensing costs but also opens up the ability to fully leverage modern cloud technologies and tools, providing a solid foundation for innovation and sustainable development.

All components are organized flexibly, supporting automated deployment (CI/CD), intelligent monitoring, and easy integration with new digital services in the future. This architecture not only ensures stable and cost-effective operations but also lays a strong foundation for ongoing innovation and sustainable growth.

---

## 🌟 Key Benefits of the Cloud Model

Migrating Ingenium to the cloud brings many outstanding advantages compared to the traditional on-premise model:

- **Flexible scalability:** Easily scale resources up or down according to actual needs without additional physical infrastructure investment.
- **Optimized operational costs:** Pay only for the resources actually used, minimizing waste and optimizing the IT budget.
- **Enhanced security and compliance:** Multiple layers of security, access control, continuous monitoring, and support for compliance with international information security standards.
- **Automation and operational optimization:** Supports automated deployment (CI/CD), intelligent monitoring, autoscaling, backup, and disaster recovery.
- **Support for innovation and digital transformation:** Provides a solid foundation for integrating digital services, developing new products, enabling multi-channel connections, and expanding the partner ecosystem.

---

## ⚠️ Limitations & Development Directions

While migrating Ingenium to the cloud brings many benefits, there are also some limitations and requirements to consider:

- **Requirement to migrate to Linux:** Nova will not support the AIX operating system and will only support Linux for server environments such as ST, AT, PRD, and Windows for development (Dev) environments. Therefore, migrating the entire system from AIX to Linux is a mandatory condition if organizations want to apply Nova in official operating environments.

- **Development environment requirement:** The project requires the use of **Visual Studio Code (VS Code)** as the primary development environment, offering a more modern and efficient experience compared to Eclipse. At this stage, other IDEs are not supported.

- **DevOps tool limitation:** Currently, there is no dedicated DevOps management tool for Ingenium; all DevOps processes must be performed manually or semi-manually. This limitation is the main motivation for the **Nexus phase** of the project, which aims to deliver a comprehensive VS Code extension that fully supports Continuous Delivery for Ingenium, streamlining and automating the DevOps workflow.

- **Cloud is an option, not mandatory:** While cloud migration brings significant value, it is not a strict requirement. Organizations can fully deploy the Nova model on on-premise infrastructure if it aligns with their strategy and actual conditions. Nova is designed to flexibly support both cloud and on-premise models.

- **Operational management and cost optimization:** When operating on the cloud, organizations need to establish resource management processes, monitor costs, and optimize operations to avoid waste and ensure investment efficiency.

- **Ensuring safety, security, and compliance:** Migrating to the cloud requires organizations to pay close attention to security, legal compliance, and customer data protection, especially in the financial and insurance sectors.

- **Step-by-step migration roadmap:** To minimize risks, organizations should develop a phased migration roadmap, thoroughly testing each stage before full-scale production deployment.

- **Web technology limitation:** After migrating PathFinder (PF) to JSP as part of the Ingenium on Cloud project, some performance issues have been observed—specifically, the need to re-render entire elements during updates, which can impact responsiveness and efficiency. Additionally, the continued reliance on legacy JSP technology presents challenges for long-term maintainability and scalability. Addressing these limitations will be a key focus for future enhancement phases.

---

## 🛡️ Scope of Support & Licensing Notice

This project **does not provide source code, licenses, or any resources directly related to the Ingenium system**. We only offer a third-party solution that supports integration and gradual upgrading of the existing Ingenium system, step by step transitioning to a new, modern, and more powerful insurance core.

Migrating Ingenium from AIX to Linux can be performed through the original vendor or by contacting us – a team with proven experience in similar migration projects. We are committed to providing optimal consulting, reasonable costs, and solutions tailored to your organization's actual needs.

> **Note:** This project only provides integration and migration solutions and does not interfere with the copyright or source code of the original system.

---

## 📄 Legal Disclaimer

This document is provided for reference and consulting purposes only.  
All trademarks, product names, and company names mentioned herein are the property of their respective owners.  
This project is not affiliated with, endorsed by, or sponsored by Sun Life, DXC Technology, or any other third party mentioned.  
No source code, license, or proprietary information of Ingenium or any third-party system is provided or distributed as part of this documentation or related services.

By using or referencing this document, you acknowledge and agree to comply with all applicable intellectual property laws and the terms stated above.

---


