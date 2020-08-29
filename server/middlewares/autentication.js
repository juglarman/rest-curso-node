const jwt = require('jsonwebtoken')

//===========================
// verificar token
//===========================

let verificatoken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "token no valido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
    //console.log(token);


    /*  res.json({
         token
     }) */
};


//===========================
// verificar Admin
//===========================

let verificaadmin = (req, res, next) => {
    let role = req.usuario.role

    if (role != 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: "No eres administrador "
            }
        });
    }
    next();
};


module.exports = {
    verificatoken,
    verificaadmin
}