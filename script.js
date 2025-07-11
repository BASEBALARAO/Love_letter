$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    if (!envelope.hasClass("open")) {
      envelope.addClass("open").removeClass("close");
      document.getElementById("loveSong").play();
    }
  }
  function close() {
    if (!envelope.hasClass("close")) {
      envelope.addClass("close").removeClass("open");
      const audio = document.getElementById("loveSong");
      audio.pause();
      audio.currentTime = 0;
    }
  }
});
