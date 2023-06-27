$(document).ready(() => {

    $('form').on('submit', () => {
  
        let item = $('form input');
        let todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: (data) => {
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', () => {
        let item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: (data) => {
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });