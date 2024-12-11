let $=ip=>document.querySelector(`#${ip}`)||
document.querySelector(`.${ip}`);
let gallery_cards=$('gallery_cards-id')
let our_jobs={
    '1': [1,2,3,4,5],
    '2': [6,7,8,9,10],
    '3': [11,12,13,14,15],
    '4': [16,17,18,19,20],
    '5': [21,22,23,24,25],
    '6': [26,27,28,29,30],
    '7': [31,32,33,34,35],
    '8': [36,37,38,39]
}

let gallery_pagination=$("gallery_pagination")

function galleryCards(pag_btn,id=''){
    let str=""
    gallery_cards.innerHTML=""
    let card_count=1
    for(let i=0;i<5;i++){
        let ind=our_jobs[pag_btn][`${i}`]
        if(ind){
            str+=`<div class="gallery_card gallery_card-${card_count}">
           <img src="./static/images/job_${ind}.jpg" alt="" title=""/>
          </div>`
        }
        
        card_count+=1
    }
    gallery_cards.innerHTML=str;
}

function galleryPagination(){
    gallery_pagination.innerHTML=""
    let str=""
    for(let key in our_jobs){
        str+=`<button class="p_btn" data-btnum="btn_${key}">${key}</button>`
    }
    gallery_pagination.innerHTML=str
}

function pagActive(activeBtn){
    let searchActive=document.querySelector('.p_btn_active')
    let btn_num=gallery_pagination.querySelector(`[data-btnum="btn_${activeBtn}"]`)
    if(searchActive){
     searchActive.classList.remove('p_btn_active')
     btn_num.classList.add('p_btn_active')
    }else{
     btn_num.classList.add('p_btn_active')
    }
}

gallery_cards.addEventListener('click',e=>{
    $('dialog_img').show()
    let dis=$('dialog_img-show')
    dis.src=e.target.src
})

$('dialog_close').addEventListener('click',e=>{
    if(e.target.tagName==='BUTTON'){
        $('dialog_img').close()
    }
})

gallery_pagination.addEventListener('click',e=>{
    if(e.target.tagName==='BUTTON'){
        galleryCards(e.target.innerText)
        pagActive(e.target.innerText)
    }
})


/*
gallery_cards

gallery_pagination

<div class="gallery_card gallery_card-1">
  <img src="./static/images/Bcg.jpg" alt="" title=""/>
</div>


 */

window.onload=e=>{
    galleryCards('1')
    galleryPagination()
    pagActive('1')
}
