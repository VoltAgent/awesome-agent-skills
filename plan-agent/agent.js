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
    formatStep(1, 'Clarify the objective', `Define the core outcome for: ${goal}`),
    formatStep(2, 'Break into phases', 'Split the work into research, design, execution, review, and follow-up tasks'),
    formatStep(3, 'Assign priorities', 'Identify the most important actions and map them to deadlines or milestones'),
    formatStep(4, 'Gather resources', 'List tools, stakeholders, and materials needed to complete each phase'),
    formatStep(5, 'Review and refine', 'Validate the plan against the objective and update it for risks or missing steps'),
  ].join('\n\n');
}

console.log(`Planning agent output for: ${prompt}\n`);
console.log(createPlan(prompt));
