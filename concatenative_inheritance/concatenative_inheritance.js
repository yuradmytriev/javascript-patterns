const person = {
    name: 'name of person',
    age: 15,
};

// It is a factory function, because it returns a new object
const getterFactory = object => ({
    get: key => object[key],
});

const setterFactory = object => ({
   set: ( key, value ) => {
       object[key] = value
   }
});

const instanceFactory = (initialObject, ...methods) => {
    const instance = {};
    const data = {...initialObject};

    return {instance, ...methods.reduce((prev, curr) => {
        const methodName = curr.name;
        switch(methodName){
            case 'getterFactory':
            case 'setterFactory':
                Object.assign(prev, curr(data));
                break;
            default:
                Object.assign(prev, curr(instance));
                break;
        }
        return prev;
    }, {})}
};

const instance = instanceFactory(person, getterFactory, setterFactory);

instance.set('name', 'new name');
const instanceName = instance.get('name');

console.log(instanceName);


