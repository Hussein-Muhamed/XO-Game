var title = document.querySelector('.title')
var turn = "x"
var counter = 0
var list = []

function end(num1,num2,num3){
    title.innerHTML = `${list[num1]} winner`
    document.getElementById('item'+num1).style.background = '#000'
    document.getElementById('item'+num2).style.background = '#000'
    document.getElementById('item'+num3).style.background = '#000'

    setInterval(function(){title.innerHTML += '.'},1000)
    setTimeout(function(){location.reload()},3000)
}

function winner() {
    for(let i = 1 ; i<10; i++){
        list[i] = document.getElementById("item"+i).innerHTML
    }

    if(list[1] == list[2] && list[2] == list[3] && list[1] !== ''){
        end(1,2,3)
    }
    else if(list[4] == list[5] && list[5] == list[6] && list[4] !== ''){
        end(4,5,6)
    }
    else if(list[7] == list[8] && list[8] == list[9] && list[7] !== ''){
        end(7,8,9)
    }
    else if(list[1] == list[4] && list[4] == list[7] && list[1] !== ''){
        end(1,4,7)
    }
    else if(list[2] == list[5] && list[5] == list[8] && list[2] !== ''){
        end(2,5,8)
    }
    else if(list[3] == list[6] && list[6] == list[9] && list[3] !== ''){
        end(3,6,9)
    }
    else if(list[1] == list[5] && list[5] == list[9] && list[1] !== ''){
        end(1,5,9)
    }
    else if(list[3] == list[5] && list[5] == list[7] && list[3] !== ''){
        end(3,5,7)
    } 
}

function game(id) {
    var elem = document.getElementById(id)
    if(turn == 'x' && elem.innerHTML == ''){
        elem.innerHTML = 'X'
        turn = 'o'
        title.innerHTML = 'O'
        counter++
        console.log(counter);
        if(counter==5){
            setTimeout(function(){location.reload()},1000)
        }
    } else if(turn == 'o' && elem.innerHTML == ''){
        elem.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X'
    }
    winner()
}