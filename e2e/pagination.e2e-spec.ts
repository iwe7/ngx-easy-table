import { AppPage } from './app.po';

describe('table pagination', () => {
  const page: AppPage = new AppPage();
  let data;

  beforeEach(() => {
    page.refresh();
    data = page.getTable();
  });
  it('should display 10 rows when default configuration', async () => {
    const table = await data.getText();
    expect(table.length).toEqual(10);
    const row = await data.get(0).getText();
    expect(row).toEqual('+1 (882) 527-2652\n' +
      '25\n' +
      'GYNKO\n' +
      'Gordon Rutledge\n' +
      'false');
  });
  it('should pagination NEXT button show next 10 elements', async () => {
    await page.clickPaginationNext();
    const row = await data.get(0).getText();
    expect(row).toEqual('+1 (902) 500-3665\n' +
      '28\n' +
      'CALCULA\n' +
      'Wilson Hatfield\n' +
      'true');
  });
  it('should pagination PREV button show previous 10 elements', async () => {
    await page.clickPaginationPrev();
    const row = await data.get(0).getText();
    expect(row).toEqual('+1 (882) 527-2652\n' +
      '25\n' +
      'GYNKO\n' +
      'Gordon Rutledge\n' +
      'false');
  });
  it('should display 10 rows from 2 page, when pagination "2" clicked', async () => {
    await page.clickPagination2nd();
    const table = await data.getText();
    expect(table.length).toEqual(10);
    const row = await data.get(0).getText();
    expect(row).toEqual('+1 (902) 500-3665\n' +
      '28\n' +
      'CALCULA\n' +
      'Wilson Hatfield\n' +
      'true');
  });
  xit('should display 5 rows when row amount clicked to 5', async () => {
    await page.click5Rows();
    const table = await data.getText();
    expect(table.length).toEqual(5);
  });
  xit('should display 10 rows when row amount clicked to 10', async () => {
    await page.click10Rows();
    const table = await data.getText();
    expect(table.length).toEqual(10);
  });
  xit('should display 25 rows when row amount clicked to 25', async () => {
    await page.click25Rows();
    const table = await data.getText();
    expect(table.length).toEqual(25);
  });
  xit('should display 40 rows when row amount clicked to 50', async () => {
    await page.click50Rows();
    const table = await data.getText();
    expect(table.length).toEqual(40); // 40 because array has only 40 elements
  });
});
