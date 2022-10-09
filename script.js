const arr=['apples','oranges','mixture'];
let ans = [];
let text = [];

function myFunction() {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 3);
    
}

function uniRandom() {
    let arr1 = [];
    while(arr1.length < 3){
        let r = Math.floor(Math.random() * 3);
        if(arr1.indexOf(r) === -1) arr1.push(r);
    }
    return arr1;

}

function reset() {
    document.getElementById("s-1").selectedIndex = 0;
    document.getElementById("s-2").selectedIndex = 0;
    document.getElementById("s-3").selectedIndex = 0;
    let arr1 = uniRandom();
    text = arr1;
    document.getElementById("t-1").innerHTML = arr[arr1[0]].toUpperCase();
    document.getElementById("t-2").innerHTML = arr[arr1[1]].toUpperCase();
    document.getElementById("t-3").innerHTML = arr[arr1[2]].toUpperCase();
    document.getElementById("t-1").disabled = false;
    document.getElementById("t-2").disabled = false;
    document.getElementById("t-3").disabled = false;
    document.getElementById("b-1").disabled = false;
    document.getElementById("b-2").disabled = false;
    document.getElementById("b-3").disabled = false;
    document.getElementById("I-1").src = "question.png";
    document.getElementById("I-2").src = "question.png";
    document.getElementById("I-3").src = "question.png";
    ans = [];
    document.getElementById("demo").innerHTML = '';
}

function imgChng(id) {
    let arr1 = uniRandom();
    while(arr1[0] === text[0] || arr1[1] === text[1]){
        arr1 = uniRandom();
    }
    ans = arr1;
    console.log(ans,text);
    id === 'I-1' ? document.getElementById(id).src = `./${arr[arr1[0]]}.png`:
    id === 'I-2' ? document.getElementById(id).src = `${arr[arr1[1]]}.png`:
    id === 'I-3' ? document.getElementById(id).src = `${arr[arr1[2]]}.png`:
    null;
    document.getElementById("b-1").disabled = true;
    document.getElementById("b-2").disabled = true;
    document.getElementById("b-3").disabled = true;
}

function submit() {
    if(ans.length === 0){
        alert('First Open an Image');
    }
    else if(document.getElementById("s-1").selectedIndex === 0 || document.getElementById("s-2").selectedIndex === 0 || document.getElementById("s-3").selectedIndex === 0){
        alert('Please Select all the Labels');
    }
    else{
        document.getElementById('I-1').src = `${arr[ans[0]]}.png`;
        document.getElementById('I-2').src = `${arr[ans[1]]}.png`;
        document.getElementById('I-3').src = `${arr[ans[2]]}.png`;
        let a = document.getElementById('I-1').src;
        let b = document.getElementById('s-1');
        b = b.options[b.selectedIndex].text.toLowerCase();
        let c = document.getElementById('I-2').src;
        let d = document.getElementById('s-2');
        d = d.options[d.selectedIndex].text.toLowerCase();
        console.log(b,d)
        if(a.includes(b) && c.includes(d))
        {
            document.getElementById("demo").innerHTML = `"Amazing !!! You Solved the Puzzle !!!"`;
        }
        else{
            document.getElementById("demo").innerHTML = 'Sorry :((' +"<br>"+ 'Better Luck Next Time';
        }
    }
}