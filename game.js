var answer="";
var ques;
var num=Math.floor(Math.random()*10);
switch(num)
{
  case 0:
  ques="ああ";
  break;
  default:
  ques="あああ";
  break;
}
var question;
var output="なんと読む？→"+ques;
var input;
var message;

window.prompt(output);

while(true)
{
	input=parseInt(window.prompt(ques));
	if(input<1 || input>256)
	{
		message='1～256で入力してね';
		document.getElementById('choice').textContent=message;
		continue;
	}
	if(input==num)
	{
		message='正解！おめでとう！！';
		break;
	}
	else
	{
  		chance-=1;
  		if(chance==0)
  		{
  			message='ゲームオーバー！\n正解は'+num+'です';
  			break;
  		}
  		else if(input<num)
  		{
  			message='もっと大きいよ！';
  		}
  		else if(input>num)
  		{
  			message='もっと小さいよ！';
		}	
	}
word='1~256の数あてデス！\nチャンス : '+chance+'回';
 document.getElementById('choice').textContent=message;
}
 document.getElementById('choice').textContent=message;