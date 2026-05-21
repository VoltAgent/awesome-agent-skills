# Plan Agent

A simple Node.js planning agent that generates a structured plan from a user-provided task description.

## Run

```bash
node plan-agent/agent.js "Create a launch plan for a new SaaS product"
```

Or use the package script from the `plan-agent` directory:

```bash
cd plan-agent
npm run plan -- "Create a launch plan for a new SaaS product"
```

If you want, install the local package globally to run it as `plan-agent`:

```bash
cd plan-agent
npm install -g .
plan-agent "Create a launch plan for a new SaaS product"
```

The agent prints a short five-step plan for the given prompt.

## Example output

```bash
node plan-agent/agent.js "Create a launch plan for a new SaaS product"
```

```
=== Plan Agent ===

Task: Create a launch plan for a new SaaS product

1. Clarify the objective
   - Define the core outcome, target users, and success metrics for: Create a launch plan for a new SaaS product

2. Break into phases
   - Organize the work into research, design, execution, launch, and review phases

3. Assign priorities
   - Rank tasks and features by impact, effort, and deadline sensitivity

4. Gather resources
   - List required tools, stakeholders, team roles, and launch assets

5. Review and refine
   - Validate the plan, identify risks, and prepare follow-up metrics
```
