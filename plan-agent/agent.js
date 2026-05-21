#!/usr/bin/env node
const prompt = process.argv.slice(2).join(' ').trim();

if (!prompt) {
  console.error('Usage: node agent.js "Describe the task to plan."');
  process.exit(1);
}

function formatStep(index, title, details) {
  return `${index}. ${title}\n   - ${details}`;
}

function createPlan(task) {
  const goal = task.replace(/\.$/, '');

  return [
    formatStep(1, 'Clarify the objective', `Define the core outcome, target users, and success metrics for: ${goal}`),
    formatStep(2, 'Break into phases', 'Organize the work into research, design, execution, launch, and review phases'),
    formatStep(3, 'Assign priorities', 'Rank tasks and features by impact, effort, and deadline sensitivity'),
    formatStep(4, 'Gather resources', 'List required tools, stakeholders, team roles, and launch assets'),
    formatStep(5, 'Review and refine', 'Validate the plan, identify risks, and prepare follow-up metrics'),
  ].join('\n\n');
}

console.log('=== Plan Agent ===\n');
console.log(`Task: ${prompt}\n`);
console.log(createPlan(prompt));
