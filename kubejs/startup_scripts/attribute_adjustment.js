ItemEvents.modification(event => {
    event.modify('experienceobelisk:cognitive_axe', item => {
		let boost = -1
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('twilightdelight:teardrop_sword', item => {
		let boost = -1.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('twilightforest:fiery_sword', item => {
		let boost = -1
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('byg:pendorite_sword', item => {
		let boost = 0.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('deeperdarker:warden_sword', item => {
		let boost = -0.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('deeperdarker:warden_axe', item => {
		let boost = -0.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    //Rebalance Warden Armor
    event.modify('deeperdarker:warden_helmet', item => {
		item.armorProtection = 3
	});
	event.modify('deeperdarker:warden_chestplate', item => {
		item.armorProtection = 8
	});
	event.modify('deeperdarker:warden_leggings', item => {
		item.armorProtection = 6
	});
	event.modify('deeperdarker:warden_boots', item => {
		item.armorProtection = 3
	});

    //Rebalance Ametrine Armor
    event.modify('byg:ametrine_leggings', item => {
		item.armorKnockbackResistance = 0.15
        item.maxDamage = 420
	});
	event.modify('byg:ametrine_chestplate', item => {
		item.armorKnockbackResistance = 0.15
        item.maxDamage = 615
	});
	event.modify('byg:ametrine_helmet', item => {
		item.armorKnockbackResistance = 0.15
        item.maxDamage = 570
	});
	event.modify('byg:ametrine_boots', item => {
		item.armorKnockbackResistance = 0.15
        item.maxDamage = 490
	});

    //Rebalance Neptunium Armor
    event.modify('aquaculture:neptunium_helmet', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_chestplate', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_leggings', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_boots', item => {
        item.armorToughness = 0
	});

	//Add Durability to Gauntlets
	event.modify('davespotioneering:rudimentary_gauntlet', item => {
        item.maxDamage = 300
	});
	event.modify('davespotioneering:potioneer_gauntlet', item => {
        item.maxDamage = 1561
	});
	event.modify('davespotioneering:netherite_gauntlet', item => {
        item.maxDamage = 2031
	});
})