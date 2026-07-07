# Week 1 / Day 3 — Arrays & Hashmaps (Prefix + Constraints)
> 12-Week DSA Plan | Language: JavaScript | Platform: LeetCode + Neetcode.io

---

## Today's Goal
Two different flavors today. Product of Array Except Self introduces a prefix/suffix trick that shows up constantly. Valid Sudoku is "HashMap, but multiple constraints at once."

---

## Problem 1 — Product of Array Except Self (Medium)
🔗 LeetCode: https://leetcode.com/problems/product-of-array-except-self/
📺 Neetcode video: https://youtu.be/bNvIQI2wAjk

**The ask:** Given an array, return an array where each element is the product of all other elements — **without using division**, in O(n).

**Pattern trigger:** "product/sum of everything except this index" → prefix and suffix arrays.

**The constraint that matters:** no division. This rules out the naive "multiply everything, then divide by nums[i]" approach (which also breaks on zeros anyway).

**The trick:** for each index i, the answer is `(product of everything to the left of i) × (product of everything to the right of i)`. Compute left products in one pass, right products in another, multiply them.

Attempt it first. If stuck after 10 minutes, think specifically about doing two passes — one left to right, one right to left.

**After solving, write this down:**
> "I used prefix and suffix products because I needed 'everything except index i' without division, and that splits cleanly into left-of-i and right-of-i."

**Time/Space to aim for:** O(n) time. O(1) extra space is possible (reuse the output array for prefix, then fold suffix into it on the second pass) — try for O(n) space first, optimize after if you want.

---

## Problem 2 — Valid Sudoku (Medium)
🔗 LeetCode: https://leetcode.com/problems/valid-sudoku/
📺 Neetcode video: https://youtu.be/TjFXEUCMqI8

**The ask:** Given a 9×9 Sudoku board, determine if it's valid — no repeated digits in any row, column, or 3×3 box.

**Pattern trigger:** "no duplicates within a group" → you already know this is a Set/Map problem (Day 1, Contains Duplicate). The new part: there are **three overlapping groups** (row, column, box) to check simultaneously.

**The trick:** for each cell, you need to check it against three different Sets at once — its row's set, its column's set, its box's set. The box index formula is the only "new" thing: `boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)`.

Attempt it first. Set up three arrays of Sets (one per row, one per column, one per box) before writing the main loop.

**After solving, write this down:**
> "I used three separate Sets per cell — row, column, box — because Contains Duplicate logic still applies, just checked against multiple groups at once."

**Time/Space to aim for:** O(1) time technically (fixed 9×9 board), but think of it as O(n²) where n=9. O(1) space for the same reason.

---

## After Both — Do This

1. Notice that Valid Sudoku isn't a new pattern — it's Day 1's Set pattern applied three times per cell. If it felt harder, it's because of the bookkeeping (three groups), not the core idea.
2. Product of Array Except Self is genuinely a new trick (prefix/suffix). Make sure you can write the two-pass loop from memory before moving on — this exact trick reappears in other problems later (running sums, range queries).

---

## Day 3 Self-Assessment

| Problem | Tag |
|---------|-----|
| Product of Array Except Self | Cold ✅ / Almost 🔁 / Nope ❌ |
| Valid Sudoku | Cold ✅ / Almost 🔁 / Nope ❌ |

---

## What's Coming — Week 1 Roadmap

| Day | Problems | Status |
|-----|----------|--------|
| Day 1 | Contains Duplicate, Valid Anagram, Two Sum | ✅ Done — all cold |
| Day 2 | Group Anagrams, Top K Frequent Elements | ✅ Done — all cold |
| Day 3 ← you are here | Product of Array Except Self, Valid Sudoku | 🟡 In progress |
| Day 4 | Longest Consecutive Sequence | ⬜ |
| Day 5 | Revisit all 🔁 and ❌ from Days 1–4 | ⬜ |

---

## One Honest Note
If Valid Sudoku feels fiddly rather than hard — that's correct. It's not testing a new pattern, it's testing whether you can manage multiple Sets cleanly without the logic getting tangled. That bookkeeping discipline matters more than it seems for interview code quality.
