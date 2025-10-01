# 🏢 Nova

**Nova – Modern Insurance Application Platform**

![Nova Architecture Diagram](/img/nova.png)

---

## 🎯 Objectives

Nova aims to comprehensively modernize the Ingenium insurance core system, ensuring continuous, stable, and secure operations throughout the digital transformation process. The roadmap is planned in clear phases, with each phase representing a solid step forward to minimize risks and optimize resources:

- **Nexus – A Solid Foundation:** Build a robust digital infrastructure and establish intelligent DevOps processes. This foundational step ensures stability, security, and long-term scalability for the entire system.
- **Orbit – The Core of Modernization:** Modernize and optimize the Ingenium core by standardizing its architecture and services. This phase creates a sustainable growth "orbit," propelling the traditional system into the digital age. Specifically, Orbit will transform Ingenium into a REST service, eliminate legacy middleware (like MQ), and begin migrating key functions to Rust.
- **Vista – A Vision for Experience:** Expand our vision by redesigning the entire user experience and external services (SOAP → REST). We are delivering an intuitive, modern, and seamless interface that shapes the strategy for the next generation of products.
- **Apex – The Summit of Innovation:** Reach the pinnacle of innovation by completely re-architecting business logic and data. This phase unlocks limitless integration potential, progressively migrating the entire insurance core from COBOL to Rust, and fostering a dynamic, continuously evolving digital ecosystem.

Through this roadmap, Nova creates a modern, flexible, extensible, and integration-ready insurance application platform, meeting all the digital transformation requirements of the enterprise.

---

## 🌟 Vision & Direction

Nova is envisioned as a modern application platform that harmoniously combines the power of traditional technology with advanced cloud-native architecture. Beyond just modernizing the Ingenium insurance core system, Nova aims to build an open, flexible technology ecosystem ready to meet all future digital transformation requirements of insurance enterprises.

**Core values that Nova aims for:**

- 📈 Flexible scalability to meet unlimited growth needs
- 🔗 Easy integration with external systems and services
- 🤖 Comprehensive automation from development to deployment (CI/CD)
- 🚀 Ready for the rapid digital transformation pace of the insurance and financial sectors
- 🛡️ Ensuring safety, stability, and operational optimization at every development stage

Nova is committed to being a solid platform, accompanying businesses on their journey of innovation, operational optimization, and sustainable value creation in the digital era.

---

## 🏗️ Architecture Overview

Nova's architecture is designed for comprehensive modernization, ensuring scalability, flexible integration, and stable operation. Nova not only inherits the core values of the traditional Ingenium system but also gradually transitions to a cloud-native model, ready to meet all future development requirements.

Nova is built on the latest technologies to ensure performance, security, and flexibility:
- **React** for a modern, user-friendly UI.
- **Rust** for core services, offering outstanding performance and memory safety.
- **Microservices** for flexibility, scalability, and maintainability.
- **API Gateway** (e.g., Kong) and **Event Bus** (e.g., Kafka) for secure, asynchronous integration.
- **YugabyteDB** (or other modern distributed databases) for a cloud-native, scalable data layer.
- **Continuous Delivery (CD)** for automated packaging and deployment, ready for integration with modern CI/CD pipelines.

The system is organized into four main layers, corresponding to each modernization phase:

### 🖥️ Presentation Layer
- **Nova UI (React Webservice):** Modern user interface, supporting intuitive experiences and direct interaction.
- Supports multiple protocols (REST, GraphQL), enabling flexible data access and extended integration with external systems via API.

### 🌉 Integration Layer
- **API Gateway (Kong):** Acts as an intermediary, managing, securing, and routing requests from the UI or external systems to the backend.
- **Event Bus (Kafka):** Provides asynchronous messaging, enabling efficient microservice communication, reducing direct dependencies, and increasing system scalability.

> *Note: The Integration Layer is not a mandatory component of the Nova project; its implementation depends on the needs and infrastructure of each enterprise. Businesses can use third-party applications and services (like API Gateway, Event Bus, Kubernetes, etc.) to add value and security to the system. Nova is designed to be open and ready for easy integration with these solutions to fully meet operational and future expansion requirements.*

### ⚙️ Application Layer
- **Nova App (Rust Microservices):** Core services developed in Rust, renowned for performance and memory safety.
- Microservices architecture ensures independent scalability, easy deployment, upgrades, and maintenance.
- During the transition phases, some Ingenium functions will be gradually migrated to Rust, progressively forming a new, modern, and flexible insurance core.

### 🗄️ Data Layer
- **Nova Data (Db2/Yugabyte):** Hybrid data layer, maintaining traditional Db2 for legacy operations while expanding to YugabyteDB to meet distributed, scalable, and cloud-native needs.
- Ensures data is always secure, consistent, and ready to serve modernization services in the future.
- The Data Layer is redesigned to enable flexible migration to other database management systems, not dependent on Db2 Embedded SQL.

This architecture allows Nova to operate stably throughout the transformation, gradually replacing old components with new technology without disrupting business operations.

---

## 🔄 Continuous Delivery System

Currently, Nova focuses on building a **Continuous Delivery (CD)** system to maximize automation in software packaging and deployment, preparing for future integration into CI/CD pipelines. Due to resource constraints, automated testing and a full CI/CD process are not yet implemented; the actual CI/CD deployment will depend on each enterprise.

- **Ready for Integration:** Nova CD has all the necessary commands, scripts, and packaging procedures prepared, enabling businesses to easily configure and integrate it into their own CI/CD systems as needed.
- The automated packaging and deployment process helps minimize release risks, increasing system stability and consistency.
- Supports quick rollback in case of incidents, ensuring the system always operates safely.

> *Note: Nova does not yet include auto-testing or a complete CI/CD pipeline, but it is ready for expansion when an enterprise requires it.*

---

## 💡 Key Advantages of Nova

Nova not only inherits but also thoroughly addresses the inherent limitations of the traditional Ingenium system, delivering many outstanding improvements:

- ⚡ **Outstanding performance:** Core services leverage Rust for fast processing and optimal resource usage.
- 📊 **Flexible scalability:** Microservices architecture and support for distributed databases meet growth needs and allow easy scaling as the business expands.
- 🔗 **Strong integration:** Open design, easily connects with external systems and services (REST/GraphQL, API Gateway, Event Bus). *Note: The Integration Layer is optional, not mandatory. For simplicity, in this project, the Presentation Layer will call the Application Layer directly.*
- 🤖 **Comprehensive automation:** Automated packaging and deployment, ready for CI/CD integration to shorten development cycles and accelerate innovation.
- 🏛️ **Flexible transformation support:** Maintains legacy systems (Db2) while being ready for cloud-native platforms (YugabyteDB) or other database management systems in the future.
- 🛡️ **Safety & stability:** Automated testing, deployment, and rollback processes help minimize risks, ensuring the system is always ready for business operations.
- 🚀 **Up-to-date technology:** Nova is designed with the latest technologies, always prioritizing up-to-date solutions to ensure efficiency, security, and outstanding scalability, and is ready to integrate with advanced technology solutions in the future.

---

## 🏁 Conclusion

Nova is not just a technology solution, but a platform that drives comprehensive digital transformation for insurance enterprises.
With the combination of modern technologies like React, Rust, and an automated CI/CD system, Nova delivers a flexible, secure, and sustainable ecosystem—ready to adapt and grow with every market change, accompanying businesses on their journey of innovation and sustainable development.
