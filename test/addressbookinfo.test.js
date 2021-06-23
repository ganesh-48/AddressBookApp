const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

const fs = require('fs');
let rawdata = fs.readFileSync('test/addressbookinfo.json');
let addressBookInfo = JSON.parse(rawdata);
 
describe('POST/add/userinfo', () => {
    it('givenAddNewUserInfo_WhenAdded_shouldReturnStatus=200AndSuccess=true', (done) => {
        const userInfo = addressBookInfo.NewUserInfo;
        chai.request(server)
            .post('add/userinfo')
            .send(userInfo)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true)
                res.body.should.have.property('message').eq('New user data was inserted successfully')
            done();
            });
    });
});