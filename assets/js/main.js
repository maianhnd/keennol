(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[421], {
    78421: function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a(57437)
          , l = a(62067)
          , r = a.n(l)
          , i = a(2265)
          , n = a(96215)
          , x = a(94887);
        a(19869),
        t.default = ()=>{
            let[e,t,a] = (0,
            x._)("countDown_timer", r()().add(10, "minutes").format())
              , [l,d] = (0,
            i.useState)(90);
            return (0,
            i.useEffect)(()=>{
                if (r()().isSameOrAfter(r()(e))) {
                    d(20);
                    return
                }
                let t = r()(e).diff(r()())
                  , a = setInterval(()=>{
                    d(e=>e <= 20 ? e : e - 1)
                }
                , t / 70);
                return ()=>clearInterval(a)
            }
            , [e]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("div", {
                    className: "w-full mb-4 max-w-[400px]",
                    children: [(0,
                    s.jsx)("div", {
                        className: "text-base btm-text-neutral_100-o50",
                        children: "Sale ending in"
                    }), (0,
                    s.jsx)("div", {
                        className: "w-full h-[10px] btm-bg-neutral_100-o10 rounded-[10px] my-[10px]",
                        children: (0,
                        s.jsx)("div", {
                            className: "btm-bg-neutral_100-o20 rounded-[10px] max-w-full h-full transition-all duration-500 ease-linear",
                            style: {
                                width: "".concat(l, "%")
                            }
                        })
                    }), (0,
                    s.jsx)(n.ZP, {
                        date: r()(e).toDate(),
                        renderer: t=>{
                            if (!e)
                                return null;
                            let {minutes: a, seconds: l, milliseconds: r, completed: i} = t;
                            return i ? (0,
                            s.jsx)("div", {
                                className: "btm-text-danger text-base font-semibold",
                                children: "Hurry up. This deal will end soon!!"
                            }) : (0,
                            s.jsxs)("div", {
                                className: "btm-text-danger text-base font-semibold",
                                children: [(0,
                                s.jsxs)("span", {
                                    children: [a.toString().padStart(2, "0"), ":"]
                                }), (0,
                                s.jsxs)("span", {
                                    children: [l.toString().padStart(2, "0"), ":"]
                                }), (0,
                                s.jsx)("span", {
                                    children: r.toString().padStart(3, "0")
                                })]
                            })
                        }
                        ,
                        intervalDelay: 1,
                        precision: 3
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-row gap-2 my-6 max-[640px]:my-3",
                    children: [(0,
                    s.jsx)("div", {
                        className: "max-[640px]:mt-0 w-6 flex-shrink-0",
                        children: (0,
                        s.jsx)("img", {
                            src: "https://cdn.bettamax.com/dev/2023-10-30/global.svg",
                            alt: "",
                            width: 24,
                            height: 24
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "font-normal text-[18px] max-[640px]:text-[14px]",
                        children: "Star Seller. This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-row gap-2 my-6 max-[640px]:my-3",
                    children: [(0,
                    s.jsx)("div", {
                        className: "max-[640px]:mt-0 flex-shrink-0",
                        children: (0,
                        s.jsx)("img", {
                            src: "https://cdn.bettamax.com/dev/2023-10-30/delivery.svg",
                            alt: "",
                            width: 24,
                            height: 24
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "font-normal text-[18px] max-[640px]:text-[14px]",
                        children: "Priority is given to delivery after payment."
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-row gap-2 mt-6 mb-8 max-[640px]:mt-3 max-[640px]:mb-4",
                    children: [(0,
                    s.jsx)("div", {
                        className: "max-[640px]:mt-0 flex-shrink-0",
                        children: (0,
                        s.jsx)("img", {
                            src: "https://cdn.bettamax.com/dev/2023-10-30/box.svg",
                            alt: "",
                            width: 24,
                            height: 24
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "font-normal text-[18px] max-[640px]:text-[14px]",
                        children: "In Stock, Ready To Ship."
                    })]
                })]
            })
        }
    },
    19869: function() {}
}]);
