import { IconDefinition } from './icon-registry.model';

/**
 * Icon definition where url and html are strings instead of SafeResourceUrl or SafeHtml.
 */
export type DefaultIconDefinition = Pick<IconDefinition, 'name' | 'namespace'> & {
  url?: string,
  html?: string
};

/**
 * Icons that should be registered at startup.
 */
export const defaultIcons: DefaultIconDefinition[] = [
  // ts-lint:disable:max-line-length
  {
    namespace: 'opponent', name: 'cheetah',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:none;}</style></defs><title>ico-cheetah3</title><g id="Layer_3" data-name="Layer 3"><rect class="cls-1" width="48" height="48"/></g><g id="Layer_1" data-name="Layer 1"><path d="M47,18c0,.58-1.12,1.59-1.28,1.68s-2.6-.78-3.1-.56S39,21.05,38.29,22.26s1.65,7.88,1.88,8.49,1.47,3.94,2.26,4.15,1.29.11,1.27.74-2.64,1.36-3-.08c-.63-2.58-3-5.14-4.67-8.17-.83-1.47-1.32-2.61-1.32-2.61a34,34,0,0,0-3.07,3.48,58.23,58.23,0,0,0-2.46,5.44s-.22,1.26,0,1.61,1.1.24,1,.82-.91.78-1.46.7-1.06,0-1.34-.9.53-5.8.65-6.61a18,18,0,0,1,1.17-3.05,6.81,6.81,0,0,1-3.47-.16,45,45,0,0,1-4.93-1.77,10.59,10.59,0,0,1-.41,2.55C19.93,28.59,19,30.5,19,31a9.66,9.66,0,0,0,1.26,3.87c.41.5,1.31.54,1.2,1s-.45.74-1.11.73-1.61.24-1.82-1-2.09-3.94-2.16-4.42.55-1.45,0-3a8.62,8.62,0,0,1-.53-2.6A27.6,27.6,0,0,1,13.77,28c-1.2,1.26-2,1.1-2.81,3.4a7.93,7.93,0,0,0,.36,4.7c.24.48,1.42.23,1.37.91s-2.09.54-2.09.54a2.26,2.26,0,0,1-.76-.62,16.56,16.56,0,0,0-1.61-5c-.07-.16.08-.78,0-.94a9.18,9.18,0,0,1-5.76,5.57,1.17,1.17,0,0,1-1.41-.46c-.35-.45.68-1,.68-1a8.89,8.89,0,0,0,3.39-2.24,11.82,11.82,0,0,0,2.47-5.56c.27-2.35-.17-7.94,3.32-10.08,2.82-1.72,3-1.43,6.18-1.72,4.19-.39,12.12,2.1,14.8.76,4.05-2.5,9.46-2.44,9.46-2.44s0-.31.43-.31a.54.54,0,0,1,.53.26c2.45.15,3.65,1.27,4,2a.89.89,0,0,1,0,.82A3.23,3.23,0,0,1,47,18Z"/></g></svg>'
  },
  {
    namespace: 'opponent', name: 'squirrel',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:none;}</style></defs><title>ico-squirrel3</title><g id="Layer_3" data-name="Layer 3"><rect class="cls-1" width="48" height="48"/></g><g id="Layer_5" data-name="Layer 5"><path d="M10.38,21.18c-1.49-1.12.83-8.74,7.94-9.55,6.88-.79,6.93,4.38,6.1,6.71-.94,2.66-4.2,5.79-3.51,5.63s4.11-2.58,7-2.41c1.54.09,4.69-2.41,4.69-2.41s1-1.51,1.32-1.18.17,1.36.36,1.69,2.6,1.63,3.16,2.57a3.4,3.4,0,0,1,.31,2.1,3.66,3.66,0,0,1,.21,1.54c-.25,1.1-3.43.24-3.43.24s-3.69,1.53-3.23,1.8a8.64,8.64,0,0,0,3.18.31c.65-.11.72-.06,1,.38s.43,1.24,0,1.55a.71.71,0,0,1-.25.11,1.89,1.89,0,0,1-1.52-.08,2.34,2.34,0,0,0-1.61,0c-.1.05-1,.17-2.09.37-.8.15-1.52-.58-1.84-.75-.1-.05-.52.21-.43.29a3,3,0,0,1,1,2.7c-.16,1.28-1.1,1.66-.78,1.8s1.65-.34,2.27.14,1.53.8.72,1.07a17,17,0,0,1-3.31.17s2.63.72,3,1.24l0,.08c.15.19.5.63.42.71s-.1-.1-.37-.34c0,.05.37.53.29.57s-.42-.32-.46-.28c.22.22.45.68.38.73s-.36-.36-.67-.48c0,0,.44.82.33.79s-.57-.67-.79-.51c.21.34.46,1,.38,1s-.17-.48-.78-.79c-.14,0-.89.11-1,.08a4.08,4.08,0,0,1-.61-.17c-.15,0-.2,0,0,0h0c-.67-.24-1.11-.73-1.72-.73l-4.48,0c-1.81,0-4.68-3.28-4.68-3.28a8.53,8.53,0,0,1-2-6.28c.26-5,9-8.69,5-10S15.05,24.7,10.38,21.18Z"/></g></svg>'
  },
  {
    namespace: 'opponent', name: 'turtle',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:none;}</style></defs><title>ico-turtle2</title><g id="Layer_3" data-name="Layer 3"><rect class="cls-1" width="48" height="48"/></g><g id="Layer_4" data-name="Layer 4"><path d="M4.93,33.34c-.13-.25-.57-.59-.38-1.15S6,29.26,7.35,29.36c.88.06,1.39-1.18,1.39-1.18s-1.95-2-2.18-2.34a6.8,6.8,0,0,1-.65-1.09c-.1-.28,1-.44,1.67-.94A22.64,22.64,0,0,0,10,20.47a14,14,0,0,1,3-3.33c1.84-1.45,4.11-1.85,5-2.23a9,9,0,0,1,4-.22c.88.22,1.49-.18,2.46-.22a8.42,8.42,0,0,1,2.45.57,19.91,19.91,0,0,1,3.28.55c1.3.41,6,4,6.19,4.18s.26-.24,1.23.17c.81,0,3.71-1.6,4.64-1.06a3.83,3.83,0,0,1,1.29,3.47c-.06.25-.35-.45-.37-.12-.07,1.9-2.85,1.79-1.94,3.19a6.8,6.8,0,0,1,1.18,2.49c-.25.94-.17,1.62-.3,1.95s-.15.88-.27.91-.12-.19-.15-.41c-.18.1-.19,0-.47.17-.07.3-.2.72-.32.72s-.07-.29-.12-.5c-.2.09-.4.17-.58.23-.25.39-.76,1.05-1,.69-.05-.07.22-.33.37-.65-.41-.38-.94-3.05-1.43-2.79a24.56,24.56,0,0,1-4.47,2.55c-2.53,1.06-5.37-.11-5.7,0S27.35,32,27,32.16a1.13,1.13,0,0,1,.47.15,3.49,3.49,0,0,1,.73,1.8h0A5.6,5.6,0,0,1,28,35.52c-.11.12-.28-.64-.34-1H27.6a5.44,5.44,0,0,1-.17.7c-.08.23-.27-.46-.35-.78l-.17,0a1.56,1.56,0,0,1-.46.59c-.17.08-.09-.41,0-.66a7.59,7.59,0,0,1-2.36-.52c-.68-.39-.19-2.94-.88-3.06s-3.63-.06-7.28-.18-2.72,0-3.72-.14-2,1.71-3.92,1.61c-1.35-.06-.57,2.3-1.36,2.41-.15.3,0,.8-.22.72s-.21-.52-.23-.79a1.35,1.35,0,0,1-.35-.21c-.27.18-.64.79-.84.79s.13-.94.28-1.34c0,0-.24.14-.28.1s-.4.39-.57.34S4.79,33.59,4.93,33.34Z"/></g></svg>'
  },

  {
    namespace: 'visualization', name: 'table',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><rect width="21.98" height="5.81" rx="1.52"/><path d="M0 4.24h1V22H0zM21 3.32h1V22h-1zM16 0h1v22h-1zM10 0h1v22h-1z"/><path d="M22 20.99v1H0v-1zM22 16.99v1H0v-1zM22 12.99v1H0v-1zM22 8.99v1H0v-1zM22 4.99v1H0v-1z"/></svg>'
  },
  {
    namespace: 'visualization', name: 'scatter-graph',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><style>.sg-cls-1{fill:currentColor}</style></defs><path class="sg-cls-1" d="M0 0h2v22H0z"/><path class="sg-cls-1" transform="rotate(90 11.995 20.995)" d="M11 10.99h2v22h-2z"/><circle class="sg-cls-1" cx="8.24" cy="11.73" r="2.5"/><circle class="sg-cls-1" cx="14.46" cy="13.07" r="2"/><circle class="sg-cls-1" cx="17.74" cy="10.34" r=".89"/><circle class="sg-cls-1" cx="10" cy="6.51" r="1"/><circle class="sg-cls-1" cx="18.62" cy="4.51" r="1"/><circle class="sg-cls-1" cx="13.69" cy="8.39" r=".89"/><circle class="sg-cls-1" cx="4.02" cy="17.85" r="1"/><circle class="sg-cls-1" cx="8.24" cy="15.6" r=".89"/><circle class="sg-cls-1" cx="20.39" cy="1" r="1"/><circle class="sg-cls-1" cx="20.73" cy="7.51" r="1"/><circle class="sg-cls-1" cx="14.1" cy="4.14" r="2"/></svg>'

  },
  {
    namespace: 'visualization', name: 'geomap',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.83"><path d="M15.91 11.34h-2.06v1h1.06l4.08 7.49H3l4-7.41 1.09-.08.08-.92H6L0 21.83h21.99l-6.08-10.49z"/><path d="M15.71 4.7a4.7 4.7 0 1 0-9 1.79l4.3 9.17 4.35-9.17a4.69 4.69 0 0 0 .35-1.79zm-4.7-2.45A2.45 2.45 0 1 1 8.56 4.7a2.45 2.45 0 0 1 2.45-2.45z"/></svg>'
  },

  {
    namespace: 'label', name: 'x-axis',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.72 29.57"><g><path d="M4 7.54v18.25" stroke="#bdbdbd" stroke-dasharray="3 3" fill="none" stroke-width="3"/><path fill="#bdbdbd" d="M4 0L2 3 0 6h8L6 3 4 0z"/></g><g ><path d="M25.98 25.58H2.52" stroke="currentColor" fill="none" stroke-width="3"/><path d="M29.72 25.57l-3-2-3-2v8l3-2 3-2z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'y-axis',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.57 29.72"><g><path d="M6.79 25.72h18.24" stroke-width="3" fill="#9d9d9d" stroke="#bdbdbd" stroke-dasharray="3 3"/><path fill="#bdbdbd" d="M29.57 25.72l-3 2-3 2v-8l3 2 3 2z"/></g><g ><path d="M4 27.2V3.74" fill="none" stroke="currentColor" stroke-width="3"/><path d="M4 0l2 3 2 3H0l2-3 2-3z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'size',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.size-st1{fill:#fff;}.size-st2{fill:none;stroke:currentColor}</style><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1683 -366)"><g transform="translate(1683 366)"><circle class="size-st1" cx="16" cy="16" r="15"/><circle class="size-st2" cx="16" cy="16" r="14.5"/></g><g transform="translate(1689 378)"><circle class="size-st1" cx="10" cy="9.6" r="9.4"/><circle class="size-st2" cx="10" cy="9.6" r="8.9"/></g><g transform="translate(1694 388)"><circle class="size-st1" cx="5" cy="4.3" r="4.7"/><circle class="size-st2" cx="5" cy="4.3" r="4.2"/></g></g></svg>'
  },
  {
    namespace: 'label', name: 'shape',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.shape-st1{fill:currentColor}</style><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1738.966 -439.567)"><ellipse class="shape-st1" cx="1746.9" cy="463.1" rx="7" ry="6.9"/><g transform="translate(1755.25 454.923)"><path class="shape-st1" d="M.8 6.5h13.9V10H.8z"/><path class="shape-st1" d="M6 1.3h3.5v13.9H6z"/></g><path class="shape-st1" d="M1750.2 453.9l6.8-12.8 6.8 12.8h-13.6z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'color',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1206.343 -762.049)"><ellipse cx="1214" cy="785.4" rx="6.6" ry="6.6" fill="currentColor" class="svg-color-ellipse1"/><ellipse cx="1230.7" cy="785.4" rx="6.6" ry="6.6" fill="currentColor" class="svg-color-ellipse2"/><ellipse cx="1223.4" cy="770.7" rx="6.6" ry="6.6" fill="currentColor" class="svg-color-ellipse3"/></g></svg>'
  },

  {
    namespace: 'emoji', name: 'brat',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>brat-cls-4{stroke:currentColor;stroke-miterlimit:10}brat-cls-2{fill:currentColor}brat-cls-4{fill:none;stroke-width:.5px}</style></defs><circle cx="11.5" cy="11.5" r="11" stroke="currentColor" stroke-miterlimit="10" fill="#fff"/><path class=brat-cls-2" d="M9 9.58a4.19 4.19 0 0 0-1.45-.26A5.12 5.12 0 0 0 6 9.58a1.45 1.45 0 0 1 1.5-1.25A1.47 1.47 0 0 1 9 9.58zM12 19a6.33 6.33 0 0 0 6-4 19.69 19.69 0 0 1-6.06.69A18.92 18.92 0 0 1 6 15a6.39 6.39 0 0 0 6 4z" transform="translate(-.5 -.5)"/><path d="M11.5 21.5a2.19 2.19 0 0 1-2.4-2.18V16.5c.78 0 1.6-.38 2.38-.38s1.56.38 2.37.38v2.83a2.24 2.24 0 0 1-2.35 2.17z" stroke-width=".47" stroke="currentColor" stroke-miterlimit="10" fill="#fff"/><path class=brat-cls-4" d="M11.48 16.26v3.26"/><circle class=brat-cls-2" cx="16.03" cy="8.5" r="1"/><circle class=brat-cls-4" cx="16.03" cy="8.5" r="2.32"/></svg>'
  },
  {
    namespace: 'emoji', name: 'cool',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>cool-cls-2{fill:currentColor}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="currentColor" stroke-miterlimit="10"/><path class="cls-2" d="M12 7.87a3.44 3.44 0 0 1-.83-.34A16.19 16.19 0 0 0 2 7.08s.16 3.45 1 4.86 5.38 2 6.68 0 1.09-2.22 1.52-2.69a1 1 0 0 1 1.53 0c.43.47.22.67 1.52 2.69s5.8 1.4 6.68 0S22 7.08 22 7.08a15.8 15.8 0 0 0-9.13.45 3.59 3.59 0 0 1-.87.34zM12 18.5a9 9 0 0 0 4.91-1.78 19.91 19.91 0 0 1-4.91.78 19.8 19.8 0 0 1-4.91-.78A9 9 0 0 0 12 18.5z" transform="translate(-.5 -.5)"/></svg>'
  },
  {
    namespace: 'emoji', name: 'happy',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="currentColor" stroke-miterlimit="10"/><path class=happy-cls-2" d="M12 19c4.64 0 6-3 6-3s-1.9 1.69-6.06 1.69S6 16 6 16s1.38 3 6 3z" transform="translate(-.5 -.5)"/><circle class=happy-cls-2" cx="16.03" cy="8.5" r="1.5"/><circle class=happy-cls-2" cx="7.03" cy="8.5" r="1.5"/></svg>'
  },
  {
    namespace: 'emoji', name: 'silly',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>silly-cls-4{stroke:currentColor;stroke-miterlimit:10}silly-cls-2{fill:currentColor}silly-cls-4{fill:none;stroke-width:.5px}</style></defs><circle cx="11.5" cy="11.5" r="11" stroke="currentColor" stroke-miterlimit="10" fill="#fff"/><path class=silly-cls-2" d="M13.46 18.57a6.35 6.35 0 0 0 4.89-5.34 19.64 19.64 0 0 1-5.72 2.13 18.76 18.76 0 0 1-6 .78 6.38 6.38 0 0 0 6.83 2.43z" transform="translate(-.5 -.5)"/><path d="M9.5 21.5a2.19 2.19 0 0 1-2.4-2.18V16.5c.78 0 1.6-.38 2.38-.38s1.56.38 2.37.38v2.83A2.24 2.24 0 0 1 9.5 21.5z" stroke-width=".47" stroke="currentColor" stroke-miterlimit="10" fill="#fff"/><path class=silly-cls-4" d="M9.48 16.26v3.26"/><circle class=silly-cls-2" cx="15.51" cy="7.33" r="1"/><circle class=silly-cls-4" cx="16.03" cy="8.5" r="2.32"/><circle class=silly-cls-2" cx="7.1" cy="11" r="1"/><circle class=silly-cls-4" cx="7.1" cy="9.82" r="2.32"/></svg>'
  },
  {
    namespace: 'emoji', name: 'surprise',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>surprise-cls-2{fill:currentColor}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="currentColor" stroke-miterlimit="10"/><ellipse class=surprise-cls-2" cx="11.5" cy="16.5" rx="3" ry="4"/><ellipse class=surprise-cls-2" cx="7.01" cy="8.5" rx="1.5" ry="2"/><ellipse class=surprise-cls-2" cx="15.99" cy="8.5" rx="1.5" ry="2"/></svg>'
  },
  {
    namespace: 'emoji', name: 'upsidedown',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>upsidedown-cls-2{fill:currentColor}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="currentColor" stroke-miterlimit="10"/><path class=upsidedown-cls-2" d="M12 5C7.34 5 6 8 6 8s1.85-1.69 6-1.69S18 8 18 8s-1.38-3-6-3z" transform="translate(-.5 -.5)"/><circle class=upsidedown-cls-2" cx="6.97" cy="14.5" r="1.5"/><circle class=upsidedown-cls-2" cx="15.97" cy="14.5" r="1.5"/></svg>'
  },
  {
    namespace: 'emoji', name: 'unknown',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="currentColor" stroke-miterlimit="10"/></svg>'
  },

  {
    namespace: 'map', name: 'us',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 589" stroke-linejoin="round" stroke="currentColor" fill="none"><defs><style>path{fill-rule:evenodd}</style></defs><path d="M956.3 153l-.3-.1v.2h.3zm-2.9-2.6l.7-.3v-.3l-.7.6zm12-7.5v-1.4l-.3-.8.3 2.2zm-42.4-10l-.7.3-5.5 1.6-2 .7-2.2.7-.7.3v.2l.2 5 .3 4.8.3 4.2.5.3 1.8-.5 7.8-2.3.2.5 14-5.4v.2l1.4-.4 4.4-1.8 4.3 5.2.6-.5.3-1.5-.1 2.3h1l.2 1.2.9 1.7 4.6-5.6 3.8 1.3.8-2 6.2-3.3-2.6-5.1.7 3.3-3.2 2.4-3.6.3-7.2-7.7-3.2-4.8 3.2-3.4-3.3-.2-1.3-3.2-.1-.2-5.6 6-12.2 4.1-4 1.3zM558.5 73.8l2 7 4 24.8 2 9.9.6 8.7 2.2 5.3.5 4.4.4 1.5-.1.3-3.9 6.4 2.5 4.3 4.9 34.1.2 4.5 4.8-.3 19.2-1 47.7-4 4.8-.5v-.5l-1.4-7.5-6-3-4.6-4.9-7.3-4.4-2.4-.2-3.6-2.7 1-13.4-3.4-3.1 1.2-5.5 6.2-5.6-1-11.7 2.1-2.5 7.6-8 8.7-11 3.3-2.3 5.8-2.8 6.1-4.6-4 .8-2.5-1.9-9.3 1.3-1.5-1.8-8.3 3.4-6.7-2.8-1.9-2.2-5.3.4-3.6-1.9 1.2-1.3L616 78h-4l-6.6 2.8-1.2-1.9-10.3-1.5-3.5-8.7-.4-2.6-4.5-1.3.4 7.5-11.8.9-14.7.6h-1zM465.7 73l-32.2-2.2-23.4-2.2-23.3-2.7-14.4-2-23.1-3.5-11.6-2-25.8-5-2.7-.5-4.2 19.8 1.9 3.6 1.4 5.5-.9.8 1.9 5 2.5 2.2 7.2 12 .7 2 2.9-.2-3.4 16-1.4.4-1.8 5.3 9.6.7.8 4.4 5.4 13.3 1 .8 3.8 7.8 1-.8 8-.1 10.2 1 2.5-3.2 3 5.4.6.3v-.6l1.5-9.5 33.1 4 26.5 2.6 14 1.2 25 1.4 1.2.1h.3l.1-1.3.3-6.7.4-8.9.1-2.2.2-3.9 1.5-30.5 1.3-23.6.1-4h-1.8z"/><path d="M556.5 73.8l-29.3.6h-20.5l-17.6-.5-20.5-.7-1.1-.1V77l-1.4 23.6-1.5 30.5-.2 3.9 3.8.2 42.8 1.2 39.5-.3 16.4-.5 3.3-.2-.4-1.5-.5-4.4-2.2-5.3-.6-8.7-2-10-4-24.8-2-6.9h-2z"/><path d="M309.1 52.9l-8.6-1.8-2.9-.6-1.2-.3-11.3 50.6.5 4.2-.4 4.4.2 1 .1 1.9 3.3 3.6-4.7 12L274 141l-.3 2.4 2.6 6.3-9.2 38.2-.4 2 2.7.6 27.5 5.5 11 2 2.7.5 2.8.5 14 2.2 25 3.8 2.8.4.4-3.2.9-6.3 3.3-25.3 1.7-12.5.4-3.2-.6-.3-3-5.4-2.5 3.3-10.2-1.1-8 .1-1 .8-3.8-7.8-1-.8-5.4-13.3-.8-4.4-9.6-.7 1.8-5.3 1.4-.4 3.4-16-3 .2-.6-2-7.2-12-2.5-2.2-1.9-5 1-.8-1.5-5.5-1.9-3.6 4.2-19.8h-.1z"/><path d="M192.1 77l.1-1.6-.2.1.1 1.5zm20.7-8.8l.6-1h-.7l.1 1zm-1.8-1.7l.5-2-.5-.2v2.2zm7-2.8v-2l-1.7 2.5 1.7-.5zm.2-4.1l.3-2-.2-.4v2.4zm.3-9.5V49l-.5-.1.5 1.2zm3.1-6.4l-.8-.1-1.8 2.7 2.6-2.6zm-2.4-2.7l.5-.3.1-.3-.6.6zm-.5.3l-.3-2-.8 1.7 1.1.3zm-.5-2.7l-.8-.4.6 1 .2-.6zm3 1.7V39l-.3.5.3.8zm.8-1.3l-.4-.3.4.3zm-5.5-2.1l-.5-.4-.2-.1.7.5zm3.6-.4l-2.6.7.6.2 2-1zm-2.1-.2l-.5-.6-.1.1.6.5zm2-1.2h-.4l.5.2-.1-.2zM201 85l3.5 3.8-.6 7.3.7 1.8 5.2 2.8 14.8 1.4.5 1.7 7 .1 6.6 1 10.8-1.3 5.3 1 1.5-.8 27.3 6.3 1.8.3-.2-1 .4-4.3-.5-4.2 11.3-50.6-1.6-.3-22.7-5.4-19.8-5-22.4-6.2-6.7-1.7 1.5 8.5-1.4 2.7-2.6-1.4 2.5 11.8-2.7 3.9-1.3 3.5v3.7l-5.7 4-2.4-1.5-2.4 1.1 4.3-5.5-1 3.8 2.4-2.6 1.9.3-.6-4.8 1.3.2 2.6-5.8-.9-1-3.4 4.5h-2.2l2.4-2.7 2.7-.6-1-5-2.6-.7-1.4-2.3-1.7.9-8.9-4-7.8-6-2.2 5.9-.2 2.5 1.7 4.5-1 14.4-.9 2.3 4.4.4-4.4 3 2.4 1.2-1.9 6.2-.9-4.8-1.6 5.6 2.2 2.7 2.5-.1 2.9 1.7 1.4 2.8h1.8zM372.2 309.9l-32.7-4-17.6-2.6-25-4-2.6-.4v.2l-4.2 18.9-2.3-.1-3.4-3-4.2 3.5-.1 15.5-1.6 3.3v.4l-.2 2.4 3.4 9.1 3 4-5.4 3.3-2.1 4-3.5 8.5-1.8.4v7l3 2.3-1.6 4.3-3.5.2-2 3.8 7 4.3 13.1 7.4 40.8 21.7 34.6 4.2h.3l2.8-28.6.6-7 7.3-75.2.4-3.5-2.5-.3z"/><path d="M206 363.8l.4 2.1v.4l-.4-2.5zm-14.3-8.4l.7 1.5.4-.1-1-1.4zm17-.3l.3 2.6 1.8 1.2-2-3.8zM197 341.4l-1-.3.8.3h.2zm-10.8-3l-2.6 1.6.7.7 2-2.3zm-5-1.8l-.2.8.8.2-.6-1zm8.5 2l4.3 2.4.8-.7-5-1.8zm-33-85.6l-.2.1h.1zm10.3.5l-.1-.3v.4zm56-73.7l-3.8-1-41.5-11.4-15.5-4.6v.3l-.8 9.7-4.1 11.3-6.8 8.5-.2 4.2 3.3 6 1.7 7.7-2.4 6.3.4 6.3-1.2 2.7 4 8.6 2.5 3.3-.1 9.4 6 5.7 3.5-5.8 3.8 3 1.4-1.3-5.2 1-.1 4.9 1 6.2-2.9-2.8-1.6-3.8-.5 5.2 1.3 10.4 5.5 6.7-3.6 4.7.6 5.9 3.9 6 6.8 18.6 2 1.2-.6 13 1 1.5 14.6 5.2 4.5 4.8 1.6 3 4.2 2.5 4.7.9 2 5.3 3.8 1.9 5.8 6.9 5.5 9-.4 8.3 3 4 39.7 3.9 3.5-.2 1.5-4.3-3-2.2.1-7 1.8-.5 3.5-8.5 2.1-4 5.4-3.2-3-4-3.4-9.2.2-2.4v-.1L276 334l-7.8-10.4-15-21.2-21-30-11.8-16.5-11.5-16.5 13.2-56 .9-3.7zM489.6 255.6l.4-19-4.6-.3-23.7-.8-2.4-.1-1.9-.1-28.8-1.9-19.2-1.5-24-2.4-2.3-.3-.3 2.6-5.3 50.5-1.8 17.7-.8 7.7-.2 2.5 3 .3 49 4.3 21.5 1.3 21.4 1h3.1l2 .2h4l2 .2 6.1.2h1.6v-2l1-51.3.1-5.7v-1.9l.1-1.2z"/><path d="M294.8 295.8L305 233l5.2-31.4.5-3.1-2.8-.5-11-2-27.4-5.5-2.7-.6-2.7-.5-13.7-3-24.6-5.9-2.7-.7-.9 3.7-13.2 56 11.5 16.5 11.8 16.4 21 30.1 15 21.2L276 334l2.5 3.4v-.3l1.6-3.3v-15.5l4.3-3.5 3.4 3h2.3l4.2-18.8v-.2l.5-3z"/><path d="M472.5 324.8v-2.6l.1-2.5.1-2.5-3-.1-21.5-1-21.6-1.3-48.9-4.3-3-.3-.4 3.5-7.3 75.1-.6 7.1-2.8 28.6.4.1 13.4 1.3 1.3-6.8 2.4-2 27.2 2.5h.2l-2.4-4.8 12.3.9 30.8 1.8 19.2.8 3.3-91h.7v-2.5z"/><path d="M162.2 162.8l15.5 4.6 41.5 11.5 3.8 1 2.7.6 24.6 5.8 13.7 3 2.7.6.4-2 9.2-38.2-2.6-6.3.3-2.4 10-13.2 4.8-12-3.3-3.5v-1.9l-2-.4-27.2-6.3-1.5.7-5.3-.9-10.8 1.2-6.6-.9h-7l-.5-1.8-14.8-1.4-5.2-2.8-.7-1.8.6-7.3-3.5-3.8-.3.1-.7.5-5-2.5-2.9.8-2-1-2 8.4-1.3 2.4-6 14.6-1.8 8-1 .2-5.7 13.4-3.8 5.7-1.3 1-3.5 6.7-.7 7.2-2.1 6.4 1.2 5.9zM197.8 83l-.3-.9-.1.7.4.2zM352.4 205l-25-3.8-14-2.2-2.8-.5-.5 3-5.2 31.5-10 62.8-.6 3.1 2.6.4 25 4 17.6 2.5 32.7 4.1 2.5.3.2-2.5.8-7.7 1.8-17.7 5.3-50.5.3-2.6-2-.1-24.7-3-3.8-.5 2.4-19 .2-1.2-2.8-.4z"/><path d="M461.4 192.2l.8-15.2 1-20.4v-2.5H462l-25-1.5-14-1.2-26.5-2.5-33.1-4.1-1.4 9.5-.1.6-.4 3.2-1.7 12.5-3.3 25.3-1 6.3-.3 3.2-.2 1.2-2.4 19 3.8.4 24.7 3 2 .2 2.3.3 24 2.4 19.2 1.5 28.8 1.9h2v-2.5l.5-10.2 1-17.7.3-7.6v-2.5l.2-2.6zM690.5 328l-10.5 1.6 4.2-6.8-1.8-3.8-37 3.6-31.2 2.5-4.6.3.6 2.8 3.8 19.6v4.3l1.1 26.4.1 4.4h.3l1.5 1.6 5.8-.1.6 8.5.2 2.4 3-.3 9.2-.7 36.6-3.3h.2l-.1-2.2 1-.7-1.8-3.3 3.7-15.5-1.4-1.7 5.5-6.2-.4-5.2 4-6.8-.1-.3 3.5-3.2-1-3.9 2.7-4.2-.6-4 3-5.6v-.1h-.1zM661.5 197.7l-5.3-2.8-3-4-.9-5.7.8-2.6-2.8-3.4-4.8.4-47.7 4-19.2 1-4.8.4h-2l1.6 10.9-1.4 5.1 2.2 3.2v.7h.7l3 9.2 3 4.8.3 5.4 3.3 4.6-.6 1.9 3 12.2v.3l19.9-.6L628 241l21-2.6 4.7 4.1.2.2.8-.3-.6-3.8 3.5-2.3 1.5-9.9-1.5-.6 1-5 4.3-1 4.8-3.5 2.2-6V207l-3.8-3.7-1.2-2.3-3.7-2.3.2-.5.1-.5zM609 312.7l-2.5-41-4.4-2.6-.4-1.9-3.5-3.1 3.4-4.2-1.3-2.4h-2.5l-2.4-1.6-1-.7-3.2.2-35.9 1.3-16.4.4h-32.6l-13-.2h-3.8v7.5l-1.1 51.3v2h4.1l22.6.4 52.7-.8 37.5-1.8 3.7-.3v-2.5z"/><path d="M653.7 242.4l-4.8-4.1-20.9 2.6-21.2 1.8-20 .6v.6l2.4 4.7 2.3 1.5 2.6 4.7.4.4 1 .7 2.3 1.7 2.5-.1 1.3 2.4-3.4 4.2 3.5 3.1.4 2 4.4 2.5 2.4 41 .1 2.5.2 2.6.1 2.5.2 2.6.1 2.5 4.6-.3 31.2-2.5 37-3.6 1.8 3.8-4.2 6.8 10.5-1.5v-.8l.2-4.5 2-2.4-.6-2.7v-.1l-.2-.1.4-1.3.6.2.3.8-.1.3v.8l.4.1.7-1 .1-.3 2.6-1.6.4-.2.8-8-.2-.3-.3-.1-6.9-5.6 1.1-2-2-5.6-3.4-2.7-6.6-3-4.2-3.3.5-7 1.3-6.5-7 .4-2.2-2.3-1-4.4-11-9.4-3.1-8.6.8-4.3-.2-.2z"/><path d="M572.3 204.7l-3-3-10.6-3.1-3.4-.1-5.1 1.4-6.1-3.9-19.1.2-27.9-.2-32.9-1.1-3-.1v2.5l-.4 7.6-.9 17.7-.5 10.2v2.6h2.3l23.7 1 4.6.1-.4 19v1.3l3.6.1 13.1.2H539l16.4-.4 35.9-1.3 3.3-.2-.4-.4-2.6-4.7-2.3-1.5-2.4-4.7v-.9l-3-12.2.7-2-3.3-4.5-.2-5.4-3-4.8-3.1-9.1-.7-.1-1.9-.2zM609.5 323l-.2-2.7v-2.5l-.3-2.6-3.7.3-37.5 1.8-52.7.8-22.6-.3-4.1-.1h-1.6l-6.1-.2-2-.1-4-.1-2-.1v2.5l-.2 2.5v2.6l-.1 2.6h.5l23.5.6 24.9.3.3 33.1 1.7 5.9 3.9 3.7 4.2.2.8-1.8 5.8 5.2 7.4.8 1.4 1.6 2.7-1.3 6.8 3.2v1.9l2.5-.1 2.7-2.3 4.8 3.1 4.6 1.7 3-4.3 10 4.7 3.7-3 3-1.2 2.4.6 9.1-2.6 4.9 2 4.3 2.8 3.8.7h.1v-4.4l-1.1-26.4-.1-4.3-3.8-19.6-.6-2.8V323z"/><path d="M566.9 135.6l-16.4.5-39.5.3-42.8-1.2-3.8-.2-.1 2.2-.4 8.9-.3 6.7v1.3h-.4v2.5l-1 20.4-.8 15.2-.1 2.6h2.9l33 1.2 27.8.2 19-.1 6.2 3.8 5.1-1.4h3.4l10.6 3.2 3 3 1.9.2v-.7L572 201l1.4-5.1-1.7-10.8 2-.1-.1-4.5-4.9-34.1-2.5-4.3 3.9-6.4.1-.3-3.3.2z"/><path d="M689 469.3l-1.3.3-.5.6 1.8-1zm4 0l-.6-.3-.2.3h.9zm2.4-.8h-.7l-.4.5 1.1-.5zm-1.2-.7l-.2-.3v.3h.2zm7.8-5.1l-.3.2h.5l-.2-.2zm13.6-5.7l.6-.8-.7.9.1-.1zm2-2.6l-.3.1v.1l.2-.2zm-50 8.6l1.5-1.9-4-1-1.7 1.4 4.2 1.5zm40.3-8.5l-.4-.4v.2l.4.2zm1.1-1.7l-1-.3.3 1 .7-.7zm8-1.7v-.3.3zm1.9-1.2l-.1-.1.1.2v-.1zm-.8-.2l-.2-.1v.3l.2-.2zm-6.8-.3l.9-.3v-.3l-.9.6zm.5-.5l.5-.5h-.1l-.4.5zm-3.4-3.6l-.2.2h.1l.1-.2zM672.6 391h-.2l-36.6 3.3-9.2.7-3 .3v2.3l2 18.8 3.2 4.4.1 2.7 3.1 5.4 2.5 8-.8 4.4-.7 11-1.5 3.7h.2l.3 2.5-1.6 2.3 12-1.3 9.4 2.6 6.7.9 3.4-2.5-1.8-2.4 6.2-2-.2 2.2 3.2-.8 2.6 4.1 2.2-.8 5.9 4-3.6 1.3 8.2 2.4h3.1l1.9-2.2 4-2.2 2.8 4.1 2-3.7-.7-5.8 5.3 2 .6 1.8 6.2.8 3 2.5-.3 2 4.4-4-1.7-2.2-7.3-1.8-2.7-1.6v-2.9l3 .4 2.3-4.8-3-4.1-1.7 4-3.8-.7 2.6-4.3-1.7-.5-4.3 3-6.1.4-1.8-1.4 2.9-4.9 3.3-.1 5.6 1.8 4 .4-2.2-2.8-4.2-8.3 1.1-4.7-33.5 3.7 1.3-1.3-1.4-3.5 2-3 1.2-7.5 7.4-12.7-3.6-4.3.2-3.2-2.2-5.3v-.6z"/><path d="M574 537l-4.7-17.6v3.3l4.7 14.2zm-1-31l-3.4 6.3-.4 2 3.7-8.2zm2.5-4.5l3.1-4-2.2 1.3-.9 2.7zm11-9.9l-7.3 3.8 2-.4 5.3-3.4zm1-1.4l2-1.6-.8.2-1.2 1.4zM472.4 327.4l-.7-.1-3.3 91-19.2-.8-30.8-1.8-12.3-.9 2.4 4.8 10.6 10.6 6 7 8 6 5.6 10.3 2.1 10.7 4.6 3 3.6 4 5.1 1.9 7.5 4.7 3.4 1.3 4.6-4.7 1.5-5 2.4-4.7 7.6-3 2.9 1.5 8.4.6 7.7 4.8 5.3 1-1.5 2.7 3 2 2.8 3.3.6 3.6 1.9 2.4 4.2 10.3 4.3 3.6 3.3 5.5 4.2 4.2 1.8.6 1.6 11 4.5 2.6.2 3.5 1.2-.3 8 9.7 4 .9 5 3h7.7l5.7 3.1 6.7-1.5-3-2.8-2.8-8.1-1-7.1-1.6-2.3.7-4.8-2-.2-2.8-4.5 3.1 3.3 3.6-1.2 2-5.2-3.9-5.2 5.8.7 2.7-4.2-.4-1.4 2.5-3.3-.6 2.9 2.7-2.2-1-3.8 3.4 1.9 4.5-2.5-4.4-4.6 2.8 1 5 .4 6.6-1.5 7.4-5 4.4-3.6.7-2.8 2.7-2.8-1.4-4.6.3-3 4.8-2-.4 5h3l-3.3 2.8 13-6.8 2-.1 1.5-6.2h.3l1.5-3.6.7-11 .8-4.5-2.5-8-3-5.4-.2-2.7-3.2-4.4-2-18.7v-2.4l-.2-2.4-.6-8.5-5.8.1-1.5-1.5-.3-.1-3.8-.7-4.4-2.8-4.9-2-9 2.6-2.5-.6-3 1.2-3.7 3-10-4.7-3 4.3-4.6-1.7-4.8-3-2.7 2.2h-2.5V379l-6.8-3.2-2.7 1.3-1.4-1.6-7.4-.8-5.8-5.2-.8 1.8-4.2-.2-3.9-3.7-1.7-5.9-.3-33.1-24.9-.3-23.5-.6h-.5zM937 143.3l-14 5.4-.2-.5-7.8 2.3-1.8.5.2 1 3.7 14.3 1.2 1.4-2.6 3.1 1.8 1.7 5.6-5.5 3-4.1.6 1.1 14.2-6.3.3-.3-.1-2.3-.6-2-3-8.5-.4-1-.1-.3z"/><path d="M923.9 76l-1.3 1.5-1.4-.3-.8 6.5 2.3 8.8-.2 1.7-4.1 5.6 1 5v6.3l-.7 5.8 4.3 16 4-1.3 12.2-4 5.6-6V120l.3-2.6-.7.3-.1-.6-6.1-7.4-.2-.7-14.1-33z"/><path d="M946.5 152v-2l-.4.8.4 1.3zm2-1.5l-1.3-2.4-.1 2.5h1.4zm-.6-3l.6 1.8 1 1.5.5-1.1-.9-1.7-.3-1.2h-1v.7zm-10.8-4l.4 1.1 3 8.5.6 2v2.3l.3-.3 4.6-3.7-.8-6.6 1.9-.3-4.3-5.2-4.4 1.8-1.3.4z"/><path d="M923 132.9l-4.3-16 .7-5.8v-6.3l-1-5 4.1-5.6.2-1.7-2.3-8.8-1.3.5-5.3 2-5.2 2-12 4.4-.8.2 4.4 10.2 1.5 9.6 5.1 8 4.9 16 .2-.1.7-.3 2.3-.7 2-.7 5.4-1.6.7-.3zM718.3 344.8l.4.8 1.4.9.5 39.8.2 21.8 5 30 .4-.2 4.3 1 1.2-8.7 2 4.8 3.2 3 6.4-3.7-.7-.5h.2l-4.4-10 42-6.7 2.8-.5v-.1l-2.7-5-.2-7-2.1-4 1-7.5 1.8-2-7.2-12.8-13-39.6v-.2l-3 .5-15.5 2.6-7.8 1-16.3 2.2.1.1z"/><path d="M854.7 535.3h-.2.2zm-.9-.1h.1zm.2-.1v-.1zm-13.2 1.4v.1zm-.2.1zm.1 0zm-1 0v.1zm27.6-6v.1-.2zm2.6-.8v-.1l-.2.2h.2zm-1-.1l-.3-.4h-.1l.5.4zm-.2.7l-1.2-1.4.7 1.2.5.2zm9.2-5.7v.4l.2-.2-.2-.2zm1.3-1l.3-.5-.4.4.1.1zm.3-1v.2-.1zm-1.7-.2l-.1-.1zm.9-1.5h-.1v.1zm-2.7 0v-.2.1zm3.3-2.3h-.2l.3.2v-.2zm.4 0l-.2-.2.1.3.1-.1zm-.7-.2v-.1.2-.1zm3.6-.7l-.2.3.2-.3zm-4 .4h-.2l.2.1v-.1zm2-1.2h-.3v.1h.3zm.8-.4h-.1zm-8.2.3v-.2.2zm.9-.2h-.3l.3.5v-.6zm-2.3 0v-.5h-.5l.5.5zm-1.4-1l.5.6v-.2l-.5-.3zm14.3.7l-1.8.7.6.1 1.2-.8zm-13.6-1h-.6v.3l.6-.2zm15.3-4.8l.1-.5.1-1.2-.2 1.7zm.1-5.4l-.4-1-.2.4.6.6zm-22.4 2.4l-.2.3.5.1-.3-.4zm-1.8-.9l-1 .3.8.1.2-.4zm-2 .2v-.2.2zm-2 0l-.6.3.8.4-.2-.8zm2.7 0l-.1-.2-.5-.1.6.3zm-12.7-9.5l-.6.3 1.2.4-.6-.7zm-2.3-3l-.8-1.2.3.8.5.3zm3 1.9l-1.4-3.1-1-.3 2.4 3.4zm-4-4l-.2-.7-.2-.5.5 1.3zm-8-10.7l-1.7-1.3.7.7 1 .6zm43.7-6.5l-7-11.8h-.5l7.5 11.8zm-49-19h-.3l.3.2v-.1zm-.6-.6l-.1.1h.1v-.1zm-.7-1zm.4-.4l.3.2v-.2h-.3zm.6-.3h-.4.4zm-.7-.1l-.3-.3h.1l.2.3zm-.7-1.1h-.2.3zm.7-1.2h-.4v.1h.4zm.4.2l-.5-.5.2.1.3.4zm-3.7-4.2h-.2.2zm-4.2 0l-.3-.3.1.4h.2zm-35.3-3.2l3-2.2-3.3 2.1.3.1zm5.8-4.6l.3-.3-1.1.5.8-.2zm-36.9-6.5l-10.5 3.4 5.8-1.7 4.7-1.7zm26.4-16.5l-2.9.5-41.9 6.8 4.4 10h.3l-1.1 4 3.1-1.3 3.4-3 5.8-.2 6.7-2.5 4.6.7-1 1.7 8.3 2.8 7.1 3.5 1.7 3.9 5.3-1.2 12.7-10.3 4.6.2 19 14.4 4-.8 4 5.4.8 8.7-1.3 5.4.6 2.7 3.4 6.8-1.6-5.3 4.4-.1.4 3.9-2.3 6 8 11 3 .1-2.5-3.4 3.1.4 1.9-1.1-.8 6.2 4.2 3.3 2.8 7.6 3.8 2.3 4.8 1.2 6.7 8.6 3.5 1.8-4.7.3 2.2 2.4 7.6-2.5 3.8-2.1 3.5-12.2-1.7-19-.4-2-9.3-15.5-8-11.3-4.5-9.2 3.8 3.2.8-.6 1.7 8 4.2 6.2-4.1-8.2.1-3.9-12.5-15.2-3-4.8-4-8-2.7-6.8-2.1-2.4-.5-3.1-.1-.1-6.7-.4-2.6 2-1.5 7.5-1.3-3.5-45.8 5.7-3.3-5.1v-.1z"/><path d="M845.9 396.1l-.1-3-.7 2.6.8.4zm1-4.5l-.4-2.2-.3 1.4.7.8zm-45.4-61.1l-1.3.3-3.7.8-13.5 2.8-1.3.3-1.4.2-7.5 1.4-2 .4-8.3 1.5-1.8.2.1.2 13 39.6 7.2 12.9-1.7 1.9-1.1 7.6 2.1 3.8.2 7.1 2.7 5-.1.2 3.3 5.1 45.8-5.7 1.3 3.5 1.5-7.5 2.6-2 6.7.4-.6-10.5 1.3-2.3-.7-4.1 1.4-4 2-2.2-1.5-1.4 3.4-4.2-5.9-5.4-8-11.4-4.3-2-18.7-15.7-4.6-5.9-8.8-3.6-.5-2 2.7-5.3zM716.8 442.8h-.5v.2l.5-.2zm9-1.2h-1.4l1.3.1zm-11.3 1l-.4.4h.1l.3-.4zm9.2-.8H720l3.5.1h.2zm-40.5-92.5v.1l-4.1 6.8.4 5.2-5.5 6.2 1.4 1.7-3.7 15.5 1.8 3.3-1 .7.1 2.2v.6l2.2 5.3-.2 3.2 3.6 4.3-7.4 12.7-1.1 7.5-2 3 1.3 3.5-1.3 1.3 33.5-3.7-1.1 4.7 4.2 8.3 2.3 2.8 3.6-4.1 7.5-1.7 7 .8 1-1.4-4.9-30-.2-21.8-.5-39.8-1.4-.9-.4-.8h-.2l-4.8.7-8.6 1.2-19.4 2.4-2.1.2z"/><path d="M801.5 330.5l-2.7 5.3.5 2 8.8 3.6 4.6 5.9 18.7 15.7 4.4 2 8 11.4 5.7 5.4 1-4.4-1.5-4.3 4.1 3.1 2.4-1.8-4-3.3 4.8-.3 7.6-6.4-.9-1.7 4.7-3.6-.5-1.7 3.4-2.2.2-5 5.3-9.8 3.6-4.6.4-.2-21.6-13.7-8 1.6-11-.4-5.5-2.8-32.2 10.2h-.3z"/><path d="M661.4 198.2l-.2.5 3.7 2.3 1.2 2.3 3.9 3.7-.1 3.1-2.2 6.1-4.8 3.5-4.4 1-.9 5 1.5.6-1.5 10-3.5 2.2.6 3.8-.8.3-.8 4.3 3 8.7 11.2 9.3 1 4.4 2 2.3 7-.4-1.2 6.5-.5 7 4.2 3.4 6.6 2.9 3.5 2.7 2 5.5-1.2 2 7 5.7h.2l-.6-.5 2-4.6 7.5 2 1.8-2-1.4-4.3 6-3.6-1.6-2.3 1.5-3.3v-.3l-.4-.1v-8.7l2.2-1.5 3.7-8.7-.8-3.7-2.4-4.6 1.4-5.2-6.8-47.8-1-1-2.5-5.8-2-2.1-1-5.7v-.2l-13 1.9-8 1-21 2.4z"/><path d="M750.3 200.2l-14.8 2.6-3.4.7-12 2-2.6 2-3.7 1.7h-1.5l-1.8-1-.5-.5 6.8 47.8-1.4 5.2 2.4 4.6.8 3.7-3.7 8.7-2.1 1.5-.1 8.7h.8l1.4-2.7h3.6l4.4-1.5 5.4 2 .6-2.2 3.1-2.3 4.7.7 2.5-5 6.9.6-.1-2.8 6-8-.9-3.8h4.3l5.2-4.2-1.2-4.8.2-.2-.2-1.6-5.9-34.4L751 203l-.3-1.5-.3-1.3z"/><path d="M693.2 317.2l-.3-.8-.6-.2-.4 1.3h1.1l.2-.3zm66.4-63.5l-.2.2 1.2 4.8-5.2 4.1-4.3.1 1 3.7-6.1 8v2.9l-6.8-.6-2.5 5-4.7-.7-3.1 2.3-.6 2.2-5.4-2-4.4 1.5H715l-1.4 2.7h-.4v.4l-1.5 3.3 1.7 2.3-6.1 3.6 1.4 4.3-1.8 2-7.5-2-2 4.6.6.6.2.4-.9 8-.3.1-2.6 1.6v.3l2.8-.4 19.6-2.6-1-4h3.3l39.5-5.3 27.8-4.6.3-.3.7-.8 7.3-3.9 5.6-7.3.8-2.6 3.7-2.9 4.7-5.9.6-1h-2.8l-3-1.8-5.6-6.7-2-6.8v-.2l-.2-.2-4-2.3-1.9-3.1-3.7 3.6-2.3.5-3-1.1-2.4 2-5.3-2.4-1.3.6-5-4.3-2.5-1.3-4.8.6-.7.8z"/><path d="M890.2 332.2l-1 1.1.1.2 1-1.3zm.8-5.6l-.5.8.2.8.3-1.6zm5.8-9l-1.4 1-.8 1.1 2.2-2.1zm12.5-6.1l-.5-.4-1.3-.1 1.8.5zm-2.6-.6h-.9l-1.4.8 2.3-.8zm3 1l2.8-7-1.9 3-.9 4zm4.2-9.2l1.3-1.8h-.7l-.6 1.8zm8.1-7.5l-2-10.8 1.8 5.6.2 5.2zm-11.8-24.6h-.2l-.3.2h.1l5.4 9 4.1 4.2-9-13.4zm-1.7.6l-.8.2h1.8l-.2-.5h-.5v.3h-.3zm-89.8 22.1l-.5 1.5v4.1h-1l-2.5 5-2.8.4-5.3 5.1-2.3-.9-3 4.5-8 7.2-3.8 1-4.1 3.7-.2 2.6-3.6 2v5.2l1.4-.3 13.5-2.8 3.7-.8 1.3-.3h.3l32.2-10.2 5.4 2.8 11 .4 8-1.6 21.7 13.7.4-.3 10-4 .1-5.4 3.6-6.5 3.9-3.7 8-5.3 1.1-2 2.1 1 1-6.4-1.2 2.2-4 1.4-4 .1 4.8-3.5-1.4-1.5 1.6-3.5-9-1.5-.5-.5 7.8-1.4 2.5 1.2 3.2-.3 2.6-2 2-3.7 1.7-.5-.3-5.3-2.2-2.2-2.2 2 .4 5.2-1.6-6.3-1.3-.3-9.6 4 4.3-4.2.2-1.6 4.5-1 1.2-3.4 3 1.8-3.2-4.8-2.2-2-38.8 11.1-24.8 6.3-25 4.7-.1-.2z"/><path d="M818.2 206.6l-2.4-10.5-.5-2-2.7-12-3.5 2.2-7.5 5.7-4.9 6-3.7.5-7 4-4-2.3-11.7-1.4-6.2 1.6-6 1.4-6.5 1.4-1 .3.3 1.5 2.6 14.7 5.9 34.4.2 1.6.7-.8 4.8-.6 2.5 1.3 5 4.3 1.3-.6 5.3 2.3 2.5-2 3 1.2 2.2-.5 3.7-3.6 1.9 3 4 2.4.2.2 4.2-2 1.5-3.2-1.2-3.3 3.3-5 2.4-.5-.3-4.2 4-5.5.7.8 3.6-2.7 3.1-4.7.5-21.2.2-.1-.5-2zM786.3 300.5l-27.8 4.6-39.5 5.3h-3.3l1 4L697 317l-2.9.4-.7 1h-.4v-1l-1 .2.6 2.8-2 2.4-.1 4.5v.9l-3 5.6.6 4-2.7 4.2 1 4-3.5 3.1.2.2 2.1-.2 19.4-2.4 8.6-1.2 4.8-.7h.2v-.1l16.2-2.3 7.8-1 15.5-2.5 3-.5 1.7-.2 8.2-1.5 2-.4 7.6-1.5 1.4-.1v-1l-.1-4.3 3.6-2 .2-2.5 4-3.7 4-1 7.9-7.2 3-4.5 2.3 1 5.3-5.2 2.8-.3 2.5-5.2 1 .1v-4.1l.5-1.5-1.6.3-5.5 1.6-6.6 1.3-16.6 3.4-1.8.3-.3.3z"/><path d="M908.8 271h.2l.3-.1-.2-.5-.3.6zm-3.3-10.9v.5l.4-.3-.4-.2zm1.7-3.4l-.1-.8.1.8zm-.6 1.2l-.2 1.2-.3.5.5-1.7zm.9-2.5v-.6l-.1.6zm.6-2.7l.3-.6-.5 1.7.2-1zm0-1.4l.5-2.2-.5.5v1.7zm1.8-9.6l.2-.9v.2l-.2.7zm-.4-2.3l-1.2.5-2 .9-.7.9h.3l-2.3 14.5.9 2.4 1.3-6 2.6-8 1.1-5v-.2zm2-.7h-.3l-.1.4-.5 3 .4-1 .5-2.4zM810 275.8l-.6 1-4.7 6-3.7 2.8-.8 2.6-5.6 7.3-7.3 4-.7.7 1.8-.3 16.6-3.4 6.6-1.3 5.5-1.6 1.6-.3v.2l25.1-4.7 24.8-6.3 38.8-11-.3-.5-.1-.3.7.7.8-.2-.1-.1-.7-3.3h.5l1.5 3 .3-.1.2-.1-.4-.8-4-6.1-5 .9-2.1 1.8-2.2-2-7.3-2.3-5-.2 9.8-1 5.4 3.8 1.6-2.5-4.4-5.5 3.1.2-1.6-4.5-4 .2-9.1-7.4h-1.2l13 6.4-.9-4.5 1-1.5-6.7-2.5-5.7-.4-2.8-2.5-2.4 1.5-.8-6.7 1 .2-.3-5.5-.2-.2-.1.1h-.2l-.5-.5-.3-.2-3.1-1.4-3.2-2.3-4.5-1.2h-.3l-.6 4-9-3.8.2 5.6-5 9.4-3 3.3-1.9 5.8-6-2-2.8 13.1-2.4 4.5-.3 5.8-1.8 2.8-6.5 2-5.3 4.2-2.6.3-2.4 2.2-6.1-2.3-1-3h-.3zM705.8 134.8l-2.4 3-1.5 4.4.7 2.4 3.2-9.8zM650 112l1.4-2-1 1-.4 1zm2.2-3.2l-.5-.6-1 .7 1.5-.1zm-21.2 5.4l-2.2 2.5 1 11.7-6.1 5.6-1.2 5.5 3.4 3-1 13.5 3.6 2.7 2.4.2 7.3 4.4 4.7 4.9 6 3 1.3 7.5v.5l2.8 3.4-.8 2.6 1 5.7 2.9 4 5.3 2.8v.5l21-2.4 8-1 13-1.9-.3-1.4v-4.6l-2.6-4.8-.7-6.1 1.2-6.8-.6-5.3 2.3-6.5-.9-1 .2-6 1.3-4.6-1.5-1.6-2.8 1-1.6 4-3.6 2.2 1.1-5.1 3.3-4.4.2-2h.1l-4.7-4.7v-6.6l-5.2-4.3-7.2-.5-7.4-2-15.9-4.8-3-1.7-.4.3-5-.7-1.6 1 .7-7.1-8 4-9.7 1.6v-.2zm19-5.1l-.1-.7-.7.3.9.4zm-3.4-.7l.3-.6-.2-.2-.1.8zm7-1.6l-.2-1.4-.3 1.6.6-.2z"/><path d="M836.7 223.7l-13.8 3.4-4.2-18.4h-.2L818 230l-3.1 4.7-3.6 2.7-.7-.8-4 5.5.3 4.2-2.4.4-3.3 5 1.2 3.4-1.5 3.2-4.2 2v.2l2 6.8 5.5 6.7 3.1 1.7h2.4l.3.1.2.1 1.1 3 6.1 2.3 2.4-2.2 2.6-.3 5.3-4.2 6.5-2 1.8-2.8.3-5.8 2.4-4.5 2.9-13.2 5.9 2 2-5.7 3-3.3 5-9.4-.3-5.6 9 3.9.6-4.1-2.8-5-5.8-.6-3.4 2.6v2l-3 .6-4.2 3-2.2.5-4.5 6.3-2.2-10.2-2 .5z"/><path d="M893.8 207.7l.4 1.5 8 23 9.3-2.8-.1-.2h.2l.3.1h.2l-.2-.4-2.4-6.3-11.3-10.7.5-7.5h-2.4l-1.7 1.4-.8 1.9z"/><path d="M878.2 229.1l.5.4.2.1h.3l.7.4.2.3v.7l.2.4 1.3-2.3-1.4-.8h-1.6l-.4.8z"/><path d="M911.6 238.3l.6-5.3-.5 4-.4 1.6-.1.2.3-.1v-.4zm.5-9h-.2l.2.6v1.2-1.9zm-73.4-6l2.2 10.1 4.5-6.3 2.2-.5 4.3-3 2.9-.7V221l3.4-2.6 5.8.7 2.8 4.8.3.1 4.5 1.2 3.2 2.3 3 1.4.4.2.4-.7 1.6-.1 1.4.8-1.3 2.3-1.8 5.7 6 3.9 6 .3 4 1.8-1.7-4.6-5.1-1.8-1.3-4 3.2 4.3 2.7.4-2.4-2.3-1.8-7 .5-3.9-2-4.4 2-1.7 1.6-5.6-.6 8.3 1.7 2.8 1.5-3.3 1 5.5-1.7 4 4.7 1.7-4 1.3 2 4 3.6 1.2 2-3.4-.3 4.7h3.3l2.1 2.4h.1l.7-.9 2-.9 1.2-.5v-.2l2.5-7.4v-.3l-.5-2-9.3 2.7-8-23-.4-1.5-1.6.5-7 2.1-37.9 10.6-6.9 1.8-1.7.5z"/><path d="M916.8 207.3l-.5-1.2v1.2h.5zm1-3.6l.3-2.9-.6 2.5.3.4zm-4-29.8l-10.2-2.5-1.7-.5-1.7-.4-4 9 1.7 2.2-.1 6.5 1.8.3 3.8 9.9-.2.3-4.7 7 .4 5.3 11.5 3.9.1 4.4 2.6-3.6.4-5.4 2.7-1.8-1-4 2-4.8v-10.3l-.7-3.4H912l1.1-4.6.7-7.5z"/><path d="M913.5 181.8l-1.4 2-.4.6 1.8-2.6zM927 177l4.9-4.2v-.2L927 177zm-12.7 3v-3.3l-.3 1.8.3 1.5zm22.5-15.5l-1.2-.3-.2.9 1.4-.6zm2.6-1.7v1l.1-.7v-.3zm-2.7 0l-6.5 6-10 4.3-2.6 2.3-.2 2.1-2.7 2.2.4 3 4.1-1.7 6.2-5 6.7-3.5 10.3-9.7-7.2 5.5-2.4 1 4-6.4zm3-4l.4-.6-1.2 1.4.8-.8zm-109-3.6l-1.6-.2 1.1 1.5.4-1.3zm32.1-29.7l.2-1-.7.9h.5zm.5-7l-.4.2-.4 1 .8-1.2zm-41 55.1l.6 3 5.2 1.2 29.5-8 29.7-9 5.4 4.2 1.1 2.4 6.3 2.7.2.4 1.7.4 1.7.5 10.2 2.5-.2-.5.9 4 2-.5 1-4.3v-.1l-1.8-1.7 2.6-3-1.2-1.5-3.7-14.3-.2-1-.5-.3-.3-4.2-.3-4.7-.2-5v-.3h-.2l-4.9-15.9-5.1-8-1.5-9.6-4.4-10.2-.5.3-20.3 6.8-4.1 4.3-4.6 8.8.2 2-6 9 3.7 1.3 1 6.9-4.2 5.6-12.8 7.8-2.4-1-9.6 1.4-8.8 5.3.5 2.8 3.1 2.7-1.7 8.6-7 8.1-.1.1z"/><path d="M900 170.1l-6.3-2.7-1-2.4-5.5-4.2-29.7 9-29.5 8-5.1-1.3-.7-2.9-1.7 1.3-2.6 1.8-4.8 4.9-.5.5 2.7 12 .5 2 2.4 10.5.5 2 4.2 18.5 13.8-3.4 2-.5 1.7-.5 7-1.8 37.9-10.6 6.9-2.1 1.6-.5.8-2 1.7-1.3h2.4l.2-.9 3.8-4.2.4-.7.3-.2-3.8-10-1.8-.2v-6.5l-1.7-2.2 4.1-9-.2-.4zM946.8 118.4h-.1l.2.1-.1-.1zm7.2-20.7l-.8-1.1v.5l.8.6zm-1.4-1V95v1.6zm3.5-4.1l-.2-.1.1.3.1-.2zm9.7-4.9l-.2-1.4-.4.7.6.7zm-2.4.6v-1l-1 .1 1 1zm3.6-3.2h-.4v.2l.4-.2zm-4.9 1.5l-.8-.2-.1.8 1-.6zm5-3l.9.6-.3-.7h-.6zm-2.6 0l-1 1.7 1.3-.6-.3-1zm-4.2.1l-.4.6.3.9v-1.5zm5.7-3.2v-.7l-.4.5.4.2zm-.5.4l-.8-.7v.6l.8.1zm-5.4 2.3l-.2-1.1-.4.9.6.2zm9.2-3.4l-1.4 2.1-.1-1.5 1.5-.6zm7.1-6.5l-.7-1-.4.2 1.1.8zm2.6-4.4l-.6-.3v.3h.6zm1.3-7.6h-.9l1 .3-.1-.3zm1.4 1l-.2-1.7-.8-.1 1 1.8zm-1.5-1.6L980 59l-.7 1.3.9.5zM923.9 76l14 33 .3.7 6 7.4 1-.3.2-5.6 1.6-2 1-5-1-1 1.7-5 5.7-2.6L958 91l1.3-7.7 6-.4-.8-4 7.3-2.8.5-4.4 1.8.4 4.8-4 2.2-5.1-5-5-5.2-1-2-4v-2.4l-3.2 1-3.6-1.2v-4l-9.7-21-7-3.7-8 6.6-2-.4-1.9-3.4-2.5 1-3.6 17.9 1.2 5.8 1.1 11.8-2.8 9.2 2 1.4-2.4 4.5-2.5-.4-.2.2zM720 138.2l-.5-.8-.1 1 .6-.2zm1.5-1.7l-1.1-1.6-.2.7 1.3.9zm1-7l-1-1v.3l1 .7zm-2.4 76l12-2 3.4-.7 14.8-2.6.3 1.3 1-.3 6.4-1.4 6.1-1.4 6.2-1.6v-.3l3.1-6.3-.2-5.2 3.5-9 2.9 1.6 1-2-.3-7.8-2.6-4.8-3.9-10.3-3.4-3.8-1.7-.5-6.3 4.4.7.8-3.3 6.2-3.2-.5-1-6.5 1.3-.5 2.9-6.5.3-11.5-4.4-9.7-9.7-1.6-1-1.5-9-2.6-4.1 5 .4 4.4-3.1 3.9.7 6-3 2.1v-7.5l-2.8 5.7-3.2 5-2.1 1.7 1 5.3-1.3 5.6.8 6.9-1 3.3 7 13.4.9 5.2-.9 9.5-4.7 10.7-.5.4zm20.7-87.5l-2.5.2 1.6 1.2 1-1.4zm-14.7 2.5h-.8l.9.4-.1-.4zm17-12.3l-1-1.5h-.4l1.4 1.5zm-88 7l3.1 1.8 16 4.9 7.3 2 7.2.4 5.2 4.3v6.6l4.7 4.7v-.1l3.8-11 4.6-3.2 3.5-3.9.5 3.5 3.6-5.5 8.7-3.3.6-1.4 8.8 1 3.4 1.8 1.6-4.3 1.6 1 6.8-1-1.7-2.8-3-1.7.6-6.3-6 3.3-5.4-.7-1.7-4.2.6-1.3-7.4 3.5-4.8.2-8.5 5.3-1 2-5.2-1.3-3.3 1.4-6.6-5.7-14.7-4.5-.3-1.7-9.4 9-5.3 1.4-7.6 5.7-.3.2zm34.4-22L678 99l3.8 3.7 1.5-3.7 3.9-4.8 2.2-.8zM676.8 80l-7.8 5.3-.4 2.6 6.1-4.4 2-3.5z"/></svg>'
  },
  {
    namespace: 'map', name: 'indiana',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="700 190.2 70.6 107.7" stroke-linejoin="round" stroke="currentColor" fill="none"><path d="M750.3 200.2l-14.8 2.6-3.4.7-12 2-2.6 2-3.7 1.7h-1.5l-1.8-1-.5-.5 6.8 47.8-1.4 5.2 2.4 4.6.8 3.7-3.7 8.7-2.1 1.5-.1 8.7h.8l1.4-2.7h3.6l4.4-1.5 5.4 2 .6-2.2 3.1-2.3 4.7.7 2.5-5 6.9.6-.1-2.8 6-8-.9-3.8h4.3l5.2-4.2-1.2-4.8.2-.2-.2-1.6-5.9-34.4L751 203l-.3-1.5-.3-1.3z" fill-rule="evenodd"/></svg>'
  }


  // Add additional icons that should be loaded on startup here!
];
