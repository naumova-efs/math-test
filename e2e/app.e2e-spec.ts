import { MathTestPage } from './app.po';

describe('math-test App', function() {
  let page: MathTestPage;

  beforeEach(() => {
    page = new MathTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
