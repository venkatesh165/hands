// src/utils/test-utils.js
import { render as rtlRender } from '@testing-library/react';

function render(ui, options) {
  return rtlRender(ui, {
    ...options,
  });
}

export * from '@testing-library/react'; // Re-export all RTL methods
export { render };
