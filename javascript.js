var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


// function highLight(text) {
//     let input = document.getElementById('search-text').value;
//     input = input.toLowerCase();
//     let innerHTML = input.innerHTML;
//     let index = innerHTML.indexOf(text)
//     if (index >= 0) {
//         innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//         input.innerHTML = innerHTML;
//     }
// }



// function search(string){
//     window.find(string);
// }