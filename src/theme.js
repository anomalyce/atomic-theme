import { createAtomicApp } from '@anomalyce/atomic';
import { useCore } from '@anomalyce/atomic-core';
import { useFeature } from '@anomalyce/atomic-feature';
import tailwindConfig from '../tailwind.config.js';

createAtomicApp({
  tailwind: tailwindConfig,

  /**
   * Configure Inertia.js.
   */
  inertia: atomic => ({
    progress: {
      delay: 200,
    },
    resolveUsing: (template) => {
      const page = require(`src/pages/${template}`).default;

      page.layout = (page.layout !== null && page.layout !== false)
        ? (page.layout || require('src/layouts/App').default)
        : null;

      return page;
    },
  }),

  /**
   * Register and configure various Atomic components.
   */
  components: atomic => ([
    useCore({
      resolve: name => atomic.resolve(`Core/${name}`),
    }),

    useFeature({
      resolve: name => atomic.resolve(`Feature/${name}`),
    }),
  ]),
});
