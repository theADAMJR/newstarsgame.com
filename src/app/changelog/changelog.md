<!-- New Stars - Changelog. -->
<!-- Copyright © 2023 adamjr. All rights reserved. -->
<!-- Note: This changelog is a development preview and may not reflect the final state of the game. -->

## 1.6.2 'META' [29.02.2024]
> Patch for inevitable combat bugs that were created from the pathfinding rework star system rescaling.

### Improved
- Improve: Ship Builder -> Toggling should re-open Ubiquity if Ubiquity was open.
- Improve: Animated Combat -> Restore old burnout material that is less ugly.

### Fixed
- Fix: Interaction Manager -> Diplomacy Panel -> Clicking away does not close.
- Fix: Ubiquity -> Solace turret ambience is sometimes heard during battle.
- Fix: Animated Combat -> Explosion VFX not visible when ship is destroyed.

---

## 1.6.1 'META' [26.02.2024]
> Patch of crashing bug, and Ubiquity bug fixes.

### Fixed
- Fix: Starbase Panel -> Opening panel crashes game.
- Fix: Ubiquity -> Initial Load -> Ship colours are incorrect on initial load.
- Fix: Ubiquity -> Ship trails do not appear the first time a star system is being viewed.

---

## 1.6.0-prerelease 'META' [23.02.2024]
> AI is now mostly multithreaded.

### Optimized
- Optimize: AI -> Colony and military calculations now use parallel processing.

### Tweaked
- Tweak: Cooperative Militarist -> Join Wars -> Can invite to wars when the recipient has an open attitude with the enemy, instead of cautious.

---

## 1.5.1 'META' [14.02.2024]
> Pushing previous beta update to all users.

---

## 1.5.1-prerelease 'META' [13.02.2024]
> Bug fixes and optimizations.

### Fixed
- Fix: Resource Manager -> Occupation cost shows without occupying starbases.
- Fix: Battle -> Retreat -> Sometimes retreats to systems with enemies in, meaning the battle continues.
- Fix: Load Save -> Does not update resource count.
- Fix: Agendas -> Opinion modification does result in correct values.

### Optimized
- Optimize: AI agendas and opinion calculations now use parallel processing.

---

## 1.5.0 'META' [09.02.2024]
> Over 2 weeks in the making. Reduction in monthly lag spikes with parallel optimization for AI, and saving.

### Optimized
- Optimize: Saving System -> Parallel optimization for saving, eliminating lag spikes from saving/auto-saving.
- Optimize: AI -> Parallel optimization for AI starbase, and diplomacy handling.
  - Diplomacy handling was the laggiest part of the AI.
  - Foundation added for further AI optimization.
  - There should now be a noticable reduction in monthly lag spikes.
- Optimize: Events -> Some non-critical events are no longer received, especially when the player is not involved, preventing lag.
  - Updates affected include: relations changed, colony orders, starbase orders, and fleet orders.

### Improved
- Improve: Tooltip -> Right-click to toggle pin tooltips in place.

### Fixed
- Fix: Animated Combat -> Ship movement was too slow when moving towards the target.
- Fix: Animated Combat -> Temporary workaround to allow random turrets to fire visually to fix turrets not appearing to fire when expected.
- Fix: Ubiquity -> Ships spawn out of bounds, on saves before `v1.3.0`.

### Changed
- Change: Colony -> Now uses ID of colony number, not parent system ID in saves.

### Tweaked
- Tweak: Galaxy -> Increase galaxy visuals scale for duel map size.
- Tweak: Main Menu -> Scroll sensitivity of create empire/map increased.
- Tweak: Camera -> Increase movement speed in ubiquity system by `1.5x`.

### Balanced
- Balance: Tech -> Repeatable starbase capacity techs now give `+2` instead of `+1` designation slots.
- Balance: Occupation Cost -> Reduced base cost of occupation from `1` to `.5` per occupied starbase.

### Behind the Scenes
- Addition of e2e tests to improve stability.

### Note
- Save files before v1.3.0 (12th January 2024) previously have loaded fleets out of bounds, due to star system rescaling, but are now repositioned within the boundary.

---

## 1.4.0 'META' [25.01.2024]
> Pushing previous beta update to all users.

---

## 1.4.0-prerelease 'META' [22.01.2024]
> More optimizations, new galaxy sizes, and provisional removal of half-added features.

### Added
- Add: Map -> Map -> Duel map size - 50 stars galaxy.
- Add: Create Map -> Option to select duel stars galaxy map.
- Add: Create Map -> Recommended settings for duel stars galaxy map such as player count etc.

### Optimized
- Optimize: Resource Manager -> Reworked to use multithreading for most monthly resource calculations.
- Optimize: Pathfinding -> Reworked to use multithreading for calculating routes, to reduce lag spikes.
- Optimize: Fleet -> Eliminated large lag spikes when moving fleets (on modern CPUs).

### Fixed
- Fix: Start Game -> Does not open Ubiquity and spawns in the center of galaxy.
- Fix: Ubiquity -> Regular starbase labels appear huge.

### Changed
- Change: Resource Manager -> Space entity players no longer have resource calculations, reducing lag.
- Change: Map Generator -> Star counts for each map size are now `100`, `150`, `200`, `250`, `300` instead of `100`, `200`, `300`, `400`, `500` for new games.
  - 400-500 stars is impractically large.
  - Double the smallest map size is too large of an increment.
  - Galaxy visuals were generally poor on map sizes of >300 stars.
  - Loading saves from old map sizes has been tested to work as normal.

### Removed
- Remove: Celestial Squid -> No longer spawns in galaxy, because it is currently too broken.
  - The celestial squid may appear again when more bug fixes and polishes have been done.
- Remove: Blue galaxy smoke from gold galaxy.

---

## 1.3.1 'META' [17.01.2024]
> Experimenting with running monthly calculations on multiple threads, to reduce lag spikes.

### Fixed
- Fix: Pop manager -> Population of clans does not increase.
- Fix: Ubiquity -> Opening a system is very laggy from new ship pathfinding system.

### Optimized
- Optimize: Pop manager -> Reworked to use multithreading for colony population calculations, which should slightly reduce monthly update lag.

---

## 1.3.0-prerelease 'META' [12.01.2024]
> Total redesign of ship movement, and rescaling of ubiquity star systems, focusing on fixing pathfinding bugs.

### Fixed
- Fix: Ubiquity -> Ships often get stuck around planets, or struggle to move around them, especially during battles.
- Fix: Loading screen -> Some text appears to overflow their backgrounds.
- Fix: Combat system -> Ships collide with each other in combat.
- Fix: Ubiquity -> Space squids -> Beelines into planet roundabouts (so does fleet ubi position).
- Fix: Xeno Exterminator -> Raze Colony -> Multiple raze orders can be queued.

### Tweaked
- Tweak: Ubiquity -> Systems now always spawn at 0,0 instead of at a slight offset.

### Changed
- Change: Ubiquity -> Reduced size of star systems by 10x [due to limitations with new pathfinding system].
- Change: Ubiquity -> Starbases of unknown players no longer have empty HUDs.

## Note
> Following the post-release updates, there is a need for more careful and slower updates, like this one, deployed to the beta branch first.
> This update was delayed by a few days, since it was a huge rework and introduced many bugs that were internally fixed [20+ internally fixed bugs are omitted from the changelog].

*This will likely introduce some bugs I have not found, so the update will be deployed on the beta branch first to gather feedback. Sometimes a step backwards is required to take 2 steps forward.*

---

## 1.2.4 'META' [05.01.2024]
> Hotfix for colony siege not triggering, and some other fixes.

### Fixed
- Fix: Colony -> Siege -> Colony siege is sometimes not triggered [due to an issue with new fleet stats].
    - This bug appeared after the previous update which modified siege calculations.
- Fix: Ubiquity -> Fleet -> After opening a system, fleets initially don't appear in fleet formation and appear inside each other.
- Fix: Load save -> From in-game -> Fog of war duplicates and is not cleaned up [behind the scenes] when loading a save, which may cause memory issues.
- Fix: Load save -> Sometimes shows galactic core is visible at first in the initial star system.
- Fix: Load save -> From in-game -> Empire borders are not cleaned up [behind the scenes] when loading a save, which may cause memory issues.

---

## 1.2.3 'META' [05.12.2024]
> The first update of 2024. A step towards making the game stable.

### Improved
- Improve: Diplomacy panel -> Agreements -> Show if we grant the other empire border access.

### Fixed
- Fix: Endgame screen -> Does not auto-pause time and allows controlling time while open.
- Fix: Endgame screen -> Scrollbar does not work and appears duplicated.
- Fix: Colony siege -> If nobody is enforcing siege, it should auto reduce.
- Fix: Solace ship builder -> Opens with the previous ship that was loaded automatically instead of unlocked preset.
- Fix: Colony panel -> Build queue is not visible when viewing an unoccupied enemy colony, when the starbase is occupied by self.
- Fix: Colony siege -> Civilian ships should not progress siege.
    - Siege progress is now determined by base damage, as opposed to ship strength.
- Fix: Cross-scene -> Music button -> Tooltip starts off as empty.

---

## 1.2.2 'META' [31.12.2023]
> The last update of 2023, focusing mainly on ship fixes.

### Fixed
- Fix: Ship builder -> Simulate combat -> Turrets do not shoot.
- Fix: Ship builder -> Simulate combat -> Turrets continue firing when the target is out of range.
- Fix: Ship builder -> Combat mode -> Turrets fire at rapid speed when engaged.
- Fix: Ubiquity -> Combat -> Ship continues to shoot when paused (shooting ignores time scale).

### Improved
- Improve: Ship builder -> Use gradient skybox instead of image background.
- Improve: Ship builder -> Add text to indicate turret range.
- Improve: Ship builder -> Target should move in and out to engage turrets at different ranges.
- Improve: Fog of war (FOW) -> Restore previous smooth fog of war (as shown in early-access post cover screenshot).

---

## 1.2.1 'META' [29.12.2023]
> Bug fixes, especially with the main menu.

### Fixed
- Fix: Skyboxes -> Appear lower quality on build due to unnecessary mip maps.
- Fix: Main menu -> Origin selection -> Origin description text is not legible enough, requiring cybernetic eyesight to read.
- Fix: Main menu -> Selecting empire icon and hovering over other input breaks preview icon.
- Fix: Pause menu -> Game settings were not applied correctly.
- Fix: Battle -> Retreat -> Does not work with new combat system.
- Fix: Start game -> Does not start with gunboat.
- Fix: Main menu -> Play -> Huge memory usage on 4K resolutions.
- Fix: Open galaxy map -> Borders initially do not have correct colours.
- Fix: Fleet -> Starter ships don't match preset ships.

### Removed
- Remove: Main menu -> Ubiquity inspector -> Replaced 3D planet models with images of planet surface as it caused memory issues.

---

## 1.2.0 'META' [28.12.2023]
> Backend simulated combat improvements, and animated combat fixes.

### Added
- Add: Solace ship builder -> Evasion stat into stats UI.
- Add: Combat system -> Use Solace turrets to deal damage in the backend.
- Add: Combat -> Min and max turret ranges.
- Add: Combat -> Rate of fire per turret.
- Add: Solace ship builder -> Rate of fire to turret stats.
- Add: Pause menu -> Open credits button.

### Improved
- Improve: Ship Builder -> Turrets -> Should have stats on screen, instead of tooltip [for clarity].

### Balanced
- Balance: Colonist -> Reduced from `75` to `45` power cost on standard speed.

### Fixed
- Fix: Ship builder -> Background has tiling artifacts on ultrawide displays.
- Fix: Solace ship builder -> When fleet types are unlocked, filter type UI does not update after opening the ship builder.
- Fix: Pause menu -> 'New stars satellites' logo sometimes appeared duplicated.
- Fix: Credits -> Credits username appears in broken font.
- Fix: Solace ship builder -> Panels remain open when opened.
- Fix: Starbase panel -> Upgrade button tooltip showed technological advance required when can upgrade starbase.
- Fix: Pause menu -> Game settings info is not fully visible on ultrawide aspect ratio.

### How Turret Ranges Currently Work
- When combat is being observed, accurate turret ranges are used from the animated ship position, otherwise if a star system is not open, turret range is based on the center of the fleet.
- This is because ship positions are not known by the server, only the client, as simulating positions on the server would be more difficult and require more CPU calls.

> Note: This combat update requires more work such as bug fixes/balancing/playtesting, but is functional, so will first be pushed to the beta branch.

---

## 1.1.0 'META' [23.12.2023]
> Rebranding of main menu back to the original, and fixing of remaining known saving system bugs.

### Changed
- Changed: Replaced November 2023 3D main menu background with July 2022 parallax background.

### Fixed
- Fix: Load save -> From in-game -> Empire borders don't respawn.
- Fix: Load save -> In-game -> Does not restore icons, etc.

---

## 1.0.6 'META' [23.12.2023]
> Fixing saving system bugs players encountered.

### Fixed
- Fix: Load game -> Map does not generate correctly -> "Saved games will not work" -> The game was not generating the correct map size to load the save from.
- Fix: Load save -> Resource counts do not always update and show negative values.

---

## 1.0.5 'META' [22.12.2023]
> Bug fixes.

### Fixed
- Fix: Colony -> Planet composed entirely of farmers is not producing enough food.
- Fix: Colony -> Population does not grow with 0 food, even though it is not starving.
- Fix: Star system -> Cannot colonize void world if a broken world is spawned before it.

### Balanced
- Balance: Colony -> Capital buildings now produce 2 energy to offset deficits.

---

## 1.0.4 'META' [22.12.2023]
> More fixes and UI tweaks.

### Added
- Add: Bug reporting interface -> Save files are now sent with bug reports, to make it easier to reproduce bugs.

### Possible Fix
- Possible fix: Game -> Game boots into windowed mode by default (default was set to windowed and 720p in player settings).

### Fixed
- Fix: Create subject -> Does not update empire borders.
- Fix: Bug reporting interface -> Send button was missing tooltip info.
- Fix: Subject -> Subjects should join union when overlord forms union, as they are still subjects.
- Fix: Main menu -> Loading screen, load menu, etc., were not visible when opened.

### Improved
- Improve: Colony panel -> Updated summary icons.

### Tweaked
- Tweak: Game event -> Colony extreme polar regions -> First option now gives `90` science instead of `100`.

---

## 1.0.3 'META' [21.12.2023]
> Some fixes.

### Possible Fix
- Possible Fix: Crashing bug after playing game for "half an hour", then game does not re-open (may be device-specific).

### Fixed
- Fix: Create empire -> Empire name and colours are randomly changed when creating a game -> "Unable to choose EU flag background colour as primary colour."
    - Also added official EU colours to colour picker.
- Fix: Animated combat -> Hyper-janky turrets when time is at 2x speed (turrets fire extremely fast).
    - Now turret firing speed is constant on all timescales.
- Fix: Ubiquity -> Planet name appears in tooltip instead of "Unknown" for unknown systems.
- Fix: Ubiquity -> Having around 20 ships in one system causes lag spikes every in-game day [optimize].
- Fix: Solace ship builder -> Hologram turrets are not affected by master volume or ambient volume.
- Fix: Ubiquity -> Ships often jump around when moving, especially in animated combat, especially at 2x time speed [happens after winning battle].
- Fix: Animated combat -> Ships continue shooting after destroyed.
- Fix: Silent state -> Stealth fleets should not meet players in system.
- Fix: Ubiquity -> When move fleet into Ubiquity hyperlane that is neutral, war confirmation does not show, leading to nothing happening.
- Fix: Fleet panel -> Fleet capacity UI adds up ship count instead of ship size.
- Fix: Game event panel -> Selecting option is not disabled when reopening the ping, allowing options to be selected multiple times.
- Fix: Occupy colony -> Sets colony of `22` population to `1`.
- Fix: Settings -> Vsync is not applied in-game when set in main menu.
- Fix: Animated combat -> Beam turrets beams are not visible.
- Fix: Solace ship builder -> Ship stats -> Some costs overflowed the ship stats UI.
- Fix: Fleet panel -> Fleet capacity for civilian ships (i.e., builders) shows 2/1.

### Improved
- Improve: Ubiquity -> Hyperlane -> Improve tooltip to indicate whether borders are closed or not.

### Tweaked
- Tweak: Game events -> Colony dangerous wildlife -> First option gives 120 instead of 100 food on standard speed.
- Tweak: Ion flux -> Changed icon for turret to not be a duplicate of ion stream.

---

## 1.0.2 'META' [21.12.2023]
> Some fixes addressing issues with screen resolution, and other suggestions.

### Added
- Add: Settings -> Change screen resolution.
- Ensure to reset Steam launch options that override resolution, or they may cause issues.
- The in-game resolutions are:
    - Initial screen resolution
    - 3840x2160
    - 2560x1400
    - 1920x1080
    - 1280x720
- Add: Solace Ship Builder -> Tooltip for weapon stats in ship builder.

### Fixed
- Fix: Settings -> Anti-aliasing -> Selector has no effect on anti aliasing.
- Fix: Solace Ship Builder -> Lens buttons overlay obstructs preset management UI.
- Fix: Loading Screen -> Shows black borders on top and bottom of the screen on some resolutions.
- Fix: Built -> Planet visuals -> Lower quality in built game as textures are set to low, but not updated automatically in graphics manager.
- Fix: Cross-scene -> Sometimes random empire borders are sometimes spawned in wrong places (fixed in previous update).

---

## 1.0.1 'META' [20.12.2023]
> Hotfix partially addressing concerns regarding optimization by reducing lots of calls regarding star systems. 
> The update name is now changing, since the 'ARGON' update has concluded.

### Fixed
- Fix: Tips panel -> No systems are highlighted on the map when explorer fleet move tip is opened.
- Fix: Fog of war -> Sometimes appears glitchy when starting the game.

### Improved
- Improve: Player -> Cache owned star systems to reduce hundreds of calls, thereby reducing CPU calculations [optimization].

---

## 1.0.0 'ARGON' [20.12.2023]
> The early-access release update - Argon focused on initial stability, balancing, and polishing.

### Fixed
- Fix: Ship builder -> Star cruiser can appear when managing presets [after deleting presets].
- Fix: Colony panel -> Level 2 warning displays when wanting to upgrade a level 2 building.
- Fix: Colony panel -> Upgrade button -> Level 2 warning tooltip not appearing when required tech is not unlocked.
- Fix: Built -> Planet textures -> Appear low quality in built game.
- Fix: Load save -> Fog of war -> Sometimes spawns in incorrect places after loading save.
- Fix: Players -> Bankruptcy is not applied to players when cannot pay off monthly consumption.

### Balanced
- Balance: Colonist -> Reduce colonist cost to 150 metals / 150 food on standard speed.

---

## 3.2.1b 'ARGON' [19.12.2023]
> Pre-release update.

### Fixed
- Fix: Ubiquity -> Cannot click on unknown system when our military fleet is in it.
- Fix: Fleet -> Fleets can often get randomly pushed from the system when going to an enemy system.
- Fix: Pings -> Tech researched -> Does not show which tech was researched, leading to confusion.
- Fix: Fleet -> Frigates, light cruisers, heavy cruisers, and star cruisers have incorrect ship size.
- Fix: Load save -> Pings are not restored with save.
- Fix: Map generation -> Wormholes should not spawn in the galactic center.
- Fix: Ubiquity -> Ship -> Movement speed does not scale with time scale, or ship speed (again).
- Fix: Ubiquity -> Hyperlanes that are close together are repositioned to face weird directions.
- Fix: System panel -> Planets in unknown systems had a known intel level.
- Fix: Game event panel -> Text is unreadable when hovering over buttons.
- Fix: Main menu -> Settings -> Exit button does not go back to the play screen / does not work with hotkey.
- Fix: Camera -> When a unit is selected, the player cannot look around with the mouse, which is "awkward."
- Fix: Tips panel -> Can be closed by selecting another fleet or opening another panel, interrupting core flow.
- Fix: Make peace -> Sieged systems are not annexed.
- Fix: Shift UI -> Appears on the settings menu.
- Fix: Built -> Tips panel -> Tutorial narration is way too quiet.
- Fix: Game Event Panel -> Options are disabled when they shouldn't be [only one option for asteroid appears game event is enabled].

### Improved
- Improve: Siege should instantly end if no enemies exist after a peace deal [siege was taking too long, so a peace deal was taken].
- Improve: AI -> Clans now form opinions like regular empires.
- Improve: System name text -> Occupation indicator to view occupied systems on the map.
- Music volume is now reduced when tutorial narration is active.

### Balanced
- Balance: Change starbase base damage to 15 from 10.
- Balance: Diplomacy -> Clans should treat all government types equally.

---

## 3.2.0b 'ARGON' [17.12.2023]
> 48+ more bugs fixed ahead of early-access.

### Added
- Add: VFX -> Peacekeeping pacifist: Peacekeeping active (convert healing VFX to shields).

### Improved
- Improve: Different border colours for clans - transparent - with white or red outline for peaceful/non-peaceful.
- Improve: Update collected resources when export starbase gold.
- Improve: Bug reporting interface -> Use F10 hotkey to open.
- Improve: Add global battle start SFX when battles start.
- Improve: Ping / reminder for reporting bugs.
- Improve: Solace ship builder -> Lock unlocked and not unlocked ship types.
- Improve: Starbase tooltip to make it more readable.
- Improve: Combatant tooltip.
- Improve: Techs -> Ship unlock techs now give +5 fleet capacity.

### Changed
- Change: Starting world origins now change world preference.

### Tweaked
- Tweak: Increase world spawn by around 1/9.

### Balanced
- Balance: Use non-linear time to siege to speed up sieging on large colonies (diminishing marginal returns).
- Balance: Sieging with a fleet of 5 gunboats should not take many years in-game.
- Balance: Extreme isolationist -> Vaporize takes is now modified by logistical modifier [360 days on standard speed].
- Balance: Explorers should take half as long to explore.
- Balance: Players are too bipolar -> Agenda flip-flops.
- Balance: Require techs to unlock ship turrets.
- Balance: Make it easier to keep alliance at start -> Start with max trust etc.
- Balance: Win battle EXP increased by 15x on standard speed.
- Balance: Pop manager -> Changed from 1/9 to 1/6.
- Balance: Colony -> Remove gold upkeep from buildings to lower gold consumption.
- Balance: Give ability to send military fleets to destroy pirate scouts.
- Balance: Game events -> Logistically modify resources from actions.
- Balance: Fleet EXP from battles is negligible.
- Balance: Base integration cost from 5000 energy to 600 gold.
- Balance: Gold production from jobs.
- Balance: Celestial squid -> Damage changed from 100 to 250, hull changed from 15000 to 30000, and speed changed from 10 to 20.
- Balance: Negotiate peace threshold -> No longer controlled by logistical modifier and is 1 year on all game durations.
- Balance: Increase combat engagement radius in center of galaxy system.
- Balance: Fleet capacity now increases 

### Fixed
- Fix: Toggling stealth mode does not update order time -> Time to move should be twice as long when in stealth mode.
- Fix: Colony panel -> Purchase rights tooltip has uninitialized tooltip.
- Fix: Game event panel -> Did not open.
- Fix: Colony panel -> Cannot demolish singleton buildings such as a Seclusion Nexus.
- Fix: Galaxy -> Stars look good on milky way galaxy, but bad on others.
- Fix: AI -> AI cannot accept union requests (unimplemented).
- Fix: Built -> Start game -> Game uses wrong galaxy size [player prefs wrong again?].
- Fix: Battle panel -> Retreat button is enabled even if not part of battle.
- Fix: Built -> Cobalt -> Settings -> Defaults do not appear to be set when open settings menu for first time.
- Fix: Diplomacy panel -> Variables appear broken and are not applied properly.
- Fix: Load save -> Fog of war spawns in 2 overlapping layers.
- Fix: Game event panel -> If current event has no options, previous event options will be displayed.
- Fix: Event panel -> Variables sometimes appear broken and are not applied properly.
- Fix: Load save -> Built -> Resource count does not always update.
- Fix: Built -> Load save -> Game loads wrong galaxy size.
- Fix: Quest panel -> Colony in reference is not stated which causes ambiguity.
- Fix: Celestial squid should have huge combat radius to prevent anyone from building starbase in galactic center, and to actually be a challenge.
- Fix: Celestial squid should be guarding default center of battle otherwise ships go away from ship during battle [starbase position].
- Fix: Load save -> Cross-scene -> Does not restore empire borders.
- Fix: Colony siege -> Siege should auto decrease if nobody is enforcing it over time.
- Fix: Fleet -> Combat radius does not work correctly for celestial squid.
- Fix: Celestial squid -> Can respawn after defeated.
- Fix: Ubiquity -> Drag select fleets does not select fleets with multiple ships.
- Fix: Colony panel -> Update siege tooltip to reflect new stats.
- Fix: Starbase panel -> Multiple upgrade orders can be queued at once [and AI does it automatically].
- Fix: Fleet -> Should be able to move into unknown systems with fleets, as long as is adjacent to known system [for military campaigns].
- Fix: Resources -> Should not display with decimal places over 2dp.
- Fix: AI -> Non extreme isolationists can destroy hyperlanes.
- Fix: Game event panel -> Options are sometimes randomly disabled.
- Fix: Battle -> Win battle SFX is not called.
- Fix: Colony siege -> Sometimes stays occupied after defeating original owner, preventing building.
- Fix: Diplomacy panel -> When diplomacy panel updates, tips panel is updated.
- Fix: Research option UI -> Saved progress does not show in rolled tech option progress bars.
- Fix: Diplomacy panel -> No indication for how long is required for peace deal to be possible.
- Fix: Cross-scene -> When changing scene lowest anti aliasing, and texture settings are applied.
- Fix: Settings -> Changing quality level does not immediately update other graphics settings.
- Fix: Solace ship builder -> Preset names don't match what is buildable.
- Fix: Resources -> Having negative resources means you cannot afford anything -> Should be when cost is greater than zero for a negative resource of type [e.g. has -1 energy, but costs 50 energy].
- Fix: Fleet panel -> Ship presets appear duplicated.
- Fix: Solace ship builder -> Presets are not synced with what is buildable [preset name, cost, etc.].
- Fix: Resource -> Cannot afford something when has negative resource.
- Fix: Load save -> Galaxy visual is sometimes different?!
- Fix: Ubiquity -> Combat -> Fleets should get back into formation after battle.
- Fix: Ubiquity -> Sometimes when exiting ubiquity borders randomly disappear.
- Fix: Load save -> In-game -> Does not update system text, starbase labels, etc.
- Fix: Resource manager -> For some reason resources are actually not updating in monthly update.
- Fix: Add image to celestial squid slain game event.
- Fix: Reveal all -> Galactic center is partially visible, before the cosmic convergence game event -> Make it visible b/c why not?
- Fix: Starbase panel -> Deoccupy button text wrapping fails.

### Removed
- Remove: Selected fleet -> Combat radius indicator -> Because it does not correctly indicate battles [disable for now].

---

## 3.1.1b 'ARGON III' [14.12.2023]
> Hotfix for loading saves.

### Improve
- Improve: newstarsgame.com -> Added stars background to changelog, instead of nebula to make text more legible.
- Fix: newstarsgame.com -> Overflow was added to page when switching between 'Home' and 'Changelog' on 1920x1080 resolution.

### Fixed
- Fix: Saving system -> Loads wrong map size [does not apply on game manager in time].
    - Now map settings cannot be changed while save is loading.
- Fix: Save game -> Game events have issues saving and cause broken save files.
- Fix: Load save -> Player quests are not loaded and log error, and are not backwards compatible.
- Fix: Built -> Tips panel -> Tutorial narration far from being synced with typewriting text.
- Fix: Cooperative militarist -> Join wars works when other player has friendly relations with victim empire.

---

## 3.1.0b 'ARGON III' [14.12.2023]
> A week of bug fixes. Reality check update, with some cool features.
> Many severe bugs were fixed, and some were probably over a year old.
> This is the first New Stars build in compiled in C++, as opposed to C#, for better performance.

### Added
- Add naval capacity modifier.
- Add fog of war -> Veil effect for undiscovered systems.
- Add Steam cloud support for Linux.
- Add Steam cloud support for Windows.

### Improved
- Improve: Pop Growth -> Tooltip now shows whether population is being exterminated.
- Improve: Building Tooltip -> Show building unique bonus [affordance].
- Improve: You can now rename things up to 32 characters, instead of 20.
- Improve: Implement different fog of war colours based on Argon galaxy.
- Improve: Ubiquity -> Increased HUD size to make more visible in star systems.

### Changed
- Change: Starting world origins now change world preference.
- Change: Star Clans -> You can now trade with peaceful star clans because why not?

### Tweaked
- Tweak: Gene cleansing facility -> +20% pop growth reduced to +15%.
- Tweak: Xeno exterminator -> -500 opinion changed to -250.
- Tweak: World spawn chance increased by 33% to 8%.
- Tweak: Claiming now costs only 50 metals instead of 100 to prevent expansion bottlenecks.
- Tweak: Added logistical modifier for cooldowns listed below [these cooldowns are now based on game duration].
    - Denounce Cooldown, Peace Cooldown, Friendship Duration, Truce Duration, AI Trade Request Cooldown, Terraform Duration, Star System Storm Duration.
- Tweak: Added logistical modifier for ship EXP [ship EXP is now based on game duration]

### Fixed
- Fix: Colony panel -> Energy focus has wrong resource colour.
- Fix: Fleet -> Visualizing movement of a large amount of fleets (≥5) selected at once causes massive lag spikes, since all of them pathfind at once [optimization].
- Fix: AI is controlling normal fricking starbases, including designations etc.
- Fix: Built -> Game -> Starts more than 12 players on tiny map, with defaults, which should not be possible [old player prefs overrode new max values].
- Fix: Endgame conditions -> Player is not defeated when lost capital colony.
- Fix: Peacekeeping pacifist -> AI fleets just jumped past peacekeeping fleets while they were peacekeeping.
- Fix: Xeno exterminator -> Cannot build unique building on colony.
- Fix: Ping -> Tooltips don't apply variables properly.
- Fix: Make subject -> Cannot make subject out of integrated clan capital colony.
- Fix: Hegemonic subjugator -> Cannot integrate barbaric clan when neighbours with them.
- Fix: Starbase panel -> Upgrade tooltip does not include upgrade cost.
- Fix: Built -> Fog of war doesn't work in built game.
- Fix: Clan -> Clans do not siege capital, but instead, just raze the colony.
- Fix: Built -> Fog of war does not display on built game.
- Fix: Game events -> Sometimes does not open after ping received.
- Fix: Spice lords does not generate spice on colony world.
- Fix: Origins -> Abyssal nomads origin does not spawn with antimatter.
- Fix: Starbase panel -> Orders -> It's possible to modify build queue without being the starbase owner in some cases.
- Fix: Pings -> Game events don't work. Game event pings don't work either.
- Fix: Combat system -> Battles can sometimes randomly not progress.
- Fix: Resource manager -> Modifiers are incorrectly applied to negative values.
- Fix: Load game -> Resource counts do not update correctly.
- Fix: Ubiquity -> Ships sometimes don't respond to orders after battle (linked to move target locked?).
- Fix: Main menu -> Time victory explanation is a copied from conquest victory.
- Fix: Double cross-scene -> Start game -> Map settings are ignored and huge map is generated.
- Fix: Built -> Starting a game had instant defeat screen.
- Fix: Main menu -> Create map -> Initially loaded map settings are not synced with game manager map settings.
- Fix: Fleet -> Merge and split -> First ship gets extra stats.
- Fix: Merge and split -> Fleets reduce in size after merging and splitting.
- Fix: Load save -> Does not always pause time after loading save.
- Fix: Split and merge -> Fleets with odd numbers are removed.
- Fix: Fleet -> Military ships sometimes spawn with higher hull than their base stats.
- Fix: Built -> Load save -> Galaxy map saves the wrong galaxy size.
- Fix: Main menu -> Camera can sometimes deviate from its original position.
- Fix: Sometimes when a star system was loaded there is a GPU swapchain error, causing the game to crash.
- Fix: Empire can have the same colours resulting in invisible icon.
- Fix: Starbase label -> Siege progress bar is too hard to see (too transparent).
- Fix: UI should never start at anything other than 0.5 scale.
- Fix: Starbase label -> HUD shows red when no free housing (show yellow / orange for affordance).
- Fix: Built -> Stars look bad on blue galaxy map.
- Fix: Solace ship builder -> Frigate is loaded, when gunboat is initially selected.
- Fix: Monthly resources -> Negative monthly resources appear as zero in toolbar, not discounting any resources.
- Fix: Fleet panel -> Does not open when a lot of large fleets are selected.
- Fix: Fleet -> Merge and split -> When done enough times, some ships become empty.

### Balanced
- Balance: Special ability costs.
- Balance: Jobs cost less than half as much gold to maintain than before.
- Balance: Time to build changed to `30 days` on quickest speed.
- Balance: Tech -> Base cost is now 400 on standard duration.
- Balance: AI agendas -> Modifier changed from `50` to `30` for each agenda.
- Balance: Power cost for claiming should not be 17.5 with any game duration.
- Balance: Set base food monthly resource to zero, since should be produced on colonies only, and builds up too much.
- Balance: Starbase upgrade cost is unbalanced and too cheap.
- Balance: Reduce power cost increment to 5.
- Balance: Half time it takes to build a colonist.
- Balance: Ship build speed for a typical ship should take around 15-60s on all game durations.
- Balance: Fleet -> Increase speed in system by 1.2x since it isn't Stellaris.
- Balance: Form union -> Cost was drastically reduced to be more affordable.
- Balance: AI attitude parameters changed from `200`, to `150` to make getting desired diplomacy levels quicker and easier.
- Balance: AI agendas -> Modifier changed from `50` to `30` for each agenda.
- Balance: AI receives more starting fleets depending on difficulty.
- Balance: Ship builder -> Add techs for turrets, and balance turrets.
- Balance: Techs for different turret types.

### Removed
- Remove: Settings -> UI scale input.

> Note: Build text in main menu shows 4th of December.

---

## 3.0.1b 'ARGON III' [2023.12.06]
> Bug fixes.

### Fixed
- Fix: Trade Panel -> Crimson Stardust icon appears empty.
- Fix: Colony -> Balance icon for food appears empty.
- Fix: Megacorps can export from foreign colony as a business.
- Fix: Save game -> Colony siege progress does not save.
- Fix: Load save -> After battle ends, ship still appears as in battle, which prevents fleet panel from opening properly.
- Fix: If quality is changed, it does not auto-change other settings.
- Fix: Settings menu display does not match player prefs.
- Fix: Shadow cascades UI not being updated correctly in settings menu.
- Fix: Settings -> Texture quality decreases with higher quality settings.
- Fix: Hyperlanes often overlap, and they should be much more offset.
- Fix: Map settings -> Randomize -> Does not update victory conditions UI which is misleading.
- Fix: In-game -> Settings menu -> Re-enables advisor constantly.
- Fix: MSAA sample count UI not being updated correctly in settings menu.

### Improved
- Improve: Indicate designated starbases on map (i.e. hub, fort, etc.) with icons.
- Improve: Main menu -> Option description no longer disappears when open modal.
- Improve: Main menu -> More details for randomize buttons for clarity.

### Changed
- Tweaked: Ubiquity ship speed to match projected speed in system.

### Note
Update will show '3.0.0b' because I forgot to update it.

---

## 3.0.0b 'ARGON III' [2023.12.04]
> Customizable, human-readable, and more version-compatible save files.

### Fixed
- Fix: AI -> Having 2 builders building starbases at the same time in the same system, causing starbase remnants to be created.
- Fix: Battles break when one ship can attack other ships freely, but not vice versa.
- Fix: Battles often just don't fricking work.
- Fix: Black hole has grey square if on low graphics settings -> Ruining immersion.
- Fix: Built -> Borders don't display on built game.
- Fix: Built -> Textures appear blurry when full-screen.
- Fix: Built -> Ubiquity -> Low-quality nebula VFX.
- Fix: Built -> Ubiquity -> Stars background moves with the camera.
- Fix: Claims -> Don't update when starbase is built while ubiquity was open.
- Fix: Cosmic Convergence -> Appears multiple times in-game after mid-game event.
- Fix: Cross-scene -> Load save -> Does not restore empire borders.
- Fix: Empire Claims -> Not restored with saves.
- Fix: Fleet -> Selecting edge of fleet selects other fleet on galaxy map.
- Fix: Fleet orders -> Do not work after loading save.
- Fix: Game event panel -> Sometimes has stretched planet visuals.
- Fix: Load save -> Battles are not reassigned to combatants correctly.
- Fix: Load save -> Does not restore starbase data correctly resulting in random starbase placement.
- Fix: Load save -> Galaxy map does not display when loading save multiple times.
- Fix: Main menu -> Create game does not open loading screen immediately (does not always occur).
- Fix: Pings -> Metadata does not save for some pings.
- Fix: Player prefs -> Default graphics options are lowest settings making game look initially bad.
- Fix: Save game -> Combat system battles do not save correctly.
- Fix: Saving system -> Pings don't restore when loading save.
- Fix: Starbase panel -> Designation buttons are not highlighted, making it seem buttons are disabled.
- Fix: Starbase strength does not show in ubiquity HUD for regular starbases.
- Fix: Starbase upgrade tooltip -> Appears off-screen.
- Fix: Starbase/Colony occupation pings occurring when not the original owner of the starbase/colony.
- Fix: Ubiquity -> Combat -> Star cruisers engage at too close distance.
- Fix: Ubiquity -> Does not display structures/fleets when fleet is being built.

### Added
- Added 'Formation III​.​I: Beyond the Planets' music album.
- Add: Icons for explicitly displaying starbase designations.
- Add: Narrated SFX for specific pings (such as tech researched).

### Improved
- Improve: Main menu -> Increased average FPS to 70 from 20.
- Improve: Some loud music tracks have been reduced in volume to prevent sudden hearing loss.
- Improve: Interstellar VFX -> Silent state: enter stealth mode.
- Improve: Create map -> Save previous map settings in player prefs.

### Changed
- Change: New music tracks added, some tracks removed.
- Tweak: Asteroid appears -> Now costs `250` Energy to shoot down instead of `500`.
- Tweak: Extreme isolationist opinion modifier changed from `-250` to `-100` because they did nothing wrong.
- Tweak: Broken worlds now have a 4% chance of spawning instead of 2%.

### Removed
- Remove: Purple galaxy -> It needs polishing before re-adding.
- Remove: Fleet panel -> Fleet inspector -> It has been broken for too long.
- Remove: Endgame screen -> Spectate button after being defeated since it was too unstable.
- Remove: Starbase panel -> Starbase inspector -> It is not always reliable.
- Remove: Settings -> Wiki key-binding -> Wiki panel is no longer in the game.

---

## 2.2.0b 'ARGON II' [2023.11.29]
> Also includes some changes from Part 1 of Argon update.

### Add
- Tips panel -> Click/hover SFX for action buttons.
- Pings -> Form union and SFX (with event panel).
- Pings -> Our/their siege complete.
- Seamless -> Meteor VFX spawns randomly on the galaxy map.
- Ubiquity -> Neutron stars with VFX.
- Ubiquity -> Pulsars with VFX.
- Victory conditions (configurable from main menu).
- Mid-game event -> Open galactic center (cosmic convergence).
- Univeral SFX (trailer) -> Lose battle SFX.
- Pings -> Our/their liberation complete.

### Changed
- Change: Colony Panel -> Population is now included in siege difficulty, for simplicity.

### Improve
- Seamless -> Claims should have visible borders.
- Improve: UI -> Player Headers now show "Unknown Player" for unknown players.
- Improve: Siege -> Having any enemy fleets to the sieger or liberator will pause a siege.
- Improve: Combat -> Optimization -> Ships no longer recalculate base stats while in combat, since it has no effect in battle and was CPU intensive.
- Improve: Ubiquity -> Animated Combat -> Ships shoot less in larger battles (i.e. 100 vs 100) to prevent insane lag in large.
  - Note that large battles were originally intended to be something like 30 vs 30, and 100 vs 100 is unrealistically large.
- Improve: Empire icons now center around known systems.

### Tweaked
- Tweak: Asteroid appears game event is now twice as rare.
- Tweaked asteroid game event probabilities.
- Balance: Arid worlds are half as likely to spawn, and other world types are much more likely to spawn.
  - I have not seen rocky worlds in a very long time in the game.
- Balance: Reduce minimum time it takes to explore planets from `8` days to `5` days.
- Tweak: Void worlds now have a `15%` chance to spawn if there is a black hole, instead of a `25%`.

### Fixed
- Battle Panel -> Retreat button is hard to see when not interactable.
- Building -> Tooltip siege icon is not shown on tooltip manager variables (appears as text instead).
- Built -> Ubiquity -> Space entity -> Does not play move animation when moving.
- Claim Drawer -> Player icon remains after being defeated (opacity also does not update).
- Cobalt -> In-game settings -> Clicking ESC button does not close panel.
- Colony Panel -> Context menu -> Upgrade button not interactable when can upgrade.
- Colony Siege -> Population adds to siege difficulty, instead of multiplying, making it feasible to siege large colonies.
- Combat System -> New fleets that enter combat radius do not trigger in combat (this should be done passively).
- Cosmic convergence -> Since event is triggered multiple times, duplicate hyperlanes spawn.
- Cross-scene -> Hotkeys such as 'E' key are not registered by input manager.
- Diplomacy Panel -> Basic tooltips for summary indicators.
- Endgame screen -> Defeat -> Exit to menu button is missing.
- Endgame screen -> Spectate button returns to menu.
- Fleet -> Not visible when in FTL travel.
- Fleet -> Trails colours appear white for all empires.
- Galactic center -> Supermassive black hole spawns away from center on non-tiny maps.
- Game Event Panel -> Asteroid event -> Disconnects client.
- Game Event Panel -> Stretched ubiquity inspector panel.
- Liberating text appears for 0% (when nothing is being sieged).
- Load save -> Breaks game (occurred when loading save of 3 in-game years).
- Optimize -> Asteroid fields are very GPU intensive.
- Siege -> Does not work for colonies (i.e. capital colonies).
- Solace Ship Builder -> Changing turrets disconnects client.
- Solace Ship Builder -> Closing lens buttons hides lens buttons.
- Solace Ship Builder -> Plays sfx randomly in game.
- Space Squids -> Appears as pre-initialized player.
- Space squids -> Should not have normal ship ambience sfx.
- Space Squids -> Uninitialized without meeting all players.
- Starbase Label -> Starbase label for colony shows starbase occupier as owner, when colony is not occupied.
- Tips Panel -> Can be closed with ESC.
- Tooltips -> Not wrapping correctly.
- Turrets -> Don't look correct way (for sideways turrets).
- Ubiquity -> Civilian ships have no trails.
- Ubiquity -> Combat -> Beam turrets do not fire.
- Ubiquity -> Combat -> Pirate ships don't shoot at anything.
- Ubiquity -> Combat -> Shields activate when projectile is fired.
- Ubiquity -> Combat -> Shields don't toggle when deactivated.
- Ubiquity -> Combat -> Ships continue shooting when destroyed.
- Ubiquity -> Combat -> Solace ships don't appear as destroyed when destroyed.
- Ubiquity -> Combat -> Too many shots are fired from turrets causing lag.
- Ubiquity -> Combat -> Trail colours are not applied correctly (sometimes).
- Ubiquity -> Construction sparks appear for a few seconds in unclaimed systems.
- Ubiquity -> Healing VFX shows after ships have finished healing.
- Ubiquity -> Large ship movement is not smooth (use rotation speed ship stats).
- Ubiquity -> Light intensity was not rescaled correctly resulting in dark planets next to stars.
- Ubiquity -> One-ship fleets appear to not be centered correctly.
- Ubiquity -> Orbit lines don't initialize until scroll up.
- Ubiquity -> Planet bounds not recalculated when loading save in-game, causing ship pathfinding to break.
- Ubiquity -> Ship -> Movement too fast on high FPS.
- Ubiquity -> Ships -> Healing VFX -> Sometimes appears wrong colour (until ubiquity is reopened).
- Ubiquity -> Space Squids -> Move animation does not play when moving.
- Ubiquity -> When ships are in combat, orders can still be visualized.
- Ubiquity -> Ships -> No fade between idle and move ambience (removed distinct engine move ambience).
- Ubiquity -> Camera -> Map bounds did not cover entire system up to hyperlanes. 
- Colony Panel -> Building -> Tooltip shows cannot level cap error when acting as foreign business.
- Fleet Panel -> Ubiquity inspector for ships displayed ships away from center and with trails.
- Game Event Panel -> Current event sometimes uses image of previous event.

---

## 2.1.0b 'ARGON II' [2023.11.21]

### Added
- Add: Ubiquity -> Pulsar prefab with emissions VFX.
- Add: Ubiquity -> Neutron star prefab with emissions VFX.
- Add: Ubiquity -> New blue galaxy to spawn in.
- Added: New 'Argon' galaxies.
- Added: New main menu background.

### Changed
- Change: Decrease star height deviation to prevent them from being under the map.
- Changed: Main menu theme 'Planetary Nebula' to 'Beyond the Planets'.
- Tweak: Ubiquity -> Solace gunboats are now one third larger.
- Tweak: Map generation -> Non-binary systems are now slightly more common than binary systems.
- Tweak: Stars -> Now slightly more visible to see them more easily on the map.

### Removed
- Removed: Old veil nebula VFX (caused too much lag).

### Fixed
- Fix: Ship builder -> UI for stats overlaps with turret selection on ultrawide displays.
- Fix: Ship builder -> Ambient background does not expand correctly on ultrawide displays.
- Fix: Cosmic Convergence -> When event is triggered multiple times, duplicate hyperlanes spawn.
- Fix: Star system in the center of the galaxy spawns too high.
- Fix: Input FPS practically doubled due to removal of deprecated code.
- Fix: Key binding modals don't open assigned panels or show correct hotkeys.
- Fix: Configured victory conditions not being respected.

---

## 2.0.1b 'ARGON I' [2023.11.18]

### Fixed
- Global cooling event does not occur.
- Events -> Cosmic convergence -> Occurs multiple times.

---

## 2.0.0b 'ARGON I' [2023.11.17]

### Added
- Added more playtesters to credits.
- Added gold resource.
- Various resource icons have been reskinned.
- Replaced jumpscare tech complete sound with the same SFX used for starbase/colony queue complete.
- Added gold resources, basic resources, advanced resources, time management tip screens to help new players.
- Added the financial hub building, and the investor job which focuses on commerce and production.
  - Since gold is the main currency of the galaxy, there is no tech required to build it.
- Added narrations to tutorial tips.

### Fixed
- Fix: Colony Siege -> Sieging a colony is unbalanced and completed instantly.
- Fix star clan government type tooltip showing empty unique building and primary ability.
- Fix: Ubiquity -> 'Object 51' no longer randomly appears in star systems.
- Fix: Fleets that are not visible to the player are shown in known Ubiquity system.
- Fix: Ubiquity build starbase animation -> not scaled correctly and appears too small.
- Fix: Interstellar -> Vaporize links -> Does not go to nearest hyperlane.
- Fix: Colony Panel -> Condensed colony building tooltips to address off-screen tooltips.
- Fix: Tips panel -> Did not show correct background colors for species avatar.
- Fix: Starbase label HUD not being displayed correctly in occupied systems.
- Fix: Colony game events did not occur.
- Fix: Quest panel -> Does not auto close when click away from panel.

### Improved
- Improve: Colony Siege -> Siege status changes a day to give more realistic and responsive feedback.
- Improve: Colony Panel -> Added affordance for colony panel upgrade.
- Refined tips text to make it more clear to new players.
- Logistical modifiers also decreased to allow faster-paced gameplay.

### Changed
- Game duration changed to keep the game fresh:
  - Online Speed -> Game duration went from `25` to `10`.
  - Fast Speed -> Game duration went from `36` to `20`.
  - Standard Speed -> Game duration went from `50` to `30`.
  - Half Speed -> Game duration went from `75` to `40`.
  - Half Speed -> Game duration went from `100` to `50`.
- Upscaled space squid textures to from `1024x1024` to `4096x4096`.
- Reduced space entity spawn cap by 2.5x.
- Supernova and hypernova game events are now twice as likely to happen.
- Map generation -> Stars closer to the galactic center are closer together.
- Fleet panel -> Now shows military stats if player is known.
- Repeatable techs are now only researchable after all non-repeatable techs are researched.
- Tweak: Working class workers now cost `1` gold, and specialists now cost `2` gold in upkeep.
- Tweak: Population -> Base growth rate changed from `1/10` to `1/9`.
- Added gold to ship upkeep and lowered metals and energy costs for all buildable ships.
- UI background now appears darker to blend in with the space background.
- 'Asteroid appears' event is now 5x more likely.
  - I haven't had this event happen while playtesting in a very long time.
- Add time manager controls affordance to pause indicator UI.
- Tweak: Starport -> Build speed changed to `+50%` for Level 2, and `+100%` for Level 3.

### Miscellaneous
- Game events no longer repeats the same event chains in systems, and this is saved with the game.
- Added more playtesters to credits.

---

## 1.1.0b 'Solace' [2023.11.08]
> More robust combat system and more stable animated combat.

### Added
- Add solace turret engagement range.git 

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