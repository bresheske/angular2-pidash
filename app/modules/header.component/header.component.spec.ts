import {HeaderComponent} from "./header.component";
import {MockDateService} from "../../services/date.service/date.service.mock"

describe('MyList Tests', () => {
    let dateservice:MockDateService = new MockDateService();
    let header:HeaderComponent = new HeaderComponent(dateservice);

    it('Header should contain welcome message', () => {
        header.ngOnInit();
        expect(header.welcomeText).toBe('Hello there!');
    });

    it('Header should contain the correct datestring', () => {
        header.ngOnInit();
        expect(header.dateText).toBe('Friday, January 1, 2016');
    });
});
