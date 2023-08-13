<!-- New Stars - Changelog. -->
<!-- Copyright © 2023 ADAMJR (CC BY 4.0 - https://creativecommons.org/licenses/by/4.0) -->
<!-- Note: This changelog is a development preview and may not reflect the final state of the game. -->

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
- Trade panel -> Does not open.
- Load Save -> Visually resets resources to base values.
- Empire Icons -> Claim drawer icon opacity does not update correctly when loading a save.
- Empire icons -> Not all icons in the are affected by scroll distance.
- Tech manager -> Shows tech that was just completed sometimes when rerolled.
- Chat menu -> Does not show the send message button text symbol.
- Fleet order manager -> Spawns fleet in the center of the star system.
- Fleet order manager -> Ubiquity fleet speed is not synced with visualized fleet speed.
- Fleet builder -> Building animation zooms in and out.
- Union Fleet Capacity -> Does not update when building a union fleet.
- Fleet Split -> Creates broken empty fleet.
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