import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'stylelint';

module.exports = {
    plugins: [
        postcssPresetEnv(),
        autoprefixer(),
        cssnano({
            preset: 'default',
        }),
        postcssFlexbugsFixes(),
        stylelint(),
    ],
};
