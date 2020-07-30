import React from 'react';
import { render,waitForElement } from '@testing-library/react';
import GetCheck from './GetCheck';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'FCKFCS5LrLkKGMbQ8UCp',
  }),
}));

test('renders learn react link', async () => {
  const { getByTestId } = render(<GetCheck />);
  await waitForElement(() => getByTestId("modalCheck"));
  const check = getByTestId("modalCheck");
  expect(check).toBeInTheDocument();
});