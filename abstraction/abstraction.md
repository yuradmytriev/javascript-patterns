### Abstraction

With this abstraction, we gain three important things:

 - We have one place with our single source of truth.

- We can check for the support of native API’s and use them.

- We can swap the implementation without breaking anything.

```js
import {
  findIndex
} from 'lodash';

export function findIndex(array, predicate) {

  if (Array.prototype.findIndex) {

    return array.findIndex(predicate)

  }

  return findIndex(array, predicate);

}
```

another example:

```js
import axios from 'axios';

class HTTP {

  get(url, options) {
    return axios.get(url, options);
  }

}
```
