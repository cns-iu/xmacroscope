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
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.74 145.43"><path d="M408.59 31c.48-1.8 3.64-5.33-3.23-13.44-5.21-6.15-12-5.59-12.73-6.14s.54-6.21-2-6.76-4.95 1.6-4.95 1.6 4.08-.83-.07-1.37c-1.87-.24-8.3 3.7-9.17 4.16a80.65 80.65 0 0 1-11.14 3.38c-2.39.35-7.4-.76-10.4-.69s-8.89 1.92-10.54 2-14.34-3-20.94-3-11.92 1.9-16.77 1.9S273 6.19 250.45 1.31s-66.34 5.08-73.63 9.46S153.27 31.48 145 35.19c-8.62 3.87-43.13 12.39-71.84 11.15s-60.8-26.11-60.8-26.11-5.36-3.67-9.8 0S.8 26.35.86 27.32c14.52 17.73 50.33 34.9 78.59 34.9s65-7.88 78.12-14.3c0 0-2.2 9.34 5 15.65 5.1 3.74 16.82 6.54 17.87 10.43s-6.41 7.44-3.53 10.29 15 6.3 15 6.3l13 5 12 4.35a11.13 11.13 0 0 1 2.47 1.19 111.59 111.59 0 0 1-.77 11.17s-8.73 9.9-13.61 11.7-15.81 1.16-17.79 2.14-2.86 6.6-4.17 7.32-2.91-.69-3.72.67c-1 1.65.38 2.22-4.28 6.87-1.22 1.22 3.08 4.39 4.73 4.39s5.2-.35 6.76-1.91 4-5.93 6.53-5.93 21.51-2.74 24.29-4.51c2.49-1.57 6.29-5.88 6.29-5.88l.81.33c12.4 4.89 39.26 13.25 42.54 14.28 4.14 1.3 14.58.81 20.26 0s-1.63-9.27-3.77-10.34a15.63 15.63 0 0 0-10-2.42c-8.57.86-19.91-5.41-23.42-7.5-1.58-1 6.64-2 9.46-7.1s2.41-9.22 3-10.13 51-18.74 57.07-21.95 13.14-12.78 16.11-14.92 37.73-13.79 41-13.79 6 1.35 8.75 1.18 3.21-1.07 5.1-1.18 9.87 4.78 13.08 3c4.06-2.2 1.42-4.81 2.69-5.37s2.69.75 4.52-.48 4-5.93 4.79-8.34-7.52-9.61-7.04-11.43zM206.71 81.74a7.62 7.62 0 0 1 .23-4c6.47 2.56 11.1 5.36 11.42 8.39.06.37.11.73.16 1.1-3.52-1.23-11.18-3.93-11.81-5.49zm37.42 6.65c2.2-5 1.65-10.46 2.75-15.41 3.31 1.1 5 4.4 5.51 7.15 1.61 4.96-4.96 6.06-8.26 8.26z"/></svg>'
  },
  {
    namespace: 'opponent', name: 'squirrel',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.33 258.35"><path d="M240.68 87.66C251.15 75.62 231.35-5 168.35.24s-60.68 29.29-61.64 53.46 47.72 61.15 42.82 64.73-38.66-14.72-63-13.27c-13.16.84-40.19-20.64-40.19-20.64S38.05 71.59 35 74.45s-1.49 11.61-3.15 14.47-22.29 13.9-27 22-2.46 14.78-2.71 17.93S-1 136.44.35 142.09c2.18 9.41 27 3.41 27 3.41s30.52 12.8 26.59 15.14-25.36 3.06-31 2.18-6.18-.48-8.18 3.27c-1.72 3.23-3.67 10.63.13 13.3a6.29 6.29 0 0 0 2.12 1c5.68 1.37 7 1.57 13-.75a18.28 18.28 0 0 1 13.5.55c.8.38 15.87 4.39 25.5 6.13 9.05 1.64 19.8-10.47 19.4-8-.78 4.76-10.08 12-8.76 23s9.37 14.22 6.68 15.41-14.2-2.88-19.5 1.23-13.07 6.86-6.14 9.14c6.7 2.2 28.35 1.49 28.35 1.49s-22.52 6.19-26 10.64a6.31 6.31 0 0 0-.44.66c-1.29 1.6-4.27 5.43-3.65 6.11s.92-.87 3.18-2.95c.12.44-3.14 4.55-2.48 4.91s3.59-2.77 3.93-2.38c-1.84 1.83-3.83 5.82-3.21 6.2s3.07-3.07 5.71-4.07c.2.17-3.76 7-2.85 6.75s5-5.73 6.8-4.4c-1.8 2.92-3.94 8.33-3.22 8.33s1.43-4.08 6.7-6.8c1.15 0 7.62 1 8.87.72a39.62 39.62 0 0 0 5.24-1.42c1.31.11 1.69.12.24-.08 5.79-2 9.18-4.6 14.43-4.61 6.72 0 10.07 3.24 32.76 4.08s58.64-31.64 58.64-31.64 21.67-22.59 24.45-57.77c3.28-41.41-50-47.91-55.34-90.45-1.2-20.92 54.84 43.72 77.88 17.24z"/></svg>'
  },
  {
    namespace: 'opponent', name: 'turtle',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 659.24 302.26"><path d="M655.24 227.42c1.82-3.49.73-6.42-2-14.35-4.7-13.9-45.34-41.6-60.95-44.38s-51.91-6.46-58.08-7 3.59-10 5-14.07S525 141.28 515.39 134 480.8 86.2 480.8 86.2 464.5 59.26 438 38.4s-58.91-26.6-71-32.07S322.34 0 309.73 3.18 288.35.67 274.51 0 246 6.89 239.29 8.21s-28.37 2-47 7.85-85.69 58-88.81 60.08-3.71-3.42-17.61 2.43c-11.68.07-53.26-23-66.54-15.27C8.32 69.66-3.1 94.64.77 113.05c.75 3.61 5.23-6.45 5.23-1.69 0 27.35 24.29 28.9 23.9 36.24S10 178.92 9.1 191.23a250.06 250.06 0 0 0 8.57 26.6c.88 5.9 2.24 12.61 3.93 13.06 1.41.38 1.7-2.74 2.11-5.93 2.61 1.49 6.29 3.53 10.29 5.57 1.06 4.25 2.86 10.25 4.62 10.25s1-4.1 1.68-7.18a82.8 82.8 0 0 0 8.27 3.4c3.72 5.57 11 15.08 14.49 9.89.72-1.09-3.11-4.73-5.18-9.37 5.75-5.44 13.42-43.76 20.4-40s27.85 21.28 64.15 36.48 77.09-1.49 81.77.63c4.28 1.94 7.55 17.15 12.44 19.26a16.39 16.39 0 0 0-6.78 2.12c-2.79 1.93-10.54 16.93-10.48 25.78l-.25-.12s1.16 18.15 3.2 20.4c1.61 1.77 4-9.25 5-14l.78-.11a90.25 90.25 0 0 0 2.4 10.04c1.13 3.33 3.93-6.57 5.12-11.13l2.37-.36c1.45 2.65 4.29 7.4 6.63 8.42s1.23-5.93.46-9.51c6.3-.58 25.71-2.7 33.82-7.38 9.76-5.61 2.72-42.24 12.58-44s52.13-.79 104.48-2.52 103.6-19.21 114.75-28.22 38.46 20.86 79.57 22.91c19.33 1 27.61 19.26 39 20.84 2.06 4.33.48 11.55 3.16 10.38 2.31-1 3-7.52 3.19-11.27a21.16 21.16 0 0 0 5-3c3.91 2.52 9.2 11.2 12 11.2 3.07 0-1.75-13.46-3.92-19.17l1.66-1.77c2.58.47 5.8 5.52 8.19 4.78 1.99-.62-1.28-7.09-3.33-10.78z"/></svg>'
  },

  {
    namespace: 'visualization', name: 'table',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><rect width="21.98" height="5.81" rx="1.52"/><path d="M0 4.24h1V22H0zM21 3.32h1V22h-1zM16 0h1v22h-1zM10 0h1v22h-1z"/><path d="M22 20.99v1H0v-1zM22 16.99v1H0v-1zM22 12.99v1H0v-1zM22 8.99v1H0v-1zM22 4.99v1H0v-1z"/></svg>'
  },
  {
    namespace: 'visualization', name: 'scatter-graph',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1" d="M0 0h2v22H0z"/><path class="cls-1" transform="rotate(90 11.995 20.995)" d="M11 10.99h2v22h-2z"/><circle class="cls-1" cx="8.24" cy="11.73" r="2.5"/><circle class="cls-1" cx="14.46" cy="13.07" r="2"/><circle class="cls-1" cx="17.74" cy="10.34" r=".89"/><circle class="cls-1" cx="10" cy="6.51" r="1"/><circle class="cls-1" cx="18.62" cy="4.51" r="1"/><circle class="cls-1" cx="13.69" cy="8.39" r=".89"/><circle class="cls-1" cx="4.02" cy="17.85" r="1"/><circle class="cls-1" cx="8.24" cy="15.6" r=".89"/><circle class="cls-1" cx="20.39" cy="1" r="1"/><circle class="cls-1" cx="20.73" cy="7.51" r="1"/><circle class="cls-1" cx="14.1" cy="4.14" r="2"/></svg>'

  },
  {
    namespace: 'visualization', name: 'geomap',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.83"><path d="M15.91 11.34h-2.06v1h1.06l4.08 7.49H3l4-7.41 1.09-.08.08-.92H6L0 21.83h21.99l-6.08-10.49z"/><path d="M15.71 4.7a4.7 4.7 0 1 0-9 1.79l4.3 9.17 4.35-9.17a4.69 4.69 0 0 0 .35-1.79zm-4.7-2.45A2.45 2.45 0 1 1 8.56 4.7a2.45 2.45 0 0 1 2.45-2.45z"/></svg>'
  },

  {
    namespace: 'label', name: 'x-axis',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.72 29.57"><g ><path d="M4 7.54v18.25" stroke="#bdbdbd" stroke-dasharray="3 3" fill="none" stroke-width="3"/><path fill="#bdbdbd" d="M4 0L2 3 0 6h8L6 3 4 0z"/></g><g ><path d="M25.98 25.58H2.52" stroke="currentColor" fill="none" stroke-width="3"/><path d="M29.72 25.57l-3-2-3-2v8l3-2 3-2z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'y-axis',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.57 29.72"><g ><path d="M6.79 25.72h18.24" stroke-width="3" fill="#9d9d9d" stroke="#bdbdbd" stroke-dasharray="3 3"/><path fill="#bdbdbd" d="M29.57 25.72l-3 2-3 2v-8l3 2 3 2z"/></g><g ><path d="M4 27.2V3.74" fill="none" stroke="currentColor" stroke-width="3"/><path d="M4 0l2 3 2 3H0l2-3 2-3z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'size',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.st1{fill:#fff}.st2{fill:none;stroke:#006298}</style><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1683 -366)"><g transform="translate(1683 366)"><circle class="st1" cx="16" cy="16" r="15"/><circle class="st2" cx="16" cy="16" r="14.5"/></g><g transform="translate(1689 378)"><circle class="st1" cx="10" cy="9.6" r="9.4"/><circle class="st2" cx="10" cy="9.6" r="8.9"/></g><g transform="translate(1694 388)"><circle class="st1" cx="5" cy="4.3" r="4.7"/><circle class="st2" cx="5" cy="4.3" r="4.2"/></g></g></svg>'
  },
  {
    namespace: 'label', name: 'shape',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.st1{fill:#006298}</style><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1738.966 -439.567)"><ellipse class="st1" cx="1746.9" cy="463.1" rx="7" ry="6.9"/><g transform="translate(1755.25 454.923)"><path class="st1" d="M.8 6.5h13.9V10H.8z"/><path class="st1" d="M6 1.3h3.5v13.9H6z"/></g><path class="st1" d="M1750.2 453.9l6.8-12.8 6.8 12.8h-13.6z"/></g></svg>'
  },
  {
    namespace: 'label', name: 'color',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><g transform="translate(-1206.343 -762.049)"><ellipse cx="1214" cy="785.4" rx="6.6" ry="6.6" fill="#99c0d6"/><ellipse cx="1230.7" cy="785.4" rx="6.6" ry="6.6" fill="#66a1c1"/><ellipse cx="1223.4" cy="770.7" rx="6.6" ry="6.6" fill="#006298"/></g></svg>'
  },

  {
    namespace: 'emoji', name: 'brat',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-4{stroke:#231f20;stroke-miterlimit:10}.cls-2{fill:#231f20}.cls-4{fill:none;stroke-width:.5px}</style></defs><circle cx="11.5" cy="11.5" r="11" stroke="#231f20" stroke-miterlimit="10" fill="#fff"/><path class="cls-2" d="M9 9.58a4.19 4.19 0 0 0-1.45-.26A5.12 5.12 0 0 0 6 9.58a1.45 1.45 0 0 1 1.5-1.25A1.47 1.47 0 0 1 9 9.58zM12 19a6.33 6.33 0 0 0 6-4 19.69 19.69 0 0 1-6.06.69A18.92 18.92 0 0 1 6 15a6.39 6.39 0 0 0 6 4z" transform="translate(-.5 -.5)"/><path d="M11.5 21.5a2.19 2.19 0 0 1-2.4-2.18V16.5c.78 0 1.6-.38 2.38-.38s1.56.38 2.37.38v2.83a2.24 2.24 0 0 1-2.35 2.17z" stroke-width=".47" stroke="#231f20" stroke-miterlimit="10" fill="#fff"/><path class="cls-4" d="M11.48 16.26v3.26"/><circle class="cls-2" cx="16.03" cy="8.5" r="1"/><circle class="cls-4" cx="16.03" cy="8.5" r="2.32"/></svg>'
  },
  {
    namespace: 'emoji', name: 'cool',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-2{fill:#231f20}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="#231f20" stroke-miterlimit="10"/><path class="cls-2" d="M12 7.87a3.44 3.44 0 0 1-.83-.34A16.19 16.19 0 0 0 2 7.08s.16 3.45 1 4.86 5.38 2 6.68 0 1.09-2.22 1.52-2.69a1 1 0 0 1 1.53 0c.43.47.22.67 1.52 2.69s5.8 1.4 6.68 0S22 7.08 22 7.08a15.8 15.8 0 0 0-9.13.45 3.59 3.59 0 0 1-.87.34zM12 18.5a9 9 0 0 0 4.91-1.78 19.91 19.91 0 0 1-4.91.78 19.8 19.8 0 0 1-4.91-.78A9 9 0 0 0 12 18.5z" transform="translate(-.5 -.5)"/></svg>'
  },
  {
    namespace: 'emoji', name: 'happy',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-2{fill:#231f20}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="#231f20" stroke-miterlimit="10"/><path class="cls-2" d="M12 19c4.64 0 6-3 6-3s-1.9 1.69-6.06 1.69S6 16 6 16s1.38 3 6 3z" transform="translate(-.5 -.5)"/><circle class="cls-2" cx="16.03" cy="8.5" r="1.5"/><circle class="cls-2" cx="7.03" cy="8.5" r="1.5"/></svg>'
  },
  {
    namespace: 'emoji', name: 'silly',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-4{stroke:#231f20;stroke-miterlimit:10}.cls-2{fill:#231f20}.cls-4{fill:none;stroke-width:.5px}</style></defs><circle cx="11.5" cy="11.5" r="11" stroke="#231f20" stroke-miterlimit="10" fill="#fff"/><path class="cls-2" d="M13.46 18.57a6.35 6.35 0 0 0 4.89-5.34 19.64 19.64 0 0 1-5.72 2.13 18.76 18.76 0 0 1-6 .78 6.38 6.38 0 0 0 6.83 2.43z" transform="translate(-.5 -.5)"/><path d="M9.5 21.5a2.19 2.19 0 0 1-2.4-2.18V16.5c.78 0 1.6-.38 2.38-.38s1.56.38 2.37.38v2.83A2.24 2.24 0 0 1 9.5 21.5z" stroke-width=".47" stroke="#231f20" stroke-miterlimit="10" fill="#fff"/><path class="cls-4" d="M9.48 16.26v3.26"/><circle class="cls-2" cx="15.51" cy="7.33" r="1"/><circle class="cls-4" cx="16.03" cy="8.5" r="2.32"/><circle class="cls-2" cx="7.1" cy="11" r="1"/><circle class="cls-4" cx="7.1" cy="9.82" r="2.32"/></svg>'
  },
  {
    namespace: 'emoji', name: 'surprise',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-2{fill:#231f20}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="#231f20" stroke-miterlimit="10"/><ellipse class="cls-2" cx="11.5" cy="16.5" rx="3" ry="4"/><ellipse class="cls-2" cx="7.01" cy="8.5" rx="1.5" ry="2"/><ellipse class="cls-2" cx="15.99" cy="8.5" rx="1.5" ry="2"/></svg>'
  },
  {
    namespace: 'emoji', name: 'upsidedown',
    html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><defs><style>.cls-2{fill:#231f20}</style></defs><circle cx="11.5" cy="11.5" r="11" fill="#fff" stroke="#231f20" stroke-miterlimit="10"/><path class="cls-2" d="M12 5C7.34 5 6 8 6 8s1.85-1.69 6-1.69S18 8 18 8s-1.38-3-6-3z" transform="translate(-.5 -.5)"/><circle class="cls-2" cx="6.97" cy="14.5" r="1.5"/><circle class="cls-2" cx="15.97" cy="14.5" r="1.5"/></svg>'
  },


  // Add additional icons that should be loaded on startup here!
];
