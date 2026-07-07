# Week 2 Overview — Two Pointers
> 12-Week DSA Plan | Language: JavaScript | Platform: LeetCode + Neetcode.io

---

## The Week at a Glance

| Day | Problems | Difficulty |
|-----|----------|------------|
| Day 1 | Valid Palindrome, Two Sum II | Easy + Medium |
| Day 2 | 3Sum, Container With Most Water | Medium + Medium |
| Day 3 | Trapping Rain Water | Hard |
| Day 4 | Revisit 🔁 ❌ + write templates from memory | Review |

---

## Why Two Pointers After HashMap?

Week 1 you reached for a HashMap whenever you needed O(1) lookup. Two Pointers is what you use instead **when the array is already sorted** — you get the same efficiency without the extra space.

Two Sum from Day 1 is the bridge: unsorted → HashMap. Sorted → Two Pointers. Same problem, different constraint, different tool. That connection is the entire pattern in one sentence.

---

## The Two Sub-Patterns

### 1. Opposite Ends
Start one pointer at the left, one at the right. Move them inward based on a condition.

```js
let left = 0, right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  sum < target ? left++ : right--;
}
```

**Use when:** sorted array, find pair/triplet, palindrome check, maximize/minimize area.

### 2. Slow / Fast Pointer
One pointer tracks position to write, other scans forward.

```js
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition(arr[fast])) {
    arr[slow++] = arr[fast];
  }
}
```

**Use when:** remove elements in-place, partition array, detect cycle in linked list.

---

## Key Resources
- 📺 Neetcode Two Pointers videos: https://www.youtube.com/playlist?list=PLALUz6Z8Un2ew_yN3UAce8bOA25P5kaUl
- 📖 Two Pointers — Neetcode course: https://neetcode.io/courses/dsa-for-beginners/2
- 📖 Two Pointers technique — GeeksForGeeks: https://www.geeksforgeeks.org/two-pointers-technique/

---

## All Problems This Week

| # | Problem | LC # | Difficulty | Neetcode Video |
|---|---------|------|------------|----------------|
| 1 | Valid Palindrome | 125 | Easy | https://youtu.be/jn5B5OaIr50 |
| 2 | Two Sum II | 167 | Medium | https://youtu.be/cQ1Oz4ckceM |
| 3 | 3Sum | 15 | Medium | https://youtu.be/jzZsG892ZvQ |
| 4 | Container With Most Water | 11 | Medium | https://youtu.be/UuiTKBwPgAo |
| 5 | Trapping Rain Water | 42 | Hard | https://youtu.be/ZI2z5pq0TqA |

---

## Week 2 Self-Assessment (fill as you go)

| Problem | Tag |
|---------|-----|
| Valid Palindrome | ⬜ |
| Two Sum II | ⬜ |
| 3Sum | ⬜ |
| Container With Most Water | ⬜ |
| Trapping Rain Water | ⬜ |

---

## What to Watch For This Week
- **3Sum** is the first problem where you combine sorting + two pointers + duplicate skipping. It's the hardest conceptually of the mediums.
- **Trapping Rain Water** has multiple solutions (two pointers, stack, DP). The two-pointer approach is the most elegant — aim for that one.
- If you find yourself reaching for a HashMap on any of these — pause. Ask: "is this input sorted, or can I sort it?" If yes, two pointers is likely cleaner.
