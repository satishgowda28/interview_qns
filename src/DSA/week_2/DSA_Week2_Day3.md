# Week 2 / Day 3 — The Hard One
> Trapping Rain Water

---

## Problem — Trapping Rain Water (Hard)
🔗 https://leetcode.com/problems/trapping-rain-water/
📺 https://youtu.be/ZI2z5pq0TqA

**The ask:** Given an array of heights representing an elevation map, compute how much water it can trap after raining.

**Attempt cold for 15 minutes first.** Even if you don't crack the optimal solution, try to get any working solution first.

---

## Three Approaches (in order of complexity)

### Approach 1 — Brute Force O(n²)
For each position, find max height to its left and right, water at that position = min(maxLeft, maxRight) - height[i].

### Approach 2 — Prefix/Suffix Arrays O(n) time, O(n) space
Precompute maxLeft[] and maxRight[] arrays, then calculate water in one pass. This connects directly to Week 1's Product of Array Except Self — same two-pass idea.

### Approach 3 — Two Pointers O(n) time, O(1) space ← aim for this
```js
function trap(height) {
  let left = 0, right = height.length - 1;
  let maxLeft = 0, maxRight = 0;
  let water = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      height[left] >= maxLeft
        ? (maxLeft = height[left])
        : (water += maxLeft - height[left]);
      left++;
    } else {
      height[right] >= maxRight
        ? (maxRight = height[right])
        : (water += maxRight - height[right]);
      right--;
    }
  }
  return water;
}
```

**The key insight:** at any position, water trapped = min(maxLeft, maxRight) - height[i]. With two pointers, whichever side has the smaller max determines the water at that step — you don't need to know the other side's full max yet.

**After solving, write this down:**
> "I used two pointers tracking maxLeft and maxRight. Whichever side has the smaller max is the bottleneck — I process that side and move inward, because the other side's max is guaranteed to be at least as large."

**Time/Space:** O(n) time, O(1) space.

---

## Connection to Week 1
Notice that Approach 2 (prefix/suffix arrays) is literally Product of Array Except Self from Day 3 — same two-pass structure, different calculation. If the two-pointer approach doesn't click today, Approach 2 is still a solid O(n) solution and connects existing knowledge.

---

## Day 3 Self-Assessment

| Problem | Tag |
|---------|-----|
| Trapping Rain Water | Cold ✅ / Guided 🎥 / Recognized 🟢 / Almost 🔁 / Nope ❌ |

**Which approach did you land on?**
- Brute force only ⬜
- Prefix/suffix arrays ⬜
- Two pointers ⬜
