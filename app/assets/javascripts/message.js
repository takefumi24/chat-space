$(function () {
  function buildHTML(message) {
    console.log(message);
    if (message.image) {
      var html =
        `<div class="messages__message" data-message-id=${message.id}>
            <div class="messages__message__upper__info">
              <div class="messages__message__upper__info__talker">
                ${message.user_name}
              </div>
              <div class="messages__message__upper__info__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
      return html;
    } else {
      var html =
        `<div class="messages__message" data-message-id=${message.id}>
            <div class="messages__message__upper__info">
              <div class="messages__message__upper__info__talker">
                ${message.user_name}
              </div>
              <div class="messages__message__upper__info__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('form')[0].reset();
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
        $('.submit-btn').attr('disabled', false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
      });
  })
});
