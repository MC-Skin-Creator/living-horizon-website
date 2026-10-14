import { Pipe, PipeTransform } from '@angular/core';

/** 5041 → "5,041"; 12500 → "12.5K" with `compact`. Empty values stay empty. */
@Pipe({ name: 'count' })
export class CountPipe implements PipeTransform {
  transform(value: number | null | undefined, compact = false): string {
    if (value === null || value === undefined) return '';
    return new Intl.NumberFormat(
      'en',
      compact ? { notation: 'compact', maximumFractionDigits: 1 } : {},
    ).format(value);
  }
}

/** ISO date → "Oct 13, 2026". */
@Pipe({ name: 'day' })
export class DayPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }
}

/** ISO date → "2 days ago". */
@Pipe({ name: 'ago' })
export class AgoPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
    const days = Math.round((Date.now() - date.getTime()) / 86_400_000);
    if (Number.isNaN(days)) return '';
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    if (Math.abs(days) < 1) return 'today';
    if (Math.abs(days) < 30) return rtf.format(-days, 'day');
    if (Math.abs(days) < 365) return rtf.format(-Math.round(days / 30), 'month');
    return rtf.format(-Math.round(days / 365), 'year');
  }
}
