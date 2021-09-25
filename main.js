for(let i=0;i<=3;i++){
var toastTrigger = document.getElementById(`liveToastBtn${i}`)
var toastLiveExample = document.getElementById(`liveToast${i}`)
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
}




// for(let j=0;j<=6;j++){
// var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// var alertTrigger = document.getElementById(`liveAlertBtn${j}`)

// function alert(message, type) {
//   var wrapper = document.createElement('div')
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" aria-label="Close"></button></div>'

//   alertPlaceholder.append(wrapper)
  
// }


// if (alertTrigger) {
  
//   alertTrigger.addEventListener('click', function () {
//     alert(`${j}please comeback later!`, 'success')
//     $(".alert").delay(1000).slideUp(200, function() {
//       $(this).alert.hide();
//   });
//   })
// }
// }

for(j=0;j<=6;j++){
$(document).ready(function(){
$('.butt').click(function(){
  $('#liveAlertPlaceholder').show('fade');

  setTimeout(function(){
    $('#liveAlertPlaceholder').hide('fade');
  },3000)
});


});
}

