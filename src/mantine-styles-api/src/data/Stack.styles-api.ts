import type { StackFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const StackStylesApi: StylesApiData<StackFactory> = {
  selectors: {
    root: 'Root element',
  },

  params: ['align', 'gap', 'justify'],

  vars: {
    '--stack-align': 'Controls align-items property',
    '--stack-justify': 'Controls justify-content property',
    '--stack-gap': 'Controls gap property',
  },
};