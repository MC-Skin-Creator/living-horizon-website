import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SITE } from '../config/site';
import { Block, LinkKey, Segment } from '../i18n/rich';

/**
 * Paragraphs and lists made of pieces (`src/app/i18n/rich.ts`): text, a setting's name, code,
 * or a link of `LINKS`. The FAQ's answers and the features' details.
 */
@Component({
  selector: 'lh-rich',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #rich let-parts>
      @for (p of asSegments(parts); track $index) {
        @if (isText(p)) {
          <!-- In a container: no space is added around the text, it carries its own. -->
          <ng-container>{{ p }}</ng-container>
        } @else if ('em' in p) {
          <em>{{ p.em }}</em>
        } @else if ('code' in p) {
          <code>{{ p.code }}</code>
        } @else if (isAnchor(p.link)) {
          <a [href]="site.links[p.link]">{{ p.text }}</a>
        } @else {
          <a [href]="site.links[p.link]" target="_blank" rel="noopener">{{ p.text }}</a>
        }
      }
    </ng-template>

    @for (block of blocks(); track $index) {
      @if (listOf(block); as items) {
        <ul>
          @for (li of items; track $index) {
            <li>
              <ng-container *ngTemplateOutlet="rich; context: { $implicit: li }" />
            </li>
          }
        </ul>
      } @else {
        <p>
          <ng-container *ngTemplateOutlet="rich; context: { $implicit: block }" />
        </p>
      }
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 10px;
      color: var(--muted);
    }

    p,
    ul {
      margin: 0;
    }

    ul {
      padding-left: 1.2em;
      display: grid;
      gap: 6px;
    }

    em {
      font-style: normal;
      color: var(--text);
    }

    code {
      font-size: 0.88em;
      padding: 1px 5px;
      border-radius: 5px;
      background: var(--surface-2);
      color: var(--text);
      overflow-wrap: anywhere;
    }

    a {
      color: var(--sun);
    }
  `,
})
export class RichText {
  protected readonly site = SITE;
  readonly blocks = input.required<Block[]>();

  /** The template outlet's context is untyped. */
  protected asSegments(parts: unknown): Segment[] {
    return parts as Segment[];
  }

  protected isText(p: Segment): p is string {
    return typeof p === 'string';
  }

  protected isAnchor(link: LinkKey): boolean {
    return SITE.links[link].startsWith('#');
  }

  protected listOf(block: Block): Segment[][] | null {
    return Array.isArray(block) ? null : block.list;
  }
}
