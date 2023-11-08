<!-- New Stars - Changelog. -->
<!-- Copyright © 2023 adamjr (CC BY 4.0 - https://creativecommons.org/licenses/by/4.0) -->
<!-- Note: This changelog is a development preview and may not reflect the final state of the game. -->

## 1.1.0b 'Solace' [2023.11.08]
> More robust combat system and more stable animated combat.

### Added
- Add solace turret engagement range.

### Improved
- Battle panel now keeps displaying destroyed combatants.
- Ship healing VFX now no longer flashes when spawned.
- Changed warning ping sound.

### Changed
- Reworked combat system to ensure all fighters have targets whenever possible.

### Removed
- Removed empires having different variants of civilian ships (complexity).

### Fixed
- Fix: Ubiquity -> Combat -> Ships sometimes don't move when in combat.
- Fix: Battle Panel -> Clicking away does not close panel.
- Fix: Ubiquity -> Starbase Label -> Resources are not aligned.
- Fix: Stardocks -> Sometimes spawn inside stars.
- Fix: Ubiquity -> FTL VFX -> Showing in ubiquity for no reason.
- Fix: Fleet Panel -> Shows red in text when has extra damage.
- Fix: Ships should not travel too close to stars/planets when in battle.
- Fix: Fleet -> Orders are not paused during battle.
- Fix: Combat System -> Starbases should only be targeted when it is the last remaining target.
- Fix: Combat System -> Battles last way too long with few ships remaining.
- Fix: Ships -> Have excessive shields and hull stats so battles last unnecessarily long.
- Fix: Ubiquity -> Combat -> Ships continue to fire when not in combat.
- Fix: Ubiquity -> Combat -> Ship has ambiguity (moves left and right continuously) when reaching the edge of the bounding box.
- Fix: Defence Stats UI -> Hull and shields text appears too blurry.
- Fix: Starbase Label -> Liberating text shows when not actually liberating.
- Fix: Claim Drawer -> Does not clear player icon when the player is defeated.
- Fix: Fleet -> Sometimes fleet move animations do not show.
- Fix: Fleet Panel UI -> Ubiquity Inspector -> Fleet visualization displays empty sometimes.
- Fix: Ships -> Have excessive shields and hull stats so battles last unnecessarily long.

---

## 1.0.1b 'Solace' [2023.11.03]
> Some bug fixes.

### Fixed
- Fix: Cross-scene -> Meet player SFX does not play the correct sound.
- Fix: Battle -> If a system is exited somehow, the battle in that system continues.
- Fix: Event panel -> Variables are displayed as placeholders.
- Fix: Click to rename -> Opens fleet rename for ship rename.
- Fix: Diplo panel -> Building icon appears over text in the tooltip.
- Fix: Ping -> Trade request ping shows empty trade.
- Fix: Pings -> Occur all at once.
- Fix: Starbase label occupation indicator -> Overlaps with starbase icon.
- Fix: Built -> Pings -> Meet player -> Plays default SFX.
- Fix: Ubiquity -> Explosion remnants are visible from outside of the star system.
- Fix: Solace -> Combat -> Huge bullet VFX should not appear with gravity.
- Fix: Solace -> Combat -> Clicking cancels laser beam, and laser beams also multiply when in combat.
- Fix: Black smoke appears during combat.

Note: Fixes may also include bugs fixed before and during the v1 update.

---

## 1.0.0b 'Solace' [2023.10.30]
> The ship building (and combat) update.
- A new ship builder has been built from scratch.
- The combat still needs work but is much more advanced than before.

### Added
- Add: Solace -> New Ship Builder.
- Add: Solace -> New Turrets -> 13 turrets have replaced the old 6 turrets.
- Add: Ubiquity -> Ship -> Healing VFX.
- Add: Ubiquity -> Ship -> Explosion/Destroyed VFX.

### Improved
- Improve: Battle Panel -> Retreat button is more visible.
- Improve: Ubiquity -> Realism -> Camera no longer clips into planets but pushes it away.
- Improve: Ubiquity -> Realism -> Ships no longer can be directly ordered to clip through planets.

### Tweaked
- Tweak: Max Planets per System -> Changed from `10` to `8`.
- Tweak: Max Hyperlanes -> Changed from `6` to `5`.
- Tweak: Base Hyperlane Density -> Changed from `.3` to `.4`.

### Fixed
- Fix: Save Game -> Ship presets were not being saved.

### Removed
- Remove: Old Ship Builder.
- Remove: Techs -> Previous ship turrets techs were removed.
- Remove: Party -> User indicators from the main menu UI.
- Remove: In-game Chat Button -> Until multiplayer is added.

This is the biggest update since 'Interstellar', so not all changes are listed.

---

## 0.4.0b 'Solace' [2023.09.16]
Bug fixes and improvements, with the addition of improved fleet trails.

### Added
- Diplomacy Panel -> Species Icon -> Tooltip -> Gives info about climate preference and origin type.

### Improved
- Alliances -> Share system intel with allies when exploring new systems.
- Trails -> Use new trail VFX for crimson and non-crimson ships.

### Changed
- Achievements -> Icons now use improved human-created artwork.
- Load Save -> Added warning if save version is out of date.
- Origins -> Special planet origins now spawn with their special resource.

### Fixed
- Fix: Load Save -> Some saves were not loading correctly due to version compatibility issues. 
  -> Should also work retroactively with saves from mid-August.
  -> May enforce version-locking for saves in the future to mitigate save/load problems.
- Fix: Allies -> Share visibility continues to share visibility, as originally intended.
- Fix: Built -> Research Panel -> Sometimes becomes temporarily unresponsive.
- Fix: Business -> Can continue queuing buildings past the slot limit (could not reproduce in tests).
- Fix: Colony -> Business owner not refunded when order cancelled in a foreign colony.
- Fix: Defeat Screen -> Does not open when a colony is lost.
- Fix: Diplomacy Panel -> Leave alliance tooltip shows HTML color text.
- Fix: Diplomacy Panel -> Opinion tooltip -> Text wrapping not working.
- Fix: Fleet Detection -> Foreign fleet in visible system should be met instantly.
- Fix: Load Save -> Does not update the galaxy map.
- Fix: Load Save -> Save reloads map improperly.
- Fix: Player claims -> Does not immediately update resolution when changing graphics quality.
- Fix: Tips Panel -> Species avatar is not applied correctly, causing tips to not work properly.
- Fix: Ubiquity -> Moving camera too fast moves limitless stars.
- Fix: Cross-scene -> Start game -> After loading save, loads save instead of scene.

### Tweaked
- Tweak: Colonists -> Now takes 1 year and small fleets take 60 days to build, on standard speed.
- Tweak: Colonists -> Now costs 200/200 metals/food on standard speed.

### Deprecated
- Ship Builder -> Future ship builder bug fixes won't be supported.
    -> Scope-creep; May remove in the near future and could replace with a simpler system over time.
    -> Assets are ancient and contain almost more lines of code than the rest of the project.
    -> There are many bugs with the ship builder.

---

## 0.3.0b 'Solace' [2023.09.13]
Made diplomacy panel easier to understand and improved research panel visuals, among other bug fixes and improvements.

### Added
- Diplomacy Panel -> Agendas UI -> Added different icon for each agenda, with info.
- Diplomacy Panel -> New detailed tooltips for every diplomatic action.

### Improved
- Ubiquity -> Ships now slow down to rotate towards a target, resulting in much more natural movement.
- Ability Icons -> Now uses new artwork icons, instead of previous flat icons.
- Research Panel -> Now uses new artwork icons, instead of previous flat icons.
- Diplomacy Panel -> Only counts systems with known intel.

### Changed
- Tech -> Repeatable Starbase Defence -> Changed from `+10%` to `+15%`.
- AI Players -> AI is now much less likely to spawn in as a non-default origin.
- Colony -> Intel is based on parent system, not intel of colony owner.

### Fixed
- Fix: Diplomacy Panel -> SFX goes crazy after a month has passed.
- Fix: Playmode UI -> Does not display peacekeeping pacifist details correctly.
- Fix: Trade Panel -> Does not work correctly (caused by issues with internal serializer).
- Fix: Battle -> Starts battle when not inside combat radius.
- Fix: Ubiquity -> Ships don't explode when destroyed.
- Fix: Combat -> Engagement Range -> Does not work.
- Fix: AI -> Does not designate bases.

*Note: Issues with loading saves may persist, and build version shows incorrect date.*

---

## 0.2.0b 'Solace' [2023.09.08]
Bug fixes and improvement of species avatars, and UI SFX.

### Improved
- Pings -> Upgraded most ping SFX to use new sci-fi sounds.
- Species Avatars -> Replaced AI-generated placeholders with human and alien icons.
- Diplomacy Panel -> Has new sci-fi holographic SFX, instead of a repetitive typewriter sound.
- Colony Siege -> When colony is occupied, some buildings are demolished.

### Changed
- Ubiquity -> Asteroid fields no longers spawns in systems with multiple stars.

### Tweaked
- Game Events -> 'Asteroid Appears' may happen every `25` in-game years instead of `50`.

### Fixed
- Fix: Ubiquity Inspector -> New black holes don't appear correctly.
- Fix: Ubiquity -> Cinematic Mode Lens -> Does not hide starbase labels.
- Fix: Ping -> Does not have click/hover SFX.
- Fix: Fleet -> Merge and Split -> Duplicates fleets with large numbers (12 gunboats became 14).
- Fix: Main Menu -> Steam details not displaying.
- Fix: Fleet -> Splitting fleet with five ships creates a sixth ship.
- Fix: Fleet -> Merge and Split -> Copies the same name over and over.
- Fix: Built -> Interaction Manager -> Sometimes visualized hyperlanes remain (occurred: gunboat w/o orders).
- Fix: Ubiquity -> Ship branding not working for crimson ships.
- Fix: Load Save -> Does not work and requires game reload.
- Fix: Starbase Order Manager -> Designate Dock completed instantly.
- Fix: Starbase Designation -> Takes no time.

### Removed
- Remove: Old Avatars -> Replaced with human created avatars.
    - Note: Previous saves will have empty avatars.

---

## 0.1.1b 'Celestial' [2023.09.03]
Lots of bugs fixes, along with minor improvements.

### Improved
- Improve: Main Menu -> Difficulty Selector -> Now uses more universal difficulty labels.
- Improve: Time Manager -> Added more time scale combinations.

### Changed
- Change: Diplomacy -> Requires allied relations, not just friendly, to have full intel.

### Fixed
- Fix: Game -> Does not work in Steam offline mode / without connection.
- Fix: Save Game -> Throws error when saving star system.
- Fix: Endgame Screen -> Leaderboard does not appear.
- Fix: Start Menu -> Username is not cropped.
- Fix: Loading Screen -> Playmode UI shows wrong playmode when loading save.
- Fix: Tips Panel UI -> Font appears too small and blurred.
- Fix: Diplomacy Panel -> Relations Grid -> Relationship icons are too hard to understand.
- Fix: Lens Buttons -> Appears too small.
- Fix: Pings -> Appears too small.
- Fix: Time Text -> System time does not update when paused.
- Fix: Cobalt -> Settings -> Anti-aliasing selector does not work.

*Note: In-game version appears as '0.1.0b' for this update.*

[https://store.steampowered.com/news/app/2390890/view/3682310076410658708](https://store.steampowered.com/news/app/2390890/view/3682310076410658708)

---

## 0.1.0b 'Celestial' [2023.09.02]
Added black hole VFX, and fixed some annoying bugs.

### Added
- Ubiquity -> Black holes are now animated and has new VFX.

### Improved
- Ubiquity -> Environment nebula now has a contiguous skybox.

### Changed
- UI -> Backgrounds are less explicit.
- UI -> Borders are now more thin.
- Saving -> Player preset is now saved with the game.

### Fixed
- Fix: Camera -> Looking up too fast snaps camera down.
- Fix: Create Game -> Causes 'memory freeze' (caused by custom system generation issues).
- Fix: Ubiquity -> Stars sometimes spawn inside each other.
- Fix: Player Claims -> Does not immediately update resolution when change graphics quality.
- Fix: Lens Buttons -> Views have no tooltips.
- Fix: Black Holes -> Highest quality setting appears to have low quality distortion effect.
- Fix: Seamless -> Black hole is not evident on map.

### Removed
- System Presets -> Removed temporarily until all bugs surrounding them are fixed.

---

## 0.0.2b 'Celestial' [2023.08.30]
Bug fixes and tweaks.

### Improved
- Settings -> Default graphics mode is now based on GPU VRAM instead of CPU cores for higher accuracy.

### Changed
- Bug Reporting Menu -> Max reports set to 3.
- UI -> Frames have been removed from panel backgrounds.

### Fixed
- Fix: Bug Reporting -> Can report more than 5 bugs in one session.
- Fix: Animated Combat -> Starbase does not shoot at ships.

---

## 0.0.1b 'Celestial' [2023.08.29]
First open-beta release. Bug fixes and tips improvements. Further development for Steam multiplayer lobbies and addition of full kick functionality, although multiplayer remains disabled until it becomes playable.

### Added
- Multiplayer -> Ready up in game lobby menu.
- Multiplayer -> Kicked from lobby modal.
- Multiplayer -> Button to leave lobby.
- Multiplayer -> Main menu lobby member avatar indicators.

### Improved
- Pause Menu -> Shows map settings in-game.
- Fleet -> EXP progress bar number indication.
- Bankrupt Ping -> Tooltip should have info of modifier changes.
- Save Indicator -> Icon changed to spinning star satellites for icon.
- Multiplayer -> View steam profile option from party members.
- Order Progress Bar -> Shows days left.

### Changed
- Changelog -> Switched to SemVer ~~for rapid deployment~~.
- Multiplayer -> Disabled multiplayer connections.
- Multiplayer -> All players can now manually pause the game, but only the host can control time scale.
- Ship Builder -> Fuel sections now increase regeneration rate.
- Textures -> Some textures were downscaled to make it quicker to start a game.

### Tweaked
- Black holes -> Speed reduction changed from `50%` to `25%`.
- Void Worlds -> Are now twice as rare.

### Fixed
- Battle -> Retreat crashes client.
- Endgame Screen -> Does not open but victory music continues to play.
- Map Generator -> Seed does not always generate same map.
- Multiplayer -> Client does not generate same map.
- Multiplayer -> Joining steam lobby does not work.
- Multiplayer -> Joining steam lobby shows empty username.
- Multiplayer -> Player presets do not update when joining lobby.
- Multiplayer -> Player usernames do not update when joining lobby.
- Ship stats -> Are not balanced.
- Ubiquity -> Some planets glow too bright.

### Removed
- Ship Builder -> Mk 6 and 7 sections.

---

## 2023.08.21 Closed-Beta "Celestial" (Part 2)

### Improved
- Ambient stars now rotate.

### Changed
- AI -> Silent states will enter stealth mode whenever they are in unclaimed territory.
    - You will most likely have to go to their territory to meet them.
- AI -> Fleets will now quantum distort.
    - Only explorers, and military fleets will do this.
- AI -> Now ignores stealth fleets.
- AI -> Military fleets will now ignore concealed worlds.
    - Concealed enemy worlds will be overlooked by AI as if nothing is there.
- AI -> Extreme isolationist will now destroy hyperlanes if they are next to an unfriendly neighbour.
- AI -> Xeno exterminators will now raze worlds whenever they get the chance.
- Fleet -> Stealth mode is auto-disabled if non-allied territory is entered.
    - Allied and unclaimed territory allow stealth mode.
- Combat System:
    - No longer accounts for distance or numerical advantages.
    - Random targets are chosen once, and changes if the targeter or target is destroyed.

### Tweaked
- Stardock -> build audio is too loud and should not have doppler effect
- Exploration -> time to analyze planet changed from `5` to `8` seconds

### Fixed
- Reveal All -> cannot see fleets on galaxy map.
- Player -> Does not save ship turrets correctly.
- Crimson ship builder -> Correct preset turrets are not placed on ships.
- Battle -> Error causes battle to freeze.
- Crimson -> Stats are not applied correctly.

---

## 2023.08.19 Closed-Beta "Celestial" (Part 1)
Bug fixes, ubiquity visual tweaks, and tip screen tweaks.

### Added
- Tips -> Research panel tip screen.

### Improved
- Ubiquity -> Asteroid fields now glow.
- Ubiquity -> Multi-coloured nebula replaces cloud particles.
- Tips -> Added sequential tips which move in sequence.
- Fleet Panel -> Now shows ship size in military headers.

### Fixed
- Business Partner -> Does not restore when loading the game.
- Crimson -> Template does not update when preset changes.
- Ship Builder -> Turrets don't restore and ui is buggy.
- Business -> Cannot build logistics office on foreign world.
    - It was displaying buildings that only the colony owner could build.
- Meet Player -> Space squids remain unmet (they don't threaten any players when unmet).
- Fleet -> Unmet player fleet in visible system shows as black (should meet player, or not show).
- Game Event Panel -> Selecting disconnects client.
- Ubiquity -> Nebula does not appear.
- Interaction -> Clicking away from fleet keeps other 2 selected.
- Interaction -> Fleet is considered selected while fleet panel is closed.
- Battle -> Does not end if player is defeated -> continues attacking unclaimed starbase.

---

## 2023.08.16 Closed-Beta "Celestial" (Part 1)
Addition of in-game bug reporting, with bug fixes and tweaks.

### Added
- Bug reporting UI -> Report bugs from in-game.

### Changed
- Old stars event is now only available for the 'Lost Colony' origin type.

### Improved
- Fleets -> View same ships of type in galaxy map, as one.
    - Shows fleets of same function in one stack, sorted by owner.
    - Reduces perceived size of massive overloaded fleet stacks in star systems.

### Tweaked
- Tech -> Base cost changed from 250 to 800 on standard speed.
    - You now have to focus on science buildings to unlock techs.

### Fixed
- Ubiquity -> Fleet freezes on faster speeds.
- Ubiquity -> Fleet -> Moves back in ubiquity system while in FTL travel.
- Ubiquity -> Ship speed is faster when time scale is lower.
- Cross-scene -> Typing in chat causes camera to move.
- Seamless -> Has a claim ceiling/border within galaxy itself.
- Cobalt -> Intro panel -> stretched image.
- Crimson -> Turrets don't spawn on ships.
- Celestial -> Asteroid fields have too low lod.
- Ship builder -> UI turret selection does not update correctly.

---

## 2023.08.13 Closed-Beta "Celestial" (Part 1)
A patch update with major bug fixes.

### Improved
- Fleet -> Union fleets now have a separate map icon.
- Ships -> Added 2 new ship sizes - Large and Huge.
    - Ship sizes are now: Tiny, Small, Medium, Large, Huge.
    - Each military ship type now respectively takes up 1, 2, 3, 4, and 5 ship capacity.
    - It was 1, 1, 2, 2, 3 previously.

### Fixed
- Cross-scene -> Saving/loading breaks the game.
- Load Save -> From start scene to main menu generates the wrong map.
- Trade Panel -> Does not open.
- Load Save -> Visually resets resources to base values.
- Empire Icons -> Claim drawer icon opacity does not update correctly when loading a save.
- Empire icons -> Not all icons in the are affected by scroll distance.
- Tech Manager -> Shows tech that was just completed sometimes when rerolled.
- Chat Menu -> Does not show the send message button text symbol.
- Fleet Order Manager -> Spawns fleet in the center of the star system.
- Fleet Order Manager -> Ubiquity fleet speed is not synced with visualized fleet speed.
- Fleet -> Builder -> Building animation zooms in and out.
- Union Fleet Capacity -> Does not update when building a union fleet.
- Fleet -> Split -> Creates broken empty fleet.
- Fleet -> Split -> Resets ship speed for some ships.
- Business -> Cannot build on colony after purchasing rights.

---

## 2023.08.12 Closed-Beta "CELESTIAL" (Part 1)
Part one of the cool animations update. There have been a lot of bug fixes, tweaks, and improvements.

### Added
- Ubiquity -> Added Asteroid fields.
- Ubiquity -> Added FTL VFX.
- Ubiquity -> Added Quantum Distortion VFX.
- Tech -> Added Fleet wormhole travel.
    - Unlocked after researching light cruisers.
- Ubiquity -> Added Stardock build fleet VFX.
- Ubiquity -> Added Explorer fleet explore SFX.
- Seamless -> Added galaxy map fleet order animations.
- Ubiquity Animations:
    - Builder fleet build starbase animation.
    - Stardock build fleet animation.
    - Extreme isolationist vaporize hyperlane animation.
    - Fleet quantum distort animation.
    - Fleet FTL VFX.

### Improved
- Ubiquity -> Improved starbase textures have been upscaled from `2048x2048` to `8192x8192`.
- Ubiquity -> Improved military ship section textures have been upscaled from `2048x2048` to `8192x8192`.
    - Ship building is now a higher quality experience.
- Ship builder -> Improved selection indicator is now animated.
- Combat System -> Improved closest ship to will be attacked, instead of random ships.
    - Distance is now a factor in battles.
- Ubiquity -> VFX now are scaled by time.
    - Ship trails and explosions can now be stopped mid-action with simulated time.
- Cobalt -> Play UI -> View origin details on hover.
- Toggle stealth mode affordance (toggle primary color)
- Starbase panel -> Designate -> Cannot tell which option is selected.
- Fleet -> Icons should be upscaled 4x.

### Tweaked
- All playable playmodes now have 2 modifiers each.
    - -500 opinion for xeno exterminator
    - -250 opinion for extreme isolationist
- Techs -> Ship type techs now unlock a new level of modules.
- Ship stats have been changed.
    - All ship presets start with default turrets.
    - Larger ships are faster as they start with more powerful engines.
- Fleet Capacity Tech -> Now gives `+5` capacity, instead of `+2`, and is more common.
- Reduced starbase damage to +10 per level, starting from 10, for all starbase types.
- Tech -> Claim cost -> Is now 60 on online and 30 on standard.
- Tech -> Stargate tech is now much rarer.
- Claim Cost -> 30 on online and 60 on standard speed.
- Opinion -> `200` opinion required for friendly attitude, instead of `250`. 
- Attitude required for forming business partnerships is now `Open`, instead of `Friendly`.
    - It's much easier to form business partnerships now.
    - Megacorps will find it much easier to start businesses.
    - Forming businesses will also become more competitive.
- Wormhole Systems -> Now count as neighbors for power cost.
- Starbase Designation Cost -> Should be 500 on standard, 250 on online.
- Fleet Distort Tech -> Now rolled after heavy cruisers and is harder to roll.
- AI colonies -> Should build food buildings when little food.
- Tech base cost -> Set to 500 on standard, 250 on online.
- Build explorer -> Should take 60 days on normal speed and 30 on online speed.
- Gunboat cost -> Should be 100 metals on standard, 50 on online.
- Purchase business rights -> Should cost 500 on online and 1000 on standard speed.
- Colonists -> Should cost 300 food and 300 metals on standard speed, and half on online speed.

### Fixed
- Colony panel -> Could not upgrade capital building.
- Cobalt -> Main menu -> Typing in input causes menu to change.
- Cobalt -> Main menu -> Game duration summary shows UI scale summary.
- Cobalt -> Audio sliders -> SFX volume slider now changes UI SFX audio volume.
- Ubiquity -> Starbase label HUD now shows player background color.
- Ubiquity -> Starbase label -> Shows transparent background image.
- Fleet panel -> Current order text does not sometimes show.
- Ubiquity -> Combat not triggering when within radius of enemy.
- Built -> UI scale sometimes resets to .25.
- Battle panel -> Combatant icons are now the correct size.
- Starbase label -> Click wormhole icon -> Does not work for whiteholes.
- Hyperlanes appearing over stars.
- Fleet actions -> 'e' button to interact conflicts with 'e' to enter/exit system.
- Create fleet -> Does not always update fleet icon on creation when Ubiquity is open.
- AI agendas -> Peacekeeper agendas don't account for peaceful clans.
- Ubiquity -> Stars sometimes spawn inside each other.
- Fleet actions -> Wormholes -> Fleet action icon only shows in systems without wormhole.
...and more.

### Removed
Some features have been removed to make way for improvements or to prevent bugs entirely.

- Techs -> Ship Section -> Mark 2-5.
- Wiki Panel
    - Required a lot of maintenance for something that wasn't used.
    - Will be replaced with tips system, which will be expanded instead.
    - Game mechanics should not require a wiki, but concise and useful tutorials.
- Star-gates
    - Not sure if it worked as expected.
    - Not very useful until endgame.
    - Could get re-added at some point but removed for now.
- Main Menu -> Load Last Save (for now).
- Main Menu -> Quick Play (for now).

---

## 2023.07.30 Closed-Beta "INTERSTELLAR + COBALT"
Visual and mechanical bug fixes, pacing tweaks, and a few improvements.

### Added
- Pings -> Now saveable and loadable with saves.
- Starbase Panel -> Tooltips for designation including cost, and error messages.
- Ubiquity -> Fleet combat engangement range indicator, while military fleet is selected.

### Changed
- Battle panel -> Now appears on right side of screen.
    - This is to not obstruct view of animated fighting.
- Tech -> Cost now accounts for logistical modifier.
    - Techs can be researched more quickly on faster speeds.
- Colonies -> Starts with 2 food (from capital building), 1 building, and 1 population.
    - This allows colonies to grow to 8 population, without needing additional farms.
- Colonies -> Pop growth rate reduced by 50% when there is no free housing.
- Starbases -> Marginal cost of claiming additional starbases reduced from 10 to 5 power.
- Game Duration -> Games can last 25, 36, 50, 75, and 100 years respectively depending on selected duration.
- Buildings -> Build cost is now scaled by logistical modifier.
- Ships -> Build cost is now scaled by logistical modifier.

### Fixed
- Colony Panel -> Tooltips now shows building production.
- Ubiquity -> Combat engagement range is no longer extremely limited.
- Save Game -> Game should now save correctly with game events.
- Fleet -> Stack now updates properly when fleet is destroyed/disbanded.
- Seamless -> Empire claims with darker empire colours are now brighter and easier to see.
- Starbase Panel -> Focus icon now shows affordance for what is enabled.
- Colony -> Population growth no longer goes below 0 when population at 1.
- Fleet Panel -> Current order text no longer shows blank text description when there is one order remaining.
- Colony Panel -> Focus no longer appears empty for science focus.
- Ubiquity -> Starbase label HUD no longer displays name twice.
- Ubiquity -> Name HUD no longer appears to clip inside starbase structures.
- Starbase Designate -> Tooltips have been remastered and no longer have too much spacing.

### Removed
- Tips -> Unnecessary details from tips panel are now gone.

---

## 2023.07.29 Closed-Beta "INTERSTELLAR + COBALT"
The biggest New Stars update is here. It combines two large updates into one. 'Interstellar' is for the 8 new playmodes, special abilities, and unique buildings. 'Cobalt' is for the new futurized and animated UI.

## Added

### Interstellar: 8 Playmodes

#### 1. Megacorporations
- **Ability**: ORDER OF BUSINESS (Purchase rights to build on foreign colonies).
- **Ability**: FORM MONETARY UNION (Gives economic bonuses).
- **Building**: LOGISTICS OFFICE (Collect foreign system resources).

#### 2. Peacekeeping Pacifist
- **Ability**: GALACTIC HARMONY ENFORCEMENT (Fleets can peacekeep in systems).
- **Ability**: PEACE CONVENTIONS (Truces last twice as long).
- **Building**: PEACEKEEPER ACADEMY (Love thy neighbours).

#### 3. Alliance Builder
- **Ability**: UNITE THE GALAXY (Form alliances/unions with clans).
- **Ability**: FORM DIPLOMATIC UNION (Gives opinion and defensive bonuses).
- **Building**: UNITY COUNCIL CHAMBERS (Love thy allies).

#### 4. Cooperative Militarist
- **Ability**: A UNITED FRONT (Invite other empires to wars).
- **Ability**: FORM MARTIAL UNION (Gives leader ability to build union fleet).
- **Building**: FORGE MATRIX (Ship building on steroids).

#### 5. Hegemonic Subjugator
- **Ability**: IMPERIAL HOLDINGS (Build on subject colonies).
- **Ability**: CLAN SERVITUDE (Integrate star clans).
- **Building**: IMPERIAL CITADEL (Love thy overlord).

#### 6. Xeno Exterminator
- **Ability**: PURGE DOCTIRNE (Raze worlds).
- **Origin**: SHATTERED WORLD (Spawn with additional military fleet).
- **Building**: GENE CLEANSING FACILITY (Cleanses sinful aliens).

#### 7. Extreme Isolationist
- **Ability**: SOLITUDE IMPERATIVE (Builders can destroy system connections).
- **Origin**: FORGOTTEN OUTPOST (Start with additional colonist).
- **Building**: SECLUSION NEXUS (Enhance thy colony).

#### 8. Silent State
- **Ability**: GALACTIC STEALTH IMPERATIVE (Stealth fleets).
- **Origin**: SHADOWY NEXUS (Start with intel bonus).
- **Building**: STEALTH OPERATIONS CENTER (Hide thy colony).

### Interstellar: Unions
Unions are galactic federations, and allow specialized alliances with their own bonuses.

#### 1. Economic Union
Gives economic modifiers to members.

#### 2. Diplomatic Union
Gives diplomatic, and defensive modifiers to members.

#### 3. Martial Union
Allows the leader to build union fleets. Gives offensive modifiers to members.

### Interstellar: Origins

#### 1. Lost Colony
Start with one additional population, housing building, and minerals building.

#### 2. Shattered World
Start with a full gunboat fleet.

#### 3. Forgotten Outpost
Start with an additional colonist fleet.

#### 4. Shadowy Nexus
Start with intel of 3 nearby empire capitals.

### Fleet: Quantum Distortion
- Basically a 'jump drive'; Allows travel without using known routes in a limited radius.
- Counters extreme isolationists and allows travel between isolated clusters.
- Has it's own technology which is unlocked after frigate ships.

### Cobalt: Animated Sci-Fi UI
- The UI has been futurized with animations.
- Cobalt is the name of the primary colour of the UI.

#### New Main Menu
- Select empire icon replaces randomization.
- Select species avatar replaces randomization.
- Select playmode with description panel.

#### New Settings
- Customizable keybinds.
- A lot more graphical customization.
- Detailed summary of each settings input.

#### New Everything
- Every UI panel has changed, so you will have to play the game for yourself to see it.

## Changed

### Tweaks
- **Special resources are more equally distributed across the map.**
    - Void worlds now generate much more often, as antimatter was extremely rare.
    - Class O stars have a higher chance to spawn.
- **Most base resources have been increased from +5, to +10 per month.**
    - Momentum at the start of the game is now faster, as it took a while to get started previously.
- **Peaceful clans now have one agenda.**
    - This is so you can now meet conditions for open-borders with peaceful clans.
- **Colonists now take 180 days to build, instead of 60.**
    - Unless you are on the fastest game speed.
- **Game duration now affects logistical pacing.**
    - Time to build fleets or colony buildings is scaled based on duration.
    - Resource costs are not currently affected, although this may change.
    - Exploration is constant on all speeds.
- **Starter colonies, regardless of origin, start with an additional food building and 2 population.**
    - Like in Civilization, colony starvation is localized to the colony.
    - This means that if a colony has a food deficit it will slowly lose population.
    - The extra population ensures that food is produced immediately.
- **Each population uses 0.25 food instead of 1 food.**
    - This means each food building job supports 4 population.

## Fixed
- Crashing bugs with AI military performing weird shenanigans.
- Game lacked special abilities or unique playstyles (i.e. all governments were too similar).
- Colony building is unbalanced (numbers need tweaking).
- Fleets go hidden in wormhole systems.
- Star system simulation have some graphical issues (lighting, star graphical artifacts etc.) 
- Monthly updates are laggy and unoptimized, especially with AI.
- Simulated combat is inconsistent, and buggy.
- Seamless claims now fill correctly.
- **and hundreds more random bugs...**

### More Info
- [New Stars - 'Interstellar + Cobalt' Update](https://store.steampowered.com/news/app/2231270/view/3659785736454988150)
- [New Stars DevLog #13 - Isolated Clusters, Stealth Fleets, and more...](https://store.steampowered.com/news/app/2231270/view/3695813899319566827)
- [New Stars DevLog #12 - Origins, Imperial Holdings, Destroy Worlds, and more...](https://store.steampowered.com/news/app/2231270/view/3695813899319468677)
- [New Stars DevLog #11 - Galactic Federations, Unified Fleets, and more...](https://steamcommunity.com/games/2231270/partnerevents/edit/3695813899319518662)
- [New Stars DevLog #10 - Megacorps, Galactic Peacekeepers, and more...](https://store.steampowered.com/news/app/2231270/view/3698065064764337182)

---

## 2023.06.11 Closed-Beta "GENESIS"
Genesis Update: The beginning of consolidating the game into a fast-paced 4X experience.
The galaxy comes to life: Adapted entities will bring new challenges and rewards to New Stars, with the potential for more additions based on player feedback.

### Added
- **Tutorial System**: A new tutorial system has been added to help new players familiarize themselves with the game and the genre.
- **Space Entities**: Unpredictable creatures of the void, including Void Squids, Plasma Squids, and Small Squids, have been introduced. Each entity offers unique challenges and rewards (work in progress).
- **New website**: newstarsgame.com now displays the changelog for public New Stars updates.

### Changed
- **Map Sizes**: Reduced map sizes slightly to optimize gameplay.
- **Player Claims Resolution**: Adjusted player claims resolution based on quality settings to prevent crashes on lower-end systems.

### More Info
- [New Stars DevLog #9 - Space Entities, Tutorial System, and more...](https://store.steampowered.com/news/app/2231270/view/3720582429619991066)