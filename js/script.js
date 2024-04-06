'use strict'

const RasAdv = document.querySelector('.promo__adv'),
  btn = RasAdv.querySelector('button'),
  bgWrapper = document.querySelector('.promo__bg'),
  drGenre = bgWrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list');

  const  rasm =  [
    {
      img:"url(img/spiderman.webp)",
      text:"fantastic"
    },
    {
      img:"url(img/romantico.jpg)",
      text:"romantic"
    },
    {
      img:"url(img/zoo.jpg)",
      text:"zoo"
    },
    {
      img:"url(img/2.jpg)",
      text:'comedy'

    },
    {
      img:'url(img/2.jpg)',
      text:'drama'
    }
    
    

  ]

 

// function Randomm() {
//   const radomSon = parseInt(Math.random() * rasm.length )
// }


// setTimeout(Time,3000)

//  function Time(){
//   RasAdv.style.display = 'none'
// }
btn.addEventListener('click', () =>{
  RasAdv.style.display = 'none'
  setInterval(()=>{
    RasAdv.style.display = 'block'
  }, 5000)
})

 function BgAlmashish(){
    const radomSon = parseInt(Math.random() * rasm.length )
    console.log(radomSon);
    bgWrapper.style.background = rasm[radomSon].img
    drGenre.textContent = rasm[radomSon].text
}

bgWrapper.addEventListener('dblclick',BgAlmashish)

// setInterval(BgAlmashish,3000)



const kinoNomi = {
 kinolar:[
  'Spider Man',
  'Zoo',
  'Romanric',
  'Comedy',
  'Drama'

 ]

}

// seriesList.innerHTML = ''

// kinoNomi.kinolar.forEach((item) =>{

// })