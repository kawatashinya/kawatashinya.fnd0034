let monitorSerect;
let stageSerect;

/**
 * @param {string} monitor -選択したモニタ
 * @param {string} stage -選択した工程名
 */
function monitorserect(monitor, stage) {
  monitorSerect = monitor;
  stageSerect = stage;
  document.getElementById(monitor).classList.add("frameBorder");
  if (monitor === "monitor1") {
    return   document.getElementById("monitor2").classList.remove("frameBorder");
  } else if (monitor === "monitor2") {
    return   document.getElementById("monitor1").classList.remove("frameBorder");
  }
}

/**
 * @param {number} num -工程選択したID
 *  工程選択したURLと工程名を返す
 */
function functionNum(num) {
  let getStageName;
  let geturl;
  getStageName = document.getElementById(num).innerText;
  geturl = document.getElementById(num).getAttribute('value');

  document.getElementById(monitorSerect).src = geturl;
  document.getElementById(stageSerect).innerText = `工程名:${getStageName}`;
}
