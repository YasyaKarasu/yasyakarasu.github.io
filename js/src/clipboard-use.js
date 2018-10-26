  /*ҳ��������ɺ󣬴������ư�ť*/
  !function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      //fa fa-globe����ȥ������滻�Լ���Ҫ��ͼ��
copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
    }
    initCopyCode();
  }(window, document);