import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { NotePropertyDates } from "./quartz/plugins/transformers/notePropertyDates"

const config = await loadQuartzConfig()
// Format the visible properties without changing the note's original dates.
config.plugins.transformers.push(NotePropertyDates())
export default config
export const layout = await loadQuartzLayout()
