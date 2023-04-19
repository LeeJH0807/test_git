var heading2 = document.querySelector('#heading2');
        heading2.onclick = function() {
            var reply = confirm('글자색을 파란색으로 바꾸시겠습니까?');
            if(reply){
                heading2.style.color = "blue";
            }
            else{
                heading2.style.color = "black";
            }
            
        }