import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18n } from '../i18n/i18n';

// Not pure: they read the page's language, and show the new one when it changes.

/** 5041 → "5,041"; 12500 → "12.5K" with `compact`, in the page's language. Empty stays empty. */
@Pipe({ name: 'count', pure: false })
export class CountPipe implements PipeTransform {
  private readonly i18n = inject(I18n);

  transform(value: number | null | undefined, compact = false): string {
    if (value === null || value === undefined) return '';
    return new Intl.NumberFormat(
      this.i18n.lang(),
      compact ? { notation: 'compact', maximumFractionDigits: 1 } : {},
    ).format(value);
  }
}

/** ISO date → "Oct 13, 2026", in the page's language. */
@Pipe({ name: 'day', pure: false })
export class DayPipe implements PipeTransform {
  private readonly i18n = inject(I18n);

  transform(value: string | null | undefined): string {
    if (!value) return '';
    const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(this.i18n.lang(), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }
}

/** ISO date → "2 days ago", in the page's language. */
@Pipe({ name: 'ago', pure: false })
export class AgoPipe implements PipeTransform {
  private readonly i18n = inject(I18n);

  transform(value: string | null | undefined): string {
    if (!value) return '';
    const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
    const days = Math.round((Date.now() - date.getTime()) / 86_400_000);
    if (Number.isNaN(days)) return '';
    const rtf = new Intl.RelativeTimeFormat(this.i18n.lang(), { numeric: 'auto' });
    if (Math.abs(days) < 1) return rtf.format(0, 'day');
    if (Math.abs(days) < 30) return rtf.format(-days, 'day');
    if (Math.abs(days) < 365) return rtf.format(-Math.round(days / 30), 'month');
    return rtf.format(-Math.round(days / 365), 'year');
  }
}
