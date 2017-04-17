import { Homeui2Page } from './app.po';

describe('homeui2 App', () => {
  let page: Homeui2Page;

  beforeEach(() => {
    page = new Homeui2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
