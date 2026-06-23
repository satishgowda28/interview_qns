# Week 2 / Day 1 — Two Pointers Warm Up
> Valid Palindrome + Two Sum II

---

## Problem 1 — Valid Palindrome (Easy)
🔗 https://leetcode.com/problems/valid-palindrome/
📺 https://youtu.be/jn5B5OaIr50

**The ask:** Given a string, return true if it reads the same forward and backward (ignoring non-alphanumeric characters and case).

**Pattern trigger:** "reads same from both ends" → opposite ends two pointer, moving inward.

**Attempt cold first.** This one is genuinely approachable without a video.

```
left → → → →
← ← ← ← fast
Compare as you go, skip non-alphanumeric characters
```

**After solving, write this down:**
> "I used opposite-end pointers because palindrome check is inherently about comparing from both ends simultaneously."

**Time/Space:** O(n) time, O(1) space.

---

## Problem 2 — Two Sum II (Medium)
🔗 https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
📺 https://youtu.be/cQ1Oz4ckceM

**The ask:** Same as Two Sum but the array is **already sorted**. Return 1-indexed positions of the two numbers.

**Pattern trigger:** sorted array + find pair → two pointers, not HashMap. This is the direct contrast to Week 1's Two Sum.

**The logic:** if `arr[left] + arr[right] < target`, move left right (need bigger number). If sum > target, move right left (need smaller). If equal, done.

**Attempt cold first.**

**After solving, write this down:**
> "Sorted input meant I didn't need a HashMap for O(1) lookup — two pointers gave me the same result with O(1) space instead of O(n)."

**Time/Space:** O(n) time, O(1) space.

---

## Day 1 Self-Assessment

| Problem | Tag |
|---------|-----|
| Valid Palindrome | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |
| Two Sum II | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |
