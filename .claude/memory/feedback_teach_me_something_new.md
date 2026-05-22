---
name: feedback-teach-me-something-new
description: "When user says \"teach me something new\", evaluate the currently open file and give code insights"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 227e4dfa-98b9-4866-97a2-4f18a45ad53b
---

When user says "teach me something new": read the currently open IDE file, analyze the code, then provide:
1. What the code does well
2. Improvements or edge cases missed
3. Related native APIs or language features they may not know
4. Interview-relevant insight (e.g. what interviewer is testing, what follow-up questions might come)

**Why:** User uses this phrase as a trigger to learn from their own interview prep code, not as a general trivia request.

**How to apply:** Always check `ide_opened_file` context first. If no file open, ask which file to review. Keep it practical and interview-focused. See [[user-interview-prep]].
