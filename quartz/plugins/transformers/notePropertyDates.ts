import { QuartzTransformerPlugin } from "../types"

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function formatNotePropertyDates(
  properties: Record<string, unknown>,
  filePath: string,
): void {
  for (const key of ["published", "modified"]) {
    const value = properties[key]
    if (typeof value !== "string") continue

    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
    if (!match) continue

    const date = new Date(`${value}T00:00:00.000Z`)
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
      console.warn(`Invalid ${key} date "${value}" in ${filePath}`)
      continue
    }

    properties[key] = `${match[2]}-${match[3]}-${match[1]}`
  }
}

export const NotePropertyDates: QuartzTransformerPlugin = () => ({
  name: "NotePropertyDates",
  markdownPlugins() {
    return [
      () => (_tree, file) => {
        const noteProperties: unknown = file.data.noteProperties
        if (isRecord(noteProperties) && isRecord(noteProperties.properties)) {
          formatNotePropertyDates(noteProperties.properties, file.path || "unknown file")
        }
      },
    ]
  },
})
