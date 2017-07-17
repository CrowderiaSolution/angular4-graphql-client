import { AngularSampleProjectPage } from './app.po';

describe('angular-sample-project App', () => {
  let page: AngularSampleProjectPage;

  beforeEach(() => {
    page = new AngularSampleProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
