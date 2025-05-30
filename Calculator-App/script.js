let action = document.getElementById('action');
let nums = document.querySelectorAll('li');

for(let i=0; i<nums.length; i++){
    //console.log(nums[i].innerHTML);

    nums[i].addEventListener('click',function(){
        //console.log(nums[i].innerHTML);
        let getvalue = document.getElementById('action').value;

        if(nums[i].innerHTML =="="){
            action.value = eval(action.value);
        }
        else{
            if(nums[i].innerHTML == "C" || nums[i].innerHTML == "CE"){
                action.value = "";
            }
            else{
                action.value +=nums[i].innerHTML;
            }

            if (nums[i].innerHTML == "Del"){
                action.value = getvalue.slice(0, -1);
            }
        }

    })
}