const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/index')

chai.use(chaiHttp);
chai.should();
describe("Bookmarks", () => {
    describe("GET /bookmark/", () => {
        const id = 1;
        it("should add a bookmark", (done) => {
             chai.request(app)
                 .get(`/bookmark/add/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     res.body.should.eql(['1']);
                     done();
                  });
         });
        it("should delete a bookmark", (done) => {
             chai.request(app)
                 .get(`/bookmark/delete/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     res.body.should.eql([]);
                     done();
                  });
         });
    });
});