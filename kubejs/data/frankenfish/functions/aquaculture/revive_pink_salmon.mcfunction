
# give the fish resistance 5 so it doesn't die to lightning
# also give it a loot table that only drops the fish, to prevent duping fish drops
summon aquaculture:pink_salmon ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}], DeathLootTable: "frankenfish:revived_fish/aquaculture/pink_salmon" }
kill @s
