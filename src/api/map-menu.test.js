import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map-menu to match keys an values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Pages',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'intro',
          url: '#intro',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid_one',
          url: '#grid_one',
        },
      ],

      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Pages');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
    expect(menu.links[0].newTab).toBe(false);
  });

  it('should return an ampty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should mao links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {},
    ]);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
    expect(links[0].newTab).toBe(false);
  });
});
