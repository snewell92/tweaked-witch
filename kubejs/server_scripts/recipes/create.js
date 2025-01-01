ServerEvents.recipes((event) => {
  event.recipes.create
    .compacting("brewinandchewin:unripe_flaxen_cheese_wheel", [
      Fluid.of("minecraft:milk", 1000),
      "minecraft:brown_mushroom",
      "minecraft:brown_mushroom",
      "minecraft:sugar",
    ])
    .heated();

  event.recipes.create
    .compacting("brewinandchewin:unripe_scarlet_cheese_wheel", [
      Fluid.of("minecraft:milk", 1000),
      "minecraft:crimson_fungus",
      "minecraft:crimson_fungus",
      "minecraft:sugar",
    ])
    .heated();

  event.recipes.create.haunting(
    "brewinandchewin:flaxen_cheese_wheel",
    "brewinandchewin:unripe_flaxen_cheese_wheel"
  );

  event.recipes.create.haunting(
    "brewinandchewin:scarlet_cheese_wheel",
    "brewinandchewin:unripe_scarlet_cheese_wheel"
  );

  event.recipes.create.haunting(
    "domesticationinnovation:sinister_carrot",
    "miners_delight:cave_carrot"
  );

  event.recipes.create.haunting("byg:crimson_berries", "byg:blueberries");

  event.recipes.create.crushing(
    "2x minecraft:prismarine_shard",
    "minecraft:prismarine"
  );

  event.recipes.create.crushing("4x minecraft:bone_meal", "#forge:teeth");

  event.recipes.create.crushing(
    "minecraft:gravel",
    "minecraft:cobbled_deepslate"
  );

  event.recipes.create.crushing(
    ["2x minecraft:coal", Item.of("minecraft:coal").withChance(0.5)],
    "#forge:ores/coal"
  );

  event.recipes.create.crushing(
    ["minecraft:quartz", Item.of("minecraft:quartz").withChance(0.5)],
    "byg:raw_quartz_block"
  );

  event.recipes.create.crushing(
    [
      "4x spelunkery:rough_diamond_shard",
      Item.of("spelunkery:rough_diamond_shard").withChance(0.25),
      "2x createaddition:diamond_grit",
    ],
    "minecraft:diamond"
  );

  event.recipes.create.mixing("culturaldelights:corn_dough", [
    Fluid.water(1000),
    "3x culturaldelights:corn_cob",
  ]);
});
