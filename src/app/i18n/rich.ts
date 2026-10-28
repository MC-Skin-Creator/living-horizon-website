import type { LINKS } from '../config/site';

/** A link of `LINKS`: an address, or an anchor of this page (`#…`). */
export type LinkKey = keyof typeof LINKS;

/**
 * A piece of a sentence: plain text, a setting's name (`em`), a file or a value (`code`), or
 * a link. Each language orders the pieces of its own sentence, as with `{ before, after }`.
 */
export type Segment = string | { em: string } | { code: string } | { link: LinkKey; text: string };

/** A paragraph, or a bulleted list of them. */
export type Block = Segment[] | { list: Segment[][] };

export interface Question {
  q: string;
  /** The answer, block by block. */
  a: Block[];
}

/** Keeps each question's key in `Messages` and checks every answer against `Question`. */
export function questions<K extends string>(items: Record<K, Question>): Record<K, Question> {
  return items;
}
