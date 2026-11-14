import test from "node:test"
import assert from "node:assert/strict"
import { formatNotePropertyDates } from "./notePropertyDates"

test("formats published and modified dates without changing other properties", () => {
  const properties = {
    published: "2026-11-13",
    modified: "2024-02-29",
    description: "2026-11-13",
  }

  formatNotePropertyDates(properties, "note.md")

  assert.deepEqual(properties, {
    published: "11-13-2026",
    modified: "02-29-2024",
    description: "2026-11-13",
  })
})

test("preserves missing, non-date, and invalid values", () => {
  const properties = { published: "2023-02-29", modified: "November 13, 2026" }
  const warnings: string[] = []
  const warn = console.warn
  console.warn = (message: string) => warnings.push(message)
  try {
    formatNotePropertyDates(properties, "note.md")
    formatNotePropertyDates({}, "note.md")
  } finally {
    console.warn = warn
  }

  assert.deepEqual(properties, { published: "2023-02-29", modified: "November 13, 2026" })
  assert.match(warnings[0], /Invalid published date.*note\.md/)
})
