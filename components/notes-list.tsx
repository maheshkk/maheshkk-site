import type { Note } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function NotesList({ notes }: { notes: Note[] }) {
  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <li key={note.id} className="rounded-xl border border-black/5 p-4 text-sm text-ink/75">
          <p>{note.text}</p>
          <p className="mt-2 text-xs text-ink/55">
            {note.source} {note.date ? `| ${formatDate(note.date)}` : ""}
          </p>
          <a href={note.url} className="mt-2 inline-block text-xs text-accent hover:underline">
            View reference
          </a>
        </li>
      ))}
    </ul>
  );
}
