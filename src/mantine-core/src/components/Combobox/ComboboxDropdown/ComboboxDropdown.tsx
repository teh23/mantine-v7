import React from 'react';
import { factory, useProps, Factory } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxDropdownStylesNames = 'dropdown';

export interface ComboboxDropdownProps extends PopoverDropdownProps {
  /** Determines whether the dropdown should be hidden, for example, when there are no options to display */
  hidden?: boolean;
}

export type ComboboxDropdownFactory = Factory<{
  props: ComboboxDropdownProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxDropdownStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxDropdownProps> = {};

export const ComboboxDropdown = factory<ComboboxDropdownFactory>((props, ref) => {
  const ctx = useComboboxContext();
  const { classNames, styles, className, style, hidden, ...others } = useProps(
    'ComboboxDropdown',
    defaultProps,
    props
  );

  return (
    <Popover.Dropdown
      {...others}
      ref={ref}
      {...others}
      role="presentation"
      tabIndex={-1}
      data-hidden={hidden || undefined}
      {...ctx.getStyles('dropdown', { className, style, classNames, styles })}
    />
  );
});

ComboboxDropdown.classes = classes;
ComboboxDropdown.displayName = '@mantine/core/ComboboxDropdown';
