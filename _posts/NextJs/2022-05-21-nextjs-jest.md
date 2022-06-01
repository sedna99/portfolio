1. install jest
jest
@types/jest
jest-environment-jsdom
babel-jest
babel-plugin-styled-components
@testing-library/react
@testing-library/jest-dom   // 가상 돔 렌더링

2. set presets on .babelrc

{
  "presets": ["next/babel"]
}

3. add env options to eslintrc.json
"env": {
  "jest": true
}

4. create jest.config.json
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

5. create jest.setup.json
import "@testing-library/jest-dom";

6. make test code

7. run test