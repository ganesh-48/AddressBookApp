const addressBookInfoService = require('../service/addressbookinfo.js');

class AddressBookInfo {

     /*@Description create and save the address book info after validation
     * @param {*} req send from http 
     * @param {*} res is used to send res
     */
    create = (req, res) => {

        var result = data.validate(req.body);
        if(result.error) {
            return res.status(400).send({
                success: false,
                message: result.details[0].message
            });
        } 

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

    /**
     * @Description find one address book info by using address book info Id
     * @param {*} req send from http 
     * @param {*} res is used to send res
     */
    findOneAddressBookInfo = (req, res) => {
        let addressBookInfoId = req.params.addressBookInfoId;
        addressBookInfoService.findaddressBookInfoId(addressBookInfoId, (error, data) => {
            if(error) {
                return res.status(404).send ({
                    success: false,
                    message: "Some error is occurred address book info not found"
                })
            }
            res.status(200).send ({
                success: true,
                message: "Address book info was found by id",
                data: data
            })
        })
    }

    /**
     * @description Update the address book info by using a addressbookinfoid
     * @param addressBookInfoId, NewData
     * @return callback is used to callback Service
     */
    updateAddressBookInfo = (req, res) => {
        let  addressBookInfoId = req.params.addressBookInfoId;
        addressBookInfoService.findAddressBookInfoIdAndUpdate(req.body, addressBookInfoId, (error, data) => {
            if(error) {
                return res.status(404).send ({
                    success: false,
                    message: "Some error is occurred address book info Id was wrong"
                })
            }
            res.status(200).send ({
                success: true,
                message: "Address book info updated  successfully",
                data: data
            })
        })
    }

}

module.exports = new AddressBookInfo();