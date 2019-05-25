const matched = x => ({
    on: () => matched(x),
    otherwise: () => x,
});

const match = x => ({
    on: (cond, fn) => (cond(x) ? matched(fn(x)) : match(x)),
    otherwise: fn => fn(x),
});

const result = match(50)
    .on(x => x < 0, () => 0)
    .on(x => x >= 0 && x <= 1, () => 1)
    .otherwise(x => x * 10);

console.log(result);