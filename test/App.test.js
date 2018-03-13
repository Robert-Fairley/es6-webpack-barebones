const jsdom = require('jsdom');
const Home  = require('../src/App').Home;

const { JSDOM } = jsdom;

describe('Application', function() {
    const dom      = new JSDOM(`<!DOCTYPE html><main id="root"></main>`);
    const document = dom.window.document;
    const APP_ROOT = document.querySelector('#root');
    const H = new Home();

    global.document = document;
    global.window   = document.defaultView;

    it('#render()', function() {
        it('should render without crashing', function(done) {
            try {
                APP_ROOT.appendChild(H.render());
                done();
            } catch(err) {
                done(err);
            }
        });
    });

    it('#increaseCount()', function() {
        it('should increase the count state by 1', function(done) {
            let countState = H.state.count;

            countState.should.equal(0);
            H.increaseCount();
            countState.should.equal(1);
        });
    })

    it('#decreaseCount()', function() {
        it('should decrease the count state by 1', function(done) {
            let countState = H.state.count = 1;

            countState.should.equal(1);
            H.decreaseCount();
            countState.should.equal(0);
        });
    });
});
