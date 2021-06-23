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

    it('givenInvalidAddressBookInfo_whenUserLogin_shouldReturnStatus404AndSuccess=false', (done) => {
        const userInfo = addressBookInfo.WrongUserLoginInfo;
        chai.request(server)
            .post('/userlogin')
            .send(userInfo)
            .end((error, res) => {
                res.should.have.status(404);
                res.body.should.have.property('success').eq(false)
                res.body.should.have.property('message').eq('Login details wrong')
            done();
            });
    });
});

let token = '';
console.log(token);
beforeEach(done => {
    chai
        .request(server)
        .post("/userlogin")
        .send(addressBookInfo.UserLoginInfo)
        .end((error, res) => {
            token = res.body.token;
            res.should.have.status(200);
            done();
        });
});

describe('POST/add', () => {
    it('givenAddNewAddressBookInfoCheckingByToken_WhenAdded_shouldReturnStatus=200AndSuccess=true', (done) => {
        const userInfo = addressBookInfo.NewAddressBookInfo;
        chai.request(server)
            .post('/add')
            .send(addressBookInfo.NewAddressBookInfo)
            .set('Authorization', 'bearar ' + token)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true)
                res.body.should.have.property('message').eq('Data is added successfully in address book info...')
            done();
            });
    });

    it('givenInvalidAddNewAddressBookInfoCheckingByToken_WhenAdded_shouldReturnStatus=400AndSuccess=false', (done) => {
        const userInfo = addressBookInfo.NewAddressBookInvalidInfo;
        chai.request(server)
            .post('/add')
            .send(addressBookInfo.NewAddressBookInvalidInfo)
            .set('Authorization', + token )
            .end((error, res) => {
                res.should.have.status(400);
                res.body.should.have.property('success').eq(false)
                res.body.should.have.property('message')
            done();
            });
    });
});

describe("/GET /getalladdressBookInfo", () => {

    it("givenAddNewAddressBookInfoCheckingByToken_WhenGetAllTheAddressBookInfo_shouldReturnStatus=200AndSuccess=true", done => {
        chai
            .request(server)
            .get("/getalladdressBookInfo")
            .set('Authorization', 'bearar ' + token)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true)
                res.body.should.have.property('message').eq("Retrived all the address book info")
                res.body.should.have.property('data')
                done();
            });
    });

    it("givenInvalidAddNewAddressBookInfoCheckingByToken_WhenGetAllTheAddressBookInfo_shouldReturnStatus=400AndSuccess=false", done => {
        chai
            .request(server)
            .get("/getalladdressBookInfo")
            .set('Authorization', 'bearar ' + token.slice(10))
            .end((error, res) => {
                res.should.have.status(400);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message').eq("Invalid token");
                done();
            });
    });

    it("givenInvalidAddNewAddressBookInfoCheckingByToken_WhenGetAllTheAddressBookInfo_shouldReturnStatus=401AndSuccess=false", done => {
        var emptyToken = '';
        chai
            .request(server)
            .get("/getalladdressBookInfo")
            .set('Authorization', emptyToken)
            .end((error, res) => {
                res.should.have.status(401);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message').eq("Access denied! unauthorized user")
                done();
            });
    });
});
