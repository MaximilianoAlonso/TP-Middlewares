module.exports = {

    index : (req,res) =>{
        return res.render("index", {
            title: "HOME"
        })
    },
    admin : (req,res) =>{
        return res.render("admin", {
            title: "ACCEDISTE COMO ADMINISTRADOR"
        })
    },
    
    notEntry : (req,res) =>{
        return res.render("notEntry", {
            title: "ACCESO DENEGADO"
        })
    }
}