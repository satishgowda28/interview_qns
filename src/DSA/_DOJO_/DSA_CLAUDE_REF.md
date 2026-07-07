# DSA Reference — Satish Gowda
>
> This file is for Claude's reference. Updated as weeks progress.
> Language: JavaScript. Platform: LeetCode (free tier) + Neetcode.io.

---

## The Daily Loop (non-negotiable)

1. **15 min** — attempt the problem cold. Don't look anything up.
2. **Stuck?** — read the *approach*, not the code. Think again.
3. **Implement** yourself. No copy-paste.
4. **Write in plain English** why this pattern applies to this problem.
5. **Tag it** — Cold ✅ / Almost 🔁 / Nope ❌
6. Revisit all 🔁 and ❌ on the last day of each week.

---

## 12-Week Plan Overview

| Week | Topic | Phase | Status |
|------|-------|-------|--------|
| 1 | Arrays & Hashmaps | Foundation | 🟡 In Progress |
| 2 | Two Pointers | Foundation | ⬜ Pending |
| 3 | Sliding Window | Foundation | ⬜ Pending |
| 4 | Binary Search | Core Patterns | ⬜ Pending |
| 5 | Stack | Core Patterns | ⬜ Pending |
| 6 | Trees — BFS & DFS | Core Patterns | ⬜ Pending |
| 7 | Graphs | Core Patterns | ⬜ Pending |
| 8 | Heaps & Priority Queue | Core Patterns | ⬜ Pending |
| 9 | DP — 1D | Hard Territory | ⬜ Pending |
| 10 | DP — 2D | Hard Territory | ⬜ Pending |
| 11 | Backtracking | Hard Territory | ⬜ Pending |
| 12 | Consolidation + Mocks | Consolidation | ⬜ Pending |

---

## Week 1 — Arrays & Hashmaps

**Goal:** Build fast lookup instinct. Recognise when a HashMap is the answer before thinking about anything else.

### Key Resources

- 📺 Neetcode Arrays & Hashing playlist: <https://www.youtube.com/playlist?list=PLALUz6Z8Un2ew_yN3UAce8bOA25P5kaUl>
- 📝 Neetcode 150 Arrays & Hashing practice: <https://neetcode.io/practice/practice/neetcode150> (expand Arrays & Hashing section)
- 📖 NeetCode 150 Solutions Explained — Arrays & Hashing (Medium): <https://akankshawagh.medium.com/neetcode-150-solutions-explained-arrays-hashing-ed0c6184f387>

### The Core Pattern

```js
// "Find pair / count / frequency / group" → HashMap
const map = new Map();
for (const item of arr) {
  map.set(item, (map.get(item) || 0) + 1);
}

// "Is X in the collection?" → Set (O(1) lookup)
const seen = new Set();
for (const item of arr) {
  if (seen.has(item)) return true;
  seen.add(item);
}
```

### When to reach for HashMap/Set

- Need to look something up in O(1) → Map or Set
- Counting frequencies → Map
- Detecting duplicates → Set
- Grouping items by a key → Map of arrays
- "Find two things that sum to X" → Map (store complement)

### Problems — Week 1

| # | Problem | LC # | Difficulty | Neetcode Video | Tag |
|---|---------|------|------------|----------------|-----|
| 1 | Contains Duplicate | 217 | Easy | <https://youtu.be/3OamzN90kPg> | ⬜ |
| 2 | Valid Anagram | 242 | Easy | <https://youtu.be/9UtInBqnCgA> | ⬜ |
| 3 | Two Sum | 1 | Easy | <https://youtu.be/KLlXCFG5TnA> | ⬜ |
| 4 | Group Anagrams | 49 | Medium | <https://youtu.be/vzdNOK2oB2E> | ⬜ |
| 5 | Top K Frequent Elements | 347 | Medium | <https://youtu.be/YPTqKIgVk-k> | ⬜ |
| 6 | Product of Array Except Self | 238 | Medium | <https://youtu.be/bNvIQI2wAjk> | ⬜ |
| 7 | Valid Sudoku | 36 | Medium | <https://youtu.be/TjFXEUCMqI8> | ⬜ |
| 8 | Longest Consecutive Sequence | 128 | Medium | <https://youtu.be/P6RZZMu_maU> | ⬜ |

### Day-by-Day Breakdown

**Day 1** — Warm up. Understand the pattern.

- Watch: Neetcode Arrays & Hashing intro (first video in playlist, ~15 min)
- Solve: Contains Duplicate (#217), Valid Anagram (#242), Two Sum (#1)
- All three are Easy. Focus is on *why HashMap*, not *how to solve*.

**Day 2** — Step up to Medium.

- Solve: Group Anagrams (#49), Top K Frequent Elements (#347)
- These two are the core HashMap medium problems. Don't rush.

**Day 3** — Prefix + constraint problems.

- Solve: Product of Array Except Self (#238), Valid Sudoku (#36)
- Product is a classic "no division" trick. Sudoku is HashMap-per-constraint.

**Day 4** — The hard one for this week.

- Solve: Longest Consecutive Sequence (#128)
- Uses HashSet. The trick: only start counting from the sequence's start node.

**Day 5** — Revisit.

- Re-solve every problem tagged 🔁 or ❌ from Days 1–4.
- Write the core pattern template from memory. No looking.

### Week 1 Notes (fill as you go)

- Problems I looked up:
- Patterns that clicked:
- Patterns still unclear:

---

## Weeks 2–12 (to be filled as we progress)

> Each week will be added here as we move forward, maintaining the same structure:
> Resources → Core Pattern → Problems table → Day-by-day breakdown → Notes

---

## Master Pattern Cheat Sheet

```
PROBLEM SAYS...                         → PATTERN
─────────────────────────────────────────────────────
"Find pair / count / frequency / group" → HashMap / Set
"Sorted array + find pair"              → Two Pointers
"Subarray / substring + condition"      → Sliding Window
"Find value in sorted input"            → Binary Search
"Next greater / matching brackets"      → Stack
"Tree traversal / depth / path"         → DFS (recursion)
"Level-order / shortest path"           → BFS (queue)
"Connected components / cycles"         → Graph DFS/BFS
"Top K / repeatedly get min or max"     → Heap
"Min/max ways / count / optimal"        → DP
"All combinations / subsets / paths"    → Backtracking
```
