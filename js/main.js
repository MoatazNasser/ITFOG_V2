

 




// start loading page
window.onload = function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
};
// nav close btn
$(document).ready(function(){
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
  });
});


// space from Top
let headerOffset = $('#header').offset().top;
let applicationOffset = $('#application').offset().top;


let navColor = $('.navContainer').select(function () { 
  
});

//nav show and hide , arrow Btn
$(window).scroll(function(){
  //show arrowup
    if($(window).scrollTop() > applicationOffset+5){
      $(".arrowUpi").fadeIn(500);
    }
    else{
      $(".arrowUpi").fadeOut(500);
    }
})

//arrow Btn
$(".arrowUp").click(function(){
  $('body,html').animate({scrollTop: 0})
})


//nav show and hide
$(document).ready(function () {
  let headerHeight = $('#header').outerHeight(); 
  let applicationOffset = $('#application').offset().top;
  let hideTimer; // متغير لتخزين التايمر

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > applicationOffset) {
      // بعد الدخول للقسم الأول
      $('.navContainer').css({
        'background-color': 'rgba(47,1,1,0.7)',
        'opacity': '1'
      });

      $(".navContainer").off("mouseenter mouseleave");

      $(".navContainer").mouseenter(function () {
        clearTimeout(hideTimer); // امسح أي تايمر سابق
        $(this).css({"opacity": "1"});
      }).mouseleave(function () {
        $(this).css({"opacity": "0"});
      });

      // لو ما وقفش عليه خلال ثانية يختفي تلقائيًا
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        $('.navContainer').css({"opacity": "0"});
      }, 1000);

    } else if (scrollTop > headerHeight) {
      // بعد الهيدر لكن قبل القسم الأول
      $('.navContainer').css({
        'background-color': 'transparent',
        'opacity': '1'
      });

      $(".navContainer").off("mouseenter mouseleave");

      $(".navContainer").mouseenter(function () {
        clearTimeout(hideTimer);
        $(this).css({"opacity": "1"});
      }).mouseleave(function () {
        $(this).css({"opacity": "0"});
      });

      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        $('.navContainer').css({"opacity": "0"});
      }, 1000);

    } else {
      // في أعلى الصفحة داخل الهيدر
      $('.navContainer').css({
        'background-color': 'transparent',
        'opacity': '1'
      });

      $(".navContainer").off("mouseenter mouseleave");
      clearTimeout(hideTimer); // امسح أي تايمر
    }
  });
});




// test parallax
// حدد الصور التي تريد تطبيق البارالاكس عليها


var image = document.getElementsByClassName('thumbnail');

new simpleParallax(image, {
    orientation: 'right'
});

//counterCode
const counters = document.querySelectorAll('.counter');

    function runCounter(counter) {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const step = target / 100; // سرعة العد

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target + "%";
          clearInterval(interval);
        } else {
          counter.textContent = Math.floor(current) + "%";
        }
      }, 20); // سرعة التحديث
    }

    const section = document.querySelector('.stats-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => runCounter(counter));
        } else {
          counters.forEach(counter => counter.textContent = "0%");
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);



// app Img small screen hide and show
$(document).ready(function() {
      // var for app section  3 taps 
      var $div_1 = $('.appImgContainerSm_1');
      var $div_2 = $('.appImgContainerSm_2');
      var $div_3 = $('.appImgContainerSm_3');
      var $div_4 = $('.appImgContainerLg_1');
      var $div_5 = $('.appImgContainerLg_2');
      var $div_6 = $('.appImgContainerLg_3');
      //var for Modal Products presentation
      var ProImgSm = $('.productModalImgSm');
      var ProImgLG = $('.productModalImgLG');
      // fun fo app section
      function checkWidth_1() {
        if ($(window).width() < 752) {
          if (!$div_1.hasClass('mobile-active')) {
            $div_1.addClass('mobile-active');
            $div_4.addClass('mobile-Deactive');
          }
        } else {
          if ($div_1.hasClass('mobile-active')) {
            $div_1.removeClass('mobile-active');
            $div_4.removeClass('mobile-Deactive');
          }
        }
      }

      function checkWidth_2() {
        if ($(window).width() < 752) {
          if (!$div_2.hasClass('mobile-active')) {
            $div_2.addClass('mobile-active');
            $div_5.addClass('mobile-Deactive');
          }
        } else {
          if ($div_2.hasClass('mobile-active')) {
            $div_2.removeClass('mobile-active');
            $div_5.removeClass('mobile-Deactive');
          }
        }
      }

      function checkWidth_3() {
        if ($(window).width() < 752) {
          if (!$div_3.hasClass('mobile-active')) {
            $div_3.addClass('mobile-active');
            $div_6.addClass('mobile-Deactive');
          }
        } else {
          if ($div_3.hasClass('mobile-active')) {
            $div_3.removeClass('mobile-active');
            $div_6.removeClass('mobile-Deactive');
          }
        }
      }
      // fun fo products section
      function checkWidth_4() {
        if ($(window).width() < 752) {
          if (!ProImgSm.hasClass('mobile-active')) {
            ProImgSm.addClass('mobile-active');
            ProImgLG.addClass('mobile-Deactive');
            console.log("here1")
          }
        } else {
          if (ProImgSm.hasClass('mobile-active')) {
            ProImgSm.removeClass('mobile-active');
            ProImgLG.removeClass('mobile-Deactive');
            console.log("here2")
          }
        }
      }



      // استدعاء عند تغيير حجم الشاشة
      $(window).on('resize', checkWidth_1);
      $(window).on('resize', checkWidth_2);
      $(window).on('resize', checkWidth_3);
      // $(window).on('resize', checkWidth_4);

      // استدعاء أولي
      checkWidth_1();
      checkWidth_2();
      checkWidth_3();
      checkWidth_4();
    });    

// type.js
var typed = new Typed('#elementTypeJs', {
      strings: ['"delivering innovative solutions for modern fire safety challenges."',
         '"providing fast, precise, and safe fire protection with minimal water damage."',
        '"ensuring maximum protection with minimal environmental impact."',
        '"combining advanced engineering with reliable fire suppression results."',
        '"setting new standards in fire safety efficiency and sustainability."'],
      typeSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',

    });

// App Data functions

// دالة مستقلة لتصفير وتشغيل العدادات
function resetAndRunCounters() {
  $('.counter').each(function() {
    $(this).text("0%");   // تصفير العداد
    runCounter(this);     // تشغيل الحركة من جديد
  });
}

// clicked tap
$(document).on("click", function(e) {
  let appClickedTap = $(e.target).text();
  let selectedItemTunnels = $(".appTaps1");
  let selectedItemBuildings = $(".appTaps2");
  let selectedItemIndustry = $(".appTaps3");
  let slide_1 = $(".appSlide1");
  let slide_2 = $(".appSlide2");
  let slide_3 = $(".appSlide3");
  // console.log( appClickedTap);
  if (appClickedTap == 'Tunnels')
  {

    if (!selectedItemTunnels.hasClass('appTapsActive'))
      {
          selectedItemTunnels.addClass('appTapsActive');
          slide_1.removeClass('slideDeactive');
          slide_1.addClass('slideActive');
          selectedItemBuildings.removeClass('appTapsActive');
          slide_2.addClass('slideDeactive');
          slide_2.removeClass('slideActive');
          selectedItemIndustry.removeClass('appTapsActive');
          slide_3.addClass('slideDeactive');
          slide_3.removeClass('slideActive');
          resetAndRunCounters();
      }
      

  } else if (appClickedTap == 'Buildings') {
      if (!selectedItemBuildings.hasClass('appTapsActive'))
      {
          selectedItemBuildings.addClass('appTapsActive');
          slide_2.removeClass('slideDeactive');
          slide_2.addClass('slideActive');
          selectedItemTunnels.removeClass('appTapsActive');
          slide_1.addClass('slideDeactive');
          slide_1.removeClass('slideActive');
          selectedItemIndustry.removeClass('appTapsActive');
          slide_3.addClass('slideDeactive');
          slide_3.removeClass('slideActive');
          resetAndRunCounters();
      }
      
  }
  else if (appClickedTap == 'Industry') {
      if (!selectedItemIndustry.hasClass('appTapsActive'))
      {
          selectedItemIndustry.addClass('appTapsActive');
          slide_3.removeClass('slideDeactive');
          slide_3.addClass('slideActive');
          selectedItemTunnels.removeClass('appTapsActive');
          slide_1.addClass('slideDeactive');
          slide_1.removeClass('slideActive');
          selectedItemBuildings.removeClass('appTapsActive');
          slide_2.addClass('slideDeactive');
          slide_2.removeClass('slideActive');
          resetAndRunCounters();
      }
      
  }
});

//Tec Data function 

//change triangel images 
$(document).ready(function(){
    // مصفوفة الصور
    var images = ["images/triangle-1.jpg", "images/triangle-2.jpg"];
    var index = 0;

    function changeImage(){
        // إخفاء الصورة بتأثير fadeOut
        $("#triangle").fadeOut(500, function(){
            // تغيير الـ src بعد الاختفاء
            index = (index + 1) % images.length;
            $(this).attr("src", images[index]);
            // إظهار الصورة بتأثير fadeIn
            $(this).fadeIn(500);
        });
    }

    // استدعاء الدالة كل ثانية
    setInterval(changeImage, 5000);
});


//Products Section code 
$(document).ready(function() {
            // ---------- Product data (all in English) ----------
            const products = [
                {
                    id: 1,
                    name: "High-Pressure Water Mist Nozzles",
                    price: "$",
                    short_Description:"Our extensive nozzle range made of high-quality stainless steel ...",
                    description: "Our extensive nozzle range made of high-quality stainless steel is flexible and can be adapted to various fire loads. It provides reliable fire protection at installation heights ranging from 0.35 m to 18 m and ensures the highest safety in any environment.",
                    image: "images/p_1.jpg",
                    glb_3d_models:"P1.glb",
                },
                {
                    id: 2,
                    name: "Valve Units",
                    price: "$",
                    short_Description:"Our valve units, consisting of alarm valves and area valves, ...",
                    description: "Our valve units, consisting of alarm valves and area valves, are available as compact seat valves or as maintenance-friendly, motor-operated ball valves. This design enables easy and regular functional testing, particularly in critical applications, ensuring the highest operational safety.",
                    image: "images/p_2.jpg",
                    glb_3d_models:"P2.glb",
                },
                {
                    id: 3,
                    name: "Power Packs",
                    price: "$",
                    short_Description:"Our power packs provide flexible supply solutions for different requirements, ...",
                    description: "Our power packs provide flexible supply solutions for different requirements. From complete units with tank and control cabinet to compact assemblies for tight spaces – available with electric, diesel, or compressed nitrogen drive. The Rail Power Pack GPP impresses with its gas-operated design, frost protection options, and easy maintenance in the installed state. The Rail Power Pack EPP, electrically operated, is ideal for applications with stable power supply and enables quick refilling after activation without pressure vessels.",
                    image: "images/p_3.jpg",
                    glb_3d_models:"P3.glb",
                },
                {
                    id: 4,
                    name: "Container Solutions",
                    price: "$",
                    short_Description:"Container solutions offer the advantage that all technology – from the tank and valve units ...",
                    description: "Container solutions offer the advantage that all technology – from the tank and valve units to the control system – is compactly and pre-installed in a protected space. This creates a plug-and-play solution that significantly simplifies and accelerates installation and commissioning. Additionally, the containers can be flexibly and custom-made to meet climatic or design requirements.",
                    image: "images/p_4.jpg",
                    glb_3d_models:"P4.glb",
                },
                {
                    id: 5,
                    name: "Water Mist Gun",
                    price: "$",
                    short_Description:"The innovative and water-saving AQUASYS Water Mist Gun offers an ...",
                    description: "The innovative and water-saving AQUASYS Water Mist Gun offers an effective solution for manual fire fighting and is often integrated into wall hydrants. It provides an ideal alternative to conventional low-pressure systems and has already proven successful in numerous applications in buildings and industry.",
                    image: "images/p_5.jpg",
                    glb_3d_models:"P5.glb",
                },
                {
                    id: 6,
                    name: "High-Pressure Stainless Steel Pipe",
                    price: "$",
                    short_Description:"Our stainless steel piping and connection systems offer outstanding corrosion resistance ...",
                    description: "Our stainless steel piping and connection systems offer outstanding corrosion resistance and durability. These properties not only reduce maintenance costs, but also increase the reliability of our systems. Stainless steel is hygienic and resistant to chemical influences and harsh environmental conditions - ideal for use in sensitive areas such as the food industry and laboratories. With our stainless steel solutions, we guarantee reliable and low-maintenance technology that has been specially developed for demanding and hygienically critical applications.",
                    image: "images/p_6.jpg",
                    glb_3d_models:"P6.glb",
                },
                {
                    id: 7,
                    name: "Any Product",
                    price: "$",
                    short_Description:"Add here any product ...",
                    description: "Add here any product, lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
                    image: "images/p_7.jpg",
                    glb_3d_models:"https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
                }
            ];

            // ---------- Render products (each takes 4 columns -> 3 per row) ----------
            const $row = $('#product-row');
let productsHTML = '';

products.forEach(product => {
    productsHTML += `
        <div class="col-lg-4 col-md-4 col-sm-6 mb-4 d-flex">
            <div class="product-card w-100 d-flex justify-content-center">
                <div class="productImgContainer">
                    <div class="overlayProductImg"></div>
                    <i class="overlayProductIcon fa-solid fa-magnifying-glass fa-3x fa-beat"></i>
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                </div>
                <div class="productDataCardContainer">
                    <h3 class="product-title text-center">${product.name}</h3>
                    <div class="product-shortDesc text-center">${product.short_Description}</div>
                </div>    
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn-detail view-detail"
                        data-name="${product.name}"
                        data-short_Description="${product.short_Description}"
                        data-description="${product.description}"
                        data-glb_3d_models="${product.glb_3d_models}"
                        data-image="${product.image}">
                        <div class="d-flex justify-content-between align-items-center">
                            <img class="view-detail-Img_Logo" src="images/circles_white.png" alt="">
                            <div class=""> View Details</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;
});
$row.html(productsHTML);

// ---------- Handle detail button click -> fill and show modal ----------
$row.on('click', '.view-detail', function() {
    const $btn = $(this);

    // read data from button
    const name = $btn.data('name');
    const short_Description = $btn.data('short_Description');
    const description = $btn.data('description');
    const image = $btn.data('image');
    const glb = $btn.data('glb_3d_models');

    // update modal title
    $('#productModal .modal-title').text(name);

    // update modal body
    // to get the right glb modal-viewer drag here then copy the text 
    // https://modelviewer.dev/editor/
    $('#modalBodyContent').html(`
        <div class="text-center container-fluid">
            <div class="productModalContainer row g-0 bg- warning d-flex justify-content-center">
                <div class="productModalImgSm col-12" style="background-image: url('${image}');"></div>
                <div class="productModalImgLG col-md-6 d-flex align-items-center justify-content-center bg- danger" style="background-image: url('${image}');"></div>
                <div class="col-md-6 bg- warning">
                    <div class="model-container" id="modelContainer">
                        <div class="loading-overlay" id="loadingOverlay">
                            <div class="loading-content">
                                <div class="spinner"></div>
                                <div class="loading-text">Loading 3d Model ...</div>
                            </div>
                        </div>
                        
                        
                        <model-viewer src="${glb}" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1"> </model-viewer>


                        
                        
                    </div>
                </div>
            </div>
        </div>
        <!--<div id="resetAllBtn" class="text-center container-fluid">
            <div class="productModalreset3d row p-2 my-2 g-0 bg- warning d-flex justify-content-center">
                <span><i class="fa-solid fa-arrow-rotate-right fa-spin"></i> Reset 3d Model Position</span>
            </div> -->
        </div>
        <div class="text-center container-fluid">
            <div class="productModalText row p-3 my-2 g-0 bg- warning d-flex justify-content-center">
                <h4 class="mt-1 text-center">${name}</h4>
                <p class="lead">${description}</p>
            </div>
        </div>
    `);

    // show the modal
    $('#productModal').modal('show');
});
// // 3d Model Show start
// ---------- Bind modal events once ----------
$('#productModal').on('shown.bs.modal', function () {
    let isAutoRotating = true;
    const modelViewer = document.querySelector('#model3d');
    const modelContainer = document.querySelector('#modelContainer');
    const rotateBtn = document.querySelector('#rotateBtn');
    const loadingOverlay = document.querySelector('#loadingOverlay');
    setTimeout(() => {
                loadingOverlay.classList.add('hidden');
            }, 500);
    if (modelViewer) {
        modelViewer.addEventListener('load', function() {
            console.log('Model Loading done!');
            // setTimeout(() => {
            //     loadingOverlay.classList.add('hidden');
            // }, 500);
        });

        modelViewer.addEventListener('error', function(event) {
            console.error('Error in loading', event);
            loadingOverlay.innerHTML = '<div class="loading-content"><div class="loading-text" style="color: #e74c3c;">Error While Loading...</div></div>';
        });
    }

    const resetBtn = document.querySelector('#resetAllBtn');
    if (resetBtn && modelViewer) {
        resetBtn.addEventListener('click', function() {
            console.log("Resetting model...");
            modelViewer.cameraOrbit = "0deg 75deg 105%";
            modelViewer.fieldOfView = "30deg";
            modelViewer.autoRotate = true;
            modelViewer.resetTurntableRotation();
            if (rotateBtn) rotateBtn.textContent = '🔄 Auto Rotate';
        });
    }
});
        });

// // 3d Model Show end


// ------ News Section ------------
// owl trig out side news 
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//      items:4,
//     loop:true,
//     margin:10,
//     autoplay:false,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     center: true,
//     // nav:true,
//     dots: true,
//     responsive:{
//         0:{
//             items:1,
//             dots: true,
//         },
//         480:{
//             items:1,
//             dots: true,
//         },
//         768:{
//             items:2,
//             dots: true,
//         },
//         1000:{
//             items:4,
//             dots: true,
//         }}
//   });
    
// });


$(document).ready(function() {
            // ---------- news data (all in English) ----------
            const news = [
                {
                    id: 1,
                    title: "AQUASYS high pressure water mist protects police station",
                    article_date: "18.10.2025",
                    short_article:"Innovation meets architectural heritage preservation: One of the world's oldest police station – located in Great Britain – has been undergoing extensive renovation since January 2025 and is being equipped with state-of-the-art fire protection technology from AQUASYS. In cooperation with the local partner, an innovative high pressure water mist system is being used that preserves the historic character of the building while meeting the highest safety requirements.",
                    article: "Innovation meets architectural heritage preservation: One of the world's oldest police station – located in Great Britain – has been undergoing extensive renovation since January 2025 and is being equipped with state-of-the-art fire protection technology from AQUASYS. In cooperation with the local partner, an innovative high pressure water mist system is being used that preserves the historic character of the building while meeting the highest safety requirements. <br>The challenge of historic buildings<br>The protected site places high demands on the technology: the fire protection solution must not only cover hard-to-reach cavities and technical installations, but also must not impair the historic fabric of the building. Specially developed nozzle types are therefore used: DKF35 for standard rooms and DKF34 for areas with ceiling heights of more than four metres – for maximum efficiency with minimum intervention.<br>Innovative tests for demanding conditions<br>A key issue was the interaction between water mist and ventilation systems. According to the standard (BS 8489-1), ventilation systems should be switched off in the case of fire so as not to interfere with the effectiveness of the water mist. However, this is not possible at the police station – here, the ventilation must remain active even in an emergency in order to comply with the regulations for office (Ordinary Hazard 1) and technical rooms (OH3).<br>AQUASYS therefore developed a special test program in collaboration with the local partner. A real room with variable ventilation systems was recreated in the company's own demonstration room. Various air flow speeds (0.33 m³/s and 0.67 m³/s) were investigated in order to simulate the effect on the distribution of the water mist in a realistic manner.<br>New standards for fire protection in historic buildings<br>The results of the tests prove that even with active ventilation, the high pressure water mist system meets all requirements – without compromising protection or interfering with the historic fabric. The project thus impressively demonstrates how state-of-the-art safety technology and monument protection can be successfully combined.",
                    image: "images/news_1.jpg",
                },
                {
                    id: 2,
                    title: `High pressure water mist protects the "Glacier 3000" Mountain station at 3000 m in the swiss alps`,
                    article_date: "5.5.2025",
                    short_article:"A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.",
                    article: "<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_2.jpg",
                },{
                    id: 3,
                    title: "AQUASYS launches new website",
                    article_date: "21.1.2025",
                    short_article:`AQUASYS presents the newly designed website www.aquasys.at.Visitors can expect a modern, clearly structured design that makes it easier to simplifies access to the innovative solutions and services offered by AQUASYS.`,
                    article: "<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_3.jpg",
                },{
                    id: 4,
                    title: "AQUASYS protects the Grand Egyptian Museum: High-pressure water mist preserves millennia-old cultural heritage",
                    article_date: "27.11.2024",
                    short_article:"In a significant partnership between tradition and modernity, the Grand Egyptian Museum relies on AQUASYS' innovative technology to protect one of the world's most precious artifacts. The Khufu Ship, an artifact of inestimable cultural value, is now being protected by innovative technology: High Pressure Water Mist from AQUASYS.",
                    article: "<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_4.jpg",
                },{
                    id: 5,
                    title: `The new TRVB 146 S: opportunities and challenges from the manufacturer's perspectiveThe Austrian magazine for pre`,
                    article_date: "25.11.2024",
                    short_article:`The Austrian magazine for preventive fire protection “BRANDverhütung” has published an interesting report on the new TRVB 146 S together with our sales manager Mr. Michael Bindreiter. You can read it here`,
                    article:"<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_5.jpg",
                },{
                    id: 6,
                    title: "AQUASYS supplies innovative firefighting system for the Koralm Tunnel",
                    article_date: "1.10.2024",
                    short_article:`With a total length of 32.8 kilometers, the Koralm Tunnel is the longest railroad tunnel in Austria and is a section of the pan-European railroad network. As a central section of the double-track high-performance line “Koralmbahn Graz-Klagenfurt”, the tunnel connects Styria with Carinthia. The AQUASYS high-pressure water mist system was installed to ensure the safety of the tunnel in the event of a fire.`,
                    article:"<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_6.jpg",
                },{
                    id: 7,
                    title: "AQUASYS in the Australian outback: fire tests to protect an aircraft hangar",
                    article_date: "29.8.2024",
                    short_article:`An Australian company is conducting a research project to investigate the effectiveness of new innovative extinguishing systems for aircraft fires in hangars. The aim is to replace the existing gas and foam extinguishing systems. As part of this project, AQAUSYS carried out fire tests in an aircraft hangar provided by the company.`,
                    article:"<br>A special example of the importance of fire protection in buildings can be seen in the case of the Glacier 3000. After a devastating fire that destroyed the restaurant, but fortunately caused no personal injury, it was time for the rebuilding. Workers had to dismantle the steel structure that had survived the flames under the most difficult conditions and clear the way for something new.<br>A new building was created with the famous Swiss architect: Mario Botta.<br>On the night of September 18 to 19, 2022, the Glacier 3000 mountain restaurant was destroyed by flames. Since then, the fire alarm system has been revised and the reconstruction work has been in full progress. The aim was to create a highly efficient building with a focus not only on energy but also on fire protection.<br>With high pressure water mist from AQUASYS, the building can be protected while taking up as little space as possible. There is certainly not much room for large plant rooms at 3000 m. Other systems, such as sprinkler systems, require a much larger water supply than high pressure water mist systems. This is why water-saving water mist was chosen for fire protection.<br>This also keeps damage to a minimum in the case of fire, as it can be sprayed efficiently with little water, preventing the fire from spreading and ensuring that operations can be restored quickly in the event of a fire.<br>This protects the common areas, restaurant, kitchen and cable car technology in the impressive building. In this way, downtime can be avoided, especially in the tourism industry, where the suspension of a season means enormous damage for the operators.<br>Assembly at great heights was also a challenge. The view of the surrounding glaciers, such as Mont Blanc and the Matterhorn, has been a reward for the hard-working colleagues on site. The materials were transported via the existing cable car, which usually takes tourists to the impressive area, pipes, pumps and much more were transported. <br>Together with our skilled partner D.E.S. Systèmes de Sécurité S.A., AQUASYS were able to realize the project to everyone's complete satisfaction. The cooperation with D.E.S. and the local representation by the partner are the keys to the success of the project.<br>An impressive project for everyone involved. All facilities were put back into operation and the Glacier 3000 shines in new brilliance.",
                    image: "images/news_7.jpg",
                },
            ];

            // ---------- Render news carousel  ----------
            const $newsrow = $('#news-row');

      let newsHTML = '';
      let newsHTMLPart1 = '';

      news.forEach(newItem => {
          newsHTMLPart1 += `
              <div class="owl-item">
                                  <div class="newsDataContainer">
                                      <button class="buttonOverlay"
                                      data-title="${newItem.title}"
                                      data-article_date="${newItem.article_date}"
                                      data-short_article="${newItem.short_article}"
                                      data-article="${newItem.article}"
                                      data-image="${newItem.image}">

                                      </button>
                                      <div class="newsOverlayReadMore d-flex align-items-end justify-content-center">
                                          <span class="pb-5"><i class="fa-solid fa-book-open fa-bounce"></i> Read more ...</span>
                                      </div>
                                      <div class="newsOverlayTitle">
                                          <h2>${newItem.title}</h2>
                                          
                                      </div>
                                      <div class="newsOverlayPragh">
                                          <p>${newItem.article_date}</p>
                                          <p>${newItem.short_article}</p>
                                      </div>
                                      <img class="w-100" src="${newItem.image}" alt="" srcset="">
                                  </div>
              </div>
          `;
      });
      newsHTML =`<div class="owl-carousel owl-theme owl-loaded">
                      <div class="owl-stage-outer">
                          <div class="owl-stage">
                              ${newsHTMLPart1}
                          </div>
                      </div>
                  </div>

      `
      $newsrow.html(newsHTML);

      // loading Carousel after data injec. 
      $(".owl-carousel").owlCarousel({
          items:4,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          center: true,
          // nav:true,
          dots: true,
          responsive:{
              0:{
                  items:1,
                  dots: true,
              },
              480:{
                  items:1,
                  dots: true,
              },
              768:{
                  items:2,
                  dots: true,
              },
              1000:{
                  items:4,
                  dots: true,
              }}
        });

      // ---------- Handle detail button click -> fill and show modal ----------
      $newsrow.on('click', '.buttonOverlay', function() {
          const $newsBtn = $(this);

          // read data from button
          const title = $newsBtn.data('title');
          const short_article = $newsBtn.data('short_article');
          const article = $newsBtn.data('article');
          const newsimage = $newsBtn.data('image');
          const newsDate = $newsBtn.data('article_date');


          // update modal title
          $('#newsModal .modal-title').text(title);

          // update modal body
          $('#newsModalBodyContent').html(`
              <div class="d-flex justify-content-center contai ner-fluid ">
                  <div class="productModalContainer w-50 bg- warning d-flex justify-content-center">
                      <div class="w-100 ">
                          <img class="" src="${newsimage}" alt="">
                      </div>
                  </div>
              </div>
              <div class="text-center container-fluid">
                  <div class="productModalText row p-3 my-2 g-0 bg- warning d-flex justify-content-center">
                      <h4 class="m-1 pb-2 text-center">${title} </h4>
                      <p class="py-1 mb-0">${newsDate}</p>
                      <p class="lead">${article}</p>
                  </div>
              </div>
          `);

          // show the modal
          $('#newsModal').modal('show');
      });
      });




// ---------this part destrois modal for Products and News i don't know why!!---- */

    //   // دالة مراقبة عامة
    // function createObserver(sectionId) {
    //   const section = document.getElementById(sectionId);
    //   const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         section.classList.add("showSec");
    //       } else {
    //         section.classList.remove("showSec"); // لإعادة الحركة عند الرجوع
    //       }
    //     });
    //   }, { threshold: 0.2 });
    //   observer.observe(section);
    // }

    // // استدعاء الدوال لكل سيكشن
    // createObserver("application");
    // createObserver("technology");
    // createObserver("products");
    // createObserver("aboutUs");
    // createObserver("news");
    // createObserver("contactUs");


//      // default 3dmodel modal viewer
// <model-viewer 
//                             id="model3d"
//                             src="${glb}"
//                             alt="3d Model"
//                             ar-modes="webxr scene-viewer quick-look"
//                             environment-image="neutral"
//                             auto-rotate
//                             camera-controls
//                             interaction-prompt="none"
//                             shadow-intensity="1"
//                             exposure="1"
//                             shadow-softness="1"
//                             min-camera-orbit="auto auto 5%"
//                             max-camera-orbit="auto auto 200%"
//                             camera-orbit="0deg 75deg 105%"
//                             field-of-view="30deg"
//                             style="width: 100%; height: 100%;">
//                         </model-viewer>

// to get the right glb modal-viewer drag here then copy the text 
// https://modelviewer.dev/editor/
