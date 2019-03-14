# CSS Sprites原理
* CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，
* 再利用CSS的”background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。

```javascript
.comment {
    background-image: url(images/sprite.png);
    background-position: 0px 0px;
    background-size: 192px 192px;
}

.bubble {
    background-image: url(images/sprite.png);
    background-position: -64px 0px;
    background-size: 192px 192px;
}

span {
    display: inline-block;
    width: 64px;
    height: 64px;
    border: 3px solid #ccc;
    background-repeat: no-repeat;
    margin: 5px;
}
```
## 注意
* CSS Sprites在维护的时候比较麻烦，如果页面背景有少许改动，一般就要改这张合并的图片，无需改的地方最好不要动，这样避免改动更多的css
* 在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景

# 项目运行
* yarn install or npm install
* node CSSSprite.js






