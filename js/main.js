'use strict';

/*---------------------------------------------------------------------------------
このプログラムはUdemyの
[HTML/CSS/JavaScript] フロントエンドエンジニアになりたい人の Webプログラミング入門
のセクション7を参考に制作しました。
とてもわかり易い講座なので、JavaScriptを学習されている方にオススメです。

■ jsonファイルの変数名について
path:写真のパス（相対パス）
name:撮影者名
caption:写真の名前（titleとかに変えようと思いましたが、とりあえずこのままで。）
---------------------------------------------------------------------------------*/

//予めテンプレートの宣言をしておく
let imgNest; //constでは動かないのでletで。

//jsonの読み込み（ほぼ定型文？）
const images = new XMLHttpRequest();
images.open('GET', 'js/data.json');
images.responseType = 'json';
images.send(null);

//jsonのデータ処理
images.onreadystatechange = function () {
  if (images.readyState === XMLHttpRequest.DONE && images.status == 200) {
    /*

    1: UNSENT           :インスタンスができた
    2: OPENED           :openメソッドを利用した
    3: HEADERS_RECEIVED :ヘッダ受信可
    4: LOADING          :データ受信中
    5: DONE             :通信完了

    */

    //画像周りを書き出す部分は、講座の内容とは異なり、自分なりに知っていることを利用して書きました。
    for (let i = 0; i < this.response.length; i++) {
      let img_data = this.response[i];

      //画像の入る場所のパーツ
      imgNest = `
      <div class="photo col-lg-4">
        <img src="${img_data.path}">
        <div class="inner">
          <p>${img_data.caption}<span>${img_data.name}</span></p>
        </div>
      </div>
      `;
      document.getElementById('img_unit').insertAdjacentHTML('beforeend', imgNest);
    }
  }
}



