const addressBookInfoService = require('../service/addressbook.js');

class AddressBookInfo {

    create = (req, res) => {
        let newAddressBookInfo = req.body;
        addressBookInfoService.create(newAddressBookInfo, (error, data) => {
            if(error) {
                return res.status(500).send({
                    success: false,
                    message: "Some error is occurred when creating address book info"
                })
            }
            res.status(200).send({
                success: true,
                message: "Data is added successfully in address book info..."
                data: data
            })
        })
    }
}