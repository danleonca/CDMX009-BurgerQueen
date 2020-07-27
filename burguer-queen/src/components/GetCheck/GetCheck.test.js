import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GetCheck from './GetCheck';
import { showInfoTables } from "../../controllers";

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders learn react link',async () => {
    const history = createMemoryHistory();
    const route = '/roles/piso/FCKFCS5LrLkKGMbQ8UCp';
    history.push(route);

    const { getByRole, getByTestId } = render(
      <Router history={history}>
        <GetCheck />
      </Router>
    );
    const btnCheck= getByTestId("btnCheck")
    fireEvent.click(btnCheck)
    await waitForElement(() => getByTestId("modalCheck"));
  const check = getByRole("modal");
    expect(check).toBeInTheDocument();
  });