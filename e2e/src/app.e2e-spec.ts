import { AppPage } from './app.po';

describe('SmartWire App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SB Admin BS4 Angular7');
  });
});
