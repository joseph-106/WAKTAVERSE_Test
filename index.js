var num = 1; //현재 문제 번호를 저장할 변수
var q = {
    1: {
        "title": "새로운 친구들을 만났을 때..", 
        "type": "EI", 
        "A": "내가 먼저 말을 건다", 
        "B": "일단 눈치보고 있는다"
    },
    2: {
        "title": "지금 내 책상은..",
        "type": "JP", 
        "A": "깔끔하다", 
        "B": "쥰내 더럽다"
    },
    3: {
        "title": "문제가 생겼을 때 나는..", 
        "type": "EI", 
        "A": "말이 많아진다", 
        "B": "생각이 많아진다"
    },
    4: {
        "title": "슬픔을 나누면..", 
        "type": "TF", 
        "A": "슬픈 사람이 둘이 된다", 
        "B": "슬픔이 반이 된다"
    },
    5: {
        "title": "나는 일을 할 때..", 
        "type": "EI", 
        "A": "팀으로 일하는 것이 좋다", 
        "B": "혼자 일하는 것이 편하다"
    },
    6: {
        "title": "마크 건콘에 참가한다면..", 
        "type": "SN", 
        "A": "확실한 가이드라인이 있는 주제가 좋다", 
        "B": "내 생각을 펼칠 수 있는 주제가 좋다"
    },
    7: {
        "title": "나는 과제를 할 때..", 
        "type": "JP", 
        "A": "전체 계획부터 세우고 시작한다", 
        "B": "자료조사부터 해야 틀이 잡힌다"
    },
    8: {
        "title": "친구에게 선물을 준다면..", 
        "type": "SN", 
        "A": "필요할 것 같은 선물을 준다", 
        "B": "기억에 남을만한 선물을 준다"
    },
    9: {
        "title": "나는 외출할 때..", 
        "type": "JP", 
        "A": "무엇을 할지 정하고 나간다", 
        "B": "일단 발이 이끄는 곳으로 간다"
    },
    10: {
        "title": "나는 한 번 간 길을..", 
        "type": "SN", 
        "A": "잘 기억하는 편이다", 
        "B": "잘 기억하지 못한다"
    },
    11: {
        "title": "관심있는 사람에게 나는..", 
        "type": "TF", 
        "A": "질문을 많이 한다", 
        "B": "리액션을 많이 한다"
    },
    12: {
        "title": "인생은..",
        "type": "TF", 
        "A": "과정보다는 결과", 
        "B": "결과보다는 과정"
    }
}
var result = {
    "ISTJ": {
        "character": "우왁굳", 
        "mbti": "당신은 혹시... ISTJ?", 
        "explain1": "신중하고 조용하며 집중력이 강하고 매사에 철저합니다.",
        "explain2": "논리적, 현실적인 성격으로, 많은 사람들에게 신뢰를 받습니다.", 
        "explain3": "만사를 체계적으로 조직화시키려고 하며 책임감이 강합니다.", 
        "explain4": "중요하다고 생각하는 일이면 주위 시선에 아랑곳하지 않고 추진해 나갑니다.",  
        "img1": "static/img/istj.jpg", 
        "img2": "static/img/esfj.png", 
        "img3": "static/img/enfj.jpg", 
        "good": "엔젤님", 
        "bad": "도파민 박사", 
        "presume": ""
    },
    "ISFJ": {
        "character": "미츠네 하쿠", 
        "mbti": "당신은 혹시... ISFJ?", 
        "explain1": "조용하고 친근하고 책임감이 있으며 예의 바릅니다.",
        "explain2": "맡은 일에 헌신적이며, 어떤 계획의 추진이나 집단에 안정감을 줍니다.", 
        "explain3": "매사에 철저하고 정확합니다.", 
        "explain4": "인간 관계에 세심하고 동정심이 많으며 타인의 감정에 민감합니다.",  
        "img1": "static/img/isfj.jpg", 
        "img2": "static/img/esfp.png", 
        "img3": "static/img/entj.jpg", 
        "good": "독고혜지", 
        "bad": "고세구", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ESTJ": {
        "character": "이덕수 할아바이", 
        "mbti": "당신은 혹시... ESTJ?", 
        "explain1": "구체적이고 현실적이며, 경영 또는 공학에 재능을 타고납니다.",
        "explain2": "실용성이 없는 일에는 관심이 없으며 응용력이 좋습니다.",
        "explain3": "활동을 조직화하고 주도해 나가기를 좋아합니다.",
        "explain4": "타인의 관점에 귀를 기울인다면 훌륭한 리더가 될 수 있습니다.", 
        "img1": "static/img/estj.png", 
        "img2": "static/img/isfp.jpg", 
        "img3": "static/img/infj.jpg", 
        "good": "부정형 인간", 
        "bad": "징버거 & 비챤", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ESFJ": {
        "character": "엔젤님", 
        "mbti": "당신은 혹시... ESFJ?", 
        "explain1": "사람들과 이야기 하기를 좋아하며 인기가 많습니다.",
        "explain2": "조화를 중시하고 집단에서도 능동적인 구성원입니다.", 
        "explain3": "마음이 따뜻하고 남을 돕는 데에 타고난 기질이 있습니다.", 
        "explain4": "칭찬을 좋아하며, 사람들에게 영향을 주는 일에 관심이 많습니다.",  
        "img1": "static/img/esfj.png", 
        "img2": "static/img/istj.jpg", 
        "img3": "static/img/intj.png", 
        "good": "우왁굳", 
        "bad": "냉참", 
        "presume": ""
    },
    "ISTP": {
        "character": "새우튀김", 
        "mbti": "당신은 혹시... ISTP?", 
        "explain1": "차분한 방관자 유형으로, 조용하고 과묵합니다.",
        "explain2": "절제된 호기심을 가지고 인생을 관찰하고 분석합니다.", 
        "explain3": "때로는 예기치 않게 유머 감각을 나타내기도 합니다.", 
        "explain4": "인간관계보다는 기계의 작동이나 원칙에 관심이 많습니다.",  
        "img1": "static/img/istp.png", 
        "img2": "static/img/enfj.jpg", 
        "img3": "static/img/enfp.jpg", 
        "good": "도파민 박사", 
        "bad": "릴파", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ISFP": {
        "character": "부정형 인간", 
        "mbti": "당신은 혹시... ISFP?", 
        "explain1": "다정하고 친절하며, 능력을 뽐내지 않고 겸손합니다.",
        "explain2": "의견의 충돌을 피하고 자기 견해를 타인에게 강요하지 않습니다.",
        "explain3": "앞에서 주도해 나가기 보다 충실히 따르는 편입니다.", 
        "explain4": "조급해하지 않고 여유있게 현재를 즐기는 성격입니다.",
        "img1": "static/img/isfp.jpg", 
        "img2": "static/img/estj.png", 
        "img3": "static/img/entp.png", 
        "good": "이덕수 할아바이", 
        "bad": "풍신", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ESTP": {
        "character": "김치만두번영택사스가", 
        "mbti": "당신은 혹시... ESTP?", 
        "explain1": "근심이 없고 어떤 일이든 즐길 줄 아는 성격입니다.", 
        "explain2": "운동을 좋아하고 친구 사귀기를 좋아합니다.", 
        "explain3": "적응력이 강하고 관용적이며, 긴 설명을 싫어합니다.", 
        "explain4": "기계 조립 등 실제적이나 현실적인 문제 해결에 능숙합니다.", 
        "img1": "static/img/estp.png", 
        "img2": "static/img/istj.jpg", 
        "img3": "static/img/infp.jpg", 
        "good": "우왁굳", 
        "bad": "뢴트게늄 & 아이네", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ESFP": {
        "character": "독고혜지", 
        "mbti": "당신은 혹시... ESFP?", 
        "explain1": "사교적이고 태평스럽고 친절하며, 만사를 즐기는 유형입니다.", 
        "explain2": "주위에 벌어지는 일에 관심이 많아 끼어들기를 좋아합니다.", 
        "explain3": "추상적인 이론보다는 구체적인 사실을 잘 기억합니다.", 
        "explain4": "사람을 대하는 능력이 요구되는 분야에서 능력을 발휘합니다.", 
        "img1": "static/img/esfp.png", 
        "img2": "static/img/isfj.jpg", 
        "img3": "static/img/intp.jpg", 
        "good": "미츠네 하쿠", 
        "bad": "주르르", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "INFP": {
        "character": "뢴트게늄 & 아이네", 
        "mbti": "당신은 혹시... INFP?", 
        "explain1": "정열적이고 친근하나 상대방을 잘 알기 전까지 드러내지 않습니다.",
        "explain2": "학습, 아이디어, 언어 등 자기 독립적인 일에 관심이 많습니다.", 
        "explain3": "일을 지나치게 많이 벌이려는 경향이 있지만 어떻게든 수습합니다.", 
        "explain4": "물질적 소유에는 큰 관심이 없는 편입니다.", 
        "img1": "static/img/infp.jpg", 
        "img2": "static/img/entj.jpg", 
        "img3": "static/img/estp.png", 
        "good": "고세구", 
        "bad": "김치만두번영택사스가", 
        "presume": ""
    },
    "INTP": {
        "character": "주르르", 
        "mbti": "당신은 혹시... INTP?", 
        "explain1": "평소에는 조용하고 과묵한 성격이지만 관심분야에는 말이 많습니다.",
        "explain2": "이론적, 과학적 탐구와 논리적인 문제 해결을 즐깁니다.", 
        "explain3": "사적 모임이나 잡담에는 큰 관심이 없습니다.",  
        "explain4": "관심사가 뚜렷하고, 이를 활용할 수 있는 분야에서 능력을 발휘합니다.", 
        "img1": "static/img/intp.jpg", 
        "img2": "static/img/enfj.jpg", 
        "img3": "static/img/esfp.png", 
        "good": "도파민 박사", 
        "bad": "독고혜지", 
        "presume": ""
    },
    "ENFP": {
        "character": "릴파", 
        "mbti": "당신은 혹시... ENFP?", 
        "explain1": "따뜻하고 정열적이며, 재능이 많고 상상력이 풍부합니다.", 
        "explain2": "관심있는 일이라면 어떤 일이든지 척척 해냅니다.", 
        "explain3": "남을 잘 돕고 항상 새로운 것을 찾아 나섭니다.", 
        "explain4": "능력을 과신한 나머지 일에 즉흥적으로 덤비는 경우가 많습니다.", 
        "img1": "static/img/enfp.jpg", 
        "img2": "static/img/intj.png", 
        "img3": "static/img/istp.png", 
        "good": "냉참", 
        "bad": "새우튀김", 
        "presume": ""
    },
    "ENTP": {
        "character": "풍신", 
        "mbti": "당신은 혹시... ENTP?", 
        "explain1": "독창적이고 안목이 넓으며 다방면에 재능이 많습니다.", 
        "explain2": "새로운 일을 시도하고 추진하려는 의욕이 넘치며 달변가입니다.", 
        "explain3": "복잡한 문제는 잘 해결하지만 일상적인 일은 간과하기 쉽습니다.", 
        "explain4": "하나의 일에 관심을 가져도 항상 새로운 것을 찾아 나섭니다.", 
        "img1": "static/img/entp.png", 
        "img2": "static/img/infj.jpg", 
        "img3": "static/img/isfp.jpg", 
        "good": "징버거 & 비챤", 
        "bad": "부정형 인간", 
        "presume": ""
    },
    "INFJ": {
        "character": "징버거 & 비챤", 
        "mbti": "당신은 혹시... INFJ?", 
        "explain1": "인내심이 많고 독창적이며 원하는 일이라면 끝까지 이루려고 합니다.", 
        "explain2": "타인에게 말없이 영향력을 미치며, 따뜻한 관심을 가지고 있습니다.",
        "explain3": "양심적으로 행동하며 원리원칙을 중시합니다.",
        "explain4": "환신에 찬 신념을 가지고 있기에 존경을 받으며 사람들이 따릅니다.",
        "img1": "static/img/infj.jpg", 
        "img2": "static/img/entp.png", 
        "img3": "static/img/estj.png", 
        "good": "풍신", 
        "bad": "이덕수 할아바이", 
        "presume": ""
    },
    "INTJ": {
        "character": "냉참", 
        "mbti": "당신은 혹시... INTJ?", 
        "explain1": "독창적 아이디어나 목표를 향한 강한 추진력을 가지고 있습니다.",
        "explain2": "관심을 끄는 일이라면 남의 도움 없이도 계획하고 실행해 나갑니다.",
        "explain3": "세상에 회의적, 독립적이고 고집스러울 때가 있습니다.", 
        "explain4": "해당 테스트 제작자와 같은 유형입니다!😀",
        "img1": "static/img/intj.png", 
        "img2": "static/img/enfp.jpg", 
        "img3": "static/img/esfj.png", 
        "good": "릴파", 
        "bad": "엔젤님", 
        "presume": ""
    },
    "ENFJ": {
        "character": "도파민 박사", 
        "mbti": "당신은 혹시... ENFJ?", 
        "explain1": "사교성이 풍부하고 인기 있으며, 동정심이 많습니다.",
        "explain2": "다른 사람의 생각이나 의견을 존중하고 최대한 반영하려 합니다.", 
        "explain3": "능란하게 계획을 내놓거나 집단을 이끌어가는 능력이 있습니다.", 
        "explain4": "주위의 칭찬이나 비판에 민감하게 반응합니다.",  
        "img1": "static/img/enfj.jpg", 
        "img2": "static/img/istp.png", 
        "img3": "static/img/istj.jpg", 
        "good": "새우튀김", 
        "bad": "우왁굳", 
        "presume": "* 해당 캐릭터의 유형은 제작자가 임의로 추정했습니다"
    },
    "ENTJ": {
        "character": "고세구", 
        "mbti": "당신은 혹시... ENTJ?", 
        "explain1": "열정적이고 솔직하며, 단호하고 통솔력이 있습니다.",
        "explain2": "대중 연설이나 강연 등, 공개적 발화라면 어떤 것이던지 능합니다.", 
        "explain3": "주변 정보에 밝고 지식에 대한 관심과 욕구가 많습니다.",  
        "explain4": "실제보다 더 긍정적이고 자신 있는 모습으로 비칠 때도 있습니다.", 
        "img1": "static/img/entj.jpg", 
        "img2": "static/img/infp.jpg", 
        "img3": "static/img/isfj.jpg", 
        "good": "뢴트게늄 & 아이네", 
        "bad": "미츠네 하쿠", 
        "presume": ""
    }
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
        $("#mbti_text").html(result[mbti]["mbti"]);
        $("#explain1").html(result[mbti]["explain1"]);
        $("#explain2").html(result[mbti]["explain2"]);
        $("#explain3").html(result[mbti]["explain3"]);
        $("#explain4").html(result[mbti]["explain4"]);
        $("#presume_text").html(result[mbti]["presume"]);
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