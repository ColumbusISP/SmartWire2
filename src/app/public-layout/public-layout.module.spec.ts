import { PublicLayoutModule } from './public-layout.module';

describe('LayoutModule', () => {
    let layoutModule: PublicLayoutModule;

    beforeEach(() => {
        layoutModule = new PublicLayoutModule();
    });

    it('should create an instance', () => {
        expect(layoutModule).toBeTruthy();
    });
});
