---
name: bg-tech-shopping
description: Bulgarian tech product research and price comparison, including cross-border Germany and UK options. Use when the user asks to find, compare, or buy any tech product (cameras, routers, computers, components, networking gear, accessories, storage, etc.) in Bulgaria — especially in Sofia. Covers 10+ Bulgarian retailers (Technopolis, Technomarket, Ardes, Senetic, JMT, JAR Computers, Most Computer, Stantek, eMAG, Ozone, Kaufland, ele.bg, store.bg) AND cross-border sources (idealo.de, LIMANGO.de, Amazon.de, Amazon.co.uk, GGBG, PostUK, ColisExpat, Meest). Always compares local vs cross-border landed cost. Ensures no shop is missed by visiting all relevant retailers directly by URL.
---

## Purpose

Comprehensive, unbiased price and availability research across Bulgarian tech retailers AND cross-border Germany/UK sources.

Main failure modes prevented:
1. Anchoring on 2–3 high-SEO chains, missing specialist shops (Senetic, JMT, JAR, Most Computer, Stantek)
2. Ignoring cross-border options when Bulgarian pricing is inflated
3. Using expensive subtasks for simple product lookups

## Credit efficiency

**Use direct web searches and URL scrapes — do NOT spawn `perform_subtask_topical_research` for product lookups.** That subtask is for multi-page written reports and costs significantly more.

Execution approach:
- Run parallel `web_search` calls per retailer group (chains, specialists, cross-border)
- Use `scrape_url_content` for specific product pages
- Use `computer_automation` only if a site is JS-heavy and doesn't respond to scraping
- Synthesise all results into a comparison table in chat

Reserve `perform_subtask_topical_research` only when the user explicitly asks for a written report or PDF.

## Retailer list

Full retailer details (URLs, Sofia addresses, delivery thresholds, specialities) are in:
→ `skills/bg-tech-shopping/retailers.md`

Read that file at the start of every research task.

## Category routing — which shops to check

Do not check all retailers for every query. Use this table to scope the search:

| Product category | Priority retailers | Usually skip |
|---|---|---|
| Indoor cameras / smart home | Technopolis, Technomarket, Ardes, eMAG, Ozone, Amazon.de, idealo.de | Most Computer, Senetic (unless pro gear) |
| Routers / networking (consumer) | Technomarket, Technopolis, Ardes, Senetic, JMT, idealo.de, Amazon.de | Ozone, Kaufland |
| Networking (pro / B2B) | Senetic, Most Computer, JMT | Technopolis, Ozone |
| Computers / laptops | JMT, JAR, Stantek, Technomarket, Technopolis, Amazon.de | Ozone, Most Computer |
| Components (CPU, RAM, GPU, SSD) | JMT, JAR, Stantek, ele.bg, idealo.de | Technopolis, Ozone |
| Storage (SD cards, USB, HDD) | Technopolis, Technomarket, eMAG, Ozone, Amazon.de | Most Computer, Senetic |
| Phones / tablets | Technopolis, Technomarket, eMAG, Amazon.de, LIMANGO | Senetic, Most Computer |
| Audio / TV | Technopolis, Technomarket, Ardes, LIMANGO, Amazon.de | Senetic, Most Computer, JAR |
| Accessories / cables / small gear | eMAG, Ozone, Kaufland, Store.bg, Amazon.de | Most Computer, Senetic |

Always add the user's explicitly preferred stores regardless of category.

## Search protocol

1. **Read `retailers.md`** for the current retailer list and URLs.
2. **Identify relevant shops** using the category routing table above.
3. **Check dalavera.com or pazaruvaj.com** for Bulgarian market overview and price range.
4. **Check idealo.de** (and LIMANGO if relevant) for the EU/Germany benchmark price.
5. **Check Amazon.co.uk** if the user shops from the UK or the product is notably cheaper there.
6. **Visit each relevant Bulgarian retailer directly by URL** — never rely solely on Google results (big chains outrank specialists on SEO, not price).
7. For every retailer in scope, record exactly one of:
   - Price (BGN + EUR), product URL, availability label
   - **Not listed** — product absent from that retailer's catalogue
   - **Not checked** — retailer clearly out of scope for this category (state why)
8. **Calculate landed cost** if EU/UK price looks meaningfully cheaper (see formula in retailers.md).
9. Never silently omit a retailer that is in scope.

## Output format

### Local comparison table

| Retailer | Product / Model | Unit price (BGN) | Unit price (EUR) | Availability | Link |
|---|---|---|---|---|---|

**Availability labels:**
- **In-store Sofia** — confirmed physical branch stock (verify via branch selector / call ahead)
- **Order & collect** — reserve online, pick up at branch
- **Online / courier** — delivery only
- **Marketplace** — third-party seller (note seller name, check ratings)
- **Not listed** — not found on this retailer's site

Lead with ONE recommended basket. State the main compromise. Add at most ONE alternative basket if it offers a meaningful saving or improvement.

### Cross-border section (append when relevant)

| Source | Product | Price | Est. weight | Forwarding fee | Landed cost | vs cheapest local |
|---|---|---|---|---|---|---|

Conclude: **buy local** or **buy cross-border**, and why in one sentence.

## Price display

Always show prices in both BGN and EUR. Fixed rate: **1 EUR = 1.95583 BGN**.

## Key retailer notes

- **Most Computer**: B2B/wholesale. Trade pricing on networking/servers. Worth checking for pro gear.
- **Senetic**: Strong on TP-Link, Ubiquiti, Cisco, surveillance. B2B but open to consumers.
- **eMAG**: Marketplace — verify seller, prefer eMAG-fulfilled listings.
- **Ozone**: Broad range; check tech/electronics categories specifically.
- **JMT**: Free in-store pickup in Sofia (Dianabad, near metro). Free delivery over ~€100.
- **JAR**: 13 branches nationwide. Good for components and computers.
- **LIMANGO**: Outlet/flash sales — inventory rotates daily; check at time of search, not just catalog.
- **Kaufland.bg**: Growing marketplace; useful for accessories and smart home.

## Availability caveat

Web listing ≠ confirmed branch stock. Always note when branch-level stock was not verified, and advise checking the branch selector or calling ahead before travelling.

## Kvant — note

kvant.bg is an LED/event production company, not a computer shop. If you need a shop by this name, verify the correct URL before adding it to the list.
