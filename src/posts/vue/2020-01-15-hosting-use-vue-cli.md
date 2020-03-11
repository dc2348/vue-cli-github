# Vue-CLI를 이용하여 Vue 프로젝트를 Github Pages에 호스팅하기


## 배포파일 생성하기
```
npm run build
```

## 배포파일 업로드하기
```
cd dist
git init
git add -A
git commit -m "BLD:Add new version"
git push -f https://github.com/dc2348/dc2348.github.io.git master
```

<br>

---
### :bookmark_tabs: 참조(references)
- [https://cli.vuejs.org/guide/deployment.html#github-pages](https://cli.vuejs.org/guide/deployment.html#github-pages)
- [https://cli.vuejs.org/config/#publicPath](https://cli.vuejs.org/config/#publicPath)
- [https://soobakba.tistory.com/16](https://soobakba.tistory.com/16)