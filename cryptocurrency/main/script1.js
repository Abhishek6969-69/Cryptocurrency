

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let url="https://api.coingecko.com/api/v3/simple/price?"
 
let price1=document.querySelector("#price1");
let price2=document.querySelector("#price2");
let price3=document.querySelector("#price3");

async function call(){
    let response1=await fetch(`${url}ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=3`);
    let data1=await response1.json();
   price1.innerText=`$${data1.bitcoin.usd}`;
   let response2=await fetch(`${url}ids=Ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=3`);
    let data2=await response2.json();
   price2.innerText=`$${data2.ethereum.usd}`;
   let response3=await fetch(`${url}ids=Ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=3`);
    let data3=await response3.json();
   price3.innerText=`$${data3.ethereum.usd}`;
  }
       call()
  var tl=gsap.timeline();
  tl.from(".header",{
    opacity:0,
    y:20,
        duration:1,
  })
  .from(" #h1",{
    opacity:0,
    y:20,
        duration:1,
        scale:2,
  })
  .from(" #h2",{
    opacity:0,
    y:20,
        duration:1,
        scale:2,
  })

  .from(".list",{
    opacity:0,
    y:20,
        duration:2,
        scale:0.2,
  })
  
  window.addEventListener("mousemove",(evt)=>{
   document.querySelector(".circle").style.transform=`translate(${evt.clientX}px,${evt.clientY}px)`
  })
   

document.querySelectorAll(".elem").forEach((elem)=>{
  var rotate=0;
  var diffrot=0;
  elem.addEventListener("mousemove",(detail)=>{
      var diff=detail.clientY-elem.getBoundingClientRect().top;
       diffrot=detail.clientX-rotate;
      rotate=diffrot;
      gsap.to(elem.querySelector("img"),{
          opacity:1,
          top:diff,
          left:detail.clientX,
          rotate:gsap.utils.clamp(-10,10,diffrot),
          
      })
  })
 elem.addEventListener("mouseleave",(val)=>{
  gsap.to(elem.querySelector("img"),{
      opacity:0,
      
  })
 })
})