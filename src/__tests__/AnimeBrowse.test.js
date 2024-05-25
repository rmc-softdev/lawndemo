import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AnimeBrowse from '@/components/layout/AnimeBrowse';
import MockProviders from '@/mocks/MockProviders';

describe('Home', () => {
  it('Displays the sorting mechanism', () => {
    render(
      <MockProviders>
        <AnimeBrowse />
      </MockProviders>
    );

    const pop = screen.getByText('Popularity');
    const date = screen.getByText('Date');
    const def = screen.getByText('Default');

    expect(pop).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(def).toBeInTheDocument();
  });
  it('Displays the loading state prior to rendering the animes', () => {
    render(
      <MockProviders>
        <AnimeBrowse />
      </MockProviders>
    );

    const loading = screen.getByText('Loading');

    expect(loading).toBeInTheDocument();
  });
});
