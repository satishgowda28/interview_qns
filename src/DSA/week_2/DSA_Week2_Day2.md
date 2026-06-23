# Week 2 / Day 2 — Core Mediums
> 3Sum + Container With Most Water

---

## Problem 1 — 3Sum (Medium)
🔗 https://leetcode.com/problems/3sum/
📺 https://youtu.be/jzZsG892ZvQ

**The ask:** Find all unique triplets in the array that sum to zero.

**Pattern trigger:** "find triplet that sums to X" → sort first, fix one element, two-pointer the rest.

**Three things happening at once:**
1. Sort the array
2. For each element `nums[i]`, run Two Sum II on the rest (left = i+1, right = end)
3. Skip duplicates at each level — this is the part that trips people up

**The duplicate skip logic:**
```js
// Skip duplicate fixed elements
if (i > 0 && nums[i] === nums[i - 1]) continue;

// Skip duplicate left/right pointers after finding a triplet
while (left < right && nums[left] === nums[left - 1]) left++;
while (left < right && nums[right] === nums[right + 1]) right--;
```

**Attempt cold first. If stuck at 15 min, look at the approach above before the video.**

**After solving, write this down:**
> "I sorted first, then fixed one element and used two pointers on the rest — essentially running Two Sum II (n-1) times. Duplicate skipping is what makes it return unique triplets."

**Time/Space:** O(n²) time, O(1) extra space (sorting in-place).

---

## Problem 2 — Container With Most Water (Medium)
🔗 https://leetcode.com/problems/container-with-most-water/
📺 https://youtu.be/UuiTKBwPgAo

**The ask:** Given heights of vertical lines, find two lines that together with the x-axis form a container that holds the most water.

**Pattern trigger:** "maximize area between two positions" → opposite ends, move the shorter wall inward.

**The greedy insight:** area = width × min(left height, right height). Width decreases as pointers move inward, so you only move if it might increase height — always move the shorter pointer.

**Attempt cold first.**

**After solving, write this down:**
> "I used opposite-end pointers and always moved the shorter wall because moving the taller wall can only decrease or maintain area — never increase it."

**Time/Space:** O(n) time, O(1) space.

---

## Day 2 Self-Assessment

| Problem | Tag |
|---------|-----|
| 3Sum | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |
| Container With Most Water | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |
