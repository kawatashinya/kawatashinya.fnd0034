
////////////////// class="st1"のIDを取り出している  //////////////////////////
let getclass;
const result = []; //class="st1"のIDを配列に取り出すために初期化
getclass = document.getElementsByClassName("st1") //class="st1"の要素を取り出す
for (const array of getclass) {
  result.push(array.lastChild.id)
}
console.log(result);


//新規カメラ追加の「登録ボタン」が押されたとき
const addbutton = outerfunc();
const submit = document.getElementById("submit");
submit.addEventListener("click", addbutton);


  function submitFunction() {
    ///入力した情報を取得
    //大工程取得
    const addcategory = document.getElementById("addcategory").value;
    console.log(addcategory)

    // 中工程取得
    const addsubaddcategory = document.getElementById("addsubcategory").value;
    console.log(addsubaddcategory)

    // 工程名取得
    const addkoutei = document.getElementById("koutei").value;
    console.log(addkoutei);

    //  url取得
    const addurl = document.getElementById("url").value;
    console.log(addurl)

    for (const array of result) { 
      console.log(`getclassを表示:${array}}`)
      result.push(String(result.length + 1));
    }
    console.log(result);
    console.log(result.length)



    //  追加する親要素を取得
    const newlist1 = document.createElement("li");
    classlength = result;
    console.log(classlength);
    console.log(result)
    console.log(typeof result[0])

    newlist2 = document.getElementById("test").appendChild(newlist1);
    newlist2.innerHTML = `<button id="st${result.length + 1}" type="button" onclick="functionNum(${result.length + 1})"  value="${addurl}" >${addkoutei}</button>`;
  }
