let routeNavigate = document.querySelectorAll('[routeNavigate]');

//initializiation
(function() {
    const url = new URL(window.location.href);
    routeNavigate.forEach(btn => {
        let r = btn.getAttribute('routeNavigate');
        if (r == url.pathname.slice(1,url.pathname.length)) {
            btn.style.display = 'none';
        }
    });
})();

//button behavior(s)
routeNavigate.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let targettedPath = btn.getAttribute('routeNavigate');
        if (!pageManager.exists(targettedPath)) return 'ROUTE_NOT_FOUND';

        changeRoute(targettedPath);

        for (let i = 0;i < routeNavigate.length;i++) {
            let t_hideAfterEntrying = routeNavigate[i].getAttribute('hideAfterEntrying');
            let t_routeNavigate = routeNavigate[i].getAttribute('routeNavigate');
            let t_display = routeNavigate[i].style.display;

            console.log([
                t_hideAfterEntrying,
                t_routeNavigate,
                t_display   
            ]);

            if (
                t_hideAfterEntrying == 'true' &&
                t_display == 'none' &&
                t_routeNavigate != targettedPath
            ) {
                console.log('hsi');
                routeNavigate[i].style.display = 'block';
            }
        }

        if (btn.getAttribute('hideAfterEntrying') == 'true')
            btn.style.display = 'none';

        let evaluableValue = btn.getAttribute('afterEntrying');
        if (evaluableValue != null) {
            eval(evaluableValue);
        }

    })
});

