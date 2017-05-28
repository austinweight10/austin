// make responsive
// if ($(window).width() >= 768) {}

(function() {
    function AW() {

      var url = document.URL,
          windowURL = url.substring(0,url.lastIndexOf("/"));

        // this is goign to be hard ask grace and use profecional quotes about advertising development

        // main data
        var AWprojectDat = [
                [ //project1 BannerAds
                    "Banner Ads", // titles
                    "Wen I wo", //subtitle
                    windowURL + "/images/projects/bannerAds/mainImage.png", // mainImage
                    "", //moreInfo
                    windowURL + "/images/projects/bannerAds/images/Missguided2-300x250.jpg", //imageOfWork1 // campaign bost clicks and roi
                    windowURL + "/images/projects/bannerAds/images/Matches-Fashion-300x250.png", //imageOfWork1
                    windowURL + "/images/projects/bannerAds/images/Abercrombi&Fitch-300x250.png", //imageOfWork1
                    "I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.", //quote
                    windowURL + "/images/projects/bannerAds/images/Quantcast-300x250.png", //imageOfWork1
                    windowURL + "/images/projects/bannerAds/images/Toast-300x250.png", //imageOfWork1
                    windowURL + "/images/projects/bannerAds/images/ToysRUs-300x250.png", //imageOfWork1
                    [
                        [windowURL + "/images/projects/bannerAds/BackKarewnMillen.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/FeelUniqueMPu.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/FootAsylumMPU.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/RomanMPU.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/Moo300x250.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/MyTheresa2prod.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/Jigsawrollover.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/warehouse.mp4"], // add vidios
                        [windowURL + "/images/projects/bannerAds/JimychooMPU.mp4"], // add vidios
                    ],
                ],
                [ //project2 End Clothing
                    "End Clothing", // title
                    "In this project my team and I rebuilt End. Clothing on Magento 2 and redesigned the whole front end.", //subtitle
                    windowURL + "/images/projects/endClothing/1.png", // mainImage
                    "I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.", //moreInfo
                    windowURL + "/images/projects/endClothing/1.png", //imageOfWork1 // all the different pages and blocks mobile tablet and desktop
                    windowURL + "/images/projects/endClothing/1.png", //imageOfWork1
                    windowURL + "/images/projects/endClothing/1.png", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/images/projects/endClothing/1.png", //imageOfWork1
                    windowURL + "/images/projects/endClothing/1.png", //imageOfWork1
                    windowURL + "/images/projects/endClothing/1.png" //imageOfWork1
                ],
                [ //project3 Creative Calculator
                    "Creative Calculator", // title
                    "I lead this project and created a fully functioning ad calculator. The premis was that we colated thosands of ads and analised them using a custom grid and then processed this data so that it was usable in the calculator. This was to enable anyone to drop an add into the calaculator and it would tell you the best and worst parts and where it could be imroved", //subtitle
                    windowURL + "/images/projects/creativeCalculator/mainImage.png", // mainImage
                    "I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.", //moreInfo
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator1.jpg", //imageOfWork1 // get some scretches for this project of the grid and overlays
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator2.jpg", //imageOfWork1
                    windowURL + "/images/projects/creativeCalculator/Creative-calculator3.jpg", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/images/projects/creativeCalculator/1.png", //imageOfWork1
                    windowURL + "/images/projects/creativeCalculator/1.png", //imageOfWork1
                    windowURL + "/images/projects/creativeCalculator/1.png" //imageOfWork1
                ],
                [ //project4 Quantcast Posters and Icon
                    "Man Overboard - Degree show", // title
                    "Here are a selection of icons and posters I designed for Quantcast to promote a number of different.", //subtitle
                    windowURL + "/img/1.png", // mainImage
                    "I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry. I headed up the fashion side of Quantcast's clients and had the pleaseure of working with some of the most renound retailers in the industry.", //moreInfo
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite3.png", //imageOfWork1
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite1.png", //imageOfWork1
                    windowURL + "/images/projects/manOverboard/ManOverboard_WebSite2.png", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_Cover.png", //imageOfWork1
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_AustinsWork.png", //imageOfWork1
                    windowURL + "/images/projects/manOverboard/ManOverboard_Book_Logopage.png" //imageOfWork1
                ],
                [ //project5 V&A D&AD Entry
                    "V&A - D&AD Entry", // title
                    "This was my D&AD entry for a project to redisign a hording that was going to be erected around the V&A prior to building their new courtyard and exhibition area.", //subtitle
                    windowURL + "/img/1.png", // mainImage // create slider as sccrollable area add css touchscroll
                    "text", //moreInfo
                    windowURL + "/images/projects/vAndA/w3.jpg", //imageOfWork1
                    windowURL + "/images/projects/vAndA/w4.jpg", //imageOfWork1
                    windowURL + "/images/projects/vAndA/w5.jpg", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/images/projects/vAndA/w6.jpg", //imageOfWork1
                    windowURL + "/images/projects/vAndA/w7.jpg", //imageOfWork1
                    windowURL + "/images/projects/vAndA/1.png", //imageOfWork1
                    windowURL + "/images/projects/vAndA/VA1.png" //imageOfWork1
                ],
                [ //project6 Yawp Jewllery
                    "Yawp Jewllery", // title
                    "This project ...", //subtitle
                    windowURL + "/img/1.png", // mainImage
                    "text", //moreInfo
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png" //imageOfWork1
                ],
                [ //project7 Quantcast Home From Home
                    "Quantcast Home From Home", // title
                    "This project was part of a prize based sceme at quantcast for which I won. I created a fully functioning Airbnb style site for employees inside of quantcast to travel. This enabled employees to travel cheaply and hosts to make money all while building company culture.", //subtitle
                    windowURL + "/img/1.png", // mainImage
                    "text", //moreInfo
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    "quote about work", //quote
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png", //imageOfWork1
                    windowURL + "/img/1.png" //imageOfWork1
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
                $(this).text("hide");
                $(this).one("click", function() {
                    $(this).prev().css("height", "150px");
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
          select.one("click", function() {
            console.log('dsfgdsf')
          })
          select.on("hover", function() {
              select.textillate({  outEffects: [ 'hinge' ], in: { effect: 'fadeInRight' } });
          });
        }

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

            // 3d logo effect
            if ($(window).width() >= 768) {
              AWHeroMainLogo.logosDistort();
            } else {
              AWHeroMainLogo.remove();
            }

            // hover effect
            function heroHover(elements, classes) {
                var top = elements[1].scrollTop();
                titleHover(elements[1]);
                if ($(document).scrollTop() >= 1) {
                    elements[1].unbind("mouseenter");
                } else {
                    elements[1].on("mouseenter", function() {
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
                                         elements[1].css("z-index", "0")
                                         elements[1].css("pointer-events", "auto")
                                       }, 500)
                                   }
                               });
                           } else {
                                elements[1].on("mouseleave", function() {
                                    var remove = setTimeout( function() {
                                       elements[1].removeClass(classes[0]);
                                       elements[0].removeClass(classes[1]);
                                       elements[1].css("z-index", "0")
                                       elements[1].css("pointer-events", "auto")
                                     }, 500)
                                });
                           }

                         }, 400)

                        setTimeout( function() {
                          elements[1].css("z-index", "1000")
                          elements[1].css("pointer-events", "none")
                        }, 500 )

                    });
                }
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

            titleHover(AWProjectTitle);
            titleHover(AWProjectQuote);

            // need to build better paralax function
            var pralaxImage = function (element) {
                var elementInner = element.find("img"),
                    elementScrolltop = element.scrollTop();
                    var inc = -element.scrollTop() * 0.2 ;
                if (elementScrolltop === documentJQ.scrollTop() ) {
                    documentJQ.on("scroll", function() {
                        elementInner = elementScrolltop + inc;
                        inc++;
                    });
                }
            };

            // add a slight pralax as will fill screen
            documentJQ.on("scroll", function() {
                pralaxImage(AWProjectMainImg);
            });

            readMore(AWProjectReadMore);

            AWProjectQuote.on("hover", function() {
                AWProjectTitle.addClass();
            });

            // ------------------------------------------------- duplicate code below -------------------------------------------------------------

            // build a nice image hover
            // different for each
            AWProjectImagesMash.on("hover", function() {
                // arrounf mouse add a filter ulr() like water
                // $(this).css();
            });
            AWProjectImagesMase.on("hover", function() {
                // make image pop up slihtly and a drop shadow
                // $(this).css();
            });
            AWProjectImagesExpand.on("hover", function() {
                // paralax scrolling
                // $(this).css();
            });

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
                                var selectedPro = ["Banner Ads", "V&A - D&AD Entry"];
                                var specialCont = "";
                                if (AWprojectDat[i][0] === selectedPro[1]) {
                                    // add functionallity special projects
                                    special = function(parse) {
                                        // add scroll for V&A
                                        specialCont = '<div class="AW__project__scroller"><div><img src="' + parse + '"></div></div>';
                                    }; // special = ""; // some coll slider V&A
                                } else if (AWprojectDat[i][0] === selectedPro[0]) {
                                    // add functionallity special projects
                                    special = function(parse) {
                                        console.log(parse[0])
                                        // functionallity for videos of banner ads
                                        specialCont = '<div class="AW__project__vidios"><video width="300" height="250" src="' + parse[0] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[1] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[2] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[3] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[4] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[5] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[6] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[7] + '" muted loop autoplay></video><video width="300" height="250" src="' + parse[8] + '" muted loop autoplay></video></div>';
                                    };
                                }
                                var imageStyle = "";
                                // chose image solution
                                if (AWprojectDat[i] === "projectName" || AWprojectDat[i] === "anotherProjectName") {
                                    imageStyle = "AW__project__images--mash";
                                } else if (AWprojectDat[i] === "projectName" || AWprojectDat[i] === "anotherProjectName") {
                                    imageStyle = "AW__project__images--mase";
                                } else {
                                    imageStyle = "AW__project__images--expand";
                                }
                                // might need to check if video
                                // function for loading projects
                                name = AWprojectDat[i][0].replace(/\s/g,'');
                                title = '<div class="AW__project__title"><h2>' + AWprojectDat[i][0] + '</h2><h3>' + AWprojectDat[i][1] + '</h3></div>';
                                mainImg = '<div class="AW__project__main-img" style="background-image: url(' + AWprojectDat[i][2] + ');"></div>';
                                paragraph = '<div class="AW__project__para"><p>' + AWprojectDat[i][3] + '</p></div><span class="AW__project__read-more">read more</span>';
                                image = '<div class="' + imageStyle + '"><img src="' + AWprojectDat[i][4] + '"><img src="' + AWprojectDat[i][5] + '"><img src="' + AWprojectDat[i][6] + '"></div>';
                                quote = '<div class="AW__project__quote"><blockquote>' + AWprojectDat[i][7] + '</blockquote></div>';
                                image2 = '<div class="' + imageStyle + '"><img src="' + AWprojectDat[i][8] + '"><img src="' + AWprojectDat[i][9] + '"><img src="' + AWprojectDat[i][10] + '"></div>';

                            }

                            isSpecial = function() {
                                var node = "";
                                if (AWprojectDat[i][11] && special) {
                                    special(AWprojectDat[i][11]);
                                }
                                return specialCont;
                            }

                            isSpecial();

                            contentToAppend = '<div class="AW__project AW__project__' + name + '">' + title + mainImg + paragraph + image + quote + image2 + isSpecial() + '</div>';
                        }
                    })();

                    AWProject.remove();
                    AWProjects.before(contentToAppend);

                    resetVariables(); // reset variables for new elements

                    function appendContentComplete() {
                        // need to inisiate appended content
                        // image scroller sroll nicely can be done with css

                        readMore($(".AW__project__read-more"));
                        scrollNicly(AWProject);
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
              }, 2000)
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
