export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'sections.section-two-columns') {
      mapSectionTwoColumns(section);
    }
    if (section.__component === 'sections.section-content') {
      mapSectionContent(section);
    }
    if (section.__component === 'sections.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (text_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'sections.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((txt) => {
      const { title = '', descrption: description = '' } = txt;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'sections.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const { image: { url: srcImg = '', alternativeText: altText = '' } = '' } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
