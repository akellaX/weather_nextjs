import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
        setupNodeEvents(on, config) {
            addMatchImageSnapshotPlugin(on, config);
        },
    },

    e2e: {
        setupNodeEvents(on, config) {},
    },
});
