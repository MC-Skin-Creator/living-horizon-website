import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'discord'
  | 'download'
  | 'arrow-right'
  | 'external'
  | 'bug'
  | 'flask'
  | 'check'
  | 'eye'
  | 'layers'
  | 'mountain'
  | 'feather'
  | 'gauge'
  | 'sliders'
  | 'server'
  | 'server-off'
  | 'shield'
  | 'wifi'
  | 'users'
  | 'sparkles'
  | 'calendar'
  | 'tag'
  | 'box'
  | 'menu'
  | 'close'
  | 'plus'
  | 'message'
  | 'film'
  | 'globe'
  | 'search';

/** Line icons on a 24 px grid; GitHub and Discord are their own marks. */
@Component({
  selector: 'lh-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
  template: `
    @switch (name()) {
      @case ('github') {
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
          />
        </svg>
      }
      @case ('discord') {
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M20.32 4.37A19.8 19.8 0 0 0 15.39 2.8a13.7 13.7 0 0 0-.63 1.3 18.4 18.4 0 0 0-5.52 0 13.6 13.6 0 0 0-.64-1.3 19.7 19.7 0 0 0-4.93 1.53C.53 9.05-.32 13.6.1 18.1a19.9 19.9 0 0 0 6.04 3.05 14.8 14.8 0 0 0 1.3-2.1 12.9 12.9 0 0 1-2.04-.98l.5-.39a14.2 14.2 0 0 0 12.2 0l.5.4c-.65.38-1.33.71-2.04.97.37.74.81 1.44 1.3 2.1a19.8 19.8 0 0 0 6.04-3.05c.5-5.2-.84-9.72-3.58-13.73ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"
          />
        </svg>
      }
      @default {
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          @switch (name()) {
            @case ('download') {
              <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
            }
            @case ('arrow-right') {
              <path d="M5 12h14m-6-6 6 6-6 6" />
            }
            @case ('external') {
              <path
                d="M14 4h6v6m0-6L10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
              />
            }
            @case ('bug') {
              <path
                d="M8 6a4 4 0 0 1 8 0M6 10h12v4a6 6 0 0 1-12 0v-4Zm6 0v10M3 13h3m12 0h3M4 7l3 3m13-3-3 3M4 20l3-3m13 3-3-3"
              />
            }
            @case ('flask') {
              <path
                d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10"
              />
            }
            @case ('check') {
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            }
            @case ('search') {
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            }
            @case ('eye') {
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            }
            @case ('layers') {
              <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
            }
            @case ('mountain') {
              <path d="m3 20 6-10 4 6 2-3 6 7H3Z" />
              <circle cx="17" cy="6" r="2" />
            }
            @case ('feather') {
              <path d="M20 4c-6 0-12 4-12 12v4M8 16h7c3-2 5-6 5-12M8 12h6" />
            }
            @case ('gauge') {
              <path d="M12 14l4-4M3.5 18a9.5 9.5 0 1 1 17 0" />
              <circle cx="12" cy="14" r="1.5" />
            }
            @case ('sliders') {
              <path d="M4 6h10m4 0h2M4 12h4m4 0h8M4 18h12m4 0h0" />
              <circle cx="16" cy="6" r="2" />
              <circle cx="10" cy="12" r="2" />
              <circle cx="18" cy="18" r="2" />
            }
            @case ('server') {
              <rect x="3" y="4" width="18" height="7" rx="2" />
              <rect x="3" y="13" width="18" height="7" rx="2" />
              <path d="M7 7.5h.01M7 16.5h.01" />
            }
            @case ('shield') {
              <path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z" />
            }
            @case ('wifi') {
              <path
                d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0M12 19.5h.01"
              />
            }
            @case ('server-off') {
              <rect x="3" y="4" width="18" height="7" rx="2" />
              <rect x="3" y="13" width="18" height="7" rx="2" />
              <path d="M7 7.5h.01M7 16.5h.01M2 2l20 20" />
            }
            @case ('users') {
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" />
            }
            @case ('sparkles') {
              <path
                d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
              />
            }
            @case ('calendar') {
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4m8-4v4" />
            }
            @case ('tag') {
              <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
              <circle cx="8" cy="8" r="1.5" />
            }
            @case ('box') {
              <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12v9m0-9L4 7.5" />
            }
            @case ('menu') {
              <path d="M4 7h16M4 12h16M4 17h16" />
            }
            @case ('close') {
              <path d="M6 6l12 12M18 6 6 18" />
            }
            @case ('plus') {
              <path d="M12 5v14M5 12h14" />
            }
            @case ('message') {
              <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.2-4.6A8 8 0 1 1 21 12Z" />
            }
            @case ('globe') {
              <circle cx="12" cy="12" r="9" />
              <path
                d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"
              />
            }
            @case ('film') {
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 4v16M17 4v16M3 9h4m10 0h4M3 15h4m10 0h4" />
            }
          }
        </svg>
      }
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
