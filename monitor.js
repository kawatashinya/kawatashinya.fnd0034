/**
 * @param {number} num -工程選択したID
 *  工程選択したURLと工程名を返す
 */

function functionNum(num) {
  let getStageName;
  let geturl;
  getStageName = document.getElementById(num).innerText;
  geturl = document.getElementById(num).getAttribute('value');

  document.getElementById('monitor').src = geturl;
  document.getElementById("stagename").innerText = `工程名:${getStageName}`;
}


