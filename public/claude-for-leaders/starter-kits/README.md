# Starter kits · Claude for Leaders (Travis Johnson · AuraPath AI)

The two take-home starter kits linked from the "Starting tomorrow" slide of the
Claude for Leaders deck (Travis Johnson · AuraPath AI · California · 2026).

## Contents

```
starter-kits/
├── README.md                  ← this file
├── claude-code-starter/       ← source folder for the Claude Code kit
├── cowork-starter/            ← source folder for the Cowork kit
├── claude-code-starter.zip    ← distribution-ready (linked from the deck)
└── cowork-starter.zip         ← distribution-ready (linked from the deck)
```

### claude-code-starter/

A healthy empty frame for any Claude Code project:
`CLAUDE.md` · `memory.md` · `plan.md` · `todo.md` · `architecture.md` ·
`README.md` · `.gitignore`. The files are intentionally skeletal — Claude
writes them; the HTML comments in each file explain what goes where.

### cowork-starter/

The same idea for Claude Cowork projects:
`INSTRUCTIONS.txt` (paste into the Cowork project's Instructions field) ·
`context/HOW-I-WORK.md` · `system/SYSTEM-RULES.md` · `memory.md` · `plan.md` ·
`todo.md` · `outputs/` (where deliverables land).

## Conventions

- US conventions throughout: USD with comma separators ($1,200), MM/DD/YYYY dates.
- Attribution: "Starter base by AuraPath AI · aurapathai.com".

## Rebuilding the zips

After editing a source folder, rebuild from this directory:

```
zip -r claude-code-starter.zip claude-code-starter -x "*.DS_Store"
zip -r cowork-starter.zip cowork-starter -x "*.DS_Store"
```
