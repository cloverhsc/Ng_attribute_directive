import { MyProj2Page } from './app.po';

describe('my-proj2 App', function() {
  let page: MyProj2Page;

  beforeEach(() => {
    page = new MyProj2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
