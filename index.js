


let elements = document.querySelectorAll(".mv-bg");


window.addEventListener("scroll", function() {
	
	
	// スクロール量を取得
	let scrollPosition = window.scrollY;
	// スクロール量に応じた拡大率を設定（1 + 0.0005 * スクロール量 で徐々に拡大）
	let scale = 1 + scrollPosition * 0.1;


	

	function checkScreenSize() {
		if (window.matchMedia("(max-width: 900px)").matches) {
			console.log("モバイルサイズ");
			// モバイル用の処理

			elements.forEach(function(element) {
				element.style.width = `${100 - scale}%`;

				let mvHeight = document.querySelector(".mv").offsetHeight;
				if (scrollPosition > mvHeight) {
					element.style.width = "100%";
				}

			});
			
		
		} 
		// else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
		//     console.log("タブレットサイズ");
		//     // タブレット用の処理
		// } 

		else {
			console.log("デスクトップサイズ");
			// デスクトップ用の処理



			///////////////////////////////////
			///////背景でやってるやつ///////////
			///////////////////////////////////

			// 背景画像の拡大
			// document.querySelector(".mv").style.backgroundSize = `${100 * scale}%`;

			// // .mvの高さを取得
			// let mvHeight = document.querySelector(".mv").offsetHeight;
			
			// // .mvが画面外に出たら拡大率を1に戻す
			// if (scrollPosition > mvHeight) {
			// 	document.querySelector(".mv").style.backgroundSize = "100%";
			// }

			///////////////////////////////////
			///////////////////////////////////
			///////////////////////////////////
	
			elements.forEach(function(element) {
				element.style.width = `${100/3 + scale}%`;

				let mvHeight = document.querySelector(".mv").offsetHeight;
				if (scrollPosition > mvHeight) {
					element.style.width = "33%";
				}

			});
			
			
			


			// 背景画像の拡大
			// document.querySelectorAll(".mv-bg").style.width = `${100 * scale}%`;

			// // .mvの高さを取得
			// let mvHeight = document.querySelector(".mv").offsetHeight;
			
			// // .mvが画面外に出たら拡大率を1に戻す
			// if (scrollPosition > mvHeight) {
			// 	document.querySelector(".mv").style.backgroundSize = "100%";
			// }

			


		}
	}


	window.addEventListener("resize", checkScreenSize);
	checkScreenSize();


});

let lastScrollTop = 0;
const header = document.getElementById('header');
// ヘッダーの高さを取得
let headerHeight = header.offsetHeight;
const scrollThreshold = 520; // ユーザーが下に50px以上スクロールした場合にヘッダーを隠す

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop > scrollThreshold) {
        // 下にスクロールしているときはヘッダーを隠す
        // header.style.top = `-${headerHeight}px`;
		header.classList.add('js-visible');
    } else {
        // 上にスクロールしているときはヘッダーを表示する
        // header.style.top = '0';
		header.classList.remove('js-visible');
    }
    lastScrollTop = scrollTop;
});



const nav = document.getElementById('nav');
const navbarToggle = document.querySelector('.navbar-toggle');
// const modal = document.querySelector('.modal');
// const navMenu = document.querySelector('.header-list');


navbarToggle.addEventListener('click', function() {
    // navMenu.classList.toggle('js-active');
    navbarToggle.classList.toggle('js-active');
	nav.classList.toggle('js-active');
	// modal.classList.toggle('js-active');
    document.body.classList.toggle('js-active');

});


// let lastScrollTop = 0;
// const header = document.getElementById('header');
// // ヘッダーの高さを取得
// let headerHeight = header.offsetHeight;
// const scrollThreshold = 200; // ユーザーが下に50px以上スクロールした場合にヘッダーを隠す

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
//         // 下にスクロールしているときはヘッダーを隠す
//         // header.style.top = `-${headerHeight}px`;
// 		header.classList.add('js-hidden');
//     } else {
//         // 上にスクロールしているときはヘッダーを表示する
//         // header.style.top = '0';
// 		header.classList.remove('js-hidden');
//     }
//     lastScrollTop = scrollTop;
// });



let wHeight = window.innerHeight;
window.addEventListener('scroll', function() {
	let wScroll = window.scrollY;

	let elements = document.querySelectorAll('.js-trigger');
	
	elements.forEach(function(element) {
		let position = element.getBoundingClientRect().top + wScroll;
		
		if (wScroll > position - wHeight * 5/6) {
			element.classList.add('js-show');
            // console.log('ok')
		} else if (wScroll <= position - wHeight) {
			element.classList.remove('js-show');
		}
	});
});






// let wHeight = window.innerHeight;



window.addEventListener('scroll', function() {
	let wScroll = window.scrollY;

	// let elements = document.querySelectorAll('.on-scroll');
	let show = document.querySelector('.side-show');
	let hidden = document.querySelector('.side-hidden');
	

	
	// elements.forEach(function(element) {
		let showPosition = show.getBoundingClientRect().top + wScroll;
		let hiddenPosition = hidden.getBoundingClientRect().top + wScroll;
		
		
		if (wScroll > showPosition - wHeight) {
			document.querySelector('.sidebar').classList.add('js-show');
            // console.log('ok')
		} else if (wScroll <= showPosition - wHeight || wScroll) {
			document.querySelector('.sidebar').classList.remove('js-show');
		}

		if (wScroll > hiddenPosition - wHeight) {
			document.querySelector('.sidebar').classList.remove('js-show');
            // console.log('ok')
		}
	});

window.addEventListener('scroll', function() {
	let wScroll = window.scrollY;

	// let elements = document.querySelectorAll('.on-scroll');
	let show = document.querySelector('.bg-show');
	let hidden = document.querySelector('.bg-hidden');
	

	
	// elements.forEach(function(element) {
		let showPosition = show.getBoundingClientRect().top + wScroll;
		let hiddenPosition = hidden.getBoundingClientRect().top + wScroll;
		
		
		if (wScroll > showPosition - wHeight) {
			document.querySelector('.bg').classList.add('js-show');
            // console.log('ok')
		} else if (wScroll <= showPosition - wHeight || wScroll) {
			document.querySelector('.bg').classList.remove('js-show');
		}

		if (wScroll > hiddenPosition - wHeight) {
			document.querySelector('.bg').classList.remove('js-show');
            // console.log('ok')
		}
	});
// });


// window.addEventListener('scroll', function() {
// 	let wScroll = window.scrollY;

// 	let on = document.querySelectorAll('.on-scroll');
// 	let out = document.querySelectorAll('.out-scroll');


	
// 	// elements.forEach(function(element) {
// 		let onPosition = on.getBoundingClientRect().top + wScroll;
// 		// let outPosition = out.getBoundingClientRect().top + wScroll;

		
// 		if (wScroll > onPosition - wHeight) {
// 			document.querySelector('.bg').classList.add('js-show');
//             // console.log('ok')
			
// 		} else if (wScroll <= onPosition - wHeight || wScroll) {
// 			document.querySelector('.bg').classList.remove('js-show');
// 		}
// 		// if (wScroll > outPosition - wHeight) {
// 		// 	document.querySelector('.bg').classList.remove('js-show');
// 		// }
// 	});
// });

