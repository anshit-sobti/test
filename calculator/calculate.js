calculate=function(func,n1,n2)
{
	var result=0;
	if(func=="Addition")
	{
		result=n1+n2;
  }
	else if(func=="Subtraction")
  {
		result=n1-n2;
  }
	else if(func=="Multiplication")
  {
		result=n1*n2;
	}
	else if(func=="Division")
	{
		result=n1/n2;
  }
return result;

}
module.exports=calculate;
