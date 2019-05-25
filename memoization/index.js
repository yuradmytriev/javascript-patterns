const Clients = () => {
	const cache = {};
  
  return {
  	getClient(client) {
    	if(cache[client] === client) {
      	console.log("client in cahe")
      }
      else {
      	cache[client] = client;
        console.log("add client to cahe")
      }
    }
  }
}

const newClient = Clients();

newClient.getClient("some client");
newClient.getClient("some client");