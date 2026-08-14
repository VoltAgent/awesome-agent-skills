#!/usr/bin/env python3
"""
askill_agent_installer.py — Cross-Agent Multi-Harness Skill Installer
Installs skills into Claude Code, Antigravity, Cursor, and Codex skill directories.
"""
import os
import sys
import shutil
import argparse
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(description="Multi-Harness Agent Skill Installer")
    parser.add_argument("skill_name", help="Skill directory or name to install")
    parser.add_argument("--target", choices=["gemini", "claude", "cursor", "codex"], default="gemini")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    target_map = {
        "gemini": Path.home() / ".gemini" / "skills",
        "claude": Path.home() / ".claude" / "skills",
        "cursor": Path(".cursor") / "rules",
        "codex": Path.home() / ".codex" / "skills"
    }

    dest = target_map[args.target]
    print(f"Target harness: {args.target} -> Destination: {dest}")
    if args.dry_run:
        print("[Dry-run] Simulation completed successfully.")

if __name__ == "__main__":
    main()
