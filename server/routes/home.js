define(
    ["express"],
    function (express) {
        var router = express.Router();

        // catch all route for history
        router.get("*", function (req, res) {
           res.render("index");
        });

        return router;
    });