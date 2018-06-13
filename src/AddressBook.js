class AddressBook {

  constructor() {
    this.contact = [];
  }

  addContact(_contact){
    this.contact.push(_contact);
  }

  getContact(_index){
    return this.contact[_index];
  }

  deleteContact(_contact){
    this.contact.splice(_contact, 1);
  }
  
}

/*
function AddressBook() {
  this.contact = [];
}

AddressBook.prototype.addContact = function (_contact) {
  this.contact.push(_contact);
}

AddressBook.prototype.getContact= function (_index) {
  return this.contact[_index];
}
*/