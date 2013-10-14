var ED = ED || {};
ED.util = function () {
    function t(a, d) {
        if (null !== a) if (a instanceof Array) for (var h = 0; h < a.length; h++) d(a[h], h);
        else for (h in a) a.hasOwnProperty(h) && d(a[h], h)
    }
    function n(a, d) {
        if (a.length <= d) return a;
        var h = d - 3,
            b = a.lastIndexOf(" ", h);
        if (-1 == b || b < d / 2) b = h;
        return a.substr(0, b) + "..."
    }
    function p(a) {
        return RegExp(a).test(navigator.userAgent.toLowerCase())
    }
    function u() {
        void 0 === m && (m = p("iphone") || p("ipad") || p("ipod"));
        return m
    }
    function v() {
        void 0 === y && (y = p("android") || p("HTC_") || p("Silk/") || window.device && window.device.platform && "Android" == window.device.platform || !1);
        return y
    }
    function s() {
        return "ontouchstart" in window
    }
    function z(a) {
        a = RegExp(a + "=([^&#]*)");
        var d = unescape(window.location.href).split("#");
        a = a.exec(1 < d.length && d[1] || "");
        return null === a ? null : a[1]
    }
    function w(a) {
        "string" == typeof a && (a = new Date(a));
        a || (a = new Date);
        return a.format("mm/dd/yyyy")
    }
    function b(a) {
        $(a).modal && $(a).modal("hide")
    }
    function f() {
        var a = {
            meal: "img/meal.png",
            avatar: "img/blankpic.png"
        };
        $("img").each(function () {
            var d = $(this),
                h = d.attr("data-src");
            if (h) {
                var b = d.attr("data-placeholder") && a[d.attr("data-placeholder")];
                d.attr("src") != h && (ED.util.isVisible(d) && ED.util.inView(d, 500)) && (d.attr("src", h), d.on("error", function () {
                    b && d.attr("src") != b && d.attr("src", b)
                }))
            }
        })
    }
    function l(a) {
        var d = a;
        window.JSON && (d = JSON.stringify(a));
        d = "LOG @ " + (new Date).toString() + ": " + n(d, 200);
        B.push(d);
        $("#mobile-feedback-logs").html(B.reverse().join("<br>"));
        if (window.console) if (a instanceof Date && (a = a.toDateString()), u() || v()) {
            "object" == typeof a && (a = JSON.stringify(a));
            a = n(a, 2E3);
            a = "\nLOG: " + a;
            d = "";
            if (window.printStackTrace) try {
                d = "\n -" + printStackTrace().slice(4).join("\n -"), a += "\nSTACKTRACE:" + d
            } catch (h) {}
            u();
            console.log(a);
            $("#logs-viewer").length && $("#logs-viewer").prepend(a.replace(/\n/g, "<br>") + "<br>")
        } else console.log(a)
    }
    ISTOUCHING = !1;
    var m, y, E, G, q, C = {},
        B = [];
    return {
        each: t,
        keys: function (a) {
            var d = [],
                h;
            for (h in a) a.hasOwnProperty(h) && d.push(h);
            return d
        },
        values: function (a) {
            var d = [],
                h;
            for (h in a) a.hasOwnProperty(h) && d.push(a[h]);
            return d
        },
        clone: function (a) {
            return $.extend(!0, {}, a)
        },
        inArray: function (a, d) {
            if (!a) return !1;
            for (var h = 0; h < a.length; h++) if (a[h] === d) return !0;
            return !1
        },
        impl: function (a, d) {
            var h = new a,
                b;
            b = d.call(h);
            for (var f in b) b.hasOwnProperty(f) && (h[f] = b[f]);
            return h
        },
        isDefined: function (a) {
            return void 0 !== a && null !== a
        },
        toCamelCase: function (a) {
            return a.replace(RegExp("_(\\w)", "g"), function (a, h) {
                return h.toUpperCase()
            })
        },
        toUnderscore: function (a) {
            return a.replace(RegExp("([A-Z])", "g"), function (a, h) {
                return "_" + h.toLowerCase()
            })
        },
        truncateText: n,
        linkifyText: function (a) {
            a && (a = a.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function (a) {
                var h = a;
                h.match("^https?://") || (h = "http://" + h);
                return '<a target="_blank" href="' + h + '">' + a.substring(0, Math.min(h.length, 20)) + "...</a>"
            }));
            return a
        },
        stripHtml: function (a) {
            return a.replace(/<.*?>/g, "")
        },
        prettyJoin: function (a) {
            return 1 < a.length ? a.slice(0, -1).join(", ") + " and " + a[a.length - 1] : a.toString()
        },
        convertObjectToJSON: function (a) {
            return a ? JSON && JSON.stringify(a) : null
        },
        convertJSONToObject: function (a) {
            return a ? JSON && JSON.parse(a) : null
        },
        trimText: function (a) {
            return $.trim(a)
        },
        toLongDate: function (a) {
            a && "string" == typeof a && (a = new Date(a));
            a || (a = new Date);
            return a.format("dddd, mmm. d, yyyy")
        },
        toTimeAgo: function (a) {
            return a && a instanceof Date && $.timeago ? $.timeago(a) : ""
        },
        toShortDate: w,
        toISODate: function (a) {
            function d(a) {
                return 10 > a ? "0" + a : a
            }
            return a.getUTCFullYear() + "-" + d(a.getUTCMonth() + 1) + "-" + d(a.getUTCDate()) + "T" + d(a.getUTCHours()) + ":" + d(a.getUTCMinutes()) + ":" + d(a.getUTCSeconds()) + "Z"
        },
        toShortWeekday: function (a) {
            return "SMTWTFS".split("")[a.getDay()]
        },
        toDateObject: function (a) {
            var d = a.split("/");
            if (3 == d.length) {
                a = parseInt(d[0], 10) - 1;
                var h = parseInt(d[1], 10),
                    d = parseInt(d[2], 10);
                return new Date(d, a, h)
            }
        },
        getDatesSince: function (a) {
            var d = [],
                h = new Date;
            a = new Date(a.getTime());
            for (var b = 0; a < h;) d.push(w(a)), a.setTime(a.getTime() + 864E5), b++;
            return d
        },
        getDatesBetween: function (a, d) {
            for (var h = [], b = new Date(a.getTime()), f = 0; b <= d;) h.push(w(b)), b.setDate(b.getDate() + 1), f++;
            return h
        },
        getSecondsBetween: function (a, d) {
            return Math.abs(d.getTime() - a.getTime()) / 1E3
        },
        getDateBefore: function (a) {
            var d = new Date(a.getTime());
            d.setDate(a.getDate() - 1);
            return d
        },
        getDateAfter: function (a) {
            var d = new Date(a.getTime());
            d.setDate(a.getDate() + 1);
            return d
        },
        getCurrentTime: function () {
            var a = new Date,
                d = a.getHours(),
                h = ":00";
            15 < a.getMinutes() && (45 > a.getMinutes() ? h = ":30" : d += 1);
            a = "am";
            12 <= d && (a = "pm");
            12 < d && (d -= 12);
            0 === d && (d = 12);
            return {
                time: d + h,
                suffix: a
            }
        },
        areDatesEqual: function (a, d) {
            return w(a) == w(d) ? !0 : !1
        },
        isAndroid: v,
        isSafari: function () {
            void 0 === E && (E = $.browser.webkit && !p("chrome"));
            return E
        },
        isIOS: u,
        isSmallScreen: function () {
            return window.orientation ? 0 === window.orientation ? 400 > screen.width : 400 > screen.height : !1
        },
        isTouchDevice: s,
        supportsSVG: function () {
            void 0 === G && (NAMESPACE_SVG = "http://www.w3.org/2000/svg", G = !! document.createElementNS && !! document.createElementNS(NAMESPACE_SVG, "svg").createSVGRect);
            return G
        },
        supportsDataURL: function () {
            void 0 === q && (q = 0 === document.createElement("canvas").toDataURL("image/png").indexOf("data:image/png"));
            return q
        },
        changePage: function (a) {
            window.location.href = a
        },
        getUrlParam: function (a, d) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var h = RegExp("[\\?&]" + a + "=([^&#]*)").exec(unescape(d || window.location.href));
            return null === h ? null : h[1]
        },
        getHashParam: z,
        changeHashParam: function (a, d) {
            var h = RegExp(a + "=([^&#]*)");
            h.exec(window.location.hash);
            z(a) ? window.location.hash = window.location.hash.replace(h, a + "=" + d) : (-1 < window.location.hash.indexOf("=") && (window.location.hash += "&"), window.location.hash += a + "=" + d)
        },
        getBrowserInfo: function () {
            return window.device ? device.name + " | " + device.phonegap + " | " + device.platform + " | " + device.uuid + " | " + device.version : navigator.userAgent
        },
        inView: function (a, d) {
            var h;
            h = window.innerHeight;
            var b = document.compatMode;
            if (b || !$.support.boxModel) h = "CSS1Compat" == b ? document.documentElement.clientHeight : document.body.clientHeight;
            var b = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
                f = a.offset().top,
                e = a.height();
            return b + h + (d || 0) > f + e ? !0 : !1
        },
        isVisible: function (a) {
            return $(a).is(":visible")
        },
        detectHash: function () {
            function a() {
                if (window.location.hash) {
                    var a = $(window.location.hash);
                    a.length || (a = $('a[name="' + window.location.hash.substr(1) + '"]'));
                    (a = a.length && a.offset().top - 40) && $(window).scrollTop(a)
                }
            }
            $(window).bind("hashchange", function () {
                a()
            });
            a()
        },
        resetScroll: function (a) {
            a = a || 0;
            $(document).scrollTop(a);
            window.setTimeout(function () {
                $(document).scrollTop(a)
            }, 10)
        },
        makeAutoResize: function (a) {
            a.autoResizer({
                resizeOnChange: !v()
            })
        },
        putCursorAtEnd: function (a) {
            a.focus();
            a = a[0];
            if (a.setSelectionRange) {
                var d = 2 * $(a).val().length;
                a.setSelectionRange(d, d)
            } else $(a).val($(a).val());
            a.scrollTop = 999999
        },
        renderTemplate: function (a, d) {
            a = a && a.replace("#", "");
            var h = document.getElementById(a);
            if (!h) return l("Could not find template " + a), "";
            Handlebars.templates && Handlebars.templates[a] ? h = Handlebars.templates[a] : C[a] ? h = C[a] : (h = Handlebars.compile(h.innerHTML), C[a] = h);
            h = h(d);
            window.setTimeout(f, 100);
            return h
        },
        addClickHandler: function (a, d) {
            a.unbind("click", d).bind("click", d)
        },
        addChangeHandler: function (a, d) {
            a.unbind("change", d).bind("change", d)
        },
        addTouchOrClickHandler: function (a, d, h) {
            s() && (v() || u()) ? a.each(function () {
                $(this).unbind("tap", d);
                $(this).bind("tap", d);
                $(this).bind("touchstart", function (a) {
                    a.preventDefault();
                    var d = a.currentTarget;
                    ISTOUCHING || (d.moved = !1, ISTOUCHING = !0, d.startX = a.touches[0].pageX, d.startY = a.touches[0].pageY, $(d).addClass("active"))
                });
                $(this).bind("touchmove", function (a) {
                    var d = a.currentTarget;
                    if (10 < Math.abs(a.touches[0].pageX - d.startX) || 10 < Math.abs(a.touches[0].pageY - d.startY)) d.moved = !0, $(d).removeClass("active")
                });
                $(this).bind("touchend", function (a) {
                    var d = a.currentTarget;
                    ISTOUCHING = !1;
                    d.moved || $(d).trigger("tap");
                    setTimeout(function () {
                        $(d).removeClass("active")
                    }, 300);
                    delete d.moved
                })
            }) : a.unbind("click", d).bind("click", d)
        },
        addWindowScrollHandler: function (a) {
            $(window).off("scroll", a).on("scroll", $.throttle(500, a))
        },
        addFileUploadHandler: function (a, d, h, b) {
            a.fileupload({
                dataType: "json",
                url: d,
                start: function () {
                    b && b()
                },
                done: function (a, e) {
                    h(e.result)
                }
            })
        },
        enableElement: function (a) {
            $(a).attr("disabled", !1).removeAttr("disabled")
        },
        checkElement: function (a) {
            $(a).attr("checked", "checked")
        },
        uncheckElement: function (a) {
            $(a).attr("checked", !1).removeAttr("checked")
        },
        disableElement: function (a) {
            $(a).attr("disabled", "disabled")
        },
        triggerClick: function (a) {
            s() && (v() || u()) ? a.trigger("tap") : a.trigger("click")
        },
        hideKeyboard: function () {
            $("input, textarea").blur();
            ED.util.isIOS() && document.activeElement.blur();
            if (ED.util.isAndroid()) {
                var a = $('<input type="text">');
                $("#mobile-logs-page").append(a);
                setTimeout(function () {
                    a.focus();
                    setTimeout(function () {
                        a.hide()
                    }, 50)
                }, 50)
            }
        },
        showModal: function (a) {
            $(a).modal && $(a).modal("show")
        },
        hideModal: b,
        hideModals: function () {
            b($(".modal"))
        },
        addModalShowHandler: function (a, d) {
            $(a).unbind("shown", d).bind("shown", d)
        },
        addModalHideHandler: function (a, d) {
            $(a).unbind("hidden", d).bind("hidden", d)
        },
        loadVisibleImages: f,
        preloadImages: function (a) {
            t(a, function (a) {
                $("<img/>")[0].src = a
            })
        },
        storeInCache: function (a, d) {
            window.lscache && lscache.set(a, d)
        },
        getFromCache: function (a) {
            return window.lscache ? lscache.get(a) : null
        },
        log: l,
        getLogs: function () {
            return B
        }
    }
}();
ED = ED || {};
ED.data = function () {
    var t = {
        length: {
            imperial: "in",
            metric: "cm"
        },
        weight: {
            imperial: "lbs",
            metric: "kgs"
        },
        "%": {
            imperial: "%",
            metric: "%"
        }
    },
        n = {
            weight: {
                label: "Weight",
                unitsId: "weight",
                helptext: "We recommend always measuring yourself at the same time of day (before breakfast is best), using the same scale in the same location"
            },
            neck: {
                label: "Neck",
                unitsId: "length"
            },
            bicep: {
                label: "Bicep",
                unitsId: "length"
            },
            forearm: {
                label: "Forearm",
                unitsId: "length"
            },
            chest: {
                label: "Chest",
                unitsId: "length"
            },
            waist: {
                label: "Waist",
                unitsId: "length",
                helptext: "You can use body calipers to measure your waist - do it where it's the widest"
            },
            hips: {
                label: "Hips",
                unitsId: "length"
            },
            thigh: {
                label: "Thigh",
                unitsId: "length"
            },
            calf: {
                label: "Calf",
                unitsId: "length"
            },
            bodyfat: {
                label: "Body Fat",
                unitsId: "%"
            },
            bodywater: {
                label: "Body Water",
                unitsId: "%"
            }
        },
        p = {
            sugar: {
                label: "Added Sugars",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !0,
                    gain: !0
                },
                helptext: "Besides the obvious sugar you might heap in your coffee, sugar is found in: sugary sauces (e.g. BBQ, hoisin, oyster sauce, sweet & spicy sauce), beverages (e.g. fruit juices, non-diet sodas, cocktails, sweet wines), and of course,  candies and desserts. Many processed foods are made with High-Fructose Corn Syrup (a particularly bad form of sugar), so check ingredients of any processed foods you buy. (Or don't buy them at all!)",
                starttext: "Sugar naturally occurs in fruit (as fructose) but is now artificially added to an alarming amount of modern foods. Sugar is a simple carbohydrate that promotes fat storage in the short-term and increases insulin resistance in the long term (leading chronic diseases like diabetes). It can also be addictive for many, and has no significant nutritional benefits."
            },
            grains: {
                label: "Grains",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !0,
                    gain: !0
                },
                helptext: 'These take many forms: cereal, oatmeal, bread, tortillas, waffles, muffins, cupcakes, pita/naan/roti, pasta, bagels, rice, crackers, and anything made with flour (like thickened soups) or anything "breaded" (like chicken nuggets). Corn is also a grain, not a vegetable, and anything made of corn should be included here.',
                starttext: "Grains refer to grasses cultivated for their seeds, like wheat, barley, and rice. Grains are high in complex carbohydrates that promote fat storage in the short term and increase insulin resistance in the long term (leading to chronic diseases like diabetes). They also contain glutens, which many people are allergic to, and lectins, natural toxins."
            },
            dairy: {
                label: "Dairy",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !1,
                    gain: !1
                },
                helptext: "The most obvious (and most weight-inducing) dairy product is milk. Other dairy products are butter, yogurt, kefir, clotted milk, and cheese.",
                starttext: "Dairy products are made from mammal's milk, typically cows. Milk has a significant effect on the insulin response and can promote weight gain. It also contains lactose and casein, two proteins that some people have allergies to."
            },
            legumes: {
                label: "Legumes",
                image: !0,
                helptext: 'Commonly called "beans", like black beans and kidney beans. Other legumes are chickpeas, peas, lentils, carob, soy, and peanuts. Some common oils are made from legumes, like soybean and peanut oil. Legumes are best eaten after soaking or fermentation, as that reduces the effect of their high lectin levels.',
                starttext: "Legumes are the seedpods of plants, like peas and beans. Legumes are a source of both protein and carbohydrate. Their high degree of fiber reduces the effect of their high carb content on weight gain. Legumes also contain a high amount of lectin, a toxin."
            },
            fruits: {
                label: "Fruits",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !1,
                    gain: !1
                },
                helptext: "This includes whole fruits, canned fruits, dried fruits, and fruit juices. Whole fruits are the best as their sugar content is wrapped up in natural fiber, and fruit juices are the worst as they are distilled down to just sugar. Fruits vary in their sugar content, with the lowest being berries and the highest being mangos and pineapples.",
                starttext: "Fruits are the fleshy seed-bearing structures of plants and are naturally sweet due to fructose, a sugar. Many fruits are high in nutritional value, but the fructose in them can promote weight gain, particularly when it is not wrapped up in its natural fiber (like in fruit juices)."
            },
            coffee: {
                label: "Caffeine",
                image: !0,
                helptext: "In relative order of caffeine amounts, caffeine is found in caffeine pills, coffee, espresso, tea, energy drinks, green tea, and chocolate.",
                starttext: "Caffeine is a psychoactive stimulant that naturally occurs in some plants, like the coffee and tea plants. Caffeine can lead to medical issues like heartburn and can be addictive for many. Caffeine may also increase cravings for snacks, leading to weight gain."
            },
            alcohol: {
                label: "Alcohol",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !1,
                    gain: !1
                },
                helptext: "In order of their relative healthiness (considering antioxidant and carbohydrate levels), common alcoholic beverages are: red wine, wood aged spirits, white wines, light beers, other spirits, cider, other beers, and cocktails.",
                starttext: "Alcoholic beverages contain ethanol, an alcohol produced by fermenting sugar. Alcohol itself does not promote weight gain, but since it is used as the primary energy source for the body when present, it does not help with weight loss. Many popular alcoholic beverages are also high in carbohydrates and are often consumed in excess, so the overall effect of alcohol is not desirable."
            },
            processed: {
                label: "Processed Food",
                image: !0,
                suggested: {
                    lose: !1,
                    health: !0,
                    gain: !0
                },
                helptext: 'Prepared foods like canned or frozen foods. To estimate how "processed" a food is, check the ingredients to see how many there are, and how many you don\'t recognize.',
                starttext: 'Processed foods are prepared foods that have added un-natural ingredients to "enhance" their flavor and often contain added sugar. Processed foods contain less nutrients and more anti-nutrients than their fresh equivalents.'
            },
            snacks: {
                label: "Snacks",
                image: !0,
                helptext: "Any foods that you ate between meals. The worst snacks are those high in carbohydrates and sugars, like crackers or candy.",
                starttext: "Snacking is encouraged in the Western diet by vending machines in schools and microkitchens in workplaces, and most snack options are unhealthy. The high carbohydrate content of modern meals can result in sugar crashes and increased snacking. By eating healthier foods at meal times, you can reduce snacking and unnecessary overeating."
            },
            desserts: {
                label: "Desserts",
                image: !0,
                helptext: "A post-meal dish, usually sweetened. The worst desserts are high in sugar and low in nutritional value (ice cream, cake) and the best are dishes like cheese, nuts, or berries.",
                starttext: "Dessert has turned from an occassional treat to a twice-daily occurrence in the Western diet, encouraged by meals in schools/workplaces and by menus at restaurants. Desserts are often high in sugar with little nutritional value, and are unnecessary calories."
            },
            bigportions: {
                label: "Big Portions",
                image: !0,
                suggested: {
                    lose: !0,
                    health: !1,
                    gain: !1
                },
                helptext: "The ideal portion size for each person varies depending on their activity level, age, and gender. For the average person, a meal should fit on a plate, with a fist-sized portion of protein (meat or eggs), twice the amount of vegetables, and a spoonful of healthy fats/oils. ",
                starttext: "Many restaurants serve larger portions than we actually need, and unfortunately, when we are served more, we tend to eat it. Excessive calories (even from healthy food sources) contribute to weight gain."
            },
            veggies: {
                label: "Veggies",
                suggested: {
                    lose: !1,
                    health: !0,
                    gain: !1
                },
                helptext: "The healthiest vegetables are grown organically and sourced locally. Generally, the best vegetables are the greenest, but each color corresponds to different vitamins, so you should aim for mostly green with a bit of rainbow. Most vegetables are most beneficial in their raw state, but some should be cooked for maximal benefit (e.g. carrots, broccoli, zucchini).",
                starttext: "Vegetables are a great source of essential vitamins, mineral, and fiber, and research shows that almost everyone needs to eat more of them. Generally, green vegetables are the healthiest, but to get the full range of benefits, you should aim for the full range of colors. People aiming to lose weight should favor the less starch-y vegetables (celery root instead of potatoes, for example)."
            },
            sleep: {
                label: "Sleep",
                suggested: {
                    lose: !0,
                    health: !0,
                    gain: !0
                },
                helptext: "Most people need from 7-9 hours of quality sleep each night. If you're not sure how well you're sleeping, you can invest in something like the Jawbone UP or FitBit devices to measure your sleep activity.",
                starttext: "Sleep is important for all aspects of health, and most of us don't get enough of it. Sleep has been shown to increase weight loss (too little sleep interferes with our appetite hormones), build muscle (as growth hormone is released during sleep), and improve general health (like better memory and higher energy levels)."
            },
            water: {
                label: "Water",
                suggested: {
                    lose: !1,
                    health: !1,
                    gain: !0
                },
                helptext: "Water makes up 60% of your body weight and is used by all your body systems. Water flushes out toxins, carries nutrients to your cells, and keeps your respiratory tract moist. Drinking water can help in muscle recovery after workout and has been shown to increase weight loss.",
                starttext: "The amount of water needed by each person each day varies, but the general recommendation is 3 liters for men and 2 liters for women, which includes any sources of water in your meals. If you are exercising, in a humid climate, ill, or pregnant, or breast-feeding, you will likely need more than that. Try to avoid sugary drinks as a source of water."
            },
            exercise: {
                label: "Exercise",
                suggested: {
                    lose: !0,
                    health: !1,
                    gain: !0
                },
                helptext: "Normal, healthy people should aim for at least 30 minutes of physical activity each day, while people looking to lose weight should aim for up to 90 minutes a day. You can be active in many ways &mdash; walking to work, biking, dancing, rock climbing, and of course, going to the gym. Aim for a mix of of high intensity and moderate activities for the best results.",
                starttext: "Many of us lead more sedentary lifestyles than our bodies were designed for, commuting to work in cars or buses, and spending our days at a desk. Being more active every day can help control your weight, prevent disease, improve your mood, boost your energy, and sleep better."
            },
            carbs: {
                label: "Carbs",
                starttext: "People need part of their daily calories to come from carbohydrates, but most people get more carbs than necessary in the modern diet. Carbohydrates promote fat storage in the short term and increase insulin resistance in the long term (leading to chronic diseases like diabetes)."
            },
            chocolate: {
                label: "Chocolate",
                starttext: "Chocolate has been shown to have numerous health benefits. However, most chocolate is highly sweetened with sugar, which negates the benefits and encourages overconsumption."
            },
            salt: {
                label: "Added Sodium",
                starttext: "People need enough salt to regulate their internal systems, but many people today consume more than necessary, due to the adding of salt to snacks, pre-packaged meals, and canned foods. People with high blood pressure are often advised to reduce their salt intake."
            },
            soda: {
                label: "Soda",
                starttext: "Most soda is sweetened with sugar or worse, high fructose corn syrup. Many people find it easy to drink lots of soda, making it a significant source of both sugar and calories, with little or no health benefits."
            },
            fastfood: {
                label: "Fast Food",
                starttext: "In a world where most people don't have the time (or think they have the time) to sit down for their meal or cook their own meals, fast food is the obvious option. Unfortunately, fast food is often made of the worst (cheapest) ingredients, so even a fast food salad will be lacking in health benefits."
            },
            bread: {
                label: "Bread"
            },
            badfats: {
                label: "Bad Fats"
            },
            latemeals: {
                label: "Late Meals"
            },
            latesnacks: {
                label: "Late-night Snacks"
            },
            candy: {
                label: "Candy"
            },
            gluten: {
                label: "Gluten"
            },
            wheat: {
                label: "Wheat"
            },
            boredeating: {
                label: "Mindless Eating"
            },
            redmeat: {
                label: "Red meat"
            },
            rice: {
                label: "Rice"
            },
            refinedcarbs: {
                label: "Refined Carbs"
            },
            soy: {
                label: "Soy"
            },
            binging: {
                label: "Binging"
            },
            chips: {
                label: "Chips"
            },
            pasta: {
                label: "Pasta"
            },
            nuts: {
                label: "Nuts"
            },
            eatingout: {
                label: "Eating Out"
            },
            smoking: {
                label: "Smoking"
            },
            cookies: {
                label: "Cookies"
            },
            badsnacks: {
                label: "Bad Snacks"
            },
            cheese: {
                label: "Cheese"
            },
            fiber: {
                label: "Fiber"
            },
            sunshine: {
                label: "Sunshine"
            },
            relaxation: {
                label: "Relaxation"
            }
        },
        u = {
            organicveg: {
                label: "I ate organic veggies.",
                helptext: ""
            },
            sustseafood: {
                label: "I ate sustainable seafood.",
                helptext: ""
            },
            grassfedmeat: {
                label: "I ate grass-fed meat.",
                helptext: ""
            },
            homecooked: {
                label: "I made my own meal(s).",
                helptext: ""
            },
            pastpoultry: {
                label: "I ate pastured poultry.",
                helptext: ""
            },
            goodeggs: {
                label: "I ate eggs from pastured hens.",
                helptext: ""
            },
            localfood: {
                label: "I ate locally grown food.",
                helptext: ""
            },
            newrecipe: {
                label: "I tried a new recipe today.",
                helptext: ""
            }
        },
        v = ["homecooked", "localfood", "organicveg", "sustseafood", "grassfedmeat"],
        s = {
            lose: {
                label: "lose weight (fat)",
                checked: !0
            },
            gain: {
                label: "gain weight (muscle)"
            },
            health: {
                label: "be healthier"
            }
        };
    ED.util.each([t, n, p, u, s], function (n) {
        ED.util.each(n, function (b, f) {
            b.id = f
        })
    });
    var z = [];
    ED.util.each(v, function (n) {
        z.push(u[n])
    });
    return {
        units: t,
        measurements: n,
        measurementsList: "weight bodyfat bodywater neck bicep forearm chest waist hips thigh calf".split(" "),
        habits: p,
        habitsLists: {
            positive: "veggies water sleep exercise fiber sunshine relaxation".split(" "),
            negative: "sugar grains dairy alcohol processed desserts fruits snacks bigportions coffee legumes carbs chocolate salt soda fastfood bread badfats latemeals latesnacks candy gluten wheat boredeating badsnacks redmeat rice refinedcarbs soy binging chips pasta nuts eatingout smoking cookies cheese".split(" ")
        },
        bonuses: u,
        bonusesList: v,
        bonusesSorted: z,
        goals: s,
        goalsList: ["health", "lose", "gain"]
    }
}();
ED = ED || {};
ED.models = function () {
    function t(b, f) {
        f || (f = b);
        for (var l in f) {
            var m = ED.util.toCamelCase(l);
            b[m] = f[l]
        }
    }
    function n(b) {
        if (!(b instanceof n)) {
            this.originalJSON = b;
            t(this, b);
            var f = this;
            this.latestLogDate = this.latestLogDate && ED.util.toDateObject(this.latestLogDate);
            this.oldestLogDate = this.oldestLogDate && ED.util.toDateObject(this.oldestLogDate);
            if (this.latestLogDate) {
                b = (new Date).getTime() / 1E3;
                var l = this.latestLogDate.getTime() / 1E3;
                this.latestLogDiff = (b - l) / 60 / 60;
                this.latestLogString = ED.util.toTimeAgo(this.latestLogDate)
            } else this.latestLogString = "Never", this.latestLogDiff = 99999999;
            this.profileUrl = "/user/" + this.id;
            ED.BASE_URL && (-1 == this.photoUrl.indexOf("http") && (this.photoUrl = ED.BASE_URL + this.photoUrl), this.profileUrl = ED.BASE_URL + this.profileUrl);
            this.bodyGoals = this.bodyGoals && this.bodyGoals.measurements || {};
            this.habits = {};
            this.foodGoals && (0 < ED.util.keys(this.foodGoals.habits).length ? (this.newGoalsFormat = !0, this.habits = this.foodGoals.habits) : this.foodGoals.foodtypes && ED.util.each(this.foodGoals.foodtypes, function (b, l) {
                f.habits[l] = {
                    label: b,
                    type: "negative",
                    checked: !0
                }
            }));
            ED.util.each(this.habits, function (b, f) {
                b.id = f;
                ED.data.habits[f] && (b.helptext = ED.data.habits[f].helptext, b.starttext = ED.data.habits[f].starttext, b.label = ED.data.habits[f].label, b.image = ED.data.habits[f].image)
            });
            this.habitsList = [];
            var m = [];
            ED.util.each(ED.data.habitsLists, function (b, l) {
                ED.util.each(b, function (b) {
                    f.habits[b] && !ED.util.inArray(m, b) && m.push(b)
                })
            });
            var y = [];
            ED.util.each(this.habits, function (b, f) {
                ED.util.inArray(m, f) || y.push(f)
            });
            this.habitsList = m.concat(y);
            this.feedUrls = this.feedUrls || [];
            ED.util.each(this.bodyGoals, function (b, l) {
                f.bodyGoals[l] = new v(l, b, f)
            });
            this.tags = this.tags || [];
            ED.util.each(f.tags.sort(), function (b, l) {
                0 === b.length && f.tags.splice(l, 1)
            });
            this.startedHoursAgo = b = (new Date - new Date(this.startDate)) / 36E5;
            this.isNewbie = 120 > b;
            this.currentUser = this.isCurrentUser();
            this.setBodyLogs()
        }
    }
    function p(b, f) {
        function l(a) {
            return a && 0 !== a.length ? a : null
        }
        function m(a) {
            var b = !1;
            ED.util.each(a, function (a, d) {
                "" !== a && (null !== a && void 0 !== a) && (b = !0);
                "on" == a && (a = !0);
                a.id || (a.id = d)
            });
            return b ? a : null
        }
        function y(a) {
            if (!l(a)) return null;
            var b = {};
            ED.util.each(a, function (a) {
                "string" == typeof a ? b[a] = !0 : b[a.id] = a
            });
            return b
        }
        function E(a, b) {
            return a.totalMinutes - b.totalMinutes
        }
        function G() {
            var a = ["Nice!", "Yay!", "Awesome!", "Woot!"];
            return a[Math.floor(Math.random() * a.length)]
        }
        if (!(b instanceof p || (this.originalJSON = b, t(this, b), this.isPrivate))) {
            var q = this;
            this.user = f || this.user && new n(this.user) || ED.CURRENT_USER;
            this.notes = this.notes && 0 !== this.notes.length ? this.notes : null;
            this.foodsHtml = (this.foods = this.foods && 0 !== this.foods.length ? this.foods : null) && ED.util.linkifyText(this.foods).replace(/\n/g, "<br>");
            this.links = l(this.links);
            this.photos = l(this.photos);
            this.meals = l(this.meals);
            this.tags = l(this.tags);
            this.measurementsById = m(this.measurements) || m(this.measurementsById);
            this.mealsById = this.meals && y(this.meals) || m(this.mealsById);
            this.tagsById = this.tags && y(this.tags) || m(this.tagsById);
            this.bonusesById = m(this.bonuses) || m(this.bonusesById);
            this.habitsById = m(this.foodtypes) || m(this.habitsById);
            ED.util.each(this.measurementsById, function (a, b) {
                q.measurementsById[b] = new v(b, a, q.user)
            });
            ED.util.each(this.mealsById, function (a, b) {
                q.mealsById[b] = new u(a)
            });
            this.mealsSorted = this.mealsById && ED.util.values(this.mealsById).sort(E);
            this.habitsSorted = [];
            this.negativeHabits = [];
            this.positiveHabits = [];
            this.habitsById && ED.util.each(q.user.habitsList, function (a) {
                var b = q.habitsById[a] && q.habitsById[a].value || q.habitsById[a];
                if (null !== b && void 0 !== b && "" !== b) {
                    var f = q.user.habits[a];
                    f.value = b;
                    f.color = $.colorForValue(b, {
                        direction: f.type
                    });
                    q.habitsById[a] = f;
                    q.habitsSorted.push(f);
                    q[f.type + "Habits"].push(f)
                }
            });
            this.bonusesById && (this.bonusesSorted = [], ED.util.each(ED.data.bonusesSorted, function (a) {
                q.bonusesById[a.id] && q.bonusesSorted.push(a.id)
            }));
            var C = [],
                B = [];
            ED.util.each(this.comments, function (a) {
                a = new s(a);
                C.push(a);
                "log" == a.section && B.push(a)
            });
            this.logComments = B;
            this.comments = C;
            this.editUrl = "/log?date=" + this.date;
            this.viewUrl = "/user/" + this.user.id + "/log?date=" + this.date;
            ED.BASE_URL && (this.editUrl = ED.BASE_URL + this.editUrl, this.viewUrl = ED.BASE_URL + this.viewUrl);
            this.updatedISO = ED.util.toISODate(new Date(1E3 * this.updated));
            var a = [];
            ED.util.each(this.streaks, function (b) {
                var h = new z(b, q.user);
                if (h.template) {
                    h.descripHtml = q.user.personalizeString(h.template) + " " + G();
                    h.shareText = personalize(ED.util.stripHtml("{{ They|name }}" + h.template), {
                        gender: q.user.gender,
                        name: q.user.fullName,
                        person: "third"
                    });
                    h.emailText = personalize(ED.util.stripHtml("{{ They }}" + h.template), {
                        gender: q.user.gender,
                        name: q.user.fullName,
                        person: "second"
                    });
                    h.shouldDisplayHighFiveButton = !q.user.isCurrentUser() && ED.CURRENT_USER;
                    h.comments = [];
                    ED.util.each(q.comments, function (a) {
                        a.section == h.type + "-streak" && (a.type = "highfive", h.comments.push(a), a.creator.isCurrentUser() && (h.shouldDisplayHighFiveButton = !1))
                    });
                    h.comments.sort(function (a, e) {
                        return a.creator.isCurrentUser() ? 1 : -1
                    });
                    var f = [];
                    ED.util.each(h.comments, function (a) {
                        f.push(a.creator.getUserLink(!0))
                    });
                    h.commentersHtml = ED.util.prettyJoin(f);
                    a.push(h)
                }
            });
            this.streaks = a;
            ED.util.each(["log", "food", "body"], function (a) {
                ED.util.each(q.streaks, function (b) {
                    b.type == a && -1 == b.template.indexOf("Exercise") && (q.streak = b)
                })
            });
            this.shareUpdatesWith == ED.SHARE_WORLD && (this.sharedWithWorld = !0, this.commentsWarning = q.user.personalizeString("Note: {{ They|name }} shares {{ their }} updates publicly, so your post will be world-visible."));
            this.shareUpdatesWith == ED.SHARE_BUDDIES && (this.sharedWithBuddies = !0);
            this.shareUpdatesWith == ED.SHARE_ME && (this.sharedWithMe = !0);
            this.user.isCurrentUser() ? (this.isAuthorCurrentUser = !0, this.displayAuthor = "You") : this.displayAuthor = this.user.fullName;
            this.streak && (this.isAuthorCurrentUser && "food" == this.streak.type && (this.shouldDisplayStreakShare = !0), 0 < this.streak.comments.length && (this.streak.shouldDisplayHighFives = !0, this.streak.highfivesHtml = "High five", 1 < this.streak.comments.length && (this.streak.highfivesHtml += "s"), this.streak.highfivesHtml += " from " + this.streak.commentersHtml));
            ED.CURRENT_USER && (this.shouldDisplayCommentButton = !0);
            !this.isAuthorCurrentUser && this.sharedWithWorld && (this.shouldDisplayCommentWarning = !0);
            0 < ED.util.keys(this.measurements).length && (this.isBodyRecorded = !0);
            if (this.mealsById || this.foods || this.habitsById || this.bonuses) this.isFoodRecorded = !0;
            !this.isPrivate && (this.isFoodRecorded || this.tags || this.notes || this.links) && (this.isStreamWorthy = !0)
        }
    }
    function u(b) {
        if (!(b instanceof u)) {
            this.originalJSON = b;
            t(this, b);
            this.id = this.id || (new Date).getTime();
            !this.photo && this.photoJSON && (this.photo = JSON.parse(this.photoJSON));
            this.photo && !this.photoJSON && (this.photoJSON = JSON.stringify(this.photo));
            this.photoUrl = this.photo ? this.photo.thumbnail : this.photoData ? "data:image/jpeg;base64," + this.photoData : "img/camerabutton.png";
            this.when || (b = ED.util.getCurrentTime(), this.when = b.time + b.suffix);
            var f = this.when.match(/(\d\d*)+:*(\d\d)*\s*(pm|am|PM|AM)/);
            if (f) {
                b = parseFloat(f[1], 10);
                var l = parseFloat(f[2], 10),
                    f = f[3],
                    m = 60 * b;
                l && (m += l); - 1 < f.toLowerCase().indexOf("pm") && 12 != b && (m += 720);
                10 > l && (l = "0" + l);
                this.whenMinutes = l;
                this.whenHours = b;
                this.whenSuffix = f;
                this.when = b + ":" + (l || "00") + f.toLowerCase();
                this.totalMinutes = m
            }
        }
    }
    function v(b, f, l) {
        if (!(f instanceof v)) {
            this.originalJSON = f;
            t(this, f);
            this.id = b;
            if ("" === this.value) return null;
            this.target && (this.value = this.target);
            this.value = Number(this.value);
            "" === this.units && (this.units = l.bodyGoals[this.id] ? l.bodyGoals[this.id].units : ED.data.units[ED.data.measurements[this.id].unitsId][l.unitsSystem]);
            this.convertedValue = this.value;
            this.convertedUnits = this.units;
            ED.CURRENT_USER && (ED.CURRENT_USER.id != l.id && "%" != this.units) && ("lbs" == this.units && "metric" == ED.CURRENT_USER.unitsSystem && (this.convertedValue = 0.45359237 * this.value, this.convertedUnits = "kgs"), "kgs" == this.units && "imperial" == ED.CURRENT_USER.unitsSystem && (this.convertedValue = 2.20462262 * this.value, this.convertedUnits = "lbs"), "in" == this.units && "metric" == ED.CURRENT_USER.unitsSystem && (this.convertedValue = 2.54 * this.value, this.convertedUnits = "cm"), "cm" == this.units && "imperial" == ED.CURRENT_USER.unitsSystem && (this.convertedValue = 0.393700787 * this.value, this.convertedUnits = "in"));
            this.displayValue = Number(this.convertedValue).toFixed(1);
            b = " ";
            "%" == this.convertedUnits && (b = "");
            this.displayString = this.displayValue + b + this.convertedUnits
        }
    }
    function s(b) {
        b instanceof s || (this.originalJSON = b, t(this, b), this.creator = new n(b.creator), this.textHtml = "highfive" == this.type ? "High five from " + this.creator.getUserLink(!0) + "!" : this.creator.getUserLink() + ": " + this.textHtml, this.creatorHtml = this.creator.getUserLink(!0))
    }
    function z(b, f) {
        if (!(b instanceof z)) if (this.originalJSON = b, t(this, b), "food" == this.type) {
            var l, m = [];
            ED.util.each(this.info.foodtypes || this.info.habits, function (b) {
                var q = f.habits[b];
                q && (q.image && (l = "http://www.eatdifferent.com/img/share_no" + b + ".png"), m.push('<span class="stream-habit">' + q.label + "</span>"))
            });
            this.imageUrl = l;
            0 < m.length && (this.template = " " + ("negative" == (this.info.type || "negative") ? "avoided" : "had lots of") + " " + ED.util.prettyJoin(m) + " for " + this.info.days + " days in a row.")
        } else if ("body" == this.type) {
            var n = this.info.change.toFixed(1),
                p = ED.CURRENT_USER && ED.CURRENT_USER.unitsSystem || f && f.unitsSystem,
                p = Math.abs(n) + " " + ED.data.units[ED.data.measurements[this.info.measurement].unitsId][p];
            0 > n ? this.template = "{{ have }} been on a downward trend over the last 2 weeks - {{ they }} {{ are }} losing an average of " + p + " per day." : 0 < n && (this.template = "{{ have }} been on an upward trend over the last 2 weeks - {{ they }} {{ are }} gaining an average of " + p + " per day.")
        } else "log" == this.type && (this.template = {
            both: " filled out {{ their }} logs ",
            any: " updated {{ their }} logs ",
            food: " recorded what {{ they }} ate ",
            body: " updated {{ their }} measurements "
        }[this.info.section] + this.info.days + " days in a row.")
    }
    function w(b) {
        b instanceof w || (this.originalJSON = b, t(this, b), this.shouldUpdate = !1, this.lastUpdated = parseInt(this.lastUpdated, 10), this.lastSeen = parseInt(this.lastSeen, 10), this.lastUpdated && this.lastSeen && this.lastUpdated > this.lastSeen && (this.shouldUpdate = !0), ED.CURRENT_USER && (ED.CURRENT_USER.lastSeen = this.lastSeen))
    }
    ED.SHARE_ME = 1;
    ED.SHARE_BUDDIES = 10;
    ED.SHARE_WORLD = 666;
    n.prototype.setBodyLogs = function () {
        var b = this;
        b.allBodyLogs = {};
        ED.util.each(this.measurements || {}, function (f, l) {
            b.allBodyLogs[l] = new p({
                measurements: f
            }, b)
        });
        return b.allBodyLogs
    };
    n.prototype.setAdminProperties = function () {
        this.buddies = this.buddies || [];
        this.fromFacebook = null !== this.facebookId;
        this.numBodyGoals = ED.util.keys(this.bodyGoals).length;
        this.numFoodGoals = ED.util.keys(this.foodGoals).length;
        if (UserAgent && this.userAgent) {
            var b = new UserAgent(this.userAgent);
            this.browserName = b.browser_name;
            this.browserVersion = b.browser_version;
            this.browser = this.browserName + " " + this.browserVersion;
            this.os = b.os
        }
        ED.shared.isTestServer() ? this.datastore = "/_ah/admin/" : this.datastore = "https://appengine.google.com/";
        this.bodyLogColor = this.bodyLogOn ? "#C3E8C4" : "#ccc";
        this.foodLogColor = this.foodLogOn ? "#C3E8C4" : "#ccc"
    };
    n.prototype.isCurrentUser = function () {
        return ED.CURRENT_USER && this.id == ED.CURRENT_USER.id
    };
    n.prototype.isAdmin = function () {
        return ED.shared.isTestServer() || 1 == this.id
    };
    n.prototype.isBuddiesWithCurrentUser = function () {
        return ED.CURRENT_USER && ED.util.inArray(this.buddies, ED.CURRENT_USER.id)
    };
    n.prototype.shareMeasurements = function () {
        return this.isCurrentUser() || this.shareBodyWith == ED.SHARE_WORLD || this.shareBodyWith == ED.SHARE_BUDDIES && this.isBuddiesWithCurrentUser() ? !0 : !1
    };
    n.prototype.personalizeString = function (b) {
        var f = "third";
        this.isCurrentUser() && (f = "second");
        return personalize(b, {
            gender: this.gender,
            name: this.fullName,
            person: f
        })
    };
    n.prototype.getUserLink = function (b) {
        var f = this.personalizeString('<a href="' + this.profileUrl + '">{{ Them|name }}</a>');
        b && this.isCurrentUser() && (f = f.toLowerCase());
        return f
    };
    n.prototype.processMeasurementData = function (b, f, l) {
        function m(b, f, l) {
            var m = [],
                a = [],
                d = 0,
                h = 0,
                n = 0,
                p, e, g, c, L, A, F = 99999,
                k = 0,
                r = !1,
                Q = 0;
            ED.util.each(l, function (x) {
                e = null;
                var D = b[x];
                D && (D.measurements && D.measurements[f]) && (e = D.measurements[f].convertedValue);
                if (e && !isNaN(e)) {
                    g || (g = e, L = x);
                    c = e;
                    A = x;
                    r = !0;
                    Q++;
                    if (0 < d) {
                        if (1 < h) for (x = 2, 0 === a.length && (x = 1); x < h; x++) a.push(null);
                        if (p) for (a.length + d < n && a.push(p), D = (e - p) / (d + 1), x = 1; x < d + 1; x++) a.push(p + D * x);
                        a.push(e);
                        h = d = 0
                    }
                    h++;
                    m.push(e);
                    p = e;
                    e < F && (F = e);
                    e > k && (k = e)
                } else m.push(null), d++, r || a.push(null);
                n++
            });
            for (var D = [], x = null, M = 0; M < l.length; M++) {
                var R = m[M] || a[M],
                    x = x ? (R - x) / 7 + x : R;
                isNaN(x) ? D.push(null) : D.push(x)
            }
            var N = null,
                O = 0;
            ED.util.each(l, function (a, F) {
                D[F] && !N && (N = D[F]);
                D[F] && (O++, newestAverage = D[F])
            });
            l = null;
            3 < O && (l = (newestAverage - N) / O);
            return {
                averageData: D,
                missingData: a,
                recordedData: m,
                max: k,
                min: F,
                dataRecorded: r,
                start: g,
                end: c,
                diff: c - g,
                change: l,
                numRecorded: Q,
                startDate: L,
                endDate: A
            }
        }
        var n = this.allBodyLogs;
        l && ED.util.each(l, function (b, f) {
            n[f] = b
        });
        var p = new Date;
        ED.util.each(n, function (b, f) {
            var l = new Date(f);
            l < p && (p = l)
        });
        ED.util.each(f || [], function (b) {
            b = new Date(b);
            b < p && (p = b)
        });
        allDates = ED.util.getDatesSince(p);
        l = m(n, b, allDates);
        return f ? (b = m(n, b, f), b.change = l.change, b.averageData = l.averageData.slice(-f.length), b) : l
    };
    return {
        User: n,
        Log: p,
        Comment: s,
        Meal: u,
        Streak: z,
        StreamStatus: w
    }
}();
ED = ED || {};
ED.shared = function () {
    function t(a) {
        ED.util.each(a, function (k, r) {
            if ("users" == r) {
                var e = [];
                ED.util.each(k, function (a) {
                    e.push(new ED.models.User(a))
                });
                a.users = e
            } else if ("logs" == r) {
                var c = [];
                ED.util.each(k, function (a) {
                    c.push(new ED.models.Log(a))
                });
                a.logs = c
            } else "user" == r ? a.user = new ED.models.User(k) : "log" == r ? a.log = new ED.models.Log(k) : "comment" == r ? a.comment = new ED.models.Comment(k) : "stream-status" == r && (a.streamStatus = new ED.models.StreamStatus(k))
        });
        return a
    }
    function n(a, k, e, c) {
        ED.BASE_RPC_URL && (a = ED.BASE_RPC_URL + a);
        ED.util.log("Fetching URL: " + a);
        ED.mobile && (k = k && k.length ? k + "&" : "", k += "browserinfo=" + encodeURIComponent(ED.util.getBrowserInfo()), k += "&logs=" + ED.util.getLogs().reverse().join(", "), k += "&version=" + ED.VERSION);
        k = {
            url: a,
            type: "POST",
            data: k,
            dataType: "json",
            success: function (k, c, g) {
                ED.util.log("Got response to " + a);
                ED.util.log(k);
                e(t(k))
            },
            error: function (a, F, k) {
                ED.util.log("textStatus: " + F + " errorThrown: " + k + " status:" + a.status);
                c && c(k)
            }
        };
        ED.USE_THE_CORS && (k.xhrFields = {
            withCredentials: !0
        });
        $.ajax(k)
    }
    function p(a, k, e) {
        n(a, k.serialize(), e)
    }
    function u(a, k) {
        $(document).on("change", a.find("input, select"), function (e) {
                                      a.has($(this)).length && k()
                                    });

        $(document).on("keyup", a.find("input, textarea"), function (e) {
                                      a.has($(this)).length && k()
                                    });

        /*a.find("input, select").live("change", function (e) {
            a.has($(this)).length && k()
        });
        a.find("input, textarea").live("keyup", function (e) {
            a.has($(this)).length && k()
        });*/
        a.bind("reset-button", function (a) {
            k()
        })
    }
    function v(a, k) {
        a.find(".form-errors").remove();
        a.find(".error .help-inline").remove();
        a.find(".error").removeClass("error");
        if ("string" == typeof k) {
            var e = $('<span class="form-errors">' + k + "</span>");
            a.find(".actions").length ? a.find(".actions").children(":last").after(e) : a.find(".modal-footer").length ? a.find(".modal-footer").children(":last").after(e) : a.find('button[type="submit"]') && a.find('button[type="submit"]').after(e)
        } else ED.util.each(k, function (a, k) {
            var e = $('<span class="help-inline"></span>');
            ED.util.each(a, function (a) {
                e.append("<span>" + a + "</span>")
            });
            $('*[name="' + k + '"]').parent().parent().addClass("error");
            $('*[name="' + k + '"]').after(e)
        })
    }
    function s() {
        if (!ED.FETCHED_STREAM) return ED.util.log("Never fetched stream, so definitely getting it."), !0;
        if (ED.FETCHED_STREAM && ED.FETCHED_STREAM.getTime() < (new Date).getTime() - 18E4) return ED.util.log("Last stream fetch was 3 minutes ago, so fetching again"), !0;
        if (ED.FETCHED_STREAM && ED.SAVED_LOG && ED.SAVED_LOG.getTime() > ED.FETCHED_STREAM.getTime()) return ED.util.log("Saved log more recently than seen stream, so re-fetching it."), !0;
        ED.util.log("Not fetching the stream");
        return !1
    }
    function z() {
        s() && l()
    }
    function w() {
        return $("#stream-items").is(":visible")
    }
    function b(a) {
        if (!w()) {
            var k = "A buddy updated their log.";
            1 < a.buddies.length && (k = "Your buddies updated their logs.");
            (a = k) && $(".stream-updates-num").html(a);
            $(".stream-updates").show()
        }
    }
    function f() {
        ED.shared.sendData("get-stream-status", "", function (a) {
            a.streamStatus && a.streamStatus.shouldUpdate ? (b(a.streamStatus), z()) : w() && $(".stream-item").css({
                backgroundColor: "transparent"
            })
        })
    }
    function l() {
        if (!ED.FETCHING_STREAM) {
            ED.FETCHING_STREAM = !0;
            $("#stream-loading").show();
            var a = $("#stream-filter-nav li.active").attr("data-users") || "buddies",
                k = ED.util.getUrlParam("days_ago") || 7,
                e = "days_ago=" + k + "&users=" + a;
            ED.util.log("Fetching the stream for real for: " + k + a);
            ED.shared.sendData("get-logs", e, function (k) {
                "success" == k.status && (ED.FETCHING_STREAM = !1, ED.FETCHED_STREAM = new Date, ED.shared.renderStream(k.logs), $(".stream-none").hide(), 0 === k.logs.length && $("#stream-" + a + "-none").show(), k.streamStatus && k.streamStatus.shouldUpdate && b(k.streamStatus))
            })
        }
    }
    function m(a) {
        a = $(this).attr("data-subject");
        var k = personalize("{{ They }} {{ are }} using eatdifferent.com to track {{ their }} nutrition goals -- and {{ they }} {{ are }} doing great. Sign up to join {{ them }} on the journey.", {
            gender: ED.CURRENT_USER.gender,
            name: ED.CURRENT_USER.fullName,
            person: "third"
        }),
            e = $(this).attr("data-image") || ED.BASE_URL + "/img/logo_facebookshare.png";
        FB.ui({
            method: "feed",
            name: a,
            link: ED.BASE_URL,
            picture: e,
            description: k
        }, function (a) {
            null !== a ? ED.shared.trackAction("facebookshare", "posted") : ED.shared.trackAction("facebookshare", "cancelled")
        })
    }
    function y(a) {
        a.preventDefault();
        a = $(this).parent().find(".stream-comment-form");
        a.show();
        a = a.find("textarea");
        ED.util.putCursorAtEnd(a);
        ED.util.makeAutoResize(a)
    }

    function E(a) {
        a.preventDefault();
        $(this).parent().find("textarea").val("");
        $(this).parent().hide()
    }
    function G(a) {
        a.preventDefault();
        var k = $(this).parent().parent().find(".stream-comments"),
            e = $(this).parent(),
            c = e.find('button[type="submit"]'),
            g = e.find('button[type="button"]');
        g.attr("disabled", !0);
        c.attr("disabled", !0);
        c.html(c.attr("data-loadingmsg"));
        ED.shared.sendData("save-comment", $(this).parent().serialize(), function (a) {
            e.hide();
            e.find("textarea").val("");
            k.append(ED.util.renderTemplate("stream-comment-tmpl", {
                comments: [a.comment]
            }));
            c.html(c.attr("data-startmsg"));
            g.attr("disabled", !1).removeAttr("disabled");
            c.attr("disabled", !1).removeAttr("disabled")
        })
    }
    function q(a) {
        a.preventDefault();
        var k = $(this).parent().parent().find(".stream-comments"),
            e = $(this).parent().find('button[type="submit"]');
        e.attr("disabled", !0);
        e.html(e.attr("data-loadingmsg"));
        ED.shared.sendData("save-comment", $(this).parent().serialize(), function (a) {
            e.html(e.attr("data-startmsg"));
            k.append(ED.util.renderTemplate("stream-highfive-tmpl", {
                comments: [a.comment]
            }))
        })
    }
    function C() {
        var a = $(this).parent().parent(),
            a = ED.util.trimText(a.find(".stream-meals-time time").html());
        window.location.hash = "time=" + a
    }
    function B() {
        $().fancybox && $(".lightbox-image").fancybox({
            type: "image",
            transitionIn: "none",
            transitionOut: "none",
            titlePosition: "inside",
            changeSpeed: 0
        })
    }
    function a() {}
    function d() {
        var a = $(this).closest("section");
        a.find(".help-message").toggle();
        I("help-click", a.attr("id"))
    }
    function h(a, e, c) {
        var g;
        e = e || window.location.href;
        c = c || "None";
        var b = "https://graph.facebook.com http://connect.facebook.net/en_US/all.js http://eatdifferent.com.woopra-ns.com http://static.woopra.com/js/woopra.js http://s7.addthis.com/ extensions/ http://api.smart-deals.com/static/js/skimlinks.js http://fa.inline.playbryte.com/inline.js http://127.0.0.1:4001/isrunning http://webappstoolbarba.texthelp.com/ http://metrics.itunes.apple.com.edgesuite.net/ http://toolbar.avg.com/si.js http://js.browseforchange.com/".split(" ");
        for (g = 0; g < b.length; g++) if (0 === e.indexOf(b[g])) return !1;
        if (-1 < e.indexOf("?fb_xd_fragment#?=")) return !1;
        a.target && a.type && (a = a.type);
        a.indexOf || (a = "Non-string, non-event error: " + typeof a);
        b = "top.GLOBALS;originalCreateNotification;canvas.contentDocument;MyApp_RemoveAllHighlights;http://tt.epicplay.com;Can't find variable: ZiteReader;jigsaw is not defined;ComboSearch is not defined;http://loading.retry.widdit.com/;atomicFindClose;Can't find variable: safari;used in an extension process;G_NORMAL_MAP is not defined;fb_xd_fragment;Script error.".split(";");
        for (g = 0; g < b.length; g++) if (-1 < a.indexOf(b[g])) return !1;
        a = "JS Error: " + a + " URL: " + e + " Line: " + c + ("\n Document URL: " + document.URL);
        window.UserAgent && (e = new UserAgent, a += "\n Browser: " + e.browser_name + " " + e.browser_version + " | OS: " + e.os + " | Platform: " + e.platform);
        if (window.printStackTrace) try {
            a += "\n Stacktrace: " + printStackTrace().slice(4).join("\n -")
        } catch (d) {}
        window.ED.CURRENT_USER && (a += "\n User: " + ED.CURRENT_USER.email + " http://" + window.location.host + "/user/" + ED.CURRENT_USER.id);
        ED.shared.sendData("log-error", "error=" + a, function () {});
        return !1
    }
    function I(a, e, c) {
        window.woopraTracker && woopraTracker.pushEvent({
            name: a,
            value: e,
            category: c
        })
    }
    function H(a, e) {
        if (!ED.util.isTouchDevice() && a.tooltip) {
            var c = {
                placement: "bottom",
                animation: !1,
                html: !0
            };
            c.title = e ||
            function () {
                return a.attr("data-tooltip")
            };
            a.tooltip(c)
        }
    }
    function e(a, e) {
        function c(a) {
            ED.util.addClickHandler(a, function (c) {
                var g = $(a.attr("data-target") || a.attr("href") && a.attr("href").replace(/.*(?=#[^\s]+$)/, "")),
                    b = g.data("modal") ? "toggle" : $.extend({}, g.data(), a.data()),
                    r = g.find('input[type="text"]');
                1 == r.length && (r.first().focus(), r.keyup(function (a) {
                    if (13 === a.which) return a.preventDefault(), ED.util.triggerClick(g.find(".modal-footer .btn-primary")), !1
                }));
                e && e(a);
                g.modal(b);
                c.preventDefault()
            })
        }
        a.each(function () {
            $elem = $(this);
            "modal" == $elem.attr("data-toggle") && c($elem)
        })
    }
    function g() {
        var a = $("#feedback-form"),
            e = $("#feedback-form-anon");
        a.find("textarea").focus();
        ED.CURRENT_USER ? e.hide() : e.show()
    }
    function c() {
        var a = $("#feedback-popup"),
            e = $("#feedback-form");
        e.find("textarea").val("");
        e.trigger("reset-button");
        ED.util.hideModal(a)
    }
    function L() {
        var a = $("#feedback-form");
        event.preventDefault();
        var e = $(this).attr("data-text");
        e && a.find("textarea").val(e)
    }
    FETCHING_STREAM = !1;
    ED.BASE_URL = "http://www.eatdifferent.com";
    a.prototype.getRootNode = function () {
        return $("#log-" + this.id)[0]
    };
    a.prototype.setup = function () {
        this.setupDOM()
    };
    a.prototype.setupDOM = function () {};
    a.prototype.beforeSetData = function (a) {};
    a.prototype.afterSetData = function (a) {};
    a.prototype.setData = function (a) {
        this.log = a;
        this.beforeSetData(a);
        var e = this.getRootNode();
        $(e).find("textarea, input, select, img").each(function () {
            var e = $(this),
                c = e.attr("data-propkey"),
                k = e.attr("data-noreplace");
            if (c) {
                var g = this.nodeName,
                    b = e.attr("type");
                a: {
                    for (var c = c.split("."), d = c.shift(), h = a; d;) if (h[d]) h = h[d], d = c.shift();
                    else {
                        c = !1;
                        break a
                    }
                    c = h
                }
                if (c) {
                    if ("IMG" == g) {
                        if (c === k && 0 < e.attr("src").length) return;
                        e.attr("src", c)
                    }
                    "TEXTAREA" == g && e.val(c);
                    if ("INPUT" == g && ("text" == b || "hidden" == b || "number" == b)) {
                        if (c === k && 0 < e.val().length) return;
                        e.val(c).trigger("change")
                    }
                    "INPUT" == g && "checkbox" == b && ED.util.checkElement(e);
                    "SELECT" == g && e.val(c)
                }
            }
        });
        this.afterSetData(a)
    };
    a.prototype.getData = function () {
        var a = {},
            e = this.getRootNode();
        $(e).find("textarea, input, select").each(function () {
            var e = $(this),
                c = e.attr("data-propkey");
            if (c) {
                var k = this.nodeName,
                    g = e.attr("type"),
                    b;
                "TEXTAREA" == k && (b = e.val());
                "INPUT" != k || "text" != g && "hidden" != g && "number" != g || (b = e.val());
                "INPUT" == k && "checkbox" == g && (b = e.attr("checked") ? !0 : !1);
                "SELECT" == k && (b = e.val());
                a: for (e = b, c = c.split("."), k = c.shift(), g = a; k;) {
                    if (!g[k]) if (0 === c.length) {
                        g[k] = e;
                        break a
                    } else g[k] = {};
                    g = g[k];
                    k = c.shift()
                }
            }
        });
        return a
    };
    a.prototype.getNumSeen = function () {};
    var A = {};
    A.measurements = ED.util.impl(a, function () {
        function a() {
            $(c.DOM.measurementsGroup).show();
            $(c.DOM.showButton).hide();
            $(c.DOM.hideButton).show()
        }
        function e() {
            $(c.DOM.measurementsGroup).each(function () {
                "" === $(this).find(".log-measurement-input").val() && $(this).hide()
            });
            $(c.DOM.weight).show();
            $(c.DOM.hideButton).hide();
            $(c.DOM.showButton).show();
            ED.util.resetScroll()
        }
        var c = this;
        c.id = "measurements";
        c.DOM = {
            period: "#log-period",
            showButton: "#log-measurements-show-button",
            hideButton: "#log-measurements-hide-button",
            measurements: "#log-measurements-fields",
            measurementsGroup: ".log-measurement",
            measurementsInputGroup: ".log-measurement-input",
            measurementsTemplate: "log-measurements-tmpl",
            weight: "#log-measurement-weight"
        };
        c.setupDOM = function () {
            "female" == ED.CURRENT_USER.gender && $(c.DOM.period).show();
            ED.util.addClickHandler($(c.DOM.showButton).find("a"), a);
            ED.util.addClickHandler($(c.DOM.hideButton).find("a"), e);
            $(c.DOM.measurements).empty();
            var g = [];
            ED.util.each(ED.data.measurementsList, function (a) {
                a = ED.data.measurements[a];
                a.units = ED.data.units[a.unitsId][ED.CURRENT_USER.unitsSystem];
                g.push(a)
            });
            $(c.DOM.measurements).append(ED.util.renderTemplate(c.DOM.measurementsTemplate, {
                measurements: g
            }));
            $(c.DOM.weight).show();
            $(c.DOM.showButton).show()
        };
        c.afterSetData = function (a) {
            ED.util.each(a.measurements, function (a, e) {
                $("#log-measurement-" + e).show()
            })
        };
        c.getNumSeen = function () {
            return c.log && 0 < ED.util.keys(c.log.measurements).length
        }
    });
    A.meals = ED.util.impl(a, function () {
        function a() {
            var e = $(c.DOM.dateInput).val(),
                g = $(c.DOM.mealRemoveId).val(),
                b = $("#log-meal-" + g);
            b.fadeTo("slow", 0.5);
            ED.shared.sendData("remove-log-meal", "meal_id=" + g + "&date=" + e, function (a) {
                "error" == a.status && "No log found" == a.errors && b.remove();
                "success" == a.status && (c.log = a.log, c.log.mealsById && c.log.mealsById[g] || b.remove(), $("body").trigger("newlog", c.log))
            });
            ED.util.hideModal($(c.DOM.mealRemoveModal))
        }
        var c = this;
        c.id = "meals";
        c.DOM = {
            mealsList: "#log-meals-list",
            mealTemplate: "log-meal-tmpl",
            mealId: "#log-meal-photo-meal-id",
            mealRemoveId: "#log-meal-remove-meal-id",
            mealRemoveButton: "#log-meal-remove-take",
            mealRemoveModal: "#log-meal-remove-popup",
            dateInput: 'input[name="date"]'
        };
        c.beforeSetData = function (a) {
            c.addMeals(a)
        };
        c.setupDOM = function () {
            ED.util.addClickHandler($(c.DOM.mealRemoveButton), a)
        };
        c.addMeals = function (a) {
            ED.util.each(a.mealsSorted, function (a) {
                0 === $("#log-meal-" + a.id).length && c.addMealDOM(a)
            })
        };
        c.addMealDOM = function (a, g) {
            var b = ED.util.renderTemplate(c.DOM.mealTemplate, {
                meals: [a]
            });
            $(c.DOM.mealsList).append(b);
            b = $("#log-meal-" + a.id);
            b.find(".log-meal-when").val(a.when);
            g && $('textarea[name="meal-' + a.id + '_what"]').focus();
            var d = b.find(".log-meal-photo-button");
            e(d, function () {
                $(c.DOM.mealId).val(a.id);
                var e = a.photo || ED.util.convertJSONToObject($('input[name="meal-' + a.id + '_photo"]').val());
                e ? $("#log-meal-photo-preview").attr("src", e.original).show() : $("#log-meal-photo-preview").hide()
            });
            b = b.find(".log-meal-remove-button a");
            e(b, function () {
                $(c.DOM.mealRemoveId).val(a.id)
            })
        };
        c.getNumSeen = function () {
            return c.log && ED.util.keys(c.log.meals).length
        }
    });
    A.mealfoods = ED.util.impl(a, function () {
        function a(e) {
            $("#log-photos").append(ED.util.renderTemplate("log-photo-tmpl", e));
            $("#log-photos").show();
            e.sourceUrl && (seenUrls[e.sourceUrl] = !0);
            $("#log-photo-" + e.id + " button").click(function () {
                $(this).html("Removing...");
                $(this).attr("disabled", !0);
                ED.shared.sendData("remove-food-log-photo", "id=" + e.id, function (a) {
                    $("#log-photo-" + e.id).remove();
                    0 === $("#log-photos").children().length && $("#log-photos").hide()
                })
            })
        }
        function e() {
            var a = $(d.DOM.dateInput).val(),
                c = $(d.DOM.mealRemoveId).val();
            ED.shared.sendData("remove-log-meal", "meal_id=" + c + "&date=" + a, function (a) {});
            ED.util.hideModal($(d.DOM.mealRemoveModal));
            $("#log-meal-" + c).remove()
        }
        function c(a) {
            A.meals.addMealDOM(new ED.models.Meal, !0)
        }
        function g(a) {
            a.preventDefault();
            $(d.DOM.foodsSection).hide();
            $(d.DOM.mealsSection).show();
            $(d.DOM.mealsInputGroup).length || $(d.DOM.addMealButton).click();
            $(d.DOM.foodsInput).val().length && ($(d.DOM.mealsInputGroup).first().val($(d.DOM.foodsInput).val()), $(d.DOM.foodsInput).val(""));
            n("save-food-log-meals-pref", "meals=True", function () {})
        }
        function b(a) {
            a.preventDefault();
            $(d.DOM.mealsSection).hide();
            $(d.DOM.foodsSection).show();
            $(d.DOM.mealsInputGroup).length && $(d.DOM.mealsInputGroup).first().val().length && ($(d.DOM.foodsInput).val($(d.DOM.mealsInputGroup).first().val()), $(d.DOM.mealsInputGroup).val(""));
            n("save-food-log-meals-pref", "meals=", function () {})
        }
        var d = this;
        d.id = "mealfoods";
        d.DOM = {
            photoPicker: "#log-foods-photo-picker",
            photoButton: "#log-foods-photo-button",
            photoInput: "#log-foods-photo-input",
            photoForm: "#log-foods-photo-form",
            addMealButton: "#log-meal-button",
            mealsList: "#log-meals-list",
            mealTemplate: "log-meal-tmpl",
            mealsInputGroup: ".log-meal-what",
            mealsTimeGroup: ".log-meal-when",
            addPhotoButtonGroup: ".log-meal-photo-button",
            photoUploadModal: "#log-meal-photo-picker",
            photoUploadInput: "#log-meal-photo-input",
            photoUploadForm: "#log-meal-photo-form",
            photoUploadMealId: "#log-meal-photo-meal-id",
            removeMealButtonGroup: ".log-meal-remove-button",
            mealRemoveId: "#log-meal-remove-meal-id",
            mealRemoveButton: "#log-meal-remove-take",
            mealRemoveModal: "#log-meal-remove-popup",
            mealsSwitchButton: "#log-meals-switch",
            foodsSwitchButton: "#log-foods-switch",
            mealsSection: "#log-meals",
            foodsSection: "#log-foods",
            foodsInput: "#log-foods-field",
            dateInput: '#log-form input[name="date"]'
        };
        d.setupDOM = function () {
            ED.util.addFileUploadHandler($(d.DOM.photoInput), "/action/save-food-log-photo", function (e) {
                "success" == e.status ? a(e.photo) : alert(e.errors);
                ED.util.hideModal($(d.DOM.photoPicker))
            });
            ED.util.addFileUploadHandler($(d.DOM.photoUploadInput), "/action/save-food-log-meal-photo", function (a) {
                var e = $(d.DOM.photoUploadMealId).val(),
                    c = $("#log-meal-" + e + " .log-meal-photo-button img");
                "success" == a.status ? ($('input[name="meal-' + e + '_photo"]').val(JSON.stringify(a.photo)), c.attr("src", a.photo.thumbnail), $(d.DOM.photoUploadInput).val("")) : alert(a.errors)
            }, function () {
                var a = $(d.DOM.photoUploadMealId).val();
                $("#log-meal-" + a + " .log-meal-photo-button img").attr("src", "/img/loading_trans_16x16.gif");
                ED.util.hideModal($(d.DOM.photoUploadModal))
            });
            ED.shared.setupModal($("#log-foods-photo-button"));
            ED.util.addClickHandler($(d.DOM.addMealButton), c);
            ED.util.addClickHandler($(d.DOM.mealRemoveButton), e);
            ED.util.addClickHandler($(d.DOM.mealsSwitchButton), g);
            ED.util.addClickHandler($(d.DOM.foodsSwitchButton), b);
            ED.CURRENT_USER.logMeals ? ($(d.DOM.foodsSection).hide(), $(d.DOM.mealsSection).show()) : ($(d.DOM.foodsSection).show(), $(d.DOM.mealsSection).hide())
        };
        d.beforeSetData = function (e) {
            e.meals || ED.CURRENT_USER.logMeals && !e.foods ? ($(d.DOM.foodsSection).hide(), $(d.DOM.mealsSection).show(), e.meals || ED.util.triggerClick($(d.DOM.addMealButton))) : ($(d.DOM.foodsSection).show(), $(d.DOM.mealsSection).hide());
            e.meals && e.foods && ($(d.DOM.foodsSection).show(), $(d.DOM.mealsSection).show());
            A.meals.addMeals(e);
            ED.util.each(e.photos, function (e) {
                a(e)
            })
        }
    });
    A.foodgoals = ED.util.impl(a, function () {
        function a() {
            var e = $(this).parent().find(".help-text");
            e.toggle();
            ED.shared.trackAction("foodgoals-help-click", e.attr("id"))
        }
        var c = this;
        c.id = "foodgoals";
        c.DOM = {
            habitsLists: ".log-habits",
            habitTemplate: "#log-habit-tmpl",
            sliderGroup: ".log-habit-slider input",
            helpButtons: ".log-habits .help-button"
        };
        c.setupDOM = function () {
            var g = {};
            $(c.DOM.habitsLists).empty();
            ED.util.each(ED.CURRENT_USER.habitsList, function (a) {
                a = ED.CURRENT_USER.habits[a];
                if (a.checked) {
                    var e = $("#log-habits-" + a.type);
                    e.find(".log-habits").append(ED.util.renderTemplate(c.DOM.habitTemplate, {
                        habits: [a]
                    }));
                    e.show();
                    g[a.type] = !0
                }
            });
            2 > ED.util.keys(g).length && $(".log-habits-type p:first-child").hide();
            $(c.DOM.sliderGroup).each(function (a) {
                $(this).colorSlider()
            });
            ED.util.addClickHandler($(c.DOM.helpButtons), a);
            e($(".log-habit .help-button"))
        };
        c.getNumSeen = function () {
            return c.log && 0 < ED.util.keys(c.log.habitsById).length
        }
    });
    A.foodbonuses = ED.util.impl(a, function () {
        var a = this;
        a.id = "foodbonuses";
        a.DOM = {
            bonusesList: "#log-foodgoals-bonuses",
            bonusTemplate: "log-foodgoals-bonus-tmpl"
        };
        a.setupDOM = function () {
            $(a.DOM.bonusesList).html(ED.util.renderTemplate(a.DOM.bonusTemplate, {
                bonuses: ED.data.bonusesSorted
            }))
        };
        a.getNumSeen = function () {
            return a.log && 0 < ED.util.keys(a.log.bonuses).length
        }
    });
    A.tags = ED.util.impl(a, function () {
        function a(c) {
            function g(a) {
                b.find(".log-tag").removeClass("tag-neutral tag-bad tag-good").addClass("tag-" + a)
            }
            $(e.DOM.tagsList).append(ED.util.renderTemplate(e.DOM.tagTemplate, {
                tags: [c]
            }));
            var b = $("#log-tag-" + c),
                d = ED.CURRENT_USER.tagsMeta[c];
            d && d.deleted ? ($('input[name="tagdeleted-' + c + '"]').val("on"), b.hide()) : (d && d.meaning && (g(d.meaning), ED.util.checkElement(b.find('input[value="' + d.meaning + '"]'))), ED.util.addChangeHandler($('input[name="tagmeaning-' + c + '"]'), function () {
                ED.util.hideModals();
                g($(this).val())
            }), ED.shared.setupModal(b.find(".icon-edit")), ED.util.addClickHandler(b.find(".log-tag-delete-button"), function () {
                ED.util.hideModals();
                $('input[name="tagdeleted-' + c + '"]').val("on");
                b.hide()
            }))
        }
        var e = this;
        e.id = "tags";
        e.DOM = {
            tagsList: "#log-tags-fields",
            tagTemplate: "log-tags-tmpl",
            newTagTemplate: "log-tags-new-tmpl",
            newTagsGroup: "#log-tags-new-fields input",
            newTagButton: "#log-tags-new-button",
            tagsInputGroup: '#log-tags-fields input[type="checkbox"]'
        };
        e.setupDOM = function () {
            $(e.DOM.tagsList).empty();
            ED.util.each(ED.CURRENT_USER.tags, a);
            ED.shared.setupModal($(e.DOM.newTagButton));
            ED.util.addClickHandler($("#log-tags-add-button"), function () {
                var e = $('#log-tags-add input[type="text"]').val();
                0 === $("#log-tag-" + e).length && (a(e), ED.util.checkElement($("#log-tag-" + e)))
            })
        };
        e.getNumSeen = function () {
            return e.log && 0 < ED.util.keys(e.log.tags).length
        }
    });
    A.notes = ED.util.impl(a, function () {
        var a = this;
        a.id = "notes";
        a.DOM = {
            notesInput: "#log-notes-field"
        };
        a.afterSetData = function (e) {
            ED.util.makeAutoResize($(a.DOM.notesInput))
        };
        a.getNumSeen = function () {
            return a.log && a.log.notes && 0 < a.log.notes.length
        }
    });
    return {
        sendData: n,
        sendForm: p,
        setupFormSave: function (a, e, c, g) {
            function b(a) {
                f.each(function () {
                    $(this).html($(this).attr("data-" + a + "msg"))
                })
            }
            function d() {
                ED.util.enableElement(f);
                b("start")
            }
            function h(a) {
                e.trigger("form-saved");
                ED.util.enableElement(f);
                c && c(a);
                if (!c || c && g)"success" == a.status ? (b("success"), e.find(".form-errors").remove(), $("#form-save-message").show(), (a = A.attr("data-redirect")) && ED.util.changePage(a)) : (d(), v(e, a.errors))
            }
            var f = e.find('button[type="submit"]');
            0 === f.length && (f = e.parent().find('button[type="submit"]'));
            var A = f;
            f.click(function (c) {
                A = $(this);
                c.preventDefault();
                b("success");
                ED.util.disableElement(f);
                p(a, e, h)
            });
            /*e.find("input").live("keydown", function (a) {
                if (13 == a.keyCode) return a.preventDefault(), !1
            });*/

            $(document).on("keydown", e.find("input"), function (a) {
                if (13 == a.keyCode) return a.preventDefault(), !1
            });
            u(e, d)
        },
        handleFormChange: u,
        renderErrors: v,
        getFormDate: function (a) {
            return ED.util.toShortDate(a)
        },
        sendError: h,
        trackAction: I,
        initFacebook: function () {
            var a = window.location.host.split(".")[1];
            FB.init({
                appId: {
                    "tracker-beta": "174062109319467",
                    trackerbeta: "195164023874291",
                    appspot: "192112490863069",
                    "everyday-app": "192112490863069",
                    everyday: "270106926347860",
                    eatdifferent: "217144298369411"
                }[a],
                status: !0,
                cookie: !0,
                xfbml: !0,
                oauth: !0
            })
        },
        setupLightboxes: B,
        setupTooltip: H,
        setupModal: e,
        setupFeedback: function () {
            var a = $("#feedback-popup"),
                e = $("#feedback-form");
            $("#feedback-form-anon");
            ED.util.addModalShowHandler(a, g);
            ED.util.addModalHideHandler(a, c);
            ED.util.addClickHandler($('#a[href="#feedback-popup"]'), L);
            ED.shared.setupFormSave("send-feedback", e, c);
            ED.shared.setupModal($('a[href="#feedback-popup"], #feedback-badge'))
        },
        loadFacebookBootstrap: function () {
            if (!window.FB) {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
                a.async = !0;
                document.getElementById("fb-root").appendChild(a)
            }
        },
        isTestServer: function () {
            return -1 < window.location.host.indexOf("localhost") || "192.168.1.14" == window.location.host
        },
        LogForm: a,
        logForms: A,
        setupLogHelpers: function () {
            ED.util.addClickHandler($(".page-header .help-button"), d)
        },
        setupStream: function () {
            function a(c) {
                e.removeClass("active");
                e.each(function () {
                    $(this).attr("data-users") == c && $(this).addClass("active")
                })
            }
            var e = $("#stream-filter-nav li");
            ED.util.addClickHandler(e, function () {
                var e = $(this).attr("data-users"),
                    c = ED.util.getFromCache("stream-filter-users");
                c && c != e && $("#stream-items").empty();
                ED.util.storeInCache("stream-filter-users", e);
                a(e);
                l()
            });
            var c = ED.util.getFromCache("stream-filter-users");
            c || (c = ED.CURRENT_USER && 0 < ED.CURRENT_USER.buddies.length ? "buddies" : "everyone");
            ED.CURRENT_USER && 0 === ED.CURRENT_USER.buddies.length && e.filter('[data-users="buddies"]').hide();
            a(c);
            l();
            ED.util.loadVisibleImages()
        },
        setupStreamTimer: function () {
            ED.STREAM_TIMER || (ED.STREAM_TIMER = window.setInterval(f, 6E5))
        },
        fetchStreamStatus: f,
        maybeFetchStream: z,
        fetchStream: l,
        renderStream: function (a) {
            function e(a, c) {
                var g = c.updated - a.updated;
                0 > g && (g = -0.9);
                0 < g && (g = 0.9);
                return g
            }
            var c = $("#stream-items");
            if (0 === a.length) $("#stream-loading").hide();
            else {
                ED.util.log("Rendering the stream");
                var g = {},
                    b = new Date,
                    d = new Date;
                ED.util.each(a, function (a) {
                    if (a.isStreamWorthy || a.streak) {
                        var e = a.date;
                        g[e] || (g[e] = []);
                        g[e].push(a);
                        a = ED.util.toDateObject(e);
                        a < b && (b = a);
                        a > d && (d = a)
                    }
                });
                a = ED.util.getDatesBetween(b, d);
                ED.util.each(a.reverse(), function (a) {
                    if (g[a] && 0 < g[a].length) {
                        var b = "stream-date-" + a.replace(/\//g, ""),
                            d = $("#" + b);
                        0 === d.length && (dateSectionHtml = ED.util.renderTemplate("stream-date-tmpl", {
                            dateId: b,
                            date: ED.util.toLongDate(a)
                        }), c.append(dateSectionHtml), d = $("#" + b));
                        g[a].sort(e);
                        ED.util.each(g[a].reverse(), function (a) {
                            a.id || (h("No id found for log " + a.user.id + " " + a.date), a.id = (new Date).getTime());
                            var e = "stream-item-log-" + a.id,
                                c = $("#" + e);
                            c.find(".stream-comment-form textarea").each(function () {
                                0 < $(this).val().length && ED.util.inView($(this)) && (a.commentText = $(this).val())
                            });
                            var g = ED.util.renderTemplate("stream-log-tmpl", {
                                userLog: a
                            });
                            if (c.length) {
                                c.replaceWith(g);
                                var c = $("#" + e),
                                    b = d.find(".stream-log").eq(0);
                                b && b.attr("id") != e && (c.remove(), b.before(g))
                            } else c.length || (d.find(".stream-date-items").prepend(g), d.show());
                            c = $("#" + e);
                            ED.CURRENT_USER && (ED.CURRENT_USER.lastSeen && a.updated && a.updated > ED.CURRENT_USER.lastSeen && !a.user.isCurrentUser()) && c.css({
                                backgroundColor: "rgba(255, 206, 82, .2)"
                            })
                        })
                    }
                });
                $(".stream-time").each(function () {
                    $(this).timeago()
                });
                $(".bonus-icon").each(function () {
                    var a = ED.data.bonuses[$(this).attr("data-bonus")] && ED.data.bonuses[$(this).attr("data-bonus")].label;
                    H($(this), function () {
                        return a
                    })
                });
                $(".stream-item .tooltipable").each(function () {
                    H($(this))
                });
                a = $(".stream-facebookshare-button");
                ED.mobile ? a.hide() : a.length && !window.FB && ED.shared.loadFacebookBootstrap();
                ED.util.addClickHandler($(".stream-facebookshare-button"), m);
                ED.util.addClickHandler($(".stream-comment-button"), y);
                ED.util.addClickHandler($(".stream-comment-cancel-button"), E);
                ED.util.addClickHandler($(".stream-comment-post-button"), G);
                ED.util.addClickHandler($(".stream-highfive-button"), q);
                1 != $(".stream-update").length || ED.mobile || ED.util.addClickHandler($(".stream-meals-img a"), C);
                B();
                var f = ED.util.getHashParam("time");
                f && $(".stream-meals-time time").each(function () {
                    if (f && ED.util.trimText($(this).html()) == f) {
                        var a = $(this).parent().parent();
                        a.addClass("highlighted");
                        $mealImg = a.find(".stream-meals-img a");
                        ED.util.triggerClick($mealImg)
                    }
                });
                $("#stream-loading").hide();
                ED.util.loadVisibleImages();
                ED.util.addWindowScrollHandler(ED.util.loadVisibleImages)
            }
        }
    }
}();
ED = ED || {};
ED.web = function () {
    function t() {
        $('select[name="body_log_day"]').val(ED.CURRENT_USER.bodyLogDay);
        $('input[name="body_log_on"]').attr("checked", ED.CURRENT_USER.bodyLogOn);
        $('input[name="food_log_on"]').attr("checked", ED.CURRENT_USER.foodLogOn);
        $('input[name="comments_on"]').attr("checked", ED.CURRENT_USER.commentsOn);
        null !== ED.CURRENT_USER.nudgesOn && $('input[name="nudges_on"]').attr("checked", ED.CURRENT_USER.nudgesOn);
        $('select[name="body_log_time"]').val(ED.CURRENT_USER.bodyLogTime);
        $('select[name="food_log_time"]').val(ED.CURRENT_USER.foodLogTime);
        $('input[name="vacation_on"]').attr("checked", ED.CURRENT_USER.vacationOn);
        ED.CURRENT_USER.vacationOn && ($('input[name="vacation_start"]').val(ED.CURRENT_USER.vacationStart), $('input[name="vacation_end"]').val(ED.CURRENT_USER.vacationEnd));
        $('input[name="vacation_start"]').calendricalDate({
            usa: !0
        });
        $('input[name="vacation_end"]').calendricalDate({
            usa: !0
        })
    }
    function n() {
        ED.util.each(ED.data.goalsList, function (a) {
            var g = ED.data.goals[a];
            g.id = a;
            $("#body-goals-main").append(ED.util.renderTemplate("body-goals-main-tmpl", g))
        });
        $('select[name="units_system"]').val(ED.CURRENT_USER.unitsSystem);
        $('input[value="' + ED.CURRENT_USER.bodyGoal + '"]').attr("checked", "checked");
        $("#body-goals-main input").change(p)
    }
    function p() {
        if (0 !== $(".start-content").length) {
            var a = $('input[name="body_goal"]:checked').val();
            ED.util.each(ED.data.habitsLists, function (g, c) {
                var b = $("#" + c + "-habits-list");
                ED.util.each(g, function (c) {
                    var g = b.find("input[name=habit-" + c + "]");
                    ED.util.uncheckElement(g);
                    ED.data.habits[c].suggested && ED.data.habits[c].suggested[a] && ED.util.checkElement(g)
                })
            })
        }
    }
    function u() {
        ED.util.each(["negative", "positive"], function (a) {
            var g = $("#" + a + "-habits-list");
            ED.util.each(ED.data.habitsLists[a], function (c) {
                var b = ED.data.habits[c];
                b.type = a;
                g.append(ED.util.renderTemplate("habits-item-tmpl", {
                    habits: [b]
                }));
                b = $("#habits-item-" + c);
                ED.shared.setupModal(b.find(".help-button"));
                ED.data.habits[c].suggested && b.show()
            })
        });
        p();
        ED.util.each(ED.CURRENT_USER.habits, function (a, g) {
            var c = $("#" + a.type + "-habits-list");
            ED.data.habits[g] || c.append(ED.util.renderTemplate("habits-custom-tmpl", {
                habits: [a]
            }));
            c = $("#habits-item-" + g);
            c.find("textarea").attr("readonly", !0);
            c.show();
            a.checked && ED.util.checkElement(c.find("input"))
        });
        ED.util.addClickHandler($(".habits-item textarea"), function () {
            $(this).attr("readonly", !1).removeAttr("readonly")
        });
        $(".habits-add-button").click(function (a) {
            a = $(this).data("target");
            var g = $(this).data("prefix"),
                c = "placeholder-" + (new Date).getTime();
            $(a).append(ED.util.renderTemplate("habits-custom-tmpl", {
                habits: [{
                    check: !0,
                    type: g,
                    id: c
                }]
            }));
            $('textarea[name="' + c + '-label"]').focus();
            $("#food-goals-form").trigger("reset-button")
        });
        ED.util.addClickHandler($(".habits-show-button"), function () {
            var a = $(this).data("target");
            $(a).find(".habits-item").show();
            $(this).hide();
            $(this).prev().hide()
        })
    }
    function v() {
        function a() {
            var e = $("input[name=share_updates_with]:checked").val(),
                c = $('input[name="share_body_with"]');
            c.filter("[value=" + e + "]").attr("checked", !0);
            1 == e ? (ED.util.disableElement(c), ED.util.enableElement(c.filter('[value="1"]'))) : 10 == e ? (ED.util.enableElement(c), ED.util.disableElement(c.filter('[value="666"]'))) : ED.util.enableElement(c)
        }
        $("#sharing-form input").attr("checked", !1).removeAttr("checked");
        a();
        ED.util.each(["share_updates_with", "share_body_with"], function (a) {
            var e = ED.util.toCamelCase(a);
            $('#sharing-form input[name="' + a + '"]').filter('[value="' + ED.CURRENT_USER[e] + '"]').attr("checked", !0)
        });
        $('input[name="share_updates_with"]').click(a)
    }
    function s(a) {
        return a.session ? a.session.uid : a.authResponse ? a.authResponse.userID : !1
    }
    function z(a) {
        function g(c) {
            c.errors ? $("#login-facebook-errors").html(c.errors) : ED.util.changePage(a)
        }
        ED.util.isDefined(window.FB) ? (ED.util.isDefined(FB.getLoginStatus) || (alert("Uh oh! It looks like the Facebook API didn't load. Perhaps try reloading or using a different browser?"), ED.shared.sendError("The FB.getLoginStatus function is undefined/null")), FB.getLoginStatus(function (a) {
            s(a) ? ED.shared.sendData("handle-facebook-login", "uid=" + s(a), function (a) {
                g(a)
            }) : FB.login(function (a) {
                s(a) && ED.shared.sendData("handle-facebook-login", "uid=" + s(a), function (a) {
                    g(a)
                })
            }, {
                scope: "user_birthday,email,user_location"
            })
        })) : (alert("Uh oh! It looks like the Facebook API didn't load. Perhaps try reloading or using a different browser?"), ED.shared.sendError("The FB API did not load."))
    }
    function w() {
        function a(e) {
            e += "?rand=" + (new Date).getTime();
            $("#profile-photo").attr("src", e)
        }
        var g = $('input[name="photo"]');
        ED.util.addFileUploadHandler(g, "/action/save-profile-photo", function (c) {
            c.photo ? ($('input[name="photo_url"]').val(c.photo.url), a(c.photo.url)) : (a("/img/blankpic.png"), alert(c.errors));
            ED.util.enableElement($('button[type="submit"]'))
        }, function () {
            a("/img/loading_big.gif");
            ED.util.disableElement($('button[type="submit"]'))
        });
        ED.CURRENT_USER && ED.CURRENT_USER.photoUrl && a(ED.CURRENT_USER.photoUrl)
    }
    function b() {
        $("a").each(function () {
            var a = $(this).attr("href");
            a && ((-1 < a.indexOf("http://www.amazon.com") || -1 < a.indexOf("http://amazon.com")) && 0 > a.indexOf("tag=")) && $(this).attr("href", a + "?tag=eatdifferent-20")
        })
    }
    function f() {
        var a = {
            oils: "pantry"
        };
        ED.shared.sendData("get-tip", "", function (g) {
            g.tip && (g = g.tip, g.template = a[g.category] || g.category, $("#home-sidebar-tip").append(ED.util.renderTemplate("tip-" + g.template + "-tmpl", g)).show(), b())
        })
    }
    function l() {
        $("#buddies-email-button").click(function (a) {
            $("#form-save-indicator").show();
            $("#buddies-email-message").html("");
            a.preventDefault();
            ED.shared.sendData("invite-buddies", $("#buddies-email-form").serialize(), function (a) {
                $("#form-save-indicator").hide();
                $("#buddies-email-results").html("");
                ED.util.each(a.results, function (a) {
                    $("#buddies-email-results").append("<li>\u00bb " + a.address + ": " + a.status)
                });
                $("#buddies-email-input").val("")
            })
        });
        $("#buddies-email-button").attr("disabled", !1).removeAttr("disabled");
        (function () {
            ED.shared.sendData("get-buddies", "", function (a) {
                a = a.users;
                0 < a.length && ($("#buddies-already").show(), $("#buddies-invite-header").show());
                ED.util.each(a, function (a) {
                    $("#buddies-already-list").append(ED.util.renderTemplate("buddy-info-tmpl", a))
                })
            })
        })();
        (function () {
            ED.shared.sendData("get-requests", "", function (a) {
                0 < a.users.length && ($("#buddies-requests").show(), $("#buddies-invite-header").show(), ED.CURRENT_USER.requests = [], ED.util.each(a.users, function (a) {
                    $("#buddies-requests-list").append(ED.util.renderTemplate("user-info-tmpl", a));
                    ED.CURRENT_USER.requests.push(a.id)
                }), $("#buddies-requests-list form").each(function (a, e) {
                    ED.shared.setupFormSave("confirm-request", $(e))
                }))
            })
        })()
    }
    function m() {
        ED.CURRENT_USER || $("#anon-user-promo").show()
    }
    function y(a) {
        a.find("img").each(function (a) {
            $(this).data("src") && "" === this.src && (this.src = $(this).data("src"))
        });
        a.show()
    }
    function E(a) {
        function b(a, e) {
            return e.latestLogDiff - a.latestLogDiff
        }
        ED.util.isDefined(a) ? 0 < a.length && (a.sort(b), $("#lazy-users").append(ED.util.renderTemplate("lazy-user-tmpl", {
            users: a
        })), $("#lazy-users").show(), $(".nudge-form").each(function (a, e) {
            ED.shared.setupFormSave("nudge-user", $(e))
        })) : (alert("Sorry, there was a problem loading the stats, please reload."), ED.shared.sendError("We didnt see a user object when trying to render stats."))
    }
    function G(a, b, c, d) {
        if (ED.util.isDefined(a)) if (ED.util.isDefined(b)) if (0 === ED.util.keys(b).length) a.lastLogDate ? $("#stats-norecent").show() : $("#stats-none").show(), $("#user-feed").hide(), $("#user-stats").hide(), $("#stats-bodylog-reminder").hide();
        else {
            var h = {},
                f = new Date,
                k = new Date;
            ED.util.each(b, function (a) {
                a.isPrivate || (h[a.date] = a, a = ED.util.toDateObject(a.date), a < f && (f = a), a > k && (k = a))
            });
            c = c || ED.util.getDatesBetween(f, k);
            d.find(".stats-table").remove();
            d.append(ED.util.renderTemplate("stats-table-tmpl", {}));
            b = d.find(".stats-table");
            var r = b.children("thead"),
                l = b.children("tbody"),
                m = !1,
                n = !1,
                p = !1;
            if (7 < c.length || 400 > $(window).width()) b.addClass("manydays"), n = !0;
            d.hasClass("stats-miniview") && (p = !0);
            a.isCurrentUser() || (m = !0);
            var u = a.bodyGoals,
                t = [],
                v = Math.floor(80 / c.length),
                s = {},
                y = [],
                z = !1;
            d = {};
            var w = !1,
                B = [],
                C = !1,
                G = [],
                E = [],
                I = [],
                H = !1,
                S = [],
                T = !1,
                U = [],
                V = !1,
                W = [],
                X = !1,
                Y = [];
            ED.util.each(c, function (b, d) {
                var g = new Date(b),
                    k = g.getMonth() + 1 + "/" + g.getDate(),
                    f = "/log?date=" + b,
                    l = "/user/" + a.id + "/log?date=" + b;
                m && (f = l);
                h[b] && (h[b].url = l);
                l = ED.util.toLongDate(g);
                g = ED.util.toShortWeekday(g);
                if (n) {
                    var r;
                    0 === d && (r = Math.ceil(c.length / 2), t.push({
                        url: f,
                        label: k,
                        colspan: r,
                        includeBorder: 2 < r,
                        tooltip: l,
                        weekday: g
                    }));
                    d == c.length - 1 && (r = Math.floor(c.length / 2), t.push({
                        url: f,
                        label: k,
                        colspan: r,
                        includeBorder: 2 < r,
                        tooltip: l,
                        weekday: g
                    }))
                } else t.push({
                    url: f,
                    label: k,
                    width: v,
                    colspan: 1,
                    tooltip: l,
                    weekday: g
                });
                Y.push(h[b])
            });
            ED.util.each(ED.data.measurements, function (b, g) {
                var d = !1;
                ED.util.each(c, function (a) {
                    (a = h[a]) && (a.measurements && a.measurements[g] && "" !== a.measurements[g].value) && (d = !0)
                });
                if (d) {
                    var k = null;
                    u[g] && (k = u[g].convertedValue);
                    s[g] = {
                        label: b.label,
                        target: k,
                        id: g,
                        colspan: c.length,
                        data: a.processMeasurementData(g, c, h)
                    }
                }
            });
            var Z = {
                negative: [],
                positive: []
            },
                P = {
                    negative: [],
                    positive: []
                },
                K = {},
                aa = 0;
            ED.util.each(a.habitsList, function (b) {
                K[b] = [];
                var g = !1;
                ED.util.each(c, function (a) {
                    (a = h[a]) && a.habitsById && a.habitsById[b] ? (g = !0, K[b].push(a.habitsById[b])) : K[b].push({
                        color: "transparent",
                        label: ""
                    })
                });
                if (g) {
                    var d = a.habits[b];
                    Z[d.type].push(b);
                    P[d.type].push(d);
                    aa++
                }
            });
            ED.util.each(c, function (a) {
                var c = h[a],
                    e = !1,
                    b = "",
                    g = [],
                    d = [],
                    k = [],
                    f = [],
                    l = "",
                    r = "",
                    F = {
                        num: 0
                    };
                c && (c.period && (z = e = !0), c.meals && (ED.util.each(c.meals, function (a) {
                    b += "<time>(" + a.when + ")</time> " + a.what + "<br>"
                }), w = !0, g = c.meals), c.foods && (b += ED.util.linkifyText(c.foods.replace(/\n/g, "<br>")), w = !0), c.meals && c.meals.length && ED.util.each(c.meals, function (a) {
                    a.photo && (a.photo.caption = a.what, d.push(a.photo), H = !0)
                }), c.photos && c.photos.length && (d = d.concat(c.photos), H = !0), ED.util.each(d, function (a) {
                    a.group = c.id
                }), c.bonuses && ED.util.each(h[a].bonuses, function (a, c) {
                    T = !0;
                    k.push({
                        id: c,
                        tooltip: ED.data.bonuses[c].label
                    })
                }), c.tags && c.tags.length && (f = c.tags, V = !0), null !== c.notes && (l = c.notes, r = c.notesHtml, C = !0), a = c.logComments && c.logComments.length || 0, 0 < a && (F = {
                    num: a,
                    url: c.url
                }, X = !0));
                y.push({
                    period: e
                });
                E.push({
                    meals: g,
                    foods: b
                });
                G.push({
                    foods: b
                });
                I.push({
                    photos: d
                });
                S.push({
                    bonuses: k
                });
                U.push({
                    tags: f
                });
                B.push({
                    notes: l,
                    notesHtml: r
                });
                W.push(F)
            });
            if (p) {
                r.append(ED.util.renderTemplate("quickstats-table-dates-tmpl", {
                    dates: t
                }));
                if (a.shareMeasurements() && (s.weight || "health" != a.bodyGoal)) {
                    var J = [];
                    ED.util.each(c, function (a) {
                        J.push(-1)
                    });
                    s.weight && (J = [], ED.util.each(s.weight.data.recordedData, function (a) {
                        a ? J.push(a) : J.push(null)
                    }));
                    s.weight && 2 <= s.weight.data.numRecorded && ED.util.supportsSVG() ? (l.append(ED.util.renderTemplate("quickstats-table-measurements-chart-tmpl", {
                        dates: J
                    })), r = l.find(".quickstats-table-measurements"), r = r.find(".quickstats-table-measurements-chart"), r.css({
                        height: "35px",
                        padding: "0px",
                        overflow: "visible"
                    }), q(r, s.weight, s.weight.data)) : (l.append(ED.util.renderTemplate("quickstats-table-measurements-tmpl", {
                        dates: J
                    })), r = l.find(".quickstats-table-measurements"), r.find(".check-value").html("&#10003"))
                }
                l.append(ED.util.renderTemplate("quickstats-table-meals-tmpl", {
                    dates: E
                }));
                ED.util.each(P, function (c, b) {
                    ED.util.each(c, function (g, d) {
                        var k = 0 === d ? c.length : 0,
                            h = "goals";
                        a.newGoalsFormat && (h = "positive" == b ? "plus" : "minus");
                        l.append(ED.util.renderTemplate("quickstats-table-habits-tmpl", {
                            rowspan: k,
                            icon: h,
                            dates: K[g.id]
                        }))
                    })
                });
                $(".colors-value div").css({
                    height: Math.ceil(40 / ED.util.keys(d).length)
                });
                b.find("tr td:last-child").addClass("today-column")
            } else r.append(ED.util.renderTemplate("stats-table-dates-tmpl", {
                dates: t
            })), a.shareMeasurements() && (ED.util.each(s, function (a, e) {
                var b = Array(c.length);
                s[e] && (b = [], ED.util.each(s[e].data.recordedData, function (a) {
                    a ? b.push({
                        measurement: a
                    }) : b.push({
                        measurement: null
                    })
                }));
                !ED.util.supportsSVG() || 2 > a.data.numRecorded ? (a.dates = b, l.append(ED.util.renderTemplate("stats-table-measurements-text-tmpl", a))) : (l.append(ED.util.renderTemplate("stats-table-measurements-tmpl", a)), q($("#stats-table-" + e + "-chart"), a, a.data))
            }), z && l.append(ED.util.renderTemplate("stats-table-period-tmpl", {
                dates: y
            }))), w && (b = "stats-table-foods-tmpl", n && (b = "stats-table-foods-mini-tmpl"), l.append(ED.util.renderTemplate(b, {
                dates: E
            }))), H && l.append(ED.util.renderTemplate("stats-table-photos-tmpl", {
                dates: I
            })), ED.util.each(P, function (a, c) {
                ED.util.each(a, function (a) {
                    l.append(ED.util.renderTemplate("stats-table-habits-tmpl", {
                        habit: a,
                        dates: K[a.id]
                    }))
                })
            }), T && l.append(ED.util.renderTemplate("stats-table-bonuses-tmpl", {
                dates: S
            })), V && l.append(ED.util.renderTemplate("stats-table-tags-tmpl", {
                dates: U
            })), C && (b = "stats-table-notes-tmpl", n && (b = "stats-table-notes-mini-tmpl"), l.append(ED.util.renderTemplate(b, {
                dates: B
            }))), X && l.append(ED.util.renderTemplate("stats-table-comments-tmpl", {
                dates: W
            })), ED.shared.setupLightboxes();
            $(".stats-table .tooltipable").each(function () {
                ED.shared.setupTooltip($(this))
            });
            $(".stats-table .tag").each(function () {
                var a = $(this).text();
                ED.CURRENT_USER.tagsMeta[a] && $(this).addClass("tag-" + ED.CURRENT_USER.tagsMeta[a].meaning)
            })
        } else alert("Sorry, there was a problem loading the stats, please reload."), ED.shared.sendError("We didnt see a logs object when trying to render stats.");
        else alert("Sorry, there was a problem loading the stats, please reload."), ED.shared.sendError("We didnt see a user object when trying to render stats.")
    }
    function q(a, b, c, d) {
        var h = c.recordedData.length,
            f = {
                chart: {
                    backgroundColor: "transparent",
                    defaultSeriesType: "line",
                    height: 125,
                    marginTop: 0,
                    marginLeft: 0,
                    marginBottom: 0,
                    spacingTop: 0,
                    spacingRight: 0,
                    spacingBottom: 0,
                    spacingLeft: 0,
                    renderTo: a[0]
                },
                xAxis: {
                    labels: {
                        enabled: !1
                    },
                    lineWidth: 0,
                    min: 0
                },
                yAxis: {
                    gridLineWidth: 0,
                    tickWidth: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: !1
                    }
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: !1
                },
                plotOptions: {
                    series: {
                        animation: !1
                    },
                    line: {
                        dataLabels: {
                            style: {
                                fontWeight: "bold"
                            },
                            enabled: !0,
                            align: "right",
                            formatter: function () {
                                if ("first" == this.point.id || "last" == this.point.id) return this.y && this.y.toFixed(1)
                            }
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return this.y && this.y.toFixed(1)
                    }
                },
                credits: {
                    enabled: !1
                },
                colors: ["#ddd", "#000"]
            };
        b = b.target;
        var k = c.max - c.min,
            l = k / 6;
        f.yAxis.min = c.min - l;
        f.yAxis.max = c.max + l;
        if (c.recordedData[0] == c.max || c.recordedData[h - 1] == c.max) f.yAxis.max = c.max + k;
        f.xAxis.max = 24 * h;
        f.xAxis.plotLines = [];
        c.recordedPoints = [];
        c.averagePoints = [];
        c.missingPoints = [];
        for (k = 0; k < h; k++) {
            for (var l = 24 * k + 6, m = !0, n = !0, p = k, q = 0; q < k; q++) c.recordedData[q] && (m = !1);
            for (q = h - 1; q > k; q--) c.recordedData[q] && (n = !1);
            m && (p = "first");
            n && (p = "last");
            m && d && (f.xAxis.min = Math.max(-24, l - 48));
            c.recordedPoints[k] = {
                x: l,
                y: c.recordedData[k],
                id: p,
                marker: {
                    enabled: m || n
                }
            };
            c.averagePoints[k] = {
                x: l,
                y: c.averageData[k] && c.averageData[k].toFixed(1),
                id: p
            };
            c.missingPoints[k] = {
                x: l,
                y: c.missingData[k] || null,
                id: p
            };
            0 < k && f.xAxis.plotLines.push({
                color: "#cccccc",
                width: 1,
                value: 24 * k
            })
        }
        a.width();
        f.xAxis.plotLines = [];
        f.chart.height = a.height();
        60 > a.height() && (f.xAxis.tickLength = 0, f.plotOptions.line.dataLabels.enabled = !1);
        f.series = [{
            data: c.missingPoints,
            dashStyle: "longDash",
            color: "#000000",
            dataLabels: {
                enabled: !1
            },
            marker: {
                enabled: !1
            },
            enableMouseTracking: !1
        }, {
            data: c.recordedPoints,
            color: "#000000",
            dataLabels: {
                color: "#000000"
            },
            enableMouseTracking: !0,
            marker: {
                states: {
                    hover: {
                        enabled: !0
                    }
                }
            }
        }, {
            data: c.averagePoints,
            color: "#bbbbbb",
            dataLabels: {
                enabled: !1
            },
            enableMouseTracking: !1,
            marker: {
                enabled: !1
            }
        }];
        c.dataRecorded || (f.yAxis.min = b - 5, f.yAxis.max = b + 5);
        new Highcharts.Chart(f)
    }
    function C() {
        var a = !1;
        0 < window.location.search.length && $("#content-nav").find("a[href='" + window.location.search + "']").each(function () {
            $(this).parent().addClass("active");
            a = !0
        });
        a || $("#content-nav").find("a[href='" + window.location.pathname + "']").each(function () {
            $(this).parent().addClass("active")
        });
        0 === $("#content-nav .active").length && $("#content-nav li:first-child").addClass("active")
    }

    function B(e, b) {
        var c = ED.util.getUrlParam("days_ago") || 7;
        ED.shared.sendData("get-logs", "days_ago=" + c + "&id=" + b, function (c) {
            G(c.user, c.logs, c.dates, e);
            (!c.user.oldestLogDate || 7 > ED.util.getDatesSince(c.user.oldestLogDate)) && $("#content-nav").hide();
            a(c.logs)
        }, null, !1);
        C();
        ED.shared.setupModal($("#logs-download-link"))
    }
    function a(a) {
        ED.CURRENT_USER && (0 < a.length && $("#logs-download-link")[0]) && ($("#logs-download-link").show(), $("#logs-download-email").val(ED.CURRENT_USER.email), ED.shared.setupFormSave("export-logs", $("#logs-download-form"), function () {
            ED.util.hideModal($("#logs-download-popup"))
        }))
    }
    function d(a, b, c) {
        var d = {};
        ED.util.each(b, function (a) {
            a.isPrivate || (d[a.date] = a)
        });
        var f = d[c[c.length - 1]];
        G(a, b, c, $("#quickstats-week"));
        a.shareMeasurements() ? f && f.measurements && f.measurements.weight ? ($("#quickstats-bodymark").html("&#10004;").css({
            color: "green"
        }), $("#quickstats-bodytext").html(" (" + f.measurements.weight.displayString + ")")) : ($("#quickstats-bodymark").html("&#10008;").css({
            color: "red"
        }), $("#quickstats-bodytext").html(" (Not updated yet)")) : $("#quickstats-body").hide();
        c = "";
        if (f && f.foods && f.foods.length) c = f.foods;
        else if (f && f.meals && f.meals.length) {
            var h = [];
            ED.util.each(f.meals, function (a) {
                a.what && 0 < a.what.length && h.push(a.what)
            });
            c = h.length ? h.join(", ") : f.meals.length + ""
        }
        0 < c.length ? (c = ED.util.truncateText(c, 20), $("#quickstats-foodmark").html("&#10004;").css({
            color: "green"
        }), $("#quickstats-foodtext").html(" (" + c + ")")) : ($("#quickstats-foodmark").html("&#10008;").css({
            color: "red"
        }), $("#quickstats-foodtext").html(" (Not updated yet)"));
        var k = 0,
            l = 0;
        ED.util.each(b, function (a) {
            a.isBodyRecorded && k++;
            a.isFoodRecorded && l++
        });
        b = "";
        k || l || (b = "We haven't seen any logs from {{ them }} in the last week.", b = a.isCurrentUser() ? b + " Start today!" : b + " Remind them to log!");
        $("#quickstats-week").append(a.personalizeString(b))
    }
    function h(a, b) {
        function c(a, c) {
            if ("undefined" == a && "undefined" != c) return 1;
            if ("undefined" == c && "undefined" != a) return -1;
            if (isNaN(a.charAt(0))) return a = a.toLowerCase(), c = c.toLowerCase(), a < c ? -1 : a > c ? 1 : 0;
            isNaN(a.charAt(0)) || (a = a.replace("+", ""));
            isNaN(c.charAt(0)) || (c = c.replace("+", ""));
            return c - a
        }
        function d(a, c) {
            function e() {
                a = parseFloat(a, 10);
                var b = 0,
                    d = 99999;
                ED.util.each(c, function (a) {
                    a = parseFloat(a, 10);
                    a > b && (b = a);
                    a < d && (d = a)
                });
                a /= b;
                b = 1;
                d = 0;
                a = b - a;
                var g = 255 - Math.floor(150 * Math.cos(0.5 * -a * Math.PI / (b - d)));
                return "rgb(" + g + "," + g + ",255)"
            }
            return isNaN(a.charAt(0)) ? {
                "true": "#49804A",
                "false": "#990000",
                male: "#0000ff",
                female: "#FF92BB",
                undefined: "#CCCCCC",
                chrome: "#0CB30F",
                ie: "#FF2A00",
                safari: "#EFF700",
                firefox: "#F78C00",
                Windows: "#FF2A00",
                Linux: "#F78C00",
                OS: "#0CB30F",
                "(iPhone;": "#FF2A00",
                "(iPad;": "#FF2A00",
                home: "#0CB30F",
                start_body_goals: "#FF2A00",
                start_food_goals: "#FF2A00",
                start_reminders: "#FF2A00",
                start_buddies: "#FF2A00"
            }[a.split(" ")[0]] : e()
        }
        var f = {},
            h = a.length;
        $("#admin-total").html("Total users: " + h);
        var k = {
            chart: {
                height: 70,
                animation: !1,
                renderTo: "container",
                defaultSeriesType: "bar",
                spacingTop: 0
            },
            credits: {
                enabled: !1
            },
            tooltip: {
                formatter: function () {
                    return "" + this.series.name + ": " + this.y.toFixed(2) + "%"
                }
            },
            title: {
                text: ""
            },
            legend: {
                enabled: !1
            },
            xAxis: {
                title: {
                    text: null
                },
                labels: {
                    enabled: !1
                }
            },
            yAxis: {
                plotLines: [],
                title: {
                    text: null
                },
                min: 0,
                max: 100,
                labels: {
                    enabled: !1
                }
            },
            plotOptions: {
                series: {
                    stacking: "percent"
                }
            }
        };
        ED.util.each(a, function (a) {
            ED.util.each(b, function (c) {
                f[c] || (f[c] = {});
                profileValue = a[c];
                f[c][profileValue] || (f[c][profileValue] = 0);
                f[c][profileValue]++
            })
        });
        ED.util.each(b, function (a) {
            profileValues = ED.util.keys(f[a]).sort(c);
            if (60 > profileValues.length) {
                var b = "#admin-profiles-" + a + "-chart";
                $("<div></div>").attr("id", b).appendTo($("#admin-charts"));
                k.chart.renderTo = b;
                k.title.text = a;
                k.series = [];
                k.xAxis.categories = [a];
                ED.util.each(profileValues, function (c) {
                    var b = {
                        name: c,
                        data: [100 * (f[a][c] / h)]
                    };
                    d(c, profileValues) && (b.color = d(c, profileValues));
                    k.series.push(b)
                });
                new Highcharts.Chart(k)
            }
        })
    }
    function I() {
        ED.util.isSmallScreen() || $(".promo").each(function () {
            var a = $(this).attr("id");
            ED.util.getFromCache(a) ? $(this).hide() : y($(this));
            var b = $(this).find(".close");
            b.click(function (c) {
                c.preventDefault();
                ED.util.storeInCache(a, "hidden");
                $(this).parent().hide()
            });
            ED.shared.setupTooltip(b)
        })
    }
    ED.BASE_RPC_URL = "/action/";
    ED.shared.isTestServer() && (ED.BASE_URL = "http://localhost.eatdifferent.com");
    var H = {
        admin: function () {
            C()
        },
        admin_selenium: function () {
            var a = $("#admin-selenium-result"),
                b = $("#admin-selenium-form"),
                c = $("#admin-selenium-form button");
            ED.util.addClickHandler(c, function (c) {
                a.hide();
                c.preventDefault();
                c = {
                    url: b.find('input[name="target"]').val(),
                    type: "POST",
                    data: b.find('textarea[name="body"]').val(),
                    success: function (c, b, d) {
                        a.html(c).show()
                    },
                    error: function (c, b, d) {
                        a.html("ERROR:" + b).show()
                    }
                };
                $.ajax(c)
            });
            ED.util.enableElement(c)
        },
        admin_profiles: function () {
            ED.shared.sendData("get-user-data", "clear_cache=" + (ED.util.getUrlParam("clear_cache") || ""), function (a) {
                ED.util.each(a.users, function (a) {
                    a.setAdminProperties()
                });
                $("#admin-profiles-table tbody:first").append(ED.util.renderTemplate("admin-profiles-row-tmpl", a.users));
                $(".tablesorter").tablesorter();
                h(a.users, "fromFacebook gender age location startStep bodyGoal numBodyGoals numFoodGoals browserName browser os".split(" "))
            })
        },
        admin_reminders: function () {
            ED.shared.sendData("get-user-data", "clear_cache=" + (ED.util.getUrlParam("clear_cache") || ""), function (a) {
                ED.util.each(a.users, function (a) {
                    a.setAdminProperties()
                });
                $("#admin-reminders-table tbody:first").append(ED.util.renderTemplate("admin-reminders-row-tmpl", a.users));
                $(".tablesorter").tablesorter();
                h(a.users, "timezone bodyLogOn bodyLogDay bodyLogTime foodLogOn foodLogTime".split(" "))
            })
        },
        admin_usage: function () {
            function a(b) {
                range = 0;
                return range = 6 > b ? b : 10 > b ? "6+" : "10+"
            }
            ED.shared.sendData("get-usage-data", "", function (b) {
                ED.util.each(b.users, function (c) {
                    c.setAdminProperties();
                    c.buddiesRange = a(c.buddies.length);
                    c.logsRange = a(c.totalLogs);
                    c.commentsRange = a(c.totalComments)
                });
                $("#admin-usage-table tbody:first").append(ED.util.renderTemplate("admin-usage-row-tmpl", b.users));
                $(".tablesorter").tablesorter();
                h(b.users, ["hasApp", "buddiesRange", "logsRange", "commentsRange"])
            })
        },
        landing: function () {},
        tour: function () {},
        start_signup: function () {
            $("#facebook-button").click(function () {
                window.FB && window.FB.login ? FB.login(function (a) {
                    a.authResponse && FB.api("/me", function (a) {
                        var c = $("#facebook-signup-form");
                        c.children('[name="first_name"]').val(a.first_name);
                        c.children('[name="last_name"]').val(a.last_name);
                        c.children('[name="email"]').val(a.email);
                        c.children('[name="facebook_id"]').val(a.id);
                        c.children('[name="location"]').val(a.location && a.location.name);
                        c.children('[name="gender"]').val(a.gender);
                        c.children('[name="phone"]').val(a.phone);
                        if (a.birthday) {
                            var b = a.birthday.split("/");
                            c.children('[name="birthday_year"]').val(b[2]);
                            c.children('[name="birthday_month"]').val(b[0]);
                            c.children('[name="birthday_day"]').val(b[1])
                        }
                        c.children('[name="photo_url"]').val("http://graph.facebook.com/" + a.id + "/picture?type=large");
                        ED.shared.sendData("handle-facebook-signup", c.serialize(), function (a) {
                            ED.util.changePage("/start/goals")
                        })
                    })
                }, {
                    scope: "user_birthday,email,user_location"
                }) : alert("Sorry, looks like we can't sign you up using Facebook - maybe it's blocked. Please sign up via email or send us feedback if you think it's a problem on our side.")
            });
            w();
            ED.shared.setupFormSave("handle-email-signup", $("#email-signup-form"));
            ED.util.enableElement($('#email-signup-form button[type="submit"]'))
        },
        start_goals: function () {
            n();
            u();
            ED.shared.setupFormSave("save-goals", $("#goals-form"));
            ED.util.enableElement($('#goals-form button[type="submit"]'))
        },
        start_reminders: function () {
            t();
            $('input[name="body_log_on"]').attr("checked", !0);
            $('input[name="food_log_on"]').attr("checked", !0);
            ED.shared.setupFormSave("save-reminders-settings", $("#reminders-form"));
            ED.util.enableElement($('#reminders-form button[type="submit"]'))
        },
        start_buddies: function () {
            l();
            var a = $(".start-content .save-button");
            ED.util.addClickHandler(a, function () {
                ED.util.changePage("/home")
            });
            ED.util.enableElement(a)
        },
        start_sharing: function () {
            v();
            var a = $("#sharing-form .save-button");
            ED.shared.setupFormSave("save-settings-sharing", $("#sharing-form"));
            ED.util.enableElement(a)
        },
        home: function () {
            ED.CURRENT_USER.isNewbie ? $("#home-starttips").each(function () {
                var a = $(this).attr("id");
                ED.util.getFromCache(a) ? ($(this).hide(), I()) : y($("#home-starttips"));
                var b = $(this).find(".close");
                b.click(function (c) {
                    c.preventDefault();
                    ED.util.storeInCache(a, "hidden");
                    $(this).parent().hide()
                });
                ED.shared.setupTooltip(b)
            }) : I();
            $("#invite-buddies").show();
            ED.shared.sendData("get-buddies", "lazy=true", function (a) {
                E(a.users)
            });
            ED.shared.sendData("get-logs", "days_ago=7&id=" + ED.CURRENT_USER.id, function (a) {
                d(a.user, a.logs, a.dates)
            });
            ED.shared.setupStream();
            window.setTimeout(f, 1E3)
        },
        stats: function () {
            B($("#your-stats"), ED.CURRENT_USER.id)
        },
        stream: function () {},
        log: function () {
            function a(c) {
                window.location.href = "/log?date=" + ED.shared.getFormDate(c)
            }
            var b = new Date;
            if (ED.util.getUrlParam("date")) b = new Date(unescape(ED.util.getUrlParam("date")));
            else if (5 > b.getHours()) {
                var c = new Date;
                c.setDate(c.getDate() - 1);
                $("#log-date-pickone-yesterday").attr("href", "?date=" + ED.shared.getFormDate(c)).find("span").html(ED.util.toLongDate(c)).click(function () {
                    ED.shared.trackAction("date-pickone", "yesterday")
                });
                $("#log-date-pickone-today").attr("href", "?date=" + ED.shared.getFormDate(b)).find("span").html(ED.util.toLongDate(b)).click(function () {
                    ED.shared.trackAction("date-pickone", "today")
                });
                $("#log-date-pickone").modal("show");
                ED.shared.trackAction("date-pickone", "open");
                return
            }
            $("#log-date").html(ED.util.toLongDate(b));
            $('input[name="date"]').val(ED.shared.getFormDate(b));
            var d = "measurements mealfoods foodgoals foodbonuses tags notes".split(" ");
            ED.util.each(d, function (a) {
                ED.shared.logForms[a].setup()
            });
            ED.shared.setupLogHelpers();
            !0 === ED.CURRENT_USER.logNewbie && $(".help-message").show();
            (c = ED.util.getUrlParam("helper")) && ("true" == c ? $(".help-message").show() : $(".help-message").hide());
            var f = !1;
            ED.shared.sendData("get-log", $("#log-form").serialize(), function (a) {
                var c = a.log;
                c && ED.util.each(d, function (a) {
                    ED.shared.logForms[a].setData(c)
                });
                c && c.sharedWithWorld ? $("#log-sharing-warning").show() : c || ED.CURRENT_USER.shareUpdatesWith != ED.SHARE_WORLD || $("#log-sharing-warning").show();
                ED.shared.handleFormChange($("#log-form"), function () {
                    f = !0
                });
                ED.util.enableElement("#log-form .mini-save-button, #log-form .save-button")
            });
            $("#log-backwards-arrow").show();
            ED.util.areDatesEqual(b, new Date) ? $("#log-forwards-arrow").hide() : $("#log-forwards-arrow").show();
            ED.util.addClickHandler($("#log-backwards-arrow"), function () {
                a(ED.util.getDateBefore(b))
            });
            ED.util.addClickHandler($("#log-forwards-arrow"), function () {
                a(ED.util.getDateAfter(b))
            });
            $("#log-date-picker input").datepicker({
                parse: function (a) {
                    return ED.util.toDateObject(a)
                },
                format: function (a) {
                    return ED.util.toShortDate(a)
                }
            });
            ED.util.addChangeHandler($("#log-date-picker input"), function () {
                a(ED.util.toDateObject($(this).val()))
            });
            ED.shared.setupTooltip($("#log-date-button, .arrow-button"));
            $(window).trigger("hashchange");
            ED.shared.setupFormSave("save-log", $("#log-form"));
            $("#log-form").bind("form-saved", function () {
                f = !1
            });
            ED.util.addModalShowHandler($(".modal"), ED.util.loadVisibleImages);
            ED.shared.setupModal($("#log-date-button"));
            window.onbeforeunload = function () {
                if (f) return "Uh oh, looks like you updated your log and didn't save it. Maybe you want to stay and save?"
            }
        },
        settings: function () {
            C()
        },
        profile_settings: function () {
            ED.util.each(ED.CURRENT_USER, function (a, c) {
                var b = ED.util.toUnderscore(c);
                $('input[name="' + b + '"]').val(a)
            });
            w();
            var a = new Date(ED.CURRENT_USER.birthday);
            $('select[name="birthday_month"]').val(a.getMonth() + 1);
            $('select[name="birthday_day"]').val(a.getDate());
            $('select[name="birthday_year"]').val(a.getFullYear());
            $('select[name="gender"]').val(ED.CURRENT_USER.gender);
            $('select[name="timezone"]').val(ED.CURRENT_USER.timezone);
            $('input[name="password"]').parent().hide();
            window.location.hash && 0 < window.location.hash.length && ($(window.location.hash).after('<span style="margin-left:10px; font-size:24px;"> &#9756;</span>'), $(window.location.hash).parent().parent().addClass("warning"));
            ED.CURRENT_USER.facebookId && ($('input[name="photo"]').hide(), $("#facebook-connect-link").hide());
            ED.util.addClickHandler($("#facebook-connect-link"), function () {
                ED.util.isDefined(window.FB) && ED.util.isDefined(window.FB.login) ? FB.login(function (a) {
                    a.authResponse && ED.shared.sendData("handle-facebook-connect", "", function (a) {
                        a.errors ? alert(a.errors) : (alert("The account is now connected. Happy tracking!"), $("#facebook-connect-link").hide())
                    })
                }) : alert("Sorry, looks like we can't connect to Facebook now, maybe it's blocked.")
            });
            ED.shared.setupFormSave("save-profile-settings", $("#profile-settings-form"));
            ED.util.enableElement('#profile-settings-form button[type="submit"]')
        },
        goals_settings: function () {
            n();
            u();
            ED.shared.setupFormSave("save-goals", $("#goals-settings-form"));
            ED.util.enableElement('#goals-settings-form button[type="submit"]')
        },
        reminders_settings: function () {
            t();
            ED.shared.setupFormSave("save-reminders-settings", $("#reminders-form"));
            ED.util.enableElement('#reminders-form button[type="submit"]')
        },
        buddies_settings: function () {
            $(".form-button").hide();
            l(!0)
        },
        settings_sharing: function () {
            v();
            ED.shared.setupFormSave("save-settings-sharing", $("#sharing-form"));
            ED.util.enableElement($('#sharing-form button[type="submit"]'))
        },
        settings_data: function () {
            ED.util.addClickHandler($("#data-settings-csv-button"), function () {
                $("#data-settings-csv-success").hide()
            });
            ED.shared.setupFormSave("import-csv", $("#data-settings-csv-form"), function (a) {
                "success" == a.status && ($("#data-settings-csv-success").show(), ED.util.hideModal($("#data-settings-csv-modal")), $("#data-settings-csv-form").trigger("reset-button"))
            }, !0);
            ED.util.enableElement($("#data-settings-csv-button"));
            ED.CURRENT_USER.feedUrls.length && $("#data-settings-feeds").append(ED.util.renderTemplate("#data-settings-feed-tmpl", {
                urls: ED.CURRENT_USER.feedUrls
            }));
            var a = $("#data-settings-feeds-modal");
            ED.util.addModalHideHandler(a, function () {
                a.find("input").val("");
                a.find("form").trigger("reset-button")
            });
            ED.util.addClickHandler($("#data-settings-feeds-button"), function () {
                a.find("input").focus()
            });
            ED.shared.setupFormSave("save-feed-import", $("#data-settings-feeds-form"), function (b) {
                ED.util.hideModal(a);
                "success" == b.status && $("#data-settings-feeds").append(ED.util.renderTemplate("#data-settings-feed-tmpl", {
                    urls: [b.url]
                }))
            });
            ED.util.addClickHandler($(".data-settings-feed-remove-button"), function () {
                var a = $(this).attr("data-url");
                $(this).parent().remove();
                ED.shared.sendData("remove-feed-import", "feed=" + a, function () {})
            });
            ED.util.getUrlParam("after_auth") ? $("#data-settings-withings-afterauth").show() : ED.CURRENT_USER.withingsUserid ? $("#data-settings-withings-auth").show() : $("#data-settings-withings-noauth").show();
            ED.util.enableElement($("#data-settings-feeds-button"));
            ED.shared.setupModal($("#data-settings-csv-button,#data-settings-feeds-button"));
            ED.CURRENT_USER.instagramUserid ? $("#data-settings-instagram-auth").show() : $("#data-settings-instagram-noauth").show()
        },
        debug_data: function () {
            var a = ED.CURRENT_USER,
                b = $("#debug-data");
            ED.util.each(a, function (a, e) {
                a = JSON.stringify(a);
                b.append(ED.util.renderTemplate("debug-data-row-tmpl", {
                    key: e,
                    value: a
                }))
            })
        },
        user_profile: function (a, b) {
            $("#quickstats-today a").contents().unwrap();
            $("#quickstats-link").attr("href", window.location.href + "/stats");
            var c = "days_ago=" + (ED.util.getUrlParam("days_ago") || 7) + "&id=" + a;
            ED.shared.sendData("get-logs", c, function (a) {
                var c = a.logs;
                ED.shared.renderStream(c);
                var b = a.user,
                    e = ED.util.toTimeAgo(new Date(b.startDate)),
                    g = (ED.data.goals[b.bodyGoal] && ED.data.goals[b.bodyGoal].label).split(" (")[0] || ED.data.goals.health.label,
                    e = b.personalizeString("{{ They|name }} started tracking " + e + " and {{ their }} primary goal is to " + g + ".");
                $("#user-info").append(e);
                d(b, c, a.dates);
                ED.CURRENT_USER && ED.CURRENT_USER.isAdmin() && (b.setAdminProperties(), $("#admin-profiles-table tbody:first").append(ED.util.renderTemplate("admin-profiles-row-tmpl", b)), $("#admin-reminders-table tbody:first").append(ED.util.renderTemplate("admin-reminders-row-tmpl", b)), $("#admin-usage-table tbody:first").append(ED.util.renderTemplate("admin-usage-row-tmpl", b)), $("#user-info-admin").show())
            })
        },
        user_stats: function (a) {
            B($("#user-stats"), a)
        },
        user_log: function (a, b) {
            var c = "id=" + a + "&date=" + ED.util.getUrlParam("date");
            ED.shared.sendData("get-logs", c, function (a) {
                a.log && a.log.isPrivate && $("#stream-private").show();
                ED.shared.renderStream([a.log])
            })
        },
        tips: function () {
            m()
        },
        tips_pantry: function () {
            m();
            ED.CURRENT_USER ? ED.util.each(ED.CURRENT_USER.habits, function (a, b) {
                $("." + b).show()
            }) : ED.util.each(ED.data.foodtypesList, function (a) {
                $("." + a).show()
            });
            b()
        },
        tips_supplies: function () {
            m();
            b()
        },
        tips_reading: function () {
            m();
            ED.util.each(ED.tips.booksBySection, function (a, b) {
                var c = $("#" + b).find("table");
                ED.util.each(a, function (a) {
                    c.append(ED.util.renderTemplate("tips-reading-row-tmpl", a))
                })
            });
            b()
        },
        tips_noodles: function () {
            m();
            ED.util.each(ED.tips.noodlesBySection, function (a, b) {
                var c = $("#" + b);
                "noodles-veggies" != b && c.append(ED.util.renderTemplate("tips-noodles-table-tmpl"));
                var d = c.find("table");
                ED.util.each(a, function (a) {
                    "noodles-veggies" == b ? d.append(ED.util.renderTemplate("tips-noodles-veggies-row-tmpl", a)) : d.append(ED.util.renderTemplate("tips-noodles-row-tmpl", a))
                })
            });
            b()
        },
        tips_cookbooks: function () {
            m();
            ED.util.each(ED.tips.cookbooksBySection, function (a, b) {
                var c = $("#" + b);
                "cookbooks-diet" != b && c.append(ED.util.renderTemplate("tips-cookbooks-table-tmpl"));
                var d = c.find("table");
                ED.util.each(a, function (a) {
                    "cookbooks-diet" != b ? d.append(ED.util.renderTemplate("tips-cookbooks-row-tmpl", a)) : d.append(ED.util.renderTemplate("tips-cookbooks-diet-row-tmpl", a))
                })
            });
            b()
        },
        tips_kitchen: function () {
            m();
            ED.util.each(ED.tips.kitchenToolsBySection, function (a, b) {
                var c = $("#" + b);
                c.append(ED.util.renderTemplate("tips-kitchen-table-tmpl", {
                    id: b
                }));
                var d = c.find("table");
                ED.util.each(a, function (a) {
                    d.append(ED.util.renderTemplate("tips-kitchen-row-tmpl", a))
                })
            });
            b()
        },
        tips_sugarydrinks: function () {
            function a(d) {
                $("#drinks img").removeClass("selected");
                $("#" + d).addClass("selected");
                $("#drink-label").html(c[d].label);
                $("#drink-grams").html(c[d].grams);
                $("#drink-link").attr("href", c[d].link);
                var e = c[d].grams;
                ED.util.changeHashParam("drink", d);
                ED.util.each(b, function (a, c) {
                    var b = $("#" + c + "-area"),
                        d = e / a.grams,
                        f = Math.ceil(d),
                        g = (1 - (f - d)) * a.height;
                    b.empty().append("<h2>" + d.toFixed(1) + ' <a target="_blank" href="' + a.link + '">' + a.label + "</a>:</h2>");
                    for (d = 0; d < f; d++) {
                        var h = $('<div class="chart-unit"></div>');
                        h.css({
                            "background-image": 'url("/img/chart_' + c + '_small.png")',
                            width: a.width + "px",
                            height: (d == f - 1 ? g : a.height) + "px"
                        });
                        b.append(h)
                    }
                })
            }
            var b = {
                sugar: {
                    grams: 4.17,
                    width: 25,
                    height: 25,
                    label: "sugar cubes",
                    link: "http://www.fatsecret.com/calories-nutrition/roundys/sugar-cubes"
                },
                chocolate: {
                    grams: 1.25,
                    width: 38,
                    height: 35,
                    label: "85% Lindt chocolate bar squares",
                    link: "http://www.fatsecret.com/calories-nutrition/lindt/extra-dark-chocolate-85%25-cocoa"
                },
                carrot: {
                    grams: 0.48,
                    width: 20,
                    height: 53,
                    label: "baby carrots",
                    link: "http://www.fatsecret.com/calories-nutrition/usda/baby-carrots"
                },
                strawberry: {
                    grams: 0.56,
                    width: 43,
                    height: 52,
                    label: "strawberries",
                    link: "http://www.fatsecret.com/calories-nutrition/usda/strawberries?portionid=33406&portionamount=1.000"
                }
            },
                c = {
                    odwalla: {
                        grams: 52,
                        label: "Odwalla Pink Poetry",
                        link: "http://productnutrition.thecoca-colacompany.com/products/odwalla-pink-poetry-superfood"
                    },
                    coke: {
                        grams: 39,
                        label: "Coca-Cola Classic",
                        link: "http://fatsecret.com/calories-nutrition/coca-cola/coca-cola-classic-soda"
                    },
                    redbull: {
                        grams: 39,
                        label: "Red Bull Energy Drink",
                        link: "http://fatsecret.com/calories-nutrition/red-bull/red-bull-energy-drink"
                    },
                    vitaminwater: {
                        grams: 33,
                        label: "Vitamin Water",
                        link: "http://fatsecret.com/calories-nutrition/glaceau/vitamin-water-power-c-dragonfruit"
                    },
                    starbucksfrap: {
                        grams: 31,
                        label: "Starbucks Mocha Frappucino",
                        link: "http://fatsecret.com/calories-nutrition/starbucks/mocha-frappuccino-(bottle)"
                    },
                    snappletea: {
                        grams: 23,
                        label: "Snapple Peach Iced Tea",
                        link: "http://fatsecret.com/calories-nutrition/snapple/peach-iced-tea"
                    },
                    gatorade: {
                        grams: 21,
                        label: "Gatorade Orange Thirst Quencher",
                        link: "http://fatsecret.com/calories-nutrition/gatorade/all-stars-thirst-quencher-orange-beverage"
                    },
                    sweettea: {
                        grams: 16,
                        label: "Honest Black Forest Berry Tea",
                        link: "http://www.honesttea.com/tea/glass/green_dragon/"
                    }
                };
            ED.util.each(c, function (c, b) {
                var d = $('<div class="drink-holder"></div>'),
                    f = $('<div class="drink-color"></div>');
                f.css({
                    "background-color": $.colorForValue(100 * (1 - (52 - c.grams) / 52))
                });
                f.html(c.grams + "g");
                d.append(f);
                f = $('<img id="' + b + '" src="/img/chart_' + b + '_small.png">');
                d.append(f);
                $("#drinks").append(d);
                d.hover(function () {
                    a(b)
                })
            });
            var d = ED.util.getHashParam("drink") || "vitaminwater";
            a(d)
        },
        help_logging: function () {
            ED.shared.setupLightboxes()
        },
        login: function () {
            var a = "/home";
            ED.util.getUrlParam("next") && (a = unescape(ED.util.getUrlParam("next")));
            $("#login-facebook-form").submit(function (b) {
                b.preventDefault();
                z(a)
            });
            ED.util.enableElement($("#login-facebook-button"));
            $("#login-button").click(function (b) {
                b.preventDefault();
                ED.shared.sendData("handle-login", $("#login-form").serialize(), function (c) {
                    c.errors ? ED.shared.renderErrors($("#login-form"), c.errors) : ED.util.changePage(a)
                })
            });
            ED.util.enableElement($("#login-button"))
        },
        forgot_password: function () {
            ED.shared.setupFormSave("send-reset-password", $("#forgot-password-form"))
        },
        reset_password: function () {
            ED.shared.setupFormSave("save-reset-password", $("#reset-password-form"))
        },
        unsubscribe: function () {
            ED.shared.setupFormSave("unsubscribe-user", $("#unsubscribe-form"));
            ED.shared.setupFeedback()
        },
        settings_delete: function () {
            $('#delete-form input[name="id"]').val(ED.CURRENT_USER.id);
            ED.shared.setupFormSave("delete-user", $("#delete-form"))
        },
        settings_password: function () {
            ED.CURRENT_USER.hasPassword && $("#password-form-oldpassword").show();
            ED.shared.setupFormSave("save-password", $("#password-form"))
        }
    };
    return {
        setupPage: function (a) {
            var b = Array.prototype.slice.call(arguments).slice(1);
            H[a].apply(this, b)
        },
        setupUserPages: function () {
            ED.shared.setupFeedback();
            $(window).resize(function () {
                $("#content").width($("#container").width() - $("#nav-bar").outerWidth(!0) - 5)
            });
            $(window).resize();
            $("#nav-bar").find("a[href='" + window.location.pathname + "']").each(function () {
                $(this).parent().addClass("active")
            }); - 1 < window.location.pathname.indexOf("settings/") && $('a[href="/settings"]').parent().addClass("active"); - 1 < window.location.pathname.indexOf("tips/") && $('a[href="/tips"]').parent().addClass("active");
            $("#logout-button").click(function (a) {
                a.preventDefault();
                ED.shared.sendData("handle-logout", "", function (a) {
                    ED.util.changePage("/")
                })
            });
            $("body").bind("click", function (a) {
                $(".dropdown-toggle, .menu").parent("li").removeClass("open")
            });
            $(".dropdown-toggle, .menu").click(function (a) {
                $(this).parent("li").toggleClass("open");
                return !1
            })
        },
        setupBuddiesFacebook: function () {
            FB.getLoginStatus(function (a) {
                if (a.authResponse || a.session) {
                    var b = "http://www.eatdifferent.com/start/signup?invited_by=" + ED.CURRENT_USER.id;
                    $("#buddies-facebooksend-section").show();
                    $("#buddies-facebookwall-section").show();
                    $("#buddies-email-also").show();
                    $("#buddies-facebooksend-button").click(function () {
                        FB.ui({
                            method: "send",
                            name: ED.CURRENT_USER.fullName + " has invited you to join them on eatdifferent.com",
                            link: b,
                            picture: "http://www.eatdifferent.com/img/logo_facebookshare.png",
                            description: "A simple and social app for improving your nutrition habits, one day at a time."
                        }, function (a) {
                            null !== a ? ED.shared.trackAction("facebooksend", "sent") : ED.shared.trackAction("facebooksend", "cancelled")
                        })
                    });
                    $("#buddies-facebookwall-button").click(function () {
                        FB.ui({
                            method: "feed",
                            name: ED.CURRENT_USER.fullName + " is using eatdifferent.com &mdash; join them!",
                            link: b,
                            picture: "http://www.eatdifferent.com/img/logo_facebookshare.png",
                            description: "A simple and social app for improving your nutrition habits, one day at a time."
                        }, function (a) {
                            null !== a ? ED.shared.trackAction("facebookwall", "posted") : ED.shared.trackAction("facebookwall", "cancelled")
                        })
                    });
                    FB.api("/me/friends", function (a) {
                        var b = [];
                        ED.util.each(a.data, function (a) {
                            b.push(a.id)
                        });
                        ED.shared.sendData("find-friends", "friends=" + b.join(","), function (a) {
                            var b = [];
                            ED.util.each(a.users, function (a) {
                                ED.util.inArray(ED.CURRENT_USER.buddies, a.id) || ED.util.inArray(ED.CURRENT_USER.requests, a.id) || b.push(a)
                            });
                            0 < b.length && ($("#buddies-facebookfriends-already-num").html(b.length), $("#buddies-facebookfriends-already").show(), $("#buddies-facebooksend-yet").show(), ED.util.each(b, function (a) {
                                $("#buddies-facebookfriends-already-list").append(ED.util.renderTemplate("facebookfriend-info-tmpl", a))
                            }), $("#buddies-facebookfriends-already-list form").each(function (a, b) {
                                ED.shared.setupFormSave("invite-buddies", $(b))
                            }))
                        })
                    })
                }
            })
        }
    }
}();