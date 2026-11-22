import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SITE } from '../config/site';
import { LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { HorizonScene } from '../scene/horizon-scene';
import { AgoPipe, CountPipe } from '../shared/format';
import { Icon } from '../shared/icon';

/** The far-terrain mods the hero names in turn, with their logo in `img/logos/`. */
const FAR_MODS = [
  { name: 'Voxy', logo: 'voxy' },
  { name: 'Distant Horizons', logo: 'distant-horizons' },
  { name: 'Lodistance', logo: 'lodistance' },
  { name: 'Far View', logo: 'far-view' },
  { name: 'Ecstatic', logo: 'ecstatic' },
];

/** How long each mod stays, in milliseconds. */
const TURN = 2600;

@Component({
  selector: 'lh-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HorizonScene, Icon, CountPipe, AgoPipe],
  template: `
    @let t = i18n.t();
    <section class="hero" id="top">
      <lh-horizon class="scene" scene="hero" [resolution]="210" [label]="t.hero.scene" />
      <div class="shade" aria-hidden="true"></div>

      <div class="container inner">
        <a class="pill news" href="#compatibility">
          <span class="tag">{{ t.common.new }}</span>
          {{ t.hero.news }}
          <lh-icon name="arrow-right" />
        </a>

        <h1>
          <img
            class="title"
            src="img/brand/title-minecraft.webp"
            srcset="img/brand/title-minecraft-800.webp 800w, img/brand/title-minecraft.webp 1600w"
            sizes="(max-width: 700px) 92vw, 640px"
            width="1600"
            height="447"
            alt="Minecraft Living Horizon"
            fetchpriority="high"
          />
          <span class="tagline"
            >{{ t.hero.tagline }}{{ i18n.gap()
            }}<span class="accent">{{ t.hero.taglineAccent }}</span></span
          >
        </h1>

        <p class="lede">
          {{ t.hero.lede.before }}
          <span class="visually-hidden">{{ farModList() }}</span>
          <!-- One far-terrain mod after the other, its logo with it. -->
          <span
            class="rotator"
            aria-hidden="true"
            [style.width.px]="width()"
            (mouseenter)="paused.set(true)"
            (mouseleave)="paused.set(false)"
          >
            @for (mod of farMods; track mod.name; let i = $index) {
              <strong class="mod" [class.current]="i === current()" [class.gone]="i === previous()">
                <img [src]="'img/logos/' + mod.logo + '.webp'" alt="" width="20" height="20" />{{
                  mod.name
                }}
              </strong>
            }</span
          >{{ t.hero.lede.after }}
        </p>

        <div class="ctas">
          <a class="btn primary" href="#download"
            ><lh-icon name="download" /> {{ t.common.download }}</a
          >
          <a class="btn" [href]="site.links.github" target="_blank" rel="noopener">
            <lh-icon name="github" /> GitHub
          </a>
        </div>
      </div>

      <div class="container bottom">
        <ul class="facts" [attr.aria-label]="t.hero.facts">
          <li>
            <span class="k">{{ t.hero.latest }}</span>
            <span class="v">v{{ data.version() }}</span>
          </li>
          <li>
            <span class="k">{{ t.hero.updated }}</span>
            <span class="v">{{ data.updatedAt() | ago }}</span>
          </li>
          <li>
            <span class="k">{{ t.hero.downloads }}</span>
            <span class="v">
              @if (data.downloads().total; as total) {
                {{ total | count: true }}
              } @else {
                <span class="skeleton"></span>
              }
            </span>
          </li>
          <li>
            <span class="k">{{ t.hero.minecraft }}</span>
            <span class="v">{{ data.mcRange() }}</span>
          </li>
          <li class="wide">
            <span class="k">{{ t.hero.loaders }}</span>
            <span class="v">{{ loaderNames() }}</span>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);

  protected readonly farMods = FAR_MODS;
  /** Every mod at once, for screen readers: "Voxy, Distant Horizons… or Ecstatic". */
  protected readonly farModList = computed(() =>
    new Intl.ListFormat(this.i18n.lang(), { type: 'disjunction' }).format(
      FAR_MODS.map((m) => m.name),
    ),
  );
  protected readonly current = signal(0);
  /** The mod sliding out, while the next slides in. */
  protected readonly previous = signal<number | null>(null);
  /** The width of the mod shown, so the sentence closes up around it. */
  protected readonly width = signal<number | null>(null);
  protected readonly paused = signal(false);

  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    const measure = () => {
      const shown = host.querySelectorAll<HTMLElement>('.rotator .mod')[this.current()];
      if (shown) this.width.set(Math.ceil(shown.getBoundingClientRect().width));
    };
    afterNextRender(() => {
      measure();
      void document.fonts?.ready.then(measure);
      // Shown one by one only where motion is welcome; else the first stays.
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const timer = setInterval(() => {
        if (this.paused() || document.hidden) return;
        this.previous.set(this.current());
        this.current.set((this.current() + 1) % FAR_MODS.length);
        measure();
      }, TURN);
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  protected loaderNames() {
    return this.data
      .loaders()
      .map((l) => LOADER_NAMES[l])
      .join(' · ');
  }
}
