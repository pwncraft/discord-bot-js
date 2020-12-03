exports.log = function (message) {
        mylog.send(message);
        console.log(message);
};
