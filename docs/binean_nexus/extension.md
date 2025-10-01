# 🔌 Binean Nova VsCode Extension

---

## 🎯 Introduction

The **Binean Nova Extension** is a powerful toolset integrated into **Visual Studio Code (VS Code)**, designed to revolutionize the development and operations (DevOps) workflow for the Ingenium system.

Working with a legacy system like Ingenium often involves manual, complex, and error-prone processes. The **Binean Nova Extension** was created as a comprehensive solution to break down these barriers, delivering a modern, seamless, and efficient development experience directly within the familiar VS Code environment.

While Nova's official production environment is Linux, the common development environment is Windows. To ensure consistency and minimize environment-specific bugs, we recommend using Windows Subsystem for Linux (WSL) as the standard development setup. However, recognizing that many enterprises have policies restricting WSL, the **Binean Nova Extension** is designed to flexibly support both: native Windows support is prioritized and delivered first, while ensuring full compatibility with WSL.

---

## 📋 Prerequisites

To use the **Binean Nova Extension**, your environment must meet the following requirements:

- **Required Software:**
  - Visual Cobol
  - Db2 Server (or Db2 Client)
- **Required VS Code Extensions:**
  - `Rocket COBOL` (by OpenText)
  - `Cobol` (by BitLang)
  - `Git`

---

## ✨ Key Components

The **Binean Nova Extension** is composed of several specialized tools, each designed to solve a specific problem in the Ingenium workflow. This toolset will be continuously expanded in the future to meet new project requirements.

### 1. Nexus Core
- **Common Platform:** Provides core features such as managing environment configurations (Dev, ST, AT), automating environment variable setup, and serving as the foundation for other components.
- **VS Code Integration:** Ensures that the underlying tools can interact seamlessly with the VS Code interface, such as displaying errors in the "Problems" tab.

### 2. `icomp` & `igo` Compilation Toolset
- **`icomp` (For Developers):** An intelligent compilation tool with deep Git integration. It analyzes changes between branches to perform incremental compilation on impacted programs, saving time and ensuring accuracy directly in the development environment.
- **`igo` (For DevOps - To Be Developed):** An extension of `icomp`, designed to fully automate the compilation and packaging process on server environments. `igo` will be the key component for seamless integration into future CI/CD pipelines.

### 3. `iman` Manager
- **The Foundation for Nova App:** In its current stage, `iman` (Ingenium Manager) is a tool for managing Ingenium's COBOL workers. However, it is more than just a utility; it is the foundational platform that will evolve into **Nova App**—the next-generation insurance core written in Rust. The long-term roadmap is to gradually integrate business logic into `iman` itself, step-by-step transforming it into a complete insurance core.
- **Cross-Platform Worker Management:**
  - **On Windows (Dev):** Supports running a single worker process in debug mode, allowing it to automatically attach and call back to the `Rocket COBOL` extension for debugging.
  - **On Linux (Server):** Supports launching multiple worker processes in parallel, with a configurable number of instances to improve processing throughput.
- **Security:** Includes a feature to encrypt database connection passwords, enhancing system security.
- **Development Roadmap (Orbit Phase):** In the **Orbit** phase, `iman` will be significantly upgraded to become a central service with breakthrough features:
  - **Run as a MIR API:** Provides a dedicated API interface that allows PathFinder to call Ingenium directly using the MIR format, completely bypassing the MQ layer (ActiveMQ/IBM MQ). This reduces latency and simplifies the architecture for legacy systems.
  - **Run as a REST API:** In parallel with the MIR API, `iman` will also be deployed as a RESTful service, allowing modern applications to integrate easily.
  - **24/7 Availability:** Provides the ability to query certain contract information even while the system is running batch jobs, ensuring high availability.
  - **Autoscaling:** Automatically adjusts the number of processing instances based on the actual workload.

### 4. `ibatch` Batch Runner
- **Cross-Platform Batch Job Execution:** `ibatch` is a dedicated tool for executing Ingenium batch jobs.
- **Windows & Linux Support:** Ensures that batch jobs can run consistently across both development (Windows) and server (Linux) environments.

---

## 🚀 Initial Features

The current version of the extension provides foundational features for initializing and configuring the workspace (to be expanded in the future):

### 1. `Initialize Ingenium Cobol Workspace`
- **Purpose:** Quickly initialize a standard workspace for an Ingenium project.
- **Action:** This command automatically creates the necessary configuration files in the `.vscode` folder.
- **User Configuration:** After initialization, the user must provide essential information such as the Visual Cobol installation path, Db2 login credentials, etc. (detailed instructions will be available in the extension's documentation).

### 2. `Update Configuration`
- **Purpose:** Synchronize configurations and create a dedicated command-line environment.
- **Action:** Based on the user-provided information, this command generates a `Noval.cmd` file.
- **Dedicated Environment:** The `Noval.cmd` file is used to open a command prompt window with all the necessary environment variables pre-configured. All tools in the Nova project (`icomp`, `igo`, `iman`) must be run within this environment. A shortcut to this file will be placed on the Desktop for easy access.

---

## 💡 Benefits

- **Increased Productivity:** Minimizes manual, repetitive tasks, allowing developers to focus on developing business logic.
- **Reduced Errors:** Automation and intelligent compilation ensure consistency and accuracy, minimizing human-induced risks.
- **Standardized Workflow:** Establishes a modern, accessible workflow for new developers and simplifies management for the entire team.
- **Modernized Experience:** Brings the world of modern DevOps to a traditional system, creating an effective and professional working environment.

---

The **Binean Nova Extension** is a critical piece of the Nova project, transforming VS Code into a powerful command center for Ingenium development and operations throughout the modernization journey.