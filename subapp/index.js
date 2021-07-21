const createSomeInstance = function createSomeInstance() {
    const appendScript = function appendScript(content, id) {
        if (document.getElementById(id)) {
            return;
        }

        const script = document.createElement("script");
        script.id = id;
        script.type = "text/javascript";
        script.innerHTML = content;
        document.head.appendChild(script);
    };

    appendScript("alert(1)", "someid");
};

const render = () => {
    new createSomeInstance();
    new createSomeInstance();

    return Promise.resolve();
};

window.subapp = {
    mount: () => {
        return render();
    },

    bootstrap: () => {
        return Promise.resolve();
    },
    unmount: () => {
        return Promise.resolve();
    },
};

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
