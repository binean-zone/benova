# ☁️ Ingenium on the Cloud

> **"A journey of a thousand miles begins with a single step — and Sun Life Vietnam proved that the first step is not the hardest."**

---

## A Real Story: Sun Life Vietnam

**9 months. One team. From zero to production cloud.**

Sun Life Vietnam successfully completed the migration of Ingenium to AWS. This was not a proof-of-concept or a pilot — this is a live core insurance system serving millions of customers every day.

### What Was Accomplished

| Item | Details |
|------|---------|
| **Infrastructure provisioning** | EC2 instances optimized for Ingenium workloads |
| **Ingenium migration** | Full data, configuration, and customization migration |
| **Network architecture** | VPC, security groups, private subnets for DB2 |
| **COBOL compilation pipeline** | CI/CD for the entire Ingenium codebase |
| **Credential management** | Nexus Vault integrated with AWS Secrets Manager |
| **Monitoring and alerting** | CloudWatch dashboards with Ingenium-specific metrics |
| **Backup strategy** | Automated snapshots with retention policies |
| **DR planning** | Multi-AZ deployment for high availability |

---

## 🌩️ Why Move to the Cloud?

These are the 6 reasons that Sun Life Vietnam's leadership used to secure board approval:

### 1. 💰 Predictable Cost
Replace large capital expenditure (CapEx) on hardware with pay-as-you-go operating expense (OpEx). Infrastructure costs become a variable tied to business volume, not a fixed burden.

### 2. 🚀 Elastic Scale
When policy renewal season arrives, servers can scale up in minutes — not the weeks it takes to procure hardware. Scale back down when the peak passes and avoid paying for idle capacity.

### 3. 🛡️ Enterprise-Grade Security
AWS infrastructure holds dozens of security certifications (ISO 27001, SOC 2, PCI DSS). Your IT team focuses on application-level security instead of physical maintenance.

### 4. 🔄 Disaster Recovery
Multi-AZ deployment means a datacenter failure does not impact the system. RTO drops from hours to minutes.

### 5. 🛠️ Focus on the Business
No team time spent on hardware maintenance, datacenter operations, or server room management. All IT capacity redirects to feature delivery and business enablement.

### 6. 🌏 Foundation for Digital Transformation
The cloud is the prerequisite for the next step — API economy, digital distribution channels, mobile apps. Without cloud, there is no digital future.

---

## 🏗️ Cloud Architecture

```
Internet
    │
    ▼
┌───────────────────────────────────────────────────────┐
│                    AWS Cloud                          │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │                Public Subnet                     │ │
│  │  ┌──────────────┐    ┌────────────────────────┐  │ │
│  │  │   ALB / WAF  │    │   Bastion Host (ops)   │  │ │
│  │  └──────┬───────┘    └────────────────────────┘  │ │
│  └─────────┼────────────────────────────────────────┘ │
│            │                                          │
│  ┌─────────▼────────────────────────────────────────┐ │
│  │               Private Subnet                     │ │
│  │  ┌───────────────────┐  ┌───────────────────┐    │ │
│  │  │  App Server (EC2) │  │  isman Server     │    │ │
│  │  │  Ingenium + COBOL │  │  (Nexus)          │    │ │
│  │  └──────────┬────────┘  └──────────────────┘    │ │
│  │             │                                    │ │
│  │  ┌──────────▼────────────────────────────────┐  │ │
│  │  │          DB Subnet                         │  │ │
│  │  │  ┌──────────────────┐                     │  │ │
│  │  │  │  DB2 (RDS/EC2)   │                     │  │ │
│  │  │  └──────────────────┘                     │  │ │
│  │  └────────────────────────────────────────────┘  │ │
│  └──────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

---

## 💡 Outcomes After Migration

After 12 months of cloud operations, Sun Life Vietnam reported:

- **99.95% uptime** — exceeding SLA commitments to customers
- **40% reduction** in infrastructure costs versus on-premise
- **Deployment time** from 2 days down to 2 hours
- **Disaster recovery** from "no plan" to "15-minute RTO"

---

## ⚠️ Important Notes

Experience from the Sun Life Vietnam project established several firm requirements:

### Mandatory Requirements
- **Linux is required**: Ingenium on cloud runs on Linux (Amazon Linux 2 / Ubuntu). Windows server is not supported for cloud production environments.
- **VS Code is the standard tool**: The development team needs VS Code with the Nexus Extension to connect to cloud environments via Remote SSH.

### Recommendations
- Start with a non-production environment (DEV/TEST) before migrating PROD
- Run on-premise and cloud in parallel for at least 3 months before cutover
- Train IT staff on AWS fundamentals in parallel with migration work

---

## 🛣️ Four-Phase Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| **1. Foundation** | Month 1–2 | AWS account setup, VPC, IAM, baseline security controls |
| **2. Migration** | Month 3–5 | Migrate Ingenium DEV/TEST, performance testing, optimization |
| **3. Production** | Month 6–8 | Migrate PROD with dual-run, comprehensive validation |
| **4. Optimization** | Month 9+ | Cost optimization, performance tuning, full automation |

---

## 🤝 Nexus Support Scope

Nexus provides tooling and consulting for:

- ✅ Cloud architecture design for Ingenium workloads
- ✅ Nexus toolchain setup on cloud infrastructure
- ✅ COBOL compilation pipeline on CI/CD
- ✅ Monitoring and alerting for Ingenium
- ✅ Security best practices and audit support
- ✅ IT team training

---

## 📄 Legal Notice

This document is provided for informational and advisory purposes only. All trademarks are the property of their respective owners. This project has no affiliation with DXC Technology, Sun Life, or any other third parties mentioned herein.
