ServerEvents.recipes((event) => {
  for (const color of global.COLOR_NAMES) {
    event.shaped(
      Item.of("comforts:sleeping_bag_" + color),
      ["   ", "A A", "BBB"],
      {
        A: "minecraft:leather",
        B: `minecraft:${color}_wool`,
      }
    );
    event.shapeless(Item.of("comforts:sleeping_bag_" + color), [
      "#comforts:sleeping_bags",
      "#forge:dyes/" + color,
    ]);
  }
});
