(function (window) {
  console.log('load start');
  var appContainer = document.getElementById('app');
  var addCardButton = document.getElementsByClassName('add-new-task');

  const clicks = Rx.Observable.fromEvent(addCardButton, 'click')

  clicks.subscribe (function (e) {
    AddNewCart(e.target.parentNode.getAttribute("value"))
  });




  function AddNewCart (columnId) {
    if (!columnId) columnId = 0;

    var column = document.getElementById('column' + columnId);
    var mainDiv = document.createElement('div');
    var input = document.createElement('input');
    var textArea = document.createElement('textarea');

    textArea.classList = ['form-control'];
    input.classList = ['form-control work-on-title'];
    mainDiv.classList = ['main-div'];

    const key = Rx.Observable.fromEvent(input, 'keydown');
    key.subscribe (function (e) {
      if (e.keyCode === 13) {
        saveCartTitle(e)
      }
    });

    mainDiv.appendChild(input);
    mainDiv.appendChild(textArea);

    column.appendChild(mainDiv);
  }

  function saveCartTitle (e) {
    var title = e.target.value;
    var span = document.createElement('span');
    span.innerHTML = title;

    const clicks = Rx.Observable.fromEvent(span, 'click');

    clicks.subscribe (function (e) {
      editCartTitle(e)
    });

    div = e.target.parentNode;

    div.insertBefore(span, div.lastChild);
    div.removeChild(e.target);
  }

  function editCartTitle (e) {
    var title = e.target.innerHTML;
    var input = document.createElement('input');
    input.classList = ['form-control work-on-title'];

    const key = Rx.Observable.fromEvent(input, 'keydown');
    key.subscribe (function (e) {
      if (e.keyCode === 13) {
        saveCartTitle(e)
      }
    });

    input.value = title;
    e.target.parentNode.insertBefore(input, e.target.parentNode.lastChild);
    e.target.parentNode.removeChild(e.target)
  }

  console.log('load end');

} (window));