import { ReferenceType } from '@floating-ui/react';
import { createSafeContext, MantineShadow, Styles, ClassNames, MantineRadius } from '../../core';
import { FloatingPosition, ArrowPosition } from '../Floating';
import { TransitionOverride } from '../Transition';
import { PortalProps } from '../Portal';
import { PopoverWidth, PopoverStylesNames } from './Popover.types';

interface PopoverContext {
  x: number;
  y: number;
  arrowX: number;
  arrowY: number;
  arrowRef: React.RefObject<HTMLDivElement>;
  opened: boolean;
  transitionProps?: TransitionOverride;
  reference: (node: ReferenceType) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  trapFocus: boolean;
  placement: FloatingPosition;
  withinPortal: boolean;
  portalProps?: PortalProps;
  closeOnEscape: boolean;
  zIndex: React.CSSProperties['zIndex'];
  radius?: MantineRadius | (string & {}) | number;
  shadow?: MantineShadow | (string & {});
  onClose?(): void;
  getDropdownId(): string;
  getTargetId(): string;
  controlled: boolean;
  onToggle(): void;
  withRoles: boolean;
  targetProps: Record<string, any>;
  disabled: boolean;
  returnFocus: boolean;
  classNames: ClassNames<PopoverStylesNames>;
  styles: Styles<PopoverStylesNames>;
  unstyled: boolean;
  __staticSelector: string;
  variant: string;
  keepMounted: boolean;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  'Popover component was not found in the tree'
);