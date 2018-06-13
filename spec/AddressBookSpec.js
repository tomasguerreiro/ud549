describe('Address Book', function(){

    let addressBook;
    let thisContact;

    beforeEach(function(){
        addressBook = new AddressBook(),
        thisContact = new Contact();
    });


    it('should be able to add a contact', function(){
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function(){
        addressBook.addContact(thisContact);
        addressBook.deleteContact(thisContact);
        expect(addressBook.getContact(0)).not.toBeDefined(thisContact);
    });

});