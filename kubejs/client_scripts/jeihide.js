// priority: 0

JEIEvents.hideItems((event) => {
  // Disabled Items Removal
  const toHide = [
    "aquaculture:acacia_fish_mount",
    "aquaculture:birch_fish_mount",
    "aquaculture:dark_oak_fish_mount",
    "aquaculture:jungle_fish_mount",
    "aquaculture:oak_fish_mount",
    "aquaculture:spruce_fish_mount",
    "artifacts:eternal_steak",
    "artifacts:everlasting_beef",
    "artifacts:feral_claws",
    "artifacts:flippers",
    "artifacts:golden_hook",
    "artifacts:helium_flamingo",
    "artifacts:snorkel",
    "artifacts:umbrella",
    "caupona:stock",
    "caupona:stock_aspic",
    "crittersandcompanions:diamond_dragonfly_armor",
    "crittersandcompanions:gold_dragonfly_armor",
    "crittersandcompanions:iron_dragonfly_armor",
    "delightful:animal_fat",
    "delightful:animal_oil_bottle",
    "delightful:cooked_venison_chops",
    "delightful:zinc_knife",
    "ends_delight:dragon_egg_shell_knife",
    "ends_delight:end_stone_knife",
    "ends_delight:purpur_knife",
    "enigmaticgraves:grave_finder",
    "environmental:cherries",
    "environmental:cherry_crate",
    "extradisks:256k_storage_block",
    "extradisks:1024k_storage_block",
    "extradisks:4096k_storage_block",
    "extradisks:16384k_fluid_storage_block",
    "extradisks:16384k_fluid_storage_disk",
    "extradisks:16384k_fluid_storage_part",
    "extradisks:16384k_storage_block",
    "extradisks:65536k_fluid_storage_block",
    "extradisks:65536k_fluid_storage_disk",
    "extradisks:65536k_fluid_storage_part",
    "extradisks:65536k_storage_block",
    "extradisks:262144k_fluid_storage_block",
    "extradisks:262144k_fluid_storage_disk",
    "extradisks:262144k_fluid_storage_part",
    "extradisks:262144k_storage_block",
    "extradisks:1048576k_fluid_storage_block",
    "extradisks:1048576k_fluid_storage_disk",
    "extradisks:1048576k_fluid_storage_part",
    "extradisks:1048576k_storage_block",
    "extradisks:infinite_fluid_storage_block",
    "extradisks:infinite_fluid_storage_disk",
    "extradisks:infinite_fluid_storage_part",
    "extradisks:infinite_storage_block",
    "farmersdelight:golden_knife",
    "farmingforblockheads:feeding_trough",
    "ftbquests:barrier",
    "ftbquests:custom_icon",
    "ftbquests:detector",
    "ftbquests:loot_crate_opener",
    "ftbquests:missing_item",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:stage_barrier",
    "functionalstorage:armory_cabinet",
    "gildedarmor:gilded_enderite_boots",
    "gildedarmor:gilded_enderite_chestplate",
    "gildedarmor:gilded_enderite_helmet",
    "gildedarmor:gilded_enderite_leggings",
    "hexerei:milk_bottle",
    "incubation:fried_egg",
    "itemfilters:always_false",
    "itemfilters:always_true",
    "itemfilters:and",
    "itemfilters:block",
    "itemfilters:custom",
    "itemfilters:damage",
    "itemfilters:id_regex",
    "itemfilters:item_group",
    "itemfilters:max_count",
    "itemfilters:mod",
    "itemfilters:not",
    "itemfilters:or",
    "itemfilters:strong_nbt",
    "itemfilters:tag",
    "itemfilters:weak_nbt",
    "itemfilters:xor",
    "pipez:energy_pipe",
    "pipez:fluid_pipe",
    "pipez:gas_pipe",
    "pipez:universal_pipe",
    "prefab:block_boundary",
    "prefab:item_bunch_of_beets",
    "prefab:item_bunch_of_carrots",
    "prefab:item_bunch_of_potatoes",
    "prefab:item_clutch_of_eggs",
    "prefab:item_crate_of_beets",
    "prefab:item_crate_of_carrots",
    "prefab:item_crate_of_potatoes",
    "prefab:item_sickle_diamond",
    "prefab:item_sickle_gold",
    "prefab:item_sickle_iron",
    "prefab:item_sickle_netherite",
    "prefab:item_sickle_stone",
    "prefab:item_sickle_wood",
    "prefab:item_swift_blade_bronze",
    "prefab:item_swift_blade_copper",
    "prefab:item_swift_blade_diamond",
    "prefab:item_swift_blade_gold",
    "prefab:item_swift_blade_iron",
    "prefab:item_swift_blade_netherite",
    "prefab:item_swift_blade_obsidian",
    "prefab:item_swift_blade_osmium",
    "prefab:item_swift_blade_steel",
    "prefab:item_swift_blade_stone",
    "prefab:item_swift_blade_wood",
    "prefab:item_wooden_crate",
    "quark:beetroot_crate",
    "quark:carrot_crate",
    "quark:feeding_trough",
    "quark:potato_crate",
    "refinedstorage:1k_storage_block",
    "refinedstorage:4k_storage_block",
    "refinedstorage:16k_storage_block",
    "refinedstorage:64k_fluid_storage_block",
    "refinedstorage:64k_fluid_storage_disk",
    "refinedstorage:64k_fluid_storage_part",
    "refinedstorage:64k_storage_block",
    "refinedstorage:256k_fluid_storage_block",
    "refinedstorage:256k_fluid_storage_disk",
    "refinedstorage:256k_fluid_storage_part",
    "refinedstorage:1024k_fluid_storage_block",
    "refinedstorage:1024k_fluid_storage_disk",
    "refinedstorage:1024k_fluid_storage_part",
    "refinedstorage:4096k_fluid_storage_block",
    "refinedstorage:4096k_fluid_storage_disk",
    "refinedstorage:4096k_fluid_storage_part",
    "refinedstorage:black_controller",
    "refinedstorage:black_fluid_grid",
    "refinedstorage:blue_controller",
    "refinedstorage:blue_fluid_grid",
    "refinedstorage:brown_controller",
    "refinedstorage:brown_fluid_grid",
    "refinedstorage:controller",
    "refinedstorage:creative_fluid_storage_block",
    "refinedstorage:creative_fluid_storage_disk",
    "refinedstorage:creative_storage_block",
    "refinedstorage:creative_storage_disk",
    "refinedstorage:creative_wireless_fluid_grid",
    "refinedstorage:cyan_controller",
    "refinedstorage:cyan_fluid_grid",
    "refinedstorage:fluid_grid",
    "refinedstorage:fluid_interface",
    "refinedstorage:fortune_1_upgrade",
    "refinedstorage:fortune_2_upgrade",
    "refinedstorage:fortune_3_upgrade",
    "refinedstorage:gray_controller",
    "refinedstorage:gray_fluid_grid",
    "refinedstorage:green_controller",
    "refinedstorage:green_fluid_grid",
    "refinedstorage:light_gray_controller",
    "refinedstorage:light_gray_fluid_grid",
    "refinedstorage:lime_controller",
    "refinedstorage:lime_fluid_grid",
    "refinedstorage:magenta_controller",
    "refinedstorage:magenta_fluid_grid",
    "refinedstorage:orange_controller",
    "refinedstorage:orange_fluid_grid",
    "refinedstorage:pink_controller",
    "refinedstorage:pink_fluid_grid",
    "refinedstorage:portable_grid",
    "refinedstorage:purple_controller",
    "refinedstorage:purple_fluid_grid",
    "refinedstorage:red_controller",
    "refinedstorage:red_fluid_grid",
    "refinedstorage:silk_touch_upgrade",
    "refinedstorage:storage_monitor",
    "refinedstorage:white_controller",
    "refinedstorage:white_fluid_grid",
    "refinedstorage:wireless_fluid_grid",
    "refinedstorage:yellow_controller",
    "refinedstorage:yellow_fluid_grid",
    "simplehats:aegishat",
    "simplehats:alienphil",
    "simplehats:amalgalichhat",
    "simplehats:angrymask",
    "simplehats:astronaut",
    "simplehats:azumanga_hat",
    "simplehats:bandanargb",
    "simplehats:baseballeaster",
    "simplehats:baseballhat",
    "simplehats:baseballhatfestive",
    "simplehats:baseballhatjuly",
    "simplehats:baseballhatrgb",
    "simplehats:beanieeaster",
    "simplehats:beaniefestive",
    "simplehats:beaniergb",
    "simplehats:binky",
    "simplehats:burgerhat",
    "simplehats:burning_m_bison",
    "simplehats:camera",
    "simplehats:camerabeard",
    "simplehats:candycane",
    "simplehats:cardboard_box",
    "simplehats:cat_hat",
    "simplehats:christmascakehat",
    "simplehats:christmastree",
    "simplehats:cowboyrgb",
    "simplehats:cuphead",
    "simplehats:dairyqueen",
    "simplehats:dangereqsue",
    "simplehats:dangeresquejuly",
    "simplehats:dejiko",
    "simplehats:digger",
    "simplehats:dimmahat",
    "simplehats:discoball",
    "simplehats:disguise",
    "simplehats:doctorhat",
    "simplehats:dorkglassesandteeth",
    "simplehats:doubletake",
    "simplehats:drinkinhat",
    "simplehats:dumhat",
    "simplehats:festiveantlers",
    "simplehats:fireworks",
    "simplehats:flagjuly",
    "simplehats:hat_of_discipline",
    "simplehats:headbolts",
    "simplehats:headphonesblue",
    "simplehats:hockeymask",
    "simplehats:holyhead",
    "simplehats:julydouble",
    "simplehats:lil_termagant",
    "simplehats:megamanhat",
    "simplehats:milady_doll",
    "simplehats:mistletoe",
    "simplehats:nyan_doll",
    "simplehats:peppino",
    "simplehats:pinhead",
    "simplehats:policebucket",
    "simplehats:policesiren",
    "simplehats:poofballhat",
    "simplehats:popehat",
    "simplehats:presentsstack",
    "simplehats:propelhat",
    "simplehats:puchiko",
    "simplehats:rabi_en_rose",
    "simplehats:ranahat",
    "simplehats:rednose",
    "simplehats:redstache",
    "simplehats:rgbbigribbon",
    "simplehats:rgbbowler",
    "simplehats:rgbdragonskull",
    "simplehats:rgbdrinkinhat",
    "simplehats:rgbeasterhead",
    "simplehats:rgbfullhelm",
    "simplehats:rgbsmallbowler",
    "simplehats:rgbsunglasses",
    "simplehats:rgbtoptophathat",
    "simplehats:rgbushanka",
    "simplehats:rubbernipple",
    "simplehats:santaclaus",
    "simplehats:scouter",
    "simplehats:shakehat",
    "simplehats:simsgem",
    "simplehats:sleepeyemask",
    "simplehats:sonichood",
    "simplehats:sport_sunglasses",
    "simplehats:springer",
    "simplehats:stinkycheeseman",
    "simplehats:stuck_lollipop",
    "simplehats:sunglasses",
    "simplehats:sunglassesbig",
    "simplehats:supersandhat",
    "simplehats:swimmer",
    "simplehats:the_noise",
    "simplehats:the_noisier",
    "simplehats:thumbnail",
    "simplehats:tick_on_head",
    "simplehats:toilet",
    "simplehats:toy_story_alien",
    "simplehats:traffic_cone",
    "simplehats:triangleshades",
    "simplehats:tvhead",
    "simplehats:twilight_doll",
    "simplehats:udder_hat",
    "simplehats:worms_mine",
    "sophisticatedbackpacks:advanced_deposit_upgrade",
    "sophisticatedbackpacks:advanced_pump_upgrade",
    "sophisticatedbackpacks:battery_upgrade",
    "sophisticatedbackpacks:deposit_upgrade",
    "sophisticatedbackpacks:inception_upgrade",
    "sophisticatedbackpacks:pump_upgrade",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedstorage:advanced_feeding_upgrade",
    "sophisticatedstorage:advanced_pump_upgrade",
    "sophisticatedstorage:copper_shulker_box",
    "sophisticatedstorage:debug_tool",
    "sophisticatedstorage:diamond_shulker_box",
    "sophisticatedstorage:feeding_upgrade",
    "sophisticatedstorage:gold_shulker_box",
    "sophisticatedstorage:iron_shulker_box",
    "sophisticatedstorage:jukebox_upgrade",
    "sophisticatedstorage:netherite_shulker_box",
    "sophisticatedstorage:pump_upgrade",
    "sophisticatedstorage:shulker_box",
    "sophisticatedstorage:xp_pump_upgrade",
    "structure_gel:blue_gel",
    "structure_gel:building_tool",
    "structure_gel:cyan_gel",
    "structure_gel:data_handler",
    "structure_gel:dynamic_spawner",
    "structure_gel:green_gel",
    "structure_gel:orange_gel",
    "structure_gel:red_gel",
    "structure_gel:yellow_gel",
    "supplementaries:rope",
    "twilightdelight:cooked_venison_rib",
    "twilightdelight:raw_venison_rib",
    "twilightforest:charm_of_keeping_1",
    "twilightforest:charm_of_keeping_2",
    "twilightforest:charm_of_keeping_3",
    "twilightforest:cooked_venison",
    "twilightforest:raw_venison",
    "extradelight:fried_brains",
    "extradelight:liver_onions",
    "extradelight:sextuple_meat_treat",
    "extradelight:oxtail_soup",
    "extradelight:haggis_block_item",
  ];

  for (const hide of toHide) {
    event.hide(hide);
  }
});
