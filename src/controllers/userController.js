module.exports = {

    login : (req,res) =>{
        return res.render("login", {
            title: "LOGIN"
        })
    },
    register : (req,res) =>{
        return res.render("register", {
            title: "REGISTER"
        })
    },
    profile : (req,res) =>{
        return res.render("profile", {
            title: "PROFILE"
        })
    }
}