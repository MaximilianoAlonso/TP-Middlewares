module.exports = {
    products : (req,res) =>{
        return res.render("products", {
            title: "PRODUCTS"
        })
    }
}