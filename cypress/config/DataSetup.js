const testData = require('../../ItemData.json');

export default function getItemImages() {
    const imageArray = testData.CatalogEntryView[0].Images;
    const { AlternateImages, PrimaryImage } = imageArray[0];
    return [...PrimaryImage, ...AlternateImages];
};