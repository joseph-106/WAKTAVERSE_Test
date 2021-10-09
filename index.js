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
    "ISTJ": {"character": "우왁굳", "explain": "ISTJ 설명", "img": "img/istj.jpg"},
    "ISFJ": {"character": "곽춘식", "explain": "ISFJ 설명", "img": "img/isfj.png"},
    "ESTJ": {"character": "이덕수 할아바이", "explain": "ESTJ 설명", "img": "img/estj.png"},
    "ESFJ": {"character": "엔젤님", "explain": "ESFJ 설명", "img": "img/esfj.png"},
    "ISTP": {"character": "새우튀김", "explain": "ISTP 설명", "img": "img/istp.png"},
    "ISFP": {"character": "부정형 인간", "explain": "ISFP 설명", "img": "img/isfp.jpg"},
    "ESTP": {"character": "비즈니스 킴", "explain": "ESTP 설명", "img": "img/estp.png"},
    "ESFP": {"character": "독고혜지", "explain": "ESFP 설명", "img": "img/esfp.png"},
    "INFP": {"character": "뢴트게늄 & 아이네", "explain": "INFP 설명", "img": "img/infp.jpg"},
    "INTP": {"character": "주르르", "explain": "INTP 설명", "img": "img/intp.jpg"},
    "ENFP": {"character": "릴파", "explain": "ENFP 설명", "img": "img/enfp.jpg"},
    "ENTP": {"character": "풍신", "explain": "ENTP 설명", "img": "img/entp.png"},
    "INFJ": {"character": "징버거 & 비챤", "explain": "INFJ 설명", "img": "img/infj.jpg"},
    "INTJ": {"character": "냉참", "explain": "INTJ 설명", "img": "img/intj.png"},
    "ENFJ": {"character": "도파민 박사", "explain": "ENFJ 설명", "img": "img/enfj.jpg"},
    "ENTJ": {"character": "고세구", "explain": "ENTJ 설명", "img": "img/entj.jpg"}
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