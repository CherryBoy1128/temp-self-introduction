#  自己紹介カードを作ってみよう！

「どこを書き換えたら、どう変わるか」をまとめたので、自分の好きなデザインに改造してみましょう！

---

##  1. 文字を書き換える (`src/App.js`)

`src/App.js` を開いて、コメント（`{/* ... */}`）が書いてある場所を自分の情報に書き換えましょう。

* **名前や学科を書き込む**
  `<div>` と `</div>` の間に文字を入れれば画面に表示されます。
  
  <例>
  　<div className="name">自分の名前</div>
  　<div className="myDepartment">〇〇〇工学科</div>
  全部で６つ以上の項目を作ってください。３つは決めさせてもらいましたが、あとの３つ以上は自分の書きたいものを書いてください！

  <div className="profile-row">  
    <div className="label"></div>
    <div className=""></div>
  </div>

　７個以上書きたい人は上のコードをコピペして使ってください！（わからなかったら先輩に聞いてください）
  
###  2. 文字にスタイルを当てる（'src/App.css'）

`App.css`の13行目のカラーを変えると上部の背景の色を変えることができます。

* **ClassNameをApp.CSSに書いてスタイルを当てる**
  <例>　　　　　　　　↓これ 
  　<div className="name">自分の名前</div>　　（App.js）
  　
  　.name{
       ここにスタイルを当てるコードを書く
    }　　　　　　　　　　　　　　　　　　　　　 　(App,css)


**今回使えそうなコード一覧**
**文字のデザイン**
color: したい色;        文字の色を変える
font-size: 〇px;        文字のサイズを変える
font-weight: bold; 　　　文字の太さを変える（pxで指定もできるが、基本これでいい）
text-align: center; 　　　文字のある場所が変わる（これだと中央寄せ）

**写真関連**
background-image: url(画像のURL);
width: 〇px;              画像の横幅を変える
height: 〇px;             画像の高さを変える
border-radius: 〇%;       触らないで画像の角を丸める

**余白・配置**
margin: 〇px;             文字のある要素の外側に空白を作る
padding: 〇px;            文字のある要素の内側に空白を作る
background-color: 〇px;   背景の色を変える


保存（Ctrl + S）をした瞬間に画面が更新されます
間違えてしまっても、Ctrl + Z　でもとに戻そう！
エラーが出たり、わからないことがあれば、気軽に先輩に聞いてください！