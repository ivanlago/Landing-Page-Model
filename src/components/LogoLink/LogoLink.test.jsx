import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Ola Mundo" />);
    const heading = screen.getByRole('heading', { name: 'Ola Mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Ola Mundo" srcImg="image.jpg" />);
    const heading = screen.getByRole('heading', { name: 'Ola Mundo' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
  });
  it('should render snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Ola Mundo" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
