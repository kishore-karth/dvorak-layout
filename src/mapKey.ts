import { QWERTY_TO_DVORAK } from "./qwertyToDvorak";

export function mapKey(e: KeyboardEvent): string | null {
  // Backspace handled by caller
  if (e.key === "Backspace") return null;

  // Enter
  if (e.key === "Enter") return "\n";

  // Ignore modifier combos
  if (e.ctrlKey || e.altKey || e.metaKey) return null;

  // Ignore non-printable keys
  if (e.key.length > 1) return null;

  const lower = e.key.toLowerCase();
  let mapped = QWERTY_TO_DVORAK[lower] ?? lower;

  // Reapply Shift
  if (e.shiftKey) {
    mapped = mapped.toUpperCase();
  }

  return mapped;
}
