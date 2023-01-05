// var date = {
//     isDuringDate: function (beginDateStr, endDateStr) {
//         var curDate = new Date(),
//             beginDate = new Date(beginDateStr),
//             endDate = new Date(endDateStr);
//         if (curDate >= beginDate && curDate <= endDate) {
//             return true;
//         }
//         return false;
//     }
// }

// 主頁熱門美食
function TakeshitaColdNoodles(){
    var Now = new Date();
    var condition = document.getElementById("TakeshitaColdNoodles");
    if(Now.getHours()>=8 && Now.getHours()<=15){
        document.getElementById("TakeshitaColdNoodles").innerHTML="營業中";
        condition.style.color="#188038";
    } 
    else{
        document.getElementById("TakeshitaColdNoodles").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function LausTurkeyRice(){
    var Now = new Date();
    var condition = document.getElementById("LausTurkeyRice");
    if(Now.getDay()!=1){
        if((Now.getHours()>=7 && Now.getHours()<=13 || Now.getHours()== 14 && Now.getMinutes() <= 30) || (Now.getHours()>=17 && Now.getHours()<=18 || Now.getHours() == 16 && Now.getMinutes() >= 30)){
            document.getElementById("LausTurkeyRice").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("LausTurkeyRice").innerHTML="已打烊";
            condition.style.color="red";
        }   
    }
    else{
        document.getElementById("LausTurkeyRice").innerHTML="已打烊";
            condition.style.color="red";
    }
}

function LinsFishHead(){
    var Now = new Date();
    var condition = document.getElementById("LinsFishHead");
    if(Now.getHours()>=12 && Now.getHours()<=20){
        document.getElementById("LinsFishHead").innerHTML="營業中";
        condition.style.color="#188038";
    } 
    else{
        document.getElementById("LinsFishHead").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function ArticlesBeefSoup(){
    var Now = new Date();
    var condition = document.getElementById("ArticlesBeefSoup");
    if(Now.getDay()!=1){
        if((Now.getHours()>=11 && Now.getHours()<=24 || Now.getHours()==10 && Now.getMinutes() >= 30) || (Now.getHours()>=0 && Now.getHours()<=1)){
            document.getElementById("ArticlesBeefSoup").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("ArticlesBeefSoup").innerHTML="已打烊";
            condition.style.color="red";
        }  
    }
    else{
        document.getElementById("ArticlesBeefSoup").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function DuckJane(){
    var Now = new Date();
    var condition = document.getElementById("DuckJane");
    if(Now.getDay()!=2){
      if(Now.getHours()>=10 && Now.getHours()<=19 || Now.getHours() == 20 && Now.getMinutes() <= 20){
        document.getElementById("DuckJane").innerHTML="營業中";
        condition.style.color="#188038";
      }   
      else{
        document.getElementById("DuckJane").innerHTML="已打烊";
        condition.style.color="red";
      }  
    }
    else{
        document.getElementById("DuckJane").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function HaihongPigKnuckle(){
    var Now = new Date();
    var condition = document.getElementById("HaihongPigKnuckle");
    if(Now.getHours()>=10 && Now.getHours()<=18 || Now.getHours()==19 && Now.getMinutes <= 30) {
        document.getElementById("HaihongPigKnuckle").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("HaihongPigKnuckle").innerHTML="已打烊";
        condition.style.color="red";
    }
}

// 嘉義縣

function TsaiBigHeadChicken(){
    var Now = new Date();
    var condition = document.getElementById("TsaiBigHeadChicken");
    if(Now.getDay()!=0 && Now.getDay()!=6){
        if((Now.getHours()>=11 && Now.getHours()<=13 || Now.getHours()== 14 && Now.getMinutes() <= 30) || ((Now.getHours()>=17 && Now.getHours()<=19) || (Now.getHours() == 16 && Now.getMinutes() >= 30) || (Now.getHours() == 20 && Now.getMinutes() <= 30))){
            document.getElementById("TsaiBigHeadChicken").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("TsaiBigHeadChicken").innerHTML="已打烊";
            condition.style.color="red";
        }   
    }
    else{
        if(Now.getHours >= 11 && Now.getHours <= 20){
            document.getElementById("TsaiBigHeadChicken").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("TsaiBigHeadChicken").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
}

function Linssmallrollricenoodles(){
    var Now = new Date();
    var condition = document.getElementById("Linssmallrollricenoodles");
    if(Now.getDay()!=0 && Now.getDay()!=6){
        if((Now.getHours()>=10 && Now.getHours()<=14 || Now.getHours()== 9 && Now.getMinutes() >= 30) || ((Now.getHours()>=17 && Now.getHours()<=20) || (Now.getHours() == 16 && Now.getMinutes() >= 30) || (Now.getHours() == 21 && Now.getMinutes() <= 30))){
            document.getElementById("Linssmallrollricenoodles").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("Linssmallrollricenoodles").innerHTML="已打烊";
            condition.style.color="red";
        }   
    }
    else if(Now.getDay()==6){
        if((Now.getHours()>=10 && Now.getHours()<=20) || (Now.getHours()== 9 && Now.getMinutes() >= 30) || (Now.getHours() == 21 && Now.getMinutes() <= 30)){
            document.getElementById("Linssmallrollricenoodles").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Linssmallrollricenoodles").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("Linssmallrollricenoodles").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function ZhaosKeeTaroBalls(){
    var Now = new Date();
    var condition = document.getElementById("ZhaosKeeTaroBalls");
    if((Now.getHours()>=16 && Now.getHours()<=22) || Now.getHours == 15 && Now.getMinutes >= 30) {
        document.getElementById("ZhaosKeeTaroBalls").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("ZhaosKeeTaroBalls").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function LiuchuantangRamen(){
    var Now = new Date();
    var condition = document.getElementById("LiuchuantangRamen");
    if(Now.getDay()!=1){
        if((Now.getHours()>=11 && Now.getHours()<=13) || (Now.getHours()>=17 && Now.getHours()<=20)){
            document.getElementById("LiuchuantangRamen").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("LiuchuantangRamen").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("LiuchuantangRamen").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function BeginningBreakFast(){
    var Now = new Date();
    var condition = document.getElementById("BeginningBreakFast");
    if(Now.getDay()!=3){
        if(Now.getHours()>=6 && Now.getHours()<=12){
            document.getElementById("BeginningBreakFast").innerHTML="營業中";
            condition.style.color="#188038";
        }   
        else{
            document.getElementById("BeginningBreakFast").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("BeginningBreakFast").innerHTML="已打烊";
        condition.style.color="red";
    }
}

//嘉義市

function charcoaloldsoul(){
    var Now = new Date();
    var condition = document.getElementById("charcoaloldsoul");
    if(Now.getDay()!=2 || Now.getDay()!=3){
        if((Now.getHours()>=15 && Now.getHours()<=21) || (Now.getHours() == 22 && Now.getMinutes() <= 30)){
            document.getElementById("charcoaloldsoul").innerHTML="營業中";
            condition.style.color="#188038";
        } 
        else{
            document.getElementById("charcoaloldsoul").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("charcoaloldsoul").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function GrandmaRoastedCorn(){
    var Now = new Date();
    var condition = document.getElementById("GrandmaRoastedCorn");
    if(Now.getDay()!=2){
        if((Now.getHours()>=10 && Now.getHours()<=20) || (Now.getHours() == 9 && Now.getMinutes() >= 30)){
            document.getElementById("GrandmaRoastedCorn").innerHTML="營業中";
            condition.style.color="#188038";
        } 
        else{
            document.getElementById("GrandmaRoastedCorn").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("GrandmaRoastedCorn").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function FourFlavorJuiceColdNoodles(){
    var Now = new Date();
    var condition = document.getElementById("FourFlavorJuiceColdNoodles");
        if(Now.getHours()>=9 && Now.getHours()<=18){
            document.getElementById("FourFlavorJuiceColdNoodles").innerHTML="營業中";
            condition.style.color="#188038";
        } 
        else{
            document.getElementById("FourFlavorJuiceColdNoodles").innerHTML="已打烊";
            condition.style.color="red";
        }
}

function SweetPotatoCandy(){
    var Now = new Date();
    var condition = document.getElementById("SweetPotatoCandy");
    if(Now.getDay()!=3){
        if((Now.getHours()>=13 && Now.getHours()<=19) || (Now.getHours() == 12 && Now.getMinutes() >= 30) || (Now.getHours() == 20 && Now.getMinutes() <= 30)){
            document.getElementById("SweetPotatoCandy").innerHTML="營業中";
            condition.style.color="#188038";
        } 
        else{
            document.getElementById("SweetPotatoCandy").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
    else{
        document.getElementById("SweetPotatoCandy").innerHTML="已打烊";
        condition.style.color="red";
    }
}

//台南市

function AhMingPorkHeartNoodles(){
    var Now = new Date();
    var condition = document.getElementById("AhMingPorkHeartNoodles");
    if(Now.getHours()>=17){
        document.getElementById("AhMingPorkHeartNoodles").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("AhMingPorkHeartNoodles").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function QiujiaSmallRollRiceNoodles(){
    var Now = new Date();
    var condition = document.getElementById("QiujiaSmallRollRiceNoodles");
    if(Now.getDay()!=1){
        if(Now.getHours()>=11 && Now.getHours()<=16){
            document.getElementById("QiujiaSmallRollRiceNoodles").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("QiujiaSmallRollRiceNoodles").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("QiujiaSmallRollRiceNoodles").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Wangsfishskin(){
    var Now = new Date();
    var condition = document.getElementById("Wangsfishskin");
    if(Now.getDay()!=0 && Now.getDay()!=6){
        if(Now.getHours()>=04 && Now.getHours()<=13){
            document.getElementById("Wangsfishskin").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Wangsfishskin").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        if(Now.getHours()>=04 && Now.getHours()<=14){
            document.getElementById("Wangsfishskin").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Wangsfishskin").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
}

function AlcoholicHotPotRoastPasta(){
    var Now = new Date();
    var condition = document.getElementById("AlcoholicHotPotRoastPasta");
    if(Now.getHours()>=6 && Now.getHours()<=19 || Now.getHours()==20 && Now.getMinutes()<=30){
        document.getElementById("AlcoholicHotPotRoastPasta").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("AlcoholicHotPotRoastPasta").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function XizaiLinAhQuanBowl(){
    var Now = new Date();
    var condition = document.getElementById("XizaiLinAhQuanBowl");
    if(Now.getDay()!=1){
      if(Now.getHours()>=6 && Now.getHours()<=17){
        document.getElementById("XizaiLinAhQuanBowl").innerHTML="營業中";
        condition.style.color="#188038";
      }
      else{
        document.getElementById("XizaiLinAhQuanBowl").innerHTML="已打烊";
        condition.style.color="red";
      }
    }
    else{
        document.getElementById("XizaiLinAhQuanBowl").innerHTML="已打烊";
        condition.style.color="red";
    }
}

//高雄市

function Dongyang(){
    var Now = new Date();
    var condition = document.getElementById("Dongyang");
    if(Now.getDay()!=1 && Now.getDay()!=2){
        if(Now.getHours()>=17 || Now.getHours()==0 || Now.getHours()==1){
            document.getElementById("Dongyang").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Dongyang").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("Dongyang").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Brotherbeef(){
    var Now = new Date();
    var condition = document.getElementById("Brotherbeef");
    if(Now.getDay()!=2){
        if(Now.getHours()>=17 || Now.getHours()==0){
            document.getElementById("Brotherbeef").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Brotherbeef").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("Brotherbeef").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Dandan(){
    var Now = new Date();
    var condition = document.getElementById("Dandan");
    if(Now.getDay()!=2){
        if(Now.getHours()>=07 && Now.getHours()<=20){
            document.getElementById("Dandan").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Dandan").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("Dandan").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Oldcar(){
    var Now = new Date();
    var condition = document.getElementById("Oldcar");
    if(Now.getDay()!=0){
        if(Now.getHours()>=11 && Now.getHours()<=18 || Now.getHours()==19 && Now.getMinutes()<=30){
            document.getElementById("Oldcar").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Oldcar").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("Oldcar").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Seaice(){
    var Now = new Date();
    var condition = document.getElementById("Seaice");
    if(Now.getDay()!=1){
        if(Now.getHours()>=11 && Now.getHours()<=22){
          document.getElementById("Seaice").innerHTML="營業中";
          condition.style.color="#188038";
        }
        else{
          document.getElementById("Seaice").innerHTML="已打烊";
          condition.style.color="red";
        }
      }
      else{
          document.getElementById("Seaice").innerHTML="已打烊";
          condition.style.color="red";
      }
}

function BeigangCaiTongzai(){
    var Now = new Date();
    var condition = document.getElementById("BeigangCaiTongzai");
    if(Now.getDay()!=3){
        if(Now.getHours()>=13 && Now.getHours()<=20 || Now.getHours()==13 && Now.getMinutes()>=30 || Now.getHours()==21 && Now.getMinutes()<=30){
          document.getElementById("BeigangCaiTongzai").innerHTML="營業中";
          condition.style.color="#188038";
        }
        else{
          document.getElementById("BeigangCaiTongzai").innerHTML="已打烊";
          condition.style.color="red";
        }
      }
      else{
          document.getElementById("BeigangCaiTongzai").innerHTML="已打烊";
          condition.style.color="red";
      }
}

function PeipingYangBaobao(){
    var Now = new Date();
    var condition = document.getElementById("PeipingYangBaobao");
    if(Now.getHours()>=11 || Now.getHours()==0){
        document.getElementById("PeipingYangBaobao").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("PeipingYangBaobao").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function Huadamilktea(){
    var Now = new Date();
    var condition = document.getElementById("Huadamilktea");
    if(Now.getDay()!=5){
        if(Now.getHours()>=9 && Now.getHours()<=21){
            document.getElementById("Huadamilktea").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Huadamilktea").innerHTML="已打烊";
            condition.style.color="red";
        }
      }
    else{
        if(Now.getHours()>=10 && Now.getHours()<=21){
            document.getElementById("Huadamilktea").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("Huadamilktea").innerHTML="已打烊";
            condition.style.color="red";
        }
      }
}

//屏東縣

function FuKeeWonton(){
    var Now = new Date();
    var condition = document.getElementById("FuKeeWonton");
    if(Now.getDay()!=1 && Now.getDay()!=2){
        if(Now.getHours()>=10 && Now.getHours()<=19 || Now.getHours()==10 && Now.getMinutes()>=30 || Now.getHours()==20 && Now.getMinutes()<=30){
            document.getElementById("FuKeeWonton").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("FuKeeWonton").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("FuKeeWonton").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function DingyiMincedMeatRice(){
    var Now = new Date();
    var condition = document.getElementById("DingyiMincedMeatRice");
    if(Now.getDay()!=0){
        if(Now.getHours()>=15 || Now.getHours()==0 || Now.getHours()==1){
            document.getElementById("DingyiMincedMeatRice").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("DingyiMincedMeatRice").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("DingyiMincedMeatRice").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function TraditionalTeochewhotandcoldice(){
    var Now = new Date();
    var condition = document.getElementById("TraditionalTeochewhotandcoldice");
    if(Now.getDay()!=3){
        if(Now.getHours()>=10 && Now.getHours()<=21 || Now.getHours()==09 && Now.getMinutes()>=30 || Now.getHours()==22 && Now.getMinutes()<=30){
            document.getElementById("TraditionalTeochewhotandcoldice").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("TraditionalTeochewhotandcoldice").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        document.getElementById("TraditionalTeochewhotandcoldice").innerHTML="已打烊";
        condition.style.color="red";
    }
}

function QiujiaSashimi(){
    var Now = new Date();
    var condition = document.getElementById("QiujiaSashimi");
    if(Now.getDay()!=0 && Now.getDay()!=6){
        if(Now.getHours()>=11 && Now.getHours()<=13 || Now.getHours()==14 && Now.getMinutes()<=40 || Now.getHours()>=16 && Now.getHours()<=18 || Now.getHours()==15 && Now.getMinutes()>=50 || Now.getHours()==19 && Now.getMinutes()<=30 ){
            document.getElementById("QiujiaSashimi").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("QiujiaSashimi").innerHTML="已打烊";
            condition.style.color="red";
        }
    } 
    else{
        if(Now.getHours()>=11 && Now.getHours()<=18 || Now.getHours()==19 && Now.getMinutes<=30){
            document.getElementById("QiujiaSashimi").innerHTML="營業中";
            condition.style.color="#188038";
        }
        else{
            document.getElementById("QiujiaSashimi").innerHTML="已打烊";
            condition.style.color="red";
        }
    }
}

function abowloftofu(){
    var Now = new Date();
    var condition = document.getElementById("abowloftofu");
    if(Now.getDay()!=1 && Now.getDay()!=3 && Now.getDay()!=0){
      if(Now.getHours()>=15 && Now.getHours()<=22 || Now.getHours()==14 && Now.getMinutes()>=30){
        document.getElementById("abowloftofu").innerHTML="營業中";
        condition.style.color="#188038";
      }
      else{
        document.getElementById("abowloftofu").innerHTML="已打烊";
        condition.style.color="red";
      }
    }
    else{
        document.getElementById("abowloftofu").innerHTML="已打烊";
        condition.style.color="red";
    }
}
function HaihongPigKnuckle(){
    var Now = new Date();
    var condition = document.getElementById("HaihongPigKnuckle");
    if(Now.getHours()>=10 && Now.getHours()<=18 || Now.getHours()==19 && Now.getMinutes()<=30){
        document.getElementById("HaihongPigKnuckle").innerHTML="營業中";
        condition.style.color="#188038";
    }
    else{
        document.getElementById("HaihongPigKnuckle").innerHTML="已打烊";
        condition.style.color="red";
    }
}