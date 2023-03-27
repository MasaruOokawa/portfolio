function mw_calc() {
  b_min = document.getElementById("b_min").value; // パッケージ記載の調理時間（分）省略可
  b_sec = document.getElementById("b_sec").value; // パッケージ記載の調理時間（秒）省略不可。60以上の値を指定しても良い
  b_w1 = document.getElementById("b_w1").value; // パッケージ記載のワット数
  b_w2 = document.getElementById("b_w2").value; // 電子レンジの持つワット数
  b_qty = document.getElementById("b_qty").value; // 個数
  if (b_min == "") {
    isec1 = Number(b_sec);
  }
  else {
    isec1 = Number(b_min) * 60 + Number(b_sec);
  }

  w1 = Number(b_w1);
  w2 = Number(b_w2);
  qty = Number(b_qty);
  
  // 電子レンジが与えるべきエネルギー量として、ワット秒を求める
  ws = w1 * isec1 * qty;

  // ワット秒を、電子レンジの持つワット数で割り、秒を求める(小数点以下切り捨て)
  isec2 = ws / w2;

  document.getElementById("result").innerHTML = "<p class='rslt'>温め時間：" //+ Math.floor(isec2) + "秒"//
  + Math.floor(isec2 / 60) + "分" + Math.floor(isec2 % 60) + "秒</p>";

  
}