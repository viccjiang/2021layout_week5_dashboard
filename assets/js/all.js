"use strict";

ClassicEditor.create(document.querySelector('#editor'))["catch"](function (error) {
  console.error(error);
});
$(".transactionType").on("click", function () {
  $(".fadeInUpBig").show();
  $("#editor").stop(true, true).animate({
    height: "300px"
  }, 500);
});
$(".site_item1").on("click", function () {
  $(".fadeInUpBig").hide();
});
//# sourceMappingURL=all.js.map
