define(
    ["express"],
    function (express) {
        return function (passport) {
            var router = express.Router();
           
            router.post("/test", function (req, res) {                
                return res.send({ field: "from server" });
            })

            return router;
        }
    });