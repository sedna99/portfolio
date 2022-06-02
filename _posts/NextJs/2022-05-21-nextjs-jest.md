---
title: setting jest on nextjs and typescript
author: sedna99
date: 2022-05-2
category: NextJs
layout: post
---


1. install jest  
```yarn add -D jest @types/jest jest-environment-jsdom babel-jest babel-plugin-styled-components @testing-library/react @testing-library/jest-dom```

2. set presets on .babelrc
<pre>
<code>
{
  "presets": ["next/babel"]
}
</code>
</pre>

3. add env options to eslintrc.json
<pre>
<code>
"env": {
  "jest": true
}
</code>
</pre>

4. create jest.config.json
<pre>
<code>
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
</code>
</pre>

5. create jest.setup.json
```import "@testing-library/jest-dom";```

6. make test code

7. run test