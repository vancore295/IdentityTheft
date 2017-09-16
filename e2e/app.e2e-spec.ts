import { IdentityTheftPage } from './app.po';

describe('identity-theft App', () => {
  let page: IdentityTheftPage;

  beforeEach(() => {
    page = new IdentityTheftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
