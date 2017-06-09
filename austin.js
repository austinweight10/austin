(function() {
    function AW() {

     var once = 1;

      var url = document.URL,
          windowURL = url.substring(0,url.lastIndexOf("/"));

        // main data
        var AWprojectDat = [
                [ //project1 BannerAds
                    "Banner Ads",
                    "From prospecting to retargeting",
                    [
                      [windowURL + "/images/projects/bannerAds/mainImage/mainImage_sma.jpg"],
                      [windowURL + "/images/projects/bannerAds/mainImage/mainImage_med.jpg"],
                      [windowURL + "/images/projects/bannerAds/mainImage/mainImage_lar.jpg"],
                      [windowURL + "/images/projects/bannerAds/mainImage/mainImage_max.jpg"],
                    ],
                    "I headed up the fashion side of Quantcast's clientle and had the pleaseure of working with some of the most renound retailers in the industry. This is a selection of ads that I designed and built for them. There are a number of different styles of ads from prospecting all the way down the funnel to retargeting. All of the ads are designed for performance and evaluated against uplift on a campaign by campaign level.",
                    windowURL + "/images/projects/bannerAds/images/Missguided2-300x250.jpg",
                    windowURL + "/images/projects/bannerAds/images/Matches-Fashion-300x250.png",
                    windowURL + "/images/projects/bannerAds/images/Abercrombi&Fitch-300x250.png",
                    "If it doesn't sell, it isn't creative. - David Ogilvy",
                    windowURL + "/images/projects/bannerAds/images/Quantcast-300x250.png",
                    windowURL + "/images/projects/bannerAds/images/Toast-300x250.png",
                    windowURL + "/images/projects/bannerAds/images/ToysRUs-300x250.png",
                    [
                        [windowURL + "/images/projects/bannerAds/karewnMillen300.mp4"],
                        [windowURL + "/images/projects/bannerAds/feelUnique300.mp4"],
                        [windowURL + "/images/projects/bannerAds/footAsylum300.mp4"],
                        [windowURL + "/images/projects/bannerAds/roman300.mp4"],
                        [windowURL + "/images/projects/bannerAds/moo300.mp4"],
                        [windowURL + "/images/projects/bannerAds/myTheresa300.mp4"],
                        [windowURL + "/images/projects/bannerAds/jigsaw300.mp4"],
                        [windowURL + "/images/projects/bannerAds/warehouse300.mp4"],
                        [windowURL + "/images/projects/bannerAds/jimyChoo300.mp4"],
                    ],
                ],
                [ //project2 End Clothing
                    "End Clothing",
                    "Rebuild redesigned End. Clothing site on Magento 2",
                    windowURL + "/images/projects/endClothing/mainImage.png", // fashion image
                    "In this project we moved the existing End. Clothing site built on magento on to magento 2. We rebuilt it with a fully responcive font-end with progressive web app features along with a seperate styleguide, I also retemplated the whole email system with mjml for transactional emails and marketing and built this into magento core. We extended the saved items for all social sharing and updating of item prefrences within saved items. I also built a customm help desk and added custom blocks for reuse through the site. We built a seperate site for launching unique items built in angular and I built a seperate blog on wordpress.",
                    windowURL + "/images/projects/endClothing/1.png", //home page
                    windowURL + "/images/projects/endClothing/1.png", //home cart
                    windowURL + "/images/projects/endClothing/1.png", //home country select
                    "For eccomerce trust is the most important thing - Jack Ma",
                    windowURL + "/images/projects/endClothing/1.png", // plp
                    windowURL + "/images/projects/endClothing/1.png", // pdp
                    windowURL + "/images/projects/endClothing/1.png", // careers home
                    // windowURL + "/images/projects/endClothing/1.png", // careers listing
                    // windowURL + "/images/projects/endClothing/1.png", // saved items
                    // windowURL + "/images/projects/endClothing/1.png", // saved email
                    // windowURL + "/images/projects/endClothing/1.png", // stores
                    // windowURL + "/images/projects/endClothing/1.png", // store
                    // windowURL + "/images/projects/endClothing/1.png", // home mobile - short page
                    // windowURL + "/images/projects/endClothing/1.png", // plp mobile - short page few items
                    // windowURL + "/images/projects/endClothing/1.png", // pdp mobile - short page
                    // windowURL + "/images/projects/endClothing/1.png", // saved items mobile - short page few items
                    // windowURL + "/images/projects/endClothing/1.png", // launches home
                    // windowURL + "/images/projects/endClothing/1.png", // launches PDP
                    // windowURL + "/images/projects/endClothing/1.png" // the blog home
                    // windowURL + "/images/projects/endClothing/1.png" // the blog article
                    // prehaps buld a seperate js bit for this - like V&A and banner ads
                ],
                [ //project3 Creative Calculator
                    "Creative Calculator",
                    "Combining the design teams knowledge into a calculator",
                    [
                      [windowURL + "/images/projects/creativeCalculator/mainImage_dlk0az/mainImage_dlk0az_c_scale,w_853.png"],
                      [windowURL + "/images/projects/creativeCalculator/mainImage_dlk0az/mainImage_dlk0az_c_scale,w_853.png"],
                      [windowURL + "/images/projects/creativeCalculator/mainImage_dlk0az/mainImage_dlk0az_c_scale,w_1220.png"],
                      [windowURL + "/images/projects/creativeCalculator/mainImage_dlk0az/mainImage_dlk0az_c_scale,w_1500.png"],
                    ],
                    "I lead this project and created a fully functioning ad calculator. The mission was to collect hundreds of ads and analise them using a custom grid and my team then processed this data so that it was valid for use in the calculator. This was to enable anyone to drop an ad into the calaculator and it would tell you the best and worst parts and where it could be imroved. This tock months of analising ads and comparing campaingns based on roi and click perfomance and splitting the results accross the funnel to provid useful insights. I was responsible for designing the grid and building the calculator.",
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator1.jpg",
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator2.jpg",
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator3.jpg",
                    "The real question is not weather machines think but wheather men do. The mystery which surrounds a thinking machine already surrounds a thinking man. - B.F.Skinner", // machines creative qoute
                    "none",  // hand drawn grid
                    "none",  // workings
                    "none"  // grid overlay
                ],
                [ //project4 Man Overboard - Degree show
                    "Man Overboard - Degree show",
                    "Getting into the real world",
                    [
                      [windowURL + "/images/projects/manOverboard/background-1_ksllls/background-1_ksllls_c_scale,w_1183.jpg",],
                      [windowURL + "/images/projects/manOverboard/background-1_ksllls/background-1_ksllls_c_scale,w_1183.jpg",],
                      [windowURL + "/images/projects/manOverboard/background-1_ksllls/background-1_ksllls_c_scale,w_1652.jpg",],
                      [windowURL + "/images/projects/manOverboard/background-1_ksllls/background-1_ksllls_c_scale,w_1920.jpg",],
                    ],
                    "My duties for this project were the design and build of the website. Creating a fully functioning site for all the work and students contributing. This site was used as the hub for the gallery - hosting all the work summaries and details allowing visitors to find out more about projects and used in marketing the exhibition. The website was fully responsive and built through WordPress. The site allowed each student exhibiting to upload images, videos and more of their work along with a description and a site link with contact details. The web design encompassed the nautical, lost at sea theme, a representative of leaving collage to join the industry. I also heavily contributed to the booklet design. The Guide The guide was used as navigation for the exhibition with a map printed in the book’s dust cover. The guide also encompassed student culture and promoted the university discussing lectures and other events that had occurred in during our time there. The Exhibition The exhibition was hosted in Shoreditch with our work displayed across two floors. The exhibition included vinyls and signage on the walls and windows to help visitors navigate.", //moreInfo
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite3.png",
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite1.png",
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite2.png",
                    "sometimes you find out what you are supposed to do by doing the things you are not supposed to do. - Oprah Windfrey",
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_Cover.png",
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_AustinsWork.png",
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_Logopage.png"
                ],
                [ //project5 V&A D&AD Entry
                    "V&A - D&AD Entry",
                    "D&AD can suck it -- jokes",
                    windowURL + "/images/projects/vAndA/mainImage.jpg",
                    "This was my D&AD entry for a project to redisign a hording that was going to be erected around the V&A prior to building their new courtyard and exhibition area. The breif was to promote the V&A. This was situated oposite the natural history museum. The aim of this hording was to get people to interact with the V&A vast collection.",
                    windowURL + "/images/projects/vAndA/w9.jpg",
                    windowURL + "/images/projects/vAndA/w3.jpg",
                    windowURL + "/images/projects/vAndA/w4.jpg",
                    "Every Artist was first an amateur. - Ralph Waldo Emerson",
                    windowURL + "/images/projects/vAndA/w5.jpg",
                    windowURL + "/images/projects/vAndA/w6.jpg",
                    windowURL + "/images/projects/vAndA/w7.jpg",
                    windowURL + "/images/projects/vAndA/VA1.png"
                ],
                [ //project6 Yawp Jewllery
                    "Yawp Jewllery", // title
                    "Ecomerce site built on Wordpress with woocomerce",
                    windowURL + "/images/projects/yawp/mainImage.png", // mainImage background of site or product photo
                    "I designed and built an eccomerce store on wordpress with woocomerce plugin. The idea was that the shopping expericance would would be more encompcing thus you had to move around the environment to find what you liked. I alos wanted the whole expericnce to be contained in one page. Thus the site relied heavily on ajax requests. This site takes advantage of a lot of new css features to make the whole site responcive. This site also managed the transactional emails.", //moreInfo
                    windowURL + "/images/projects/yawp/1.png", // homepage
                    windowURL + "/images/projects/yawp/1.png", // menu
                    windowURL + "/images/projects/yawp/1.png", // product hover
                    "Every piece of jewllery tells a story. - Gem Hunt",
                    windowURL + "/images/projects/yawp/1.png", // pdp
                    windowURL + "/images/projects/yawp/1.png", // cart
                    windowURL + "/images/projects/yawp/1.png" // checkout
                ],
                [ //project7 Quantcast Home From Home
                    "Quantcast Home From Home",
                    "AirBNB for Quantcast employees",
                    windowURL + "/images/projects/homeFromHome/mainImage.png",
                    "An in-house travel website for Quantcast employees to allow them to travel and make money staying with other employees and building company culture across the globe similar to AirBNB. My role in this project was the design and construction of the site along with concepting how the payment and other travel details would be built into the company’s expenses system.",
                    windowURL + "/images/projects/homeFromHome/HomeFromHome.jpg",
                    windowURL + "/images/projects/homeFromHome/HomeFromHome2.jpg",
                    windowURL + "/images/projects/homeFromHome/HomeFromHome3.jpg",
                    "Not all those who wander are lost. - J.R.R. Tolkien",
                    windowURL + "/images/projects/homeFromHome/HomeFromHome4.jpg",
                    windowURL + "/images/projects/homeFromHome/HomeFromHome5.jpg",
                    "none"
                ],
                [ //project7 Match Betting
                    "Match Betting", // title
                    "I love money and so does everyone else",
                    windowURL + "/images/projects/matchBetting/mainImage.png", // add horse racing image
                    "This project started out as a small app for a frind and developed into a fully functioning site taht allows people to save and chech bets against eachother, whilst offering advice based on splitting the bet for lowest posible losses, whille targeting high scoring bets. This app was built in react as this allowd me to update the constantly changing data on the fly. This was built as a Progressive web app and this all data was stored in the cache meaning the app worked offline.",
                    windowURL + "/images/projects/matchBetting/1.png", // landing page
                    windowURL + "/images/projects/matchBetting/1.png", // prev results open
                    windowURL + "/images/projects/matchBetting/1.png", // filled in form
                    "I'm not the betting type. Tony Gross",
                    windowURL + "/images/projects/matchBetting/1.png", // form results
                    "none",
                    "none"
                ],
                [ //project7 Zorokovick Vodka
                    "Zorokovick Vodka",
                    "Ice lollies for summer filled with zorokovick vodka",
                    [
                      [windowURL + "/images/projects/zorokovick/mainImage_qucnme/mainImage_qucnme_c_scale,w_1128.tiff"],
                      [windowURL + "/images/projects/zorokovick/mainImage_qucnme/mainImage_qucnme_c_scale,w_1128.tiff"],
                      [windowURL + "/images/projects/zorokovick/mainImage_qucnme/mainImage_qucnme_c_scale,w_1555.tiff"],
                      [windowURL + "/images/projects/zorokovick/mainImage_qucnme/mainImage_qucnme_c_scale,w_1920.tiff"],
                    ],
                    ,
                    "Promotion for a anew summer time lolly pop that contained. this was a custom site built from scratch and large format promotional images for the event and used through out the site.",
                    windowURL + "/images/projects/zorokovick/landingpage.jpg",
                    windowURL + "/images/projects/zorokovick/home.jpg",
                    windowURL + "/images/projects/zorokovick/1.jpg",
                    "Getting information off the internet is like getting a drink form a fire hydrant. - Mitchel Kapor",
                    windowURL + "/images/projects/zorokovick/film.jpg",
                    windowURL + "/images/projects/zorokovick/cocktailshover.jpg",
                    windowURL + "/images/projects/zorokovick/6.jpg"
                ],
                [ //project7 Micro sites
                    "Micro sites",
                    "Wordpress and micro sites",
                    windowURL + "/images/projects/MicroSites/image.jpg",
                    "This was a custom one page wordpress theme for Executive Organisers, this was their main site for advertising and promoting their services. This site was fully responcive. This site reinforced the brand.",
                    windowURL + "/images/projects/MicroSites/adGallery.jpg",
                    windowURL + "/images/projects/MicroSites/executiveOrganisers.jpg",
                    windowURL + "/images/projects/MicroSites/accountForIt.jpg",
                    "The internet is becoming the town square for the global village of tommorow. - Bill gates",
                    windowURL + "/images/projects/MicroSites/VisionOptique.jpg",
                    windowURL + "/images/projects/MicroSites/vestiaireCollective.jpg", // 8&4
                    windowURL + "/images/projects/MicroSites/royalAscot.jpg" // ?
                ],
           ];

        // set selectors
        var documentJQ = $(document),
            AWHeroShowMeCool = $(".AW__hero__show-me-cool"),
            AWHead = $(".AW__head"),
            AWHeadUlLi = $(".AW__head ul li"),
            AWHeadUlLiA = $(".AW__head ul li a"),
            AWHeadUlLiSpan = $(".AW__head ul li span"),
            AWHero = $('.AW__hero'),
            AWHeroCanvas = $('.AW__hero canvas'),
            AWHeroDesigner = $(".AW__hero__designer"),
            AWHeroDesignerOverlay = $(".AW__hero__designer-overlay"),
            AWHeroFrontEnd = $(".AW__hero__front-end"),
            AWHeroDeveloperOverlay = $(".AW__hero__developer-overlay"),
            AWProjectTitle = $(".AW__project__title"),
            AWProjectMainImg = $(".AW__project__main-img"),
            AWProjectReadMore = $(".AW__project__read-more"),
            AWProjectQuote = $(".AW__project__quote"),
            AWProjectQuoteblockquote = $(".AW__project__quote blockquote"),
            AWProjectImagesMash = $(".AW__project__images--mash"),
            AWProjectImagesMase = $(".AW__project__images--mase"),
            AWProjectImagesExpand = $(".AW__project__images--expand"),
            AWProjectThumb = $(".AW__projects__thumb"),
            AWProject = $(".AW__project"),
            AWProjects = $(".AW__projects"),
            AWAbout = $(".AW__about"),
            AWAboutTitleReadMore = $(".AW__about__title__read-more"),
            AWAboutClientsImg = $(".AW__about__clients img"),
            AWAboutAboutSkills = $(".AW__about__about__skills"),
            AWAboutAboutSkillsLiSpan = $(".AW__about__about__skills li span"),
            AWBlogCont = $(".AW__blog__cont"),
            AWBlogBlogPost = $(".AW__blog__cont__blogPost"),
            AWContactSocialA = $(".AW__contact__social a"),
            AWHeadLogo = $(".AW__head__logo"),
            AWHeroMainLogo = $(".AW__hero__main-logo");

        // selectors that need to be reset
        function resetVariables() {
            AWProjectTitle = $(".AW__project__title");
            AWProjectMainImg = $(".AW__project__main-img");
            AWProjectReadMore = $(".AW__project__read-more");
            AWProjectQuote = $(".AW__project__quote");
            AWProjectQuoteblockquote = $(".AW__project__quote blockquote");
            AWProjectImagesMash = $(".AW__project__images--mash");
            AWProjectImagesMase = $(".AW__project__images--mase");
            AWProjectImagesExpand = $(".AW__project__images--expand");
            AWProject = $(".AW__project");
            AWProjects = $(".AW__projects");
        }

        // reusable read more function
        var readMore = function(selector) {
            selector.one("click", function() {
                $(this).prev().css("height", "auto");
                $(this).prev().addClass("AW__project__para--open");
                $(this).text("hide");
                $(this).one("click", function() {
                    $(this).prev().css("height", "84px");
                    $(this).prev().removeClass("AW__project__para--open");
                    $(this).text("Read more");
                    readMore(selector);
                });
            });
        };

        // resuseable scroll function
        var scrollNicly = function(select) {
            var selector = select;
            var topScroll = selector.offset().top;
            $(document.body).animate({
                'scrollTop': topScroll
            }, 1000);
        };

        // reusable hover effect
        var titleHover = function(select) {
            select.mouseenter(
                function() {
                    select.textillate({  in: { effect: 'fadeInRight' } });
                }
            );
        };

        // show something interesting if visited
        // need to set up mamp and then can do browser sync
        // this.coockie = function() {
        //     var setCookie = Cookies.get('beenHere');
        //     if (setCookie === undefined) {
        //         Cookies.set('beenHere', 'Yes', { expires: 7, path: '' });
        //     } else {
        //         AWHeroShowMeCool.css("display", "block");
        //         var link = "",
        //             href = ""; // set to link ending i.e grid__item--c1
        //         $(".grid__item--c1, .grid__item--c2, .grid__item--c3, .grid__item--c4, .grid__item--c5, .grid__item--c6, .grid__item--c7, .grid__item--c8").on("click", function() {
        //             var that = $(this);
        //             Cookies.set(that, that, { expires: 7, path: '' });
        //         })
        //         var cookies = Cookies.get(),
        //             selectors = ''; // this needs to be clicked slectors filter out chosen might be better with for loop
        //         if (cookies === "") {
        //             link = windowURL + ""; // grid__item--c1
        //         }
        //         AWHeroShowMeCool.find("a").attr("href", link);
        //         AWHeroShowMeCool.trigger("click");
        //         // add nice scroll use other function
        //         scrollNicly(link);
        //     }
        // };

        // complete
        this.coolLogo = function() {
            // hover for logo
            AWHeadLogo.attr('src', windowURL + '/images/logo/AustinWeightLOGO-1.gif');
            $('.AW__head').mouseenter(
              function() {
                AWHeadLogo.attr('src', windowURL + '/images/logo/AustinWeightLogo.gif');
              }
            ).mouseleave(
              function() {
                AWHeadLogo.attr('src', windowURL + '/images/logo/AustinWeightLOGO-1.gif');
              }
            );

            // window size show menu and on scroll hide
            if ($(window).width() >= 768) {
                $(window).on("scroll", function() {
                    AWHead.addClass("AW__head--hidden");
                    AWHeadLogo.removeClass("AW__head__logo-open");
                    var scrollTop = documentJQ.scrollTop();
                    if (scrollTop === 0 || scrollTop < 0) {
                        AWHead.removeClass("AW__head--hidden");
                        AWHeadLogo.addClass("AW__head__logo-open");
                    }
                });
            } else {
                AWHead.addClass("AW__head--hidden");
                AWHeadLogo.removeClass("AW__head__logo-open");
            }

            // open menu on click
            AWHead.on("click", function() {
                if (AWHead.hasClass("AW__head--hidden")) {
                    AWHead.removeClass("AW__head--hidden");
                    AWHeadLogo.addClass("AW__head__logo-open");
                }
                $(window).on("scroll", function() {
                    AWHead.addClass("AW__head--hidden");
                    AWHeadLogo.removeClass("AW__head__logo-open");
                    var scrollTop = documentJQ.scrollTop();
                    if (scrollTop === 0 || scrollTop < 0) {
                        AWHead.removeClass("AW__head--hidden");
                        AWHeadLogo.addClass("AW__head__logo-open");
                    }
                });
            });

        };

        // complete menu scroll
        this.niceScroll = function() {
            AWHeadUlLiSpan.on("click", function(e) {
                var IDtoScroll = '';
                if ($(this).hasClass("AW__head__work")) {
                    IDtoScroll = $('#AW__projects');
                } else if ($(this).hasClass("AW__head__about")) {
                    IDtoScroll = $('#AW__about');
                    if (AWAboutTitleReadMore.text() === "Read more" || AWAboutTitleReadMore.text() === "read more") {
                        AWAboutTitleReadMore.trigger("click");
                        AWAboutTitleReadMore.remove();
                    }
                } else {
                    IDtoScroll = $('#AW__blog');
                }
                scrollNicly(IDtoScroll);
            });
        };

        this.hero = function() {

            titleHover(AWHeroDesigner);
            titleHover(AWHeroFrontEnd);

            // 3d logo effect
            if ($(window).width() >= 768) {
              AWHeroMainLogo.logosDistort();
            } else {
              AWHeroMainLogo.remove();
            }

            // hover effect
            function heroHover(elements, classes) {

                var top = elements[1].scrollTop();

                elements[1].on("mouseenter", function shapeHover() {
                    if ($(document).scrollTop() >= 1) {
                        elements[1].unbind(shapeHover);
                    } else {
                        elements[1].addClass(classes[0]);
                        elements[0].addClass(classes[1]);

                        var elem = '';

                        setTimeout(
                          function() {

                            if (elements[1] === AWHeroDesigner) {
                              elm = documentJQ.find(".AW__hero__designer-overlay--active:hover");
                            } else {
                              elm = documentJQ.find(".AW__hero__developer-overlay--active:hover");
                            }

                             if (elm.length) {
                               elements[0].one("mouseleave", function() {
                                   elements[1].removeClass(classes[0]);
                                   elements[0].removeClass(classes[1]);
                                   if (!$(".AW__hero h1 span:hover").length) {
                                       var remove = setTimeout( function() {
                                         elements[1].css("z-index", "0");
                                         elements[1].css("pointer-events", "auto");
                                     }, 500);
                                   }
                               });
                           } else {
                                elements[1].on("mouseleave", function() {
                                    var remove = setTimeout( function() {
                                       elements[1].removeClass(classes[0]);
                                       elements[0].removeClass(classes[1]);
                                       elements[1].css("z-index", "0");
                                       elements[1].css("pointer-events", "auto");
                                   }, 500);
                                });
                           }

                       }, 400);

                        setTimeout( function() {
                          elements[1].css("z-index", "1000");
                          elements[1].css("pointer-events", "none");
                      }, 500 );
                    }
                });
            }

            function createHovers() {
                heroHover([AWHeroDesignerOverlay, AWHeroDesigner], ["AW__hero__designer--active", "AW__hero__designer-overlay--active"]);
                heroHover([AWHeroDeveloperOverlay, AWHeroFrontEnd], ["AW__hero__front-end--active", "AW__hero__developer-overlay--active"]);
            }

            createHovers();

            $(document).on('scroll', function() {
                createHovers();
            });

            // background that changes and maybe add cool paint effects in the background of main hero
            // setInterval( function() {
            //     var changeBackground = function() {
            //         // list of images to chage background
            //         var background = [
            //             windowURL + "/img/1.png", // 1
            //             windowURL + "/img/1.png", // 2
            //             windowURL + "/img/1.png", // 3
            //             windowURL + "/img/1.png", // 4
            //             windowURL + "/img/1.png", // 5
            //             windowURL + "/img/1.png" // 6
            //         ];
            //         for (var i = 0; i < background.length; i++) {
            //             setTimeout( function() {
            //                 AWHero.css("background", background[i]);
            //             }, 2000);
            //         }
            //     };
            //     changeBackground();
            // }, 10000);

        };

        this.project = function() {

            // // need to build better paralax function
            // var pralaxImage = function (element) {
            //     var elementInner = element.find("img"),
            //         elementScrolltop = element.scrollTop();
            //         var inc = -element.scrollTop() * 0.2 ;
            //     if (elementScrolltop === documentJQ.scrollTop() ) {
            //         documentJQ.on("scroll", function() {
            //             elementInner = elementScrolltop + inc;
            //             inc++;
            //         });
            //     }
            // };

            // // add a slight pralax as will fill screen
            // documentJQ.on("scroll", function() {
            //     pralaxImage(AWProjectMainImg);
            // });

            readMore(AWProjectReadMore);

            // // ------------------------------------------------- duplicate code below -------------------------------------------------------------

            // // build a nice image hover
            // // different for each
            // AWProjectImagesMash.on("hover", function() {
            //     // arrounf mouse add a filter ulr() like water
            //     // $(this).css();
            // });
            // AWProjectImagesMase.on("hover", function() {
            //     // make image pop up slihtly and a drop shadow
            //     // $(this).css();
            // });
            // AWProjectImagesExpand.on("hover", function() {
            //     // paralax scrolling
            //     // $(this).css();
            // });

        };

        this.projects = function() {
            // add animation from codedrops and make a nice slant back effect
            AWProjectThumb.on("click", function() {
                var projectName = $(this).find("h4").text();
                    var contentToAppend = "",
                        title = '',
                        mainImg = '',
                        paragraph = '',
                        image = '',
                        quote = '',
                        image2 = '';

                    (function() {
                        for (var i = 0; i < AWprojectDat.length; i++) {

                          var special = '';
                          var isSpecial = '';

                            if (projectName == AWprojectDat[i][0]) {
                                var selectedPro = ["Banner Ads", "V&A - D&AD Entry", "End Clothing"];
                                var specialCont = "";
                                if (AWprojectDat[i][0] === selectedPro[1]) {
                                    special = function(parse) {
                                        // add scroll for V&A
                                        specialCont = '<div class="AW__project__scroller"><div><img src="' + parse + '"></div></div>';
                                    }; // special = ""; // some coll slider V&A
                                } else if (AWprojectDat[i][0] === selectedPro[0]) {
                                    special = function(parse) {
                                        // functionallity for videos of banner ads
                                        specialCont = '<div class="AW__project__vidios"><video width="300" height="250" src="' + parse[0] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[1] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[2] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[3] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[4] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[5] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[6] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[7] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[8] + '" muted loop autoplay></video></div>';
                                    };
                                } else if (AWprojectDat[i][0] === selectedPro[2]) {
                                    special = function(parse) {
                                        specialCont = '<div class="AW__project__images--expand"><div><img src="' + parse[0] + '"><img src="' + parse[1] + '"></div><div><img src="' + parse[2] + '"></div></div><div class="AW__project__images--expand"><div><img src="' + parse[3] + '"><img src="' + parse[4] + '"></div><div><img src="' + parse[5] + '"></div></div><div class="AW__project__images--expand"><div><img src="' + parse[6] + '"><img src="' + parse[7] + '"></div><div><img src="' + parse[8] + '"></div></div><div class="AW__project__images--expand"><div><img src="' + parse[10] + '"><img src="' + parse[11] + '"></div><div><img src="' + parse[12] + '"></div></div>';
                                    };
                                }

                                var imageStyle = "";
                                if (AWprojectDat[i][0] === "Match Betting" || AWprojectDat[i][0] === "Quantcast Home From Home") {
                                    imageStyle = "AW__project__images--mash";
                                } else if (AWprojectDat[i][0] === "End Clothing" || AWprojectDat[i][0] === "Zorokovick Vodka") {
                                    imageStyle = "AW__project__images--mase";
                                } else {
                                    imageStyle = "AW__project__images--expand";
                                }

                                $(".swiper-slide-1 img").attr("src", AWprojectDat[i][4]);
                                $(".swiper-slide-2 img").attr("src", AWprojectDat[i][5]);
                                $(".swiper-slide-3 img").attr("src", AWprojectDat[i][6]);
                                $(".swiper-slide-4 img").attr("src", AWprojectDat[i][8]);
                                $(".swiper-slide-5 img").attr("src", AWprojectDat[i][9]);
                                $(".swiper-slide-6 img").attr("src", AWprojectDat[i][10]);

                                // swiper back to first slide

                                name = AWprojectDat[i][0].replace(/\s/g,'');
                                title = '<div class="AW__project__title"><h2>' + AWprojectDat[i][0] + '</h2><h3>' + AWprojectDat[i][1] + '</h3></div>';
                                mainImg = '<style>.AW__project__main-img {background-image: url(' + AWprojectDat[i][2][0] + ');}@media only screen and (min-width : 700px) {.AW__project__main-img {background-image: url(' + AWprojectDat[i][2][1] + ');}}@media only screen and (min-width : 1400px) {.AW__project__main-img {background-image: url(' + AWprojectDat[i][2][2] + ');}}@media only screen and (min-width : 1600px) {.AW__project__main-img {background-image: url(' + AWprojectDat[i][2][3] + ');}}</style><div class="AW__project__main-img"></div>';
                                paragraph = '<div class="AW__project__para"><p>' + AWprojectDat[i][3] + '</p></div><span class="AW__project__read-more">read more</span>';
                                image = '<div class="' + imageStyle + '"><div><img src="' + AWprojectDat[i][4] + '"><img src="' + AWprojectDat[i][5] + '"></div><div><img src="' + AWprojectDat[i][6] + '"></div></div>';
                                quote = '<div class="AW__project__quote"><blockquote>' + AWprojectDat[i][7] + '</blockquote></div>';
                                image2 = '<div class="' + imageStyle + '"><div><img src="' + AWprojectDat[i][8] + '"><img src="' + AWprojectDat[i][9] + '"></div><div><img src="' + AWprojectDat[i][10] + '"></div></div>';

                            }

                            isSpecial = function() {
                                var node = "";
                                if (AWprojectDat[i][11] && special) {
                                    special(AWprojectDat[i][11]);
                                }
                                return specialCont;
                            };

                            isSpecial();

                            contentToAppend = '<div class="AW__project AW__project__' + name + '">' + title + mainImg + paragraph + image + quote + image2 + isSpecial() + '</div>';
                        }
                    })();

                    AWProject.remove();
                    AWProjects.before(contentToAppend);

                    resetVariables(); // reset variables for new elements

                    function appendContentComplete() {

                        readMore($(".AW__project__read-more"));
                        titleHover(AWProjectQuoteblockquote);
                        scrollNicly(AWProject);

                        $(".AW__project img").on("click", function() {

                          $(".swiper-container").addClass('swiper-container--open');
                          $("body").css("overflow", "hidden");

                        if (once === 1) {
                            var mySwiper = new Swiper('.swiper-container', {
                                speed: 400,
                                spaceBetween: 0,
                                pagination: '.swiper-pagination',
                                paginationClickable: true
                            });
                            once = 0;
                        }

                          $(".swiper-close").on("click", function() {
                              $("body").css("overflow", "scroll");
                              $(".swiper-container").removeClass('swiper-container--open');
                          });

                      });
                    }
                    appendContentComplete();
            });


        }; // close projects function

        this.about = function() {
            // hide and show function
            function readMoreAbout() {
                AWAboutTitleReadMore.on("click", function() {
                    AWAbout.addClass("AW__about--open");
                    $(this).text("hide");
                    AWAboutTitleReadMore.remove();
                    // AWAbout.append($(this))
                    $(this).one("click", function() {
                        AWAbout.removeClass("AW__about--open");
                        $(this).text("Read more");
                        readMoreAbout();
                    });
                });
            }
            readMoreAbout();

            // on client image hover rotate image to reveal a little more about what I did for each and a link
            // need to add css
            AWAboutClientsImg.on("mouseover", function() {
                $(this).addClass("client--open");
                $(this).addClass("client--open--text");
                $(this).next().addClass("client--open--text");
            });

            AWAboutClientsImg.on("mouseout", function() {
                $(this).removeClass("client--open");
                $(this).removeClass("client--open--text");
                $(this).next().removeClass("client--open--text");
            });

            // skills animation
            AWAboutTitleReadMore.on("click", function() {  // download jquery plugin to check if in view
                setTimeout( function() {
                    AWAboutAboutSkillsLiSpan.each(function(index, element) {
                        var per = $(this).text();
                        function createLoader(element, aPersentage) {
                            element.width(aPersentage);
                        }
                        // create loading bar for each
                        createLoader($(this), per);
                    });
                }, 2000);
            });
        };

        // this.blog = function() {
        //     AWBlogBlogPost.on("click", function() {
        //         AWBlogBlogPost.removeClass("AW__blog__cont__blogPost--open");
        //         AWBlogCont.prepend($(this));
        //         $(this).addClass("AW__blog__cont__blogPost--open");
        //     });
        // };

        this.contact = function() {

        };
    }

    var austiin = new AW();
    // austiin.coockie();
    austiin.coolLogo();
    austiin.niceScroll();
    austiin.hero();
    austiin.project();
    austiin.projects();
    austiin.about();
    // austiin.blog();
    austiin.contact();

})();

if ($(window).width() >= 768) {

  // project animation js
  function StackFx(el) {
      this.DOM = {};
      this.DOM.el = el;
      this.DOM.stack = this.DOM.el.querySelector('.stack');
      this.DOM.stackItems = [].slice.call(this.DOM.stack.children);
      this.totalItems = this.DOM.stackItems.length;
      this.DOM.img = this.DOM.stack.querySelector('.stack__figure > .stack__img');
      this.DOM.caption = this.DOM.el.querySelector('.grid__item-caption');
      this.DOM.title = this.DOM.caption.querySelector('.grid__item-title');
      this.DOM.columns = {left: this.DOM.caption.querySelector('.column--left'), right: this.DOM.caption.querySelector('.column--right')};
  }

  StackFx.prototype._removeAnimeTargets = function() {
      anime.remove(this.DOM.stackItems);
      anime.remove(this.DOM.img);
      anime.remove(this.DOM.title);
      anime.remove(this.DOM.columns.left);
      anime.remove(this.DOM.columns.right);
  };

  // need to update
  function RigelFx(el) {
      StackFx.call(this, el);
      this._initEvents();
  }

  RigelFx.prototype = Object.create(StackFx.prototype);
  RigelFx.prototype.constructor = RigelFx;

  RigelFx.prototype._initEvents = function() {
      var self = this;
      this._mouseenterFn = function() {
          self._removeAnimeTargets();
          self._in();
      };
      this._mouseleaveFn = function() {
          self._removeAnimeTargets();
          self._out();
      };
      this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
      this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
  };

  RigelFx.prototype._in = function() {
      var self = this;

      anime({
          targets: this.DOM.stackItems,
          translateZ: {
              value: function(target, index) {
                  return index*10;
              },
              duration: 800,
              easing: 'easeOutExpo',
              delay: 200
          },
          opacity: {
              value: function(target, index, cnt) {
                  return index !== cnt - 1 ? [0,0.1*index+0.1] : 1
              },
              duration: 1,
              easing: 'linear',
              delay: 200
          },
          translateY: [
              {
                  value: function(target, index) {
                      return -1*index*10;
                  },
                  duration: 800,
                  delay: 200,
                  elasticity: 300
              },
          ],
          scaleY: [
              {
                  value: 0.8,
                  duration: 200,
                  easing: 'easeOutExpo'
              },
              {
                  value: 1,
                  duration: 800,
                  elasticity: 300
              }
          ],
          scaleX: [
              {
                  value: 1.1,
                  duration: 200,
                  easing: 'easeOutExpo'
              },
              {
                  value: 1,
                  duration: 800,
                  elasticity: 300
              }
          ]
      });

      anime({
          targets: this.DOM.img,
          duration: 900,
          easing: 'easeOutExpo',
          delay: 200,
          scale: 0.7
      });

      anime({
          targets: [this.DOM.title, this.DOM.caption],
          translateY: {
              value: [20, 0],
              duration: 800,
              easing: 'easeOutExpo',
          },
          opacity: {
              value: [0.4,1],
              duration: 400,
              delay: 200,
              easing: 'linear'
          }
      });

      anime({
          targets: [this.DOM.columns.left, this.DOM.columns.right],
          translateY: [
              {
                  value: [60,0],
                  duration: 800,
                  easing: 'easeOutExpo',
                  delay: 200
              }
          ],
          opacity: [
              {value: [0,0], duration: 1, easing: 'linear'},
              {value: 1, delay: 300, duration: 400, easing: 'linear'}
          ]
      });
  };

  RigelFx.prototype._out = function() {
      var self = this;

      anime({
          targets: this.DOM.stackItems,
          duration: 800,
          easing: 'easeOutElastic',
          translateZ: 0,
          opacity: function(target, index, cnt) {
              return index !== cnt - 1 ? 0 : 1
          },
          translateY: 0
      });

      anime({
          targets: this.DOM.img,
          duration: 800,
          easing: 'easeOutElastic',
          scale: 1
      });

      anime({
          targets: [this.DOM.title, this.DOM.caption],
          duration: 800,
          // easing: 'easeOutExpo',
          translateY: 0,
          opacity: 1
      });

      anime({
          targets: [this.DOM.columns.left, this.DOM.columns.right],
          duration: 800,
          easing: 'easeOutExpo',
          translateY: 0,
          opacity: 1
      });
  };

  window.RigelFx = RigelFx;

  (function() {
      [].slice.call(document.querySelectorAll('.grid--effect-rigel > .grid__item')).forEach(function(stackEl) {
          new RigelFx(stackEl);
      });
  })();
}
