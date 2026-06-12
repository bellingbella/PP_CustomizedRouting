const routes = {
    "home": "home",
    "A": "pageA",
    "B": "pageB"
}

const root = "home";

const pageManager = {
    getRootRoute: () => {
        return pageManager.getRoute(root);
    },

    getRoute: (routeName) => {
        if (pageManager.exists(routeName)) {
            return routes[routeName];
        }
        return null;
    },

    exists: (routeName) => {
        if (routes[routeName] != undefined) return true;
        return false;
    },

    
}

