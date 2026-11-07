---
name: player-writing
description: Write or rewrite any text of the site that tells players about the mod - feature cards and their details, the multiplayer notes, the compatibility cards, the FAQ, the hero, the help section - as clear, player-first copy, in the way the mod's own changelog is written (its `changelog-writing` skill). Use whenever a text of `src/app/i18n/` describes what Living Horizon does, how it works, where it works or how to set it up, even for one sentence, and when the user finds a text unclear, too technical or not user-friendly.
---

# Writing for players

The site is read by Minecraft players deciding whether to install the mod, or wondering how
it works. Every text about the mod must read like the store page of a polished, professional
mod: confident, natural, short, understood at once by someone who has never seen the code.
It says what the player sees, gets or can do, not what the code does.

This is the mod repository's `changelog-writing` skill
(`.claude/skills/changelog-writing/SKILL.md` in MC-Skin-Creator/living-horizon), adapted to
the site. When the two disagree on something about the site (register, structure), this one
wins; for the mod's own terms, follow the mod.

## Steps

1. Read the text as it is now, in `src/app/i18n/en.ts`, and where it shows on the page.
2. Check every fact against the mod: its README, its changelog (`changelog/en.md`) and
   `docs/technical.md` in MC-Skin-Creator/living-horizon. Setting and screen names come
   from `src/main/resources/assets/livinghorizon/lang/<lang>.json` there, exactly as the
   game shows them.
3. Write the English (*Voice*, *Patterns*, *Rules*), then every other language in the same
   change (CLAUDE.md, *Localization*).
4. Read each text back as a player would, and check it against *Before you finish*.

## Voice

- **Benefit first.** Lead with what the player gets, in a positive form: "Players who logged
  off live on", not "Offline player simulation".
- **What the player sees**, in the present: "Animals graze on the far hills", "You see every
  other player, wherever they are."
- **Summarise, do not enumerate.** "birds of all kinds, from geese to ducks" rather than
  the list of every species; "with their gear and their mount" rather than cape, elytra,
  armour. A player does not need a full list to picture it.
- **Say why it matters** in a short second sentence when it is not obvious: "So you can
  lower your render distance and keep a living world."
- **"Living Horizon" as the subject** for what the mod does; "your game" for what runs on
  the player's computer; "the server" for what a server with the mod does.
- **Drop side details** a player does not act on: how something is stored, sent or
  computed, how often, internal names, which file holds it. Keep a detail only if the
  player needs it to understand, find or use the feature.
- Calm and factual: no exclamation marks, no hype ("amazing", "huge"), no jokes.

## Patterns

**A card** (`features.items.<feature>`): a title naming the result (2 to 7 words), one or
two sentences of what the player sees, three short points a player can picture, and where
it works.

**A part of a feature's details** (`details`): a short heading that names what the part
answers ("Even where nobody has been", "Only for show", "Where to find it"), then one to
three sentences, one idea each. Four or five parts at most per feature: what it shows, how
far / where, its limits, what a server adds, where its settings are.

**A FAQ answer**: the answer in its first words ("Yes.", "No.", "Most likely."), then the
one thing to know, then a pointer to the section that says more.

## Rules

1. **The player's side, never the code's.** No draws, ticks, packets, threads, buffers,
   depth, passes, queries, chunks loaded, files, JSON keys, rates per second.
   - Bad: "A server with the mod shares where every player is five times a second."
   - Better: "A server with the mod shows you every player, wherever they are, moving
     smoothly."
2. **Configuration keys and file names stay out of the feature texts.** Point to the
   server settings (the `serverSettings` link) instead; the FAQ may name one key when a
   player asks how to turn something off.
3. **Explain the mod's own terms** when the context does not: simplified images (the light
   pictures that replace distant 3D models), offline players (players who logged off, still
   shown where they left), estimated mobs (worked out from the world's seed, never seen).
4. **Never over-promise.** What is estimated is said to be estimated, with its limit: "As
   they are only estimates, they may differ or be gone once you get there." Never "shows the
   mobs that are there".
5. **Most important first**: the feature, then the condition.
6. **Not documentation.** One how-to sentence at most; no click-by-click procedure. The
   settings are named, in the mod's words, not explained one by one.
7. **Keep only the numbers that give the scale**: 1,024 chunks, 512 blocks, 14 languages.
8. **Server and privacy.** When the server shares something sensitive (player positions,
   the world seed), say plainly what it allows, who receives it and whether it is on by
   default. Neither minimise nor dramatise.
9. **One word per concept**:

   | Concept | English | French |
   |---|---|---|
   | Minecraft mobs | mobs | créatures |
   | Boats, vehicles | entities | entités |
   | Players who logged off | offline players / players who logged off | joueurs déconnectés |
   | Mobs worked out from the seed (*Show Guessed Mobs*) | estimated mobs | créatures estimées |
   | The world seed | seed | seed |
   | Past the render distance | distant, in the distance, far away | lointain(e)s, au loin |
   | The game's render distance | render distance | distance d'affichage |
   | Pictures replacing 3D models | simplified images | images simplifiées |
   | Far-terrain mods | far terrain | terrain lointain |
   | Iris packs | shaders, shader pack | shaders, pack de shaders |
   | Single player | single player | solo |
   | Players who have the mod | players with the mod | joueurs qui ont le mod |

   The site keeps the mod's register: French **tu**, German **du** (CLAUDE.md), where the
   mod's changelog says *vous*. Other languages keep the register their file already has.
10. **Never change what a text describes.** Reword and cut freely, but keep the exact
    behaviour; never invent a feature or a benefit.
11. **The mod's surprises are never described**, nor hinted at.

## Before and after

| Draft | For players |
|---|---|
| **How it guesses** — When the game generates a chunk, it places its first animals with random draws made from the world's seed and the chunk's position. Living Horizon makes the same draws for the chunks not generated yet… | **Even where nobody has been** — Land you have never visited has its herds too. Living Horizon estimates them from the world's seed, so they may differ, or be gone, once you get there. |
| **How it works** — A server with the mod shares where every player is five times a second, with what they ride and whether they glide with an elytra. Every five seconds it adds how the nearest ones look… | **On a server with the mod** — You see every other player, wherever they are, with their skin, their gear and their mount, moving smoothly. |
| **Who flies where** — Flocks cross the sky, geese fly in a V, birds of prey circle. Gulls follow the coast… Pigeons sit on tall buildings, robins hop in fields, tits stay in the trees. | **Birds of every kind** — From geese flying in a V to ducks on the ponds, each kind lives where it belongs: in the trees, over the coast, on the roofs. |

## Before you finish

- Does every title name a result a player can picture?
- Does every text start with what the player sees or can do?
- Is every list a player does not need summarised, every side detail dropped?
- No code, file, key, rate or internal name left in a feature text?
- Is every estimate called an estimate, every sensitive server option said to be on or off
  by default?
- Same terms as the table, the site's register in every language?
- Every language changed in the same change?
