# Three Changes and Frictions to Landing Page
1. The hero form has a clear prompt asking how old the user is. This provides clear instruction for the user to move forward in the conversion process. Keeping forms clear and concise results in more forms being submitted. Providing clear ways to update information already entered helps collect accurate information from users.
  This would be tested through updating the age
2. Providing a table of example monthly costs provides users with a estimated monthly range. This addresses the friction of users who do not know if they want to provide information yet, but want to get a base-line quote idea before filling out a form. 
3. The final CTA bar with an anchor link to the form in the hero bar reduces the amount of forms necessary to build on a page. By having this anchor link and the page auto-scrolling provides the same user experience as clicking on an age range in the Alliance Auto Coverage final CTA bar that redirects to the next page.  

## Two Specific Ideas on Homepage from Lemonade
1. Lemonade uses easy-to-understand graphics in many of their blocks, such as the types of insurance offered thats under the hero banner as well as their "How Lemonade Works" section. I included these simple graphics on the homepage to give the "Coverage Optiosn for What You Need" section. 
2. The content on the Lemonade homepage is clear, concise, and informative. I used this in the content on the homepage. 

## Homepage Needs vs Landing Page Needs
The homepage offers a wider variety of content related to why shopping for different insurance prices is important. With this content, I was able to educated the audience that utilizing a comparison tool is the best way to get the best price served to them. Whereas with the Landing Page, it was geared towards people who are ready to convert and find options. 

## Pages

The app uses browser history routing. Configure the production host to serve `index.html` for these routes so direct links and refreshes work.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
