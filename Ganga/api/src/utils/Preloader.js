const {  
     preLoadSubCategory } = require('./PreLoadSubCategory.js');

const {  
     preLoadCategory } = require('./preLoaderCategory.js');
const {  
    preLoadProduct } = require('./preLoaderProduct.js');

async function preloader() {
    await preLoadSubCategory()
    await preLoadCategory()
    await preLoadProduct()
}

module.exports = {
    preloader
}