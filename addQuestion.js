$(document).ready(function(){
    getQuestion();
    var quesionCheck=false;
    var answer1Check=false;
    var answer2Check=false;
    var answer3Check=false;
    var answer4Check=false;

    var questionTXT;
    var answer1TXT;
    var answer2TXT;
    var answer3TXT;
    var answer4TXT;
    var RanswerTXT;
    
    $("#Send").hide();
    $("#AnswersSelect").hide();

    function getQuestion() {
        $.ajax({
            url: "http://localhost:3000/getQuestion", 
            type: "get",
            cache: false,
            async: false,
            success: function (data) { 
        
                    console.log(data);
        
                //console.log(data["0"].question);
            }
        });
    }

    function sendQuestion(question,ans1, ans2, ans3, ans4, rans) {
        console.log(question);
        $.ajax({
            type: "post",
            url: "http://localhost:3000/sendQuestion",
            data: {
                question: question,
                answer1: ans1, 
                answer2: ans2, 
                answer3: ans3, 
                answer4: ans4, 
                answer:rans },
            success: function(Responddata) {
                
                console.log(Responddata)
            },

        });
    }

    function Show()
    {
        $("#AnswersSelect").show();
        $("#Send").show();
    }
    function control()
    {
        if(answer1Check&&answer2Check&&answer3Check&&answer4Check&&quesionCheck)
        {
            return true;

        }
        else 
        return false;
    }
    function Empty()
    {
        $("#Answer1").prop("disabled", false);  
        $("#Answer2").prop("disabled", false);  
        $("#Answer3").prop("disabled", false);  
        $("#Answer4").prop("disabled", false); 
        $("#questionArea").prop("disabled", false); 

        $("#Answer1").val("");
        $("#Answer2").val("");
        $("#Answer3").val("");
        $("#Answer4").val("");
        $("#questionArea").val("");
        $("#AnswersSelect").empty();
        $("#AnswersSelect").hide();
        $("#Send").hide();

    }

    $("#Send").click(function(){
sendQuestion(questionTXT,answer1TXT,answer2TXT,answer3TXT,answer4TXT,$("#AnswersSelect").val());
        Empty();

 
    });

    $("#questionArea").focusout(function(){

        if($("#questionArea").val()!="")
        {
            quesionCheck=true;
            questionTXT=$("#questionArea").val();
            $("#questionArea").prop("disabled", true);
        }

        if(control())
        {
           Show();
        }


    });
    $("#Answer1").focusout(function(){
        if($("#Answer1").val()!="")
        {
            answer1Check=true;
            answer1TXT=$("#Answer1").val();
            $("#Answer1").prop("disabled", true);
            $("#AnswersSelect").append("<option>"+answer1TXT+"</option>");  
        }
        if(control())
        {
            Show();
        }

    });
    $("#Answer2").focusout(function(){
        if($("#Answer2").val()!="")
        {
            answer2Check=true;
            answer2TXT=$("#Answer2").val();
            $("#Answer2").prop("disabled", true);
            $("#AnswersSelect").append("<option>"+answer2TXT+"</option>");
           
        }

        if(control())
        {
            Show();
        }

    });
    $("#Answer3").focusout(function(){
        if($("#Answer3").val()!="")
        {
            answer3Check=true;
            answer3TXT = $("#Answer3").val();
            $("#Answer3").prop("disabled", true);
            $("#AnswersSelect").append("<option>"+answer3TXT+"</option>");
            
        }

        if(control())
        {
            Show();
        }

    });
    $("#Answer4").focusout(function(){
        if($("#Answer4").val()!="")
        {
            answer4Check=true;
            answer4TXT = $("#Answer4").val();
            $("#Answer4").prop("disabled", true);
            $("#AnswersSelect").append("<option>"+answer4TXT+"</option>");
        }

        if(control())
        {
            Show();
        }



        
    });


});
