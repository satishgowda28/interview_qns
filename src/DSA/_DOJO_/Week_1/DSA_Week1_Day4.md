# Week 1 / Day 4 — Longest Consecutive Sequence
> 12-Week DSA Plan | Language: JavaScript | Platform: LeetCode + Neetcode.io

---

## Today's Goal
One problem only. This is the hardest problem of Week 1. The goal isn't to brute-force it — it's to arrive at the O(n) HashSet solution and understand *why* it works.

---

## Before You Start — Attempt Cold First
**Do not watch the video yet.** Set a 15-minute timer and attempt it. Even if you don't finish, the struggle is the point. After 15 minutes, check the approach section below before watching the video.

---

## Problem — Longest Consecutive Sequence (Medium)
🔗 LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/
📺 Neetcode video: https://youtu.be/P6RZZMu_maU

**The ask:** Given an unsorted array of integers, return the length of the longest consecutive sequence (e.g. [1,2,3,4]). Must run in O(n).

**The O(n) constraint rules out sorting** (which would be O(n log n) and honestly the first thing you'd reach for). That constraint is the hint — you need a HashSet for O(1) lookup.

---

## The Approach (read only after 15-min cold attempt)

The key insight: only start counting a sequence from its **true starting point** — a number `n` where `n-1` does NOT exist in the set.

If you start counting from every number, you repeat work and lose O(n). If you only start from sequence beginners, each number is visited at most twice — O(n).

```js
function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    // only start counting if this is the beginning of a sequence
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}
```

**After solving, write this down:**
> "I used a HashSet so I could check num-1 in O(1). I only started counting from sequence beginners (where num-1 doesn't exist) to avoid redundant work and keep the whole thing O(n)."

**Time/Space to aim for:** O(n) time, O(n) space.

---

## After Solving — Do This

The prefix/suffix trick from Day 3 and the sequence-start trick from today are both examples of the same meta-pattern: **avoid redundant work by only starting from the right entry point.** That idea shows up in sliding window, graph traversal, and DP later. Worth naming it clearly now.

---

## Day 4 Self-Assessment

| Problem | Tag |
|---------|-----|
| Longest Consecutive Sequence | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |

---

## What's Coming — Week 1 Roadmap

| Day | Problems | Status |
|-----|----------|--------|
| Day 1 | Contains Duplicate, Valid Anagram, Two Sum | ✅ All cold |
| Day 2 | Group Anagrams, Top K Frequent Elements | ✅ All cold |
| Day 3 | Product of Array Except Self, Valid Sudoku | 🎥 Brute force cold, optimal guided |
| Day 4 ← you are here | Longest Consecutive Sequence | 🟡 In progress |
| Day 5 | Revisit all 🔁 and ❌ + write all patterns from memory | ⬜ |

---

## One Honest Note
If you got the O(n log n) sorting approach cold but needed the video for O(n) HashSet — that's still a strong result. The O(n) insight is genuinely non-obvious the first time. What matters is that you understand it clearly enough to reconstruct it without looking next time.
