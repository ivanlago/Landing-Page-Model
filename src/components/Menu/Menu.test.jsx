import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    /* expect(screen.getByRole('navigation', { name: 'Main Menu' })).toBeInTheDocument(); */

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button open and close menu', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);
  });
});
