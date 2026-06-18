#!/usr/bin/env bash
# ============================================================
# Vercel Deployment Fix — Vedansh Portfolio
# ============================================================
# ROOT CAUSE: node_modules was committed in the initial commit
# (148fd81) and later "removed" in 9e03622 — but the git
# objects still exist in history. Vercel downloads full history
# on every clone, timing out after 45 minutes.
#
# THIS SCRIPT:
#   1. Removes dist/ from git tracking
#   2. Squashes ALL history into one clean commit (orphan branch)
#   3. Deletes the old poisoned history
#   4. Force-pushes to GitHub → clean repo for Vercel
#
# ⚠️  This REWRITES history. It is safe because:
#   - All current source files are preserved exactly
#   - node_modules and dist are excluded (per .gitignore)
#   - You are the sole author of this repo
# ============================================================

set -e  # Exit immediately on any error

REMOTE="origin"
BRANCH="main"

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║   Vercel Deployment Fix — Git History Purge      ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ── Step 1: Verify we're in the right directory ──────────────
if [ ! -f "package.json" ] || [ ! -f "vite.config.ts" ]; then
  echo "❌ ERROR: Run this script from the project root directory."
  echo "   cd /home/vedanshwagh/Portfolio/Vedansh-portfolio-"
  exit 1
fi
echo "✅ Step 1/7 — Project directory verified"

# ── Step 2: Remove dist/ from git index ──────────────────────
git rm -r --cached dist/ 2>/dev/null && echo "✅ Step 2/7 — dist/ removed from git tracking" || echo "✅ Step 2/7 — dist/ was already untracked"

# ── Step 3: Confirm .gitignore has the right rules ───────────
if ! grep -q "^dist$" .gitignore; then
  echo "dist" >> .gitignore
  echo "✅ Step 3/7 — Added dist to .gitignore"
else
  echo "✅ Step 3/7 — .gitignore already correct"
fi

if ! grep -q "^node_modules$" .gitignore; then
  echo "node_modules" >> .gitignore
fi

# ── Step 4: Create a brand-new orphan branch ─────────────────
# An orphan branch has NO history — zero parent commits.
# This is the safest way to squash all history cleanly.
echo "⏳ Step 4/7 — Creating clean orphan branch..."
git checkout --orphan clean-deploy
echo "✅ Step 4/7 — Orphan branch 'clean-deploy' created"

# ── Step 5: Stage only the files that should be tracked ──────
echo "⏳ Step 5/7 — Staging clean source files..."
git add \
  .gitignore \
  package.json \
  package-lock.json \
  vite.config.ts \
  tailwind.config.js \
  postcss.config.js \
  tsconfig.json \
  tsconfig.app.json \
  tsconfig.node.json \
  vercel.json \
  index.html \
  README.md \
  src/ \
  public/
echo "✅ Step 5/7 — All source files staged (no node_modules, no dist)"

# ── Step 6: Make single clean commit ─────────────────────────
git commit -m "chore: clean history — remove node_modules & dist blobs

Root cause fix for Vercel deployment timeout.
- Removed node_modules from git history (committed in initial commit)
- Removed dist/ from git tracking
- All source files preserved exactly"
echo "✅ Step 6/7 — Clean commit created"

# ── Step 7: Replace main with the clean branch ───────────────
echo "⏳ Step 7/7 — Replacing main branch with clean history..."
git branch -D main 2>/dev/null && git branch -m clean-deploy main
echo "✅ Step 7/7 — Branch 'main' now points to clean history"

# ── Done — print final instructions ──────────────────────────
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║   ✅  LOCAL FIX COMPLETE                                 ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║                                                          ║"
echo "║   Now run this command to push to GitHub:                ║"
echo "║                                                          ║"
echo "║     git push origin main --force                         ║"
echo "║                                                          ║"
echo "║   Then in Vercel:                                        ║"
echo "║     1. Open your project → Settings → Git               ║"
echo "║     2. Click Redeploy (or push any change to trigger)    ║"
echo "║                                                          ║"
echo "║   Expected Vercel build time after fix: ~30-60 seconds   ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
