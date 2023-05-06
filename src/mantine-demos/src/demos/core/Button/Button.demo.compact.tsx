import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group } from '@mantine/core';

const code = (props: any) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button size="${props.size}">Regular ${props.size}</Button>
      <Button size="compact-${props.size}">Compact ${props.size}</Button>
    </Group>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Group>
      <Button size={props.size}>Regular {props.size}</Button>
      <Button size={`compact-${props.size}`}>Compact {props.size}</Button>
    </Group>
  );
}

export const compact: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'md', libraryValue: '__none__' }],
};
