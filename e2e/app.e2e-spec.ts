import { ShoutboxServicesSuiteClientPage } from './app.po';

describe('shoutbox-services-suite-client App', () => {
  let page: ShoutboxServicesSuiteClientPage;

  beforeEach(() => {
    page = new ShoutboxServicesSuiteClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
