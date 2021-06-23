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
            .post('/add/userinfo')
            .send(userInfo)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true)
                res.body.should.have.property('message').eq('New user data was inserted successfully')
            done();
            });
    });

    it('givenInvalidAddNewUserInfo_WhenAddedWrong_shouldReturnStatus=400AndSuccess=false', (done) => {
        const userInfo = addressBookInfo.NewUserInfoWrong;
        chai.request(server)
            .post('/add/userinfo')
            .send(userInfo)
            .end((error, res) => {
                res.should.have.status(400);
                res.body.should.be.property('success').eq(false);
                res.body.should.be.property('message')
                done();
            });
    });
});

describe('POST/userlogin', () => {
    it('givenAddressBookInfo_whenUserLogin_shouldReturnStatus200AndSuccess=true', (done) => {
        const userInfo = addressBookInfo.UserLoginInfo;
        chai.request(server)
            .post('/userlogin')
            .send(userInfo)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true)
                res.body.should.have.property('message').eq('User Login Successfully..')
                res.body.should.be.property('token')
            done();
            });
    });
});