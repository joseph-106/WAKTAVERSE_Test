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
    "ISTJ": {"character": "우왁굳", "explain": "ISTJ 설명", "img1": "static/img/istj.jpg", "img2": "static/img/esfj.png", "img3": "static/img/enfj.jpg", "good": "엔젤님", "bad": "도파민 박사"},
    "ISFJ": {"character": "미츠네 하쿠", "explain": "ISFJ 설명", "img1": "static/img/isfj.jpg", "img2": "static/img/esfp.png", "img3": "static/img/entj.jpg", "good": "독고혜지", "bad": "고세구"},
    "ESTJ": {"character": "이덕수 할아바이", "explain": "ESTJ 설명", "img1": "static/img/estj.png", "img2": "static/img/isfp.jpg", "img3": "static/img/infj.jpg", "good": "부정형 인간", "bad": "징버거 & 비챤"},
    "ESFJ": {"character": "엔젤님", "explain": "ESFJ 설명", "img1": "static/img/esfj.png", "img2": "static/img/istj.jpg", "img3": "static/img/intj.png", "good": "우왁굳", "bad": "냉참"},
    "ISTP": {"character": "새우튀김", "explain": "ISTP 설명", "img1": "static/img/istp.png", "img2": "static/img/enfj.jpg", "img3": "static/img/enfp.jpg", "good": "도파민 박사", "bad": "릴파"},
    "ISFP": {"character": "부정형 인간", "explain": "ISFP 설명", "img1": "static/img/isfp.jpg", "img2": "static/img/estj.png", "img3": "static/img/entp.png", "good": "이덕수 할아바이", "bad": "풍신"},
    "ESTP": {"character": "김치만두번영택사스가", "explain": "ESTP 설명", "img1": "static/img/estp.png", "img2": "static/img/istj.jpg", "img3": "static/img/infp.jpg", "good": "우왁굳", "bad": "뢴트게늄 & 아이네"},
    "ESFP": {"character": "독고혜지", "explain": "ESFP 설명", "img1": "static/img/esfp.png", "img2": "static/img/isfj.jpg", "img3": "static/img/intp.jpg", "good": "미츠네 하쿠", "bad": "주르르"},
    "INFP": {"character": "뢴트게늄 & 아이네", "explain": "INFP 설명", "img1": "static/img/infp.jpg", "img2": "static/img/entj.jpg", "img3": "static/img/estp.png", "good": "고세구", "bad": "김치만두번영택사스가"},
    "INTP": {"character": "주르르", "explain": "INTP 설명", "img1": "static/img/intp.jpg", "img2": "static/img/enfj.jpg", "img3": "static/img/esfp.png", "good": "도파민 박사", "bad": "독고혜지"},
    "ENFP": {"character": "릴파", "explain": "ENFP 설명", "img1": "static/img/enfp.jpg", "img2": "static/img/intj.png", "img3": "static/img/istp.png", "good": "냉참", "bad": "새우튀김"},
    "ENTP": {"character": "풍신", "explain": "ENTP 설명", "img1": "static/img/entp.png", "img2": "static/img/infj.jpg", "img3": "static/img/isfp.jpg", "good": "징버거 & 비챤", "bad": "부정형 인간"},
    "INFJ": {"character": "징버거 & 비챤", "explain": "INFJ 설명", "img1": "static/img/infj.jpg", "img2": "static/img/entp.png", "img3": "static/img/estj.png", "good": "풍신", "bad": "이덕수 할아바이"},
    "INTJ": {"character": "냉참", "explain": "INTJ 설명", "img1": "static/img/intj.png", "img2": "static/img/enfp.jpg", "img3": "static/img/esfj.png", "good": "릴파", "bad": "엔젤님"},
    "ENFJ": {"character": "도파민 박사", "explain": "ENFJ 설명", "img1": "static/img/enfj.jpg", "img2": "static/img/istp.png", "img3": "static/img/istj.jpg", "good": "새우튀김", "bad": "우왁굳"},
    "ENTJ": {"character": "고세구", "explain": "ENTJ 설명", "img1": "static/img/entj.jpg", "img2": "static/img/infp.jpg", "img3": "static/img/isfj.jpg", "good": "뢴트게늄 & 아이네", "bad": "미츠네 하쿠"}
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

        $("#img1").attr("src", result[mbti]["img1"]);
        $("#character").html(result[mbti]["character"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#img2").attr("src", result[mbti]["img2"]);
        $("#img3").attr("src", result[mbti]["img3"]);
        $("#good").html(result[mbti]["good"]);
        $("#bad").html(result[mbti]["bad"]);


    } else {
        $(".progress-bar").attr('style','width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++; //num 변수를 활용해 객체 번호를 하나씩 올리는 구조
    }
}
function reload() { 
    location.reload();
}