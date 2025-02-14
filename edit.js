
////////////////// class="st1"のIDを取り出している  //////////////////////////
// let getclass;
// const result = []; //class="st1"のIDを配列に取り出すために初期化
// getclass = document.getElementsByClassName("st1") //class="st1"の要素を取り出す
// for (const array of getclass) {
//   result.push(array.lastChild.id)
// }
// console.log(result);


//新規カメラ追加の「登録ボタン」が押されたとき
const submit = document.getElementById("submit");
submit.addEventListener("click", submitFunction);


  function submitFunction() {

      
      ///入力した情報を取得
      //大工程取得
      const addcategory = document.getElementById("addcategory");
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

      let getclass;
      const result = [];
      getclass = document.getElementsByClassName(addsubaddcategory)//area1が入っている
      console.log(getclass);
      
      for (const array of getclass) { 
          console.log(`getclassを表示:${array.id}}`)
          result.push(Number(array.id));
        //   result.push(String(result.length + 1));
    }
    console.log(result);


    // console.log(result.length)



    //  追加する親要素を取得
    const newlist = document.createElement("li");
    // classlength = result;
    // console.log(classlength);
    // console.log(result)
    // console.log(typeof result[0])

    newlist1 = document.getElementById(addsubaddcategory).appendChild(newlist);
    newlist1.innerHTML = `<button id="st${result.length + 1}" type="button" onclick="functionNum(${result.length + 1})"  value="${addurl}" >${addkoutei}</button>`;
  }
