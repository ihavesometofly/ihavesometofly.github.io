$("#contacts").click(function() {
	$("#modal__contacts").css("display", "block");
	$("body").css("color", "");
})
$("#close__btn").click(function() {
	$("#modal__contacts").css("display", "none");
})


let money = 100;
let counter_first = 0;
var counter_second = 0;
var counter_third = 0;
let animal_first = 1;
let animal_second = 1;
let animal_third = 1;




function check_money() {
  if(money <= 9) {
		$(".plus_first").attr("disabled", "true");
	} 
	else {
		$(".plus_first").removeAttr("disabled");
		
	}
	if(money <= 19){
		$(".plus_second").attr("disabled", "true");
	}else {
		$(".plus_second").removeAttr("disabled");
	}
	if(money <= 29){
		$(".plus_third").attr("disabled", "true");
	}else {
		$(".plus_third").removeAttr("disabled");
	}
}



function progressDemo() {
  
  document.getElementById( 'progress_bar_first' ).value = counter_first;
counter_first++;
	
  if( counter_first == 100 ) {
  	$(".money").text(money = money + 1);
  	counter_first = 0;

  } 
  	check_money();

}


$(".plus_first").click(function() {
	
	$(".pic_first").text(animal_first++);
	$(".money").text(money = money - 10);
	let timer = setInterval( progressDemo, 300 );
})

////////////////////////////////////////////////////
///////////////////////////////////////////////////
function progressDemo2() {
  counter_second++;
  document.getElementById( 'progress_bar_second' ).value = counter_second;
  if( counter_second == 100 ) {
  	$(".money").text(money = money + 1);
    counter_second = 0;
  }
 check_money();
}

$(".plus_second").click(function() {
	$(".pic_second").text(animal_second++);
	$(".money").text(money = money - 20);
	var timer = setInterval( progressDemo2, 200 );
})

////////////////////////////////////////////////////
///////////////////////////////////////////////////
function progressDemo3() {
  counter_third++;
  document.getElementById( 'progress_bar_third' ).value = counter_third;
  if( counter_third == 100 ) {
  	$(".money").text(money = money + 1);
    counter_third = 0;
  }
  check_money();
}

$(".plus_third").click(function() {
	$(".pic_third").text(animal_third++);
	$(".money").text(money = money - 30);
	var timer = setInterval( progressDemo3, 100 );
})

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
$("#input_let").on("input", function(){

		$("#output").html($("#input_let").val());
	//console.log($("#input_let").val());

});