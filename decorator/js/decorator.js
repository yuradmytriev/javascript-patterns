const isAdmin = () => true;
const save = () => console.log('save');

// decorate function
const checkPermission = func =>
	() => {
    isAdmin() ? func() : console.log( 'Permission denied!' );
	}

const saveUser = checkPermission(save);

saveUser();

// decorator function it`s like function wrapper
// in this example we return function where we check our condition;