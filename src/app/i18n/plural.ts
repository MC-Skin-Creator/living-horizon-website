/**
 * Plural forms for the dictionaries: `plural('ru')(n, { one: '…', few: '…', many: '…',
 * other: '…' })` picks the form the language uses for `n` (see Intl.PluralRules) and puts
 * `n`, formatted for the language, in place of `{n}`.
 */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

export function plural(locale: string) {
  const rules = new Intl.PluralRules(locale);
  const numbers = new Intl.NumberFormat(locale);
  return (n: number, forms: PluralForms) =>
    (forms[rules.select(n)] ?? forms.other).replaceAll('{n}', numbers.format(n));
}
