1. install node
2. install yarn 
3. yarn create next-app --typescript
4. remove css files and change import css parts on code

next.js with material-ui
https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript

5. install packages 
  "@emotion/cache": "^11.7.1",
  "@emotion/react": "^11.9.0",
  "@emotion/server": "^11.4.0",
  "@emotion/styled": "^11.8.1",
  "@mui/icons-material": "^5.8.0",
  "@mui/material": "^5.8.0",
  "@mui/styles": "^5.8.0",

6. change _document.tsx file
<pre>
<code>
import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../src/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

  const originalRenderPage = ctx.renderPage;
  const sheet = new ServerStyleSheet();
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          //wrap app by sheet.collectStyles because of styledcomponents
          return sheet.collectStyles(<App emotionCache={cache} {...props} />);
        },
    });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  const styleElem = sheet.getStyleElement();

  return {
    ...initialProps,
    emotionStyleTags,
    styleElem,
  };
};
</code>
</pre>

7. install styled-components
```yarn add -D styled-components, @types/styled-components```


8. change _document.tsx
<pre>
<code>
  //create styledcompoent tag.
  const styleElem = sheet.getStyleElement();

  return {
    ...initialProps,
    emotionStyleTags,
    styleElem,
  };
};

.
.
.

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          //wrap app by sheet.collectStyles because of styledcomponents
          return sheet.collectStyles(<App emotionCache={cache} {...props} />);
        },
    });


// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/', 
    "<rootDir>/.next/",
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  globals:{
    "ts-jest":{
      "tsconfig":"tsconfig.jest.json"
    }
  }
}
