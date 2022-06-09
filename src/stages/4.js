const { db } = require("../models/banco");

function execute(user, msg) {
    db[user].stage = 0;
    return [
        "Obrigado pela preferência.",
        "Aguarde, seu pedido chegará em breve",
        "Mais informações ligue para (82) 00000-0000",
    ];
}

exports.execute = execute;
