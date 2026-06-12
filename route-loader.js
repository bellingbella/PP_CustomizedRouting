(function () {
    const url = new URL(window.location.href);
    if (url.pathname == '\\') changeRoute(pageManager.getRootRoute());
    else changeRoute(url.pathname.slice(
        0,
        url.pathname.length
    ))
})();


function loadContent(content) {
    // FIX: Changed querySelectorAll to querySelector to target the single element directly
    let container = document.querySelector('.container');
    
    if (container) {
        container.innerHTML = content;
    } else {
        console.error("Target container '.container' not found in the DOM.");
    }
}


async function changeRoute(routeName) {
    const url = new URL(window.location.href);
    
    
    let routeAddress = pageManager.getRoute(routeName);
    if (routeAddress == null) return 'ROUTE_NOT_FOUND';

    url.pathname = routeAddress;
    window.history.pushState({}, "", url);

    // Handling
    try {
        let response = await fetch(`/routes/${routeAddress}.html`);
        if (!response.ok) return `ERROR:${response.status}`;
        const result = await response.text();
        console.log(response);
        loadContent(result);
        return 'SUCCESS'
    } catch (e) {
        return response.status;
    }
}


