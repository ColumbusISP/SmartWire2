
import { SharedComponentModule } from './shared-component.module';

describe('PageHeaderModule', () => {
  let pageHeaderModule: SharedComponentModule;

  beforeEach(() => {
    pageHeaderModule = new SharedComponentModule();
  });

  it('should create an instance', () => {
    expect(pageHeaderModule).toBeTruthy();
  });
});
