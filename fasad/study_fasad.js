class Factory {
	constructor(admin) {
  	this.admin = admin;
  }
 
  
  getAdmin() {
    if(this.admin === "admin") {
      console.log("Is admin!")
    }
    else {
    	console.log("you not admin")
    }
  }
}

const admin = new Factory("admin");

admin.getAdmin()