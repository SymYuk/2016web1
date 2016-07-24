var ans;
var que;
var num=Math.floor(Math.random()*14);
if(num==0)
que="若気る";ans="にやける";
if(num==1)
que="蔓延る";ans="はびこる";
if(num==2)
que="素見す";ans="ひやかす";
if(num==3)
que="疎癒ゆ";ans="おろいゆ";
if(num==4)
que="響動く";ans="どよめく";
if(num==5)
que="額衝く";ans="ぬかづく";
if(num==6)
que="戦慄く";ans="わななく";
if(num==7)
que="時過ぐ";ans="さだすぐ";
if(num==8)
que="含羞む";ans="はにかむ";
if(num==9)
que="微睡む";ans="まどろむ";
if(num==10)
que="私語く";ans="ささやく";
if(num==11)
que="周章る";ans="あわてる";
if(num==12)
que="揶揄う";ans="からかう";
if(num==13)
que="流離う";ans="さすらう";

var input;
var message="なんと読む？→"+que;

var input=window.prompt(message,"送り仮名込みで平仮名で解答");

if(input==answer)
{
	alert("お見事です");
}
else
{
	alert("残念　「"+ans+"」って読むのです");
}
