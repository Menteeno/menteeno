/*
This file is present to satisfy a requirement of the Tailwind CSS IntelliSense
extension for Visual Studio Code.

https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

The rest of this file is intentionally empty.
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './themes/hugoplate/layouts/**/*.html',
    ],
    theme: {
        extend: {
            spacing: {
                'size-16': '4rem', // 64px
                'size-24': '6rem', // 96px
                'size-18': '4.5rem', // 72px
            },
            width: {
                'size-18': '4.5rem', // 72px
            },
        },
    },
    plugins: [],
};