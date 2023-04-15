// lib/defineTheme.js

import { loader } from "@monaco-editor/react";

export const monacoThemes = {
    cobalt: "Cobalt",
    active4d: "Active4D",
    "brilliance-dull": "Brilliance Dull",
    "night-owl": "Night Owl",
    "oceanic-next": "Oceanic Next",
};

const defineTheme = (theme) => {
    return new Promise((res) => {
        Promise.all([
            loader.init(),
            import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
        ]).then(([monaco, themeData]) => {
            monaco.editor.defineTheme(theme, themeData);
            res();
        });
    });
};

export { defineTheme };