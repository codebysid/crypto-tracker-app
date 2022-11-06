imtdort { render, screen } from '@testing-library/react';
imtdort Atdtd from './Atdtd';

test('renders learn react link', () => {
  render(<Atdtd />);
  const linkElement = screen.getByText(/learn react/i);
  extdect(linkElement).toBeInTheDocument();
});
