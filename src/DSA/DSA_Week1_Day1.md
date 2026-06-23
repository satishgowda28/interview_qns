# Week 1 / Day 1 — Arrays & Hashmaps
> 12-Week DSA Plan | Language: JavaScript | Platform: LeetCode + Neetcode.io

---

## Today's Goal
Understand *why* HashMap is the answer before you even look at the problem. Not memorise code — build the instinct.

---

## Before You Start — Watch This (15 min)
📺 **Neetcode Arrays & Hashing intro video**
→ https://www.youtube.com/playlist?list=PLALUz6Z8Un2ew_yN3UAce8bOA25P5kaUl

Watch the first video in the playlist. Don't code along yet — just absorb the pattern logic. Then come back and solve.

---

## The One Question to Ask Every Time
> "Do I need to look something up in O(1)?"

If yes → HashMap or Set. That's it. That's the entire pattern for today.

```js
// Detect duplicates → Set
const seen = new Set();
for (const num of nums) {
  if (seen.has(num)) return true;
  seen.add(num);
}

// Count frequencies → Map
const freq = new Map();
for (const item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}

// Store index for lookup → Map
const map = new Map(); // { value → index }
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (map.has(complement)) return [map.get(complement), i];
  map.set(nums[i], i);
}
```

---

## Today's Problems

### Problem 1 — Contains Duplicate (Easy)
🔗 LeetCode: https://leetcode.com/problems/contains-duplicate/
📺 Neetcode video: https://youtu.be/3OamzN90kPg

**The ask:** Given an integer array, return true if any value appears at least twice.

**Pattern trigger:** "appears at least twice" → you need to *remember what you've seen* → Set.

**Attempt it first.** Come back to the video only if truly stuck after 10 minutes.

**After solving, write this down:**
> "I used a Set because I needed O(1) lookup to check if I'd seen this number before."

**Time/Space to aim for:** O(n) time, O(n) space.

---

### Problem 2 — Valid Anagram (Easy)
🔗 LeetCode: https://leetcode.com/problems/valid-anagram/
📺 Neetcode video: https://youtu.be/9UtInBqnCgA

**The ask:** Given two strings s and t, return true if t is an anagram of s.

**Pattern trigger:** "same characters, same frequency" → count frequencies of both → Map comparison.

**Attempt it first.**

**After solving, write this down:**
> "I used a frequency Map because anagram = same characters in same counts."

**Time/Space to aim for:** O(n) time, O(1) space (only 26 lowercase letters).

---

### Problem 3 — Two Sum (Easy)
🔗 LeetCode: https://leetcode.com/problems/two-sum/
📺 Neetcode video: https://youtu.be/KLlXCFG5TnA

**The ask:** Given an array and a target, return indices of two numbers that add up to target.

**Pattern trigger:** "find two numbers that sum to X" → for each number, check if *complement = target - num* already exists → Map.

**This is the most important problem of Week 1.** The complement trick shows up everywhere.

**After solving, write this down:**
> "I used a Map to store {value → index} so I could check if the complement existed in O(1) instead of using a nested loop."

**Time/Space to aim for:** O(n) time, O(n) space.

---

## After All Three — Do This

1. Close LeetCode.
2. On a blank page (paper or notes app), write the three pattern templates from memory — Set for duplicates, Map for frequency, Map for complement lookup.
3. If you can write all three without looking → Day 1 done. ✅
4. If you can't → re-read the templates above once, then write them again.

---

## Day 1 Self-Assessment

After finishing, tag each problem honestly:

| Problem | Tag |
|---------|-----|
| Contains Duplicate | Cold ✅ / Almost 🔁 / Nope ❌ |
| Valid Anagram | Cold ✅ / Almost 🔁 / Nope ❌ |
| Two Sum | Cold ✅ / Almost 🔁 / Nope ❌ |

Anything tagged 🔁 or ❌ gets revisited on Day 5.

---

## What's Coming — Week 1 Roadmap

| Day | Problems |
|-----|----------|
| Day 1 ← you are here | Contains Duplicate, Valid Anagram, Two Sum |
| Day 2 | Group Anagrams, Top K Frequent Elements |
| Day 3 | Product of Array Except Self, Valid Sudoku |
| Day 4 | Longest Consecutive Sequence |
| Day 5 | Revisit all 🔁 and ❌ from Days 1–4 |

---

## One Honest Note
These three are Easy. They should feel almost trivial by the time you're done. If Two Sum doesn't click within 20 minutes, don't move on — that complement trick is the foundation every Medium HashMap problem is built on.
