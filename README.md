##router install
npm install react-router-dom

useEffect  ?
컴포넌트가 랜더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook

gh-pages 패키지 설치
npm install gh-pages --save-dev

 package.json 파일을 열고
 
"scripts": {
  "deploy": "gh-pages -d build"
}

npm run build


npm run deploy


render
component에 routeprops 이외에 다른 props를 넘겨줘야할 때 사용하기 좋은 방법

<Route path="/user/:username" render={(props) => <Component {...props} data={data} />)} />