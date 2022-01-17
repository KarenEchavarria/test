"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        const items = this.items.map((item) => {
            if (this.mustIncrease(item)) {
                const updatedQualityItem = this.increaseItemQuality(item);
                return this.updateSellIn(updatedQualityItem);
            }
            if (this.isLegendaryItem(item))
                return item;
            const updatedQualityItem = this.decreaseItemQuality(item);
            return this.updateSellIn(updatedQualityItem);
        });
        return items;
    }
    mustIncrease({ name }) {
        const increaseCategories = [
            "Aged Brie",
            "Backstage passes to a TAFKAL80ETC concert",
        ];
        return increaseCategories.some((category) => category === name);
    }
    isLegendaryItem({ name }) {
        const legendaryCategories = ["Sulfuras, Hand of Ragnaros"];
        return legendaryCategories.some((category) => category === name);
    }
    increaseItemQuality({ name, quality, sellIn }) {
        if (sellIn === 0)
            return { name, quality: 0, sellIn };
        const outOfDateIncrease = !sellIn ? 2 : 1;
        let increasedQuality = 0;
        if (sellIn < 6 && name === "Backstage passes to a TAFKAL80ETC concert") {
            increasedQuality = quality + 3 * outOfDateIncrease;
        }
        else if (sellIn < 11 && name === "Backstage passes to a TAFKAL80ETC concert") {
            increasedQuality = quality + 2 * outOfDateIncrease;
        }
        else {
            increasedQuality = quality + 1 * outOfDateIncrease;
        }
        console.log("increasedQuality", increasedQuality);
        if (quality >= 50) {
            return { name, quality: 50, sellIn };
        }
        return { name, quality: increasedQuality, sellIn };
    }
    decreaseItemQuality({ name, quality, sellIn }) {
        const outOfDateDecrease = !sellIn || name === "Conjured" ? 2 : 1;
        const decreasedQuantity = quality - 1 * outOfDateDecrease;
        if (quality <= 0)
            return { name, quality: 0, sellIn };
        return { name, quality: decreasedQuantity, sellIn };
    }
    updateSellIn(item) {
        if (item.name === "Sulfuras, Hand of Ragnaros")
            return item;
        return Object.assign(Object.assign({}, item), { sellIn: item.sellIn - 1 });
    }
}
exports.default = GildedRose;
//# sourceMappingURL=gilded-rose.js.map