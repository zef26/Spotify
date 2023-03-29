let doc = document
let menu = doc.querySelector('.left-aside')
let left_arrow = doc.querySelector('.left-arrow')
let bg_lg = doc.querySelector('.big-logs')
let right_arrow = doc.querySelector('.right-arrow')
let mini_logo = doc.querySelector('.mini-logot')
let top_log = doc.querySelector('.logs')
let libr = doc.querySelector('.playlist')
let hm = doc.querySelector('.hm')
let sr = doc.querySelector('.sr')
let lb = doc.querySelector('.lb')
let lk = doc.querySelector('.lk')
let home = doc.querySelector('.home')
let search = doc.querySelector('.search')
let lib = doc.querySelector('.lib')
let like = doc.querySelector('.like')
let btn_menu = doc.querySelector('.btn-menu')
let dwd_txt = doc.querySelector('.dwd-txt')
let dwd_src = doc.querySelector('.dwd') 
let l_as = doc.querySelector('.l-as')
let home_src = doc.querySelector('.home-img')
let search_src = doc.querySelector('.search-im')
let libary_src = doc.querySelector('.libary-im')
let like_src = doc.querySelector('.like-im')
let hover_logo = doc.querySelector('.big-logs')
let logo_spot = doc.querySelector('.log-spot')
let green_spot = doc.querySelector('.green-spot')
let cont = doc.querySelector('.content')
let header = doc.querySelector('header')
let acc = doc.querySelector('.acount')
let fr_ar_lf = doc.querySelector('.lft-arr-fr')
let fr_ar_rg = doc.querySelector('.rg-arr-fr')
let container = doc.querySelector('.container')
let left_menu = doc.querySelector('.lr-active')
let menu_left = doc.querySelector('.friends-activ')
let plays = doc.querySelector('.plays')
let friacc = doc.querySelector('.friac-icons')
let arows = doc.querySelector('.arrows')
let slider_arrow = doc.querySelector('.sl-arrow')
let wrap1 = doc.querySelector('.wrap1')
let kivilkim = doc.querySelector('.kivilkim')
let disWeekly = doc.querySelector('.dis-weekly')
let inpSrch = doc.querySelector('.inp-srch')
let srchIcon = doc.querySelector('.srch-icon')
let homeCont = doc.querySelector('.home-cont')
let weeklyCont = doc.querySelector('.weekly')
let album_src = doc.querySelector('.album-src')
let nazv = doc.querySelector('.nazv')
let arts = doc.querySelector('.arts')
let player_left_icons = doc.querySelector('.pl-lf-icons')
let right_timer = doc.querySelector('.rg-timer')
let curr_time  = doc.querySelector('.left-timer')
let play = doc.querySelector('.play')
let pause = doc.querySelector('.pause')
let box_click = doc.querySelector('.block-click')
let prog_bar = doc.querySelector('.progbar')
let inprobar = doc.querySelector('.inprogbar')
let head_left = doc.querySelector('.hed-left')
let fularsiz = doc.querySelector('.fularsiz')
let vers5 = doc.querySelector('.vers5')
let xten = doc.querySelector('.xtent')
let head_libar = doc.querySelector('.head-libar')
let libCont = doc.querySelector('.libary')
let hed_right = doc.querySelector('.hed-right')
let next_btn = doc.querySelector('.next-btn')
let prev_btn = doc.querySelector('.prev-btn')
let random_btn = doc.querySelector('.random')
let random_mob = doc.querySelector('.random2')
let repeat_btn = doc.querySelector('.repeat-btn')
let repeat_btn2 = doc.querySelector('.repeat-btn2')
let searchCont = doc.querySelector('.search-content')
let likedCont = doc.querySelector('.liked-songs')
let indx = doc.querySelector('.indx')
let registor = doc.querySelector('.registor-container')
let login = doc.querySelector('.login-container')
let sign_btn = doc.querySelector('.sign')
let login_btn = doc.querySelector('.login')
let formReg = doc.querySelector('.reg-form')
let regName = doc.querySelector('.name-inp')
let regpass = doc.querySelector('.regpass')
let acpReg = doc.querySelector('.acppass')
let formLogin = doc.querySelector('.login-form')
let log_btn = doc.querySelector('.log-btn')
let login_name = doc.querySelector('.login-name')
let login_pass = doc.querySelector('.login-pass')
let profile = doc.querySelector('.profile')
let name_account = doc.querySelector('.name-your')
let made_name = doc.querySelector('.made-your-name')
let my_acc = doc.querySelector('.my-acc')
let viyti = doc.querySelector('.viyti')
let tops = doc.querySelector('.tops')
let centers = doc.querySelector('.centers')
let bottoms = doc.querySelector('.bottoms')
let brg_menu = doc.querySelector('.brg-menu')
let brg_box = doc.querySelector('.brg-box')
let home2 = doc.querySelector('.home2')
let search2 = doc.querySelector('.search2')
let lib2 = doc.querySelector('.lib2')
let like2 = doc.querySelector('.like2')
let all_acc = doc.querySelector('.all-acount')
let progbar_mob1 = doc.querySelector('.progbar2')
let inprobar_mob1 = doc.querySelector('.inprogbar2')
let right_timer2 = doc.querySelector('.rg-timer2')
let curr_time2  = doc.querySelector('.left-timer2')
let progbar_mob2 = doc.querySelector('.progbar3')
let inprobar_mob2 = doc.querySelector('.inprogbar3')
let player = doc.querySelector('.player')
let mob_type2 = doc.querySelector('.mob-type2')
let sver = doc.querySelector('.sver')
let album_mob = doc.querySelector('.album-mb')
let nazv_mob = doc.querySelector('.nazv-mob')
let isp_mob = doc.querySelector('.isp-mob')
let like_dot = doc.querySelector('.like-dot')
let next_mob = doc.querySelector('.next-btn2')
let prev_mob = doc.querySelector('.prev-btn2')
let mob_play = doc.querySelector('.mob-play')
let mob_pause = doc.querySelector('.mob-pause')
let play2 = doc.querySelector('.play2')
let pause2 = doc.querySelector('.pause2')
let big_pp = doc.querySelector('.big-pp')
let gree_dot = doc.querySelector('.green-dot')
let weekly_btns = doc.querySelector('.weekly-btns')
let repeat_once = doc.querySelector('.repeat-once')
let repeat_once2 = doc.querySelector('.repeat-once2')
let mobile_play = doc.querySelector(".mobile-play")
let mix1 = doc.querySelector('.mix1')
let mix1_cont = doc.querySelector('.mix1-cont')
let mix2 = doc.querySelector('.mix2')
let mix2_cont = doc.querySelector('.mix2-cont')
inpSrch.onclick = ()=>{
    home.classList.remove('bg-btns')
    search.classList.add('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.remove('bg-btns')
    home_src.src = './img/menu-home.svg'
    search_src.src = './img/search-bold.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.add('activ2')
    likedCont.classList.remove('activ2')
}

let randomizer = false
let repeat = false

let mob_pp = doc.querySelector('.mobile-play')
sver.onclick = ()=>{
    mob_type2.classList.remove('mob-bot')
}
// бургер меню
brg_menu.onclick = ()=> {
    centers.classList.toggle('hide')
    tops.classList.toggle('rot-top')
    bottoms.classList.toggle('rot-bot')
    brg_box.classList.toggle('brg-anim') 
}
sign_btn.onclick = ()=>{
    indx.classList.add('not-active')
    registor.classList.add('activ2')
}
login_btn.onclick = ()=>{
    indx.classList.add('not-active')
    login.classList.add('activ2')
}
my_acc.onclick = ()=>{
viyti.classList.toggle('active')
viyti.classList.toggle('viyti-click')
}
let formdata = {}
viyti.onclick = ()=>{
    localStorage.removeItem('formdata')
    setTimeout(()=>{
        location.reload()
    },100)
}

function registration(event){
    event.preventDefault()
if(regpass.value === acpReg.value){
    event.preventDefault()
    let objUser = {
        name :regName.value,
        password : regpass.value
    }
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/users.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(objUser)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))

            setTimeout(()=>{
                window.location.reload()
            },1000)
}
}
formReg.addEventListener('submit',registration)
function login_user(){
    indx.classList.remove('not-active')
    login.classList.remove('activ2')
    acc.classList.add('not-active')
    profile.classList.add('active')
    name_account.textContent = formdata.username
    made_name.textContent = formdata.username
}

    fetch('https://spotify-573f4-default-rtdb.firebaseio.com/users.json')
    .then (data => data.json())
    .then(json =>{
        log_btn.onclick = ()=>{
            let objusers = Object.values(json)
        for(let item of objusers){
            if(item.password == login_pass.value  && item.name == login_name.value){
                localStorage.setItem('formdata', JSON.stringify(formdata))
                login_user()
            }       
        }
    }
    })

    formLogin.addEventListener('input',function(event){
        formdata[event.target.name]=event.target.value
    })
    if(localStorage.getItem('formdata')){
        formdata = JSON.parse(localStorage.getItem('formdata'))
        
        login_user()
    }
    fetch('https://spotify-573f4-default-rtdb.firebaseio.com/users.json')
    .then (data => data.json())
    .then(json =>{
    
            let objusers = Object.values(json)
        for(let item of objusers){
            if(item.password == login_pass.value  && item.name == login_name.value){
                login_user()
         }      
        }
    })
//Левое меню
arows.onclick = ()=>{
    

        
    
    left_arrow.classList.toggle('not-active')
    bg_lg.classList.toggle('not-active')
    right_arrow.classList.toggle('active')
    mini_logo.classList.toggle('active')
    top_log.classList.toggle('colmrev')
    libr.classList.toggle('not-active')
    hm.classList.toggle('not-active')
    sr.classList.toggle('not-active')
    lb.classList.toggle('not-active')
    lk.classList.toggle('not-active')
    home.classList.toggle('wdt-hov')
    librs.classList.add('not-active')
    search.classList.toggle('wdt-hov')
    lib.classList.toggle('wdt-hov')
    like.classList.toggle('wdt-hov')
    btn_menu.classList.toggle('btn-menu-min')
    dwd_txt.classList.toggle('not-active')
    dwd_src.classList.toggle('active')
    menu.classList.toggle('width-mini')
    l_as.classList.toggle('l-as-mini')
    cont.classList.toggle('confx')
    header.classList.toggle('mrg-lft')
    acc.classList.toggle('mrg-rg')
    profile.classList.toggle('mrg-rg')
    menu.classList.toggle('dpl')
    menu.classList.toggle('dpl1')
    if(menu_left.classList.contains('right-menu') && menu.classList.contains('dpl')){
        kivilkim.classList.add('rg-wr-width')
}
}
//Лого в левой меню
hover_logo.onmouseenter = ()=>{
    logo_spot.classList.add('not-active')
    green_spot.classList.add('active')
}
//Лого в левой меню
hover_logo.onmouseleave = ()=>{
    logo_spot.classList.toggle('not-active')
    green_spot.classList.toggle('active')
}
//кропка home
home.onclick =()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home.classList.add('bg-btns')
    search.classList.remove('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.remove('bg-btns')
    home_src.src = './img/bold-home.svg'
    search_src.src = './img/search-menu.svg'
    libary_src.src = './img/libary.svg '
    like_src.src = './img/like.svg'
    homeCont.classList.remove('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.remove('activ2')
}
//кропка search
search.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home.classList.remove('bg-btns')
    search.classList.add('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.remove('bg-btns')
    home_src.src = './img/menu-home.svg'
    search_src.src = './img/search-bold.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.add('activ2')
    likedCont.classList.remove('activ2')
}
//кропка libary
lib.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home.classList.remove('bg-btns')
    librs.classList.add('not-active')
    search.classList.remove('bg-btns')
    lib.classList.add('bg-btns')
    like.classList.remove('bg-btns')
    search_src.src = './img/search-menu.svg'
    home_src.src = './img/menu-home.svg'
    libary_src.src = './img/libary-bold.svg'
    like_src.src = './img/like.svg'
    homeCont.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    head_libar.classList.add('active')
    libCont.classList.add('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.remove('activ2')
}
//кропка like
like.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home.classList.remove('bg-btns')
    librs.classList.add('not-active')
    search.classList.remove('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.add('bg-btns')
    search_src.src = './img/search-menu.svg'
    home_src.src = './img/menu-home.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like-bold.svg'
    homeCont.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.add('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.add('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    
    getLikedSongs()
}

like_dot.onclick = ()=>{

    home.classList.remove('bg-btns')
    search.classList.remove('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.add('bg-btns')
    search_src.src = './img/search-menu.svg'
    home_src.src = './img/menu-home.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like-bold.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.add('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.add('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
}

home2.onclick =()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home_src.src = './img/bold-home.svg'
    search_src.src = './img/search-menu.svg'
    libary_src.src = './img/libary.svg '
    like_src.src = './img/like.svg'
    homeCont.classList.remove('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.remove('activ2')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim')
}



//кропка search
search2.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    home_src.src = './img/menu-home.svg'
    search_src.src = './img/search-bold.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.add('activ2')
    likedCont.classList.remove('activ2')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim')
}
//кропка libary
lib2.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    search_src.src = './img/search-menu.svg'
    home_src.src = './img/menu-home.svg'
    libary_src.src = './img/libary-bold.svg'
    like_src.src = './img/like.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    head_libar.classList.add('active')
    libCont.classList.add('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.remove('activ2')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim')

    libar_hd.classList.remove('not-active')
                wrap_playlist.classList.remove('not-active')
                head_libar.classList.add('active')
                lib_cont.classList.remove('active')
                librs.classList.add('not-active')
}
//кропка like
like2.onclick = ()=>{
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    search_src.src = './img/search-menu.svg'
    home_src.src = './img/menu-home.svg'
    libary_src.src = './img/libary.svg'
    like_src.src = './img/like-bold.svg'
    homeCont.classList.add('not-active')
    librs.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.add('not-active')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    searchCont.classList.remove('activ2')
    likedCont.classList.add('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim') 
    getLikedSongs()
}

//Оживление инпута рейнд (звук)
let valume_slider = doc.querySelector('#rang')
let fill = doc.querySelector('.bar .fill')
function set_bar(){
    fill.style.width = valume_slider.value + "%"
}
valume_slider.addEventListener('input', set_bar)
set_bar()

//правая менюшка
left_menu.onclick = ()=>{
fr_ar_lf.classList.toggle('not-active')
fr_ar_rg.classList.toggle('active')
menu_left.classList.toggle('right-menu')
plays.classList.toggle('plays-trans')
acc.classList.toggle('right-ots')
profile.classList.toggle('right-ots')
friacc.classList.toggle('flx-start')
menu_left.classList.toggle('rg-dpl')
menu.classList.remove('sas')
}
//Кнопка назад в хидере
head_left.onclick = ()=> {
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    homeCont.classList.remove('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    librs.classList.add('not-active')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.remove('not-active')
    srchIcon.classList.remove('not-active')
    home.classList.add('bg-btns')
    search.classList.remove('bg-btns')
    lib.classList.remove('bg-btns')
    like.classList.remove('bg-btns')
    head_libar.classList.remove('active')
    libCont.classList.remove('activ2')
    likedCont.classList.remove('activ2')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim')
}

hed_right.onclick = ()=> {
    
    search_res.classList.remove('activ2')
    inpSrch.value = ''
    homeCont.classList.add('not-active')
    weeklyCont.classList.remove('activ2')
    mix1_cont.classList.remove('activ2')
    mix2_cont.classList.remove('activ2')
    librs.classList.add('not-active')
    peep.classList.remove('activ2')
    eminem.classList.remove('activ2')
    juice.classList.remove('activ2')
    weeknd.classList.remove('activ2')
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    home.classList.remove('bg-btns')
    search.classList.remove('bg-btns')
    lib.classList.add('bg-btns')
    like.classList.remove('bg-btns')
    head_libar.classList.remove('active')
    libCont.classList.add('activ2')
    head_libar.classList.add('active')
    likedCont.classList.remove('activ2')
    centers.classList.remove('hide')
    tops.classList.remove('rot-top')
    bottoms.classList.remove('rot-bot')
    brg_box.classList.remove('brg-anim')
}


let load_site = doc.querySelector('.loader')
setTimeout(() => {
    load_site.style.display = 'none'
  }, 1000);


  let gt = doc.querySelector('.gt')
let track = doc.createElement('audio')

let like_sm = doc.createElement('img')
    let dis_like2 = doc.createElement('img')
let api_content = []
disWeekly.addEventListener('click',weekly)
let globalToken
function weekly(){
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    weeklyCont.classList.add('activ2')}
//Получаем токен
const clientId = '3edb16e850e04eccadaf72955d0ef21a';
    const clientSecret = '72bc148523a641248faa3baf9ab38553';
    let getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXcSsFGTqn60Fe', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})

.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
      
    arr.push(json)
   
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    
    
let obj_api = {
    name:item2.track.name,
    music : item2.track.preview_url,
    artists:item2.track.album.artists[0].name,
    album :item2.track.album.name,
    src : item2.track.album.images[0].url,
    date : item2.added_at, 
    id : item2.track.id
}
api_content.push(obj_api)

let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')  
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDay() - day.getDay()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 gt.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
 
    

 
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_content, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}
let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}
function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}
function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}
let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}

function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}

async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })
    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}
// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }

    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')   
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }

})

}
}
  })
}
getToken()
let num = 0
async function nullSearch(names, artis) {
    let nullResult = await fetch(`https://api.spotify.com/v1/search?q=${names + artis}*&type=track&limit=20`, {
        headers: {
            'Authorization': 'Bearer ' + globalToken
        }
    });
    const res = await nullResult.json();
    const track = res.tracks.items.find((item) => item.preview_url !== null);
    return track.preview_url;
}
let top_weekly = doc.querySelector('.top-weekly')
let top_weekly2 = doc.querySelector('.top-weekly2')
let bdy =  doc.querySelector('.weekly-head')
    let srce = top_weekly.firstElementChild
    RGBaster.colors(srce,
        {
        exclude: ['rgb(255,255,255)', 'rgb(255, 255, 254)', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.4039215686)'],
        success: function (palette) {
            bdy.style.background = palette.dominant;     
    }});



function getLikedSongs() {


let lk_cnt = doc.querySelector('.liked-songs-cont')   
   
fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{    
    lk_cnt.innerHTML = ``
    let arr_bd = Object.values(json)
    let arr_like = []   
    for(let item of arr_bd){
       let obj_api = {
    name:item.name,
    music : item.music,
    artists:item.artists,
    album :item.album,
    src : item.src, 
    
}
arr_like.push(obj_api)

let track = doc.createElement('audio')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    // let album = doc.createElement('div') 
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    // album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = item.src
 p.innerHTML = item.name
 p2.textContent = item.artists
 p3.textContent = item.album
 track.src = item.music
 por.innerHTML = `<span>${num = num + 1}</span>`
 lk_cnt.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(dis_like,p5)
//  album.append(p3)
 date_add.append(p4)
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = item.src
     album_mob.src = item.src
     nazv.innerHTML = item.name
     nazv_mob.textContent = item.name
     arts.textContent = item.artists
    isp_mob.textContent = item.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    let index = arr_bd.indexOf(item)
    loading(arr_bd, index)
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}

function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)
function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}
async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
     if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            searchPlay(arr,randomung)
        }
        if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            searchPlay(arr,randomung)
        }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item.name,
    music : item.music,
    artists:item.artists,
    album :item.album,
    src : item.src, 
    id : item.id
}
dis_like.classList.add('activ2')
like.classList.add('not-active')
// like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
   
   
    for(let item of arr_bd){
 dis_like.onclick =()=>{
    fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json' + item.id, {
        method: 'DELETE',
      })
      .then(response => response.json())
}
    
    
    }
}
})
}

getLikedSongs()

let api_content2 = []
mix1.addEventListener('click',mix)
function mix(){

    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    mix1_cont.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})
.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at, 
        id : item2.track.id
    }
     
api_content2.push(obj_api)
let mix1_cont = doc.querySelector('.mix1-content')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')  
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')  
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 mix1_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
  
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_content2, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')
    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}

async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
   
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", { 
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }
})

}
}
  })
}
getToken()

let api_content3 = []
mix2.addEventListener('click',mixx2)
function mixx2(){
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    mix2_cont.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1E351RUuR9EDdQ', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})
.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at, 
        id : item2.track.id
    }
api_content3.push(obj_api)
let mix2_cont = doc.querySelector('.mix2-content')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 mix2_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
   
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_content3, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}
async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    
    }

    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }

})

}
}
  })
}
getToken()


let lil_peep = doc.querySelector('.lil-peep')
let peep = doc.querySelector('.peep')
let api_contentlil= []
lil_peep.addEventListener('click',lil)
function lil(){
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    peep.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1kxsTC', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})
.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at, 
        id : item2.track.id
    }
    api_contentlil.push(obj_api)
let lil_cont = doc.querySelector('.lil-cont')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 lil_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
    
 
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_contentlil, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}

async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }
})

}
}
  })
}
getToken()

let theweekend = doc.querySelector('.theweekend')
let weeknd = doc.querySelector('.weekend')
let api_contentweek= []
theweekend.addEventListener('click',weekendart)
function weekendart(){ 
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    weeknd.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX6bnzK9KPvrz', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})

.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
   
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at,
        id : item2.track.id 
    }
api_contentweek.push(obj_api)
let week_cont = doc.querySelector('.weekend-cont')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 week_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
   
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_contentweek, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}
gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}
async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })
    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }
})

}
}
  })
}
getToken()

let juicewrld = doc.querySelector('.juicewrld')
let juice = doc.querySelector('.juice')
let api_contentwrld= []
juicewrld.addEventListener('click',juices)
function juices(){
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    juice.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DWYnx77Gg1Rgu', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})
.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
   
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at, 
        id : item2.track.id
    }
api_contentwrld.push(obj_api)
let juice_cont = doc.querySelector('.juice-cont')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 juice_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
   
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_contentwrld, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')

    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}
async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)
progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
    let arr_bd = Object.values(json)
    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }
})

}
}
  })
}
getToken()
let eminemm = doc.querySelector('.eminemm')
let eminem = doc.querySelector('.eminem')
let api_contentemin= []
eminemm.addEventListener('click',emin)
function emin(){
    inpSrch.classList.add('not-active')
    srchIcon.classList.add('not-active')
    homeCont.classList.add('not-active')
    eminem.classList.add('activ2')
}
    getToken = async () => {
        const  result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        let acc = data.access_token
        globalToken = acc
        // Get запрос с API
    const accesToken = acc
    fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX1clOuib1KtQ', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesToken
}
})

.then(data => data.json())
.then(json => {
    let num = 0
      let arr = []
      let arr2 = []
    arr.push(json)
for(let item of arr){
arr2.push(item.tracks.items)
}
for(let item of arr2){
for(let item2 of item){
    let obj_api = {
        name:item2.track.name,
        music : item2.track.preview_url,
        artists:item2.track.album.artists[0].name,
        album :item2.track.album.name,
        src : item2.track.album.images[0].url,
        date : item2.added_at, 
        id : item2.track.id
    }
api_contentemin.push(obj_api)
let emin_cont = doc.querySelector('.emin-cont')
let box = doc.createElement('div')
let src = doc.createElement('img')
let box_left = doc.createElement('div')
let box_txt = doc.createElement('div')
let p = doc.createElement('p')
    let p2 = doc.createElement('p')
    let p3 = doc.createElement('p')
    let p4 = doc.createElement('p')
    let p5 = doc.createElement('p')
    let album = doc.createElement('div')
    let date_add = doc.createElement('div')
    let por = doc.createElement('p')
    let like = doc.createElement('img')
    let dis_like = doc.createElement('img')
    p.classList.add('name-mus')
    por.classList.add('cifr')
    date_add.classList.add('data-add')
    album.classList.add('album')
    p2.classList.add('name-isp')
    p3.classList.add('name-isp2')
    p4.classList.add('name-isp3')
    p5.classList.add('name-isp4')
    box_txt.classList.add('ispol')
    box_left.classList.add('box-left')
    box.classList.add('block')
    box.classList.add('ok')
    like.classList.add('like-item')
    dis_like.classList.add('dis-like')
    src.src = obj_api.src
 p.innerHTML = obj_api.name
 p2.textContent = obj_api.artists
 p3.textContent = obj_api.album
 let day = new Date(obj_api.date)
 let my_day = new Date()
 let day_min = my_day.getDate() - day.getDate()
 p4.textContent = `${day_min} day ago`
 por.innerHTML = `<span>${num = num + 1}</span>`
 emin_cont.appendChild(box)
 box.append(box_left)
 box_left.append(por,src)
 box_left.appendChild(box_txt)
 box_txt.append(p,p2)
 box.append(album,date_add,like,dis_like,p5)
 album.append(p3)
 date_add.append(p4)
    
 //Взаимодействие с музыкой
 box.onclick =()=>{
    mob_play.onclick =()=>{
        mob_type2.classList.remove('mob-bot')
    }
     function playmob(){}
    mob_pp.addEventListener('click',playmob)
    player.onclick = ()=>{
    mob_type2.classList.add('mob-bot')
    }
     album_src.classList.add('active')
     player_left_icons.classList.add('active')
     album_src.src = obj_api.src
     album_mob.src = obj_api.src
     nazv.innerHTML = obj_api.name
     nazv_mob.textContent = obj_api.name
     arts.textContent = obj_api.artists
    isp_mob.textContent = obj_api.artists
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
    play.classList.add('not-active')
    pause.classList.add('active')
    play2.classList.add('not-active')
    pause2.classList.add('active')
    mob_play.classList.add('not-active')
    mob_pause.classList.add('active')
    box.classList.add('block-click')
    big_pp.src= './img/pause-big.svg'
    loading(api_contentemin, item.indexOf(item2))
    let blocks = doc.querySelectorAll('.block')
    blocks.forEach((block)=>{
        block.classList.remove('block-click')
    })
    box.classList.add('block-click')
    play.onclick = ()=>{
        pause.classList.add('active')
        play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        change(index)  
    }
    
    pause.onclick = ()=>{
        pause.classList.remove('active')
        play.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        big_pp.style.height = 50 + 'px'
        big_pp.style.width = 50 + 'px'
    }
    mob_play.onclick = ()=>{
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
    }

    mob_pause.onclick = ()=>{
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
         big_pp.src = './img/play-dp.svg'
    }
    play2.onclick = ()=>{
        pause2.classList.add('active')
        play2.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'
        mob_pause.classList.add('active')
        mob_play.classList.add('not-active') 
    }
    pause2.onclick = ()=>{
        pause2.classList.remove('active')
        play2.classList.remove('not-active')
        track.pause()
        big_pp.src = './img/play-dp.svg'
        mob_pause.classList.remove('active')
        mob_play.classList.remove('not-active')
    }  
}

gree_dot.onclick = ()=>{
    pause.classList.add('active')
        play.classList.add('not-active')
     mob_pause.classList.add('active')
        mob_play.classList.add('not-active')
        track.play()
        big_pp.src= './img/pause-big.svg'    
}

let randomizer = false
random_btn.addEventListener('click', rand)
random_mob.addEventListener('click', rand)
function rand(){
    randomizer ? pauseRandom() : playRandom() 
}

function playRandom(){
    randomizer = true
    random_btn.classList.add('random-cl')
    random_mob.classList.add('random-cl')
}

function pauseRandom(){
    randomizer = false
    random_btn.classList.remove('random-cl')
    random_mob.classList.remove('random-cl')
}

let repeats = false

function rep(){
    repeats ? pauserepeat() : playRepeat()
}
function playRepeat(){
    repeats = true
    repeat_btn.classList.add('random-cl')
    repeat_btn2.classList.add('random-cl')
}

function pauserepeat(){
    repeats = false
    repeat_btn.classList.remove('random-cl')
    repeat_btn.classList.add('not-active')
    repeat_once.classList.add('active')
    repeat_btn2.classList.remove('random-cl')
    repeat_btn2.classList.add('not-active')
    repeat_once2.classList.add('active')
}


function oncerep(){
    repeat_btn.classList.remove('not-active')
    repeat_once.classList.remove('active')
    repeat_btn2.classList.remove('not-active')
    repeat_once2.classList.remove('active')
}
repeat_once.addEventListener('click',oncerep)
repeat_btn.addEventListener('click', rep)
repeat_once2.addEventListener('click',oncerep)
repeat_btn2.addEventListener('click', rep)

function change(index){
    let names_art = doc.getElementsByClassName('name-mus')
    let prg = doc.getElementsByClassName('cifr')
    for(let item of prg){
        item.style.backgroundImage = "none"
        item.firstElementChild.style.opacity = `1`
    }
    for(let item of names_art){
        item.style.color = 'white'
        if(nazv.innerHTML === item.innerHTML){
            names_art[index].style.color = '#1DB954'
            prg[index].firstElementChild.style.opacity = '0'
            prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
            prg[index].style.backgroundSize =  'cover'
        }
    }
}

async function loading(arr,index){
    let muzon = arr[index]
    track.src = muzon.music
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists
    album_src.src = muzon.src
    isp_mob.textContent = muzon.artists
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.src
    change(index)
    if(muzon.music === null) {
        track.src = await nullSearch(muzon.name, muzon.artists)
        muzon.music = await nullSearch(muzon.name, muzon.artists)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        }
    }
    prev_btn.onclick = () => {
        loading(arr, index-1)
        box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        loading(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                loading(arr, 0)
            } else {
                loading(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            loading(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        loading(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        loading(arr, index+1)
        if(repeat_once.classList.contains('active')){
            loading(arr, index)
        }
        if(repeats === true){
            if(index > arr.length - 2) {
                loading(arr, 0)
    }
    }
    if (randomizer === true) {
        let randomung = Math.floor(Math.random() * arr.length)
        searchPlay(arr,randomung)
    }
    })
}

// Управление с звуком
function setVolume(){
    track.volume = valume_slider.value / 100
}
valume_slider.addEventListener('change',setVolume)
    // Прогрессбар в плеере
    function setProgress(e){
        const widths = this.clientWidth
        const clickX = e.offsetX
        const duration = track.duration
track.currentTime  = (clickX / widths) * duration
}
prog_bar.addEventListener('click',setProgress)

progbar_mob2.addEventListener('click',setProgress)
  //Текущая время трека
track.addEventListener('timeupdate', (e)=>{
    const currentTime1 = e.target.currentTime
    const duration1 = e.target.duration
    let progressWidth = (currentTime1 / duration1) * 100;
    inprobar.style.width = `${progressWidth}%`;
    inprobar_mob1.style.width = `${progressWidth}%`;
    inprobar_mob2.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTime1 / 60);
    let currentSec = Math.floor(currentTime1 % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    curr_time.innerText = `${currentMin}:${currentSec}`;
    curr_time2.innerText = `${currentMin}:${currentSec}`;
})
//  длительность трека
track.addEventListener('loadeddata',()=>{
    let music_time = track.duration
    let total_min = Math.floor(music_time / 60)
    let total_sec = Math.floor(music_time % 60)
    p5.innerText = `${total_min} : ${total_sec}`
    right_timer.innerText = `${total_min} : ${total_sec}`
    right_timer2.innerText = `${total_min} : ${total_sec}`
})
let obj ={
    name:item2.track.name,
music : item2.track.preview_url,
artists:item2.track.album.artists[0].name,
album :item2.track.album.name,
src : item2.track.album.images[0].url,
date : item2.added_at,
id : item2.track.id
}
 
like.src = './img/like.svg'
 dis_like.src = './img/like-mus.svg'
 like_sm.src = './img/like.svg'
 dis_like2.src = './img/like-mus.svg'
    like.onclick =()=>{
        fetch('https://spotify-573f4-default-rtdb.firebaseio.com/liked.json', { 
          method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.ok))
            .catch(e => console.error(e))
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
    }

    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
    
        }
    }
    if(nazv.innerHTML === obj.name){
        like_sm.classList.add('not-active')
    dis_like2.classList.add('activ2')
    }
})
    
    fetch("https://spotify-573f4-default-rtdb.firebaseio.com/liked.json", {
        
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
})
.then(data => data.json())
.then (json =>{
  
    let arr_bd = Object.values(json)

    for(let item of arr_bd){
        if(item.name === obj.name){
            like.classList.add('not-active')
    dis_like.classList.add('activ2')
        }
    }

})

}
}
  })
}
getToken()



const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
anchor.addEventListener('click', function(event){
event.preventDefault()
const  blockID = anchor.getAttribute('href')
document.querySelector('' + blockID).scrollIntoView({
    behavior:'auto',
    block: "start"
})
})
}

 

let dot_menu = doc.querySelector('.dot-menu')
let playlist_menu = doc.querySelector('.playlist-menu')
let creat_plys = doc.querySelector('.creat-plys')
let cross = doc.querySelector('.cross')
let playlist_mdl = doc.querySelector('.playlist-mdl')

dot_menu.addEventListener('click', ()=>{
        playlist_menu.classList.toggle('active')
setTimeout(() => {
    playlist_menu.classList.remove('active')
}, 6000);
   
})

creat_plys.addEventListener('click', ()=>{
    playlist_mdl.classList.add('active')
})
cross.addEventListener('click', ()=>{
    playlist_mdl.classList.remove('active')
})

let name_playlist = doc.querySelector('.name-playlist')
let inp_photo  = doc.querySelector('#chosen-image')
let form_pl = doc.querySelector('.form-pl')

let librs = doc.createElement('div')
librs.classList.add('librs')


form_pl.addEventListener('submit', (e)=>{
    e.preventDefault()
    let obj_playlist = {
        name : name_playlist.value,
        photo: inp_photo.getAttribute('src'),
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
    
    axios.post(`https://spotify-573f4-default-rtdb.firebaseio.com/playlist/.json`, obj_playlist)


    
    setTimeout(() => {
        window.location.reload()
    },1000)
  
   
    
})


let uploadButton = doc.getElementById('upload-button')
    let chosenImage = doc.getElementById('chosen-image')
    let fileName = doc.getElementById('file-name')
    uploadButton.onchange = () => {
      let reader = new FileReader();
      reader.readAsDataURL(uploadButton.files[0]);
      reader.onload = () => {
        chosenImage.setAttribute('src', reader.result)
      }
      fileName.textContent = uploadButton.files[0].name
    }


let janrs = doc.querySelector('.janr')
let wrap_playlist = doc.querySelector('.wrap-playlist')

    
        axios.get('https://spotify-573f4-default-rtdb.firebaseio.com/playlist.json')
        .then(response => {
            let arr_bd = Object.values(response.data)
            for(let item of arr_bd){
                let p = doc.createElement('p')
                let div = doc.createElement('div')
                let del = doc.createElement('div')
                let del_tx = doc.createElement('p')
            del_tx.textContent = 'delete'
                del.classList.add('del')
                let img_dot = doc.createElement('img')
                img_dot.src = './img/dots.svg'
                div.classList.add('janr-div')
                p.textContent = item.name
                janrs.append(div)
                div.append(p,img_dot,del)
                del.append(del_tx)


                img_dot.addEventListener('click', ()=>{
                    del.classList.toggle('active')
                    setTimeout(() => {
                        del.classList.remove('active')
                    },5000)
                })

                let box_play = doc.createElement('div')
                box_play.classList.add('box-play')
                let imp_pl = doc.createElement('img')
                imp_pl.src = item.photo
                imp_pl.classList.add('imp-pl')
                let play_txt = doc.createElement('p')
                play_txt.textContent = item.name
                play_txt.classList.add('play-txt')

                wrap_playlist.append(box_play)
                box_play.append(imp_pl,play_txt)

 
            }

        })



        //search
       
  let aces = ''
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    aces = data.access_token
    return data.access_token;
    
}



_getToken()
aces = 'BQDPYXGgKK8AnBim_VfFxkgz0xT2Mhf8HJuv6rGT6yi5BDXI_65G9k55_RjfUrCd_U8L2BI4RQXFqubeduPwnCW96hKuR0o8AcRC5p1K7ZVRz8jcwjYX'


        let search_res = doc.querySelector('.search-res')
        let search_cont = doc.querySelector('.search-cont')
let api_search= []

inpSrch.addEventListener('input',searchFun)
function searchFun(){
    let valueSr = inpSrch.value
    if(inpSrch.value !== ''){
        searchCont.classList.add('hide')
        search_res.classList.add('activ2')
        search_cont.innerHTML = ""
    
    let url = `https://api.spotify.com/v1/search?q=${valueSr}*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ`

    fetch(url, {
            authority: "api.spotify.com",
            method: "GET",
            path: "/v1/search?q=ona*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ",
            scheme: "https",
            headers: {
                'Authorization': 'Bearer ' + aces,
                'Content-Type': "application/json; charset=utf-8"
            }
        }).then(response => response.json())
        .then((result) => {

            let num = 0
            for(let item of result.tracks.items){

            
// let track = doc.createElement('audio')
               let box = doc.createElement('div')
               let src = doc.createElement('img')
               let box_left = doc.createElement('div')
               let box_txt = doc.createElement('div')
               let p = doc.createElement('p')
                   let p2 = doc.createElement('p')
                   let p3 = doc.createElement('p')
                   let p4 = doc.createElement('p')
                   let p5 = doc.createElement('p')
                   let album = doc.createElement('div')
                   let date_add = doc.createElement('div')
                   let por = doc.createElement('p')
                   let like = doc.createElement('img')
                   let dis_like = doc.createElement('img')
                   p.classList.add('name-mus')
                   por.classList.add('cifr')
                   date_add.classList.add('data-add')
                   album.classList.add('album')
                   p2.classList.add('name-isp')
                   p3.classList.add('name-isp2')
                   p4.classList.add('name-isp3')
                   p5.classList.add('name-isp4')
                   box_txt.classList.add('ispol')
                   box_left.classList.add('box-left')
                   box.classList.add('block')
                   box.classList.add('ok')
                   like.classList.add('like-item')
                   dis_like.classList.add('dis-like')
                   src.src = item.album.images[1].url
                p.innerHTML = item.name
                p2.textContent = item.album.artists[0].name
                p3.textContent = item.album.name
              track.src = item.preview_url
                por.innerHTML = `<span>${num = num + 1}</span>`
                search_cont.appendChild(box)
                box.append(box_left)
                box_left.append(por,src)
                box_left.appendChild(box_txt)
                box_txt.append(p,p2)
                box.append(album,date_add,like,dis_like,p5)
                album.append(p3)
                date_add.append(p4)

                like.src = './img/like.svg'
                dis_like.src = './img/like-mus.svg'
   
                   

               box.onclick =()=>{
                mob_play.onclick =()=>{
                    mob_type2.classList.remove('mob-bot')
                }
                 function playmob(){}
                mob_pp.addEventListener('click',playmob)
                player.onclick = ()=>{
                mob_type2.classList.add('mob-bot')
                }
                 album_src.classList.add('active')
                 player_left_icons.classList.add('active')
                 album_src.src = item.album.images[1].url
                 album_mob.src = item.album.images[1].url
                 nazv.innerHTML =  item.name
                 nazv_mob.textContent = item.name
                 arts.textContent =  item.album.artists[0].name
                isp_mob.textContent =  item.album.artists[0].name

                

                let music_time = track.duration
                let total_min = Math.floor(music_time / 60)
                let total_sec = Math.floor(music_time % 60)
                right_timer.innerText = `${total_min} : ${total_sec}`
                right_timer2.innerText = `${total_min} : ${total_sec}`
                play.classList.add('not-active')
                pause.classList.add('active')
                play2.classList.add('not-active')
                pause2.classList.add('active')
                mob_play.classList.add('not-active')
                mob_pause.classList.add('active')
                box.classList.add('block-click')
                big_pp.src= './img/pause-big.svg'
                let index = result.tracks.items.indexOf(item)
                searchPlay(result.tracks.items, index)
                let blocks = doc.querySelectorAll('.block')
                blocks.forEach((block)=>{
                    block.classList.remove('block-click')
                })
                box.classList.add('block-click')
                play.onclick = ()=>{
                    pause.classList.add('active')
                    play.classList.add('not-active')
                    track.play()
                    big_pp.src= './img/pause-big.svg'
                    change(index)  
                }
                
                pause.onclick = ()=>{
                    pause.classList.remove('active')
                    play.classList.remove('not-active')
                    track.pause()
                    big_pp.src = './img/play-dp.svg'
                    big_pp.style.height = 50 + 'px'
                    big_pp.style.width = 50 + 'px'
                }
                mob_play.onclick = ()=>{
                    mob_pause.classList.add('active')
                    mob_play.classList.add('not-active')
                    pause2.classList.add('active')
                    play2.classList.add('not-active')
                    track.play()
                    big_pp.src= './img/pause-big.svg'
                }
            
                mob_pause.onclick = ()=>{
                    mob_pause.classList.remove('active')
                    mob_play.classList.remove('not-active')
                    pause2.classList.remove('active')
                    play2.classList.remove('not-active')
                    track.pause()
                     big_pp.src = './img/play-dp.svg'
                }
                play2.onclick = ()=>{
                    pause2.classList.add('active')
                    play2.classList.add('not-active')
                    track.play()
                    big_pp.src= './img/pause-big.svg'
                    mob_pause.classList.add('active')
                    mob_play.classList.add('not-active') 
                }
                pause2.onclick = ()=>{
                    pause2.classList.remove('active')
                    play2.classList.remove('not-active')
                    track.pause()
                    big_pp.src = './img/play-dp.svg'
                    mob_pause.classList.remove('active')
                    mob_play.classList.remove('not-active')
                }  
            }
            
            gree_dot.onclick = ()=>{
                pause.classList.add('active')
                    play.classList.add('not-active')
                 mob_pause.classList.add('active')
                    mob_play.classList.add('not-active')
                    track.play()
                    big_pp.src= './img/pause-big.svg'    
            }
            
            let randomizer = false
            random_btn.addEventListener('click', rand)
            random_mob.addEventListener('click', rand)
            function rand(){
                randomizer ? pauseRandom() : playRandom() 
            }
            
            function playRandom(){
                randomizer = true
                random_btn.classList.add('random-cl')
                random_mob.classList.add('random-cl')
            }
            
            function pauseRandom(){
                randomizer = false
                random_btn.classList.remove('random-cl')
                random_mob.classList.remove('random-cl')
            }
            
            let repeats = false
            
            function rep(){
                repeats ? pauserepeat() : playRepeat()
            }
            function playRepeat(){
                repeats = true
                repeat_btn.classList.add('random-cl')
                repeat_btn2.classList.add('random-cl')
            }
            
            function pauserepeat(){
                repeats = false
                repeat_btn.classList.remove('random-cl')
                repeat_btn.classList.add('not-active')
                repeat_once.classList.add('active')
                repeat_btn2.classList.remove('random-cl')
                repeat_btn2.classList.add('not-active')
                repeat_once2.classList.add('active')
            }
            
            
            function oncerep(){
                repeat_btn.classList.remove('not-active')
                repeat_once.classList.remove('active')
                repeat_btn2.classList.remove('not-active')
                repeat_once2.classList.remove('active')
            }
            repeat_once.addEventListener('click',oncerep)
            repeat_btn.addEventListener('click', rep)
            repeat_once2.addEventListener('click',oncerep)
            repeat_btn2.addEventListener('click', rep)
            
            function change(index){
                let names_art = doc.getElementsByClassName('name-mus')
                let prg = doc.getElementsByClassName('cifr')
                for(let item of prg){
                    item.style.backgroundImage = "none"
                    item.firstElementChild.style.opacity = `1`
                }
                for(let item of names_art){
                    item.style.color = 'white'
                    if(nazv.innerHTML === item.innerHTML){
                        names_art[index].style.color = '#1DB954'
                        prg[index].firstElementChild.style.opacity = '0'
                        prg[index].style.backgroundImage = `url('https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif')`
                        prg[index].style.backgroundSize =  'cover'
                    }
                }
            }
            
        
            
            // Управление с звуком
            function setVolume(){
                track.volume = valume_slider.value / 100
            }
            valume_slider.addEventListener('change',setVolume)
                // Прогрессбар в плеере
                function setProgress(e){
                    const widths = this.clientWidth
                    const clickX = e.offsetX
                    const duration = track.duration
            track.currentTime  = (clickX / widths) * duration
            }
            prog_bar.addEventListener('click',setProgress)
            
            progbar_mob2.addEventListener('click',setProgress)
              //Текущая время трека
            track.addEventListener('timeupdate', (e)=>{
                const currentTime1 = e.target.currentTime
                const duration1 = e.target.duration
                let progressWidth = (currentTime1 / duration1) * 100;
                inprobar.style.width = `${progressWidth}%`;
                inprobar_mob1.style.width = `${progressWidth}%`;
                inprobar_mob2.style.width = `${progressWidth}%`;
                let currentMin = Math.floor(currentTime1 / 60);
                let currentSec = Math.floor(currentTime1 % 60);
                if(currentSec < 10){ 
                    currentSec = `0${currentSec}`;
                }
                curr_time.innerText = `${currentMin}:${currentSec}`;
                curr_time2.innerText = `${currentMin}:${currentSec}`;
            })
            //  длительность трека
            track.addEventListener('loadeddata',()=>{
                let music_time = track.duration
                let total_min = Math.floor(music_time / 60)
                let total_sec = Math.floor(music_time % 60)
                p5.innerText = `${total_min} : ${total_sec}`
                right_timer.innerText = `${total_min} : ${total_sec}`
                right_timer2.innerText = `${total_min} : ${total_sec}`
            })


// Search Playing

async function searchPlay(arr,index){
    let muzon = arr[index]
    let muzonSrc = doc.querySelector(".album-src")
    muzonSrc.style.display = "block"
    muzonSrc.src = muzon.album.images[0].url
    nazv.innerHTML = muzon.name
    arts.innerHTML = muzon.artists[0].name
    track.src = muzon.preview_url

    isp_mob.textContent = muzon.artists[0].name
    nazv_mob.innerHTML = muzon.name
    album_mob.src = muzon.album.images[0].url

    
    if(muzon.preview_url === null) {
        track.src = await nullSearch(muzon.name, muzon.artists[0].name)
        muzon.music = await nullSearch(muzon.name, muzon.artists[0].name)
        track.play()
    } else {
        track.play()
    }
    next_btn.onclick=()=>{
        // box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                searchPlay(arr, 0)
            } else {
                searchPlay(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            searchPlay(arr,randomung)
        }
    }

    prev_btn.onclick = () => {
        searchPlay(arr, index-1)
      box.classList.remove('block-click')
        pause.classList.add('active')
        play.classList.add('not-active')
        big_pp.src= './img/pause-big.svg'
    }
    next_mob.addEventListener('click', ()=>{
        searchPlay(arr, index+1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        if (randomizer === false){
            if(index > arr.length - 2) {
                searchPlay(arr, 0)
            } else {
                searchPlay(arr, index+1)
            }
        }else if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            searchPlay(arr,randomung)
        } 
    })
    prev_mob.addEventListener('click', ()=>{
        searchPlay(arr, index-1)
        box.classList.remove('block-click')
        big_pp.src= './img/pause-big.svg'
        
    })

    track.addEventListener("ended", ()=>{
        searchPlay(arr, index+1)
        if(repeat_once.classList.contains('active')){
            searchPlay(arr, index)
        }
        if(repeat === true){
            if(index > arr.length - 2) {
                searchPlay(arr, 0)
            }
        }
        if (randomizer === true) {
            let randomung = Math.floor(Math.random() * arr.length)
            searchPlay(arr,randomung)
        }
    })
}

       
   
     } 
    })

    }else{
        searchCont.classList.remove('hide')
        search_res.classList.remove('activ2')
    }
   
}
    


