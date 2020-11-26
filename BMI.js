function calculateBmi() 
{
    var weight1 = document.getElementById("w-kg").value;
    var w1 = document.getElementById("w-lb").value;
    var weight2 =(w1/2.2046);

    var height1 = document.getElementById("h-cm").value;
    var h1 = document.getElementById("h-ft").value;
    var h2 = document.getElementById("h-in").value;
    var height2 = (h1*0.3048)+ (h2*0.0254);



    if(weight1 > 0 && height1 > 0)
    {	
        var finalBmi = weight1/(height1/100*height1/100)
        document.getElementById("bmi").value = finalBmi;

        if(finalBmi < 18.5)
        {
            document.getElementById("demo").innerHTML = " You are Too THIN"
            document.getElementById("demo").style.color = "blue";
        }
        if(finalBmi >= 18.5 && finalBmi < 25)
        {
            document.getElementById("demo").innerHTML = " You are HEALTHY."
            document.getElementById("demo").style.color = "green";
        }
        if(finalBmi >= 25 && finalBmi <30)
        {
            document.getElementById("demo").innerHTML = " You are OverWeight."
            document.getElementById("demo").style.color = "orangered";
            
        }
        if(finalBmi >= 30)
        {
            document.getElementById("demo").innerHTML = " You have OBESITY."
            document.getElementById("demo").style.color = "red";
        }
    }
    



    else if(weight1 > 0 && height2 > 0)
    {
        var finalBmi = weight1/(height2*height2)
        document.getElementById("bmi").value = finalBmi
        
        if(finalBmi < 18.5)
        {
            document.getElementById("demo").innerHTML = " You are Too THIN"
            document.getElementById("demo").style.color = "blue";
        }
        if(finalBmi >= 18.5 && finalBmi < 25)
        {
            document.getElementById("demo").innerHTML = " You are HEALTHY."
            document.getElementById("demo").style.color = "green";
        }
        if(finalBmi >= 25 && finalBmi <30)
        {
            document.getElementById("demo").innerHTML = " You are OverWeight."
            document.getElementById("demo").style.color = "orangered";
            
        }
        if(finalBmi >= 30)
        {
            document.getElementById("demo").innerHTML = " You have OBESITY."
            document.getElementById("demo").style.color = "red";
        }
    }
        
    
        
        else if(weight2 > 0 && height1 > 0)
        {	
            var finalBmi = weight2/(height1/100*height1/100)
            document.getElementById("bmi").value = finalBmi;
    
            if(finalBmi < 18.5)
        {
            document.getElementById("demo").innerHTML = " You are Too THIN"
            document.getElementById("demo").style.color = "blue";
        }
        if(finalBmi >= 18.5 && finalBmi < 25)
        {
            document.getElementById("demo").innerHTML = " You are HEALTHY."
            document.getElementById("demo").style.color = "green";
        }
        if(finalBmi >= 25 && finalBmi <30)
        {
            document.getElementById("demo").innerHTML = "You are OverWeight."
            document.getElementById("demo").style.color = "orangered";
            
        }
        if(finalBmi >= 30)
        {
            document.getElementById("demo").innerHTML = " You have OBESITY."
            document.getElementById("demo").style.color = "red";
        }
        }

        else if(weight2 > 0 && height2 > 0)
        {
            var finalBmi = weight2/(height2*height2)
            document.getElementById("bmi").value = finalBmi
            
            if(finalBmi < 18.5)
            {
                document.getElementById("demo").innerHTML = " You are Too THIN"
                document.getElementById("demo").style.color = "blue";
            }
            if(finalBmi >= 18.5 && finalBmi < 25)
            {
                document.getElementById("demo").innerHTML = " You are HEALTHY."
                document.getElementById("demo").style.color = "green";
            }
            if(finalBmi >= 25 && finalBmi <30)
            {
                document.getElementById("demo").innerHTML = " You are OverWeight."
                document.getElementById("demo").style.color = "orangered";
                
            }
            if(finalBmi >= 30)
            {
                document.getElementById("demo").innerHTML = " You have OBESITY."
                document.getElementById("demo").style.color = "red";
            }
        }   
         else
         {
        alert("Please Fill in everything correctly")
         }
} //function
