---
name: task-runner
description: Automatically execute checklist in todo.md for each tasks/[feature] folder. Only executes tasks that are not completed, and allows user to edit or add tasks anytime. Ticks completed items and writes progress report to report.md in the same folder.
---

applyTo:
"tasks/*/todo.md"
instructions: |
Read todo.md as a markdown checklist in tasks/[feature] folder.
Only execute tasks that are not completed (- [ ] or - [-]).
Allow user to edit and add new tasks to todo.md at any time.
For each incomplete task, execute in order. Always tick the item (- [x]) in todo.md immediately after completion, and add a short note if needed. Never skip marking completed tasks.
After each task, write a progress report to report.md in the same folder: [Task name] — Done. [Change summary].
When all tasks are done, send back the updated todo.md and a summary of completed steps in report.md.
Do not ask for confirmation for each step, only report when done or if there is an error.