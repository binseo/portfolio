$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['Main', '자주 찾는 서비스', '한눈에 보는 소식', '활동 사진', '119 체험 센터', '소방서 안내', 'footer'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		
		lockAnchors: false, // 수정해야함!! true !!!
		anchors: ['main', 'service', 'news', 'action', 'center', 'map', 'footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){ /* index가 0면 슬라이드는 첫번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('1번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 1){ /* index가 1면 슬라이드는 두번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('2번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')

			}else if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('3번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}else if(destination.index == 3){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('4번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 4){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('5번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}else if(destination.index == 5){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('6번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}
		},

		responsiveWidth: 1025, /* fullpage를 적용시키지 않을 모바일 사이즈 (768부터 모바일) */
        responsiveHeight: 700 /* 브라우저 높이가 700이하로 줄면 fullpage 안함 */
        
	});// fullpage


	// /********************************** visual swiper :: 시작 ******************************/

	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        effect: "fade", /* fade 효과 부드럽게 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },
    
    });

	$('.visual .ctrl_wrap button.btn_stop').on('click', function(){
		// console.log('정지버튼 클릭')
		visual_swiper.autoplay.stop();  /* 일시정지 기능 */
		$(this).hide()
		$('.visual .ctrl_wrap button.btn_play').show()
	})

	$('.visual .ctrl_wrap button.btn_play').on('click', function(){
		// console.log('재생 버튼')
		visual_swiper.autoplay.start();  /* 재생 기능 */
		$(this).hide()
		$('.visual .ctrl_wrap button.btn_stop').show()
	})
		
	
	

	/********************************** visual swiper :: 끝 ******************************/
	

	/********************************** story swiper :: 시작 ******************************/

	/********************************** story swiper :: 끝 ******************************/


	

}) //$(document).ready




