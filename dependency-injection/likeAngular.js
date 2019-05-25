const magicModule = (function Manager() {
    const modules = {};

    function define(name, deps, impl) {
        for (let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();

const brooms = [1, 2, 3, 4, 5];

magicModule.define('joins', [], function () {
    return function joins(brooms) {
        return brooms.join(',');
    }
});

magicModule.define('brooms', ['joins'], function (joins) {
    function combineBrooms(brooms) {
        return joins(brooms);
    }
    return {
        combineBrooms: combineBrooms
    };
});

const mod = magicModule.get('brooms');