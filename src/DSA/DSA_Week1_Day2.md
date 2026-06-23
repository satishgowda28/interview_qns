# Week 1 / Day 2 — Arrays & Hashmaps (Medium)
> 12-Week DSA Plan | Language: JavaScript | Platform: LeetCode + Neetcode.io

---

## Today's Goal
Step up from Easy to Medium. Same HashMap instinct, but now you decide *what the key should be* — that's the actual skill being tested today.

---

## Problem 1 — Group Anagrams (Medium)
🔗 LeetCode: https://leetcode.com/problems/group-anagrams/
📺 Neetcode video: https://youtu.be/vzdNOK2oB2E

**The ask:** Given an array of strings, group the anagrams together.

**Pattern trigger:** "group things that share a property" → Map where the *key* represents that shared property, value is a list.

**The actual challenge here:** what do you use as the key? Two options:
- Sort each string — anagrams produce the same sorted string.
- Count each letter — anagrams produce the same frequency signature.

Attempt it first. Try the sorted-string approach before watching anything.

**After solving, write this down:**
> "I used a Map where the key was [sorted string / frequency signature] because anagrams share that property even though the original strings look different."

**Time/Space to aim for:** O(n · k log k) with sorting, where k = avg string length. O(n · k) if you use frequency-count keys instead.

---

## Problem 2 — Top K Frequent Elements (Medium)
🔗 LeetCode: https://leetcode.com/problems/top-k-frequent-elements/
📺 Neetcode video: https://youtu.be/YPTqKIgVk-k

**The ask:** Given an array, return the k most frequent elements.

**Pattern trigger:** "count frequencies" → Map (you already know this). The new part: "top K" → you need to *sort or bucket* by frequency afterward.

**Two approaches, attempt the first one:**
1. Count frequencies with a Map, then sort entries by count, take top K. Simple, O(n log n).
2. Bucket sort by frequency (array of buckets, index = frequency). O(n) — better, but not required to get this right today.

**After solving, write this down:**
> "I used a Map to count frequency, then [sorted / bucketed] to find the top K because counting alone doesn't tell you ranking."

**Time/Space to aim for:** O(n log n) is fine today. O(n) bucket approach is a bonus if you have time.

---

## After Both — Do This

1. Compare today's two problems with yesterday's three. Notice the shift: yesterday the Map *was* the answer. Today the Map is step one, and there's a second step (grouping logic / ranking logic) on top.
2. Write down, in one sentence each, what made today's problems "Medium" instead of "Easy."

---

## Day 2 Self-Assessment

| Problem | Tag |
|---------|-----|
| Group Anagrams | Cold ✅ / Almost 🔁 / Nope ❌ |
| Top K Frequent Elements | Cold ✅ / Almost 🔁 / Nope ❌ |

---

## What's Coming — Week 1 Roadmap

| Day | Problems | Status |
|-----|----------|--------|
| Day 1 | Contains Duplicate, Valid Anagram, Two Sum | ✅ Done — all cold |
| Day 2 ← you are here | Group Anagrams, Top K Frequent Elements | 🟡 In progress |
| Day 3 | Product of Array Except Self, Valid Sudoku | ⬜ |
| Day 4 | Longest Consecutive Sequence | ⬜ |
| Day 5 | Revisit all 🔁 and ❌ from Days 1–4 | ⬜ |

---

## One Honest Note
If Group Anagrams takes longer than Two Sum did, that's expected — it's a genuine step up, not a sign you're behind. The "what should my key be" question is the actual Medium-level skill. Once that clicks, most Medium HashMap problems start looking the same.
