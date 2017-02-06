import { FireMVCPage } from './app.po';

describe('fire-mvc App', function() {
  let page: FireMVCPage;

  beforeEach(() => {
    page = new FireMVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
