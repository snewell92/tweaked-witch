// we keep these in strings, just to be safe! We're mostly concatenating with other strings.
const BASIC_SIZES = ["1", "4", "16", "64"];

function addBasicDisk(event, size) {
  event.shaped(
    Item.of(`refinedstorage:${size}k_storage_disk`),
    ["DBD", "BCB", "AAA"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "glassential:glass_redstone",
      C: `refinedstorage:${size}k_storage_part`,
      D: "#forge:stone",
    }
  );

  event.shapeless(Item.of(`refinedstorage:${size}k_storage_disk`), [
    `refinedstorage:${size}k_storage_part`,
    "refinedstorage:storage_housing",
  ]);
}

ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("refinedstorage:creative_controller"),
    ["ABA", "CEC", "ADA"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "minecraft:lodestone",
      C: "refinedstorage:silicon",
      D: "refinedstorage:machine_casing",
      E: "ars_creo:starbuncle_wheel",
    }
  );

  event.shaped(Item.of("refinedstorage:cable", 12), ["AAA", "BCB", "AAA"], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "glassential:glass_redstone",
    C: "minecraft:glowstone_dust",
  });

  event.shaped(
    Item.of("refinedstorage:network_receiver"),
    ["AFA", "BED", "CCC"],
    {
      A: "refinedstorage:advanced_processor",
      B: "refinedstorage:construction_core",
      C: "minecraft:ender_pearl",
      D: "refinedstorage:destruction_core",
      E: "refinedstorage:machine_casing",
      F: "ars_nouveau:glyph_redstone_signal",
    }
  );

  event.shaped(
    Item.of("refinedstorage:network_transmitter"),
    ["CCC", "BED", "AFA"],
    {
      A: "refinedstorage:advanced_processor",
      B: "refinedstorage:construction_core",
      C: "minecraft:ender_pearl",
      D: "refinedstorage:destruction_core",
      E: "refinedstorage:machine_casing",
      F: "ars_nouveau:glyph_redstone_signal",
    }
  );

  event.shaped(
    Item.of("refinedstorage:storage_housing"),
    ["CCC", "CAC", "BBB"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "glassential:glass_redstone",
      C: "#forge:stone",
    }
  );

  event.shaped(Item.of("refinedstorage:upgrade"), ["ABA", "ACA", "ABA"], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "glassential:glass_redstone",
    C: "refinedstorage:improved_processor",
  });

  event.shaped(
    Item.of("refinedstorage:1k_storage_part"),
    [" C ", "CAC", " C "],
    {
      A: "refinedstorage:quartz_enriched_iron",
      C: "refinedstorage:basic_processor",
    }
  );

  event.shaped(
    Item.of("refinedstorage:creative_wireless_grid"),
    ["ABA", "ACA", "ABA"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "minecraft:ender_pearl",
      C: "#refinedstorage:grid",
    }
  );

  event.shaped(
    Item.of("refinedstorageaddons:creative_wireless_crafting_grid"),
    ["ABA", "ACA", "ABA"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "minecraft:ender_pearl",
      C: "#refinedstorage:crafting_grid",
    }
  );

  event.shaped(
    Item.of("rsinfinitybooster:infinity_card"),
    [" B ", "BCB", " B "],
    {
      B: "refinedstorage:range_upgrade",
      C: "minecraft:nether_star",
    }
  );

  event.shaped(
    Item.of("rsinfinitybooster:dimension_card"),
    [" A ", "BCD", " E "],
    {
      A: "twilightforest:maze_map_focus",
      B: "deeperdarker:heart_of_the_deep",
      C: "rsinfinitybooster:infinity_card",
      D: "minecraft:dragon_egg",
      E: "minecraft:netherite_ingot",
    }
  );

  event.shaped(
    Item.of("refinedstorage:quartz_enriched_iron", 8),
    ["AA ", "AB ", "   "],
    {
      A: "minecraft:iron_ingot",
      B: "minecraft:glowstone_dust",
    }
  );

  event.shapeless(Item.of("refinedstorage:quartz_enriched_iron", 9), [
    "refinedstorage:quartz_enriched_iron_block",
  ]);

  event.shapeless(Item.of("refinedstorage:network_transmitter"), [
    "#refinedstorage:network_transmitter",
    "#forge:dyes/light_blue",
  ]);

  event.shapeless(Item.of("refinedstorage:network_receiver"), [
    "#refinedstorage:network_receiver",
    "#forge:dyes/light_blue",
  ]);

  event.shapeless(
    Item.of("refinedstorageaddons:creative_wireless_crafting_grid"),
    ["refinedstorage:creative_wireless_grid", "minecraft:crafting_table"]
  );

  for (const size of BASIC_SIZES) {
    addBasicDisk(event, size);
  }

  // all color controllers
  for (const colorName of global.COLOR_NAMES) {
    let foundController = Item.of(
      `refinedstorage:${colorName}_creative_controller`
    );
    if (!foundController || foundController.item.getId() === "minecraft:air") {
      continue;
    }

    event.shapeless(foundController, [
      "#forge:creative_controller",
      `#forge:dyes/${colorName}`,
    ]);
  }

  // clean ward bypass
  event.shapeless(Item.of("refinedstorage:security_card"), [
    "refinedstorage:security_card",
    "supplementaries:soap",
  ]);
});
