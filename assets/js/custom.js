/*
=========================================
|                                       |
|           Scroll To Top               |
|                                       |
=========================================

*/

$('.light-dark-mode-btn').on('click', function() {
  if($(this).find('i').hasClass('bi-brightness-high')) {
    $(this).find('i').removeClass('bi-brightness-high');
    $(this).find('i').addClass('bi-moon');
  } else {
    $(this).find('i').addClass('bi-brightness-high');
    $(this).find('i').removeClass('bi-moon');
  }
  if($('body').hasClass('light-mode')) {
    $('body').removeClass('light-mode');
  } else {
    $('body').addClass('light-mode');
  }
});

if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector(".js-toggle-fullscreen-btn");

	const styleEl = document.createElement("link");
	styleEl.setAttribute("rel", "stylesheet");
	styleEl.setAttribute("href", "https://codepen.io/tiggr/pen/poJoLyW.css");
	styleEl.addEventListener("load", function () {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);

	toggleBtn.addEventListener("click", function () {
		if (document.fullscreen) {
			document.exitFullscreen();
		} else if (document.webkitFullscreenElement) {
			document.webkitCancelFullScreen();
		} else if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});

	document.addEventListener("fullscreenchange", handleFullscreen);
	document.addEventListener("webkitfullscreenchange", handleFullscreen);

	function handleFullscreen() {
		if (document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add("on");
			toggleBtn.setAttribute("aria-label", "Exit fullscreen mode");
		} else {
			toggleBtn.classList.remove("on");
			toggleBtn.setAttribute("aria-label", "Enter fullscreen mode");
		}
	}
}


$('.scrollTop').click(function() {
    $("html, body").animate({scrollTop: 0});
});


$('.navbar .dropdown.notification-dropdown > .dropdown-menu, .navbar .dropdown.message-dropdown > .dropdown-menu ').click(function(e) {
    e.stopPropagation();
});

/*
=========================================
|                                       |
|       Multi-Check checkbox            |
|                                       |
=========================================
*/

function checkall(clickchk, relChkbox) {

    var checker = $('#' + clickchk);
    var multichk = $('.' + relChkbox);


    checker.click(function () {
        multichk.prop('checked', $(this).prop('checked'));
    });    
}


/*
=========================================
|                                       |
|           MultiCheck                  |
|                                       |
=========================================
*/

/*
    This MultiCheck Function is recommanded for datatable
*/

function multiCheck(tb_var) {
    tb_var.on("change", ".chk-parent", function() {
        var e=$(this).closest("table").find("td:first-child .child-chk"), a=$(this).is(":checked");
        $(e).each(function() {
            a?($(this).prop("checked", !0), $(this).closest("tr").addClass("active")): ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
        })
    }),
    tb_var.on("change", "tbody tr .new-control", function() {
        $(this).parents("tr").toggleClass("active")
    })
}

/*
=========================================
|                                       |
|           MultiCheck                  |
|                                       |
=========================================
*/

function checkall(clickchk, relChkbox) {

    var checker = $('#' + clickchk);
    var multichk = $('.' + relChkbox);


    checker.click(function () {
        multichk.prop('checked', $(this).prop('checked'));
    });    
}

/*
=========================================
|                                       |
|               Tooltips                |
|                                       |
=========================================
*/

$('.bs-tooltip').tooltip();

/*
=========================================
|                                       |
|               Popovers                |
|                                       |
=========================================
*/

$('.bs-popover').popover();


/*
================================================
|                                              |
|               Rounded Tooltip                |
|                                              |
================================================
*/

$('.t-dot').tooltip({
    template: '<div class="tooltip status rounded-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
})


/*
================================================
|            IE VERSION Dector                 |
================================================
*/

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}


/*
================================================
|                    Live Clock                 |
================================================
*/
if($('#clock').length != 0) {
    const clock = document.getElementById("clock");

    var showCurrentTime = () => {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var meridian = "AM";
    
      if (hours >= 12) {
        meridian = "PM";
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
      clock.innerText = clockTime;
    }
    
    var updateClock = () => {
      var time = new Date().getHours();
      showCurrentTime();
    };
    
    updateClock();
    
    var oneSecond = 1000;
    setInterval( updateClock, oneSecond);
}


