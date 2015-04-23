define(
    [],
    function () {
        return function (app, passport) {
            var home = requirejs("routes/home"),
                login = requirejs("routes/login")(passport);

            app.use("/", home);
            app.use("/", login);
        }
    });