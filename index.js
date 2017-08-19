(function (window) {
  console.log('load start');
  var appContainer = document.getElementById('app');
  var addCardButton = document.getElementById('addNewTask');

  const clicks = Rx.Observable.fromEvent(addCardButton, 'click')

  clicks.subscribe ((e) => {
    alert(e.target.id)
  });


  console.log('load end');
} (window));