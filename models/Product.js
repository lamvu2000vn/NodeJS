const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')

const productPath = path.join(rootDir, 'data', 'products.json')

const getProductsFromFile = () => new Promise(resolve => {
    fs.readFile(productPath, (err, fileContent) => {
        if (err) {
            resolve([])
        } else {
            resolve(JSON.parse(fileContent))
        }
    })
})

class Product {
    constructor(name = null, description = null, price = null) {
        this.id = null
        this.name = name
        this.description = description
        this.price = price
    }

    static fetchAll = async () => await getProductsFromFile()

    static findByID = async (id) => {
        const idNum = Number(id)
        const products = await getProductsFromFile()
        return products.find(product => product.id === idNum)
    }

    save = async () => {
        const products = await getProductsFromFile()

        this.id = products.length > 0 ? products[products.length - 1].id + 1 : 1

        products.push(this)

        return new Promise((resolve, reject) => {
            fs.writeFile(productPath, JSON.stringify(products), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('success')
                }
            })
        })
    }
}

module.exports = Product