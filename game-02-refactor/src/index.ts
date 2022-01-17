import GildedRose from "./gilded-rose";

const items = [
  {
    name: "some",
    sellIn: 30,
    quality: 1,
  },
  {
    name: "Aged Brie",
    sellIn: 30,
    quality: 10,
  },
	{
    name: "Aged Brie",
    sellIn: 3,
    quality: 20,
  },
	{
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 30,
    quality: 10,
  },
  {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 8,
    quality: 10,
  },
  {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 3,
    quality: 10,
  },
  {
    name: "Sulfuras, Hand of Ragnaros",
    sellIn: 3,
    quality: 80,
  },
	{
    name: "Conjured",
    sellIn: 3,
    quality: 35,
  }
];

const gildedRose = new GildedRose(items);

console.log("Gilded Rose", JSON.stringify(gildedRose.updateQuality(), null, 4));
