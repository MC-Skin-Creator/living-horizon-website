import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18n } from '../i18n/i18n';

/** The texts every section heading has, in its dictionary. */
export interface HeadTexts {
  eyebrow: string;
  title: string;
  /** The end of the title, highlighted. */
  accent: string;
}

/**
 * The heading of a section: its eyebrow, its title with the highlighted end, and a sentence.
 * A sentence with a link or code goes inside the element instead of `text`.
 *
 * `<header lhHead [texts]="t" [text]="t.text" lhReveal></header>`
 */
@Component({
  selector: 'header[lhHead]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-head', '[class.center]': 'center()' },
  template: `
    <span class="eyebrow">{{ texts().eyebrow }}</span>
    <!-- No space is added between the two parts: \`i18n.gap()\` is the language's own. -->
    @if (page()) {
      <h1>
        {{ texts().title }}{{ i18n.gap() }}<span class="accent">{{ texts().accent }}</span>
      </h1>
    } @else {
      <h2>
        {{ texts().title }}{{ i18n.gap() }}<span class="accent">{{ texts().accent }}</span>
      </h2>
    }
    @if (text(); as text) {
      <p>{{ text }}</p>
    }
    <ng-content />
  `,
})
export class SectionHead {
  protected readonly i18n = inject(I18n);

  readonly texts = input.required<HeadTexts>();
  readonly text = input<string>();
  /** The heading of a page of its own: an `h1`. */
  readonly page = input(false);
  readonly center = input(false);
}
