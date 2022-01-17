import Item from "./item";

type Items = Array<Item>;

export default class GildedRose {
  items: Items;

  constructor(items: Items = []) {
    this.items = items;
  }

	updateQuality(): Items {

    const items = this.items.map((item) => {
      if (this.mustIncrease(item)) {
        const updatedQualityItem = this.increaseItemQuality(item);
        return this.updateSellIn(updatedQualityItem);
      }

      if (this.isLegendaryItem(item)) return item;

      const updatedQualityItem = this.decreaseItemQuality(item);
      return this.updateSellIn(updatedQualityItem);
    });

    return items;
  }

  mustIncrease({ name }: Item): boolean {

    const increaseCategories = [
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
    ];
    return increaseCategories.some((category) => category === name);
  }

  isLegendaryItem({ name }: Item): boolean {

    const legendaryCategories = ["Sulfuras, Hand of Ragnaros"];
    return legendaryCategories.some((category) => category === name);
  }

  increaseItemQuality({ name, quality, sellIn }: Item): Item {

    if (sellIn === 0) return { name, quality: 0, sellIn };

    const outOfDateIncrease = !sellIn ? 2 : 1;

    let increasedQuality: number = 0;

    if (sellIn < 6 && name === "Backstage passes to a TAFKAL80ETC concert") {
      increasedQuality = quality + 3 * outOfDateIncrease;
    } else if (sellIn < 11 && name === "Backstage passes to a TAFKAL80ETC concert") {
      increasedQuality = quality + 2 * outOfDateIncrease;
    } else {
      increasedQuality = quality + 1 * outOfDateIncrease;
    }

    console.log("increasedQuality", increasedQuality);

    if (quality >= 50) {
      return { name, quality: 50, sellIn };
    }

    return { name, quality: increasedQuality, sellIn };
  }

  decreaseItemQuality({ name, quality, sellIn }: Item): Item {

    const outOfDateDecrease = !sellIn || name === "Conjured" ? 2 : 1;

    const decreasedQuantity = quality - 1 * outOfDateDecrease;

    if (quality <= 0) return { name, quality: 0, sellIn };

    return { name, quality: decreasedQuantity, sellIn };
  }

  updateSellIn(item: Item): Item {

    if (item.name === "Sulfuras, Hand of Ragnaros") return item;

    return { ...item, sellIn: item.sellIn - 1 };
  }
}
