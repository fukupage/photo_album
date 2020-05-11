'use strict';

/*
このプログラムはUdemyの
[HTML/CSS/JavaScript] フロントエンドエンジニアになりたい人の Webプログラミング入門
のセクション8を参考に制作しました。
とてもわかり易い講座なので、JavaScriptを学習されている方にオススメです。

※表示部分はmain.jsのものを流用しています。
講座の方ではjqueryの記述になっていましたが、こういった記述のほうが明示的な気がしたので、そちらを利用しました。

注意：jqueryはスリムビルドのものを利用するとajax通信ができないようです。
https://develtips.com/javascript/118
*/

//テンプレート部分の宣言
let imgNest; //constでは動かないのでletで。

//jsonの読み込み
$.getJSON('js/data.json', function (images) {
  for (let i = 0; i < images.length; i++) {
    imgNest = `
      <div class="photo col-lg-4">
        <img src="${images[i].path}">
        <div class="inner">
          <p>${images[i].caption}<span>${images[i].name}</span></p>
        </div>
      </div>
    `;
    document.getElementById('img_unit').insertAdjacentHTML('beforeend', imgNest);
  }
})
