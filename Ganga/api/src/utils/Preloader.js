const {  
     preLoadSubCategory } = require('./PreLoadSubCategory.js');

const {  
     preLoadCategory } = require('./preLoaderCategory.js');

const {  
    preLoadProduct } = require('./preLoaderProduct.js');

const {  
    preLoadUser } = require('./preLoaderUser.js');

async function preloader() {
    await preLoadSubCategory()
    await preLoadCategory()
    await preLoadProduct()
    await preLoadUser()
}

module.exports = {
    preloader
}