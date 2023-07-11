import React from 'react';
import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

const options = [
  { value: 're', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'vu', label: 'Vue' },
  { value: 'sv', label: 'Svelte' },
  {
    group: 'backend',
    items: [
      { value: 'no', label: 'Node' },
      { value: 'ex', label: 'Express' },
    ],
  },

  {
    group: 'python',
    items: [
      { value: 'dj', label: 'Django' },
      { value: 'fl', label: 'Flask' },
    ],
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Test" placeholder="Test autocomplete" data={options} dropdownOpened />
    </div>
  );
}

export function EmptyData() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Test" placeholder="Test autocomplete" data={[]} dropdownOpened />
    </div>
  );
}

export function StylesBasedOnProps() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={options}
        dropdownOpened
        styles={(_, { label }) => ({
          dropdown: {
            backgroundColor: !label ? 'pink' : 'orange',
          },
        })}
      />
    </div>
  );
}

export function OptionWithOverflow() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={[
          'Large option that will overflow its container and should have a line break',
          'LargeOptionsWithoutLineBreaksThatWillOverflowItsContainerAndShouldHaveALineBreak',
        ]}
        dropdownOpened
      />
    </div>
  );
}

export function WithoutScrollArea() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={options}
        withScrollArea={false}
      />
    </div>
  );
}

export function CustomMaxHeight() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={options}
        maxDropdownHeight={100}
      />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="React only autocomplete"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        readOnly
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Disabled autocomplete"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        disabled
      />

      <fieldset disabled>
        <Autocomplete
          label="Test"
          placeholder="Disabled within fieldset"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          disabled
        />
      </fieldset>
    </div>
  );
}