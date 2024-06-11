import { render, screen } from '@testing-library/react';
import { SettingsProvider, useSettings } from './index';
import React from 'react';

const TestComponent = () => {
  const { itemsPerPage, hideCompleted, sortWord } = useSettings();
  return (
    <div>
      <p>Items per page: {itemsPerPage}</p>
      <p>Hide completed: {hideCompleted.toString()}</p>
      <p>Sort word: {sortWord}</p>
    </div>
  );
};

describe('SettingsContext Tests', () => {
  test('provides default settings', () => {
    render(
      <SettingsProvider>
        <TestComponent />
      </SettingsProvider>
    );

    expect(screen.getByText('Items per page: 3')).toBeInTheDocument();
    expect(screen.getByText('Hide completed: true')).toBeInTheDocument();
    expect(screen.getByText('Sort word: difficulty')).toBeInTheDocument();
  });
});
