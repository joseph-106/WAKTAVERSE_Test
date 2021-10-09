var num = 1; //현재 문제 번호를 저장할 변수
var q = {
    1: {"title": "문제 1번", "type": "EI", "A": "E", "B": "I"},
    2: {"title": "문제 2번", "type": "EI", "A": "E", "B": "I"},
    3: {"title": "문제 3번", "type": "EI", "A": "E", "B": "I"},
    4: {"title": "문제 4번", "type": "SN", "A": "S", "B": "N"},
    5: {"title": "문제 5번", "type": "SN", "A": "S", "B": "N"},
    6: {"title": "문제 6번", "type": "SN", "A": "S", "B": "N"},
    7: {"title": "문제 7번", "type": "TF", "A": "T", "B": "F"},
    8: {"title": "문제 8번", "type": "TF", "A": "T", "B": "F"},
    9: {"title": "문제 9번", "type": "TF", "A": "T", "B": "F"},
    10: {"title": "문제 10번", "type": "JP", "A": "J", "B": "P"},
    11: {"title": "문제 11번", "type": "JP", "A": "J", "B": "P"},
    12: {"title": "문제 12번", "type": "JP", "A": "J", "B": "P"}
}
var result = {
    "ISTJ": {"character": "ISTJ", "explain": "ISTJ 설명", "img": "img/wak.jpg"},
    "ISFJ": {"character": "ISFJ", "explain": "ISFJ 설명", "img": "img/wak.jpg"},
    "ESTJ": {"character": "ESTJ", "explain": "ESTJ 설명", "img": "img/wak.jpg"},
    "ESFJ": {"character": "ESFJ", "explain": "ESFJ 설명", "img": "img/wak.jpg"},
    "ISTP": {"character": "ISTP", "explain": "ISTP 설명", "img": "img/wak.jpg"},
    "ISFP": {"character": "ISFP", "explain": "ISFP 설명", "img": "img/wak.jpg"},
    "ESTP": {"character": "ESTP", "explain": "ESTP 설명", "img": "img/wak.jpg"},
    "ESFP": {"character": "ESFP", "explain": "ESFP 설명", "img": "img/wak.jpg"},
    "INFP": {"character": "INFP", "explain": "INFP 설명", "img": "img/wak.jpg"},
    "INTP": {"character": "INTP", "explain": "INTP 설명", "img": "img/wak.jpg"},
    "ENFP": {"character": "ENFP", "explain": "ENFP 설명", "img": "img/wak.jpg"},
    "ENTP": {"character": "ENTP", "explain": "ENTP 설명", "img": "img/wak.jpg"},
    "INFJ": {"character": "INFJ", "explain": "INFJ 설명", "img": "img/wak.jpg"},
    "INTJ": {"character": "INTJ", "explain": "INTJ 설명", "img": "img/wak.jpg"},
    "ENFJ": {"character": "ENFJ", "explain": "ENFJ 설명", "img": "img/wak.jpg"},
    "ENTJ": {"character": "ENTJ", "explain": "ENTJ 설명", "img": "img/wak.jpg"}
}
function start() { 
    $(".start").hide();
    $(".question").show();
    next();
}
$("#A").click(function(){ 
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){ 
    next();
});
function next() {
    if(num == 13){
        $(".question").hide();
        $(".result").show();

        var mbti = "";
        ($('#EI').val() < 2) ? mbti += "I" : mbti += "E";
        ($('#SN').val() < 2) ? mbti += "N" : mbti += "S";
        ($('#TF').val() < 2) ? mbti += "F" : mbti += "T";
        ($('#JP').val() < 2) ? mbti += "P" : mbti += "J";

        $("#img").attr("src", result[mbti]["img"]);
        $("#character").html(result[mbti]["character"]);
        $("#explain").html(result[mbti]["explain"]);

    } else {
        $(".progress-bar").attr('style','width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++; //num 변수를 활용해 객체 번호를 하나씩 올리는 구조
    }
}