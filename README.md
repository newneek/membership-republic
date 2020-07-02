# react-native-republic

Republic design system for React Native.

[toc]

## 설치 및 설정

### 서브 모듈 추가

React Native 프로젝트 루트에서 아래 명령 실행

~~~sh
git submodule add --name react-native-republic --force git@bitbucket.org:publyproduct/react-native-republic.git ./republic
~~~



### 관련 패키지 추가

- npm

~~~sh
npm install eslint-plugin-import eslint-import-resolver-alias --save-dev
~~~



- yarn

~~~sh
yarn add eslint-plugin-import eslint-import-resolver-alias --dev
~~~



### 설정 파일 수정

- `babel.config.js`

~~~js
module.exports = {
  ...

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@republic': './republic',
        },
      },
    ],
  ],

  ...
};

~~~

  

- `.eslintrc.js`

~~~js
module.exports = {
  ...

  settings: {
    'import/resolver': {
      alias: {
        map: [['@republic/', './republic']],
      },
    },
  },

  ...
};
~~~

  

- `tsconfig.json`

~~~json
{
  "compilerOptions": {
    ...

    "baseUrl": ".",
    "paths": {
      "@republic/*": ["./republic/*"]
    }

    ...
  }
}
~~~



## 사용

### 스타일, 변수 불러오기 (from foundation)

~~~typescript
// 스타일만 불러올 때
import { Style } from '@republic/foundation';

// 변수만 불러올 때
import { Variables } from '@republic/foundation';

// 스타일, 변수 모두 불러올 때
import { Style, Variables } from '@republic/foundation';
~~~

