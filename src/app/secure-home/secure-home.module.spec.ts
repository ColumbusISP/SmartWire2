import { SecureHomeModule } from './secure-home.module';

describe('LayoutModule', () => {
    let layoutModule: SecureHomeModule;

    beforeEach(() => {
        layoutModule = new SecureHomeModule();
    });

    it('should create an instance', () => {
        expect(layoutModule).toBeTruthy();
    });
});
