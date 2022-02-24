exports.create = async function(req, res){
    res.send({ message: "create handler" });
};
exports.findAll = async function(req, res){
    res.send({ message: "findAll handler" });
};
exports.findOne = async function(req, res){
    res.send({ message: "findOne handler" });
};
exports.update = async function(req, res){
    res.send({ message: "update handler" });
};
exports.delete = async function(req, res){
    res.send({ message: "delete handler" });
};
exports.deleteAll = async function(req, res){
    res.send({ message: "deleteAll handler" });
};
exports.findAllFavorite = async function(req, res){
    res.send({ message: "findAllFavorite handler" });
};