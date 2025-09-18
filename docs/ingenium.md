# 🏢 Ingenium – Enterprise Insurance Core System

**Ingenium** is a core system designed for the insurance industry, supporting comprehensive management of business processes: request intake, contract processing, customer data management, benefit payments, and after-sales operations. Built to handle complex business requirements, Ingenium ensures stability, security, scalability, and compliance with financial and insurance industry standards.

![Ingenium Architecture Diagram](/img/ingenium.png)

**Legend for diagram symbols:**

| Symbol | Meaning |
|:-------:|:--------|
| ![](/img/rx.png) | External systems send/receive requests to PathFinder (PF) via **SOAP TxLife** |
| ![](/img/p1.png) | PF converts requests to binary **MIR** before sending to MQ, receives **MIR** results |
| ![](/img/p2.png) | Queue Worker in Ingenium automatically fetches messages from MQ, processes, and returns results as **MIR** |
| ![](/img/d1.png) | Ingenium has a middleware layer to interact with Db2 via **Embedded SQL** |
| ![](/img/d2.png) | PathFinder (PF) can directly access the Ingenium database when needed |

---

## 🗺️ Architecture Overview
Ingenium is deployed on-premise on the AIX platform, using a Db2 database. The layered architecture separates functions, optimizing maintenance and scalability:

- **Presentation & Integration Layer**: User interface, external system integration.
- **Network Layer**: Coordination and communication between components.
- **Application Layer**: Insurance business logic processing.
- **Data Layer**: Storage and management of business data.

---

## Main Components

## 🌐 PathFinder
* Presentation & Integration Layer: UI Server and integration gateway.
* Developed in Java, deployed on WebSphere HTTP Server (AIX On-premise).
* Highly customizable, easily extended to meet each business's requirements.

## 📦 MQ Server
* Network Layer: Central coordinator and communication hub between components.
* Manages queues (Dispatcher Queue, Input Queue, Output Queue), ensuring sequential and accurate processing.
* Acts as a bridge between PathFinder and Ingenium, using **MIR** messages (binary COBOL Copybook).

## ⚙️ Ingenium
* Application Layer: The "business core" – the center for insurance business logic processing.
* Multiple COBOL modules running on AIX, ensuring high performance and stability.
* Spawns multiple independent queue workers, each actively fetching requests from MQ, processing, and returning results.
* Example modules: XSBUQWK_01, XSBUQWK_D2, XSBUQWK_XX.

## 🗄️ Ingenium Database
* Data Layer: Db2 AIX (On-premise) stores all business data.
* COBOL modules interact via the dbsrce layer, ensuring efficiency and data safety.
* External systems (including PathFinder) can access the database directly when needed.

## 🔗 External Systems
External systems integrate with Ingenium via PathFinder (SOAP TxLife), enabling business data exchange while ensuring safety and industry compliance.

---

## ✨ Key Features
* On-premise deployment: maximum data control and security.
* Layered architecture: easy management, maintenance, and scalability.
* Heavy reliance on IBM ecosystem (WebSphere, MQ, Db2, JDK1.8, Orexx) – many platforms are outdated and unsupported.
* Business core in COBOL: stable and reliable, but limited in extensibility and integration with new technologies.

---

## ✅ Advantages
* Clear layered architecture, easy to control, maintain, and scale even with large business logic.
* High stability and reliability thanks to proven technologies in the financial – insurance sector.
* Effectively handles complex insurance business, supports flexible customization.
* On-premise operation: maximum data security.
* Parallel queue/worker system optimizes performance, handles large transaction volumes.
* Centralized data, easy access control, strict security policies.
* Easy auditing and transaction tracing, meeting internal/industry audit requirements.
* Can integrate with other legacy systems in the enterprise.

---

## ⚠️ Limitations
* On-premise model: difficult to scale quickly, high operational costs.
* Outdated technologies (COBOL, AIX, MQ, JDK1.8, Orexx): scarce human resources, hard to train new staff.
* Limited integration: mainly uses MQ, XML, lacks modern API/REST support.
* Version management, rollback, and automation are still manual, lacking DevOps tools.
* Heavy vendor and IBM ecosystem dependency, hard to proactively upgrade/modernize.
* Difficult to meet digital transformation, multi-channel integration, or new digital service deployment requirements.
* Long-term maintenance is challenging as technology continues to age.

---

## 🚀 Development Directions & Recommendations
* Consider a roadmap for gradual migration to cloud/hybrid platforms to increase scalability and reduce operational costs.
* Gradually modernize, add API/REST support, and enhance integration with the digital ecosystem.
* Invest in automation (DevOps, CI/CD) to improve version management, rollback, and deployment efficiency.
* Train and transfer new technologies to the operations team, reducing dependence on COBOL/AIX resources.

---

> **Glossary:**
> - **On-premise**: System deployed on the enterprise's physical server infrastructure, not cloud-based.
> - **COBOL**: A long-standing programming language, popular in finance – banking, insurance.
> - **MQ (IBM MQ)**: Middleware message queue system, facilitates communication between components.
> - **SOAP TxLife**: Insurance data exchange standard over SOAP protocol.
> - **AIX**: IBM's UNIX operating system for enterprise servers.
