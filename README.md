<a href="https://github.com/VoltAgent/voltagent">
     <img width="1500" height="801" alt="claude-skills" src="https://github.com/user-attachments/assets/3a9d4cb3-04bd-4fb1-9146-fd3b53d26961" />
</a>


<br/>
<br/>

<div align="center">
    <strong>A curated collection of official Agent Skills from leading development teams and the community.
    </strong>
    <br />
    <br />

</div>

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
<a href="https://github.com/VoltAgent/voltagent">
  <img alt="VoltAgent" src="https://cdn.voltagent.dev/website/logo/logo-2-svg.svg" height="20" />
</a>

[![AI Agent Papers](https://img.shields.io/badge/AI%20Agent-Research%20Papers-b31b1b)](https://github.com/VoltAgent/awesome-ai-agent-papers)
![Skills Count](https://img.shields.io/badge/Skills-549+-blue?style=flat-square)
![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-agent-skills?label=Last%20update&style=flat-square)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![GitHub forks](https://img.shields.io/github/forks/VoltAgent/awesome-agent-skills?style=social)](https://github.com/VoltAgent/awesome-agent-skills/network/members)

</div>

# Awesome Agent Skills

Unlike many bulk-generated skill repositories, this collection focuses on real-world Agent Skills created and used by actual engineering teams, not mass AI‑generated stuff.

This collection features official skills published by leading development teams, including Anthropic, Google Labs, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, and more, alongside community-built skills.

Compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, OpenCode, Windsurf, and more. See the table below for paths and documentation.

The most contributed Agent Skills repository, built and maintained together with the community.


## 🔒 Security Notice

Skills in this list are curated, not audited. They may be updated, modified, or replaced by their original maintainers at any time after being added here.

Before installing or using any Agent Skill, review potential security risks and validate the source yourself.

Recommended tools:

- [Synk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)

Agent skills can include prompt injections, tool poisoning, hidden malware payloads, or unsafe data handling patterns. Always review the code and use skills at your own discretion.

## Table of Contents

| | | |
|---|---|---|
| [Official Claude Skills](#official-claude-skills) | [Skills by VoltAgent](#skills-by-voltagent) | [Skills by Composio](#skills-by-composio-team) |
| [Skills by Supabase](#skills-by-supabase-team) | [Skills by Google Gemini](#skills-by-google-gemini) | [Skills by Stripe](#skills-by-stripe-team) |
| [Skills by CallStack](#skills-by-callstack) | [Skills by Expo](#skills-by-expo-team) | [Skills by Better Auth](#skills-by-better-auth-team) |
| [Skills by Tinybird](#skills-by-tinybird-team) | [Skills by HashiCorp](#skills-by-hashicorp-team-for-terraform) | [Skills by Sanity](#skills-by-sanity-team) |
| [Skills by Firecrawl](#skills-by-firecrawl-team) | [Skills by Neon](#skills-by-neon-team) | [Skills by Cloudflare Engineer](#skills-by-cloudflare-engineer) |
| [Skill by ClickHouse](#skill-by-clickhouse) | [Skills by Remotion](#skills-by-remotion) | [Skills by Replicate](#skills-by-replicate) |
| [Skills by Typefully](#skills-by-typefully) | [Skills by Vercel](#skills-by-vercel-engineering-team) | [Skills by Cloudflare](#skills-by-cloudflare-team) |
| [Skills by Netlify](#skills-by-netlify-team) | [Skills by Google Labs (Stitch)](#skills-by-google-labs-stitch) | [Skills by Google Workspace CLI](#skills-by-google-workspace-cli) |
| [Skills by Hugging Face](#skills-by-hugging-face-team) | [Skills by Trail of Bits](#security-skills-by-trail-of-bits-team) | [Skills by Sentry](#skills-by-sentry-team-for-their-dev-team) |
| [Skills by Microsoft](#skills-by-microsoft) | [Skills by fal.ai](#skills-by-falai-team) | [Skills by WordPress](#skills-by-wordpress-development-team) |
| [Skills by Transloadit](#skills-by-transloadit-team) | [Skills by OpenAI](#skills-by-openai) | [Marketing Skills by Corey Haines](#marketing-skills-by-corey-haines) |
| [Skills by Binance](#skills-by-binance) | [Product Manager Skills by Dean Peters](#product-manager-skills-by-dean-peters) | [Product Management Skills by Paweł Huryn](#product-management-skills-by-pawel-huryn) |
| [Community Skills](#community-skills) | [Skill Quality Standards](#skill-quality-standards) | |




<br/>

<a href="https://github.com/VoltAgent/voltagent">
<img width="1390" height="296" alt="social" src="https://github.com/user-attachments/assets/5d8822c0-e97b-4183-a71e-a922ab88e1a0" />
</a>

<br/>



<details open>
<summary><h3 style="display:inline">Official Claude Skills</h3></summary>

- **[anthropics/docx](https://github.com/anthropics/skills/tree/main/skills/docx)** - Create, edit, and analyze Word documents
- **[anthropics/doc-coauthoring](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring)** - Collaborative document editing and co-authoring
- **[anthropics/pptx](https://github.com/anthropics/skills/tree/main/skills/pptx)** - Create, edit, and analyze PowerPoint presentations
- **[anthropics/xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx)** - Create, edit, and analyze Excel spreadsheets
- **[anthropics/pdf](https://github.com/anthropics/skills/tree/main/skills/pdf)** - Extract text, create PDFs, and handle forms
- **[anthropics/algorithmic-art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art)** - Create generative art using p5.js with seeded randomness
- **[anthropics/canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design)** - Design visual art in PNG and PDF formats
- **[anthropics/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)** - Frontend design and UI/UX development tools
- **[anthropics/slack-gif-creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator)** - Create animated GIFs optimized for Slack size constraints
- **[anthropics/theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory)** - Style artifacts with professional themes or generate custom themes
- **[anthropics/web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder)** - Build complex claude.ai HTML artifacts with React and Tailwind
- **[anthropics/mcp-builder](https://github.com/anthropics/skills/tree/main/skills/mcp-builder)** - Create MCP servers to integrate external APIs and services
- **[anthropics/webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing)** - Test local web applications using Playwright
- **[anthropics/brand-guidelines](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines)** - Apply Anthropic's brand colors and typography to artifacts
- **[anthropics/internal-comms](https://github.com/anthropics/skills/tree/main/skills/internal-comms)** - Write status reports, newsletters, and FAQs
- **[anthropics/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)** - Guide for creating skills that extend Claude's capabilities
- **[anthropics/template](https://github.com/anthropics/skills/tree/main/template)** - Basic template for creating new skills

</details>

### Skills by VoltAgent
Official skills by VoltAgent for building AI agents with the VoltAgent TypeScript framework.
- **[voltagent/create-voltagent](https://github.com/VoltAgent/skills/tree/main/skills/create-voltagent)** - Project setup guide with CLI and manual steps
- **[voltagent/voltagent-best-practices](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-best-practices)** - Architecture and usage patterns for agents, workflows, memory, and servers
- **[voltagent/voltagent-core-reference](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-core-reference)** - Reference for the VoltAgent class options and lifecycle methods
- **[voltagent/voltagent-docs-bundle](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-docs-bundle)** - Lookup embedded docs from @voltagent/core for version-matched documentation

### Skills by Composio Team
- **[ComposioHQ/skills](https://github.com/ComposioHQ/skills)** - Connect AI agents to 1000+ external apps with managed authentication

### Skills by Supabase Team
- **[supabase/postgres-best-practices](https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices)** - PostgreSQL best practices for Supabase

### Skills by Google Gemini
- **[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills)** - A library of skills for the Gemini API, SDK and model interactions.

### Skills by Stripe Team
- **[stripe/stripe-best-practices](https://github.com/stripe/ai/tree/main/skills/stripe-best-practices)** - Best practices for building Stripe integrations
- **[stripe/upgrade-stripe](https://github.com/stripe/ai/tree/main/skills/upgrade-stripe)** - Upgrade Stripe SDK and API versions

### Skills by CallStack
- **[callstackincubator/react-native-best-practices](https://github.com/callstackincubator/agent-skills/blob/main/skills/react-native-best-practices/SKILL.md)** - Performance optimization for React Native apps from Callstack
- **[callstackincubator/github](https://github.com/callstackincubator/agent-skills/tree/main/skills/github)** - GitHub workflow patterns for PRs, code review, branching
- **[callstackincubator/upgrading-react-native](https://github.com/callstackincubator/agent-skills/tree/main/skills/upgrading-react-native)** - React Native upgrade workflow: templates, dependencies, and common pitfalls

### Skills by Expo Team
Official AI agent skills from the Expo team for building, deploying, and debugging Expo apps.
- **[expo/expo-app-design](https://github.com/expo/skills/tree/main/plugins/expo-app-design)** - Design and build Expo applications
- **[expo/expo-deployment](https://github.com/expo/skills/tree/main/plugins/expo-deployment)** - Deploy Expo apps to production
- **[expo/upgrading-expo](https://github.com/expo/skills/tree/main/plugins/upgrading-expo)** - Upgrade Expo SDK versions

### Skills by Better Auth Team
- **[better-auth/best-practices](https://github.com/better-auth/skills/tree/main/better-auth/best-practices)** - Best practices for Better Auth integration
- **[better-auth/commands](https://github.com/better-auth/skills/tree/main/better-auth/commands)** - Better Auth CLI commands
- **[better-auth/create-auth](https://github.com/better-auth/skills/tree/main/better-auth/create-auth)** - Create authentication setup with Better Auth

### Skills by Tinybird Team
- **[tinybirdco/tinybird-best-practices](https://github.com/tinybirdco/tinybird-agent-skills/tree/main/skills/tinybird-best-practices)** - Tinybird project guidelines for datasources, pipes, endpoints, and SQL

### Skills by HashiCorp Team for Terraform
- **[hashicorp/terraform-code-generation](https://github.com/hashicorp/agent-skills/tree/main/terraform/code-generation)** - Generate and validate Terraform HCL code
- **[hashicorp/terraform-module-generation](https://github.com/hashicorp/agent-skills/tree/main/terraform/module-generation)** - Create and refactor Terraform modules
- **[hashicorp/terraform-provider-development](https://github.com/hashicorp/agent-skills/tree/main/terraform/provider-development)** - Develop Terraform providers

### Skills by Sanity Team
- **[sanity-io/sanity-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/sanity-best-practices)** - Best practices for Sanity Studio, GROQ queries, and content workflows
- **[sanity-io/content-modeling-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/content-modeling-best-practices)** - Guidelines for designing scalable content models in Sanity
- **[sanity-io/seo-aeo-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/seo-aeo-best-practices)** - SEO and answer engine optimization patterns for content sites
- **[sanity-io/content-experimentation-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/content-experimentation-best-practices)** - Content A/B testing and experimentation workflows

### Skills by Firecrawl Team
- **[firecrawl/firecrawl-cli](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-cli)** - Scrape, crawl, search, and map the web via CLI
- **[firecrawl/firecrawl-claude-plugin](https://github.com/firecrawl/firecrawl-claude-plugin)** - Claude Code plugin for web scraping and search

### Skills by Neon 
- **[neondatabase/using-neon](https://github.com/neondatabase/agent-skills/tree/main/skills/neon-postgres)** - Best practices for Neon Serverless Postgres

### Skills by Cloudflare Engineer 
- **[dmmulroy/cloudflare-skill](https://github.com/dmmulroy/cloudflare-skill/tree/main/skills/cloudflare)** - Cloudflare platform reference for Workers, Pages, storage, AI, and networking

### Skill by ClickHouse 
- **[ClickHouse/agent-skills](https://github.com/ClickHouse/agent-skills)** - The official Agent Skills for [ClickHouse](https://clickhouse.com/). These skills help LLMs and agents to adopt best practices when working with ClickHouse.

### Skills by Remotion 
- **[remotion-dev/remotion](https://github.com/remotion-dev/skills/tree/main/skills/remotion)** - Programmatic video creation with React

### Skills by Replicate 
- **[replicate/replicate](https://github.com/replicate/skills/tree/main/skills/replicate)** - Discover, compare, and run AI models using Replicate's API

### Skills by Typefully 
- **[typefully/typefully](https://github.com/typefully/agent-skills/tree/main/skills/typefully)** - Create, schedule, and publish social media content across X, LinkedIn, Threads, Bluesky, and Mastodon

<details open>
<summary><h3 style="display:inline">Skills by Vercel Engineering Team</h3></summary>

- **[vercel-labs/react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)** - React best practices and patterns
- **[vercel-labs/vercel-deploy-claimable](https://github.com/vercel-labs/agent-skills/tree/main/skills/claude.ai/vercel-deploy-claimable)** - Deploy projects to Vercel
- **[vercel-labs/web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)** - Web design guidelines and standards
- **[vercel-labs/composition-patterns](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns)** - React component composition and reusable patterns
- **[vercel-labs/next-best-practices](https://github.com/vercel-labs/next-skills/tree/main/skills/next-best-practices)** - Next.js best practices and recommended patterns
- **[vercel-labs/next-cache-components](https://github.com/vercel-labs/next-skills/tree/main/skills/next-cache-components)** - Caching strategies and cache-aware components in Next.js
- **[vercel-labs/next-upgrade](https://github.com/vercel-labs/next-skills/tree/main/skills/next-upgrade)** - Upgrade Next.js projects to newer versions
- **[vercel-labs/react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills)** - React Native best practices and performance guidelines

</details>

<details open>
<summary><h3 style="display:inline">Skills by Cloudflare Team</h3></summary>

- **[cloudflare/agents-sdk](https://github.com/cloudflare/skills/tree/main/skills/agents-sdk)** - Build stateful AI agents with scheduling, RPC, and MCP servers
- **[cloudflare/building-ai-agent-on-cloudflare](https://github.com/cloudflare/skills/tree/main/skills/building-ai-agent-on-cloudflare)** - Build AI agents with state and WebSockets on Cloudflare
- **[cloudflare/building-mcp-server-on-cloudflare](https://github.com/cloudflare/skills/tree/main/skills/building-mcp-server-on-cloudflare)** - Build remote MCP servers with tools and OAuth
- **[cloudflare/commands](https://github.com/cloudflare/skills/tree/main/commands)** - Cloudflare CLI commands reference
- **[cloudflare/durable-objects](https://github.com/cloudflare/skills/tree/main/skills/durable-objects)** - Stateful coordination with RPC, SQLite, and WebSockets
- **[cloudflare/web-perf](https://github.com/cloudflare/skills/tree/main/skills/web-perf)** - Audit Core Web Vitals and render-blocking resources
- **[cloudflare/wrangler](https://github.com/cloudflare/skills/tree/main/skills/wrangler)** - Deploy and manage Workers, KV, R2, D1, Vectorize, Queues, Workflows

</details>

<details>
<summary><h3 style="display:inline">Skills by Netlify Team</h3></summary>

- **[netlify/netlify-functions](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-functions)** - Build serverless API endpoints and background tasks
- **[netlify/netlify-edge-functions](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-edge-functions)** - Low-latency edge middleware and geolocation logic
- **[netlify/netlify-blobs](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-blobs)** - Key-value object storage for files and data
- **[netlify/netlify-db](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-db)** - Managed Postgres with deploy preview branching
- **[netlify/netlify-image-cdn](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-image-cdn)** - Optimize and transform images via CDN
- **[netlify/netlify-forms](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-forms)** - HTML form handling with spam filtering
- **[netlify/netlify-frameworks](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-frameworks)** - Deploy web frameworks with SSR support
- **[netlify/netlify-caching](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-caching)** - Configure CDN caching and cache purging
- **[netlify/netlify-config](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-config)** - Reference for netlify.toml site configuration
- **[netlify/netlify-cli-and-deploy](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-cli-and-deploy)** - CLI setup, local dev, and deployment workflows
- **[netlify/netlify-deploy](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-deploy)** - Automated deployment workflow for Netlify sites
- **[netlify/netlify-ai-gateway](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-ai-gateway)** - Access AI models via unified gateway endpoint

</details>

<details>
<summary><h3 style="display:inline">Skills by Google Labs (Stitch)</h3></summary>

Agent Skills for the Stitch MCP server, compatible with Claude Code, Gemini CLI, Cursor, and more.

- **[google-labs-code/design-md](https://github.com/google-labs-code/stitch-skills/tree/main/skills/design-md)** - Create and manage DESIGN.md files
- **[google-labs-code/enhance-prompt](https://github.com/google-labs-code/stitch-skills/tree/main/skills/enhance-prompt)** - Improve prompts with design specs and UI/UX vocabulary
- **[google-labs-code/react-components](https://github.com/google-labs-code/stitch-skills/tree/main/skills/react-components)** - Stitch to React components conversion
- **[google-labs-code/remotion](https://github.com/google-labs-code/stitch-skills/tree/main/skills/remotion)** - Generate walkthrough videos from Stitch app designs
- **[google-labs-code/shadcn-ui](https://github.com/google-labs-code/stitch-skills/tree/main/skills/shadcn-ui)** - Build UI components with shadcn/ui
- **[google-labs-code/stitch-loop](https://github.com/google-labs-code/stitch-skills/tree/main/skills/stitch-loop)** - Iterative design-to-code feedback loop

</details>

<details>
<summary><h3 style="display:inline">Skills by Google Workspace CLI</h3></summary>

Official Google Workspace CLI skills for managing Google Workspace services via the `gws` CLI tool.

- **[googleworkspace/gws-shared](https://github.com/googleworkspace/cli/tree/main/skills/gws-shared)** - Shared authentication, global flags, and output formatting
- **[googleworkspace/gws-drive](https://github.com/googleworkspace/cli/tree/main/skills/gws-drive)** - Manage Google Drive files, folders, and shared drives
- **[googleworkspace/gws-sheets](https://github.com/googleworkspace/cli/tree/main/skills/gws-sheets)** - Read and write Google Sheets spreadsheets
- **[googleworkspace/gws-gmail](https://github.com/googleworkspace/cli/tree/main/skills/gws-gmail)** - Send, read, and manage Gmail email
- **[googleworkspace/gws-calendar](https://github.com/googleworkspace/cli/tree/main/skills/gws-calendar)** - Manage Google Calendar calendars and events
- **[googleworkspace/gws-admin](https://github.com/googleworkspace/cli/tree/main/skills/gws-admin)** - Manage Workspace users, groups, and devices
- **[googleworkspace/gws-admin-reports](https://github.com/googleworkspace/cli/tree/main/skills/gws-admin-reports)** - Audit logs and usage reports for Workspace
- **[googleworkspace/gws-docs](https://github.com/googleworkspace/cli/tree/main/skills/gws-docs)** - Read and write Google Docs documents
- **[googleworkspace/gws-slides](https://github.com/googleworkspace/cli/tree/main/skills/gws-slides)** - Read and write Google Slides presentations
- **[googleworkspace/gws-tasks](https://github.com/googleworkspace/cli/tree/main/skills/gws-tasks)** - Manage Google Tasks task lists and tasks
- **[googleworkspace/gws-people](https://github.com/googleworkspace/cli/tree/main/skills/gws-people)** - Manage Google People contacts and profiles
- **[googleworkspace/gws-chat](https://github.com/googleworkspace/cli/tree/main/skills/gws-chat)** - Manage Google Chat spaces and messages
- **[googleworkspace/gws-vault](https://github.com/googleworkspace/cli/tree/main/skills/gws-vault)** - Manage Google Vault eDiscovery holds and exports
- **[googleworkspace/gws-groupssettings](https://github.com/googleworkspace/cli/tree/main/skills/gws-groupssettings)** - Manage Google Groups settings
- **[googleworkspace/gws-reseller](https://github.com/googleworkspace/cli/tree/main/skills/gws-reseller)** - Manage Google Workspace Reseller subscriptions
- **[googleworkspace/gws-licensing](https://github.com/googleworkspace/cli/tree/main/skills/gws-licensing)** - Manage Workspace Enterprise product licenses
- **[googleworkspace/gws-apps-script](https://github.com/googleworkspace/cli/tree/main/skills/gws-apps-script)** - Manage and execute Google Apps Script projects
- **[googleworkspace/gws-classroom](https://github.com/googleworkspace/cli/tree/main/skills/gws-classroom)** - Manage Google Classroom classes, rosters, and coursework
- **[googleworkspace/gws-cloudidentity](https://github.com/googleworkspace/cli/tree/main/skills/gws-cloudidentity)** - Manage Cloud Identity groups and memberships
- **[googleworkspace/gws-alertcenter](https://github.com/googleworkspace/cli/tree/main/skills/gws-alertcenter)** - Manage Workspace Alert Center security alerts
- **[googleworkspace/gws-forms](https://github.com/googleworkspace/cli/tree/main/skills/gws-forms)** - Read and write Google Forms
- **[googleworkspace/gws-keep](https://github.com/googleworkspace/cli/tree/main/skills/gws-keep)** - Manage Google Keep notes
- **[googleworkspace/gws-meet](https://github.com/googleworkspace/cli/tree/main/skills/gws-meet)** - Manage Google Meet conferences
- **[googleworkspace/gws-events](https://github.com/googleworkspace/cli/tree/main/skills/gws-events)** - Subscribe to Google Workspace events
- **[googleworkspace/gws-modelarmor](https://github.com/googleworkspace/cli/tree/main/skills/gws-modelarmor)** - Filter user-generated content for safety
- **[googleworkspace/gws-workflow](https://github.com/googleworkspace/cli/tree/main/skills/gws-workflow)** - Cross-service Google Workspace productivity workflows

</details>

<details>
<summary><h3 style="display:inline">Skills by Hugging Face Team</h3></summary>

Official AI agent skills from the Hugging Face team for ML workflows.

- **[huggingface/hugging-face-cli](https://github.com/huggingface/skills/tree/main/skills/hugging-face-cli)** - HF Hub CLI for models, datasets, repos, and compute jobs
- **[huggingface/hugging-face-datasets](https://github.com/huggingface/skills/tree/main/skills/hugging-face-datasets)** - Create and manage datasets with configs and SQL querying
- **[huggingface/hugging-face-evaluation](https://github.com/huggingface/skills/tree/main/skills/hugging-face-evaluation)** - Model evaluation with vLLM/lighteval and eval tables
- **[huggingface/hugging-face-jobs](https://github.com/huggingface/skills/tree/main/skills/hugging-face-jobs)** - Run compute jobs and Python scripts on HF infrastructure
- **[huggingface/hugging-face-model-trainer](https://github.com/huggingface/skills/tree/main/skills/hugging-face-model-trainer)** - Train models with TRL: SFT, DPO, GRPO, GGUF conversion
- **[huggingface/hugging-face-paper-publisher](https://github.com/huggingface/skills/tree/main/skills/hugging-face-paper-publisher)** - Publish papers on HF Hub with model/dataset links
- **[huggingface/hugging-face-tool-builder](https://github.com/huggingface/skills/tree/main/skills/hugging-face-tool-builder)** - Build reusable scripts for HF API operations
- **[huggingface/hugging-face-trackio](https://github.com/huggingface/skills/tree/main/skills/hugging-face-trackio)** - Track ML experiments with real-time dashboards

</details>

<details>
<summary><h3 style="display:inline">Security Skills by Trail of Bits Team</h3></summary>

- **[trailofbits/ask-questions-if-underspecified](https://github.com/trailofbits/skills/tree/main/plugins/ask-questions-if-underspecified)** - Prompt for clarification on ambiguous requirements
- **[trailofbits/audit-context-building](https://github.com/trailofbits/skills/tree/main/plugins/audit-context-building)** - Deep architectural context via ultra-granular code analysis
- **[trailofbits/building-secure-contracts](https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts)** - Smart contract security toolkit with vulnerability scanners for 6 blockchains
- **[trailofbits/burpsuite-project-parser](https://github.com/trailofbits/skills/tree/main/plugins/burpsuite-project-parser)** - Search and extract data from Burp Suite project files
- **[trailofbits/claude-in-chrome-troubleshooting](https://github.com/trailofbits/skills/tree/main/plugins/claude-in-chrome-troubleshooting)** - Diagnose and fix Claude in Chrome MCP extension connectivity issues
- **[trailofbits/constant-time-analysis](https://github.com/trailofbits/skills/tree/main/plugins/constant-time-analysis)** - Detect compiler-induced timing side-channels in crypto code
- **[trailofbits/culture-index](https://github.com/trailofbits/skills/tree/main/plugins/culture-index)** - Index and search culture documentation
- **[trailofbits/differential-review](https://github.com/trailofbits/skills/tree/main/plugins/differential-review)** - Security-focused diff review with git history analysis
- **[trailofbits/dwarf-expert](https://github.com/trailofbits/skills/tree/main/plugins/dwarf-expert)** - DWARF debugging format expertise
- **[trailofbits/entry-point-analyzer](https://github.com/trailofbits/skills/tree/main/plugins/entry-point-analyzer)** - Identify state-changing entry points in smart contracts
- **[trailofbits/firebase-apk-scanner](https://github.com/trailofbits/skills/tree/main/plugins/firebase-apk-scanner)** - Scan Android APKs for Firebase misconfigurations and security vulnerabilities
- **[trailofbits/fix-review](https://github.com/trailofbits/skills/tree/main/plugins/fix-review)** - Verify fix commits address audit findings without new bugs
- **[trailofbits/insecure-defaults](https://github.com/trailofbits/skills/tree/main/plugins/insecure-defaults)** - Detect insecure default configurations like hardcoded secrets, default credentials, and weak crypto
- **[trailofbits/modern-python](https://github.com/trailofbits/skills/tree/main/plugins/modern-python)** - Modern Python tooling with uv, ruff, ty, and pytest best practices
- **[trailofbits/property-based-testing](https://github.com/trailofbits/skills/tree/main/plugins/property-based-testing)** - Property-based testing for multiple languages and smart contracts
- **[trailofbits/semgrep-rule-creator](https://github.com/trailofbits/skills/tree/main/plugins/semgrep-rule-creator)** - Create and refine Semgrep rules for vulnerability detection
- **[trailofbits/semgrep-rule-variant-creator](https://github.com/trailofbits/skills/tree/main/plugins/semgrep-rule-variant-creator)** - Port existing Semgrep rules to new target languages with test-driven validation
- **[trailofbits/sharp-edges](https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges)** - Identify error-prone APIs and dangerous configurations
- **[trailofbits/spec-to-code-compliance](https://github.com/trailofbits/skills/tree/main/plugins/spec-to-code-compliance)** - Specification-to-code compliance checker for blockchain audits
- **[trailofbits/static-analysis](https://github.com/trailofbits/skills/tree/main/plugins/static-analysis)** - Static analysis toolkit with CodeQL, Semgrep, and SARIF
- **[trailofbits/testing-handbook-skills](https://github.com/trailofbits/skills/tree/main/plugins/testing-handbook-skills)** - Testing Handbook skills: fuzzers, static analysis, sanitizers
- **[trailofbits/variant-analysis](https://github.com/trailofbits/skills/tree/main/plugins/variant-analysis)** - Find similar vulnerabilities via pattern-based analysis

</details>

<details>
<summary><h3 style="display:inline">Skills by Sentry team for their dev team.</h3></summary>

- **[getsentry/agents-md](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/agents-md)** - Generate and manage AGENTS.md files
- **[getsentry/claude-settings-audit](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/claude-settings-audit)** - Audit Claude settings configuration
- **[getsentry/code-review](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/code-review)** - Perform code reviews
- **[getsentry/commit](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/commit)** - Create commits with best practices
- **[getsentry/create-pr](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/create-pr)** - Create pull requests
- **[getsentry/find-bugs](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/find-bugs)** - Find and identify bugs in code
- **[getsentry/iterate-pr](https://github.com/getsentry/skills/tree/main/plugins/sentry-skills/skills/iterate-pr)** - Iterate on pull request feedback

</details>

<details>
<summary><h3 style="display:inline">Skills by Microsoft</h3></summary>

Domain-specific knowledge for Azure SDK and Foundry development.

### .NET Skills

- **[microsoft/azure-ai-agents-persistent-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-agents-persistent-dotnet)** - Persistent AI agents with threads and tools
- **[microsoft/azure-ai-document-intelligence-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-document-intelligence-dotnet)** - Document text, table, and data extraction
- **[microsoft/azure-ai-openai-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-openai-dotnet)** - GPT-4, embeddings, DALL-E, and Whisper client
- **[microsoft/azure-ai-projects-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-projects-dotnet)** - AI Foundry project management SDK
- **[microsoft/azure-ai-voicelive-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-voicelive-dotnet)** - Real-time bidirectional voice AI
- **[microsoft/azure-eventgrid-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventgrid-dotnet)** - Event Grid topic and domain publishing
- **[microsoft/azure-eventhub-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventhub-dotnet)** - High-throughput event streaming
- **[microsoft/azure-identity-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-identity-dotnet)** - Microsoft Entra ID authentication
- **[microsoft/azure-maps-search-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-maps-search-dotnet)** - Geocoding, routing, and weather services
- **[microsoft/azure-mgmt-apicenter-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-apicenter-dotnet)** - API inventory and governance
- **[microsoft/azure-mgmt-apimanagement-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-apimanagement-dotnet)** - API Management provisioning via ARM
- **[microsoft/azure-mgmt-applicationinsights-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-applicationinsights-dotnet)** - Application Insights resource management
- **[microsoft/azure-mgmt-arizeaiobservabilityeval-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-arizeaiobservabilityeval-dotnet)** - Arize AI observability management
- **[microsoft/azure-mgmt-botservice-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-botservice-dotnet)** - Bot Service provisioning via ARM
- **[microsoft/azure-mgmt-fabric-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-fabric-dotnet)** - Microsoft Fabric capacity management
- **[microsoft/azure-mgmt-mongodbatlas-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-mongodbatlas-dotnet)** - MongoDB Atlas as ARM resources
- **[microsoft/azure-mgmt-weightsandbiases-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-weightsandbiases-dotnet)** - Weights & Biases deployment management
- **[microsoft/azure-resource-manager-cosmosdb-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-cosmosdb-dotnet)** - Cosmos DB resource provisioning
- **[microsoft/azure-resource-manager-durabletask-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-durabletask-dotnet)** - Durable Task Scheduler management
- **[microsoft/azure-resource-manager-mysql-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-mysql-dotnet)** - MySQL Flexible Server management
- **[microsoft/azure-resource-manager-playwright-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-playwright-dotnet)** - Playwright Testing workspace management
- **[microsoft/azure-resource-manager-postgresql-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-postgresql-dotnet)** - PostgreSQL Flexible Server management
- **[microsoft/azure-resource-manager-redis-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-redis-dotnet)** - Azure Cache for Redis provisioning
- **[microsoft/azure-resource-manager-sql-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-resource-manager-sql-dotnet)** - Azure SQL resource management
- **[microsoft/azure-search-documents-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-search-documents-dotnet)** - Full-text, vector, and hybrid search
- **[microsoft/azure-security-keyvault-keys-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-security-keyvault-keys-dotnet)** - Cryptographic key management
- **[microsoft/azure-servicebus-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/azure-servicebus-dotnet)** - Enterprise messaging with queues and topics
- **[microsoft/m365-agents-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/m365-agents-dotnet)** - M365, Teams, and Copilot Studio agents
- **[microsoft/microsoft-azure-webjobs-extensions-authentication-events-dotnet](https://github.com/microsoft/skills/tree/main/.github/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet)** - Entra ID custom auth events handler

### Java Skills

- **[microsoft/azure-ai-agents-persistent-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-agents-persistent-java)** - Persistent AI agents with threads and tools
- **[microsoft/azure-ai-anomalydetector-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-anomalydetector-java)** - Anomaly detection applications
- **[microsoft/azure-ai-contentsafety-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-contentsafety-java)** - Content moderation and safety
- **[microsoft/azure-ai-formrecognizer-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-formrecognizer-java)** - Document analysis and form extraction
- **[microsoft/azure-ai-projects-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-projects-java)** - AI Foundry project management
- **[microsoft/azure-ai-vision-imageanalysis-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-vision-imageanalysis-java)** - Image captioning, OCR, and object detection
- **[microsoft/azure-ai-voicelive-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-voicelive-java)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-appconfiguration-java)** - Centralized app configuration management
- **[microsoft/azure-communication-callautomation-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-communication-callautomation-java)** - Call automation with IVR and AI
- **[microsoft/azure-communication-callingserver-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-communication-callingserver-java)** - CallingServer legacy SDK
- **[microsoft/azure-communication-chat-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-communication-chat-java)** - Real-time chat with threads and receipts
- **[microsoft/azure-communication-common-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-communication-common-java)** - Communication Services common utilities
- **[microsoft/azure-communication-sms-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-communication-sms-java)** - SMS sending and delivery reports
- **[microsoft/azure-compute-batch-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-compute-batch-java)** - Large-scale parallel and HPC batch jobs
- **[microsoft/azure-cosmos-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-cosmos-java)** - Cosmos DB NoSQL with global distribution
- **[microsoft/azure-data-tables-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-data-tables-java)** - NoSQL key-value table storage
- **[microsoft/azure-eventgrid-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventgrid-java)** - Event-driven pub/sub messaging
- **[microsoft/azure-eventhub-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventhub-java)** - Real-time high-throughput streaming
- **[microsoft/azure-identity-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-identity-java)** - Microsoft Entra ID authentication
- **[microsoft/azure-messaging-webpubsub-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-messaging-webpubsub-java)** - Real-time WebSocket messaging
- **[microsoft/azure-monitor-ingestion-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-ingestion-java)** - Custom log ingestion to Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-opentelemetry-exporter-java)** - OpenTelemetry export to Azure Monitor
- **[microsoft/azure-monitor-query-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-query-java)** - Query Azure Monitor logs and metrics
- **[microsoft/azure-security-keyvault-keys-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-security-keyvault-keys-java)** - Cryptographic key management
- **[microsoft/azure-security-keyvault-secrets-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-security-keyvault-secrets-java)** - Secret management for passwords and keys
- **[microsoft/azure-storage-blob-java](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-blob-java)** - Blob storage for file management

### Python Skills

- **[microsoft/agent-framework-azure-ai-py](https://github.com/microsoft/skills/tree/main/.github/skills/agent-framework-azure-ai-py)** - Agent Framework for Azure AI Foundry
- **[microsoft/agents-v2-py](https://github.com/microsoft/skills/tree/main/.github/skills/agents-v2-py)** - Container-based hosted agents
- **[microsoft/azure-ai-contentsafety-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-contentsafety-py)** - Harmful content detection
- **[microsoft/azure-ai-contentunderstanding-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-contentunderstanding-py)** - Multimodal content extraction
- **[microsoft/azure-ai-ml-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-ml-py)** - Azure ML workspace and job management
- **[microsoft/azure-ai-projects-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-projects-py)** - AI Foundry project client and agents
- **[microsoft/azure-ai-textanalytics-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-textanalytics-py)** - NLP: sentiment, entities, key phrases
- **[microsoft/azure-ai-transcription-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-transcription-py)** - Speech-to-text transcription
- **[microsoft/azure-ai-translation-document-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-translation-document-py)** - Batch document translation
- **[microsoft/azure-ai-translation-text-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-translation-text-py)** - Real-time text translation
- **[microsoft/azure-ai-vision-imageanalysis-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-vision-imageanalysis-py)** - Image captions, tags, OCR, objects
- **[microsoft/azure-ai-voicelive-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-voicelive-py)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-appconfiguration-py)** - Feature flags and dynamic settings
- **[microsoft/azure-containerregistry-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-containerregistry-py)** - Container image and registry management
- **[microsoft/azure-cosmos-db-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-cosmos-db-py)** - Cosmos DB with Python/FastAPI patterns
- **[microsoft/azure-cosmos-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-cosmos-py)** - Cosmos DB NoSQL client library
- **[microsoft/azure-data-tables-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-data-tables-py)** - NoSQL key-value table storage
- **[microsoft/azure-eventgrid-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventgrid-py)** - Event-driven pub/sub routing
- **[microsoft/azure-eventhub-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventhub-py)** - High-throughput event streaming
- **[microsoft/azure-identity-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-identity-py)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-py)** - Secrets, keys, and certificate management
- **[microsoft/azure-messaging-webpubsubservice-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-messaging-webpubsubservice-py)** - Real-time WebSocket messaging
- **[microsoft/azure-mgmt-apicenter-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-apicenter-py)** - API inventory and governance
- **[microsoft/azure-mgmt-apimanagement-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-apimanagement-py)** - API Management service administration
- **[microsoft/azure-mgmt-botservice-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-botservice-py)** - Bot Service resource management
- **[microsoft/azure-mgmt-fabric-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-mgmt-fabric-py)** - Microsoft Fabric capacity management
- **[microsoft/azure-monitor-ingestion-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-ingestion-py)** - Custom log ingestion to Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-opentelemetry-exporter-py)** - OpenTelemetry export to Application Insights
- **[microsoft/azure-monitor-opentelemetry-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-opentelemetry-py)** - One-line Application Insights setup
- **[microsoft/azure-monitor-query-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-query-py)** - Query Azure Monitor logs and metrics
- **[microsoft/azure-search-documents-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-search-documents-py)** - Full-text, vector, and hybrid search
- **[microsoft/azure-servicebus-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-servicebus-py)** - Enterprise messaging with queues and topics
- **[microsoft/azure-speech-to-text-rest-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-speech-to-text-rest-py)** - REST speech-to-text for short audio
- **[microsoft/azure-storage-blob-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-blob-py)** - Blob object storage client
- **[microsoft/azure-storage-file-datalake-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-file-datalake-py)** - Hierarchical data lake storage
- **[microsoft/azure-storage-file-share-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-file-share-py)** - SMB file share management
- **[microsoft/azure-storage-queue-py](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-queue-py)** - Simple message queuing
- **[microsoft/fastapi-router-py](https://github.com/microsoft/skills/tree/main/.github/skills/fastapi-router-py)** - FastAPI routers with CRUD and auth
- **[microsoft/hosted-agents-v2-py](https://github.com/microsoft/skills/tree/main/.github/skills/hosted-agents-v2-py)** - Container-based hosted agents
- **[microsoft/m365-agents-py](https://github.com/microsoft/skills/tree/main/.github/skills/m365-agents-py)** - M365, Teams, and Copilot Studio agents
- **[microsoft/pydantic-models-py](https://github.com/microsoft/skills/tree/main/.github/skills/pydantic-models-py)** - Pydantic models for API schemas

### Rust Skills

- **[microsoft/azure-cosmos-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-cosmos-rust)** - Cosmos DB NoSQL client
- **[microsoft/azure-eventhub-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventhub-rust)** - Event Hubs streaming client
- **[microsoft/azure-identity-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-identity-rust)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-certificates-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-certificates-rust)** - Key Vault certificate management
- **[microsoft/azure-keyvault-keys-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-keys-rust)** - Key Vault cryptographic key management
- **[microsoft/azure-keyvault-secrets-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-secrets-rust)** - Key Vault secret storage
- **[microsoft/azure-storage-blob-rust](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-blob-rust)** - Blob object storage client

### TypeScript Skills

- **[microsoft/azure-ai-contentsafety-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-contentsafety-ts)** - Content safety for text and images
- **[microsoft/azure-ai-document-intelligence-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-document-intelligence-ts)** - Document text and table extraction
- **[microsoft/azure-ai-projects-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-projects-ts)** - AI Foundry project client and agents
- **[microsoft/azure-ai-translation-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-translation-ts)** - Text and document translation
- **[microsoft/azure-ai-voicelive-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-ai-voicelive-ts)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-appconfiguration-ts)** - App config, feature flags, dynamic refresh
- **[microsoft/azure-cosmos-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-cosmos-ts)** - Cosmos DB NoSQL CRUD and queries
- **[microsoft/azure-eventhub-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-eventhub-ts)** - High-throughput event streaming
- **[microsoft/azure-identity-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-identity-ts)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-keys-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-keys-ts)** - Cryptographic key management
- **[microsoft/azure-keyvault-secrets-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-keyvault-secrets-ts)** - Secret storage and retrieval
- **[microsoft/azure-microsoft-playwright-testing-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-microsoft-playwright-testing-ts)** - Playwright tests at scale on Azure
- **[microsoft/azure-monitor-opentelemetry-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-monitor-opentelemetry-ts)** - Application Insights tracing and metrics
- **[microsoft/azure-postgres-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-postgres-ts)** - PostgreSQL Flexible Server connection
- **[microsoft/azure-search-documents-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-search-documents-ts)** - Vector/hybrid search with semantic ranking
- **[microsoft/azure-servicebus-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-servicebus-ts)** - Messaging with queues and topics
- **[microsoft/azure-storage-blob-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-blob-ts)** - Blob upload, download, and management
- **[microsoft/azure-storage-file-share-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-file-share-ts)** - SMB file share operations
- **[microsoft/azure-storage-queue-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-storage-queue-ts)** - Queue message operations
- **[microsoft/azure-web-pubsub-ts](https://github.com/microsoft/skills/tree/main/.github/skills/azure-web-pubsub-ts)** - Real-time WebSocket pub/sub messaging
- **[microsoft/frontend-ui-dark-ts](https://github.com/microsoft/skills/tree/main/.github/skills/frontend-ui-dark-ts)** - Dark-themed React with Tailwind and animations
- **[microsoft/m365-agents-ts](https://github.com/microsoft/skills/tree/main/.github/skills/m365-agents-ts)** - M365, Teams, and Copilot Studio agents
- **[microsoft/react-flow-node-ts](https://github.com/microsoft/skills/tree/main/.github/skills/react-flow-node-ts)** - React Flow node components with Zustand
- **[microsoft/zustand-store-ts](https://github.com/microsoft/skills/tree/main/.github/skills/zustand-store-ts)** - Zustand stores with middleware patterns

### General Skills

- **[microsoft/azd-deployment](https://github.com/microsoft/skills/tree/main/.github/skills/azd-deployment)** - Azure Container Apps deployment with azd
- **[microsoft/github-issue-creator](https://github.com/microsoft/skills/tree/main/.github/skills/github-issue-creator)** - Structured GitHub issue reports from notes
- **[microsoft/mcp-builder](https://github.com/microsoft/skills/tree/main/.github/skills/mcp-builder)** - MCP server creation guide
- **[microsoft/podcast-generation](https://github.com/microsoft/skills/tree/main/.github/skills/podcast-generation)** - AI podcast audio with GPT Realtime Mini
- **[microsoft/skill-creator](https://github.com/microsoft/skills/tree/main/.github/skills/skill-creator)** - Skill creation guide for Azure AI agents

</details>

<details>
<summary><h3 style="display:inline">Skills by fal.ai Team</h3></summary>

- **[fal-ai-community/fal-audio](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-audio/SKILL.md)** - Text-to-speech and speech-to-text using fal.ai audio models
- **[fal-ai-community/fal-generate](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-generate/SKILL.md)** - Generate images and videos using fal.ai AI models
- **[fal-ai-community/fal-image-edit](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-image-edit/SKILL.md)** - AI-powered image editing with style transfer and object removal
- **[fal-ai-community/fal-platform](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-platform/SKILL.md)** - Platform APIs for model management, pricing, and usage tracking
- **[fal-ai-community/fal-upscale](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-upscale/SKILL.md)** - Upscale and enhance image and video resolution using AI
- **[fal-ai-community/fal-workflow](https://github.com/fal-ai-community/skills/blob/main/skills/claude.ai/fal-workflow/SKILL.md)** - Generate workflow JSON files for chaining AI models

</details>

<details>
<summary><h3 style="display:inline">Skills by WordPress Development Team</h3></summary>

- **[WordPress/wordpress-router](https://github.com/WordPress/agent-skills/tree/trunk/skills/wordpress-router)** - Classifies WordPress repos and routes to the right workflow
- **[WordPress/wp-project-triage](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-project-triage)** - Detects project type, tooling, and versions automatically
- **[WordPress/wp-block-development](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-block-development)** - Gutenberg blocks: block.json, attributes, rendering, deprecations
- **[WordPress/wp-block-themes](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-block-themes)** - Block themes: theme.json, templates, patterns, style variations
- **[WordPress/wp-plugin-development](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-plugin-development)** - Plugin architecture, hooks, settings API, security
- **[WordPress/wp-rest-api](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-rest-api)** - REST API routes/endpoints, schema, auth, and response shaping
- **[WordPress/wp-interactivity-api](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-interactivity-api)** - Frontend interactivity with data-wp-* directives and stores
- **[WordPress/wp-abilities-api](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-abilities-api)** - Capability-based permissions and REST API authentication
- **[WordPress/wp-wpcli-and-ops](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-wpcli-and-ops)** - WP-CLI commands, automation, multisite, search-replace
- **[WordPress/wp-performance](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-performance)** - Profiling, caching, database optimization, Server-Timing
- **[WordPress/wp-phpstan](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-phpstan)** - PHPStan static analysis for WordPress projects
- **[WordPress/wp-playground](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-playground)** - WordPress Playground for instant local environments
- **[WordPress/wpds](https://github.com/WordPress/agent-skills/tree/trunk/skills/wpds)** - WordPress Design System

</details>

<details>
<summary><h3 style="display:inline">Skills by Transloadit Team</h3></summary>

- **[transloadit/transloadit](https://github.com/transloadit/skills/tree/main/skills/transloadit)** - Routes media tasks to the right skill
- **[transloadit/docs-transloadit-robots](https://github.com/transloadit/skills/tree/main/skills/docs-transloadit-robots)** - Look up any of 86+ processing Robots
- **[transloadit/transform-generate-image](https://github.com/transloadit/skills/tree/main/skills/transform-generate-image-with-transloadit)** - Generate images via AI models
- **[transloadit/transform-encode-hls-video](https://github.com/transloadit/skills/tree/main/skills/transform-encode-hls-video-with-transloadit)** - Encode video to HLS streaming format
- **[transloadit/integrate-uppy-s3-uploading](https://github.com/transloadit/skills/tree/main/skills/integrate-uppy-transloadit-s3-uploading-to-nextjs)** - Add Uppy file uploads to Next.js apps
- **[transloadit/integrate-smartcdn-delivery](https://github.com/transloadit/skills/tree/main/skills/integrate-asset-delivery-with-transloadit-smartcdn-in-nextjs)** - Smart CDN asset delivery in Next.js

</details>

<details>
<summary><h3 style="display:inline">Skills by OpenAI</h3></summary>

Official curated skills from OpenAI's skills repository.

- **[openai/cloudflare-deploy](https://github.com/openai/skills/tree/main/skills/.curated/cloudflare-deploy)** - Deploy apps to Cloudflare using Workers, Pages, and platform services
- **[openai/develop-web-game](https://github.com/openai/skills/tree/main/skills/.curated/develop-web-game)** - Build and test web games iteratively using Playwright with time-stepping
- **[openai/doc](https://github.com/openai/skills/tree/main/skills/.curated/doc)** - Read, create, and edit .docx documents with formatting and layout fidelity
- **[openai/figma-implement-design](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design)** - Translate Figma designs into production-ready code with pixel-perfect accuracy
- **[openai/figma](https://github.com/openai/skills/tree/main/skills/.curated/figma)** - Fetch design context, screenshots, and assets from Figma for implementation
- **[openai/gh-address-comments](https://github.com/openai/skills/tree/main/skills/.curated/gh-address-comments)** - Address review and issue comments on open GitHub PRs via CLI
- **[openai/gh-fix-ci](https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci)** - Debug and fix failing GitHub Actions PR checks using log inspection
- **[openai/imagegen](https://github.com/openai/skills/tree/main/skills/.curated/imagegen)** - Generate and edit images using OpenAI's Image API for projects
- **[openai/jupyter-notebook](https://github.com/openai/skills/tree/main/skills/.curated/jupyter-notebook)** - Create clean, reproducible Jupyter notebooks for experiments and tutorials
- **[openai/linear](https://github.com/openai/skills/tree/main/skills/.curated/linear)** - Manage issues, projects, and team workflows in Linear
- **[openai/netlify-deploy](https://github.com/openai/skills/tree/main/skills/.curated/netlify-deploy)** - Automate Netlify deployments with CLI auth, linking, and environment support
- **[openai/notion-knowledge-capture](https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture)** - Convert conversations into structured, searchable Notion wiki entries
- **[openai/notion-meeting-intelligence](https://github.com/openai/skills/tree/main/skills/.curated/notion-meeting-intelligence)** - Prep meetings by pulling Notion context and tailoring agendas
- **[openai/notion-research-documentation](https://github.com/openai/skills/tree/main/skills/.curated/notion-research-documentation)** - Research Notion content and synthesize findings into structured briefs
- **[openai/notion-spec-to-implementation](https://github.com/openai/skills/tree/main/skills/.curated/notion-spec-to-implementation)** - Convert Notion specs into linked implementation plans and tasks
- **[openai/openai-docs](https://github.com/openai/skills/tree/main/skills/.curated/openai-docs)** - Provide authoritative guidance from OpenAI developer documentation
- **[openai/pdf](https://github.com/openai/skills/tree/main/skills/.curated/pdf)** - Read, create, and review PDFs with layout and visual formatting integrity
- **[openai/playwright](https://github.com/openai/skills/tree/main/skills/.curated/playwright)** - Automate real browser interactions for navigation, forms, and scraping
- **[openai/render-deploy](https://github.com/openai/skills/tree/main/skills/.curated/render-deploy)** - Deploy applications to Render's cloud platform using Git-backed services
- **[openai/screenshot](https://github.com/openai/skills/tree/main/skills/.curated/screenshot)** - Capture desktop, app windows, or pixel regions across OS platforms
- **[openai/security-best-practices](https://github.com/openai/skills/tree/main/skills/.curated/security-best-practices)** - Review code for language-specific security vulnerabilities
- **[openai/security-ownership-map](https://github.com/openai/skills/tree/main/skills/.curated/security-ownership-map)** - Map people-to-file ownership, compute bus factor, and identify risks
- **[openai/security-threat-model](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model)** - Generate repo-specific threat models identifying trust boundaries
- **[openai/sentry](https://github.com/openai/skills/tree/main/skills/.curated/sentry)** - Inspect Sentry issues, summarize production errors, and pull health data
- **[openai/sora](https://github.com/openai/skills/tree/main/skills/.curated/sora)** - Generate, remix, and manage short video clips via OpenAI's Sora API
- **[openai/speech](https://github.com/openai/skills/tree/main/skills/.curated/speech)** - Generate spoken audio from text using OpenAI's API with built-in voices
- **[openai/spreadsheet](https://github.com/openai/skills/tree/main/skills/.curated/spreadsheet)** - Create, edit, analyze, and visualize spreadsheets with formulas
- **[openai/transcribe](https://github.com/openai/skills/tree/main/skills/.curated/transcribe)** - Transcribe audio files to text with optional speaker diarization
- **[openai/vercel-deploy](https://github.com/openai/skills/tree/main/skills/.curated/vercel-deploy)** - Deploy applications and websites to Vercel with preview or production options
- **[openai/yeet](https://github.com/openai/skills/tree/main/skills/.curated/yeet)** - Stage, commit, push code, and open a GitHub pull request via CLI

</details>

<details>
<summary><h3 style="display:inline">Marketing Skills by Corey Haines</h3></summary>

Official marketing skills by [Corey Haines](https://github.com/coreyhaines31), covering the full SaaS marketing stack from SEO and copywriting to growth, CRO, and paid acquisition.

- **[coreyhaines31/ab-test-setup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ab-test-setup)** - Plan and implement A/B tests or experiments for any digital experience
- **[coreyhaines31/ad-creative](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ad-creative)** - Generate and iterate ad creative including headlines, descriptions, and primary text
- **[coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo)** - Optimize content to appear in AI-generated answers and LLM search results
- **[coreyhaines31/analytics-tracking](https://github.com/coreyhaines31/marketingskills/tree/main/skills/analytics-tracking)** - Set up and audit analytics tracking and measurement pipelines
- **[coreyhaines31/churn-prevention](https://github.com/coreyhaines31/marketingskills/tree/main/skills/churn-prevention)** - Build cancellation flows, save offers, and recover failed payments
- **[coreyhaines31/cold-email](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cold-email)** - Write B2B cold emails and follow-up sequences that convert
- **[coreyhaines31/competitor-alternatives](https://github.com/coreyhaines31/marketingskills/tree/main/skills/competitor-alternatives)** - Build competitor comparison and alternative landing pages for SEO
- **[coreyhaines31/content-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/content-strategy)** - Plan content strategy and decide what topics and formats to prioritize
- **[coreyhaines31/copy-editing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing)** - Edit and improve existing marketing copy for clarity and impact
- **[coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting)** - Write and rewrite marketing copy for landing pages, homepages, and ads
- **[coreyhaines31/email-sequence](https://github.com/coreyhaines31/marketingskills/tree/main/skills/email-sequence)** - Build email sequences, drip campaigns, and lifecycle email flows
- **[coreyhaines31/form-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/form-cro)** - Optimize lead capture and contact forms to improve conversion
- **[coreyhaines31/free-tool-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/free-tool-strategy)** - Plan and build free tools for lead generation and SEO value
- **[coreyhaines31/launch-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/launch-strategy)** - Plan product launches, feature announcements, and go-to-market strategies
- **[coreyhaines31/marketing-ideas](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-ideas)** - Generate marketing strategies and campaign ideas for SaaS products
- **[coreyhaines31/marketing-psychology](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-psychology)** - Apply psychological principles and behavioral science to copy and design
- **[coreyhaines31/onboarding-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/onboarding-cro)** - Optimize post-signup onboarding and user activation to improve time-to-value
- **[coreyhaines31/page-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/page-cro)** - Improve conversion rates on any marketing page including homepages and landing pages
- **[coreyhaines31/paid-ads](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paid-ads)** - Create and optimize paid campaigns on Google, Meta, LinkedIn, and more
- **[coreyhaines31/paywall-upgrade-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paywall-upgrade-cro)** - Design and optimize upgrade screens, paywalls, and upsell modals
- **[coreyhaines31/popup-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/popup-cro)** - Create and optimize popups, modals, and slide-ins for conversions
- **[coreyhaines31/pricing-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing-strategy)** - Define pricing, packaging, and monetization strategy for SaaS products
- **[coreyhaines31/product-marketing-context](https://github.com/coreyhaines31/marketingskills/tree/main/skills/product-marketing-context)** - Create and maintain a product marketing context document for consistent messaging
- **[coreyhaines31/programmatic-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/programmatic-seo)** - Build SEO-driven page templates for large-scale content generation
- **[coreyhaines31/referral-program](https://github.com/coreyhaines31/marketingskills/tree/main/skills/referral-program)** - Design and optimize referral, affiliate, and word-of-mouth programs
- **[coreyhaines31/revops](https://github.com/coreyhaines31/marketingskills/tree/main/skills/revops)** - Streamline revenue operations, lead lifecycle, and marketing-to-sales handoff
- **[coreyhaines31/sales-enablement](https://github.com/coreyhaines31/marketingskills/tree/main/skills/sales-enablement)** - Create pitch decks, one-pagers, objection handling docs, and demo scripts
- **[coreyhaines31/schema-markup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/schema-markup)** - Add and optimize schema markup and structured data for better SEO
- **[coreyhaines31/seo-audit](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit)** - Audit and diagnose technical and on-page SEO issues on a site
- **[coreyhaines31/signup-flow-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/signup-flow-cro)** - Optimize signup, registration, and trial activation flows for higher conversion
- **[coreyhaines31/site-architecture](https://github.com/coreyhaines31/marketingskills/tree/main/skills/site-architecture)** - Plan and restructure page hierarchy, navigation, and URL structure
- **[coreyhaines31/social-content](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social-content)** - Create and schedule social media content for LinkedIn, Twitter/X, and Instagram

</details>

<details>
<summary><h3 style="display:inline">Skills by Binance</h3></summary>

Official Web3 and trading skills from the Binance team. Includes crypto market data, on-chain analytics, token security auditing, and spot trading via the Binance API.

- **[binance/crypto-market-rank](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/crypto-market-rank)** - Query crypto market rankings including trending tokens, smart money inflows, meme rankings, and top trader PnL leaderboards
- **[binance/meme-rush](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/meme-rush)** - Track real-time meme token lists from launchpads (Pump.fun, Four.meme) and AI-powered hot market topics ranked by net inflow
- **[binance/query-address-info](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/query-address-info)** - Retrieve all token holdings and portfolio positions for any wallet address on BSC, Base, or Solana
- **[binance/query-token-audit](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/query-token-audit)** - Audit token security to detect scams, honeypots, and malicious contracts across BSC, Base, Solana, and Ethereum
- **[binance/query-token-info](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/query-token-info)** - Search tokens and fetch metadata, real-time market data, and K-Line candlestick charts by keyword or contract address
- **[binance/trading-signal](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/trading-signal)** - Monitor on-chain Smart Money buy/sell signals with price, max gain, and exit rate data on Solana and BSC
- **[binance/spot](https://github.com/binance/binance-skills-hub/tree/main/skills/binance/spot)** - Place and manage spot trading orders on Binance via API key authentication, supporting mainnet and testnet

</details>

<details>
<summary><h3 style="display:inline">Product Manager Skills by Dean Peters</h3></summary>

46 battle-tested product management skills by [Dean Peters](https://github.com/deanpeters). Frame problems, hunt opportunities, scaffold validation experiments, and kill bad bets fast — with frameworks from Teresa Torres, Geoffrey Moore, Amazon, MITRE, and more.

**Component Skills**

- **[deanpeters/acquisition-channel-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/acquisition-channel-advisor)** - Evaluate channels using unit economics and recommend scale/test/kill decisions
- **[deanpeters/ai-shaped-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/ai-shaped-readiness-advisor)** - Assess automation vs. redesign opportunities across five competencies
- **[deanpeters/altitude-horizon-framework](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/altitude-horizon-framework)** - Navigate the PM→Director mindset shift covering scope, time horizons, and failure modes
- **[deanpeters/business-health-diagnostic](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/business-health-diagnostic)** - Diagnose SaaS health, identify red flags, and prioritize recovery actions
- **[deanpeters/company-research](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/company-research)** - Deep-dive competitor or company analysis
- **[deanpeters/customer-journey-map](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-map)** - Map customer experience across touchpoints using the NNGroup framework
- **[deanpeters/eol-message](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/eol-message)** - Communicate product or feature deprecation gracefully
- **[deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis)** - Turn initiatives into testable hypotheses with measurable success metrics
- **[deanpeters/finance-metrics-quickref](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-metrics-quickref)** - Reference guide for 32+ SaaS finance metrics with formulas and benchmarks
- **[deanpeters/jobs-to-be-done](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/jobs-to-be-done)** - Understand customer objectives using the JTBD framework
- **[deanpeters/pestel-analysis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pestel-analysis)** - Analyze external factors across Political, Economic, Social, Tech, Environmental, and Legal dimensions
- **[deanpeters/pol-probe](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe)** - Define lightweight validation experiments to test hypotheses
- **[deanpeters/positioning-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-statement)** - Define target audience, problem solved, and differentiation using Geoffrey Moore's framework
- **[deanpeters/press-release](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/press-release)** - Clarify product vision with a future press release using Amazon's Working Backwards method
- **[deanpeters/problem-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-statement)** - Frame customer problems with evidence before jumping to solutions
- **[deanpeters/proto-persona](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/proto-persona)** - Create hypothesis-driven personas before conducting full research
- **[deanpeters/recommendation-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/recommendation-canvas)** - Document AI-powered product recommendations
- **[deanpeters/saas-economics-efficiency-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-economics-efficiency-metrics)** - Calculate unit economics and capital efficiency including CAC, LTV, payback, and Rule of 40
- **[deanpeters/saas-revenue-growth-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-revenue-growth-metrics)** - Track revenue, retention, and growth metrics including MRR/ARR, churn, NRR, and expansion
- **[deanpeters/storyboard](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/storyboard)** - Visualize user journeys with 6-frame narrative storyboards
- **[deanpeters/user-story](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story)** - Write user stories with acceptance criteria using Mike Cohn and Gherkin formats
- **[deanpeters/user-story-mapping](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping)** - Organize stories by user workflow using Jeff Patton's story mapping approach
- **[deanpeters/user-story-splitting](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-splitting)** - Break down large stories using 8 proven splitting patterns

**Interactive Skills**

- **[deanpeters/context-engineering-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/context-engineering-advisor)** - Diagnose context stuffing vs. engineering and guide memory and retrieval design
- **[deanpeters/customer-journey-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-mapping-workshop)** - Guide journey mapping sessions with pain point identification
- **[deanpeters/director-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/director-readiness-advisor)** - Coach the PM→Director transition across four key situations
- **[deanpeters/discovery-interview-prep](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-interview-prep)** - Plan customer interviews using Mom Test style based on research goals
- **[deanpeters/epic-breakdown-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-breakdown-advisor)** - Split epics into stories using Richard Lawrence's 9 splitting patterns
- **[deanpeters/feature-investment-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/feature-investment-advisor)** - Evaluate features using ROI and strategic value scoring
- **[deanpeters/finance-based-pricing-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-based-pricing-advisor)** - Evaluate pricing changes using financial impact analysis
- **[deanpeters/lean-ux-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/lean-ux-canvas)** - Set up hypothesis-driven planning using Jeff Gothelf's Lean UX Canvas v2
- **[deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree)** - Generate opportunities and solutions and recommend proof-of-concept tests
- **[deanpeters/pol-probe-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe-advisor)** - Recommend prototype type: Feasibility, Task-Focused, Narrative, Synthetic, or Vibe
- **[deanpeters/positioning-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-workshop)** - Guide positioning definition with adaptive discovery questions
- **[deanpeters/prioritization-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prioritization-advisor)** - Recommend the right prioritization framework (RICE, ICE, Kano, etc.) for your situation
- **[deanpeters/problem-framing-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-framing-canvas)** - Lead through MITRE Problem Framing: Look Inward, Outward, and Reframe
- **[deanpeters/tam-sam-som-calculator](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/tam-sam-som-calculator)** - Project market size with real-world data and citations
- **[deanpeters/user-story-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping-workshop)** - Walk through creating story maps with backbone and release slices
- **[deanpeters/vp-cpo-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/vp-cpo-readiness-advisor)** - Coach the Director→VP/CPO transition including a CEO interview framework
- **[deanpeters/workshop-facilitation](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/workshop-facilitation)** - Add step-by-step facilitation with numbered recommendations to any workshop

**Workflow Skills**

- **[deanpeters/discovery-process](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-process)** - Full discovery cycle: frame problem → research → synthesize → validate (3-4 weeks)
- **[deanpeters/executive-onboarding-playbook](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/executive-onboarding-playbook)** - 30-60-90 day diagnostic playbook for VP/CPO onboarding transitions
- **[deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development)** - Structured PRD process: problem → personas → solution → metrics → stories (2-4 days)
- **[deanpeters/product-strategy-session](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/product-strategy-session)** - Full strategy session: positioning → framing → exploration → roadmap (2-4 weeks)
- **[deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning)** - Strategic roadmap process: inputs → epics → prioritize → sequence → communicate (1-2 weeks)
- **[deanpeters/skill-authoring-workflow](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/skill-authoring-workflow)** - Meta workflow for authoring skills: choose path → validate → update docs → package

</details>


<details>
<summary><h3 style="display:inline">Product Management Skills by Pawel Huryn</h3></summary>

65 product management skills by [Paweł Huryn](https://github.com/phuryn), creator of The Product Compass newsletter. Covers the full PM lifecycle — from discovery and strategy to execution, analytics, and go-to-market — with frameworks from Teresa Torres, Geoffrey Moore, and more.

**Data Analytics**

- **[phuryn/ab-test-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/ab-test-analysis)** - Analyze A/B test results with statistical significance and recommendations
- **[phuryn/cohort-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/cohort-analysis)** - Cohort retention curves, feature adoption, and segment insights
- **[phuryn/sql-queries](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/sql-queries)** - Generate SQL queries from natural language across major dialects

**Execution**

- **[phuryn/brainstorm-okrs](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/brainstorm-okrs)** - Brainstorm team OKRs aligned with company objectives
- **[phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd)** - Create a PRD with 8-section template covering problem to release
- **[phuryn/dummy-dataset](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/dummy-dataset)** - Generate realistic dummy datasets in CSV, JSON, or SQL
- **[phuryn/job-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/job-stories)** - Create job stories with acceptance criteria in JTBD format
- **[phuryn/outcome-roadmap](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/outcome-roadmap)** - Transform output roadmaps into outcome-focused strategic plans
- **[phuryn/pre-mortem](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/pre-mortem)** - Run pre-mortem risk analysis on PRDs and launch plans
- **[phuryn/prioritization-frameworks](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/prioritization-frameworks)** - Reference guide to 9 prioritization frameworks with templates
- **[phuryn/release-notes](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/release-notes)** - Generate user-facing release notes from tickets or changelogs
- **[phuryn/retro](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/retro)** - Facilitate structured sprint retrospectives with action items
- **[phuryn/sprint-plan](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/sprint-plan)** - Plan sprints with capacity, story selection, and risk mapping
- **[phuryn/stakeholder-map](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/stakeholder-map)** - Build stakeholder maps with power/interest grid and comms plan
- **[phuryn/summarize-meeting](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/summarize-meeting)** - Summarize meeting transcripts into structured notes and actions
- **[phuryn/test-scenarios](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/test-scenarios)** - Create comprehensive test scenarios from user stories
- **[phuryn/user-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/user-stories)** - Create INVEST-compliant user stories with 3 C's structure
- **[phuryn/wwas](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/wwas)** - Create backlog items in Why-What-Acceptance format

**Go-to-Market**

- **[phuryn/beachhead-segment](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/beachhead-segment)** - Identify the first beachhead market segment for product launch
- **[phuryn/competitive-battlecard](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/competitive-battlecard)** - Create sales-ready battlecards against specific competitors
- **[phuryn/growth-loops](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/growth-loops)** - Identify growth loops across 5 flywheel types for traction
- **[phuryn/gtm-motions](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-motions)** - Identify best GTM motions across 7 types including PLG and ABM
- **[phuryn/gtm-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-strategy)** - Create GTM strategy with channels, messaging, and launch timeline
- **[phuryn/ideal-customer-profile](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/ideal-customer-profile)** - Identify ICP with demographics, behaviors, and JTBD

**Market Research**

- **[phuryn/competitor-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/competitor-analysis)** - Analyze competitors with strengths, weaknesses, and differentiation
- **[phuryn/customer-journey-map](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/customer-journey-map)** - Map customer journeys with touchpoints, emotions, and opportunities
- **[phuryn/market-segments](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-segments)** - Identify 3-5 customer segments with JTBD and product fit
- **[phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing)** - Estimate TAM, SAM, SOM with top-down and bottom-up approaches
- **[phuryn/sentiment-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/sentiment-analysis)** - Analyze user feedback with sentiment scores and JTBD insights
- **[phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas)** - Create 3 user personas with JTBD, pains, and gains
- **[phuryn/user-segmentation](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-segmentation)** - Segment users by behavior, JTBD, and needs from feedback data

**Marketing & Growth**

- **[phuryn/marketing-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/marketing-ideas)** - Generate 5 creative, cost-effective marketing ideas with rationale
- **[phuryn/north-star-metric](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/north-star-metric)** - Define North Star Metric and input metrics constellation
- **[phuryn/positioning-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/positioning-ideas)** - Brainstorm positioning ideas differentiated from competitors
- **[phuryn/product-name](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/product-name)** - Brainstorm 5 memorable product names aligned to brand values
- **[phuryn/value-prop-statements](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/value-prop-statements)** - Generate value prop statements for marketing, sales, and onboarding

**Product Discovery**

- **[phuryn/analyze-feature-requests](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/analyze-feature-requests)** - Prioritize feature requests by theme, impact, effort, and risk
- **[phuryn/brainstorm-experiments-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-existing)** - Design experiments to test assumptions for existing products
- **[phuryn/brainstorm-experiments-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-new)** - Design lean pretotypes for new product validation
- **[phuryn/brainstorm-ideas-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-existing)** - Brainstorm product ideas from PM, Designer, Engineer perspectives
- **[phuryn/brainstorm-ideas-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-new)** - Brainstorm feature ideas for new products in early discovery
- **[phuryn/identify-assumptions-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-existing)** - Identify risky assumptions across Value, Usability, Viability, Feasibility
- **[phuryn/identify-assumptions-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-new)** - Identify risky assumptions for new products across 8 risk categories
- **[phuryn/interview-script](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/interview-script)** - Create structured customer interview scripts with JTBD probing
- **[phuryn/metrics-dashboard](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/metrics-dashboard)** - Define product metrics dashboard with sources and alert thresholds
- **[phuryn/opportunity-solution-tree](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/opportunity-solution-tree)** - Build Opportunity Solution Trees based on Teresa Torres' method
- **[phuryn/prioritize-assumptions](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-assumptions)** - Prioritize assumptions with Impact × Risk matrix and experiments
- **[phuryn/prioritize-features](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-features)** - Prioritize backlog by impact, effort, risk, and strategic alignment
- **[phuryn/summarize-interview](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/summarize-interview)** - Summarize interview transcripts with JTBD and action items

**Product Strategy**

- **[phuryn/ansoff-matrix](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/ansoff-matrix)** - Ansoff Matrix analysis across 4 growth strategy quadrants
- **[phuryn/business-model](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/business-model)** - Generate Business Model Canvas with all 9 building blocks
- **[phuryn/lean-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/lean-canvas)** - Generate Lean Canvas with problem, solution, UVP, and metrics
- **[phuryn/monetization-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/monetization-strategy)** - Brainstorm 3-5 monetization strategies with validation experiments
- **[phuryn/pestle-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pestle-analysis)** - PESTLE analysis across Political, Economic, Social, Tech, Legal, Environmental
- **[phuryn/porters-five-forces](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/porters-five-forces)** - Porter's Five Forces competitive analysis with strategic insights
- **[phuryn/pricing-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pricing-strategy)** - Design pricing strategies with competitive analysis and WTP estimation
- **[phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy)** - Create product strategy using 9-section Product Strategy Canvas
- **[phuryn/product-vision](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-vision)** - Brainstorm inspiring, achievable product vision statements
- **[phuryn/startup-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/startup-canvas)** - Generate Startup Canvas combining Product Strategy and Business Model
- **[phuryn/swot-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/swot-analysis)** - SWOT analysis with actionable recommendations per quadrant
- **[phuryn/value-proposition](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/value-proposition)** - Design value propositions using 6-part JTBD template

**Toolkit**

- **[phuryn/draft-nda](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/draft-nda)** - Draft NDAs covering information types, jurisdiction, and clauses
- **[phuryn/grammar-check](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/grammar-check)** - Identify grammar and flow errors with targeted fix suggestions
- **[phuryn/privacy-policy](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/privacy-policy)** - Draft privacy policies with GDPR compliance considerations
- **[phuryn/review-resume](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/review-resume)** - PM resume review against 10 best practices including XYZ+S formula

</details>

### Community Skills

<details>
<summary><h3 style="display:inline">Marketing</h3></summary>

- **[BrianRWagner/ai-marketing-skills](https://github.com/BrianRWagner/ai-marketing-skills)** - 17 marketing frameworks for cold outreach, homepage audit, social cards, and more
- **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** - Universal SEO skill for comprehensive website analysis and optimization
- **[wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill)** - Publish articles to X/Twitter
- **[CosmoBlk/email-marketing-bible](https://github.com/CosmoBlk/email-marketing-bible)** - 55K-word email marketing guide as an AI skill
- **[smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)** - AI creative director with recursive self-assessment: 20+ methodologies (SIT, TRIZ, Bisociation, SCAMPER, Synectics), 3-axis evaluation calibrated against Cannes/D&AD/HumanKind, 5-phase process from brief to presentation
- **[Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)** - X/Twitter data platform: extractions, monitoring, draws, MCP server
- **[SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose)** - Hard-edged writing style contract for timeless, forceful English prose without AI tics
- **[blader/humanizer](https://github.com/blader/humanizer)** - Remove signs of AI-generated writing from text, making it sound more natural and human

</details>

<details>
<summary><h3 style="display:inline">Productivity and Collaboration</h3></summary>

- **[PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill)** - Document processing with Nutrient DWS API: convert (PDF/DOCX/XLSX/PPTX/HTML/images), extract text/tables, OCR (20+ languages), redact PII (pattern + AI), watermark, digital signatures, form filling. [MCP server](https://www.npmjs.com/package/@nutrient-sdk/dws-mcp-server) also available.
- **[notiondevs/Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)** - Skills for working with Notion
- **[op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)** - AI-powered PPT generation with document analysis and styled images
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - Generate animation-rich HTML presentations with visual style previews
- **[gokapso/integrate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/integrate-whatsapp)** - Connect WhatsApp, set up webhooks, and send messages
- **[gokapso/automate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/automate-whatsapp)** - Build WhatsApp automations with workflows and agents
- **[gokapso/observe-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/observe-whatsapp)** - Debug WhatsApp delivery issues and run health checks
- **[PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill)** - Interact with NotebookLM for document-based conversations
- **[obra/superpowers-lab](https://github.com/obra/superpowers-lab)** - Lab environment for Claude superpowers
- **[obra/brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)** - Generate and explore ideas
- **[obra/writing-plans](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)** - Create strategic documentation
- **[obra/executing-plans](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md)** - Implement and run strategic plans
- **[obra/dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)** - Coordinate multiple simultaneous agents
- **[obra/sharing-skills](https://github.com/obra/superpowers/blob/main/skills/sharing-skills/SKILL.md)** - Distribute and communicate capabilities
- **[obra/using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md)** - Leverage core platform capabilities
- **[op7418/Youtube-clipper-skill](https://github.com/op7418/Youtube-clipper-skill)** - YouTube clip generation and editing with automated workflows
- **[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills)** - Claude skills for founders with packaged startup workflows
- **[EveryInc/charlie-cfo-skill](https://github.com/EveryInc/charlie-cfo-skill)** - Bootstrapped CFO financial management inspired by Charlie Munger
- **[wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill)** - Manage Linear issues, projects, and teams
- **[Shpigford/readme](https://github.com/Shpigford/skills/tree/main/readme)** - Generate comprehensive project documentation
- **[hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill)** - Minimal, low-friction hierarchical memory system with background agents and filesystem-based persistence
- **[kreuzberg-dev/kreuzberg](https://github.com/kreuzberg-dev/kreuzberg/tree/main/skills/kreuzberg)** - Extract text, tables, and metadata from 62+ document formats
- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - 20 specialized skills for resume optimization, ATS analysis, interview prep, and career transitions
- **[RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills)** - Transform docs or codebases into Obsidian StudyVaults with interactive quizzes
- **[NeoLabHQ/write-concisely](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/docs/skills/write-concisely)** - Applies the famous *The Elements of Style* book principles to make documentation and writing clearer and more professional by eliminating wordiness and improving structure.
- **[ReScienceLab/opc-skills](https://github.com/ReScienceLab/opc-skills)** - Agent skills for solopreneurs with SEO, geo, and LLM tools
- **[SeanZoR/claude-speed-reader](https://github.com/SeanZoR/claude-speed-reader)** - Speed read Claude's responses at 600+ WPM using RSVP with Spritz-style ORP highlighting

</details>

<details>
<summary><h3 style="display:inline">Development and Testing</h3></summary>

- **[robzolkos/skill-rails-upgrade](https://github.com/robzolkos/skill-rails-upgrade)** - Analyze Rails apps and provide upgrade assessments
- **[Shpigford/screenshots](https://github.com/Shpigford/skills/tree/main/screenshots)** - Generate marketing screenshots with Playwright
- **[antonbabenko/terraform-skill](https://github.com/antonbabenko/terraform-skill)** - Terraform infrastructure as code best practices
- **[zxkane/aws-skills](https://github.com/zxkane/aws-skills)** - AWS development with infrastructure automation and cloud architecture patterns
- **[Rootly-AI-Labs/rootly-incident-responder](https://github.com/Rootly-AI-Labs/Rootly-MCP-server/blob/main/examples/skills/rootly-incident-responder.md)** - AI-powered incident response with ML similarity matching, solution suggestions, and on-call coordination. Requires [Rootly MCP Server](https://github.com/Rootly-AI-Labs/Rootly-MCP-server)
- **[conorluddy/ios-simulator-skill](https://github.com/conorluddy/ios-simulator-skill)** - Control iOS Simulator
- **[ramzesenok/iOS-Accessibility-Audit-Skill](https://github.com/ramzesenok/iOS-Accessibility-Audit-Skill)** - Audit iOS App against Accessibility norms
- **[sanjay3290/postgres](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres)** - Execute safe read-only SQL queries against PostgreSQL databases
- **[sanjay3290/deep-research](https://github.com/sanjay3290/ai-skills/tree/main/skills/deep-research)** - Autonomous multi-step research using Gemini Deep Research Agent
- **[jthack/ffuf-claude-skill](https://github.com/jthack/ffuf_claude_skill)** - Web fuzzing with ffuf
- **[lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill)** - Browser automation with Playwright
- **[ibelick/ui-skills](https://github.com/ibelick/ui-skills)** - Opinionated, evolving constraints to guide agents when building interfaces
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** - UI/UX design patterns and best practices
- **[ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills)** - 300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for cross-platform apps
- **[scarletkc/vexor](https://github.com/scarletkc/vexor)** - Vector-powered CLI for semantic file search with a Claude/Codex skill
- **[obra/test-driven-development](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)** - Write tests before implementing code
- **[obra/subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)** - Development using multiple sub-agents
- **[obra/systematic-debugging](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md)** - Methodical problem-solving in code
- **[obra/root-cause-tracing](https://github.com/obra/superpowers/blob/main/skills/root-cause-tracing/SKILL.md)** - Investigate and identify fundamental problems
- **[obra/testing-skills-with-subagents](https://github.com/obra/superpowers/blob/main/skills/testing-skills-with-subagents/SKILL.md)** - Collaborative testing approaches
- **[obra/testing-anti-patterns](https://github.com/obra/superpowers/blob/main/skills/testing-anti-patterns/SKILL.md)** - Identify ineffective testing practices
- **[obra/finishing-a-development-branch](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md)** - Complete Git code branches
- **[obra/requesting-code-review](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md)** - Initiate code review processes
- **[obra/receiving-code-review](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md)** - Process and incorporate code feedback
- **[obra/using-git-worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md)** - Manage multiple Git working trees
- **[obra/verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md)** - Validate work before finalizing
- **[obra/condition-based-waiting](https://github.com/obra/superpowers/blob/main/skills/condition-based-waiting/SKILL.md)** - Manage conditional pauses or delays
- **[obra/commands](https://github.com/obra/superpowers/tree/main/skills/commands)** - Create and manage command structures
- **[obra/writing-skills](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)** - Develop and document capabilities
- **[fvadicamo/dev-agent-skills](https://github.com/fvadicamo/dev-agent-skills)** - Git and GitHub workflow skills for commits, PRs, and code reviews
- **[omkamal/pypict-skill](https://github.com/omkamal/pypict-claude-skill/blob/main/SKILL.md)** - Pairwise test generation
- **[alinaqi/claude-bootstrap](https://github.com/alinaqi/claude-bootstrap)** - Opinionated project initialization with security-first guardrails, spec-driven atomic todos, LLM testing patterns, and CLI tool orchestration (gh, vercel, supabase)
- **[ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills)** - Makepad UI development skills for Rust apps: setup, patterns, shaders, packaging, and troubleshooting.
- **[massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill)** - Handle long-context tasks (100+ files, 50k+ tokens) through recursive decomposition strategies based on RLM research
- **[AvdLee/swiftui-expert-skill](https://github.com/AvdLee/SwiftUI-Agent-Skill/tree/main/swiftui-expert-skill)** - Modern SwiftUI best practices and iOS 26+ Liquid Glass adoption
- **[efremidze/swift-patterns-skill](https://github.com/efremidze/swift-patterns-skill/tree/main/swift-patterns)** - Modern Swift/SwiftUI best practices
- **[Joannis/claude-skills](https://github.com/Joannis/claude-skills)** - Swift Server development guidance with linting tool for best practices
- **[rudrankriyam/app-store-connect-cli-skills](https://github.com/rudrankriyam/app-store-connect-cli-skills)** - Automate App Store deployments and management using ASC CLI
- **[rameerez/claude-code-startup-skills](https://github.com/rameerez/claude-code-startup-skills)** - Skills for building and running software startups, apps, and SaaS
- **[zscole/model-hierarchy-skill](https://github.com/zscole/model-hierarchy-skill)** - Cost-optimized model routing based on task complexity
- **[CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills)** - Three.js skills for creating 3D elements and interactive experiences
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** - High-agency frontend skill that gives AI good taste with tunable design variance, motion intensity, and visual density to stop generic UI slop
- **[testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)** - 70+ production-tested Playwright automation testing patterns: E2E, POM, CI/CD, migrations, CLI
- **[NeoLabHQ/code-review](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/code-review)** - Comprehensive PR code review using specialized agents: bug-hunter, security-auditor, code-quality-reviewer, contracts-reviewer, historical-context-reviewer, test-coverage-reviewer
- **[NeoLabHQ/reflexion](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/reflexion)** - Self-refinement loop that forces the LLM to reflect on previous output and correct itself.
- **[NeoLabHQ/sdd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sdd)** - Spec-driven development workflow that transforms prompts into production-ready implementations through structured planning, architecture design, and LLM-as-a-Judge based quality gates.
- **[NeoLabHQ/ddd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd)** - Domain-driven development skills that also include Clean Architecture, SOLID principles, and design patterns.
- **[NeoLabHQ/sadd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd)** - Dispatches independent subagents for individual tasks with code review checkpoints between iterations for rapid, controlled development.
- **[NeoLabHQ/kaizen](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen)** - Applies continuous improvement methodology with multiple analytical approaches, based on Japanese Kaizen philosophy and Lean methodology.
- **[hamelsmu/eval-audit](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/eval-audit)** - Audit LLM eval pipelines and surface problems
- **[hamelsmu/error-analysis](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/error-analysis)** - Systematically identify failure modes in LLM pipelines
- **[hamelsmu/generate-synthetic-data](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/generate-synthetic-data)** - Create diverse synthetic test inputs for LLM evals
- **[hamelsmu/write-judge-prompt](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/write-judge-prompt)** - Design LLM-as-Judge evaluators for subjective criteria
- **[hamelsmu/validate-evaluator](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/validate-evaluator)** - Calibrate LLM judges against human labels
- **[hamelsmu/evaluate-rag](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/evaluate-rag)** - Evaluate RAG retrieval and generation quality
- **[hamelsmu/build-review-interface](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/build-review-interface)** - Build annotation interfaces for reviewing LLM traces
- **[wrsmith108/varlock-claude-skill](https://github.com/wrsmith108/varlock-claude-skill)** - Secure environment variable management ensuring secrets are never exposed in Claude sessions, terminals, logs, or git commits
- **[Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** - Automatically convert documentation websites, GitHub repositories, and PDFs into Claude AI skills in minutes

</details>

<details>
<summary><h3 style="display:inline">Context Engineering</h3></summary>

- **[muratcankoylan/context-fundamentals](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-fundamentals)** - Understand what context is, why it matters, and the anatomy of context in agent systems
- **[muratcankoylan/context-degradation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-degradation)** - Recognize patterns of context failure: lost-in-middle, poisoning, distraction, and clash
- **[muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression)** - Design and evaluate compression strategies for long-running sessions
- **[muratcankoylan/context-optimization](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-optimization)** - Apply compaction, masking, and caching strategies
- **[muratcankoylan/multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)** - Master orchestrator, peer-to-peer, and hierarchical multi-agent architectures
- **[muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems)** - Design short-term, long-term, and graph-based memory architectures
- **[muratcankoylan/tool-design](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/tool-design)** - Build tools that agents can use effectively, including architectural reduction patterns
- **[muratcankoylan/evaluation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/evaluation)** - Build evaluation frameworks for agent systems
- **[k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol)** - Graph-based long-term memory skill for AI (LLM) coding agents — faster context, fewer tokens, safer refactors
- **[NeoLabHQ/prompt-engineering](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering)** - Widely used prompt engineering techniques and patterns, including Anthropic best practices and agent persuasion principles.

</details>

<details>
<summary><h3 style="display:inline">Specialized Domains</h3></summary>

- **[raintree-technology/apple-hig-skills](https://github.com/raintree-technology/apple-hig-skills)** - Apple Human Interface Guidelines as 14 agent skills covering platforms, foundations, components, patterns, inputs, and technologies for iOS, macOS, visionOS, watchOS, and tvOS
- **[Ashutos1997/claude-design-auditor-skill](https://github.com/Ashutos1997/claude-design-auditor-skill)** - Audits designs against 17 professional rules: typography, WCAG contrast, spacing, iconography, navigation, design tokens + more. Scores out of 100. Supports English and Korean.
- **[K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)** - Scientific research and analysis skills
- **[NotMyself/claude-win11-speckit-update-skill](https://github.com/NotMyself/claude-win11-speckit-update-skill)** - Windows 11 system management
- **[sanjay3290/imagen](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen)** - Generate images using Google Gemini's API
- **[jeffersonwarrior/claudisms](https://github.com/jeffersonwarrior/claudisms)** - SMS messaging integration
- **[SHADOWPR0/security-bluebook-builder](https://github.com/SHADOWPR0/security-bluebook-builder)** - Build security Blue Books for sensitive apps
- **[obra/defense-in-depth](https://github.com/obra/superpowers/blob/main/skills/defense-in-depth/SKILL.md)** - Multi-layered security approaches
- **[huifer/Claude-Ally-Health](https://github.com/huifer/Claude-Ally-Health)** - A health assistant skill for medical information analysis, symptom tracking, and wellness guidance.
- **[frmoretto/clarity-gate](https://github.com/frmoretto/clarity-gate)** - Epistemic quality verification for RAG systems
- **[zechenzhangAGI/AI-research-SKILLs](https://github.com/zechenzhangAGI/AI-research-SKILLs)** - 77 AI research skills for model training, inference, and MLOps
- **[Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs)** - 20-module AI research skill library for model architecture, training, and ML paper writing
- **[komal-SkyNET/claude-skill-homeassistant](https://github.com/komal-SkyNET/claude-skill-homeassistant)** - Supercharge and manage Home Assistant workflows
- **[more-io/apple-bridges](https://github.com/more-io/claude-apple-bridges)** - Native macOS app access — manage Apple Reminders, Calendar, Contacts, Notes, Mail, and tmux sessions via Swift CLI bridges
- **[prompt-security/clawsec](https://github.com/prompt-security/clawsec)** - Security skill suite with drift detection, automated audits, and skill integrity verification
- **[BehiSecc/vibesec](https://github.com/BehiSecc/VibeSec-Skill)** - Helps write secure code by preventing common vulnerabilities including IDOR, XSS, SQL injection, SSRF, and weak authentication, approaching code from a bug hunter's perspective
- **[lawvable/awesome-legal-skills](https://github.com/lawvable/awesome-legal-skills)** - Curated agent skills for automating legal workflows
- **[peas/genealogy-research](https://paulo.com.br/skills/genealogy-research/SKILL.md)** - Genealogy research agent with OCR, FamilySearch, YAML data, and human-in-the-loop
- **[zw008/VMware-AIops](https://github.com/zw008/VMware-AIops)** - AI-powered VMware vCenter/ESXi monitoring and operations: inventory queries, health/alarms, VM lifecycle (create, delete, snapshot, clone, migrate), vSAN management, Aria Operations analytics, and scheduled log scanning. Supports Claude Code, Gemini CLI, Codex, Aider, Trae, Kimi, and MCP.
- **[video-db/skills](https://github.com/video-db/skills)** - Realtime and batch video workflows: capture screen/audio, ingest URLs/YouTube/RTSP, transcribe, index, search, generate subtitles, edit timelines, and stream HLS output
- **[materials-simulation-skills](https://github.com/HeshamFS/materials-simulation-skills)** - Agent skills for computational materials science: numerical stability, time-stepping, linear solvers, mesh generation, simulation validation, parameter optimization, and post-processing

</details>

<details>
<summary><h3 style="display:inline">n8n Automation</h3></summary>

- **[czlonkowski/n8n-code-javascript](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-javascript)** - JavaScript in n8n Code nodes with data access patterns
- **[czlonkowski/n8n-code-python](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-python)** - Python coding in n8n Code nodes with limitations
- **[czlonkowski/n8n-expression-syntax](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-expression-syntax)** - n8n expression syntax with {{}} and $json/$node variables
- **[czlonkowski/n8n-mcp-tools-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-mcp-tools-expert)** - MCP tools guide with tool selection and node formats
- **[czlonkowski/n8n-node-configuration](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-node-configuration)** - Node configuration with dependency rules and AI connections
- **[czlonkowski/n8n-validation-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-validation-expert)** - Fix n8n validation errors with error catalog
- **[czlonkowski/n8n-workflow-patterns](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-workflow-patterns)** - Workflow patterns for webhook, HTTP, database, and AI tasks

</details>


## Skills Paths for Other AI Coding Assistants

| Tool | Project Path | Global Path | Official Docs |
|------|-------------|-------------|---------------|
| Antigravity | `.agent/skills/` | `~/.gemini/antigravity/skills/` | [Antigravity Skills](https://antigravity.google/docs/skills) |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills) |
| Codex | `.agents/skills/` | `~/.agents/skills/` | [Codex Skills](https://developers.openai.com/codex/skills) |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` | [Cursor Skills](https://cursor.com/docs/context/skills) |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` | [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/) |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` | [Copilot Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` | [OpenCode Skills](https://opencode.ai/docs/skills) |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` | [Windsurf Cascade Skills](https://docs.windsurf.com/windsurf/cascade/skills) |


## Skill Quality Standards

As the ecosystem grows, consistent quality helps agents discover and use skills reliably. The following references and criteria keep the bar high.



### Quality Criteria

| Area | Guideline |
|------|-----------|
| **Description** | Write in third person. State *what* the skill does and *when* to use it. Use specific keywords agents can match on (e.g., "PostgreSQL migration" not "database stuff"). |
| **Progressive disclosure** | Keep top-level metadata under ~100 tokens. Skill body should stay below 500 lines. Load resources (large docs, schemas) on demand, not inline. |
| **No absolute paths** | Never hard-code machine-specific paths like `/Users/alice/`. Use relative paths or well-known variables (`$HOME`, `$PROJECT_ROOT`). |
| **Scoped tools** | Request only the tools the skill actually needs. Avoid blanket `"tools": ["*"]`. Declare tool dependencies explicitly. |

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- Submit new skills via PR
- Improve existing definitions

**Note:** Please don't submit skills you created 3 hours ago. We're now focusing on community-adopted skills, especially those published by development teams and proven in real-world usage. Quality over quantity.

## Contributor ♥️ Thanks
![Contributors](https://contrib.rocks/image?repo=voltagent/awesome-agent-skills&max=500&columns=20&anon=1)

## License

MIT License - see [LICENSE](LICENSE)

This is a curated list. Skills listed here are created and maintained by their respective authors and teams, not by us. We select community-adopted, proven skills and do not audit, endorse, or guarantee the security or correctness of listed projects. They are not security-audited and should be reviewed before production use.

If you find an issue with a listed skill or want your skill removed, please [open an issue](https://github.com/VoltAgent/awesome-agent-skills/issues) and we'll take care of it promptly.
