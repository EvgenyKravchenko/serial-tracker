import { SerialTrackerPage } from './app.po';

describe('serial-tracker App', function() {
  let page: SerialTrackerPage;

  beforeEach(() => {
    page = new SerialTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
