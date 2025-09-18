# 🏢 Nova

**Nova – Modern Application Ecosystem**

![Nova Architecture Diagram](/img/nova.png)

---

## 🎯 Objectives

Nova aims to comprehensively modernize the Ingenium insurance core system, ensuring continuous, stable, and secure operations throughout the digital transformation process. The transformation roadmap is clearly defined in phases, with each phase representing a solid step forward to minimize risks and optimize resources:

- **Nexus:** Establish a robust, modern infrastructure foundation and fully automate development, testing, and deployment processes. This crucial preparation ensures subsequent phases can be implemented smoothly and the system remains stable.
- **Orbit:** Modernize communication with Ingenium, migrate some functions to Rust, transform Ingenium into a REST service, add the MIR protocol for direct PathFinder connection, and eliminate MQ. The goal is modernization while maintaining uninterrupted operations. After this phase, Ingenium will approach a modern application model, ready to integrate middleware layers such as API Gateway and load balancing.
- **Vista:** Modernize the user interface and external services, gradually migrate modules and external services to the new platform (SOAP → REST). In parallel, build new systems to transition each part, ensuring all activities outside the core remain stable before making deep changes to the core system.
- **Apex:** The longest and most complex phase: gradually migrate the insurance core from COBOL to Rust, build a new core surrounding Ingenium, and gradually move modules to modern technology, aiming for a completely new, flexible, and easily extensible platform.

Through this roadmap, Nova aims to create a modern, flexible, extensible, and integration-ready insurance application platform, meeting all digital transformation requirements of enterprises while optimizing operational efficiency and ensuring system security throughout the modernization journey.

---

## 🌟 Vision & Orientation

Nova is designed as a modern application platform, harmoniously combining the strengths of traditional technology and advanced cloud-native architecture. Beyond modernizing the Ingenium insurance core system, Nova aims to build an open, flexible technology ecosystem, ready to meet all digital transformation requirements of insurance enterprises in the future.

Core values Nova targets:

- 📈 Flexible scalability to meet unlimited growth needs
- 🔗 Easy integration with external systems and services
- 🤖 Comprehensive automation from development to deployment (CI/CD)
- 🚀 Ready for the rapid digital transformation pace of the insurance and financial sectors
- 🛡️ Ensuring safety, stability, and operational optimization at every development stage

Nova is committed to being a solid platform, accompanying businesses on their journey of innovation, operational optimization, and sustainable value creation in the digital era.

---

## 🏗️ Architecture Overview

Nova's architecture is designed for comprehensive modernization, ensuring scalability, flexible integration, and stable operation throughout the digital transformation process. Nova not only inherits the core values of the traditional Ingenium system but also gradually transitions to a cloud-native model, ready to meet all future development requirements.

The system is organized into four main layers, corresponding to each modernization phase:

### 🖥️ Presentation Layer
- **Nova UI (React Webservice):** Modern user interface, supporting intuitive experiences and direct interaction.
- Supports multiple protocols (REST, GraphQL), enabling flexible data access and extended integration with external systems via API.

### 🌉 Integration Layer
- **API Gateway (Kong):** Acts as an intermediary, managing, securing, and routing requests from the UI or external systems to the backend.
- **Event Bus (Kafka):** Provides asynchronous messaging, enabling efficient microservice communication, reducing direct dependencies, and increasing system scalability.

> *Note: The Integration Layer is not a mandatory part of the Nova project and depends on each enterprise's needs and infrastructure. Businesses can use third-party applications or services (such as API Gateway, Event Bus, Kubernetes, etc.) to enhance system value and security. Nova is designed to be open and easily integrated with these solutions to maximize operational and expansion requirements.*

### ⚙️ Application Layer
- **Nova App (Rust Microservices):** Core services developed in Rust, renowned for performance and memory safety.
- Microservices architecture ensures independent scalability, easy deployment, upgrades, and maintenance.
- During the transition phases, some Ingenium functions will be gradually migrated to Rust, progressively forming a new, modern, and flexible insurance core.

### 🗄️ Data Layer
- **Nova Data (Db2/Yugabyte):** Hybrid data layer, maintaining traditional Db2 for legacy operations while expanding to YugabyteDB to meet distributed, scalable, and cloud-native needs.
- Ensures data is always secure, consistent, and ready to serve modernization services in the future.
- The Data Layer is redesigned to enable flexible migration to other database management systems, not dependent on Db2 Embedded SQL.

This architecture allows Nova to operate stably throughout the transition, gradually replacing old components with new technology without disrupting business operations.

---

## 🔄 Continuous Delivery System

Currently, Nova focuses on building a Continuous Delivery (CD) system with the goal of maximizing automation in packaging and deploying software, and preparing for future integration into CI/CD pipelines. Due to limited resources, auto testing and a complete CI/CD process have not been implemented; moreover, actual CI/CD deployment will depend on each enterprise's needs.

- **Nova CD (Continuous Delivery):** All commands, scripts, and packaging procedures are fully prepared, enabling businesses to easily configure and integrate with their own CI/CD systems when needed.
- The automated packaging and deployment process helps minimize release risks, increasing system stability and consistency.
- Supports quick rollback in case of incidents, ensuring the system always operates safely.

> *Note: Nova does not yet integrate auto testing or a complete CI/CD pipeline, but is ready for expansion when enterprises require.*

---

## 💡 Key Advantages of Nova

- ⚡ **Outstanding performance:** Core services leverage Rust for fast processing and optimal resource usage.
- 📊 **Flexible scalability:** Microservices architecture and support for distributed databases meet growth needs and allow easy scaling as the business expands.
- 🔗 **Strong integration:** Open design, easily connects with external systems and services (REST/GraphQL, API Gateway, Event Bus such as Kafka or equivalent solutions).
- 🤖 **Comprehensive automation:** Automated packaging and deployment, ready for CI/CD integration to shorten development cycles and accelerate innovation.
- 🏛️ **Digital transformation support:** Maintains legacy systems (Db2) while being ready for cloud-native platforms (YugabyteDB) or other modern database management systems.
- 🛡️ **Safety & stability:** Automated testing, deployment, and rollback processes help minimize risks, ensuring the system is always ready for business operations.

---

## 🏁 Conclusion

Nova is not just a technology solution, but a platform that drives comprehensive digital transformation for insurance enterprises.  
With the combination of modern technologies such as React, Rust, Kong, and support for distributed databases and automated CI/CD systems, Nova delivers a flexible, secure, and sustainable ecosystem—ready to adapt and grow with every market change, accompanying businesses on their journey of innovation and sustainable development.

