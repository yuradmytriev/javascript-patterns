// Подобное можно написать самостоятельно, но существуют и библиотечные решения:

// В Lodash имеется функция _.memoize(func, [resolver])

// Может показаться, что собственные реализации мемоизации стоит применять, например, при обращениях к неким API из браузерного кода. 
// Однако, делать этого не нужно, так как браузер автоматически кэширует их, используя, в частности, HTTP-кэш.

// Если вы работаете с React/Redux, можете взглянуть на reselect. Тут используется селектор с мемоизацией. 
// Это позволяет выполнять вычисления только в том случае, если в соответствующей части дерева состояний произошли изменения.

const addMemoization = (n, cache = {}) => (n) => {
  if (n in cache) {
    console.log('value from cache!');
    return cache[n];
  }

  cache[n] = n + 10;
  return cache[n];
};

const mem = addMemoization();
console.log(mem(10)); // 20
console.log(mem(10)); // value from cache! 20