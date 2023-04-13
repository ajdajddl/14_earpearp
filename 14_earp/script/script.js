//🎇🎇주문영역 상품 이미지🎇🎇
const big = document.querySelector('.img .big img')
const small = document.querySelectorAll('.img .small a')
console.log(big, small) //target=a*3 index= 0,1,2

small.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//새로고침 기능 막기
        // console.log(target,index)
        big.src = `./images/product_0${index+1}.jpg` 
    })
})
//주문 영역 상품 옵션 선택
const brand = document.querySelector('.b #brand')
const galaxy = document.querySelector('#galaxy')
const iphone = document.querySelector('#iphone')
console.log(brand, galaxy, iphone)
iphone.style.display = 'none'//아이폰 숨기기(초기값)
galaxy.disabled = true//비활성화(초기값)
brand.addEventListener('change',()=>{
    if(brand.options[2].selected == true){//아이폰
        brand_dis(iphone,false)
    }else if(brand.options[1].selected == true){//갤럭시
        brand_dis(galaxy,false)
    }else {//필수 옵션 안내 (위 조건 아이폰, 갤럭시 모두 아님)
        brand_dis(galaxy,true)
        galaxy.options[0].selected = true
    }
})

function brand_dis(target,boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    galaxy.disabled = boolean
}
//기종 선택시 주문영역에 기종명 출력하기
const model = document.querySelector('.select #model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(model,galaxy_op,iphone_op)

//갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    model.appendChild(galaxy_op[galaxy_index])//내가 선택한 객체의 마지막 child의 위치에 배치해라
    // console.log(galaxy_op[5])
})
//아이폰 기종 출력
iphone.addEventListener('change',()=>{
    console.log(iphone)
})
//가격표시
const num1 = document.querySelector('.s_right input')
const cancle = document.querySelector('#cancle')
const total_price = document.querySelector('.total_price')
let price = 17000
let total 
let num = 0

num1.addEventListener('change',()=>{
    if(num1.value>0){
        console.log(num1.value)
        total = price*num1.value
        total_price.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('그만 눌러.')
        num1.value = 1
    }
})
cancle.addEventListener('click',()=>{
        console.log(num.value)
        num1.value = 1
        total_price.innerHTML = price.toLocaleString('ko-kr')
})