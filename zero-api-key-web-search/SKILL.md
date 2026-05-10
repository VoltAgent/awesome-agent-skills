---
name: zero-api-key-web-search
description: Free web search toolkit for AI agents with no API keys required, featuring MCP server support.
---

# Zero API Key Web Search

A Python toolkit that equips AI agents with live web search capabilities without requiring API keys or account creation. Uses DuckDuckGo as default provider, with optional SearXNG self-hosting and Bright Data integration for production use.

## When to Use This Skill

- When you need to verify a claim with live web data
- When answering questions that require up-to-date information
- When generating citation-ready content for research
- When building an AI agent that needs web search without API keys

## What This Skill Does

1. **Web Search**: Perform free web searches via DuckDuckGo without API keys
2. **MCP Integration**: Expose 8 search tools as an MCP server for AI coding assistants
3. **Citation Extraction**: Extract citation-ready context from search results
4. **Claim Verification**: Verify claims via heuristic scoring model
5. **Flexible Backends**: Integrate self-hosted SearXNG or Bright Data for advanced use cases

## How to Use

### Basic Usage

```bash
pip install zero-api-key-web-search
python -m zero_api_key_web_search "your query here"
```

### MCP Server Mode

```bash
python -m zero_api_key_web_search --mcp-server
```

## Example

**User**: "What are the latest developments in AI in 2026?"

**Output**: Search results with citation-ready context, relevance scoring, and cross-validation.

**Inspired by**: The need for free, accessible web search infrastructure for AI agents.

## Tips

- DuckDuckGo is the default and requires no setup
- For production use, consider Bright Data integration for better SERP results
- Self-hosted SearXNG provides more control and privacy
