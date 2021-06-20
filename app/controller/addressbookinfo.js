const addressBookInfoService = require('../service/addressbookinfo.js');

class AddressBookInfo {

     /*@Description create and save the address book info
     * @param {*} req send from http 
     * @param {*} res is used to send res
     */
    create = (req, res) => {
        let newAddressBookInfo = req.body;
        addressBookInfoService.create(newAddressBookInfo, (error, data) => {
            console.log(newAddressBookInfo);
            if (error) {
                return res.status(500).send({
                    success: false,
                    message: "Some error is occurred when creating address book info"
                })
            }
            res.status(200).send({
                success: true,
                message: "Data is added successfully in address book info...",
                data: data
            })
        })
    }

     /*@Description find all the address book info
     * @param {*} req send from http 
     * @param {*} res is used to send res
     */
    findAllAddressBookInfo = (req, res) => {
        addressBookInfoService.findAllAddressBookInfo((error, data) => {
            if (error) {
                return res.status(500).send({
                    success: false,
                    message: "Some error is occurred when retriving address book info"
                })
            }
            res.status(200).send({
                success: true,
                message: "Retrived all the address book info",
                data: data
            })
        })
    }
}

module.exports = new AddressBookInfo();