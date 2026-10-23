import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { I18n } from '../i18n/i18n';
import { Lang } from '../i18n/languages';
import { Icon } from './icon';

let pickers = 0;

/** The language button of the nav and its list: each language in its own words. */
@Component({
  selector: 'lh-lang-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(keydown.escape)': 'close(true)',
  },
  template: `
    <button
      #button
      type="button"
      class="current"
      aria-haspopup="true"
      [attr.aria-controls]="menuId"
      [attr.aria-expanded]="open()"
      [attr.aria-label]="i18n.t().language.label + ': ' + current().name"
      [title]="i18n.t().language.label"
      (click)="open.set(!open())"
    >
      <lh-icon name="globe" />
      <span class="code">{{ current().code }}</span>
    </button>
    @if (open()) {
      <ul class="menu" [id]="menuId" [attr.aria-label]="i18n.t().language.label">
        @for (l of i18n.languages; track l.code) {
          <li>
            <button
              type="button"
              [attr.lang]="l.code"
              [attr.aria-current]="l.code === i18n.lang() ? 'true' : null"
              (click)="pick(l.code)"
            >
              <span>{{ l.name }}</span>
              @if (l.code === i18n.lang()) {
                <lh-icon name="check" />
              }
            </button>
          </li>
        }
      </ul>
    }
  `,
  styles: `
    :host {
      position: relative;
      display: inline-flex;
    }
    .current {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 38px;
      padding: 0 10px 0 9px;
      border-radius: 10px;
      border: 1px solid var(--line-strong);
      background: var(--surface);
      color: var(--muted);
      font: 600 0.82rem var(--font-body);
      cursor: pointer;
      transition:
        color 0.2s,
        background 0.2s;
    }
    .current:hover,
    .current[aria-expanded='true'] {
      color: var(--text);
      background: var(--surface-2);
    }
    .current lh-icon {
      width: 18px;
      height: 18px;
    }
    .code {
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .menu {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 60;
      min-width: 210px;
      max-height: min(70vh, 600px);
      overflow-y: auto;
      margin: 0;
      padding: 6px;
      list-style: none;
      border: 1px solid var(--line-strong);
      border-radius: var(--radius-sm);
      background: rgb(16 21 43 / 0.98);
      box-shadow: 0 18px 50px rgb(0 0 0 / 0.5);
    }
    .menu button {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 8px 12px;
      border: 0;
      border-radius: 8px;
      background: none;
      color: var(--muted);
      font: 600 0.92rem var(--font-body);
      text-align: left;
      cursor: pointer;
    }
    .menu button:hover,
    .menu button:focus-visible {
      color: var(--text);
      background: var(--surface-2);
    }
    .menu button[aria-current] {
      color: var(--text);
    }
    .menu lh-icon {
      width: 16px;
      height: 16px;
      color: var(--sun);
    }
  `,
})
export class LangPicker {
  protected readonly i18n = inject(I18n);
  protected readonly menuId = `lang-menu-${++pickers}`;
  protected readonly open = signal(false);
  protected readonly current = computed(() =>
    this.i18n.languages.find((l) => l.code === this.i18n.lang())!,
  );
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly button = viewChild<ElementRef<HTMLButtonElement>>('button');

  protected pick(code: Lang) {
    this.close(true);
    void this.i18n.use(code);
  }

  protected close(refocus = false) {
    if (!this.open()) return;
    this.open.set(false);
    if (refocus) this.button()?.nativeElement.focus();
  }

  protected onDocumentClick(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.close();
  }
}
