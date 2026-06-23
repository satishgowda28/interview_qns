# Week 2 / Day 4 — Revision Day
> Two Pointers consolidation

---

## Priority Re-solves

Re-solve anything tagged 🔁 or ❌ from Days 1–3 cold. No video, no hints.

If everything was Clean — re-solve **3Sum and Trapping Rain Water** anyway. These two have enough moving parts that a second cold pass is worth it regardless of your original tag.

---

## Templates From Memory

Write both of these on a blank page without looking:

### Opposite Ends
```js
let left = 0, right = arr.length - 1;
while (left < right) {
  // evaluate condition
  // move left++ or right-- based on result
}
```

### Slow / Fast
```js
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (/* condition */) arr[slow++] = arr[fast];
}
```

### Two Pointer + Trapping Water
```js
let left = 0, right = height.length - 1;
let maxLeft = 0, maxRight = 0, water = 0;
while (left < right) {
  if (height[left] <= height[right]) {
    height[left] >= maxLeft ? (maxLeft = height[left]) : (water += maxLeft - height[left]);
    left++;
  } else {
    height[right] >= maxRight ? (maxRight = height[right]) : (water += maxRight - height[right]);
    right--;
  }
}
```

---

## Pattern Decision Check

Before closing Week 2, be able to answer these instantly:

| Question | Answer |
|----------|--------|
| Array is sorted, find a pair → | Two Pointers |
| Array is unsorted, find a pair → | HashMap (Week 1) |
| Check if string reads same both ways → | Two Pointers (opposite ends) |
| Find triplet summing to zero → | Sort + fix one + Two Pointers |
| Maximize area between two walls → | Two Pointers (move shorter wall) |
| Water trapped in elevation map → | Two Pointers (track maxLeft, maxRight) |

---

## Week 2 Final Self-Assessment

| Problem | Final Tag |
|---------|-----------|
| Valid Palindrome | |
| Two Sum II | |
| 3Sum | |
| Container With Most Water | |
| Trapping Rain Water | |

---

## What's Next — Week 3

**Sliding Window** — the natural extension of Two Pointers. Instead of opposite ends moving inward, you have a window that expands right and shrinks left based on a condition. If Two Pointers clicked this week, Sliding Window will feel familiar.
