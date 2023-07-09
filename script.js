
// Navbar Scroll
const menu = document.querySelector("#checkbox_toggle")
const about_us = document.getElementById("about-us")
const blog = document.getElementById("blog")
const projects = document.getElementById("projects")
const contacts = document.getElementById("contacts")
const hamburger = document.querySelector(".hamburger")
const Navbar = document.querySelector(".navbar")
let toggle = 1;

hamburger.addEventListener('click', ()=>{
    if(toggle%2){
        Navbar.style.backgroundColor = 'rgba(80, 79, 79, 0.7)'
        toggle++
    }
    else{
        Navbar.style.backgroundColor = 'rgba(0,0,0,0)'
        toggle++
    }
})

if(window.innerWidth < 768){
    about_us.addEventListener('click', ()=>{
        menu.checked = false;
    })
    blog.addEventListener('click', ()=>{
        menu.checked = false;
    })
    projects.addEventListener('click', ()=>{
        menu.checked = false;
    })
    contacts.addEventListener('click', ()=>{
        menu.checked = false;
    })
}

//Mobile port fix
function updateTitles() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var title1 = document.getElementById("title1");
  var title2 = document.getElementById("title2");
  var title3 = document.getElementById("title3");

  if (viewportWidth < 768) {
    title1.textContent = "_";
    title2.textContent = "IIM";
    title3.textContent = "_";
  } else {
    title1.textContent = "Idea";
    title2.textContent = "Incubator";
    title3.textContent = "MGIT";
  }
}

// Call the function initially
updateTitles();

// Listen for window resize events and update the titles accordingly
window.addEventListener("resize", updateTitles);




//Wave Animation on Scroll
let wave1 = document.getElementById('wave1')
let wave2 = document.getElementById('wave2')
let wave3 = document.getElementById('wave3')
let wave4 = document.getElementById('wave4')
let wave5 = document.getElementById('wave5')
let title = document.querySelector('.wave-title')
let middle = document.querySelector('.wave-title .middle')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    wave1.style.backgroundPositionX = -value*1 + 'px';
    wave2.style.backgroundPositionX = -value*1.5 + 'px';
    wave3.style.backgroundPositionX = -value*2 + 'px';
    wave4.style.backgroundPositionX = -value*2.5 + 'px';
    wave5.style.backgroundPositionX = -value*2 + 'px';
    if(value>350){
        title.lastElementChild.style.display = 'none';
        console.log("working");
    }
    else{
        title.lastElementChild.style.display = 'block';
    }
    if(value > 550){
        middle.style.display = 'none';
    }
    else{
        middle.style.display = 'block';
    }
    if(value>700){
        title.firstElementChild.style.display = 'none';
    }
    else{
        title.firstElementChild.style.display = 'block';
    }
})

//Image Slider
let index = 0;
let messages = ["Hello There", "Hayaku Hayaku", "Watashiva namiva spaida man des", "Yamate kudasai"];
let images = ["img1", "img2", "img3", "img4"]

const right = document.querySelector('.btn_right');
const left = document.querySelector('.btn_left');
const matter = document.querySelector('.testimonial_matter');
const image = document.querySelector('.image_profile')

right.addEventListener('click', ()=>{
    index++;
    if(index >= 4) index=0;
    matter.innerHTML = messages[index];
    image.style.backgroundImage = "url('images/"+images[index]+".jpg')";

})
left.addEventListener('click', ()=>{
    index--;
    if(index < 0) index=3;
    matter.innerHTML = messages[index];
    image.style.backgroundImage = "url('images/"+images[index]+".jpg')";
})


//Announce
const announce_btn = document.querySelector('.announcement button')
const announce_box = document.querySelector('.announce')
let announce_toggle = false

announce_btn.addEventListener('click', ()=>{
    if(!announce_toggle){
        announce_box.style.display = 'block'
        announce_box.style.cssText = "animation: slide-in .5s ease;animation-fill-mode: forwards;"
        announce_toggle = !announce_toggle
    }
    else{
        announce_box.style.display = 'none'
        announce_box.style.cssText = "animation: slide-out .5s ease;animation-fill-mode: forwards;"
        announce_toggle = !announce_toggle
    }
})