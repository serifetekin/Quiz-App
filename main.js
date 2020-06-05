$(document).ready(function () {

    var questionCheck = false;
    var answer1Check = false;
    var answer2Check = false;
    var answer3Check = false;
    var answer4Check = false;

    var questionTXT;
    var answer1TXT;
    var answer2TXT;
    var answer3TXT;
    var answer4TXT;
    var RanswerTXT;

    $("#Send").hide();
    $("#AnswerSelect").hide();

    function sendQuestion(queston, ans1, ans2, ans3, ans4, rans) {
        $.ajax({
            type: "post",
            url: "http://localhost:3000/sendQuestion",
            data: {
                question: question,
                answer1: ans1,
                answer2: ans2,
                answer3: ans3,
                answer4: ans4,
                answer: rans
            },
            success: function (Responddata) {
                console.log(Responddata);
            },
        });

    }
    function control() {
        if (questionTXT.val() == "" || answer1TXT.val() == '' || answer2TXT.val() == '' || answer3TXT.val() == '' || answer4TXT.val() == "" || RanswerTXT.val() == '') {
            return false;
        } else {
            return true;
        }

    }

    function Show() {
        $("#Send").show();
        $("#AnswerSelect").show();
    }

    $("#Send").click(function () {
        sendQuestion(questionTXT,answer1TXT,answer2TXT,a)

    });



    $("#questionArea").focusout(function () {

        if ($("#questionArea").val() != "") {
            questionCheck = true;
            questionTXT = $("#questionArea").val();
            $("#questionArea").prop("disabled", true);
        }

        if (control()) {
            Show();
        }
    });

    $("#answer1").focusout(function () {

        if ($("#answer1").val() != "") {
            answer1Check = true;
            answer1TXT = $("#answer1").val();
            $("#answer1").prop("disabled", true);
        }

        if (control()) {
            Show();
        }
    });

    $("#answer2").focusout(function () {

        if ($("#answer2").val() != "") {
            answer2Check = true;
            answer2TXT = $("#answer2").val();
            $("#answer2").prop("disabled", true);
        }

        if (control()) {
            Show();
        }
    });
    $("#answer3").focusout(function () {

        if ($("#answer3").val() != "") {
            answer3Check = true;
            answer3TXT = $("#answer3").val();
            $("#answer3").prop("disabled", true);
        }

        if (control()) {
            Show();
        }
    });
    $("#answer4").focusout(function () {

        if ($("#answer4").val() != "") {
            answer4Check = true;
            answer4TXT = $("#answer4").val();
            $("#answer4").prop("disabled", true);
        }

        if (control()) {
            Show();
        }
    });

});