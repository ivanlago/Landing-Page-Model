import { DataSaverOn } from '@styled-icons/material-outlined';
import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from './map-sections';
import pagesFakeData from './dados.json';
describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    //expect(data[0].component).toBe('section.section-two-columns');
  });
  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([{ __component: 'section.section-grid' }]);
    expect(WithNoComponent).toEqual([{}]);
  });
  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map-section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map-section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'sections.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        alternativeText: 'Desenho de pessoas segurando as logos do CSS JS e HTML5',
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('sections.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('January brings us Firefox 85');
  });

  it('should map section content', () => {
    const data = mapSectionContent();
    expect(data.title).toBe('');
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'sections.section-content',
      title: 'news coverage and some surprises',
      content: '<p>Html test</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>Html test</p>');
  });

  it('should map section text grid ', () => {
    const data = mapTextGrid();
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map section text grid with data ', () => {
    const data = mapTextGrid({
      __component: 'sections.section-grid',
      description: 'Atque doloribus nobis laudantium esse u',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          descrption: 'abc',
        },
        {
          title: 'Teste 2',
          descrption: 'def',
        },
        {
          title: 'Teste 3',
          descrption: 'ghi',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('Atque doloribus nobis laudantium esse u');
    expect(data.background).toBe(true);
    expect(data.component).toBe('sections.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].descrption).toBe('abc');
  });

  it('should map section image Grid ', () => {
    const data = mapImageGrid(undefined);
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
        {
          image: {
            alternativeText: 'Um livro grande aberto',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Imagem do topo de uma cidade grande',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
