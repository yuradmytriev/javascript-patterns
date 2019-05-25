const canCast = state => ({
    cast: () => {
        state.mana--;
    }
});

const canFight = state => ({
    fight: () => {
        state.stamina--;
    }
});

const fighter = name => {
    let state = {
        name,
        health: 100,
        stamina: 100
    };

    return {state, ...canFight(state)};
};

const mage = name => {
    let state = {
        name,
        health: 100,
        mana: 100,
    };

    return {state, ...canCast(state)};
};

const paladin = name => {
    let state = {
        name,
        health: 100,
        mana: 100,
        stamina: 100
    };

    return {state, ...canCast(state), ...canFight(state)};
};
