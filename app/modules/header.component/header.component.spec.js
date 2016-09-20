"use strict";
var header_component_1 = require("./header.component");
var date_service_mock_1 = require("../../services/date.service/date.service.mock");
describe('MyList Tests', function () {
    var dateservice = new date_service_mock_1.MockDateService();
    var header = new header_component_1.HeaderComponent(dateservice);
    it('Header should contain welcome message', function () {
        header.ngOnInit();
        expect(header.welcomeText).toBe('Hello there!');
    });
    it('Header should contain the correct datestring', function () {
        header.ngOnInit();
        expect(header.dateText).toBe('Friday, January 1, 2016');
    });
});
//# sourceMappingURL=header.component.spec.js.map