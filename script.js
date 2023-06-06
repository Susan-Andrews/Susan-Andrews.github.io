// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20 ){
//             $('.navbar').addClass('sticky');
//         }else{
//             $('.navbar').removeClass('sticky');
//         }

//     });
//     // toggle menu

//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");

        
//     });
// });


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}