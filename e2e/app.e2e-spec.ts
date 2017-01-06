import { DaxxTechnicalTestPage } from './app.po';

describe('daxx-technical-test App', function() {
  let page: DaxxTechnicalTestPage;

  beforeEach(() => {
    page = new DaxxTechnicalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
