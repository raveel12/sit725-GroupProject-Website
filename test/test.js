const expect = require("fix-esm").require("chai").expect;
const request = require('request');
console.log("TESTING HAS BEGUN");
describe('GET /listings', () => {
    it('returns true if response status is 200', (done) => {
        request.get('http://localhost:3000/listings', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if body status code is 200', (done) => {
        request.get('http://localhost:3000/listings', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if data is not null', (done) => {
        request.get('http://localhost:3000/listings', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.data).to.be.not.a('null');
            done();
        });
    });
    it('returns true if data is an array of listings data', (done) => {
        request.get('http://localhost:3000/listings', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.data).to.be.an('array');
            done();
        });
    });
    it('returns true if get message is "Get All Listings Successful!', (done) => {
        request.get('http://localhost:3000/listings', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.message).to.equal('Get All Listings Successful!');
            done();
        });
    });
});

describe('POST /listings', () => {
    it('return true if response and body statusCode are 200', (done) => {
        const listingData = {
            description: 'This is a test description that checks post request using mocha-chai-request',
            ono: '9999999999',
            price: '200000',
            oname: 'Mr. Test Subject',
            oage: '36',
            hno: '7',
            street: 'Test Street',
            suburb: 'Test Suburb',
            state: 'Test State',
            acode: '9999',
            path: './images/test.jpg',
        };
        request.post({
            url: 'http://localhost:3000/listings',
            body: JSON.stringify(listingData),
            headers: {
                'Content-Type': 'application/json'
            }
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            const Body = JSON.parse(body);
            expect(Body.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if post message is "Post a Listing Successful!', (done) => {
        request.post('http://localhost:3000/listings', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.message).to.equal('Post a Listing Successful!');
            done();
        });
    });
});