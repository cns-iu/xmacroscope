import { IconDefinition } from './icon-registry.model';
import XAxisSvg from './inline-svg/x-axis.svg';
import YAxisSvg from './inline-svg/y-axis.svg';

/**
 * Icon definition where url and html are strings instead of SafeResourceUrl or SafeHtml.
 */
export type DefaultIconDefinition = Omit<IconDefinition, 'url' | 'html'> & {
  url?: string,
  html?: string
};

/**
 * Icons that should be registered at startup.
 */
export const defaultIcons: DefaultIconDefinition[] = [
  { name: 'x-axis', html: XAxisSvg },
  { name: 'y-axis', html: YAxisSvg }

  // Add additional icons that should be loaded on startup here!
];
