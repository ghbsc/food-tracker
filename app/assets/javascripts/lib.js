/*
 Highcharts JS v2.1.6 (2011-07-08)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
var Handlebars = {
    VERSION: "1.0.beta.6",
    helpers: {},
    partials: {},
    registerHelper: function (b, c, e) {
        e && (c.not = e);
        this.helpers[b] = c
    },
    registerPartial: function (b, c) {
        this.partials[b] = c
    }
};
Handlebars.registerHelper("helperMissing", function (b) {
    if (2 !== arguments.length) throw Error("Could not find property '" + b + "'");
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function (b, c) {
    var e = c.inverse ||
    function () {}, f = c.fn, d = "", g = toString.call(b);
    g === functionType && (b = b.call(this));
    if (!0 === b) return f(this);
    if (!1 === b || null == b) return e(this);
    if ("[object Array]" === g) {
        if (0 < b.length) for (e = 0, g = b.length; e < g; e++) d += f(b[e]);
        else d = e(this);
        return d
    }
    return f(b)
});
Handlebars.registerHelper("each", function (b, c) {
    var e = c.fn,
        f = c.inverse,
        d = "";
    if (b && 0 < b.length) for (var f = 0, g = b.length; f < g; f++) d += e(b[f]);
    else d = f(this);
    return d
});
Handlebars.registerHelper("if", function (b, c) {
    toString.call(b) === functionType && (b = b.call(this));
    return !b || Handlebars.Utils.isEmpty(b) ? c.inverse(this) : c.fn(this)
});
Handlebars.registerHelper("unless", function (b, c) {
    var e = c.fn;
    c.fn = c.inverse;
    c.inverse = e;
    return Handlebars.helpers["if"].call(this, b, c)
});
Handlebars.registerHelper("with", function (b, c) {
    return c.fn(b)
});
Handlebars.registerHelper("log", function (b) {
    Handlebars.log(b)
});
var handlebars = function () {
        var b = {
            trace: function () {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                statements: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                params: 25,
                hash: 26,
                param: 27,
                STRING: 28,
                INTEGER: 29,
                BOOLEAN: 30,
                hashSegments: 31,
                hashSegment: 32,
                ID: 33,
                EQUALS: 34,
                pathSegments: 35,
                SEP: 36,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "STRING",
                29: "INTEGER",
                30: "BOOLEAN",
                33: "ID",
                34: "EQUALS",
                36: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 3],
                [4, 1],
                [4, 0],
                [6, 1],
                [6, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [25, 2],
                [25, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [26, 1],
                [31, 2],
                [31, 1],
                [32, 3],
                [32, 3],
                [32, 3],
                [32, 3],
                [21, 1],
                [35, 3],
                [35, 1]
            ],
            performAction: function (b, c, d, g, l, h, q) {
                b = h.length - 1;
                switch (l) {
                case 1:
                    return h[b - 1];
                case 2:
                    this.$ = new g.ProgramNode(h[b - 2], h[b]);
                    break;
                case 3:
                    this.$ = new g.ProgramNode(h[b]);
                    break;
                case 4:
                    this.$ = new g.ProgramNode([]);
                    break;
                case 5:
                    this.$ = [h[b]];
                    break;
                case 6:
                    h[b - 1].push(h[b]);
                    this.$ = h[b - 1];
                    break;
                case 7:
                    this.$ = new g.InverseNode(h[b - 2], h[b - 1], h[b]);
                    break;
                case 8:
                    this.$ = new g.BlockNode(h[b - 2], h[b - 1], h[b]);
                    break;
                case 9:
                    this.$ = h[b];
                    break;
                case 10:
                    this.$ = h[b];
                    break;
                case 11:
                    this.$ = new g.ContentNode(h[b]);
                    break;
                case 12:
                    this.$ = new g.CommentNode(h[b]);
                    break;
                case 13:
                    this.$ = new g.MustacheNode(h[b - 1][0], h[b - 1][1]);
                    break;
                case 14:
                    this.$ = new g.MustacheNode(h[b - 1][0], h[b - 1][1]);
                    break;
                case 15:
                    this.$ = h[b - 1];
                    break;
                case 16:
                    this.$ = new g.MustacheNode(h[b - 1][0], h[b - 1][1]);
                    break;
                case 17:
                    this.$ = new g.MustacheNode(h[b - 1][0], h[b - 1][1], !0);
                    break;
                case 18:
                    this.$ = new g.PartialNode(h[b - 1]);
                    break;
                case 19:
                    this.$ = new g.PartialNode(h[b - 2], h[b - 1]);
                    break;
                case 21:
                    this.$ = [
                        [h[b - 2]].concat(h[b - 1]), h[b]
                    ];
                    break;
                case 22:
                    this.$ = [
                        [h[b - 1]].concat(h[b]), null];
                    break;
                case 23:
                    this.$ = [
                        [h[b - 1]], h[b]
                    ];
                    break;
                case 24:
                    this.$ = [
                        [h[b]], null];
                    break;
                case 25:
                    h[b - 1].push(h[b]);
                    this.$ = h[b - 1];
                    break;
                case 26:
                    this.$ = [h[b]];
                    break;
                case 27:
                    this.$ = h[b];
                    break;
                case 28:
                    this.$ = new g.StringNode(h[b]);
                    break;
                case 29:
                    this.$ = new g.IntegerNode(h[b]);
                    break;
                case 30:
                    this.$ = new g.BooleanNode(h[b]);
                    break;
                case 31:
                    this.$ = new g.HashNode(h[b]);
                    break;
                case 32:
                    h[b - 1].push(h[b]);
                    this.$ = h[b - 1];
                    break;
                case 33:
                    this.$ = [h[b]];
                    break;
                case 34:
                    this.$ = [h[b - 2], h[b]];
                    break;
                case 35:
                    this.$ = [h[b - 2], new g.StringNode(h[b])];
                    break;
                case 36:
                    this.$ = [h[b - 2], new g.IntegerNode(h[b])];
                    break;
                case 37:
                    this.$ = [h[b - 2], new g.BooleanNode(h[b])];
                    break;
                case 38:
                    this.$ = new g.IdNode(h[b]);
                    break;
                case 39:
                    h[b - 2].push(h[b]);
                    this.$ = h[b - 2];
                    break;
                case 40:
                    this.$ = [h[b]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 4],
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16]
            }, {
                5: [2, 3],
                7: 17,
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 19],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [2, 5],
                19: [2, 5],
                20: [2, 5],
                22: [2, 5],
                23: [2, 5],
                24: [2, 5]
            }, {
                4: 20,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                4: 21,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                17: 22,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 26,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 27,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 28,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                21: 29,
                33: [1, 25],
                35: 24
            }, {
                1: [2, 1]
            }, {
                6: 30,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [2, 6],
                19: [2, 6],
                20: [2, 6],
                22: [2, 6],
                23: [2, 6],
                24: [2, 6]
            }, {
                17: 22,
                18: [1, 31],
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                10: 32,
                20: [1, 33]
            }, {
                10: 34,
                20: [1, 33]
            }, {
                18: [1, 35]
            }, {
                18: [2, 24],
                21: 40,
                25: 36,
                26: 37,
                27: 38,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 38],
                28: [2, 38],
                29: [2, 38],
                30: [2, 38],
                33: [2, 38],
                36: [1, 46]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                36: [2, 40]
            }, {
                18: [1, 47]
            }, {
                18: [1, 48]
            }, {
                18: [1, 49]
            }, {
                18: [1, 50],
                21: 51,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 2],
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 2],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [2, 7],
                19: [2, 7],
                20: [2, 7],
                22: [2, 7],
                23: [2, 7],
                24: [2, 7]
            }, {
                21: 52,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                18: [2, 22],
                21: 40,
                26: 53,
                27: 54,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 23]
            }, {
                18: [2, 26],
                28: [2, 26],
                29: [2, 26],
                30: [2, 26],
                33: [2, 26]
            }, {
                18: [2, 31],
                32: 55,
                33: [1, 56]
            }, {
                18: [2, 27],
                28: [2, 27],
                29: [2, 27],
                30: [2, 27],
                33: [2, 27]
            }, {
                18: [2, 28],
                28: [2, 28],
                29: [2, 28],
                30: [2, 28],
                33: [2, 28]
            }, {
                18: [2, 29],
                28: [2, 29],
                29: [2, 29],
                30: [2, 29],
                33: [2, 29]
            }, {
                18: [2, 30],
                28: [2, 30],
                29: [2, 30],
                30: [2, 30],
                33: [2, 30]
            }, {
                18: [2, 33],
                33: [2, 33]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                34: [1, 57],
                36: [2, 40]
            }, {
                33: [1, 58]
            }, {
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 17],
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }, {
                18: [1, 59]
            }, {
                18: [1, 60]
            }, {
                18: [2, 21]
            }, {
                18: [2, 25],
                28: [2, 25],
                29: [2, 25],
                30: [2, 25],
                33: [2, 25]
            }, {
                18: [2, 32],
                33: [2, 32]
            }, {
                34: [1, 57]
            }, {
                21: 61,
                28: [1, 62],
                29: [1, 63],
                30: [1, 64],
                33: [1, 25],
                35: 24
            }, {
                18: [2, 39],
                28: [2, 39],
                29: [2, 39],
                30: [2, 39],
                33: [2, 39],
                36: [2, 39]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                18: [2, 34],
                33: [2, 34]
            }, {
                18: [2, 35],
                33: [2, 35]
            }, {
                18: [2, 36],
                33: [2, 36]
            }, {
                18: [2, 37],
                33: [2, 37]
            }],
            defaultActions: {
                16: [2, 1],
                37: [2, 23],
                53: [2, 21]
            },
            parseError: function (b, c) {
                throw Error(b);
            },
            parse: function (b) {
                var c = [0],
                    d = [null],
                    g = [],
                    l = this.table,
                    h = "",
                    q = 0,
                    n = 0,
                    w = 0;
                this.lexer.setInput(b);
                this.lexer.yy = this.yy;
                this.yy.lexer = this.lexer;
                "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                b = this.lexer.yylloc;
                g.push(b);
                "function" === typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var p, k, t, v, m = {}, H, E;;) {
                    t = c[c.length - 1];
                    this.defaultActions[t] ? v = this.defaultActions[t] : (null == p && (p = void 0, p = this.lexer.lex() || 1, "number" !== typeof p && (p = this.symbols_[p] || p)), v = l[t] && l[t][p]);
                    if (!("undefined" !== typeof v && v.length && v[0] || w)) {
                        E = [];
                        for (H in l[t]) this.terminals_[H] && 2 < H && E.push("'" + this.terminals_[H] + "'");
                        var x = "",
                            x = this.lexer.showPosition ? "Parse error on line " + (q + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + E.join(", ") + ", got '" + this.terminals_[p] + "'" : "Parse error on line " + (q + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'");
                        this.parseError(x, {
                            text: this.lexer.match,
                            token: this.terminals_[p] || p,
                            line: this.lexer.yylineno,
                            loc: b,
                            expected: E
                        })
                    }
                    if (v[0] instanceof Array && 1 < v.length) throw Error("Parse Error: multiple actions possible at state: " + t + ", token: " + p);
                    switch (v[0]) {
                    case 1:
                        c.push(p);
                        d.push(this.lexer.yytext);
                        g.push(this.lexer.yylloc);
                        c.push(v[1]);
                        p = null;
                        k ? (p = k, k = null) : (n = this.lexer.yyleng, h = this.lexer.yytext, q = this.lexer.yylineno, b = this.lexer.yylloc, 0 < w && w--);
                        break;
                    case 2:
                        E = this.productions_[v[1]][1];
                        m.$ = d[d.length - E];
                        m._$ = {
                            first_line: g[g.length - (E || 1)].first_line,
                            last_line: g[g.length - 1].last_line,
                            first_column: g[g.length - (E || 1)].first_column,
                            last_column: g[g.length - 1].last_column
                        };
                        t = this.performAction.call(m, h, n, q, this.yy, v[1], d, g);
                        if ("undefined" !== typeof t) return t;
                        E && (c = c.slice(0, -2 * E), d = d.slice(0, -1 * E), g = g.slice(0, -1 * E));
                        c.push(this.productions_[v[1]][0]);
                        d.push(m.$);
                        g.push(m._$);
                        v = l[c[c.length - 2]][c[c.length - 1]];
                        c.push(v);
                        break;
                    case 3:
                        return !0
                    }
                }
                return !0
            }
        },
            c = function () {
                return {
                    EOF: 1,
                    parseError: function (b, c) {
                        if (this.yy.parseError) this.yy.parseError(b, c);
                        else throw Error(b);
                    },
                    setInput: function (b) {
                        this._input = b;
                        this._more = this._less = this.done = !1;
                        this.yylineno = this.yyleng = 0;
                        this.yytext = this.matched = this.match = "";
                        this.conditionStack = ["INITIAL"];
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        };
                        return this
                    },
                    input: function () {
                        var b = this._input[0];
                        this.yytext += b;
                        this.yyleng++;
                        this.match += b;
                        this.matched += b;
                        b.match(/\n/) && this.yylineno++;
                        this._input = this._input.slice(1);
                        return b
                    },
                    unput: function (b) {
                        this._input = b + this._input;
                        return this
                    },
                    more: function () {
                        this._more = !0;
                        return this
                    },
                    pastInput: function () {
                        var b = this.matched.substr(0, this.matched.length - this.match.length);
                        return (20 < b.length ? "..." : "") + b.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function () {
                        var b = this.match;
                        20 > b.length && (b += this._input.substr(0, 20 - b.length));
                        return (b.substr(0, 20) + (20 < b.length ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function () {
                        var b = this.pastInput(),
                            c = Array(b.length + 1).join("-");
                        return b + this.upcomingInput() + "\n" + c + "^"
                    },
                    next: function () {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var b, c;
                        this._more || (this.match = this.yytext = "");
                        for (var d = this._currentRules(), g = 0; g < d.length; g++) if (b = this._input.match(this.rules[d[g]])) {
                            if (c = b[0].match(/\n.*/g)) this.yylineno += c.length;
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: c ? c[c.length - 1].length - 1 : this.yylloc.last_column + b[0].length
                            };
                            this.yytext += b[0];
                            this.match += b[0];
                            this.matches = b;
                            this.yyleng = this.yytext.length;
                            this._more = !1;
                            this._input = this._input.slice(b[0].length);
                            this.matched += b[0];
                            if (b = this.performAction.call(this, this.yy, this, d[g], this.conditionStack[this.conditionStack.length - 1])) return b;
                            return
                        }
                        if ("" === this._input) return this.EOF;
                        this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function () {
                        var b = this.next();
                        return "undefined" !== typeof b ? b : this.lex()
                    },
                    begin: function (b) {
                        this.conditionStack.push(b)
                    },
                    popState: function () {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function () {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function () {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function (b) {
                        this.begin(b)
                    },
                    performAction: function (b, c, d, g) {
                        switch (d) {
                        case 0:
                            "\\" !== c.yytext.slice(-1) && this.begin("mu");
                            "\\" === c.yytext.slice(-1) && (c.yytext = c.yytext.substr(0, c.yyleng - 1), this.begin("emu"));
                            if (c.yytext) return 14;
                            break;
                        case 1:
                            return 14;
                        case 2:
                            return this.popState(), 14;
                        case 3:
                            return 24;
                        case 4:
                            return 16;
                        case 5:
                            return 20;
                        case 6:
                            return 19;
                        case 7:
                            return 19;
                        case 8:
                            return 23;
                        case 9:
                            return 23;
                        case 10:
                            return c.yytext = c.yytext.substr(3, c.yyleng - 5), this.popState(), 15;
                        case 11:
                            return 22;
                        case 12:
                            return 34;
                        case 13:
                            return 33;
                        case 14:
                            return 33;
                        case 15:
                            return 36;
                        case 17:
                            return this.popState(), 18;
                        case 18:
                            return this.popState(), 18;
                        case 19:
                            return c.yytext = c.yytext.substr(1, c.yyleng - 2).replace(/\\"/g, '"'), 28;
                        case 20:
                            return 30;
                        case 21:
                            return 30;
                        case 22:
                            return 29;
                        case 23:
                            return 33;
                        case 24:
                            return c.yytext = c.yytext.substr(1, c.yyleng - 2), 33;
                        case 25:
                            return "INVALID";
                        case 26:
                            return 5
                        }
                    },
                    rules: [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/],
                    conditions: {
                        mu: {
                            rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                            inclusive: !1
                        },
                        emu: {
                            rules: [2],
                            inclusive: !1
                        },
                        INITIAL: {
                            rules: [0, 1, 26],
                            inclusive: !0
                        }
                    }
                }
            }();
        b.lexer = c;
        return b
    }();
"undefined" !== typeof require && "undefined" !== typeof exports && (exports.parser = handlebars, exports.parse = function () {
    return handlebars.parse.apply(handlebars, arguments)
}, exports.main = function (b) {
    if (!b[1]) throw Error("Usage: " + b[0] + " FILE");
    b = "undefined" !== typeof process ? require("fs").readFileSync(require("path").join(process.cwd(), b[1]), "utf8") : require("file").path(require("file").cwd()).join(b[1]).read({
        charset: "utf-8"
    });
    return exports.parser.parse(b)
}, "undefined" !== typeof module && require.main === module && exports.main("undefined" !== typeof process ? process.argv.slice(1) : require("system").args));
Handlebars.Parser = handlebars;
Handlebars.parse = function (b) {
    Handlebars.Parser.yy = Handlebars.AST;
    return Handlebars.Parser.parse(b)
};
Handlebars.print = function (b) {
    return (new Handlebars.PrintVisitor).accept(b)
};
Handlebars.logger = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,
    log: function (b, c) {}
};
Handlebars.log = function (b, c) {
    Handlebars.logger.log(b, c)
};
(function () {
    Handlebars.AST = {};
    Handlebars.AST.ProgramNode = function (b, e) {
        this.type = "program";
        this.statements = b;
        e && (this.inverse = new Handlebars.AST.ProgramNode(e))
    };
    Handlebars.AST.MustacheNode = function (b, e, f) {
        this.type = "mustache";
        this.id = b[0];
        this.params = b.slice(1);
        this.hash = e;
        this.escaped = !f
    };
    Handlebars.AST.PartialNode = function (b, e) {
        this.type = "partial";
        this.id = b;
        this.context = e
    };
    var b = function (b, e) {
            if (b.original !== e.original) throw new Handlebars.Exception(b.original + " doesn't match " + e.original);
        };
    Handlebars.AST.BlockNode = function (c, e, f) {
        b(c.id, f);
        this.type = "block";
        this.mustache = c;
        this.program = e
    };
    Handlebars.AST.InverseNode = function (c, e, f) {
        b(c.id, f);
        this.type = "inverse";
        this.mustache = c;
        this.program = e
    };
    Handlebars.AST.ContentNode = function (b) {
        this.type = "content";
        this.string = b
    };
    Handlebars.AST.HashNode = function (b) {
        this.type = "hash";
        this.pairs = b
    };
    Handlebars.AST.IdNode = function (b) {
        this.type = "ID";
        this.original = b.join(".");
        for (var e = [], f = 0, d = 0, g = b.length; d < g; d++) {
            var l = b[d];
            ".." === l ? f++ : "." === l || "this" === l ? this.isScoped = !0 : e.push(l)
        }
        this.parts = e;
        this.string = e.join(".");
        this.depth = f;
        this.isSimple = 1 === e.length && 0 === f
    };
    Handlebars.AST.StringNode = function (b) {
        this.type = "STRING";
        this.string = b
    };
    Handlebars.AST.IntegerNode = function (b) {
        this.type = "INTEGER";
        this.integer = b
    };
    Handlebars.AST.BooleanNode = function (b) {
        this.type = "BOOLEAN";
        this.bool = b
    };
    Handlebars.AST.CommentNode = function (b) {
        this.type = "comment";
        this.comment = b
    }
})();
Handlebars.Exception = function (b) {
    var c = Error.prototype.constructor.apply(this, arguments),
        e;
    for (e in c) c.hasOwnProperty(e) && (this[e] = c[e]);
    this.message = c.message
};
Handlebars.Exception.prototype = Error();
Handlebars.SafeString = function (b) {
    this.string = b
};
Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
};
(function () {
    var b = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
        c = /&(?!\w+;)|[<>"'`]/g,
        e = /[&<>"'`]/,
        f = function (c) {
            return b[c] || "&amp;"
        };
    Handlebars.Utils = {
        escapeExpression: function (b) {
            return b instanceof Handlebars.SafeString ? b.toString() : null == b || !1 === b ? "" : e.test(b) ? b.replace(c, f) : b
        },
        isEmpty: function (b) {
            return "undefined" === typeof b ? !0 : null === b ? !0 : !1 === b ? !0 : "[object Array]" === Object.prototype.toString.call(b) && 0 === b.length ? !0 : !1
        }
    }
})();
Handlebars.Compiler = function () {};
Handlebars.JavaScriptCompiler = function () {};
(function (b, c) {
    b.OPCODE_MAP = {
        appendContent: 1,
        getContext: 2,
        lookupWithHelpers: 3,
        lookup: 4,
        append: 5,
        invokeMustache: 6,
        appendEscaped: 7,
        pushString: 8,
        truthyOrFallback: 9,
        functionOrFallback: 10,
        invokeProgram: 11,
        invokePartial: 12,
        push: 13,
        assignToHash: 15,
        pushStringParam: 16
    };
    b.MULTI_PARAM_OPCODES = {
        appendContent: 1,
        getContext: 1,
        lookupWithHelpers: 2,
        lookup: 1,
        invokeMustache: 3,
        pushString: 1,
        truthyOrFallback: 1,
        functionOrFallback: 1,
        invokeProgram: 3,
        invokePartial: 1,
        push: 1,
        assignToHash: 1,
        pushStringParam: 1
    };
    b.DISASSEMBLE_MAP = {};
    for (var e in b.OPCODE_MAP) b.DISASSEMBLE_MAP[b.OPCODE_MAP[e]] = e;
    b.multiParamSize = function (c) {
        return b.MULTI_PARAM_OPCODES[b.DISASSEMBLE_MAP[c]]
    };
    b.prototype = {
        compiler: b,
        disassemble: function () {
            for (var c = this.opcodes, d, e = [], f, g = 0, p = c.length; g < p; g++) if (d = c[g], "DECLARE" === d) f = c[++g], d = c[++g], e.push("DECLARE " + f + " = " + d);
            else {
                f = b.DISASSEMBLE_MAP[d];
                for (var k = b.multiParamSize(d), t = [], v = 0; v < k; v++) d = c[++g], "string" === typeof d && (d = '"' + d.replace("\n", "\\n") + '"'), t.push(d);
                f = f + " " + t.join(" ");
                e.push(f)
            }
            return e.join("\n")
        },
        guid: 0,
        compile: function (b, c) {
            this.children = [];
            this.depths = {
                list: []
            };
            this.options = c;
            var d = this.options.knownHelpers;
            this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            };
            if (d) for (var e in d) this.options.knownHelpers[e] = d[e];
            return this.program(b)
        },
        accept: function (b) {
            return this[b.type](b)
        },
        program: function (b) {
            b = b.statements;
            var c;
            this.opcodes = [];
            for (var d = 0, e = b.length; d < e; d++) c = b[d], this[c.type](c);
            this.isSimple = 1 === e;
            this.depths.list = this.depths.list.sort(function (b, c) {
                return b - c
            });
            return this
        },
        compileProgram: function (b) {
            b = (new this.compiler).compile(b, this.options);
            var c = this.guid++;
            this.usePartial = this.usePartial || b.usePartial;
            this.children[c] = b;
            for (var d = 0, e = b.depths.list.length; d < e; d++) depth = b.depths.list[d], 2 > depth || this.addDepth(depth - 1);
            return c
        },
        block: function (b) {
            var c = b.mustache,
                d = this.setupStackForMustache(c),
                e = this.compileProgram(b.program);
            b.program.inverse && (b = this.compileProgram(b.program.inverse), this.declare("inverse", b));
            this.opcode("invokeProgram", e, d.length, !! c.hash);
            this.declare("inverse", null);
            this.opcode("append")
        },
        inverse: function (b) {
            var c = this.setupStackForMustache(b.mustache),
                d = this.compileProgram(b.program);
            this.declare("inverse", d);
            this.opcode("invokeProgram", null, c.length, !! b.mustache.hash);
            this.declare("inverse", null);
            this.opcode("append")
        },
        hash: function (b) {
            b = b.pairs;
            var c, d;
            this.opcode("push", "{}");
            for (var e = 0, f = b.length; e < f; e++) c = b[e], d = c[1], this.accept(d), this.opcode("assignToHash", c[0])
        },
        partial: function (b) {
            var c = b.id;
            this.usePartial = !0;
            b.context ? this.ID(b.context) : this.opcode("push", "depth0");
            this.opcode("invokePartial", c.original);
            this.opcode("append")
        },
        content: function (b) {
            this.opcode("appendContent", b.string)
        },
        mustache: function (b) {
            var c = this.setupStackForMustache(b);
            this.opcode("invokeMustache", c.length, b.id.original, !! b.hash);
            b.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ID: function (b) {
            this.addDepth(b.depth);
            this.opcode("getContext", b.depth);
            this.opcode("lookupWithHelpers", b.parts[0] || null, b.isScoped || !1);
            for (var c = 1, d = b.parts.length; c < d; c++) this.opcode("lookup", b.parts[c])
        },
        STRING: function (b) {
            this.opcode("pushString", b.string)
        },
        INTEGER: function (b) {
            this.opcode("push", b.integer)
        },
        BOOLEAN: function (b) {
            this.opcode("push", b.bool)
        },
        comment: function () {},
        pushParams: function (b) {
            for (var c = b.length, d; c--;) if (d = b[c], this.options.stringParams) d.depth && this.addDepth(d.depth), this.opcode("getContext", d.depth || 0), this.opcode("pushStringParam", d.string);
            else this[d.type](d)
        },
        opcode: function (c, d, e, f) {
            this.opcodes.push(b.OPCODE_MAP[c]);
            void 0 !== d && this.opcodes.push(d);
            void 0 !== e && this.opcodes.push(e);
            void 0 !== f && this.opcodes.push(f)
        },
        declare: function (b, c) {
            this.opcodes.push("DECLARE");
            this.opcodes.push(b);
            this.opcodes.push(c)
        },
        addDepth: function (b) {
            0 === b || this.depths[b] || (this.depths[b] = !0, this.depths.list.push(b))
        },
        setupStackForMustache: function (b) {
            var c = b.params;
            this.pushParams(c);
            b.hash && this.hash(b.hash);
            this.ID(b.id);
            return c
        }
    };
    c.prototype = {
        nameLookup: function (b, d, e) {
            return /^[0-9]+$/.test(d) ? b + "[" + d + "]" : c.isValidJavaScriptVariableName(d) ? b + "." + d : b + "['" + d + "']"
        },
        appendToBuffer: function (b) {
            return this.environment.isSimple ? "return " + b + ";" : "buffer += " + b + ";"
        },
        initializeBuffer: function () {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function (b, c, d, e) {
            this.environment = b;
            this.options = c || {};
            this.name = this.environment.name;
            this.isChild = !! d;
            this.context = d || {
                programs: [],
                aliases: {
                    self: "this"
                },
                registers: {
                    list: []
                }
            };
            this.preamble();
            this.stackSlot = 0;
            this.stackVars = [];
            this.compileChildren(b, c);
            b = b.opcodes;
            this.i = 0;
            for (g = b.length; this.i < g; this.i++) b = this.nextOpcode(0), "DECLARE" === b[0] ? (this.i += 2, this[b[1]] = b[2]) : (this.i += b[1].length, this[b[0]].apply(this, b[1]));
            return this.createFunctionContext(e)
        },
        nextOpcode: function (c) {
            var d = this.environment.opcodes,
                e = d[this.i + c],
                f, g;
            if ("DECLARE" === e) return f = d[this.i + 1], c = d[this.i + 2], ["DECLARE", f, c];
            f = b.DISASSEMBLE_MAP[e];
            e = b.multiParamSize(e);
            g = [];
            for (var p = 0; p < e; p++) g.push(d[this.i + p + 1 + c]);
            return [f, g]
        },
        eat: function (b) {
            this.i += b.length
        },
        preamble: function () {
            var b = [];
            this.useRegister("foundHelper");
            if (this.isChild) b.push("");
            else {
                var c = this.namespace,
                    d = "helpers = helpers || " + c + ".helpers;";
                this.environment.usePartial && (d = d + " partials = partials || " + c + ".partials;");
                b.push(d)
            }
            this.environment.isSimple ? b.push("") : b.push(", buffer = " + this.initializeBuffer());
            this.lastContext = 0;
            this.source = b
        },
        createFunctionContext: function (b) {
            var c = this.stackVars;
            this.isChild || (c = c.concat(this.context.registers.list));
            0 < c.length && (this.source[1] = this.source[1] + ", " + c.join(", "));
            if (!this.isChild) for (var d in this.context.aliases) this.source[1] = this.source[1] + ", " + d + "=" + this.context.aliases[d];
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";");
            this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n");
            this.environment.isSimple || this.source.push("return buffer;");
            c = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
            d = 0;
            for (var e = this.environment.depths.list.length; d < e; d++) c.push("depth" + this.environment.depths.list[d]);
            if (b) return c.push(this.source.join("\n  ")), Function.apply(this, c);
            b = "function " + (this.name || "") + "(" + c.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
            Handlebars.log(Handlebars.logger.DEBUG, b + "\n\n");
            return b
        },
        appendContent: function (b) {
            this.source.push(this.appendToBuffer(this.quotedString(b)))
        },
        append: function () {
            var b = this.popStack();
            this.source.push("if(" + b + " || " + b + " === 0) { " + this.appendToBuffer(b) + " }");
            this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function () {
            var b = this.nextOpcode(1),
                c = "";
            this.context.aliases.escapeExpression = "this.escapeExpression";
            "appendContent" === b[0] && (c = " + " + this.quotedString(b[1][0]), this.eat(b));
            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + c))
        },
        getContext: function (b) {
            this.lastContext !== b && (this.lastContext = b)
        },
        lookupWithHelpers: function (b, c) {
            if (b) {
                var d = this.nextStack();
                this.usingKnownHelper = !1;
                !c && this.options.knownHelpers[b] ? (d = d + " = " + this.nameLookup("helpers", b, "helper"), this.usingKnownHelper = !0) : c || this.options.knownHelpersOnly ? d = d + " = " + this.nameLookup("depth" + this.lastContext, b, "context") : (this.register("foundHelper", this.nameLookup("helpers", b, "helper")), d = d + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, b, "context"));
                this.source.push(d + ";")
            } else this.pushStack("depth" + this.lastContext)
        },
        lookup: function (b) {
            var c = this.topStack();
            this.source.push(c + " = (" + c + " === null || " + c + " === undefined || " + c + " === false ? " + c + " : " + this.nameLookup(c, b, "context") + ");")
        },
        pushStringParam: function (b) {
            this.pushStack("depth" + this.lastContext);
            this.pushString(b)
        },
        pushString: function (b) {
            this.pushStack(this.quotedString(b))
        },
        push: function (b) {
            this.pushStack(b)
        },
        invokeMustache: function (b, c, d) {
            this.populateParams(b, this.quotedString(c), "{}", null, d, function (b, c, d) {
                this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + d + "=== undef) { " + b + " = helperMissing.call(" + c + "); }"), b !== d && this.source.push("else { " + b + " = " + d + "; }"))
            })
        },
        invokeProgram: function (b, c, d) {
            var e = this.programExpression(this.inverse);
            b = this.programExpression(b);
            this.populateParams(c, null, b, e, d, function (b, c, d) {
                this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + b + " = blockHelperMissing.call(" + c + "); }"))
            })
        },
        populateParams: function (b, c, d, e, f, g) {
            var k = f || this.options.stringParams || e || this.options.data,
                t = this.popStack(),
                v = [],
                m;
            k ? (this.register("tmp1", d), m = "tmp1") : m = "{ hash: {} }";
            k && (f = f ? this.popStack() : "{}", this.source.push("tmp1.hash = " + f + ";"));
            this.options.stringParams && this.source.push("tmp1.contexts = [];");
            for (k = 0; k < b; k++) f = this.popStack(), v.push(f), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
            e && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + e + ";"));
            this.options.data && this.source.push("tmp1.data = data;");
            v.push(m);
            this.populateCall(v, t, c || t, g, "{}" !== d)
        },
        populateCall: function (b, c, d, e, f) {
            var g = ["depth0"].concat(b).join(", ");
            b = ["depth0"].concat(d).concat(b).join(", ");
            d = this.nextStack();
            this.usingKnownHelper ? this.source.push(d + " = " + c + ".call(" + g + ");") : (this.context.aliases.functionType = '"function"', this.source.push("if(" + (f ? "foundHelper && " : "") + "typeof " + c + " === functionType) { " + d + " = " + c + ".call(" + g + "); }"));
            e.call(this, d, b, c);
            this.usingKnownHelper = !1
        },
        invokePartial: function (b) {
            params = [this.nameLookup("partials", b, "partial"), "'" + b + "'", this.popStack(), "helpers", "partials"];
            this.options.data && params.push("data");
            this.pushStack("self.invokePartial(" + params.join(", ") + ");")
        },
        assignToHash: function (b) {
            var c = this.popStack(),
                d = this.topStack();
            this.source.push(d + "['" + b + "'] = " + c + ";")
        },
        compiler: c,
        compileChildren: function (b, c) {
            for (var d = b.children, e, f, g = 0, k = d.length; g < k; g++) {
                e = d[g];
                f = new this.compiler;
                this.context.programs.push("");
                var t = this.context.programs.length;
                e.index = t;
                e.name = "program" + t;
                this.context.programs[t] = f.compile(e, c, this.context)
            }
        },
        programExpression: function (b) {
            if (null == b) return "self.noop";
            var c = this.environment.children[b];
            b = c.depths.list;
            for (var c = [c.index, c.name, "data"], d = 0, e = b.length; d < e; d++) depth = b[d], 1 === depth ? c.push("depth0") : c.push("depth" + (depth - 1));
            if (0 === b.length) return "self.program(" + c.join(", ") + ")";
            c.shift();
            return "self.programWithDepth(" + c.join(", ") + ")"
        },
        register: function (b, c) {
            this.useRegister(b);
            this.source.push(b + " = " + c + ";")
        },
        useRegister: function (b) {
            this.context.registers[b] || (this.context.registers[b] = !0, this.context.registers.list.push(b))
        },
        pushStack: function (b) {
            this.source.push(this.nextStack() + " = " + b + ";");
            return "stack" + this.stackSlot
        },
        nextStack: function () {
            this.stackSlot++;
            this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot);
            return "stack" + this.stackSlot
        },
        popStack: function () {
            return "stack" + this.stackSlot--
        },
        topStack: function () {
            return "stack" + this.stackSlot
        },
        quotedString: function (b) {
            return '"' + b.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
        }
    };
    e = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" ");
    for (var f = c.RESERVED_WORDS = {}, d = 0, g = e.length; d < g; d++) f[e[d]] = !0;
    c.isValidJavaScriptVariableName = function (b) {
        return !c.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(b) ? !0 : !1
    }
})(Handlebars.Compiler, Handlebars.JavaScriptCompiler);
Handlebars.precompile = function (b, c) {
    c = c || {};
    var e = Handlebars.parse(b),
        e = (new Handlebars.Compiler).compile(e, c);
    return (new Handlebars.JavaScriptCompiler).compile(e, c)
};
Handlebars.compile = function (b, c) {
    c = c || {};
    var e;
    return function (f, d) {
        if (!e) {
            var g = Handlebars.parse(b),
                g = (new Handlebars.Compiler).compile(g, c),
                g = (new Handlebars.JavaScriptCompiler).compile(g, c, void 0, !0);
            e = Handlebars.template(g)
        }
        return e.call(this, f, d)
    }
};
Handlebars.VM = {
    template: function (b) {
        var c = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function (b, c, d) {
                var g = this.programs[b];
                if (d) return Handlebars.VM.program(c, d);
                g || (g = this.programs[b] = Handlebars.VM.program(c));
                return g
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop
        };
        return function (e, f) {
            f = f || {};
            return b.call(c, Handlebars, e, f.helpers, f.partials, f.data)
        }
    },
    programWithDepth: function (b, c, e) {
        var f = Array.prototype.slice.call(arguments, 2);
        return function (d, e) {
            e = e || {};
            return b.apply(this, [d, e.data || c].concat(f))
        }
    },
    program: function (b, c) {
        return function (e, f) {
            f = f || {};
            return b(e, f.data || c)
        }
    },
    noop: function () {
        return ""
    },
    invokePartial: function (b, c, e, f, d, g) {
        options = {
            helpers: f,
            partials: d,
            data: g
        };
        if (void 0 === b) throw new Handlebars.Exception("The partial " + c + " could not be found");
        if (b instanceof Function) return b(e, options);
        if (Handlebars.compile) return d[c] = Handlebars.compile(b), d[c](e, options);
        throw new Handlebars.Exception("The partial " + c + " could not be compiled when running in runtime-only mode");
    }
};
Handlebars.template = Handlebars.VM.template;
(function (b) {
    function c() {
        var b = new Date;
        return new Date(b.getFullYear(), b.getMonth(), b.getDate())
    }
    function e(b, c) {
        return String(b) == String(c)
    }
    function f(b, c) {
        return b instanceof Date ? f(b.getFullYear(), b.getMonth()) : 1 == c ? 0 != b % 4 || 0 == b % 100 && 0 != b % 400 ? 28 : 29 : 3 == c || 5 == c || 8 == c || 10 == c ? 30 : 31
    }
    function d(b) {
        var c = b.getFullYear(),
            d = b.getMonth(),
            e = b.getDate();
        b = f(b);
        return e == b ? 11 == d ? new Date(c + 1, 0, 1) : new Date(c, d + 1, 1) : new Date(c, d, e + 1)
    }
    function g(b) {
        var c = b.getFullYear(),
            d = b.getMonth();
        b = b.getDate();
        return 1 == b ? 0 == d ? new Date(c - 1, 11, f(c - 1, 11)) : new Date(c, d - 1, f(c, d - 1)) : new Date(c, d, b - 1)
    }
    function l(b, c) {
        return (c ? b.getMonth() + 1 + "/" + b.getDate() : b.getDate() + "/" + (b.getMonth() + 1)) + "/" + b.getFullYear()
    }
    function h(b, c) {
        if (c) return new Date(b);
        a = b.split(/[\.\-\/]/);
        var d = a.shift(),
            e = a.shift();
        a.unshift(d);
        a.unshift(e);
        return new Date(a.join("/"))
    }
    function q(b, c, d) {
        var e = c;
        10 > c && (e = "0" + c);
        if (d) return c = b, 10 > c && (c = "0" + b), c + ":" + e;
        c = b % 12;
        0 == c && (c = 12);
        return c + ":" + e + (12 > b ? "am" : "pm")
    }
    function n(b) {
        if ((b = b = /(\d+)\s*[:\-\.,]\s*(\d+)\s*(am|pm)?/i.exec(b)) && 3 <= b.length) {
            var c = Number(b[1]),
                d = Number(b[2]);
            12 == c && b[3] && (c -= 12);
            b[3] && "pm" == b[3].toLowerCase() && (c += 12);
            return {
                hour: c,
                minute: d
            }
        }
        return null
    }
    function w(c, d, e, f) {
        var g = b("<thead />"),
            h = b("<tr />").appendTo(g);
        b("<th />").addClass("monthCell").append(b('<a href="javascript:;">&laquo;</a>').addClass("prevMonth").mousedown(function (b) {
            p(c, 0 == e ? d - 1 : d, 0 == e ? 11 : e - 1, f);
            b.preventDefault()
        })).appendTo(h);
        b("<th />").addClass("monthCell").attr("colSpan", 5).append(b('<a href="javascript:;">' + t[e] + " " + d + "</a>").addClass("monthName")).appendTo(h);
        b("<th />").addClass("monthCell").append(b('<a href="javascript:;">&raquo;</a>').addClass("nextMonth").mousedown(function () {
            p(c, 11 == e ? d + 1 : d, 11 == e ? 0 : e + 1, f)
        })).appendTo(h);
        var l = b("<tr />").appendTo(g);
        b.each("SMTWTFS".split(""), function (c, d) {
            b("<td />").addClass("dayName").append(d).appendTo(l)
        });
        return g
    }
    function p(f, h, l, k) {
        k = k || {};
        var n = c(),
            p = new Date(h, l, 1),
            q = 11 == l ? new Date(h + 1, 0, 1) : new Date(h, l + 1, 1),
            K = 6 - q.getDay();
        6 > K && (K += 7);
        for (var L = 0; L < K; L++) q = d(q);
        K = b("<table />");
        w(f, h, l, k).appendTo(K);
        h = b("<tbody />").appendTo(K);
        for (var B = b("<tr />"), t = p.getDay() + 7, L = 0; L < t; L++) p = g(p);
        for (; p <= q;) {
            var L = b("<td />").addClass("day").append(b('<a href="javascript:;">' + p.getDate() + "</a>").click(function () {
                var b = p;
                return function () {
                    k && k.selectDate && k.selectDate(b)
                }
            }())).appendTo(B),
                t = e(p, n),
                pa = k.selected && e(k.selected, p);
            t && L.addClass("today");
            pa && L.addClass("selected");
            t && pa && L.addClass("today_selected");
            p.getTime() > n.getTime() || p.getMonth() != l && L.addClass("nonMonth");
            dow = p.getDay();
            6 == dow && (h.append(B), B = b("<tr />"));
            p = d(p)
        }
        B.children().length ? h.append(B) : B.remove();
        f.empty().append(K)
    }
    function k(c, d) {
        var e = d.selection && n(d.selection);
        e && (e.minute = 30 * Math.floor(e.minute / 30));
        for (var f = d.startTime && 60 * d.startTime.hour + d.startTime.minute, g, h = b("<ul />"), l = 0; 24 > l; l++) for (var k = 0; 60 > k; k += 30) f && f > 60 * l + k ||
        function () {
            var c = q(l, k, d.isoTime),
                p = c;
            if (null != f) var n = 60 * l + k - f,
                p = 60 > n ? p + (" (" + n + " mins)") : 60 == n ? p + " (1 hr)" : p + (" (" + n / 60 + " hrs)");
            p = b("<li />").append(b('<a href="javascript:;">' + p + "</a>").click(function () {
                d && d.selectTime && d.selectTime(c)
            }).mousemove(function () {
                b("li.selected", h).removeClass("selected")
            })).appendTo(h);
            g || l != d.defaultHour || (g = p);
            e && (e.hour == l && e.minute == k) && (p.addClass("selected"), g = p)
        }();
        g && setTimeout(function () {
            c[0].scrollTop = g[0].offsetTop - 2 * g.height()
        }, 0);
        c.empty().append(h)
    }
    var t = "January February March April May June July August September October November December".split(" ");
    b.fn.calendricalDate = function (d) {
        d = d || {};
        d.padding = d.padding || 4;
        var e = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
        return this.each(function () {
            var f = b(this),
                g = b("<span></span>"),
                k, n = !1,
                q = h(f.val(), d.usa);
            q.getFullYear() && (f.val(l(q, d.usa)), g.html("&nbsp;(" + e[q.getDay()] + ")"), f.trigger("change"));
            f.bind("focus click", function () {
                if (!k) {
                    var K = f.position();
                    f.css("padding-left");
                    k = b("<div />").addClass("calendricalDatePopup").mouseenter(function () {
                        n = !0
                    }).mouseleave(function () {
                        n = !1
                    }).mousedown(function (b) {
                        b.preventDefault()
                    }).css({
                        position: "absolute",
                        left: K.left,
                        top: K.top + f.height() + 2 * d.padding
                    });
                    f.after(k);
                    var q = h(f.val(), d.usa);
                    q.getFullYear() || (q = c());
                    p(k, q.getFullYear(), q.getMonth(), {
                        selected: q,
                        selectDate: function (b) {
                            n = !1;
                            f.val(l(b, d.usa));
                            g.html("&nbsp;(" + e[b.getDay()] + ")");
                            f.trigger("change");
                            k.remove();
                            k = null;
                            if (d.endDate) {
                                var c = h(d.endDate.val(), d.usa);
                                c >= q && d.endDate.val(l(new Date(b.getTime() + c.getTime() - q.getTime()), d.usa))
                            }
                        }
                    });
                    b("body").click(function (c) {
                        b(c.target)[0] == f[0] || b(c.target).closest(".calendricalDatePopup").length || k && k.remove()
                    })
                }
            }).blur(function () {
                n ? k && f.focus() : k && (k.remove(), k = null)
            })
        })
    };
    b.fn.calendricalDateRange = function (c) {
        2 <= this.length && (b(this[0]).calendricalDate(b.extend({
            endDate: b(this[1])
        }, c)), b(this[1]).calendricalDate(c));
        return this
    };
    b.fn.calendricalTime = function (c) {
        c = c || {};
        c.padding = c.padding || 4;
        return this.each(function () {
            var d = b(this),
                f, g = !1;
            d.bind("focus click", function () {
                if (!f) {
                    var l = c.startTime;
                    l && c.startDate && (c.endDate && !e(h(c.startDate.val()), h(c.endDate.val()))) && (l = !1);
                    var p = d.position();
                    f = b("<div />").addClass("calendricalTimePopup").mouseenter(function () {
                        g = !0
                    }).mouseleave(function () {
                        g = !1
                    }).mousedown(function (b) {
                        b.preventDefault()
                    }).css({
                        position: "absolute",
                        left: p.left,
                        top: p.top + d.height() + 2 * c.padding
                    });
                    l && f.addClass("calendricalEndTimePopup");
                    d.after(f);
                    p = {
                        selection: d.val(),
                        selectTime: function (b) {
                            g = !1;
                            d.val(b);
                            d.trigger("change");
                            f.remove();
                            f = null
                        },
                        isoTime: c.isoTime || !1,
                        defaultHour: null != c.defaultHour ? c.defaultHour : 8
                    };
                    l && (p.startTime = n(c.startTime.val()));
                    k(f, p)
                }
            }).blur(function () {
                g ? f && d.focus() : f && (f.remove(), f = null)
            })
        })
    };
    b.fn.calendricalTimeRange = function (c) {
        2 <= this.length && (b(this[0]).calendricalTime(c), b(this[1]).calendricalTime(b.extend({
            startTime: b(this[0])
        }, c)));
        return this
    };
    b.fn.calendricalDateTimeRange = function (c) {
        4 <= this.length && (b(this[0]).calendricalDate(b.extend({
            endDate: b(this[2])
        }, c)), b(this[1]).calendricalTime(c), b(this[2]).calendricalDate(c), b(this[3]).calendricalTime(b.extend({
            startTime: b(this[1]),
            startDate: b(this[0]),
            endDate: b(this[2])
        }, c)));
        return this
    }
})(jQuery);
(function (b) {
    function c() {
        var b = navigator.userAgent;
        return b.match(/iPhone/i) || b.match(/iPod/i) || b.match(/android/i) || b.match(/iPad/i) ? !0 : !1
    }
    function e(b, c) {
        c = c || {};
        var d = c.opacity;
        if (null === d || void 0 === d) d = "1.0";
        c.direction && "positive" == c.direction || (b = n - b);
        var e = 0.5 * -b * Math.PI / (n - q),
            f = Math.floor(128 * Math.cos(e) + 100),
            g = Math.floor(128 * Math.cos(e + 2 * Math.PI / 3) + 128),
            e = Math.floor(128 * Math.cos(e + 4 * Math.PI / 3) + 128);
        return "rgba(" + f + "," + g + "," + e + "," + d + ")"
    }
    function f(c, d) {
        var e = b('<div class="colorslider-knob-wrapper"><div class="colorslider-knob"></div>'),
            f = b("<div></div>").css({
                position: "absolute",
                top: "-999px",
                left: "-999px"
            }).appendTo("body");
        f.width(e.width()).html(d);
        40 < f.height() && (d = ED.util.truncateText(d, 20));
        1 == d.split(" ").length ? e.children().css({
            "padding-top": "10px",
            "padding-bottom": "0px"
        }) : e.children().css({
            "padding-top": "5px",
            "padding-bottom": "5px"
        });
        e.children().html(d);
        return e
    }
    function d(b, c, d) {
        d = d.data("type") || "negative";
        c = e(c, {
            opacity: "1.0",
            direction: d
        });
        b.children().css({
            "background-color": c
        })
    }
    function g(b, c, e) {
        var f = b.data("slider");
        if (f) {
            var g = f.data("knob"),
                f = h(f) - h(g),
                f = c / n * f;
            0 === f && (f = -2);
            g.css({
                left: f
            });
            d(g, c, b);
            e || (b.val(c), b.trigger("change"))
        }
    }
    function l(b, c, e) {
        var f = b.data("slider"),
            g = f.data("knob"),
            f = h(f) - h(g);
        c > f && (c = f);
        0 >= c && (c = -2);
        g.css({
            left: c
        });
        c = Math.round(c / f * n);
        e || (b.val(c), b.trigger("change"), d(g, c, b))
    }
    function h(b) {
        return b.width() || b.css("width") && b.css("width").replace("px", "")
    }
    var q = 0,
        n = 100,
        w = {
            init: function (d) {
                function e() {
                    x.data("dragging", !0);
                    document.onselectstart = function () {
                        return !1
                    }
                }
                function n() {
                    x.data("dragging", !1);
                    document.onselectstart = function () {
                        return !0
                    }
                }
                d = d || {};
                var q = this;
                if (q) {
                    var m = h(q) || b(window).width() - 30;
                    d = d.width || 15;
                    var w = "none",
                        E = "lots";
                    400 > m && (E = w = "");
                    var x = b('<div class="colorslider-slider"></div>');
                    x.attr("id", "colorslider-" + q.attr("name"));
                    x.css({
                        height: d + "px",
                        width: m + "px"
                    });
                    b('<div class="colorslider-label"></div>').css({
                        "float": "left",
                        "padding-left": "3px"
                    }).html(w).appendTo(x);
                    b('<div class="colorslider-label"></div>').css({
                        "float": "right",
                        "padding-right": "3px"
                    }).html(E).appendTo(x);
                    q.hide();
                    q.after(x);
                    q.data("slider", x);
                    var w = q.data("label"),
                        N = f(d, w);
                    x.append(N);
                    x.data("knob", N);
                    c() ? (d = N.get(0), d.addEventListener("touchstart", function (b) {
                        b.preventDefault();
                        e()
                    }, !1), d.addEventListener("touchend", function (b) {
                        b.preventDefault();
                        n()
                    }, !1), d.addEventListener("touchmove", function (b) {
                        b.preventDefault();
                        x.data("dragging") && (b = b.touches[0].pageX - x.offset().left, l(q, b))
                    }, !1)) : (N.mousedown(function (b) {
                        e()
                    }), b("body").mouseup(function (b) {
                        n()
                    }), b("body").mousemove(function (b) {
                        x.data("dragging") && (b = b.pageX - x.offset().left - N.width() / 2, l(q, b))
                    }));
                    b(window).resize(function () {
                        q.val() && g(q, q.val())
                    });
                    q.val() ? g(q, 0) : (m = m / 2 - h(N) / 2, l(q, m, !0), N.children().css({
                        "background-color": "#bbb"
                    }));
                    q.bind("change", function () {
                        q.colorSlider("refresh")
                    });
                    return this
                }
            },
            refresh: function () {
                var c = b(this);
                if (c) {
                    var d = c.data("slider"),
                        e = d.data("knob");
                    c.val() && "" !== c.val() ? g(c, c.val(), !0) : (d = h(d) / 2 - h(e) / 2, l(c, d, !0), e.children().css({
                        "background-color": "#bbb"
                    }))
                }
            }
        };
    b.fn.colorSlider = function (c) {
        if (w[c]) return w[c].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof c && c) b.error("Method " + c + " does not exist on jQuery.colorSlider");
        else return w.init.apply(this, arguments)
    };
    b.colorForValue = function (b, c) {
        return e(b, c)
    }
})(window.jQuery || window.Zepto);
(function (b) {
    b.extend({
        tablesorter: new function () {
            function c(b, d) {
                f(b + "," + ((new Date).getTime() - d.getTime()) + "ms")
            }
            function f(b) {
                "undefined" != typeof console && "undefined" != typeof console.debug ? console.log(b) : alert(b)
            }
            function d(c, d) {
                if (c.config.debug) var e = "";
                if (0 != c.tBodies.length) {
                    var l = c.tBodies[0].rows;
                    if (l[0]) for (var n = [], k = l[0].cells.length, q = 0; q < k; q++) {
                        var m = !1;
                        b.metadata && b(d[q]).metadata() && b(d[q]).metadata().sorter ? m = g(b(d[q]).metadata().sorter) : c.config.headers[q] && c.config.headers[q].sorter && (m = g(c.config.headers[q].sorter));
                        if (!m) a: {
                            for (var m = c, p = l, t = -1, w = q, v = N.length, E = !1, x = !1, H = !0;
                            "" == x && H;) t++, p[t] ? (E = p[t].cells[w], x = b.trim(h(m.config, E)), m.config.debug && f("Checking if value was empty on row:" + t)) : H = !1;
                            for (p = 1; p < v; p++) if (N[p].is(x, m, E)) {
                                m = N[p];
                                break a
                            }
                            m = N[0]
                        }
                        c.config.debug && (e += "column:" + q + " parser:" + m.id + "\n");
                        n.push(m)
                    }
                    c.config.debug && f(e);
                    return n
                }
            }
            function g(b) {
                for (var c = N.length, d = 0; d < c; d++) if (N[d].id.toLowerCase() == b.toLowerCase()) return N[d];
                return !1
            }
            function l(d) {
                if (d.config.debug) var f = new Date;
                for (var g = d.tBodies[0] && d.tBodies[0].rows.length || 0, l = d.tBodies[0].rows[0] && d.tBodies[0].rows[0].cells.length || 0, n = d.config.parsers, k = {
                    row: [],
                    normalized: []
                }, q = 0; q < g; ++q) {
                    var m = b(d.tBodies[0].rows[q]),
                        p = [];
                    if (m.hasClass(d.config.cssChildRow)) k.row[k.row.length - 1] = k.row[k.row.length - 1].add(m);
                    else {
                        k.row.push(m);
                        for (var t = 0; t < l; ++t) p.push(n[t].format(h(d.config, m[0].cells[t]), d, m[0].cells[t]));
                        p.push(k.normalized.length);
                        k.normalized.push(p)
                    }
                }
                d.config.debug && c("Building cache for " + g + " rows:", f);
                return k
            }
            function h(c, d) {
                var e = "";
                if (!d) return "";
                c.supportsTextContent || (c.supportsTextContent = d.textContent || !1);
                if ("simple" == c.textExtraction) {
                    if (d.getAttribute("data-sortvalue")) return d.getAttribute("data-sortvalue");
                    e = c.supportsTextContent ? d.textContent : d.childNodes[0] && d.childNodes[0].hasChildNodes() ? d.childNodes[0].innerHTML : d.innerHTML
                } else e = "function" == typeof c.textExtraction ? c.textExtraction(d) : b(d).text();
                return e
            }
            function q(d, f) {
                if (d.config.debug) var g = new Date;
                for (var h = f.row, l = f.normalized, n = l.length, q = l[0].length - 1, m = b(d.tBodies[0]), p = [], t = 0; t < n; t++) {
                    var w = l[t][q];
                    p.push(h[w]);
                    if (!d.config.appender) for (var v = h[w].length, E = 0; E < v; E++) m[0].appendChild(h[w][E])
                }
                d.config.appender && d.config.appender(d, p);
                p = null;
                d.config.debug && c("Rebuilt table:", g);
                k(d);
                setTimeout(function () {
                    b(d).trigger("sortEnd")
                }, 0)
            }
            function n(d) {
                if (d.config.debug) var g = new Date;
                var h = w(d);
                $tableHeaders = b(d.config.selectorHeaders, d).each(function (c) {
                    this.column = h[this.parentNode.rowIndex + "-" + this.cellIndex];
                    var e;
                    e = d.config.sortInitialOrder;
                    e = "Number" != typeof e ? "desc" == e.toLowerCase() ? 1 : 0 : 1 == e ? 1 : 0;
                    this.count = this.order = e;
                    e = b.metadata && !1 === b(this).metadata().sorter ? !0 : !1;
                    e || (e = d.config.headers[c] && !1 === d.config.headers[c].sorter ? !0 : !1);
                    e && (this.sortDisabled = !0);
                    p(d, c) && (this.order = this.lockedOrder = p(d, c));
                    this.sortDisabled || (e = b(this).addClass(d.config.cssHeader), d.config.onRenderHeader && d.config.onRenderHeader.apply(e));
                    d.config.headerList[c] = this
                });
                d.config.debug && (c("Built headers:", g), f($tableHeaders));
                return $tableHeaders
            }
            function w(b) {
                var c = [],
                    d = {};
                b = b.getElementsByTagName("THEAD")[0].getElementsByTagName("TR");
                for (var e = 0; e < b.length; e++) for (var f = b[e].cells, g = 0; g < f.length; g++) {
                    var h = f[g],
                        l = h.parentNode.rowIndex,
                        k = l + "-" + h.cellIndex,
                        n = h.rowSpan || 1,
                        h = h.colSpan || 1,
                        q;
                    "undefined" == typeof c[l] && (c[l] = []);
                    for (var m = 0; m < c[l].length + 1; m++) if ("undefined" == typeof c[l][m]) {
                        q = m;
                        break
                    }
                    d[k] = q;
                    for (m = l; m < l + n; m++) {
                        "undefined" == typeof c[m] && (c[m] = []);
                        for (var k = c[m], p = q; p < q + h; p++) k[p] = "x"
                    }
                }
                return d
            }
            function p(b, c) {
                return b.config.headers[c] && b.config.headers[c].lockedOrder ? b.config.headers[c].lockedOrder : !1
            }
            function k(b) {
                for (var c = b.config.widgets, d = c.length, e = 0; e < d; e++) t(c[e]).format(b)
            }
            function t(b) {
                for (var c = O.length, d = 0; d < c; d++) if (O[d].id.toLowerCase() == b.toLowerCase()) return O[d]
            }
            function v(b, c) {
                for (var d = c.length, e = 0; e < d; e++) if (c[e][0] == b) return !0;
                return !1
            }
            function m(c, d, e, f) {
                d.removeClass(f[0]).removeClass(f[1]);
                var g = [];
                d.each(function (c) {
                    this.sortDisabled || (g[this.column] = b(this))
                });
                c = e.length;
                for (d = 0; d < c; d++) g[e[d][0]].addClass(f[e[d][1]])
            }
            function H(c, d) {
                if (c.config.widthFixed) {
                    var e = b("<colgroup>");
                    b("tr:first td", c.tBodies[0]).each(function () {
                        e.append(b("<col>").css("width", b(this).width()))
                    });
                    b(c).prepend(e)
                }
            }
            function E(b, d, f) {
                if (b.config.debug) var g = new Date;
                for (var h = "var sortWrapper = function(a,b) {", l = d.length, k = 0; k < l; k++) var n = d[k][0],
                    q = d[k][1],
                    n = "text" == b.config.parsers[n].type ? 0 == q ? x("text", "asc", n) : x("text", "desc", n) : 0 == q ? x("numeric", "asc", n) : x("numeric", "desc", n),
                    m = "e" + k,
                    h = h + ("var " + m + " = " + n),
                    h = h + ("if(" + m + ") { return " + m + "; } "),
                    h = h + "else { ";
                k = f.normalized[0].length - 1;
                h += "return a[" + k + "]-b[" + k + "];";
                for (k = 0; k < l; k++) h += "}; ";
                h += "return 0; }; ";
                b.config.debug && c("Evaling expression:" + h, new Date);
                eval(h);
                f.normalized.sort(sortWrapper);
                b.config.debug && c("Sorting on " + d.toString() + " and dir " + q + " time:", g);
                return f
            }
            function x(b, c, d) {
                var e = "a[" + d + "]";
                d = "b[" + d + "]";
                if ("text" == b && "asc" == c) return "(" + e + " == " + d + " ? 0 : (" + e + " === null ? Number.POSITIVE_INFINITY : (" + d + " === null ? Number.NEGATIVE_INFINITY : (" + e + " < " + d + ") ? -1 : 1 )));";
                if ("text" == b && "desc" == c) return "(" + e + " == " + d + " ? 0 : (" + e + " === null ? Number.POSITIVE_INFINITY : (" + d + " === null ? Number.NEGATIVE_INFINITY : (" + d + " < " + e + ") ? -1 : 1 )));";
                if ("numeric" == b && "asc" == c) return "(" + e + " === null && " + d + " === null) ? 0 :(" + e + " === null ? Number.POSITIVE_INFINITY : (" + d + " === null ? Number.NEGATIVE_INFINITY : " + e + " - " + d + "));";
                if ("numeric" == b && "desc" == c) return "(" + e + " === null && " + d + " === null) ? 0 :(" + e + " === null ? Number.POSITIVE_INFINITY : (" + d + " === null ? Number.NEGATIVE_INFINITY : " + d + " - " + e + "));"
            }
            var N = [],
                O = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: !0,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: !1,
                cancelSelection: !0,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: "/.|,/g",
                onRenderHeader: null,
                selectorHeaders: "thead th",
                debug: !1
            };
            this.benchmark = c;
            this.construct = function (c) {
                return this.each(function () {
                    if (this.tHead && this.tBodies) {
                        var e, f, g, p;
                        this.config = {};
                        p = b.extend(this.config, b.tablesorter.defaults, c);
                        e = b(this);
                        b.data(this, "tablesorter", p);
                        f = n(this);
                        this.config.parsers = d(this, f);
                        g = l(this);
                        var w = [p.cssDesc, p.cssAsc];
                        H(this);
                        f.click(function (c) {
                            var d = e[0].tBodies[0] && e[0].tBodies[0].rows.length || 0;
                            if (!this.sortDisabled && 0 < d) {
                                e.trigger("sortStart");
                                b(this);
                                d = this.column;
                                this.order = this.count++ % 2;
                                this.lockedOrder && (this.order = this.lockedOrder);
                                if (c[p.sortMultiSortKey]) if (v(d, p.sortList)) for (c = 0; c < p.sortList.length; c++) {
                                    var h = p.sortList[c],
                                        l = p.headerList[h[0]];
                                    h[0] == d && (l.count = h[1], l.count++, h[1] = l.count % 2)
                                } else p.sortList.push([d, this.order]);
                                else {
                                    p.sortList = [];
                                    if (null != p.sortForce) for (h = p.sortForce, c = 0; c < h.length; c++) h[c][0] != d && p.sortList.push(h[c]);
                                    p.sortList.push([d, this.order])
                                }
                                setTimeout(function () {
                                    m(e[0], f, p.sortList, w);
                                    q(e[0], E(e[0], p.sortList, g))
                                }, 1);
                                return !1
                            }
                        }).mousedown(function () {
                            if (p.cancelSelection) return this.onselectstart = function () {
                                return !1
                            }, !1
                        });
                        e.bind("update", function () {
                            var b = this;
                            setTimeout(function () {
                                b.config.parsers = d(b, f);
                                g = l(b)
                            }, 1)
                        }).bind("updateCell", function (b, c) {
                            var d = this.config,
                                e = [c.parentNode.rowIndex - 1, c.cellIndex];
                            g.normalized[e[0]][e[1]] = d.parsers[e[1]].format(h(d, c), c)
                        }).bind("sorton", function (c, d) {
                            b(this).trigger("sortStart");
                            p.sortList = d;
                            for (var e = p.sortList, h = this.config, l = e.length, k = 0; k < l; k++) {
                                var n = e[k],
                                    t = h.headerList[n[0]];
                                t.count = n[1];
                                t.count++
                            }
                            m(this, f, e, w);
                            q(this, E(this, e, g))
                        }).bind("appendCache", function () {
                            q(this, g)
                        }).bind("applyWidgetId", function (b, c) {
                            t(c).format(this)
                        }).bind("applyWidgets", function () {
                            k(this)
                        });
                        b.metadata && (b(this).metadata() && b(this).metadata().sortlist) && (p.sortList = b(this).metadata().sortlist);
                        0 < p.sortList.length && e.trigger("sorton", [p.sortList]);
                        k(this)
                    }
                })
            };
            this.addParser = function (b) {
                for (var c = N.length, d = !0, e = 0; e < c; e++) N[e].id.toLowerCase() == b.id.toLowerCase() && (d = !1);
                d && N.push(b)
            };
            this.addWidget = function (b) {
                O.push(b)
            };
            this.formatFloat = function (b) {
                b = parseFloat(b);
                return isNaN(b) ? 0 : b
            };
            this.formatInt = function (b) {
                b = parseInt(b);
                return isNaN(b) ? 0 : b
            };
            this.isDigit = function (c, d) {
                return /^[-+]?\d*$/.test(b.trim(c.replace(/[,.']/g, "")))
            };
            this.clearTableBody = function (c) {
                b.browser.msie ?
                function () {
                    for (; this.firstChild;) this.removeChild(this.firstChild)
                }.apply(c.tBodies[0]) : c.tBodies[0].innerHTML = ""
            }
        }
    });
    b.fn.extend({
        tablesorter: b.tablesorter.construct
    });
    var c = b.tablesorter;
    c.addParser({
        id: "text",
        is: function (b) {
            return !0
        },
        format: function (c) {
            return b.trim(c.toLocaleLowerCase())
        },
        type: "text"
    });
    c.addParser({
        id: "digit",
        is: function (c, f) {
            return b.tablesorter.isDigit(c, f.config)
        },
        format: function (c) {
            return b.tablesorter.formatFloat(c)
        },
        type: "numeric"
    });
    c.addParser({
        id: "currency",
        is: function (b) {
            return /^[\u00a3$\u20ac?.]/.test(b)
        },
        format: function (c) {
            return b.tablesorter.formatFloat(c.replace(RegExp(/[\u00a3$\u20ac]/g), ""))
        },
        type: "numeric"
    });
    c.addParser({
        id: "ipAddress",
        is: function (b) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(b)
        },
        format: function (c) {
            c = c.split(".");
            for (var f = "", d = c.length, g = 0; g < d; g++) var l = c[g],
                f = 2 == l.length ? f + ("0" + l) : f + l;
            return b.tablesorter.formatFloat(f)
        },
        type: "numeric"
    });
    c.addParser({
        id: "url",
        is: function (b) {
            return /^(https?|ftp|file):\/\/$/.test(b)
        },
        format: function (b) {
            return jQuery.trim(b.replace(RegExp(/(https?|ftp|file):\/\//), ""))
        },
        type: "text"
    });
    c.addParser({
        id: "isoDate",
        is: function (b) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(b)
        },
        format: function (c) {
            return b.tablesorter.formatFloat("" != c ? (new Date(c.replace(RegExp(/-/g), "/"))).getTime() : "0")
        },
        type: "numeric"
    });
    c.addParser({
        id: "percent",
        is: function (c) {
            return /\%$/.test(b.trim(c))
        },
        format: function (c) {
            return b.tablesorter.formatFloat(c.replace(RegExp(/%/g), ""))
        },
        type: "numeric"
    });
    c.addParser({
        id: "usLongDate",
        is: function (b) {
            return b.match(RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
        },
        format: function (c) {
            return b.tablesorter.formatFloat((new Date(c)).getTime())
        },
        type: "numeric"
    });
    c.addParser({
        id: "shortDate",
        is: function (b) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(b)
        },
        format: function (c, f) {
            var d = f.config;
            c = c.replace(/\-/g, "/");
            if ("us" == d.dateFormat) c = c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            else if ("uk" == d.dateFormat) c = c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            else if ("dd/mm/yy" == d.dateFormat || "dd-mm-yy" == d.dateFormat) c = c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            return b.tablesorter.formatFloat((new Date(c)).getTime())
        },
        type: "numeric"
    });
    c.addParser({
        id: "time",
        is: function (b) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(b)
        },
        format: function (c) {
            return b.tablesorter.formatFloat((new Date("2000/01/01 " + c)).getTime())
        },
        type: "numeric"
    });
    c.addParser({
        id: "metadata",
        is: function (b) {
            return !1
        },
        format: function (c, f, d) {
            c = f.config;
            c = c.parserMetadataName ? c.parserMetadataName : "sortValue";
            return b(d).metadata()[c]
        },
        type: "numeric"
    });
    c.addWidget({
        id: "zebra",
        format: function (c) {
            if (c.config.debug) var f = new Date;
            var d, g = -1,
                l;
            b("tr:visible", c.tBodies[0]).each(function (f) {
                d = b(this);
                d.hasClass(c.config.cssChildRow) || g++;
                l = 0 == g % 2;
                d.removeClass(c.config.widgetZebra.css[l ? 0 : 1]).addClass(c.config.widgetZebra.css[l ? 1 : 0])
            });
            c.config.debug && b.tablesorter.benchmark("Applying Zebra widget", f)
        }
    })
})(jQuery);
(function (b) {
    var c, e, f, d, g, l, h, q, n, w, p = 0,
        k = {},
        t = [],
        v = 0,
        m = {},
        H = [],
        E = null,
        x = new Image,
        N = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        O = /[^\.]\.(swf)\s*$/i,
        K, L = 1,
        B = 0,
        ca = "",
        pa, I, T = !1,
        ga = b.extend(b("<div/>")[0], {
            prop: 0
        }),
        Z = b.browser.msie && 7 > b.browser.version && !window.XMLHttpRequest,
        ja = function () {
            e.hide();
            x.onerror = x.onload = null;
            E && E.abort();
            c.empty()
        },
        oa = function () {
            !1 === k.onError(t, p, k) ? (e.hide(), T = !1) : (k.titleShow = !1, k.width = "auto", k.height = "auto", c.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), ka())
        },
        da = function () {
            var d = t[p],
                f, g, h, n, q, m;
            ja();
            k = b.extend({}, b.fn.fancybox.defaults, "undefined" == typeof b(d).data("fancybox") ? k : b(d).data("fancybox"));
            m = k.onStart(t, p, k);
            if (!1 === m) T = !1;
            else {
                "object" == typeof m && (k = b.extend(k, m));
                h = k.title || (d.nodeName ? b(d).attr("title") : d.title) || "";
                d.nodeName && !k.orig && (k.orig = b(d).children("img:first").length ? b(d).children("img:first") : b(d));
                "" === h && (k.orig && k.titleFromAlt) && (h = k.orig.attr("alt"));
                f = k.href || (d.nodeName ? b(d).attr("href") : d.href) || null;
                if (/^(?:javascript)/i.test(f) || "#" == f) f = null;
                k.type ? (g = k.type, f || (f = k.content)) : k.content ? g = "html" : f && (g = f.match(N) ? "image" : f.match(O) ? "swf" : b(d).hasClass("iframe") ? "iframe" : 0 === f.indexOf("#") ? "inline" : "ajax");
                if (g) switch ("inline" == g && (d = f.substr(f.indexOf("#")), g = 0 < b(d).length ? "inline" : "ajax"), k.type = g, k.href = f, k.title = h, k.autoDimensions && ("html" == k.type || "inline" == k.type || "ajax" == k.type ? (k.width = "auto", k.height = "auto") : k.autoDimensions = !1), k.modal && (k.overlayShow = !0, k.hideOnOverlayClick = !1, k.hideOnContentClick = !1, k.enableEscapeButton = !1, k.showCloseButton = !1), k.padding = parseInt(k.padding, 10), k.margin = parseInt(k.margin, 10), c.css("padding", k.padding + k.margin), b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
                    b(this).replaceWith(l.children())
                }), g) {
                case "html":
                    c.html(k.content);
                    ka();
                    break;
                case "inline":
                    if (!0 === b(d).parent().is("#fancybox-content")) {
                        T = !1;
                        break
                    }
                    b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(d)).bind("fancybox-cleanup", function () {
                        b(this).replaceWith(l.children())
                    }).bind("fancybox-cancel", function () {
                        b(this).replaceWith(c.children())
                    });
                    b(d).appendTo(c);
                    ka();
                    break;
                case "image":
                    T = !1;
                    b.fancybox.showActivity();
                    x = new Image;
                    x.onerror = function () {
                        oa()
                    };
                    x.onload = function () {
                        T = !0;
                        x.onerror = x.onload = null;
                        k.width = x.width;
                        k.height = x.height;
                        b("<img />").attr({
                            id: "fancybox-img",
                            src: x.src,
                            alt: k.title
                        }).appendTo(c);
                        Pa()
                    };
                    x.src = f;
                    break;
                case "swf":
                    k.scrolling = "no";
                    n = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + k.width + '" height="' + k.height + '"><param name="movie" value="' + f + '"></param>';
                    q = "";
                    b.each(k.swf, function (b, c) {
                        n += '<param name="' + b + '" value="' + c + '"></param>';
                        q += " " + b + '="' + c + '"'
                    });
                    n += '<embed src="' + f + '" type="application/x-shockwave-flash" width="' + k.width + '" height="' + k.height + '"' + q + "></embed></object>";
                    c.html(n);
                    ka();
                    break;
                case "ajax":
                    T = !1;
                    b.fancybox.showActivity();
                    k.ajax.win = k.ajax.success;
                    E = b.ajax(b.extend({}, k.ajax, {
                        url: f,
                        data: k.ajax.data || {},
                        error: function (b, c, d) {
                            0 < b.status && oa()
                        },
                        success: function (b, d, g) {
                            if (200 == ("object" == typeof g ? g : E).status) {
                                if ("function" == typeof k.ajax.win) {
                                    m = k.ajax.win(f, b, d, g);
                                    if (!1 === m) {
                                        e.hide();
                                        return
                                    }
                                    if ("string" == typeof m || "object" == typeof m) b = m
                                }
                                c.html(b);
                                ka()
                            }
                        }
                    }));
                    break;
                case "iframe":
                    Pa()
                } else oa()
            }
        },
        ka = function () {
            var d = k.width,
                e = k.height,
                d = -1 < d.toString().indexOf("%") ? parseInt((b(window).width() - 2 * k.margin) * parseFloat(d) / 100, 10) + "px" : "auto" == d ? "auto" : d + "px",
                e = -1 < e.toString().indexOf("%") ? parseInt((b(window).height() - 2 * k.margin) * parseFloat(e) / 100, 10) + "px" : "auto" == e ? "auto" : e + "px";
            c.wrapInner('<div style="width:' + d + ";height:" + e + ";overflow: " + ("auto" == k.scrolling ? "auto" : "yes" == k.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>');
            k.width = c.width();
            k.height = c.height();
            Pa()
        },
        Pa = function () {
            var kb, Qa;
            if (d.is(":visible") && !1 === m.onCleanup(H, v, m)) e.hide(), b.event.trigger("fancybox-cancel"), T = !1;
            else {
                T = !0;
                b(l.add(f)).unbind();
                b(window).unbind("resize.fb scroll.fb");
                b(document).unbind("keydown.fb");
                d.is(":visible") && "outside" !== m.titlePosition && d.css("height", d.height());
                H = t;
                v = p;
                m = k;
                if (m.overlayShow) {
                    if (f.css({
                        "background-color": m.overlayColor,
                        opacity: m.overlayOpacity,
                        cursor: m.hideOnOverlayClick ? "pointer" : "auto",
                        height: b(document).height()
                    }), !f.is(":visible")) {
                        if (Z) b("select:not(#fancybox-tmp select)").filter(function () {
                            return "hidden" !== this.style.visibility
                        }).css({
                            visibility: "hidden"
                        }).one("fancybox-cleanup", function () {
                            this.style.visibility = "inherit"
                        });
                        f.show()
                    }
                } else f.hide();
                I = ab();
                ca = m.title || "";
                B = 0;
                q.empty().removeAttr("style").removeClass();
                if (!1 !== m.titleShow && (ca = b.isFunction(m.titleFormat) ? m.titleFormat(ca, H, v, m) : ca && ca.length ? "float" == m.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + ca + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + m.titlePosition + '">' + ca + "</div>" : !1) && "" !== ca) switch (q.addClass("fancybox-title-" + m.titlePosition).html(ca).appendTo("body").show(), m.titlePosition) {
                case "inside":
                    q.css({
                        width: I.width - 2 * m.padding,
                        marginLeft: m.padding,
                        marginRight: m.padding
                    });
                    B = q.outerHeight(!0);
                    q.appendTo(g);
                    I.height += B;
                    break;
                case "over":
                    q.css({
                        marginLeft: m.padding,
                        width: I.width - 2 * m.padding,
                        bottom: m.padding
                    }).appendTo(g);
                    break;
                case "float":
                    q.css("left", -1 * parseInt((q.width() - I.width - 40) / 2, 10)).appendTo(d);
                    break;
                default:
                    q.css({
                        width: I.width - 2 * m.padding,
                        paddingLeft: m.padding,
                        paddingRight: m.padding
                    }).appendTo(d)
                }
                q.hide();
                d.is(":visible") ? (e.hide(), b(h.add(n).add(w)).hide(), kb = d.position(), pa = {
                    top: kb.top,
                    left: kb.left,
                    width: d.width(),
                    height: d.height()
                }, Qa = pa.width == I.width && pa.height == I.height, l.fadeTo(m.changeFade, 0.3, function () {
                    var d = function () {
                            l.html(c.children()).fadeTo(m.changeFade, 1, Xa)
                        };
                    b.event.trigger("fancybox-change");
                    l.empty().removeAttr("filter").css({
                        "border-width": m.padding,
                        width: I.width - 2 * m.padding,
                        height: k.autoDimensions ? "auto" : I.height - B - 2 * m.padding
                    });
                    Qa ? d() : (ga.prop = 0, b(ga).animate({
                        prop: 1
                    }, {
                        duration: m.changeSpeed,
                        easing: m.easingChange,
                        step: bb,
                        complete: d
                    }))
                })) : (d.removeAttr("style"), l.css("border-width", m.padding), "elastic" == m.transitionIn ? (e.hide(), pa = za(), l.html(c.children()), d.show(), m.opacity && (I.opacity = 0), ga.prop = 0, b(ga).animate({
                    prop: 1
                }, {
                    duration: m.speedIn,
                    easing: m.easingIn,
                    step: bb,
                    complete: Xa
                })) : ("inside" == m.titlePosition && 0 < B && q.show(), l.css({
                    width: I.width - 2 * m.padding,
                    height: k.autoDimensions ? "auto" : I.height - B - 2 * m.padding
                }).html(c.children()), d.css(I).fadeIn("none" == m.transitionIn ? 0 : m.speedIn, Xa)))
            }
        },
        ya = function () {
            (m.enableEscapeButton || m.enableKeyboardNav) && b(document).bind("keydown.fb", function (c) {
                27 == c.keyCode && m.enableEscapeButton ? (c.preventDefault(), b.fancybox.close()) : 37 != c.keyCode && 39 != c.keyCode || (!m.enableKeyboardNav || "INPUT" === c.target.tagName || "TEXTAREA" === c.target.tagName || "SELECT" === c.target.tagName) || (c.preventDefault(), b.fancybox[37 == c.keyCode ? "prev" : "next"]())
            });
            m.showNavArrows ? ((m.cyclic && 1 < H.length || 0 !== v) && n.show(), (m.cyclic && 1 < H.length || v != H.length - 1) && w.show()) : (n.hide(), w.hide())
        },
        Xa = function () {
            b.support.opacity || (l.get(0).style.removeAttribute("filter"), d.get(0).style.removeAttribute("filter"));
            k.autoDimensions && l.css("height", "auto");
            d.css("height", "auto");
            ca && ca.length && q.show();
            m.showCloseButton && h.show();
            ya();
            m.hideOnContentClick && l.bind("click", b.fancybox.close);
            m.hideOnOverlayClick && f.bind("click", b.fancybox.close);
            b(window).bind("resize.fb", b.fancybox.resize);
            m.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
            "iframe" == m.type && b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + k.scrolling + '" src="' + m.href + '"></iframe>').appendTo(l);
            e.hide();
            d.show();
            T = !1;
            b.fancybox.center();
            m.onComplete(H, v, m);
            var c, g;
            H.length - 1 > v && (c = H[v + 1].href, "undefined" !== typeof c && c.match(N) && (g = new Image, g.src = c));
            0 < v && (c = H[v - 1].href, "undefined" !== typeof c && c.match(N) && (g = new Image, g.src = c))
        },
        bb = function (b) {
            var c = {
                width: parseInt(pa.width + (I.width - pa.width) * b, 10),
                height: parseInt(pa.height + (I.height - pa.height) * b, 10),
                top: parseInt(pa.top + (I.top - pa.top) * b, 10),
                left: parseInt(pa.left + (I.left - pa.left) * b, 10)
            };
            "undefined" !== typeof I.opacity && (c.opacity = 0.5 > b ? 0.5 : b);
            d.css(c);
            l.css({
                width: c.width - 2 * m.padding,
                height: c.height - B * b - 2 * m.padding
            })
        },
        La = function () {
            return [b(window).width() - 2 * m.margin, b(window).height() - 2 * m.margin, b(document).scrollLeft() + m.margin, b(document).scrollTop() + m.margin]
        },
        ab = function () {
            var b = La(),
                c = {},
                d = m.autoScale,
                e = 2 * m.padding; - 1 < m.width.toString().indexOf("%") ? c.width = parseInt(b[0] * parseFloat(m.width) / 100, 10) : c.width = m.width + e; - 1 < m.height.toString().indexOf("%") ? c.height = parseInt(b[1] * parseFloat(m.height) / 100, 10) : c.height = m.height + e;
            d && (c.width > b[0] || c.height > b[1]) && ("image" == k.type || "swf" == k.type ? (d = m.width / m.height, c.width > b[0] && (c.width = b[0], c.height = parseInt((c.width - e) / d + e, 10)), c.height > b[1] && (c.height = b[1], c.width = parseInt((c.height - e) * d + e, 10))) : (c.width = Math.min(c.width, b[0]), c.height = Math.min(c.height, b[1])));
            c.top = parseInt(Math.max(b[3] - 20, b[3] + 0.5 * (b[1] - c.height - 40)), 10);
            c.left = parseInt(Math.max(b[2] - 20, b[2] + 0.5 * (b[0] - c.width - 40)), 10);
            return c
        },
        za = function () {
            var c = k.orig ? b(k.orig) : !1,
                d = {};
            c && c.length ? (d = c.offset(), d.top += parseInt(c.css("paddingTop"), 10) || 0, d.left += parseInt(c.css("paddingLeft"), 10) || 0, d.top += parseInt(c.css("border-top-width"), 10) || 0, d.left += parseInt(c.css("border-left-width"), 10) || 0, d.width = c.width(), d.height = c.height(), d = {
                width: d.width + 2 * m.padding,
                height: d.height + 2 * m.padding,
                top: d.top - m.padding - 20,
                left: d.left - m.padding - 20
            }) : (c = La(), d = {
                width: 2 * m.padding,
                height: 2 * m.padding,
                top: parseInt(c[3] + 0.5 * c[1], 10),
                left: parseInt(c[2] + 0.5 * c[0], 10)
            });
            return d
        },
        cb = function () {
            e.is(":visible") ? (b("div", e).css("top", -40 * L + "px"), L = (L + 1) % 12) : clearInterval(K)
        };
    b.fn.fancybox = function (c) {
        if (!b(this).length) return this;
        b(this).data("fancybox", b.extend({}, c, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (c) {
            c.preventDefault();
            T || (T = !0, b(this).blur(), t = [], p = 0, (c = b(this).attr("rel") || "") && "" != c && "nofollow" !== c ? (t = b("a[rel=" + c + "], area[rel=" + c + "]"), p = t.index(this)) : t.push(this), da())
        });
        return this
    };
    b.fancybox = function (c, d) {
        var e;
        if (!T) {
            T = !0;
            e = "undefined" !== typeof d ? d : {};
            t = [];
            p = parseInt(e.index, 10) || 0;
            if (b.isArray(c)) {
                for (var f = 0, g = c.length; f < g; f++)"object" == typeof c[f] ? b(c[f]).data("fancybox", b.extend({}, e, c[f])) : c[f] = b({}).data("fancybox", b.extend({
                    content: c[f]
                }, e));
                t = jQuery.merge(t, c)
            } else "object" == typeof c ? b(c).data("fancybox", b.extend({}, e, c)) : c = b({}).data("fancybox", b.extend({
                content: c
            }, e)), t.push(c);
            if (p > t.length || 0 > p) p = 0;
            da()
        }
    };
    b.fancybox.showActivity = function () {
        clearInterval(K);
        e.show();
        K = setInterval(cb, 66)
    };
    b.fancybox.hideActivity = function () {
        e.hide()
    };
    b.fancybox.next = function () {
        return b.fancybox.pos(v + 1)
    };
    b.fancybox.prev = function () {
        return b.fancybox.pos(v - 1)
    };
    b.fancybox.pos = function (b) {
        T || (b = parseInt(b), t = H, -1 < b && b < H.length ? (p = b, da()) : m.cyclic && 1 < H.length && (p = b >= H.length ? 0 : H.length - 1, da()))
    };
    b.fancybox.cancel = function () {
        T || (T = !0, b.event.trigger("fancybox-cancel"), ja(), k.onCancel(t, p, k), T = !1)
    };
    b.fancybox.close = function () {
        function c() {
            f.fadeOut("fast");
            q.empty().hide();
            d.hide();
            b("#fancybox-overlay, #fancybox-inline-tmp").trigger("fancybox-cleanup");
            l.empty();
            m.onClosed(H, v, m);
            H = k = [];
            v = p = 0;
            m = k = {};
            T = !1
        }
        if (!T && !d.is(":hidden")) if (T = !0, m && !1 === m.onCleanup(H, v, m)) T = !1;
        else if (ja(), b(h.add(n).add(w)).hide(), b(l.add(f)).unbind(), b(window).unbind("resize.fb scroll.fb"), b(document).unbind("keydown.fb"), l.find("iframe").attr("src", Z && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), "inside" !== m.titlePosition && q.empty(), d.stop(), "elastic" == m.transitionOut) {
            pa = za();
            var e = d.position();
            I = {
                top: e.top,
                left: e.left,
                width: d.width(),
                height: d.height()
            };
            m.opacity && (I.opacity = 1);
            q.empty().hide();
            ga.prop = 1;
            b(ga).animate({
                prop: 0
            }, {
                duration: m.speedOut,
                easing: m.easingOut,
                step: bb,
                complete: c
            })
        } else d.fadeOut("none" == m.transitionOut ? 0 : m.speedOut, c)
    };
    b.fancybox.resize = function () {
        f.is(":visible") && f.css("height", b(document).height());
        b.fancybox.center(!0)
    };
    b.fancybox.center = function (b) {
        var c, e;
        T || (e = !0 === b ? 1 : 0, c = La(), !e && (d.width() > c[0] || d.height() > c[1]) || d.stop().animate({
            top: parseInt(Math.max(c[3] - 20, c[3] + 0.5 * (c[1] - l.height() - 40) - m.padding)),
            left: parseInt(Math.max(c[2] - 20, c[2] + 0.5 * (c[0] - l.width() - 40) - m.padding))
        }, "number" == typeof b ? b : 200))
    };
    b.fancybox.init = function () {
        b("#fancybox-wrap").length || (b("body").append(c = b('<div id="fancybox-tmp"></div>'), e = b('<div id="fancybox-loading"><div></div></div>'), f = b('<div id="fancybox-overlay"></div>'), d = b('<div id="fancybox-wrap"></div>')), g = b('<div id="fancybox-outer"></div>').appendTo(d), g.append(l = b('<div id="fancybox-content"></div>'), h = b('<a id="fancybox-close"></a>'), q = b('<div id="fancybox-title"></div>'), n = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), w = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), h.click(b.fancybox.close), e.click(b.fancybox.cancel), n.click(function (c) {
            c.preventDefault();
            b.fancybox.prev()
        }), w.click(function (c) {
            c.preventDefault();
            b.fancybox.next()
        }), b.fn.mousewheel && d.bind("mousewheel.fb", function (c, d) {
            if (T) c.preventDefault();
            else if (0 == b(c.target).get(0).clientHeight || b(c.target).get(0).scrollHeight === b(c.target).get(0).clientHeight) c.preventDefault(), b.fancybox[0 < d ? "prev" : "next"]()
        }), b.support.opacity || d.addClass("fancybox-ie"), Z && (e.addClass("fancybox-ie6"), d.addClass("fancybox-ie6"), b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(g)))
    };
    b.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: !1,
        modal: !1,
        cyclic: !1,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: !0,
        autoDimensions: !0,
        centerOnScroll: !1,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: !0,
        hideOnContentClick: !1,
        overlayShow: !0,
        overlayOpacity: 0.7,
        overlayColor: "#777",
        titleShow: !0,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: !1,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: !0,
        showNavArrows: !0,
        enableEscapeButton: !0,
        enableKeyboardNav: !0,
        onStart: function () {},
        onCancel: function () {},
        onComplete: function () {},
        onCleanup: function () {},
        onClosed: function () {},
        onError: function () {}
    };
    b(document).ready(function () {
        b.fancybox.init()
    })
})(window.jQuery || window.Zepto);
!
function (b) {
    function c(c, d) {
        this.$el = b(c);
        this.proxy("show").proxy("ahead").proxy("hide").proxy("keyHandler").proxy("selectDate");
        d = b.extend({}, b.fn.datepicker.defaults, d);
        if (d.parse || d.format || !this.detectNative()) b.extend(this, d), this.$el.data("datepicker", this), e.push(this), this.init()
    }
    var e = [];
    c.prototype = {
        detectNative: function (b) {
            return !1
        },
        init: function () {
            var c = this.nav("months", 1),
                d = this.nav("years", 12),
                e = b("<div>").addClass("nav").append(c).append(d);
            this.$month = c.find(".name");
            this.$year = d.find(".name");
            $calendar = b("<div>").addClass("calendar");
            for (c = 0; c < this.shortDayNames.length; c++) $calendar.append('<div class="dow">' + this.shortDayNames[(c + this.startOfWeek) % 7] + "</div>");
            this.$days = b("<div></div>").addClass("days");
            $calendar.append(this.$days);
            this.$picker = b("<div></div>").click(function (b) {
                b.stopPropagation()
            }).mousedown(function (b) {
                b.preventDefault()
            }).addClass("datepicker").append(e).append($calendar).insertAfter(this.$el);
            this.$el.change(b.proxy(function () {
                this.selectDate()
            }, this));
            this.selectDate();
            this.$el.hide();
            this.show()
        },
        nav: function (c, d) {
            var e = b('<div><span class="prev button">&larr;</span><span class="name"></span><span class="next button">&rarr;</span></div>').addClass(c);
            b(".prev", e).click(b.proxy(function () {
                this.ahead(-d, 0)
            }, this));
            b(".next", e).click(b.proxy(function () {
                this.ahead(d, 0)
            }, this));
            return e
        },
        updateName: function (b, c) {
            b.html(c)
        },
        selectMonth: function (c) {
            var d = new Date(c.getFullYear(), c.getMonth(), 1);
            if (!this.curMonth || this.curMonth.getFullYear() != d.getFullYear() || this.curMonth.getMonth() != d.getMonth()) {
                this.curMonth = d;
                var d = this.rangeStart(c),
                    e = this.rangeEnd(c),
                    e = this.daysBetween(d, e);
                this.$days.empty();
                for (var l = 0; l <= e; l++) {
                    var h = new Date(d.getFullYear(), d.getMonth(), d.getDate() + l, 12, 0),
                        q = b("<div></div>").attr("date", this.format(h));
                    q.text(h.getDate());
                    h.getMonth() != c.getMonth() && q.addClass("overlap");
                    this.$days.append(q)
                }
                this.updateName(this.$month, this.monthNames[c.getMonth()]);
                this.updateName(this.$year, this.curMonth.getFullYear());
                this.$days.find("div").click(b.proxy(function (c) {
                    c = b(c.target);
                    this.update(c.attr("date"));
                    this.$days.find("div").removeClass("selected");
                    c.addClass("selected");
                    c.hasClass("overlap") || this.hide()
                }, this));
                b("[date='" + this.format(new Date) + "']", this.$days).addClass("today")
            }
            b(".selected", this.$days).removeClass("selected");
            b('[date="' + this.selectedDateStr + '"]', this.$days).addClass("selected")
        },
        selectDate: function (b) {
            "undefined" == typeof b && (b = this.parse(this.$el.val()));
            b || (b = new Date);
            this.selectedDate = b;
            this.selectedDateStr = this.format(this.selectedDate);
            this.selectMonth(this.selectedDate)
        },
        update: function (b) {
            this.$el.val(b);
            this.$el.trigger("change")
        },
        show: function (b) {
            b && b.stopPropagation();
            this.$el.offset();
            this.$picker.show()
        },
        hide: function () {},
        keyHandler: function (b) {
            switch (b.keyCode) {
            case 9:
            case 27:
                this.hide();
                return;
            case 13:
                this.update(this.selectedDateStr);
                this.hide();
                break;
            case 38:
                this.ahead(0, -7);
                break;
            case 40:
                this.ahead(0, 7);
                break;
            case 37:
                this.ahead(0, -1);
                break;
            case 39:
                this.ahead(0, 1);
                break;
            default:
                return
            }
            b.preventDefault()
        },
        parse: function (b) {
            var c;
            return (c = b.match(/^(\d{4,4})-(\d{2,2})-(\d{2,2})$/)) ? new Date(c[1], c[2] - 1, c[3]) : null
        },
        format: function (b) {
            var c = (b.getMonth() + 1).toString(),
                e = b.getDate().toString();
            1 === c.length && (c = "0" + c);
            1 === e.length && (e = "0" + e);
            return b.getFullYear() + "-" + c + "-" + e
        },
        ahead: function (b, c) {
            this.selectDate(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + b, this.selectedDate.getDate() + c))
        },
        proxy: function (c) {
            this[c] = b.proxy(this[c], this);
            return this
        },
        daysBetween: function (b, c) {
            b = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            c = Date.UTC(c.getFullYear(), c.getMonth(), c.getDate());
            return (c - b) / 864E5
        },
        findClosest: function (b, c, e) {
            b = e * (Math.abs(c.getDay() - b - 7 * e) % 7);
            return new Date(c.getFullYear(), c.getMonth(), c.getDate() + b)
        },
        rangeStart: function (b) {
            return this.findClosest(this.startOfWeek, new Date(b.getFullYear(), b.getMonth()), -1)
        },
        rangeEnd: function (b) {
            return this.findClosest((this.startOfWeek - 1) % 7, new Date(b.getFullYear(), b.getMonth() + 1, 0), 1)
        }
    };
    b.fn.datepicker = function (b) {
        return this.each(function () {
            new c(this, b)
        })
    };
    b(function () {
        b("[data-datepicker]").datepicker()
    });
    b.fn.datepicker.DatePicker = c;
    b.fn.datepicker.defaults = {
        monthNames: "January February March April May June July August September October November December".split(" "),
        shortDayNames: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        startOfWeek: 1
    }
}(window.jQuery || window.ender || window.Zepto);
(function (b) {
    function c() {
        var c;
        c = b(this);
        if (!c.data("timeago")) {
            c.data("timeago", {
                datetime: f.datetime(c)
            });
            var g = b.trim(c.text());
            0 < g.length && c.attr("title", g)
        }
        c = c.data("timeago");
        isNaN(c.datetime) || b(this).text(e(c.datetime));
        return this
    }
    function e(b) {
        return f.inWords((new Date).getTime() - b.getTime())
    }
    b.timeago = function (c) {
        return c instanceof Date ? e(c) : "string" === typeof c ? e(b.timeago.parse(c)) : e(b.timeago.datetime(c))
    };
    var f = b.timeago;
    b.extend(b.timeago, {
        settings: {
            refreshMillis: 6E4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "~ a minute",
                minutes: "%d minutes",
                hour: "~ an hour",
                hours: "~ %d hours",
                day: "a day",
                days: "%d days",
                month: "~ a month",
                months: "%d months",
                year: "~ a year",
                years: "%d years",
                numbers: []
            }
        },
        inWords: function (c) {
            function e(g, h) {
                return (b.isFunction(g) ? g(h, c) : g).replace(/%d/i, f.numbers && f.numbers[h] || h)
            }
            var f = this.settings.strings,
                h = f.prefixAgo,
                q = f.suffixAgo;
            this.settings.allowFuture && (0 > c && (h = f.prefixFromNow, q = f.suffixFromNow), c = Math.abs(c));
            var n = c / 1E3,
                w = n / 60,
                p = w / 60,
                k = p / 24,
                t = k / 365,
                n = 45 > n && e(f.seconds, Math.round(n)) || 90 > n && e(f.minute, 1) || 45 > w && e(f.minutes, Math.round(w)) || 90 > w && e(f.hour, 1) || 24 > p && e(f.hours, Math.round(p)) || 48 > p && e(f.day, 1) || 30 > k && e(f.days, Math.floor(k)) || 60 > k && e(f.month, 1) || 365 > k && e(f.months, Math.floor(k / 30)) || 2 > t && e(f.year, 1) || e(f.years, Math.floor(t));
            return b.trim([h, n, q].join(" "))
        },
        parse: function (c) {
            c = b.trim(c);
            c = c.replace(/\.\d\d\d+/, "");
            c = c.replace(/-/, "/").replace(/-/, "/");
            c = c.replace(/T/, " ").replace(/Z/, " UTC");
            c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            return new Date(c)
        },
        datetime: function (c) {
            c = "time" === b(c).get(0).tagName.toLowerCase() ? b(c).attr("datetime") : b(c).attr("title");
            return f.parse(c)
        }
    });
    b.fn.timeago = function () {
        var b = this;
        b.each(c);
        var e = f.settings;
        0 < e.refreshMillis && setInterval(function () {
            b.each(c)
        }, e.refreshMillis);
        return b
    };
    document.createElement("abbr");
    document.createElement("time")
})(window.jQuery || window.Zepto);
!
function (b) {
    b(function () {
        var c = b.support,
            e = (document.body || document.documentElement).style;
        if (e = void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition) e = "TransitionEnd", b.browser.webkit ? e = "webkitTransitionEnd" : b.browser.mozilla ? e = "transitionend" : b.browser.opera && (e = "oTransitionEnd"), e = {
            end: e
        };
        c.transition = e
    })
}(window.jQuery || window.Zepto);
!
function (b) {
    function c() {
        var c = this,
            d = setTimeout(function () {
                c.$element.off(b.support.transition.end);
                e.call(c)
            }, 500);
        this.$element.one(b.support.transition.end, function () {
            clearTimeout(d);
            e.call(c)
        })
    }
    function e(b) {
        this.$element.hide().trigger("hidden");
        f.call(this)
    }
    function f(c) {
        var e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = b.support.transition && e;
            this.$backdrop = b('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
            "static" != this.options.backdrop && this.$backdrop.click(b.proxy(this.hide, this));
            f && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            f ? this.$backdrop.one(b.support.transition.end, c) : c()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(b.support.transition.end, b.proxy(d, this)) : d.call(this)) : c && c()
    }
    function d() {
        this.$backdrop.remove();
        this.$backdrop = null
    }
    function g() {
        var c = this;
        if (this.isShown && this.options.keyboard) b(document).on("keyup.dismiss.modal", function (b) {
            27 == b.which && c.hide()
        });
        else this.isShown || b(document).off("keyup.dismiss.modal")
    }
    var l = function (c, d) {
            this.options = b.extend({}, b.fn.modal.defaults, d);
            this.$element = b(c).delegate('[data-dismiss="modal"]', "click.dismiss.modal", b.proxy(this.hide, this))
        };
    l.prototype = {
        constructor: l,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var c = this;
            this.isShown || (b("body").addClass("modal-open"), this.isShown = !0, this.$element.trigger("show"), g.call(this), f.call(this, function () {
                var d = b.support.transition && c.$element.hasClass("fade");
                !c.$element.parent().length && c.$element.appendTo(document.body);
                c.$element.show();
                d && c.$element[0].offsetWidth;
                c.$element.addClass("in");
                d ? c.$element.one(b.support.transition.end, function () {
                    c.$element.trigger("shown")
                }) : c.$element.trigger("shown")
            }))
        },
        hide: function (d) {
            d && d.preventDefault();
            this.isShown && (this.isShown = !1, b("body").removeClass("modal-open"), g.call(this), this.$element.trigger("hide").removeClass("in"), b.support.transition && this.$element.hasClass("fade") ? c.call(this) : e.call(this))
        }
    };
    b.fn.modal = function (c) {
        return this.each(function () {
            var d = b(this),
                e = d.data("modal"),
                f = "object" == typeof c && c;
            e || d.data("modal", e = new l(this, f));
            if ("string" == typeof c) e[c]();
            else e.show()
        })
    };
    b.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0
    };
    b.fn.modal.Constructor = l
}(window.jQuery || window.Zepto);
!
function (b) {
    var c = function (b, c) {
            this.init("tooltip", b, c)
        };
    c.prototype = {
        constructor: c,
        init: function (c, f, d) {
            this.type = c;
            this.$element = b(f);
            this.options = this.getOptions(d);
            this.enabled = !0;
            "manual" != this.options.trigger && (c = "hover" == this.options.trigger ? "mouseenter" : "focus", f = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(c, this.options.selector, b.proxy(this.enter, this)), this.$element.on(f, this.options.selector, b.proxy(this.leave, this)));
            this.options.selector ? this._options = b.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (c) {
            c = b.extend({}, b.fn[this.type].defaults, c, this.$element.data());
            c.delay && "number" == typeof c.delay && (c.delay = {
                show: c.delay,
                hide: c.delay
            });
            return c
        },
        enter: function (c) {
            var f = b(c.currentTarget)[this.type](this._options).data(this.type);
            f.options.delay && f.options.delay.show ? (f.hoverState = "in", setTimeout(function () {
                "in" == f.hoverState && f.show()
            }, f.options.delay.show)) : f.show()
        },
        leave: function (c) {
            var f = b(c.currentTarget)[this.type](this._options).data(this.type);
            f.options.delay && f.options.delay.hide ? (f.hoverState = "out", setTimeout(function () {
                "out" == f.hoverState && f.hide()
            }, f.options.delay.hide)) : f.hide()
        },
        show: function () {
            var b, c, d, g, l, h, q;
            if (this.hasContent() && this.enabled) {
                b = this.tip();
                this.setContent();
                this.options.animation && b.addClass("fade");
                h = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                c = /in/.test(h);
                b.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(c ? this.$element : document.body);
                d = this.getPosition(c);
                g = b[0].offsetWidth;
                l = b[0].offsetHeight;
                switch (c ? h.split(" ")[1] : h) {
                case "bottom":
                    q = {
                        top: d.top + d.height,
                        left: d.left + d.width / 2 - g / 2
                    };
                    break;
                case "top":
                    q = {
                        top: d.top - l,
                        left: d.left + d.width / 2 - g / 2
                    };
                    break;
                case "left":
                    q = {
                        top: d.top + d.height / 2 - l / 2,
                        left: d.left - g
                    };
                    break;
                case "right":
                    q = {
                        top: d.top + d.height / 2 - l / 2,
                        left: d.left + d.width
                    }
                }
                b.css(q).addClass(h).addClass("in")
            }
        },
        setContent: function () {
            var b = this.tip();
            b.find(".tooltip-inner").html(this.getTitle());
            b.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function c() {
                var d = setTimeout(function () {
                    f.off(b.support.transition.end).remove()
                }, 500);
                f.one(b.support.transition.end, function () {
                    clearTimeout(d);
                    f.remove()
                })
            }
            var f = this.tip();
            f.removeClass("in");
            b.support.transition && this.$tip.hasClass("fade") ? c() : f.remove()
        },
        fixTitle: function () {
            var b = this.$element;
            (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").removeAttr("title")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (c) {
            return b.extend({}, c ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var b;
            b = this.$element;
            var c = this.options;
            (b = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)) || (b = "");
            return b = b.toString().replace(/(^\s*|\s*$)/, "")
        },
        tip: function () {
            return this.$tip = this.$tip || b(this.options.template)
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.options = this.$element = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    };
    b.fn.tooltip = function (e) {
        return this.each(function () {
            var f = b(this),
                d = f.data("tooltip"),
                g = "object" == typeof e && e;
            d || f.data("tooltip", d = new c(this, g));
            if ("string" == typeof e) d[e]()
        })
    };
    b.fn.tooltip.Constructor = c;
    b.fn.tooltip.defaults = {
        animation: !0,
        delay: 0,
        selector: !1,
        placement: "top",
        trigger: "hover",
        title: "",
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    }
}(window.jQuery || window.Zepto);
var AutoResizer = function (b, c) {
        var e = this;
        this.$textArea = $(b);
        this.minHeight = this.$textArea.height();
        this.options = $.extend({}, $.fn.autoResizer.defaults, c);
        this.$shadowArea = $("<div></div>").css({
            position: "absolute",
            top: -1E4,
            left: -1E4,
            fontSize: this.$textArea.css("fontSize") || "inherit",
            fontFamily: this.$textArea.css("fontFamily") || "inherit",
            lineHeight: this.$textArea.css("lineHeight") || "inherit",
            resize: "none"
        }).appendTo(document.body);
        var f = this.$textArea.width() || $(window).width();
        this.$shadowArea.width(f);
        this.options.resizeOnChange && (f = function () {
            window.setTimeout(function () {
                e.checkResize()
            }, 0)
        }, this.$textArea.change(f).keyup(f).keydown(f).focus(f));
        this.checkResize()
    };
AutoResizer.prototype = {
    constructor: AutoResizer,
    checkResize: function () {
        if (0 !== this.$textArea.height()) {
            0 === this.minHeight && (this.minHeight = this.$textArea.height());
            0 !== this.$textArea.width() && 20 < Math.abs(this.$shadowArea.width() - this.$textArea.width()) && this.$shadowArea.width(this.$textArea.width());
            var b = this.$textArea.val().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n/g, "<br/>&nbsp;");
            "" === $.trim(b) && (b = "a");
            this.$shadowArea.html(b);
            b = Math.max(this.$shadowArea[0].offsetHeight + 10, this.minHeight);
            this.prevHeight && b == this.prevHeight || (this.$textArea.css("height", b), this.prevHeight = b)
        }
    }
};
$.fn.autoResizer = function (b) {
    return this.each(function () {
        var c = $(this),
            e = c.data("autoresizer"),
            f = "object" == typeof b && b;
        e || c.data("autoresizer", e = new AutoResizer(this, f));
        if ("string" == typeof b) e[b]();
        else e.checkResize()
    })
};
$.fn.autoResizer.defaults = {
    resizeOnChange: !0
};
$.fn.autoResizer.Constructor = AutoResizer;
var lscache = function () {
        function b() {
            if (void 0 !== g) return g;
            try {
                e("__lscachetest__", "__lscachetest__"), localStorage.removeItem("__lscachetest__"), g = !0
            } catch (b) {
                g = !1
            }
            return g
        }
        function c() {
            void 0 === l && (l = null != window.JSON);
            return l
        }
        function e(b, c) {
            localStorage.removeItem(d + b);
            localStorage.setItem(d + b, c)
        }
        function f(b) {
            localStorage.removeItem(d + b)
        }
        var d = "lscache-",
            g, l;
        return {
            set: function (g, l, n) {
                if (b()) {
                    if ("string" != typeof l) {
                        if (!c()) return;
                        try {
                            l = JSON.stringify(l)
                        } catch (w) {
                            return
                        }
                    }
                    try {
                        e(g, l)
                    } catch (p) {
                        if ("QUOTA_EXCEEDED_ERR" === p.name || "NS_ERROR_DOM_QUOTA_REACHED" == p.name) {
                            for (var k = [], t, v = 0; v < localStorage.length; v++) if (t = localStorage.key(v), 0 === t.indexOf(d) && 0 > t.indexOf("-cacheexpiration")) {
                                t = t.substr(d.length);
                                var m = localStorage.getItem(d + (t + "-cacheexpiration")),
                                    m = m ? parseInt(m, 10) : 99999999999;
                                k.push({
                                    key: t,
                                    size: localStorage.getItem(d + t).length,
                                    expiration: m
                                })
                            }
                            k.sort(function (b, c) {
                                return c.expiration - b.expiration
                            });
                            for (v = (l || "").length; k.length && 0 < v;) t = k.pop(), f(t.key), f((t + "-cacheexpiration").key), v -= t.size;
                            try {
                                e(g, l)
                            } catch (H) {
                                return
                            }
                        } else return
                    }
                    n ? e(g + "-cacheexpiration", (Math.floor((new Date).getTime() / 6E4) + n).toString(10)) : f(g + "-cacheexpiration")
                }
            },
            get: function (e) {
                if (!b()) return null;
                var g = e + "-cacheexpiration",
                    l = localStorage.getItem(d + g);
                if (l && (l = parseInt(l, 10), Math.floor((new Date).getTime() / 6E4) >= l)) return f(e), f(g), null;
                e = localStorage.getItem(d + e);
                if (!e || !c()) return e;
                try {
                    return JSON.parse(e)
                } catch (w) {
                    return e
                }
            },
            remove: function (c) {
                if (!b()) return null;
                f(c);
                f(c + "-cacheexpiration")
            }
        }
    }();

function personalize(b, c) {
    function e(b, c, d) {
        b = h[n][d];
        return k[b] || c + b
    }
    function f(b, c) {
        var d = "";
        "third" == n ? -1 < c.indexOf("|name") ? d = w : (d = g[n][q][v], c.charAt(0) == c.charAt(0).toUpperCase() && (d = d.charAt(0).toUpperCase() + d.slice(1))) : (d = g[n][v], c.charAt(0) == c.charAt(0).toUpperCase() && (d = d.charAt(0).toUpperCase() + d.slice(1)));
        return d
    }
    for (var d = ["subjective", "objective", "possessive", "reflexive"], g = {
        first: {
            subjective: "I",
            objective: "me",
            possessive: "my",
            reflexive: "myself"
        },
        second: {
            subjective: "you",
            objective: "you",
            possessive: "your",
            reflexive: "yourself"
        },
        third: {
            neutral: {
                subjective: "they",
                objective: "them",
                possessive: "their",
                reflexive: "themself"
            },
            female: {
                subjective: "she",
                objective: "her",
                possessive: "her",
                reflexive: "herself"
            },
            male: {
                subjective: "he",
                objective: "him",
                possessive: "his",
                reflexive: "himself"
            }
        }
    }, l = ["are", "are|not", "have", "have|not"], h = {
        first: {
            have: "have",
            "have|not": "haven't",
            are: "am",
            "are|not": "am not"
        },
        second: {
            have: "have",
            "have|not": "haven't",
            are: "are",
            "are|not": "aren't"
        },
        third: {
            have: "has",
            "have|not": "hasn't",
            are: "is",
            "are|not": "isn't"
        }
    }, q = c.gender || "neutral", n = c.person || "third", w = c.name || "Anon", p = b, k = {
        have: "'ve",
        has: "'s",
        are: "'re",
        is: "'s",
        am: "'m"
    }, t = 0; t < l.length; t++) p = p.replace(RegExp("(\\s*){{\\s*(" + l[t] + "[|not]*)\\s*}}", "g"), e);
    for (t = 0; t < d.length; t++) var v = d[t],
        p = p.replace(RegExp("{{\\s*(" + g.third.neutral[v] + "[|name]*)\\s*}}", "gi"), f);
    return p
}

function testPersonalize() {
    for (var b = ["{{ They|name }} {{ have }} been on a downward trend this week - {{ they }} {{ are }} losing an average of X per day.", "{{ They|name }} avoided X for the last week.", "{{ They|name }} {{ have|not }} logged any measurements.", "We haven't seen any logs from {{ them|name }} in the last week."], c = [{
        gender: "female",
        person: "first",
        name: "Pamela"
    }, {
        gender: "female",
        person: "second",
        name: "Pamela"
    }, {
        gender: "female",
        person: "third",
        name: "Pamela"
    }, {
        gender: "male",
        person: "third",
        name: "Anton"
    }], e = 0; e < b.length; e++) {
        var f = b[e];
        document.write("<br><br><b>" + f + "</b><br>");
        for (var d = 0; d < c.length; d++) {
            var g = personalize(f, c[d]);
            document.write(g + "<br>")
        }
    }
}
var UserAgent;
UserAgent = function () {
    var b, c, e, f, d, g, l, h, q, n, w, p, k, t, v, m, H, E, x, N, O, K, L, B, ca, pa, I, T, ga, Z, ja, oa, da, ka, Pa, ya, Xa, bb, La, ab;
    b = /firefox\/([\d\w\.\-]+)/i;
    c = /msie\s([\d\.]+[\d])/i;
    e = /chrome\/([\d\w\.\-]+)/i;
    f = /version\/([\d\w\.\-]+)/i;
    d = /([\d\w\.\-]+)\)\s*$/i;
    g = /([\d\w\.\-]+)\)?\s*$/i;
    ga = /konqueror/i;
    Z = /chrome/i;
    ja = /safari/i;
    oa = /msie/i;
    da = /opera/i;
    ka = /playstation 3/i;
    Pa = /playstation portable/i;
    ya = /firefox/i;
    H = /windows nt 6\.0/i;
    E = /windows nt 6\.\d+/i;
    x = /windows nt 5\.2/i;
    N = /windows nt 5\.1/i;
    O = /windows nt 5\.0/i;
    K = /os x (\d+)[._](\d+)/i;
    L = /linux/i;
    B = /wii/i;
    ca = /playstation 3/i;
    pa = /playstation portable/i;
    I = /\(iPad.*os (\d+)[._](\d+)/i;
    T = /\(iPhone.*os (\d+)[._](\d+)/i;
    l = /windows/i;
    h = /macintosh/i;
    q = /linux/i;
    n = /wii/i;
    w = /playstation/i;
    p = /ipad/i;
    k = /ipod/i;
    t = /iphone/i;
    v = /android/i;
    m = /blackberry/i;
    Xa = function (b) {
        switch (!0) {
        case ga.test(b):
            return "konqueror";
        case Z.test(b):
            return "chrome";
        case ja.test(b):
            return "safari";
        case oa.test(b):
            return "ie";
        case da.test(b):
            return "opera";
        case ka.test(b):
            return "ps3";
        case Pa.test(b):
            return "psp";
        case ya.test(b):
            return "firefox";
        default:
            return "unknown"
        }
    };
    bb = function (h) {
        switch (Xa(h)) {
        case "chrome":
            if (e.test(h)) return RegExp.$1;
            break;
        case "safari":
            if (f.test(h)) return RegExp.$1;
            break;
        case "firefox":
            if (b.test(h)) return RegExp.$1;
            break;
        case "ie":
            if (c.test(h)) return RegExp.$1;
            break;
        case "ps3":
            if (d.test(h)) return RegExp.$1;
            break;
        case "psp":
            if (g.test(h)) return RegExp.$1;
            break;
        default:
            if (/#{name}[\/ ]([\d\w\.\-]+)/i.test(h)) return RegExp.$1
        }
    };
    La = function (b) {
        switch (!0) {
        case H.test(b):
            return "Windows Vista";
        case E.test(b):
            return "Windows 7";
        case x.test(b):
            return "Windows 2003";
        case N.test(b):
            return "Windows XP";
        case O.test(b):
            return "Windows 2000";
        case L.test(b):
            return "Linux";
        case B.test(b):
            return "Wii";
        case ca.test(b):
            return "Playstation";
        case pa.test(b):
            return "Playstation";
        case K.test(b):
            return b.match(K)[0].replace("_", ".");
        case I.test(b):
            return b.match(I)[0].replace("_", ".");
        case T.test(b):
            return b.match(T)[0].replace("_", ".");
        default:
            return "unknown"
        }
    };
    ab = function (b) {
        switch (!0) {
        case l.test(b):
            return "Microsoft Windows";
        case h.test(b):
            return "Apple Mac";
        case v.test(b):
            return "Android";
        case m.test(b):
            return "Blackberry";
        case q.test(b):
            return "Linux";
        case n.test(b):
            return "Wii";
        case w.test(b):
            return "Playstation";
        case p.test(b):
            return "iPad";
        case k.test(b):
            return "iPod";
        case t.test(b):
            return "iPhone";
        default:
            return "unknown"
        }
    };
    return function (b) {
        null == b && (b = navigator.userAgent);
        this.source = b.replace(/^\s*/, "").replace(/\s*$/, "");
        this.browser_name = Xa(this.source);
        this.browser_version = bb(this.source);
        this.os = La(this.source);
        this.platform = ab(this.source)
    }
}();

function printStackTrace(b) {
    b = b || {
        guess: !0
    };
    var c = b.e || null;
    b = !! b.guess;
    var e = new printStackTrace.implementation,
        c = e.run(c);
    return b ? e.guessAnonymousFunctions(c) : c
}
printStackTrace.implementation = function () {};
printStackTrace.implementation.prototype = {
    run: function (b, c) {
        b = b || this.createException();
        c = c || this.mode(b);
        return "other" === c ? this.other(arguments.callee) : this[c](b)
    },
    createException: function () {
        try {
            return this.undef(), null
        } catch (b) {
            return b
        }
    },
    mode: function (b) {
        return b.arguments && b.stack ? "chrome" : b.message && "undefined" !== typeof window && window.opera ? b.stacktrace ? "opera10" : "opera" : b.stack ? "firefox" : "other"
    },
    instrumentFunction: function (b, c, e) {
        b = b || window;
        var f = b[c];
        b[c] = function () {
            e.call(this, printStackTrace().slice(4));
            return b[c]._instrumented.apply(this, arguments)
        };
        b[c]._instrumented = f
    },
    deinstrumentFunction: function (b, c) {
        b[c].constructor === Function && (b[c]._instrumented && b[c]._instrumented.constructor === Function) && (b[c] = b[c]._instrumented)
    },
    chrome: function (b) {
        b = (b.stack + "\n").replace(/^\S[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}()@$1").split("\n");
        b.pop();
        return b
    },
    firefox: function (b) {
        return b.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^\(/gm, "{anonymous}(").split("\n")
    },
    opera10: function (b) {
        var c = /.*line (\d+), column (\d+) in ((<anonymous function\:?\s*(\S+))|([^\(]+)\([^\)]*\))(?: in )?(.*)\s*$/i,
            e, f = b.stacktrace.split("\n"),
            d = [];
        b = 2;
        for (e = f.length; b < e - 2; b++) if (c.test(f[b])) {
            var g = RegExp.$6 + ":" + RegExp.$1 + ":" + RegExp.$2,
                l = RegExp.$3,
                l = l.replace(/<anonymous function\:?\s?(\S+)?>/g, "{anonymous}");
            d.push(l + "@" + g)
        }
        return d
    },
    opera: function (b) {
        var c = /Line\s+(\d+).*script\s+(http\S+)(?:.*in\s+function\s+(\S+))?/i;
        b = b.message.split("\n");
        for (var e = [], f = 4, d = b.length; f < d; f += 2) c.test(b[f]) && e.push((RegExp.$3 ? RegExp.$3 + "()@" + RegExp.$2 + RegExp.$1 : "{anonymous}()@" + RegExp.$2 + ":" + RegExp.$1) + " -- " + b[f + 1].replace(/^\s+/, ""));
        return e
    },
    other: function (b) {
        for (var c = /function\s*([\w\-$]+)?\s*\(/i, e = [], f, d; b && 10 > e.length;) f = c.test(b.toString()) ? RegExp.$1 || "{anonymous}" : "{anonymous}", d = Array.prototype.slice.call(b.arguments || []), e[e.length] = f + "(" + this.stringifyArguments(d) + ")", b = b.caller;
        return e
    },
    stringifyArguments: function (b) {
        for (var c = [], e = Array.prototype.slice, f = 0; f < b.length; ++f) {
            var d = b[f];
            void 0 === d ? c[f] = "undefined" : null === d ? c[f] = "null" : d.constructor && (d.constructor === Array ? c[f] = 3 > d.length ? "[" + this.stringifyArguments(d) + "]" : "[" + this.stringifyArguments(e.call(d, 0, 1)) + "..." + this.stringifyArguments(e.call(d, -1)) + "]" : d.constructor === Object ? c[f] = "#object" : d.constructor === Function ? c[f] = "#function" : d.constructor === String ? c[f] = '"' + d + '"' : d.constructor === Number && (c[f] = d))
        }
        return c.join(",")
    },
    sourceCache: {},
    ajax: function (b) {
        var c = this.createXMLHTTPObject();
        if (c) try {
            return c.open("GET", b, !1), c.send(""), c.responseText
        } catch (e) {}
        return ""
    },
    createXMLHTTPObject: function () {
        for (var b, c = [function () {
            return new XMLHttpRequest
        }, function () {
            return new ActiveXObject("Msxml2.XMLHTTP")
        }, function () {
            return new ActiveXObject("Msxml3.XMLHTTP")
        }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }], e = 0; e < c.length; e++) try {
            return b = c[e](), this.createXMLHTTPObject = c[e], b
        } catch (f) {}
    },
    isSameDomain: function (b) {
        return -1 !== b.indexOf(location.hostname)
    },
    getSource: function (b) {
        b in this.sourceCache || (this.sourceCache[b] = this.ajax(b).split("\n"));
        return this.sourceCache[b]
    },
    guessAnonymousFunctions: function (b) {
        for (var c = 0; c < b.length; ++c) {
            var e = /^(.*?)(?::(\d+))(?::(\d+))?$/,
                f = b[c],
                d = /\{anonymous\}\(.*\)@(.*)/.exec(f);
            if (d) {
                var g = e.exec(d[1]),
                    e = g[1],
                    d = g[2],
                    g = g[3] || 0;
                e && (this.isSameDomain(e) && d) && (e = this.guessAnonymousFunction(e, d, g), b[c] = f.replace("{anonymous}", e))
            }
        }
        return b
    },
    guessAnonymousFunction: function (b, c, e) {
        var f;
        try {
            f = this.findFunctionName(this.getSource(b), c)
        } catch (d) {
            f = "getSource failed with url: " + b + ", exception: " + d.toString()
        }
        return f
    },
    findFunctionName: function (b, c) {
        for (var e = /function\s+([^(]*?)\s*\(([^)]*)\)/, f = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function\b/, d = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(?:eval|new Function)\b/, g = "", l, h = 0; 10 > h; ++h) if (l = b[c - h]) if (g = l + g, (l = f.exec(g)) && l[1] || (l = e.exec(g)) && l[1] || (l = d.exec(g)) && l[1]) return l[1];
        return "(?)"
    }
};
(function () {
    function b(b, c) {
        var d;
        b || (b = {});
        for (d in c) b[d] = c[d];
        return b
    }
    function c(b, c) {
        return parseInt(b, c || 10)
    }
    function e(b) {
        return "string" === typeof b
    }
    function f(b) {
        return "object" === typeof b
    }
    function d(b) {
        return "number" === typeof b
    }
    function g(b, c) {
        for (var d = b.length; d--;) if (b[d] === c) {
            b.splice(d, 1);
            break
        }
    }
    function l(b) {
        return b !== Ha && null !== b
    }
    function h(b, c, d) {
        var C, g;
        if (e(c)) l(d) ? b.setAttribute(c, d) : b && b.getAttribute && (g = b.getAttribute(c));
        else if (l(c) && f(c)) for (C in c) b.setAttribute(C, c[C]);
        return g
    }

    function q(b) {
        b && b.constructor === Array || (b = [b]);
        return b
    }
    function n() {
        var b = arguments,
            c, d, e = b.length;
        for (c = 0; c < e; c++) if (d = b[c], "undefined" !== typeof d && null !== d) return d
    }
    function w(c, d) {
        Pa && (d && d.opacity !== Ha) && (d.filter = "alpha(opacity=" + 100 * d.opacity + ")");
        b(c.style, d)
    }
    function p(c, d, r, e, f) {
        c = O.createElement(c);
        d && b(c, d);
        f && w(c, {
            padding: 0,
            border: va,
            margin: 0
        });
        r && w(c, r);
        e && e.appendChild(c);
        return c
    }
    function k(c, d) {
        var r = function () {};
        r.prototype = new c;
        b(r.prototype, d);
        return r
    }
    function t(b, d, r, e) {
        var f = Ga.lang,
            g = isNaN(d = ga(d)) ? 2 : d;
        d = void 0 === r ? f.decimalPoint : r;
        e = void 0 === e ? f.thousandsSep : e;
        f = 0 > b ? "-" : "";
        r = String(c(b = ga(+b || 0).toFixed(g)));
        var h = 3 < r.length ? r.length % 3 : 0;
        return f + (h ? r.substr(0, h) + e : "") + r.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + e) + (g ? d + ga(b - r).toFixed(g).slice(2) : "")
    }
    function v() {
        this.symbol = this.color = 0
    }
    function m(b, c) {
        Eb = n(b, c.animation)
    }
    function H() {
        var b = Ga.global.useUTC;
        Fb = b ? Date.UTC : function (b, c, d, u, e, f) {
            return (new Date(b, c, n(d, 1), n(u, 0), n(e, 0), n(f, 0))).getTime()
        };
        Pb = b ? "getUTCMinutes" : "getMinutes";
        Qb = b ? "getUTCHours" : "getHours";
        Rb = b ? "getUTCDay" : "getDay";
        xb = b ? "getUTCDate" : "getDate";
        Gb = b ? "getUTCMonth" : "getMonth";
        Hb = b ? "getUTCFullYear" : "getFullYear";
        gc = b ? "setUTCMinutes" : "setMinutes";
        hc = b ? "setUTCHours" : "setHours";
        Sb = b ? "setUTCDate" : "setDate";
        ic = b ? "setUTCMonth" : "setMonth";
        jc = b ? "setUTCFullYear" : "setFullYear"
    }
    function E(b) {
        hb || (hb = p(jb));
        b && hb.appendChild(b);
        hb.innerHTML = ""
    }
    function x() {}
    function N(d, s) {
        function r(d, u) {
            function s(b, c) {
                this.pos = b;
                this.minor = c;
                this.isNew = !0;
                c || this.addLabel()
            }

            function e(b) {
                b && (this.options = b, this.id = b.id);
                return this
            }
            function r(b, c, d) {
                this.isNegative = c;
                this.options = b;
                this.x = d;
                this.alignOptions = {
                    align: b.align || (aa ? c ? "left" : "right" : "center"),
                    verticalAlign: b.verticalAlign || (aa ? "middle" : c ? "bottom" : "top"),
                    y: n(b.y, aa ? 4 : c ? 14 : -6),
                    x: n(b.x, aa ? c ? -6 : 6 : 0)
                };
                this.textAlign = b.textAlign || (aa ? c ? "right" : "left" : "center")
            }
            function f() {
                var b = [],
                    c = [],
                    d;
                Ra = E = null;
                sa = [];
                A(qa, function (s) {
                    d = !1;
                    A(["xAxis", "yAxis"], function (b) {
                        s.isCartesian && (("xAxis" === b && m || "yAxis" === b && !m) && (s.options[b] === u.index || s.options[b] === Ha && 0 === u.index)) && (s[b] = R, sa.push(s), d = !0)
                    });
                    !s.visible && P.ignoreHiddenSeries && (d = !1);
                    if (d) {
                        var e, f, C, g, F;
                        m || (e = s.options.stacking, ka = "percent" === e, e && (g = s.type + n(s.options.stack, ""), F = "-" + g, s.stackKey = g, f = b[g] || [], b[g] = f, C = c[F] || [], c[F] = C), ka && (Ra = 0, E = 99));
                        s.isCartesian && (A(s.data, function (b, c) {
                            var d = b.x,
                                s = b.y,
                                h = 0 > s,
                                G = h ? C : f,
                                z = h ? F : g;
                            null === Ra && (Ra = E = b[J]);
                            m ? d > E ? E = d : d < Ra && (Ra = d) : l(s) && (e && (G[d] = l(G[d]) ? G[d] + s : s), s = G ? G[d] : s, G = n(b.low, s), ka || (s > E ? E = s : G < Ra && (Ra = G)), e && (M[z] || (M[z] = {}), M[z][d] || (M[z][d] = new r(u.stackLabels, h, d)), M[z][d].setTotal(s)))
                        }), /(area|column|bar)/.test(s.type) && !m && (0 <= Ra ? (Ra = 0, ja = !0) : 0 > E && (E = 0, oa = !0)))
                    }
                })
            }
            function C(b, c) {
                var d, s;
                ma = c ? 1 : L.pow(10, ca(L.log(b) / L.LN10));
                d = b / ma;
                !c && (c = [1, 2, 2.5, 5, 10], !1 === u.allowDecimals || v) && (1 === ma ? c = [1, 2, 5, 10] : 0.1 >= ma && (c = [1 / ma]));
                for (s = 0; s < c.length && !(b = c[s], d <= (c[s] + (c[s + 1] || c[s])) / 2); s++);
                return b *= ma
            }
            function F(b) {
                var c;
                c = b;
                ma = n(ma, L.pow(10, ca(L.log(V) / L.LN10)));
                1 > ma && (c = 10 * B(1 / ma), c = B(b * c) / c);
                return c
            }
            function h(b) {
                var c, s, e, r;
                b = u.tickInterval;
                var f = u.tickPixelInterval;
                c = u.maxZoom || (!m || l(u.min) || l(u.max) ? null : T(5 * d.smallestInterval, E - Ra));
                Fa = q ? la : ha;
                Z ? (e = d[m ? "xAxis" : "yAxis"][u.linkedTo], r = e.getExtremes(), W = n(r.min, r.dataMin), Y = n(r.max, r.dataMax)) : (W = n(K, u.min, Ra), Y = n(O, u.max, E));
                v && (W = L.log(W) / L.LN10, Y = L.log(Y) / L.LN10);
                Y - W < c && (r = (c - Y + W) / 2, W = I(W - r, n(u.min, W - r), Ra), Y = T(W + c, n(u.max, W + c), E));
                Ia || (ka || Z || !l(W) || !l(Y)) || (c = Y - W || 1, l(u.min) || (l(K) || !ba || !(0 > Ra) && ja) || (W -= c * ba), l(u.max) || (l(O) || !vb || !(0 < E) && oa) || (Y += c * vb));
                V = W === Y ? 1 : Z && !b && f === e.options.tickPixelInterval ? e.tickInterval : n(b, Ia ? 1 : (Y - W) * f / Fa);
                y || l(u.tickInterval) || (V = C(V));
                R.tickInterval = V;
                ta = "auto" === u.minorTickInterval && V ? V / 5 : u.minorTickInterval;
                if (y) {
                    ea = [];
                    b = Ga.global.useUTC;
                    var g = 1E3 / Qa,
                        G = 6E4 / Qa,
                        z = 36E5 / Qa,
                        f = 864E5 / Qa;
                    c = 6048E5 / Qa;
                    r = 2592E6 / Qa;
                    var k = 31556952E3 / Qa,
                        p = [
                            ["second", g, [1, 2, 5, 10, 15, 30]],
                            ["minute", G, [1, 2, 5, 10, 15, 30]],
                            ["hour", z, [1, 2, 3, 4, 6, 8, 12]],
                            ["day", f, [1, 2]],
                            ["week", c, [1, 2]],
                            ["month", r, [1, 2, 3, 4, 6]],
                            ["year", k, null]
                        ],
                        Q = p[6],
                        D = Q[1],
                        M = Q[2];
                    for (e = 0; e < p.length && !(Q = p[e], D = Q[1], M = Q[2], p[e + 1] && V <= (D * M[M.length - 1] + p[e + 1][1]) / 2); e++);
                    D === k && V < 5 * D && (M = [1, 2, 5]);
                    p = C(V / D, M);
                    M = new Date(W * Qa);
                    M.setMilliseconds(0);
                    D >= g && M.setSeconds(D >= G ? 0 : p * ca(M.getSeconds() / p));
                    if (D >= G) M[gc](D >= z ? 0 : p * ca(M[Pb]() / p));
                    if (D >= z) M[hc](D >= f ? 0 : p * ca(M[Qb]() / p));
                    if (D >= f) M[Sb](D >= r ? 1 : p * ca(M[xb]() / p));
                    D >= r && (M[ic](D >= k ? 0 : p * ca(M[Gb]() / p)), s = M[Hb]());
                    if (D >= k) M[jc](s - s % p);
                    if (D === c) M[Sb](M[xb]() - M[Rb]() + u.startOfWeek);
                    e = 1;
                    s = M[Hb]();
                    g = M.getTime() / Qa;
                    G = M[Gb]();
                    for (z = M[xb](); g < Y && e < la;) ea.push(g), g = D === k ? Fb(s + e * p, 0) / Qa : D === r ? Fb(s, G + e * p) / Qa : b || D !== f && D !== c ? g + D * p : Fb(s, G, z + e * p * (D === f ? 1 : 7)), e++;
                    ea.push(g);
                    La = u.dateTimeLabelFormats[Q[0]]
                } else for (e = F(ca(W / V) * V), s = F(pa(Y / V) * V), ea = [], e = F(e); e <= s;) ea.push(e), e = F(e + V);
                if (!Z) {
                    if (Ia || m && d.hasColumn) {
                        s = 0.5 * (Ia ? 1 : V);
                        if (Ia || !l(n(u.min, K))) W -= s;
                        if (Ia || !l(n(u.max, O))) Y += s
                    }
                    s = ea[0];
                    e = ea[ea.length - 1];
                    u.startOnTick ? W = s : W > s && ea.shift();
                    u.endOnTick ? Y = e : Y < e && ea.pop();
                    db || (db = {
                        x: 0,
                        y: 0
                    });
                    !y && ea.length > db[J] && (db[J] = ea.length)
                }
            }
            function G() {
                var b, c;
                N = W;
                nc = Y;
                f();
                h();
                Mb = Ka;
                Ka = Fa / (Y - W || 1);
                if (!m) for (b in M) for (c in M[b]) M[b][c].cum = M[b][c].total;
                R.isDirty || (R.isDirty = W !== N || Y !== nc)
            }
            function z(b) {
                b = (new e(b)).render();
                da.push(b);
                return b
            }
            function k() {
                var b = u.title,
                    r = u.stackLabels,
                    f = u.alternateGridColor,
                    C = u.lineWidth,
                    g, F, h = d.hasRendered,
                    G = h && l(N) && !isNaN(N);
                g = sa.length && l(W) && l(Y);
                Fa = q ? la : ha;
                Ka = Fa / (Y - W || 1);
                Ea = q ? S : Ua;
                if (g || Z) {
                    if (ta && !Ia) for (g = W + (ea[0] - W) % ta, g; g <= Y; g += ta) ua[g] || (ua[g] = new s(g, !0)), G && ua[g].isNew && ua[g].render(null, !0), ua[g].isActive = !0, ua[g].render();
                    A(ea, function (b, c) {
                        if (!Z || b >= W && b <= Y) G && ia[b].isNew && ia[b].render(c, !0), ia[b].isActive = !0, ia[b].render(c)
                    });
                    f && A(ea, function (b, c) {
                        0 === c % 2 && b < Y && (ya[b] || (ya[b] = new e), ya[b].options = {
                            from: b,
                            to: ea[c + 1] !== Ha ? ea[c + 1] : Y,
                            color: f
                        }, ya[b].render(), ya[b].isActive = !0)
                    });
                    h || A((u.plotLines || []).concat(u.plotBands || []), function (b) {
                        da.push((new e(b)).render())
                    })
                }
                A([ia, ua, ya], function (b) {
                    for (var c in b) b[c].isActive ? b[c].isActive = !1 : (b[c].destroy(), delete b[c])
                });
                C && (g = S + (Q ? la : 0) + Sa, F = Ba - Ua - (Q ? ha : 0) + Sa, g = X.crispLine([Ma, q ? S : g, q ? F : U, ra, q ? Ja - na : g, q ? F : Ba - Ua], C), Tb ? Tb.animate({
                    d: g
                }) : Tb = X.path(g).attr({
                    stroke: u.lineColor,
                    "stroke-width": C,
                    zIndex: 7
                }).add());
                R.axisTitle && (g = q ? S : U, C = c(b.style.fontSize || 12), g = {
                    low: g + (q ? 0 : Fa),
                    middle: g + Fa / 2,
                    high: g + (q ? Fa : 0)
                }[b.align], C = (q ? U + ha : S) + (q ? 1 : -1) * (Q ? -1 : 1) * Oa + (2 === D ? C : 0), R.axisTitle[h ? "animate" : "attr"]({
                    x: q ? g : C + (Q ? la : 0) + Sa + (b.x || 0),
                    y: q ? C - (Q ? ha : 0) + Sa : g + (b.y || 0)
                }));
                if (r && r.enabled) {
                    var z, p, r = R.stackTotalGroup;
                    r || (R.stackTotalGroup = r = X.g("stack-labels").attr({
                        visibility: Wa,
                        zIndex: 6
                    }).translate(S, U).add());
                    for (z in M) for (p in b = M[z], b) b[p].render(r)
                }
                R.isDirty = !1
            }
            function p(b) {
                for (var c = da.length; c--;) da[c].id === b && da[c].destroy()
            }
            var m = u.isX,
                Q = u.opposite,
                q = aa ? !m : m,
                D = q ? Q ? 0 : 2 : Q ? 1 : 3,
                M = {};
            u = fa(m ? Ib : Ub, [pc, qc, kc, rc][D], u);
            var R = this,
                w = u.type,
                y = "datetime" === w,
                v = "logarithmic" === w,
                Sa = u.offset || 0,
                J = m ? "x" : "y",
                Fa, Ka, Mb, Ea = q ? S : Ua,
                x, Ya, H, mc, Tb, Ra, E, sa, K, O, Y = null,
                W = null,
                N, nc, ba = u.minPadding,
                vb = u.maxPadding,
                Z = l(u.linkedTo),
                ja, oa, ka, w = u.events,
                cc, da = [],
                V, ta, ma, ea, ia = {},
                ua = {},
                ya = {},
                za, va, Oa, La, Ia = u.categories,
                Ta = u.labels.formatter ||
            function () {
                var b = this.value;
                return La ? Db(La, b) : 0 === V % 1E6 ? b / 1E6 + "M" : 0 === V % 1E3 ? b / 1E3 + "k" : !Ia && 1E3 <= b ? t(b, 0) : b
            }, Pa = q && u.labels.staggerLines, Ca = u.reversed, Da = Ia && "between" === u.tickmarkPlacement ? 0.5 : 0;
            s.prototype = {
                addLabel: function () {
                    var c = this.pos,
                        d = u.labels,
                        s = !(c === W && !n(u.showFirstLabel, 1) || c === Y && !n(u.showLastLabel, 0)),
                        e = Ia && q && Ia.length && !d.step && !d.staggerLines && !d.rotation && la / Ia.length || !q && la / 2,
                        r = this.label,
                        c = Ta.call({
                            isFirst: c === ea[0],
                            isLast: c === ea[ea.length - 1],
                            dateTimeLabelFormat: La,
                            value: Ia && Ia[c] ? Ia[c] : c
                        }),
                        e = e && {
                            width: I(1, B(e - 2 * (d.padding || 10))) + Na
                        },
                        e = b(e, d.style);
                    r === Ha ? this.label = l(c) && s && d.enabled ? X.text(c, 0, 0).attr({
                        align: d.align,
                        rotation: d.rotation
                    }).css(e).add(H) : null : r && r.attr({
                        text: c
                    }).css(e)
                },
                getLabelSize: function () {
                    var b = this.label;
                    return b ? (this.labelBBox = b.getBBox())[q ? "height" : "width"] : 0
                },
                render: function (b, d) {
                    var s = !this.minor,
                        e = this.label,
                        r = this.pos,
                        f = u.labels,
                        C = this.gridLine,
                        g = s ? u.gridLineWidth : u.minorGridLineWidth,
                        F = s ? u.gridLineColor : u.minorGridLineColor,
                        h = s ? u.gridLineDashStyle : u.minorGridLineDashStyle,
                        G = this.mark,
                        z = s ? u.tickLength : u.minorTickLength,
                        k = s ? u.tickWidth : u.minorTickWidth || 0,
                        p = s ? u.tickColor : u.minorTickColor,
                        n = s ? u.tickPosition : u.minorTickPosition,
                        s = f.step,
                        m = d && Za || Ba,
                        D;
                    D = q ? x(r + Da, null, null, d) + Ea : S + Sa + (Q ? (d && gb || Ja) - na - S : 0);
                    m = q ? m - Ua + Sa - (Q ? ha : 0) : m - x(r + Da, null, null, d) - Ea;
                    g && (r = Ya(r + Da, g, d), C === Ha && (C = {
                        stroke: F,
                        "stroke-width": g
                    }, h && (C.dashstyle = h), this.gridLine = C = g ? X.path(r).attr(C).add(mc) : null), C && r && C.animate({
                        d: r
                    }));
                    k && ("inside" === n && (z = -z), Q && (z = -z), g = X.crispLine([Ma, D, m, ra, D + (q ? 0 : -z), m + (q ? z : 0)], k), G ? G.animate({
                        d: g
                    }) : this.mark = X.path(g).attr({
                        stroke: p,
                        "stroke-width": k
                    }).add(H));
                    if (e && !isNaN(D)) {
                        D = D + f.x - (Da && q ? Da * Ka * (Ca ? -1 : 1) : 0);
                        m = m + f.y - (Da && !q ? Da * Ka * (Ca ? 1 : -1) : 0);
                        l(f.y) || (m += 0.9 * c(e.styles.lineHeight) - e.getBBox().height / 2);
                        Pa && (m += 16 * (b / (s || 1) % Pa));
                        if (s) e[b % s ? "hide" : "show"]();
                        e[this.isNew ? "attr" : "animate"]({
                            x: D,
                            y: m
                        })
                    }
                    this.isNew = !1
                },
                destroy: function () {
                    for (var b in this) this[b] && this[b].destroy && this[b].destroy()
                }
            };
            e.prototype = {
                render: function () {
                    var b = this,
                        c = b.options,
                        d = c.label,
                        u = b.label,
                        s = c.width,
                        e = c.to,
                        r, f = c.from,
                        C = c.dashStyle,
                        g = b.svgElem,
                        F = [],
                        h, G, z = c.color;
                    G = c.zIndex;
                    var k = c.events;
                    if (s) F = Ya(c.value, s), c = {
                        stroke: z,
                        "stroke-width": s
                    }, C && (c.dashstyle = C);
                    else if (l(f) && l(e)) f = I(f, W), e = T(e, Y), r = Ya(e), (F = Ya(f)) && r ? F.push(r[4], r[5], r[1], r[2]) : F = null, c = {
                        fill: z
                    };
                    else return;
                    l(G) && (c.zIndex = G);
                    if (g) F ? g.animate({
                        d: F
                    }, null, g.onGetPath) : (g.hide(), g.onGetPath = function () {
                        g.show()
                    });
                    else if (F && F.length && (b.svgElem = g = X.path(F).attr(c).add(), k)) for (h in C = function (c) {
                        g.on(c, function (d) {
                            k[c].apply(b, [d])
                        })
                    }, k) C(h);
                    d && l(d.text) && F && F.length && 0 < la && 0 < ha ? (d = fa({
                        align: q && r && "center",
                        x: q ? !r && 4 : 10,
                        verticalAlign: !q && r && "middle",
                        y: q ? r ? 16 : 10 : r ? 6 : -4,
                        rotation: q && !r && 90
                    }, d), u || (b.label = u = X.text(d.text, 0, 0).attr({
                        align: d.textAlign || d.align,
                        rotation: d.rotation,
                        zIndex: G
                    }).css(d.style).add()), r = [F[1], F[4], n(F[6], F[1])], F = [F[2], F[5], n(F[7], F[2])], h = T.apply(L, r), G = T.apply(L, F), u.align(d, !1, {
                        x: h,
                        y: G,
                        width: I.apply(L, r) - h,
                        height: I.apply(L, F) - G
                    }), u.show()) : u && u.hide();
                    return b
                },
                destroy: function () {
                    for (var b in this) this[b] && this[b].destroy && this[b].destroy(), delete this[b];
                    g(da, this)
                }
            };
            r.prototype = {
                setTotal: function (b) {
                    this.cum = this.total = b
                },
                render: function (b) {
                    var c = this.options.formatter.call(this);
                    this.label ? this.label.attr({
                        text: c,
                        visibility: Va
                    }) : this.label = d.renderer.text(c, 0, 0).css(this.options.style).attr({
                        align: this.textAlign,
                        rotation: this.options.rotation,
                        visibility: Va
                    }).add(b)
                },
                setOffset: function (b, c) {
                    var u = this.isNegative,
                        s = R.translate(this.total),
                        e = R.translate(0),
                        e = ga(s - e),
                        r = d.xAxis[0].translate(this.x) + b,
                        f = d.plotHeight,
                        u = {
                            x: aa ? u ? s : s - e : r,
                            y: aa ? f - r - c : u ? f - s - e : f - s,
                            width: aa ? e : c,
                            height: aa ? c : e
                        };
                    this.label && this.label.align(this.alignOptions, null, u).attr({
                        visibility: Wa
                    })
                }
            };
            x = function (b, c, d, u, s) {
                var e = 1,
                    r = 0,
                    f = u ? Mb : Ka;
                u = u ? N : W;
                f || (f = Ka);
                d && (e *= -1, r = Fa);
                Ca && (e *= -1, r -= e * Fa);
                c ? (Ca && (b = Fa - b), b = b / f + u, v && s && (b = L.pow(10, b))) : (v && s && (b = L.log(b) / L.LN10), b = e * (b - u) * f + r);
                return b
            };
            Ya = function (b, c, d) {
                var u, s, e;
                b = x(b, null, null, d);
                var r = d && Za || Ba,
                    f = d && gb || Ja,
                    C;
                d = s = B(b + Ea);
                u = e = B(r - b - Ea);
                if (isNaN(b)) C = !0;
                else if (q) {
                    if (u = U, e = r - Ua, d < S || d > S + la) C = !0
                } else if (d = S, s = f - na, u < U || u > U + ha) C = !0;
                return C ? null : X.crispLine([Ma, d, u, ra, s, e], c || 0)
            };
            aa && (m && Ca === Ha) && (Ca = !0);
            b(R, {
                addPlotBand: z,
                addPlotLine: z,
                adjustTickAmount: function () {
                    if (db && !y && !Ia && !Z) {
                        var b = za,
                            c = ea.length;
                        za = db[J];
                        if (c < za) {
                            for (; ea.length < za;) ea.push(F(ea[ea.length - 1] + V));
                            Ka *= (c - 1) / (za - 1);
                            Y = ea[ea.length - 1]
                        }
                        l(b) && za !== b && (R.isDirty = !0)
                    }
                },
                categories: Ia,
                getExtremes: function () {
                    return {
                        min: W,
                        max: Y,
                        dataMin: Ra,
                        dataMax: E,
                        userMin: K,
                        userMax: O
                    }
                },
                getPlotLinePath: Ya,
                getThreshold: function (b) {
                    W > b ? b = W : Y < b && (b = Y);
                    return x(b, 0, 1)
                },
                isXAxis: m,
                options: u,
                plotLinesAndBands: da,
                getOffset: function () {
                    var b = sa.length && l(W) && l(Y),
                        c = 0,
                        d = 0,
                        e = u.title,
                        r = u.labels,
                        f = [-1, 1, 1, -1][D],
                        C;
                    H || (H = X.g("axis").attr({
                        zIndex: 7
                    }).add(), mc = X.g("grid").attr({
                        zIndex: 1
                    }).add());
                    va = 0;
                    if (b || Z) A(ea, function (b) {
                        ia[b] ? ia[b].addLabel() : ia[b] = new s(b);
                        if (0 === D || 2 === D || {
                            1: "left",
                            3: "right"
                        }[D] === r.align) va = I(ia[b].getLabelSize(), va)
                    }), Pa && (va += 16 * (Pa - 1));
                    else for (C in ia) ia[C].destroy(), delete ia[C];
                    e && e.text && (R.axisTitle || (R.axisTitle = X.text(e.text, 0, 0).attr({
                        zIndex: 7,
                        rotation: e.rotation || 0,
                        align: e.textAlign || {
                            low: "left",
                            middle: "center",
                            high: "right"
                        }[e.align]
                    }).css(e.style).add()), c = R.axisTitle.getBBox()[q ? "height" : "width"], d = n(e.margin, q ? 5 : 10));
                    Sa = f * (u.offset || xa[D]);
                    Oa = va + (2 !== D && va && f * u.labels[q ? "y" : "x"]) + d;
                    xa[D] = I(xa[D], Oa + c + f * Sa)
                },
                render: k,
                setCategories: function (b, c) {
                    R.categories = Ia = b;
                    A(sa, function (b) {
                        b.translate();
                        b.setTooltipPoints(!0)
                    });
                    R.isDirty = !0;
                    n(c, !0) && d.redraw()
                },
                setExtremes: function (b, c, u, s) {
                    u = n(u, !0);
                    wa(R, "setExtremes", {
                        min: b,
                        max: c
                    }, function () {
                        K = b;
                        O = c;
                        u && d.redraw(s)
                    })
                },
                setScale: G,
                setTickPositions: h,
                translate: x,
                redraw: function () {
                    pb.resetTracker && pb.resetTracker();
                    k();
                    A(da, function (b) {
                        b.render()
                    });
                    A(sa, function (b) {
                        b.isDirty = !0
                    })
                },
                removePlotBand: p,
                removePlotLine: p,
                reversed: Ca,
                stacks: M
            });
            for (cc in w) Aa(R, cc, w[cc]);
            G()
        }
        function C(b) {
            var c = {};
            return {
                add: function (b, s, e, r) {
                    c[b] || (s = X.text(s, 0, 0).css(d.toolbar.itemStyle).align({
                        align: "right",
                        x: -na - 20,
                        y: U + 30
                    }).on("click", r).attr({
                        align: "right",
                        zIndex: 20
                    }).add(), c[b] = s)
                },
                remove: function (b) {
                    E(c[b].element);
                    c[b] = null
                }
            }
        }
        function F(b) {
            function d() {
                var b = this.points || q(this),
                    c = b[0].series.xAxis,
                    u = this.x,
                    c = c && "datetime" === c.options.type,
                    s = e(u) || c,
                    r;
                r = s ? ['<span style="font-size: 10px">' + (c ? Db("%A, %b %e, %Y", u) : u) + "</span>"] : [];
                A(b, function (b) {
                    r.push(b.point.tooltipFormatter(s))
                });
                return r.join("<br/>")
            }
            function u(b, c) {
                m = l ? b : (2 * m + b) / 3;
                D = l ? c : (D + c) / 2;
                n.translate(m, D);
                Vb = 1 < ga(b - m) || 1 < ga(c - D) ?
                function () {
                    u(b, c)
                } : null
            }
            function s() {
                if (!l) {
                    var b = y.hoverPoints;
                    n.hide();
                    A(g, function (b) {
                        b && b.hide()
                    });
                    b && A(b, function (b) {
                        b.setState()
                    });
                    y.hoverPoints = null;
                    l = !0
                }
            }
            var r, f = b.borderWidth,
                C = b.crosshairs,
                g = [],
                F = b.style,
                h = b.shared,
                G = c(F.padding),
                z = f + G,
                l = !0,
                k, p, m = 0,
                D = 0;
            F.padding = 0;
            var n = X.g("tooltip").attr({
                zIndex: 8
            }).add(),
                Q = X.rect(z, z, 0, 0, b.borderRadius, f).attr({
                    fill: b.backgroundColor,
                    "stroke-width": f
                }).add(n).shadow(b.shadow),
                M = X.text("", G + z, c(F.fontSize) + G + z).attr({
                    zIndex: 1
                }).css(F).add(n);
            n.hide();
            return {
                shared: h,
                refresh: function (c) {
                    var e, f, F, m = 0,
                        D = {},
                        R = [];
                    F = c.tooltipPos;
                    e = b.formatter || d;
                    D = y.hoverPoints;
                    h ? (D && A(D, function (b) {
                        b.setState()
                    }), y.hoverPoints = c, A(c, function (b, c) {
                        b.setState(Ca);
                        m += b.plotY;
                        R.push(b.getLabelConfig())
                    }), f = c[0].plotX, m = B(m) / c.length, D = {
                        x: c[0].category
                    }, D.points = R, c = c[0]) : D = c.getLabelConfig();
                    D = e.call(D);
                    r = c.series;
                    f = h ? f : c.plotX;
                    m = h ? m : c.plotY;
                    e = B(F ? F[0] : aa ? la - m : f);
                    f = B(F ? F[1] : aa ? ha - f : m);
                    F = h || !c.series.isCartesian || qb(e, f);
                    !1 !== D && F ? (l && (n.show(), l = !1), M.attr({
                        text: D
                    }), F = M.getBBox(), k = F.width + 2 * G, p = F.height + 2 * G, Q.attr({
                        width: k,
                        height: p,
                        stroke: b.borderColor || c.color || r.color || "#606060"
                    }), F = e - k + S - 25, f = f - p + U + 10, 7 > F && (F = S + e + 15), 5 > f ? f = 5 : f + p > Ba && (f = Ba - p - 5), u(B(F - z), B(f - z))) : s();
                    if (C) for (C = q(C), e = C.length; e--;) f = c.series[e ? "yAxis" : "xAxis"], C[e] && f && (f = f.getPlotLinePath(c[e ? "y" : "x"], 1), g[e] ? g[e].attr({
                        d: f,
                        visibility: Wa
                    }) : (F = {
                        "stroke-width": C[e].width || 1,
                        stroke: C[e].color || "#C0C0C0",
                        zIndex: 2
                    }, C[e].dashStyle && (F.dashstyle = C[e].dashStyle), g[e] = X.path(f).attr(F).add()))
                },
                hide: s
            }
        }
        function G(c, d) {
            function u(c) {
                var d, e = Xa && O.width / O.documentElement.clientWidth - 1,
                    s, r, f;
                c = c || K.event;
                c.target || (c.target = c.srcElement);
                d = c.touches ? c.touches.item(0) : c;
                if ("mousemove" !== c.type || K.opera || e) {
                    s = ba;
                    r = {
                        left: s.offsetLeft,
                        top: s.offsetTop
                    };
                    for (s = s.offsetParent; s;) r.left += s.offsetLeft, r.top += s.offsetTop, s !== O.body && s !== O.documentElement && (r.left -= s.scrollLeft, r.top -= s.scrollTop), s = s.offsetParent;
                    yb = r;
                    s = yb.left;
                    r = yb.top
                }
                Pa ? (f = c.x, d = c.y) : d.layerX === Ha ? (f = d.pageX - s, d = d.pageY - r) : (f = c.layerX, d = c.layerY);
                e && (f += B((e + 1) * s - s), d += B((e + 1) * r - r));
                return b(c, {
                    chartX: f,
                    chartY: d
                })
            }
            function s(b) {
                var c = {
                    xAxis: [],
                    yAxis: []
                };
                A(ta, function (d, u) {
                    var s = d.translate,
                        e = d.isXAxis;
                    c[e ? "xAxis" : "yAxis"].push({
                        axis: d,
                        value: s((aa ? !e : e) ? b.chartX - S : ha - b.chartY + U, !0)
                    })
                });
                return c
            }
            function e() {
                var b = c.hoverSeries,
                    d = c.hoverPoint;
                if (d) d.onMouseOut();
                if (b) b.onMouseOut();
                zb && zb.hide();
                Wb = null
            }
            function r() {
                if (G) {
                    var b = {
                        xAxis: [],
                        yAxis: []
                    },
                        d = G.getBBox(),
                        u = d.x - S,
                        s = d.y - U;
                    g && (A(ta, function (c, e) {
                        var r = c.translate,
                            f = c.isXAxis,
                            C = aa ? !f : f,
                            g = r(C ? u : ha - s - d.height, !0, 0, 0, 1),
                            r = r(C ? u + d.width : ha - s, !0, 0, 0, 1);
                        b[f ? "xAxis" : "yAxis"].push({
                            axis: c,
                            min: T(g, r),
                            max: I(g, r)
                        })
                    }), wa(c, "selection", b, Xb));
                    G = G.destroy()
                }
                c.mouseIsDown = nb = g = !1;
                Da(O, za ? "touchend" : "mouseup", r)
            }
            var f, C, g, G, z = P.zoomType,
                l = /x/.test(z),
                k = /y/.test(z),
                m = l && !aa || k && aa,
                p = k && !aa || l && aa;
            Jb = function () {
                Kb ? (Kb.translate(S, U), aa && Kb.attr({
                    width: c.plotWidth,
                    height: c.plotHeight
                }).invert()) : c.trackerGroup = Kb = X.g("tracker").attr({
                    zIndex: 9
                }).add()
            };
            Jb();
            d.enabled && (c.tooltip = zb = F(d));
            (function () {
                var F = !0;
                ba.onmousedown = function (b) {
                    b = u(b);
                    !za && b.preventDefault && b.preventDefault();
                    c.mouseIsDown = nb = !0;
                    f = b.chartX;
                    C = b.chartY;
                    Aa(O, za ? "touchend" : "mouseup", r)
                };
                var z = function (b) {
                        if (!(b && b.touches && 1 < b.touches.length)) {
                            b = u(b);
                            za || (b.returnValue = !1);
                            var s = b.chartX,
                                r = b.chartY,
                                z = !qb(s - S, r - U);
                            za && "touchstart" === b.type && (h(b.target, "isTracker") ? c.runTrackerClick || b.preventDefault() : wb || z || b.preventDefault());
                            z && (F || e(), s < S ? s = S : s > S + la && (s = S + la), r < U ? r = U : r > U + ha && (r = U + ha));
                            if (nb && "touchstart" !== b.type) g = Math.sqrt(Math.pow(f - s, 2) + Math.pow(C - r, 2)), 10 < g && (rb && ((l || k) && qb(f - S, C - U)) && (G || (G = X.rect(S, U, m ? 1 : la, p ? 1 : ha, 0).attr({
                                fill: "rgba(69,114,167,0.25)",
                                zIndex: 7
                            }).add())), G && m && (s -= f, G.attr({
                                width: ga(s),
                                x: (0 < s ? 0 : s) + f
                            })), G && p && (r -= C, G.attr({
                                height: ga(r),
                                y: (0 < r ? 0 : r) + C
                            })));
                            else if (!z) {
                                var D, r = c.hoverPoint,
                                    s = c.hoverSeries,
                                    n, q, Q = Ja,
                                    M = aa ? b.chartY : b.chartX - S;
                                if (zb && d.shared) {
                                    D = [];
                                    n = qa.length;
                                    for (q = 0; q < n; q++) qa[q].visible && qa[q].tooltipPoints.length && (b = qa[q].tooltipPoints[M], b._dist = ga(M - b.plotX), Q = T(Q, b._dist), D.push(b));
                                    for (n = D.length; n--;) D[n]._dist > Q && D.splice(n, 1);
                                    D.length && D[0].plotX !== Wb && (zb.refresh(D), Wb = D[0].plotX)
                                }
                                if (s && s.tracker && (b = s.tooltipPoints[M]) && b !== r) b.onMouseOver()
                            }
                            return (F = z) || !rb
                        }
                    };
                ba.onmousemove = z;
                Aa(ba, "mouseleave", e);
                ba.ontouchstart = function (b) {
                    if (l || k) ba.onmousedown(b);
                    z(b)
                };
                ba.ontouchmove = z;
                ba.ontouchend = function () {
                    g && e()
                };
                ba.onclick = function (d) {
                    var e = c.hoverPoint;
                    d = u(d);
                    d.cancelBubble = !0;
                    if (!g) if (e && h(d.target, "isTracker")) {
                        var r = e.plotX,
                            f = e.plotY;
                        b(e, {
                            pageX: yb.left + S + (aa ? la - f : r),
                            pageY: yb.top + U + (aa ? ha - r : f)
                        });
                        wa(e.series, "click", b(d, {
                            point: e
                        }));
                        e.firePointEvent("click", d)
                    } else b(d, s(d)), qb(d.chartX - S, d.chartY - U) && wa(c, "click", d);
                    g = !1
                }
            })();
            Cb = setInterval(function () {
                Vb && Vb()
            }, 32);
            b(this, {
                zoomX: l,
                zoomY: k,
                resetTracker: e
            })
        }
        function z(b) {
            var c = b.type || P.type || P.defaultSeriesType,
                d = Ta[c],
                u = y.hasRendered;
            u && (aa && "column" === c ? d = Ta.bar : aa || "bar" !== c || (d = Ta.column));
            c = new d;
            c.init(y, b);
            !u && c.inverted && (aa = !0);
            c.isCartesian && (rb = c.isCartesian);
            qa.push(c);
            return c
        }
        function k() {
            !1 !== P.alignTicks && A(ta, function (b) {
                b.adjustTickAmount()
            });
            db = null
        }
        function D(b) {
            var c = y.isDirtyLegend,
                d, u = y.isDirtyBox,
                s = qa.length,
                e = s,
                r = y.clipRect;
            for (m(b, y); e--;) if (b = qa[e], b.isDirty && b.options.stacking) {
                d = !0;
                break
            }
            if (d) for (e = s; e--;) b = qa[e], b.options.stacking && (b.isDirty = !0);
            A(qa, function (b) {
                b.isDirty && (b.cleanData(), b.getSegments(), "point" === b.options.legendType && (c = !0))
            });
            c && Yb.renderLegend && (Yb.renderLegend(), y.isDirtyLegend = !1);
            rb && (sb || (db = null, A(ta, function (b) {
                b.setScale()
            })), k(), Ab(), A(ta, function (b) {
                if (b.isDirty || u) b.redraw(), u = !0
            }));
            u && (Zb(), Jb(), r && (Lb(r), r.animate({
                width: y.plotSizeX,
                height: y.plotSizeY
            })));
            A(qa, function (b) {
                b.isDirty && (b.visible && (!b.isCartesian || b.xAxis)) && b.redraw()
            });
            pb && pb.resetTracker && pb.resetTracker();
            wa(y, "redraw")
        }
        function M() {
            var b = d.xAxis || {},
                c = d.yAxis || {},
                s, b = q(b);
            A(b, function (b, c) {
                b.index = c;
                b.isX = !0
            });
            c = q(c);
            A(c, function (b, c) {
                b.index = c
            });
            ta = b.concat(c);
            y.xAxis = [];
            y.yAxis = [];
            ta = tb(ta, function (b) {
                s = new r(y, b);
                y[s.isXAxis ? "xAxis" : "yAxis"].push(s);
                return s
            });
            k()
        }
        function R(b, c) {
            oa = fa(d.title, b);
            V = fa(d.subtitle, c);
            A([
                ["title", b, oa],
                ["subtitle", c, V]
            ], function (b) {
                var c = b[0],
                    d = y[c],
                    u = b[1];
                b = b[2];
                d && u && (d.destroy(), d = null);
                b && (b.text && !d) && (y[c] = X.text(b.text, 0, 0).attr({
                    align: b.align,
                    "class": "highcharts-" + c,
                    zIndex: 1
                }).css(b.style).add().align(b, !1, ka))
            })
        }
        function Mb() {
            Oa = P.renderTo;
            ya = ub + kb++;
            e(Oa) && (Oa = O.getElementById(Oa));
            Oa.innerHTML = "";
            Oa.offsetWidth || (da = Oa.cloneNode(0), w(da, {
                position: ob,
                top: "-9999px",
                display: ""
            }), O.body.appendChild(da));
            ia = (da || Oa).offsetWidth;
            ua = (da || Oa).offsetHeight;
            y.chartWidth = Ja = P.width || ia || 600;
            y.chartHeight = Ba = P.height || (19 < ua ? ua : 400);
            y.container = ba = p(jb, {
                className: "highcharts-container" + (P.className ? " " + P.className : ""),
                id: ya
            }, b({
                position: lc,
                overflow: Va,
                width: Ja + Na,
                height: Ba + Na,
                textAlign: "left"
            }, P.style), da || Oa);
            y.renderer = X = P.forExport ? new Nb(ba, Ja, Ba, !0) : new ab(ba, Ja, Ba);
            var d, u;
            bb && ba.getBoundingClientRect && (d = function () {
                w(ba, {
                    left: 0,
                    top: 0
                });
                u = ba.getBoundingClientRect();
                w(ba, {
                    left: -(u.left - c(u.left)) + Na,
                    top: -(u.top - c(u.top)) + Na
                })
            }, d(), Aa(K, "resize", d), Aa(y, "destroy", function () {
                Da(K, "resize", d)
            }))
        }
        function Sa() {
            function b() {
                var d = P.width || Oa.offsetWidth,
                    u = P.height || Oa.offsetHeight;
                if (d && u) {
                    if (d !== ia || u !== ua) clearTimeout(c), c = setTimeout(function () {
                        $b(d, u, !1)
                    }, 100);
                    ia = d;
                    ua = u
                }
            }
            var c;
            Aa(K, "resize", b);
            Aa(y, "destroy", function () {
                Da(K, "resize", b)
            })
        }
        function x() {
            var s = d.labels,
                e = d.credits,
                r;
            R();
            Yb = y.legend = new fc(y);
            Ab();
            A(ta, function (b) {
                b.setTickPositions(!0)
            });
            k();
            Ab();
            Zb();
            rb && A(ta, function (b) {
                b.render()
            });
            y.seriesGroup || (y.seriesGroup = X.g("series-group").attr({
                zIndex: 3
            }).add());
            A(qa, function (b) {
                b.translate();
                b.setTooltipPoints();
                b.render()
            });
            s.items && A(s.items, function () {
                var d = b(s.style, this.style),
                    u = c(d.left) + S,
                    e = c(d.top) + U + 12;
                delete d.left;
                delete d.top;
                X.text(this.html, u, e).attr({
                    zIndex: 2
                }).css(d).add()
            });
            y.toolbar || (y.toolbar = C(y));
            e.enabled && !y.credits && (r = e.href, X.text(e.text, 0, 0).on("click", function () {
                r && (location.href = r)
            }).attr({
                align: e.position.align,
                zIndex: 8
            }).css(e.style).add().align(e.position));
            Jb();
            y.hasRendered = !0;
            da && (Oa.appendChild(ba), E(da))
        }
        function Ea() {
            var b = qa.length,
                c = ba && ba.parentNode;
            wa(y, "destroy");
            Da(K, "unload", Ea);
            Da(y);
            for (A(ta, function (b) {
                Da(b)
            }); b--;) qa[b].destroy();
            ba && (ba.innerHTML = "", Da(ba), c && c.removeChild(ba), ba = null);
            X && (X.alignedObjects = null);
            clearInterval(Cb);
            for (b in y) delete y[b]
        }
        function H() {
            La || K != K.top || "complete" === O.readyState ? (Mb(), ac(), bc(), A(d.series || [], function (b) {
                z(b)
            }), y.inverted = aa = n(aa, d.chart.inverted), M(), y.render = x, y.tracker = pb = new G(y, d.tooltip), x(), wa(y, "load"), s && s.apply(y, [y]), A(y.callbacks, function (b) {
                b.apply(y, [y])
            })) : O.attachEvent("onreadystatechange", function () {
                O.detachEvent("onreadystatechange", H);
                "complete" === O.readyState && H()
            })
        }
        Ib = fa(Ib, Ga.xAxis);
        Ub = fa(Ub, Ga.yAxis);
        Ga.xAxis = Ga.yAxis = null;
        d = fa(Ga, d);
        var P = d.chart,
            sa = P.margin,
            sa = f(sa) ? sa : [sa, sa, sa, sa],
            J = n(P.marginTop, sa[0]),
            Fa = n(P.marginRight, sa[1]),
            Ya = n(P.marginBottom, sa[2]),
            Ka = n(P.marginLeft, sa[3]),
            N = P.spacingTop,
            vb = P.spacingRight,
            Z = P.spacingBottom,
            ja = P.spacingLeft,
            ka, oa, V, U, na, Ua, S, xa, Oa, da, ba, ya, ia, ua, Ja, Ba, gb, Za, $a, hb, ib, cb, y = this,
            wb = (sa = P.events) && !! sa.click,
            mb, qb, zb, nb, lb, Bb, dc, ha, la, pb, Kb, Jb, Yb, eb, fb, yb, rb = P.showAxes,
            sb = 0,
            ta = [],
            db, qa = [],
            aa, X, Vb, Cb, Wb, Zb, Ab, ac, bc, $b, Xb, oc, fc = function (d) {
                function u(b, c) {
                    var d = b.legendItem,
                        s = b.legendLine,
                        e = b.legendSymbol,
                        r = m.color,
                        f = c ? g.itemStyle.color : r,
                        C = c ? b.color : r,
                        r = c ? b.pointAttr[ma] : {
                            stroke: r,
                            fill: r
                        };
                    d && d.css({
                        fill: f
                    });
                    s && s.attr({
                        stroke: C
                    });
                    e && e.attr(r)
                }
                function s(b, c, d) {
                    var u = b.legendItem,
                        e = b.legendLine,
                        r = b.legendSymbol;
                    b = b.checkbox;
                    u && u.attr({
                        x: c,
                        y: d
                    });
                    e && e.translate(c, d - 4);
                    r && r.attr({
                        x: c + r.xOff,
                        y: d + r.yOff
                    });
                    b && (b.x = c, b.y = d)
                }
                function e(b) {
                    var c = b.checkbox;
                    A(["legendItem", "legendLine", "legendSymbol"], function (c) {
                        b[c] && b[c].destroy()
                    });
                    c && E(b.checkbox)
                }
                function r() {
                    A(z, function (b) {
                        var c = b.checkbox,
                            d = J.alignAttr;
                        c && w(c, {
                            left: d.translateX + b.legendItemWidth + c.x - 40 + Na,
                            top: d.translateY + c.y - 11 + Na
                        })
                    })
                }
                function f(b) {
                    var c, d, e, r, C = b.legendItem;
                    r = b.series || b;
                    var z = r.options,
                        l = z && z.borderWidth || 0;
                    if (!C) {
                        r = /^(bar|pie|area|column)$/.test(r.type);
                        b.legendItem = C = X.text(g.labelFormatter.call(b), 0, 0).css(b.visible ? k : m).on("mouseover", function () {
                            b.setState(Ca);
                            C.css(D)
                        }).on("mouseout", function () {
                            C.css(b.visible ? k : m);
                            b.setState()
                        }).on("click", function (c) {
                            c = function () {
                                b.setVisible()
                            };
                            b.firePointEvent ? b.firePointEvent("legendItemClick", null, c) : wa(b, "legendItemClick", null, c)
                        }).attr({
                            zIndex: 2
                        }).add(J);
                        if (!r && z && z.lineWidth) {
                            var Q = {
                                "stroke-width": z.lineWidth,
                                zIndex: 2
                            };
                            z.dashStyle && (Q.dashstyle = z.dashStyle);
                            b.legendLine = X.path([Ma, -G - h, 0, ra, -h, 0]).attr(Q).add(J)
                        }
                        r ? c = X.rect(d = -G - h, e = -11, G, 12, 2).attr({
                            zIndex: 3
                        }).add(J) : z && (z.marker && z.marker.enabled) && (c = X.symbol(b.symbol, d = -G / 2 - h, e = -4, z.marker.radius).attr({
                            zIndex: 3
                        }).add(J));
                        c && (c.xOff = d + l % 2 / 2, c.yOff = e + l % 2 / 2);
                        b.legendSymbol = c;
                        u(b, b.visible);
                        z && z.showCheckbox && (b.checkbox = p("input", {
                            type: "checkbox",
                            checked: b.selected,
                            defaultChecked: b.selected
                        }, g.itemCheckboxStyle, ba), Aa(b.checkbox, "click", function (c) {
                            wa(b, "checkboxClick", {
                                checked: c.target.checked
                            }, function () {
                                b.select()
                            })
                        }))
                    }
                    c = C.getBBox();
                    d = b.legendItemWidth = g.itemWidth || G + h + c.width + q;
                    Sa = c.height;
                    F && R - M + d > (Ea || Ja - 2 * n - M) && (R = M, t += Sa);
                    y = t;
                    s(b, R, t);
                    F ? R += d : t += Sa;
                    Ka = Ea || I(F ? R - M : d, Ka)
                }
                function C() {
                    R = M;
                    t = Q;
                    y = Ka = 0;
                    J || (J = X.g("legend").attr({
                        zIndex: 7
                    }).add());
                    z = [];
                    A(x, function (b) {
                        var c = b.options;
                        c.showInLegend && (z = z.concat("point" === c.legendType ? b.data : b))
                    });
                    z.sort(function (b, c) {
                        return (b.options.legendIndex || 0) - (c.options.legendIndex || 0)
                    });
                    B && z.reverse();
                    A(z, f);
                    eb = Ea || Ka;
                    fb = y - Q + Sa;
                    if (Fa || v) eb += 2 * n, fb += 2 * n, P ? 0 < eb && 0 < fb && P.animate(P.crisp(null, null, null, eb, fb)) : P = X.rect(0, 0, eb, fb, g.borderRadius, Fa || 0).attr({
                        stroke: g.borderColor,
                        "stroke-width": Fa || 0,
                        fill: v || va
                    }).add(J).shadow(g.shadow), P[z.length ? "show" : "hide"]();
                    for (var d = ["left", "right", "top", "bottom"], u, s = 4; s--;) u = d[s], l[u] && "auto" !== l[u] && (g[2 > s ? "align" : "verticalAlign"] = u, g[2 > s ? "x" : "y"] = c(l[u]) * (s % 2 ? -1 : 1));
                    J.align(b(g, {
                        width: eb,
                        height: fb
                    }), !0, ka);
                    sb || r()
                }
                var g = d.options.legend;
                if (g.enabled) {
                    var F = "horizontal" === g.layout,
                        G = g.symbolWidth,
                        h = g.symbolPadding,
                        z, l = g.style,
                        k = g.itemStyle,
                        D = g.itemHoverStyle,
                        m = g.itemHiddenStyle,
                        n = c(l.padding),
                        q = 20,
                        Q = 18,
                        M = 4 + n + G + h,
                        R, t, y, Sa = 0,
                        P, Fa = g.borderWidth,
                        v = g.backgroundColor,
                        J, Ka, Ea = g.width,
                        x = d.series,
                        B = g.reversed;
                    C();
                    Aa(d, "endResize", r);
                    return {
                        colorizeItem: u,
                        destroyItem: e,
                        renderLegend: C
                    }
                }
            };
        qb = function (b, c) {
            return 0 <= b && b <= la && 0 <= c && c <= ha
        };
        oc = function () {
            wa(y, "selection", {
                resetSelection: !0
            }, Xb);
            y.toolbar.remove("zoom")
        };
        Xb = function (b) {
            var c = Ga.lang,
                d = 100 > y.pointCount;
            y.toolbar.add("zoom", c.resetZoom, c.resetZoomTitle, oc);
            !b || b.resetSelection ? A(ta, function (b) {
                b.setExtremes(null, null, !1, d)
            }) : A(b.xAxis.concat(b.yAxis), function (b) {
                var c = b.axis;
                y.tracker[c.isXAxis ? "zoomX" : "zoomY"] && c.setExtremes(b.min, b.max, !1, d)
            });
            D()
        };
        Ab = function () {
            var b = d.legend,
                c = n(b.margin, 10),
                s = b.x,
                e = b.y,
                r = b.align,
                f = b.verticalAlign,
                C;
            ac();
            !y.title && !y.subtitle || l(J) || (C = I(y.title && !oa.floating && !oa.verticalAlign && oa.y || 0, y.subtitle && !V.floating && !V.verticalAlign && V.y || 0)) && (U = I(U, C + n(oa.margin, 15) + N));
            b.enabled && !b.floating && ("right" === r ? l(Fa) || (na = I(na, eb - s + c + vb)) : "left" === r ? l(Ka) || (S = I(S, eb + s + c + ja)) : "top" === f ? l(J) || (U = I(U, fb + e + c + N)) : "bottom" === f && (l(Ya) || (Ua = I(Ua, fb - e + c + Z))));
            rb && A(ta, function (b) {
                b.getOffset()
            });
            l(Ka) || (S += xa[3]);
            l(J) || (U += xa[0]);
            l(Ya) || (Ua += xa[2]);
            l(Fa) || (na += xa[1]);
            bc()
        };
        $b = function (b, c, d) {
            var u = y.title,
                s = y.subtitle;
            sb += 1;
            m(d, y);
            Za = Ba;
            gb = Ja;
            y.chartWidth = Ja = B(b);
            y.chartHeight = Ba = B(c);
            w(ba, {
                width: Ja + Na,
                height: Ba + Na
            });
            X.setSize(Ja, Ba, d);
            la = Ja - S - na;
            ha = Ba - U - Ua;
            db = null;
            A(ta, function (b) {
                b.isDirty = !0;
                b.setScale()
            });
            A(qa, function (b) {
                b.isDirty = !0
            });
            y.isDirtyLegend = !0;
            y.isDirtyBox = !0;
            Ab();
            u && u.align(null, null, ka);
            s && s.align(null, null, ka);
            D(d);
            Za = null;
            wa(y, "resize");
            setTimeout(function () {
                wa(y, "endResize", null, function () {
                    sb -= 1
                })
            }, Eb && Eb.duration || 500)
        };
        bc = function () {
            y.plotLeft = S = B(S);
            y.plotTop = U = B(U);
            y.plotWidth = la = B(Ja - S - na);
            y.plotHeight = ha = B(Ba - U - Ua);
            y.plotSizeX = aa ? ha : la;
            y.plotSizeY = aa ? la : ha;
            ka = {
                x: ja,
                y: N,
                width: Ja - ja - vb,
                height: Ba - N - Z
            }
        };
        ac = function () {
            U = n(J, N);
            na = n(Fa, vb);
            Ua = n(Ya, Z);
            S = n(Ka, ja);
            xa = [0, 0, 0, 0]
        };
        Zb = function () {
            var b = P.borderWidth || 0,
                c = P.backgroundColor,
                d = P.plotBackgroundColor,
                u = P.plotBackgroundImage,
                s, e = {
                    x: S,
                    y: U,
                    width: la,
                    height: ha
                };
            s = b + (P.shadow ? 8 : 0);
            if (b || c) $a ? $a.animate($a.crisp(null, null, null, Ja - s, Ba - s)) : $a = X.rect(s / 2, s / 2, Ja - s, Ba - s, P.borderRadius, b).attr({
                stroke: P.borderColor,
                "stroke-width": b,
                fill: c || va
            }).add().shadow(P.shadow);
            d && (hb ? hb.animate(e) : hb = X.rect(S, U, la, ha, 0).attr({
                fill: d
            }).add().shadow(P.plotShadow));
            u && (ib ? ib.animate(e) : ib = X.image(u, S, U, la, ha).add());
            P.plotBorderWidth && (cb ? cb.animate(cb.crisp(null, S, U, la, ha)) : cb = X.rect(S, U, la, ha, 0, P.plotBorderWidth).attr({
                stroke: P.plotBorderColor,
                "stroke-width": P.plotBorderWidth,
                zIndex: 4
            }).add());
            y.isDirtyBox = !1
        };
        Aa(K, "unload", Ea);
        !1 !== P.reflow && Aa(y, "load", Sa);
        if (sa) for (mb in sa) Aa(y, mb, sa[mb]);
        y.options = d;
        y.series = qa;
        y.addSeries = function (b, c, d) {
            var u;
            b && (m(d, y), c = n(c, !0), wa(y, "addSeries", {
                options: b
            }, function () {
                u = z(b);
                u.isDirty = !0;
                y.isDirtyLegend = !0;
                c && y.redraw()
            }));
            return u
        };
        y.animation = n(P.animation, !0);
        y.destroy = Ea;
        y.get = function (b) {
            var c, d, u;
            for (c = 0; c < ta.length; c++) if (ta[c].options.id === b) return ta[c];
            for (c = 0; c < qa.length; c++) if (qa[c].options.id === b) return qa[c];
            for (c = 0; c < qa.length; c++) for (u = qa[c].data, d = 0; d < u.length; d++) if (u[d].id === b) return u[d];
            return null
        };
        y.getSelectedPoints = function () {
            var b = [];
            A(qa, function (c) {
                b = b.concat(ec(c.data, function (b) {
                    return b.selected
                }))
            });
            return b
        };
        y.getSelectedSeries = function () {
            return ec(qa, function (b) {
                return b.selected
            })
        };
        y.hideLoading = function () {
            Ob(lb, {
                opacity: 0
            }, {
                duration: d.loading.hideDuration,
                complete: function () {
                    w(lb, {
                        display: va
                    })
                }
            });
            dc = !1
        };
        y.isInsidePlot = qb;
        y.redraw = D;
        y.setSize = $b;
        y.setTitle = R;
        y.showLoading = function (c) {
            var s = d.loading;
            lb || (lb = p(jb, {
                className: "highcharts-loading"
            }, b(s.style, {
                left: S + Na,
                top: U + Na,
                width: la + Na,
                height: ha + Na,
                zIndex: 10,
                display: va
            }), ba), Bb = p("span", null, s.labelStyle, lb));
            Bb.innerHTML = c || d.lang.loading;
            dc || (w(lb, {
                opacity: 0,
                display: ""
            }), Ob(lb, {
                opacity: s.style.opacity
            }, {
                duration: s.showDuration
            }), dc = !0)
        };
        y.pointCount = 0;
        y.counters = new v;
        H()
    }
    var O = document,
        K = window,
        L = Math,
        B = L.round,
        ca = L.floor,
        pa = L.ceil,
        I = L.max,
        T = L.min,
        ga = L.abs,
        Z = L.cos,
        ja = L.sin,
        oa = L.PI,
        da = 2 * oa / 360,
        ka = navigator.userAgent,
        Pa = /msie/i.test(ka) && !K.opera,
        ya = 8 === O.documentMode,
        Xa = /AppleWebKit/.test(ka),
        bb = /Firefox/.test(ka),
        La = !! O.createElementNS && !! O.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        ab, za = void 0 !== O.documentElement.ontouchstart,
        cb = {},
        kb = 0,
        Qa = 1,
        hb, Ga, Db, Eb, ib, Ha, jb = "div",
        ob = "absolute",
        lc = "relative",
        Va = "hidden",
        ub = "highcharts-",
        Wa = "visible",
        Na = "px",
        va = "none",
        Ma = "M",
        ra = "L",
        Bb = "rgba(192,192,192," + (La ? 1E-6 : 0.002) + ")",
        ma = "",
        Ca = "hover",
        Fb, Pb, Qb, Rb, xb, Gb, Hb, gc, hc, Sb, ic, jc, gb = K.HighchartsAdapter,
        ia = gb || {},
        A = ia.each,
        ec = ia.grep,
        tb = ia.map,
        fa = ia.merge,
        Aa = ia.addEvent,
        Da = ia.removeEvent,
        wa = ia.fireEvent,
        Ob = ia.animate,
        Lb = ia.stop,
        Ta = {};
    Db = function (b, c, d) {
        function e(b) {
            return b.toString().replace(/^([0-9])$/, "0$1")
        }
        if (!l(c) || isNaN(c)) return "Invalid date";
        b = n(b, "%Y-%m-%d %H:%M:%S");
        c = new Date(c * Qa);
        var f, g = c[Qb](),
            z = c[Rb](),
            h = c[xb](),
            k = c[Gb](),
            m = c[Hb](),
            p = Ga.lang,
            q = p.weekdays,
            p = p.months;
        c = {
            a: q[z].substr(0, 3),
            A: q[z],
            d: e(h),
            e: h,
            b: p[k].substr(0, 3),
            B: p[k],
            m: e(k + 1),
            y: m.toString().substr(2, 2),
            Y: m,
            H: e(g),
            I: e(g % 12 || 12),
            l: g % 12 || 12,
            M: e(c[Pb]()),
            p: 12 > g ? "AM" : "PM",
            P: 12 > g ? "am" : "pm",
            S: e(c.getSeconds())
        };
        for (f in c) b = b.replace("%" + f, c[f]);
        return d ? b.substr(0, 1).toUpperCase() + b.substr(1) : b
    };
    v.prototype = {
        wrapColor: function (b) {
            this.color >= b && (this.color = 0)
        },
        wrapSymbol: function (b) {
            this.symbol >= b && (this.symbol = 0)
        }
    };
    gb && gb.init && gb.init();
    if (!gb && K.jQuery) {
        var V = jQuery,
            A = function (b, c) {
                for (var d = 0, e = b.length; d < e; d++) if (!1 === c.call(b[d], b[d], d, b)) return d
            },
            ec = V.grep,
            tb = function (b, c) {
                for (var d = [], e = 0, f = b.length; e < f; e++) d[e] = c.call(b[e], b[e], e, b);
                return d
            },
            fa = function () {
                var b = arguments;
                return V.extend(!0, null, b[0], b[1], b[2], b[3])
            },
            Aa = function (b, c, d) {
                V(b).bind(c, d)
            },
            Da = function (b, c, d) {
                var e = O.removeEventListener ? "removeEventListener" : "detachEvent";
                O[e] && !b[e] && (b[e] = function () {});
                V(b).unbind(c, d)
            },
            wa = function (c, d, e, f) {
                var g = V.Event(d),
                    h = "detached" + d;
                b(g, e);
                c[d] && (c[h] = c[d], c[d] = null);
                V(c).trigger(g);
                c[h] && (c[d] = c[h], c[h] = null);
                f && !g.isDefaultPrevented() && f(g)
            },
            Ob = function (b, c, d) {
                var e = V(b);
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                e.animate(c, d)
            },
            Lb = function (b) {
                V(b).stop()
            };
        V.extend(V.easing, {
            easeOutQuad: function (b, c, d, e, f) {
                return -e * (c /= f) * (c - 2) + d
            }
        });
        var fc = jQuery.fx.step._default,
            sc = jQuery.fx.prototype.cur;
        V.fx.step._default = function (b) {
            var c = b.elem;
            c.attr ? c.attr(b.prop, b.now) : fc.apply(this, arguments)
        };
        V.fx.step.d = function (b) {
            var c = b.elem;
            if (!b.started) {
                var d = ib.init(c, c.d, c.toD);
                b.start = d[0];
                b.end = d[1];
                b.started = !0
            }
            c.attr("d", ib.step(b.start, b.end, b.pos, c.toD))
        };
        V.fx.prototype.cur = function () {
            var b = this.elem;
            return b.attr ? b.attr(this.prop) : sc.apply(this, arguments)
        }
    }
    ib = {
        init: function (b, c, d) {
            c = c || "";
            var e = b.shift,
                f = -1 < c.indexOf("C"),
                g = f ? 7 : 3,
                h;
            c = c.split(" ");
            d = [].concat(d);
            var l, k, m = function (b) {
                    for (h = b.length; h--;) b[h] === Ma && b.splice(h + 1, 0, b[h + 1], b[h + 2], b[h + 1], b[h + 2])
                };
            f && (m(c), m(d));
            b.isArea && (l = c.splice(c.length - 6, 6), k = d.splice(d.length - 6, 6));
            e && (d = [].concat(d).splice(0, g).concat(d), b.shift = !1);
            if (c.length) for (b = d.length; c.length < b;) e = [].concat(c).splice(c.length - g, g), f && (e[g - 6] = e[g - 2], e[g - 5] = e[g - 1]), c = c.concat(e);
            l && (c = c.concat(l), d = d.concat(k));
            return [c, d]
        },
        step: function (b, c, d, e) {
            var f = [],
                g = b.length;
            if (1 === d) f = e;
            else if (g === c.length && 1 > d) for (; g--;) e = parseFloat(b[g]), f[g] = isNaN(e) ? b[g] : d * parseFloat(c[g] - e) + e;
            else f = c;
            return f
        }
    };
    var mb = {
        enabled: !0,
        align: "center",
        x: 0,
        y: 15,
        style: {
            color: "#666",
            fontSize: "11px",
            lineHeight: "14px"
        }
    };
    Ga = {
        colors: "#4572A7 #AA4643 #89A54E #80699B #3D96AE #DB843D #92A8CD #A47D7C #B5CA92".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0"
        },
        title: {
            text: "Chart title",
            align: "center",
            y: 15,
            style: {
                color: "#3E576F",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            y: 30,
            style: {
                color: "#6D869F"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                shadow: !0,
                marker: {
                    enabled: !0,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {},
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: fa(mb, {
                    enabled: !1,
                    y: -6,
                    formatter: function () {
                        return this.y
                    }
                }),
                showInLegend: !0,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0
            }
        },
        labels: {
            style: {
                position: ob,
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            shadow: !1,
            style: {
                padding: "5px"
            },
            itemStyle: {
                cursor: "pointer",
                color: "#3E576F"
            },
            itemHoverStyle: {
                cursor: "pointer",
                color: "#000000"
            },
            itemHiddenStyle: {
                color: "#C0C0C0"
            },
            itemCheckboxStyle: {
                position: ob,
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        loading: {
            hideDuration: 100,
            labelStyle: {
                fontWeight: "bold",
                position: lc,
                top: "1em"
            },
            showDuration: 100,
            style: {
                position: ob,
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 2,
            borderRadius: 5,
            shadow: !0,
            snap: za ? 25 : 10,
            style: {
                color: "#333333",
                fontSize: "12px",
                padding: "5px",
                whiteSpace: "nowrap"
            }
        },
        toolbar: {
            itemStyle: {
                color: "#4572A7",
                cursor: "pointer"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "10px"
            }
        }
    };
    var Ib = {
        dateTimeLabelFormats: {
            second: "%H:%M:%S",
            minute: "%H:%M",
            hour: "%H:%M",
            day: "%e. %b",
            week: "%e. %b",
            month: "%b '%y",
            year: "%Y"
        },
        endOnTick: !1,
        gridLineColor: "#C0C0C0",
        labels: mb,
        lineColor: "#C0D0E0",
        lineWidth: 1,
        max: null,
        min: null,
        minPadding: 0.01,
        maxPadding: 0.01,
        minorGridLineColor: "#E0E0E0",
        minorGridLineWidth: 1,
        minorTickColor: "#A0A0A0",
        minorTickLength: 2,
        minorTickPosition: "outside",
        startOfWeek: 1,
        startOnTick: !1,
        tickColor: "#C0D0E0",
        tickLength: 5,
        tickmarkPlacement: "between",
        tickPixelInterval: 100,
        tickPosition: "outside",
        tickWidth: 1,
        title: {
            align: "middle",
            style: {
                color: "#6D869F",
                fontWeight: "bold"
            }
        },
        type: "linear"
    },
        Ub = fa(Ib, {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                align: "right",
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Y-values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function () {
                    return this.total
                },
                style: mb.style
            }
        }),
        rc = {
            labels: {
                align: "right",
                x: -8,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        qc = {
            labels: {
                align: "left",
                x: 8,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        kc = {
            labels: {
                align: "center",
                x: 0,
                y: 14
            },
            title: {
                rotation: 0
            }
        },
        pc = fa(kc, {
            labels: {
                y: -5
            }
        }),
        xa = Ga.plotOptions,
        Za = xa.line;
    xa.spline = fa(Za);
    xa.scatter = fa(Za, {
        lineWidth: 0,
        states: {
            hover: {
                lineWidth: 0
            }
        }
    });
    xa.area = fa(Za, {});
    xa.areaspline = fa(xa.area);
    xa.column = fa(Za, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            y: null,
            verticalAlign: null
        }
    });
    xa.bar = fa(xa.column, {
        dataLabels: {
            align: "left",
            x: 5,
            y: 0
        }
    });
    xa.pie = fa(Za, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: ["50%", "50%"],
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function () {
                return this.point.name
            },
            y: 5
        },
        legendType: "point",
        marker: null,
        size: "75%",
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            }
        }
    });
    H();
    var ua = function (b) {
            var e = [],
                r;
            (function (b) {
                (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(b)) ? e = [c(r[1]), c(r[2]), c(r[3]), parseFloat(r[4], 10)] : (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) && (e = [c(r[1], 16), c(r[2], 16), c(r[3], 16), 1])
            })(b);
            return {
                get: function (c) {
                    return e && !isNaN(e[0]) ? "rgb" === c ? "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")" : "a" === c ? e[3] : "rgba(" + e.join(",") + ")" : b
                },
                brighten: function (b) {
                    if (d(b) && 0 !== b) {
                        var u;
                        for (u = 0; 3 > u; u++) e[u] += c(255 * b), 0 > e[u] && (e[u] = 0), 255 < e[u] && (e[u] = 255)
                    }
                    return this
                },
                setOpacity: function (b) {
                    e[3] = b;
                    return this
                }
            }
        };
    x.prototype = {
        init: function (b, c) {
            this.element = O.createElementNS("http://www.w3.org/2000/svg", c);
            this.renderer = b
        },
        animate: function (b, c, d) {
            (c = n(c, Eb, !0)) ? (c = fa(c), d && (c.complete = d), Ob(this, b, c)) : (this.attr(b), d && d())
        },
        attr: function (b, d) {
            var r, f, g, G, z = this.element,
                k = z.nodeName,
                m = this.renderer,
                p, n = this.shadows,
                q, t = this;
            e(b) && l(d) && (r = b, b = {}, b[r] = d);
            if (e(b)) r = b, "circle" === k ? r = {
                x: "cx",
                y: "cy"
            }[r] || r : "strokeWidth" === r && (r = "stroke-width"), t = h(z, r) || this[r] || 0, "d" !== r && "visibility" !== r && (t = parseFloat(t));
            else for (r in b) {
                p = !1;
                f = b[r];
                if ("d" === r) f && f.join && (f = f.join(" ")), /(NaN| {2}|^$)/.test(f) && (f = "M 0 0"), this.d = f;
                else if ("x" === r && "text" === k) {
                    for (g = 0; g < z.childNodes.length; g++) G = z.childNodes[g], h(G, "x") === h(z, "x") && h(G, "x", f);
                    this.rotation && h(z, "transform", "rotate(" + this.rotation + " " + f + " " + c(b.y || h(z, "y")) + ")")
                } else if ("fill" === r) f = m.color(f, z, r);
                else if ("circle" !== k || "x" !== r && "y" !== r) if ("translateX" === r || "translateY" === r || "rotation" === r || "verticalAlign" === r) this[r] = f, this.updateTransform(), p = !0;
                else if ("stroke" === r) f = m.color(f, z, r);
                else if ("dashstyle" === r) if (r = "stroke-dasharray", f = f && f.toLowerCase(), "solid" === f) f = va;
                else {
                    if (f) {
                        f = f.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (g = f.length; g--;) f[g] = c(f[g]) * b["stroke-width"];
                        f = f.join(",")
                    }
                } else "isTracker" === r ? this[r] = f : "width" === r ? f = c(f) : "align" === r && (r = "text-anchor", f = {
                    left: "start",
                    center: "middle",
                    right: "end"
                }[f]);
                else r = {
                    x: "cx",
                    y: "cy"
                }[r] || r;
                "strokeWidth" === r && (r = "stroke-width");
                Xa && ("stroke-width" === r && 0 === f) && (f = 1E-6);
                this.symbolName && /^(x|y|r|start|end|innerR)/.test(r) && (q || (this.symbolAttr(b), q = !0), p = !0);
                if (n && /^(width|height|visibility|x|y|d)$/.test(r)) for (g = n.length; g--;) h(n[g], r, f);
                ("width" === r || "height" === r) && ("rect" === k && 0 > f) && (f = 0);
                "text" === r ? (this.textStr = f, this.added && m.buildText(this)) : p || h(z, r, f)
            }
            return t
        },
        symbolAttr: function (b) {
            var c = this;
            A("x y r start end width height innerR".split(" "), function (d) {
                c[d] = n(b[d], c[d])
            });
            c.attr({
                d: c.renderer.symbols[c.symbolName](B(2 * c.x) / 2, B(2 * c.y) / 2, c.r, {
                    start: c.start,
                    end: c.end,
                    width: c.width,
                    height: c.height,
                    innerR: c.innerR
                })
            })
        },
        clip: function (b) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + b.id + ")")
        },
        crisp: function (b, c, d, e, f) {
            var g, h = {},
                l = {},
                k;
            b = b || this.strokeWidth || 0;
            k = b % 2 / 2;
            l.x = ca(c || this.x || 0) + k;
            l.y = ca(d || this.y || 0) + k;
            l.width = ca((e || this.width || 0) - 2 * k);
            l.height = ca((f || this.height || 0) - 2 * k);
            l.strokeWidth = b;
            for (g in l) this[g] !== l[g] && (this[g] = h[g] = l[g]);
            return h
        },
        css: function (c) {
            var d = this.element,
                d = c && c.width && "text" === d.nodeName,
                e, f = "",
                g = function (b, c) {
                    return "-" + c.toLowerCase()
                };
            c && c.color && (c.fill = c.color);
            this.styles = c = b(this.styles, c);
            if (Pa && !La) d && delete c.width, w(this.element, c);
            else {
                for (e in c) f += e.replace(/([A-Z])/g, g) + ":" + c[e] + ";";
                this.attr({
                    style: f
                })
            }
            d && this.added && this.renderer.buildText(this);
            return this
        },
        on: function (b, c) {
            var d = c;
            za && "click" === b && (b = "touchstart", d = function (b) {
                b.preventDefault();
                c()
            });
            this.element["on" + b] = d;
            return this
        },
        translate: function (b, c) {
            return this.attr({
                translateX: b,
                translateY: c
            })
        },
        invert: function () {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function () {
            var b = this.translateX || 0,
                c = this.translateY || 0,
                d = this.inverted,
                e = this.rotation,
                f = [];
            d && (b += this.attr("width"), c += this.attr("height"));
            (b || c) && f.push("translate(" + b + "," + c + ")");
            d ? f.push("rotate(90) scale(-1,1)") : e && f.push("rotate(" + e + " " + this.x + " " + this.y + ")");
            f.length && h(this.element, "transform", f.join(" "))
        },
        toFront: function () {
            var b = this.element;
            b.parentNode.appendChild(b);
            return this
        },
        align: function (b, c, d) {
            b ? (this.alignOptions = b, this.alignByTranslate = c, d || this.renderer.alignedObjects.push(this)) : (b = this.alignOptions, c = this.alignByTranslate);
            d = n(d, this.renderer);
            var e = b.align,
                f = b.verticalAlign,
                g = (d.x || 0) + (b.x || 0),
                h = (d.y || 0) + (b.y || 0),
                l = {};
            /^(right|center)$/.test(e) && (g += (d.width - (b.width || 0)) / {
                right: 1,
                center: 2
            }[e]);
            l[c ? "translateX" : "x"] = B(g);
            /^(bottom|middle)$/.test(f) && (h += (d.height - (b.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[f] || 1));
            l[c ? "translateY" : "y"] = B(h);
            this[this.placed ? "animate" : "attr"](l);
            this.placed = !0;
            this.alignAttr = l;
            return this
        },
        getBBox: function () {
            var c, d, e, f = this.rotation,
                g = f * da;
            try {
                c = b({}, this.element.getBBox())
            } catch (h) {
                c = {
                    width: 0,
                    height: 0
                }
            }
            d = c.width;
            e = c.height;
            f && (c.width = ga(e * ja(g)) + ga(d * Z(g)), c.height = ga(e * Z(g)) + ga(d * ja(g)));
            return c
        },
        show: function () {
            return this.attr({
                visibility: Wa
            })
        },
        hide: function () {
            return this.attr({
                visibility: Va
            })
        },
        add: function (b) {
            var d = this.renderer,
                e = b || d,
                f = e.element || d.box,
                g = f.childNodes,
                G = this.element,
                z = h(G, "zIndex");
            this.parentInverted = b && b.inverted;
            void 0 !== this.textStr && d.buildText(this);
            z && (e.handleZ = !0, z = c(z));
            if (e.handleZ) for (e = 0; e < g.length; e++) if (b = g[e], d = h(b, "zIndex"), b !== G && (c(d) > z || !l(z) && l(d))) return f.insertBefore(G, b), this;
            f.appendChild(G);
            this.added = !0;
            return this
        },
        destroy: function () {
            var b = this.element || {},
                c = this.shadows,
                d = b.parentNode,
                e;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
            Lb(this);
            d && d.removeChild(b);
            c && A(c, function (b) {
                (d = b.parentNode) && d.removeChild(b)
            });
            g(this.renderer.alignedObjects, this);
            for (e in this) delete this[e];
            return null
        },
        empty: function () {
            for (var b = this.element, c = b.childNodes, d = c.length; d--;) b.removeChild(c[d])
        },
        shadow: function (b, c) {
            var d = [],
                e, f, g = this.element,
                l = this.parentInverted ? "(-1,-1)" : "(1,1)";
            if (b) {
                for (e = 1; 3 >= e; e++) f = g.cloneNode(0), h(f, {
                    isShadow: "true",
                    stroke: "rgb(0, 0, 0)",
                    "stroke-opacity": 0.05 * e,
                    "stroke-width": 7 - 2 * e,
                    transform: "translate" + l,
                    fill: va
                }), c ? c.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        }
    };
    var Nb = function () {
            this.init.apply(this, arguments)
        };
    Nb.prototype = {
        Element: x,
        init: function (b, c, d, e) {
            var f = location,
                g;
            g = this.createElement("svg").attr({
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1"
            });
            b.appendChild(g.element);
            this.box = g.element;
            this.boxWrapper = g;
            this.alignedObjects = [];
            this.url = Pa ? "" : f.href.replace(/#.*?$/, "");
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.setSize(c, d, !1)
        },
        createElement: function (b) {
            var c = new this.Element;
            c.init(this, b);
            return c
        },
        buildText: function (b) {
            for (var d = b.element, e = n(b.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), f = d.childNodes, g = /style="([^"]+)"/, l = /href="([^"]+)"/, z = h(d, "x"), k = b.styles, m = bb && k && "rtl" === k.HcDirection && !this.forExport && 4 > c(ka.split("Firefox/")[1]), p, q = k && c(k.width), t = k && k.lineHeight, v, x = f.length; x--;) d.removeChild(f[x]);
            q && !b.added && this.box.appendChild(d);
            A(e, function (e, f) {
                var r, C = 0,
                    k;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                r = e.split("|||");
                A(r, function (e) {
                    if ("" !== e || 1 === r.length) {
                        var n = {},
                            Q = O.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        g.test(e) && h(Q, "style", e.match(g)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                        l.test(e) && (h(Q, "onclick", 'location.href="' + e.match(l)[1] + '"'), w(Q, {
                            cursor: "pointer"
                        }));
                        e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (m) {
                            p = [];
                            for (x = e.length; x--;) p.push(e.charAt(x));
                            e = p.join("")
                        }
                        Q.appendChild(O.createTextNode(e));
                        C ? n.dx = 3 : n.x = z;
                        if (!C) {
                            if (f) {
                                !La && b.renderer.forExport && w(Q, {
                                    display: "block"
                                });
                                k = K.getComputedStyle && c(K.getComputedStyle(v, null).getPropertyValue("line-height"));
                                if (!k || isNaN(k)) k = t || v.offsetHeight || 18;
                                h(Q, "dy", k)
                            }
                            v = Q
                        }
                        h(Q, n);
                        d.appendChild(Q);
                        C++;
                        if (q) {
                            e = e.replace(/-/g, "- ").split(" ");
                            for (var A, B = []; e.length || B.length;) A = d.getBBox().width, (n = A > q) && 1 !== e.length ? (Q.removeChild(Q.firstChild), B.unshift(e.pop())) : (e = B, B = [], e.length && (Q = O.createElementNS("http://www.w3.org/2000/svg", "tspan"), h(Q, {
                                dy: t || 16,
                                x: z
                            }), d.appendChild(Q), A > q && (q = A))), e.length && Q.appendChild(O.createTextNode(e.join(" ").replace(/- /g, "-")))
                        }
                    }
                })
            })
        },
        crispLine: function (b, c) {
            b[1] === b[4] && (b[1] = b[4] = B(b[1]) + c % 2 / 2);
            b[2] === b[5] && (b[2] = b[5] = B(b[2]) + c % 2 / 2);
            return b
        },
        path: function (b) {
            return this.createElement("path").attr({
                d: b,
                fill: va
            })
        },
        circle: function (b, c, d) {
            b = f(b) ? b : {
                x: b,
                y: c,
                r: d
            };
            return this.createElement("circle").attr(b)
        },
        arc: function (b, c, d, e, g, h) {
            f(b) && (c = b.y, d = b.r, e = b.innerR, g = b.start, h = b.end, b = b.x);
            return this.symbol("arc", b || 0, c || 0, d || 0, {
                innerR: e || 0,
                start: g || 0,
                end: h || 0
            })
        },
        rect: function (b, c, d, e, g, h) {
            f(b) && (c = b.y, d = b.width, e = b.height, g = b.r, h = b.strokeWidth, b = b.x);
            g = this.createElement("rect").attr({
                rx: g,
                ry: g,
                fill: va
            });
            return g.attr(g.crisp(h, b, c, I(d, 0), I(e, 0)))
        },
        setSize: function (b, c, d) {
            var e = this.alignedObjects,
                f = e.length;
            this.width = b;
            this.height = c;
            for (this.boxWrapper[n(d, !0) ? "animate" : "attr"]({
                width: b,
                height: c
            }); f--;) e[f].align()
        },
        g: function (b) {
            return this.createElement("g").attr(l(b) && {
                "class": ub + b
            })
        },
        image: function (c, d, e, f, g) {
            var h = {
                preserveAspectRatio: va
            };
            1 < arguments.length && b(h, {
                x: d,
                y: e,
                width: f,
                height: g
            });
            h = this.createElement("image").attr(h);
            h.element.setAttributeNS ? h.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", c) : h.element.setAttribute("hc-svg-href", c);
            return h
        },
        symbol: function (c, d, e, f, g) {
            var h, l = this.symbols[c],
                l = l && l(B(d), B(e), f, g),
                k = /^url\((.*?)\)$/,
                m;
            if (l) h = this.path(l), b(h, {
                symbolName: c,
                x: d,
                y: e,
                r: f
            }), g && b(h, g);
            else if (k.test(c)) {
                var n = function (b, c) {
                        b.attr({
                            width: c[0],
                            height: c[1]
                        }).translate(-B(c[0] / 2), -B(c[1] / 2))
                    };
                m = c.match(k)[1];
                c = cb[m];
                h = this.image(m).attr({
                    x: d,
                    y: e
                });
                c ? n(h, c) : (h.attr({
                    width: 0,
                    height: 0
                }), p("img", {
                    onload: function () {
                        n(h, cb[m] = [this.width, this.height])
                    },
                    src: m
                }))
            } else h = this.circle(d, e, f);
            return h
        },
        symbols: {
            square: function (b, c, d) {
                d *= 0.707;
                return [Ma, b - d, c - d, ra, b + d, c - d, b + d, c + d, b - d, c + d, "Z"]
            },
            triangle: function (b, c, d) {
                return [Ma, b, c - 1.33 * d, ra, b + d, c + 0.67 * d, b - d, c + 0.67 * d, "Z"]
            },
            "triangle-down": function (b, c, d) {
                return [Ma, b, c + 1.33 * d, ra, b - d, c - 0.67 * d, b + d, c - 0.67 * d, "Z"]
            },
            diamond: function (b, c, d) {
                return [Ma, b, c - d, ra, b + d, c, b, c + d, b - d, c, "Z"]
            },
            arc: function (b, c, d, e) {
                var f = e.start,
                    g = e.end - 1E-6,
                    h = e.innerR,
                    l = Z(f),
                    k = ja(f),
                    m = Z(g),
                    g = ja(g);
                e = e.end - f < oa ? 0 : 1;
                return [Ma, b + d * l, c + d * k, "A", d, d, 0, e, 1, b + d * m, c + d * g, ra, b + h * m, c + h * g, "A", h, h, 0, e, 0, b + h * l, c + h * k, "Z"]
            }
        },
        clipRect: function (b, c, d, e) {
            var f = ub + kb++,
                g = this.createElement("clipPath").attr({
                    id: f
                }).add(this.defs);
            b = this.rect(b, c, d, e, 0).add(g);
            b.id = f;
            return b
        },
        color: function (b, c, d) {
            var e, f = /^rgba/;
            if (b && b.linearGradient) {
                var g = this;
                c = b.linearGradient;
                d = ub + kb++;
                var l, k, m;
                l = g.createElement("linearGradient").attr({
                    id: d,
                    gradientUnits: "userSpaceOnUse",
                    x1: c[0],
                    y1: c[1],
                    x2: c[2],
                    y2: c[3]
                }).add(g.defs);
                A(b.stops, function (b) {
                    f.test(b[1]) ? (e = ua(b[1]), k = e.get("rgb"), m = e.get("a")) : (k = b[1], m = 1);
                    g.createElement("stop").attr({
                        offset: b[0],
                        "stop-color": k,
                        "stop-opacity": m
                    }).add(l)
                });
                return "url(" + this.url + "#" + d + ")"
            }
            return f.test(b) ? (e = ua(b), h(c, d + "-opacity", e.get("a")), e.get("rgb")) : b
        },
        text: function (b, c, d) {
            var e = Ga.chart.style;
            c = B(n(c, 0));
            d = B(n(d, 0));
            b = this.createElement("text").attr({
                x: c,
                y: d,
                text: b
            }).css({
                fontFamily: e.fontFamily,
                fontSize: e.fontSize
            });
            b.x = c;
            b.y = d;
            return b
        }
    };
    ab = Nb;
    var nb;
    if (!La) {
        var tc = k(x, {
            init: function (b, c) {
                var d = ["<", c, ' filled="f" stroked="f"'],
                    e = ["position: ", ob, ";"];
                "shape" !== c && c !== jb || e.push("left:0;top:0;width:10px;height:10px;");
                ya && e.push("visibility: ", c === jb ? Va : Wa);
                d.push(' style="', e.join(""), '"/>');
                c && (d = c === jb || "span" === c || "img" === c ? d.join("") : b.prepVML(d), this.element = p(d));
                this.renderer = b
            },
            add: function (b) {
                var c = this.renderer,
                    d = this.element,
                    e = c.box,
                    e = b ? b.element || b : e;
                b && b.inverted && c.invertChild(d, e);
                ya && e.gVis === Va && w(d, {
                    visibility: Va
                });
                e.appendChild(d);
                this.added = !0;
                this.alignOnAdd && this.updateTransform();
                return this
            },
            attr: function (b, c) {
                var f, g, k, m = this.element || {},
                    z = m.style,
                    n = m.nodeName,
                    q = this.renderer,
                    M = this.symbolName,
                    t, A, v = this.shadows,
                    x = this;
                e(b) && l(c) && (f = b, b = {}, b[f] = c);
                if (e(b)) f = b, x = "strokeWidth" === f || "stroke-width" === f ? this.strokeweight : this[f];
                else for (f in b) {
                    g = b[f];
                    t = !1;
                    if (M && /^(x|y|r|start|end|width|height|innerR)/.test(f)) A || (this.symbolAttr(b), A = !0), t = !0;
                    else if ("d" === f) {
                        g = g || [];
                        this.d = g.join(" ");
                        k = g.length;
                        for (t = []; k--;) d(g[k]) ? t[k] = B(10 * g[k]) - 5 : t[k] = "Z" === g[k] ? "x" : g[k];
                        g = t.join(" ") || "x";
                        m.path = g;
                        if (v) for (k = v.length; k--;) v[k].path = g;
                        t = !0
                    } else if ("zIndex" === f || "visibility" === f) {
                        if (ya && "visibility" === f && "DIV" === n) {
                            m.gVis = g;
                            t = m.childNodes;
                            for (k = t.length; k--;) w(t[k], {
                                visibility: g
                            });
                            g === Wa && (g = null)
                        }
                        g && (z[f] = g);
                        t = !0
                    } else / ^ (width | height) $ / .test(f) ? (this.updateClipping ? (this[f] = g, this.updateClipping()) : z[f] = g, t = !0) : /^(x|y)$/.test(f) ? (this[f] = g, "SPAN" === m.tagName ? this.updateTransform() : z[{
                        x: "left",
                        y: "top"
                    }[f]] = g) : "class" === f ? m.className = g : "stroke" === f ? (g = q.color(g, m, f), f = "strokecolor") : "stroke-width" === f || "strokeWidth" === f ? (m.stroked = g ? !0 : !1, f = "strokeweight", this[f] = g, d(g) && (g += Na)) : "dashstyle" === f ? ((m.getElementsByTagName("stroke")[0] || p(q.prepVML(["<stroke/>"]), null, null, m))[f] = g || "solid", this.dashstyle = g, t = !0) : "fill" === f ? "SPAN" === n ? z.color = g : (m.filled = g !== va ? !0 : !1, g = q.color(g, m, f), f = "fillcolor") : "translateX" === f || "translateY" === f || "rotation" === f || "align" === f ? ("align" === f && (f = "textAlign"), this[f] = g, this.updateTransform(), t = !0) : "text" === f && (this.bBox = null, m.innerHTML = g, t = !0);
                    if (v && "visibility" === f) for (k = v.length; k--;) v[k].style[f] = g;
                    t || (ya ? m[f] = g : h(m, f, g))
                }
                return x
            },
            clip: function (b) {
                var c = this,
                    d = b.members;
                d.push(c);
                c.destroyClip = function () {
                    g(d, c)
                };
                return c.css(b.getCSS(c.inverted))
            },
            css: function (c) {
                var d = this.element;
                if (d = c && "SPAN" === d.tagName && c.width) delete c.width, this.textWidth = d, this.updateTransform();
                this.styles = b(this.styles, c);
                w(this.element, c);
                return this
            },
            destroy: function () {
                this.destroyClip && this.destroyClip();
                x.prototype.destroy.apply(this)
            },
            empty: function () {
                for (var b = this.element.childNodes, c = b.length, d; c--;) d = b[c], d.parentNode.removeChild(d)
            },
            getBBox: function () {
                var b = this.element,
                    c = this.bBox;
                c || ("text" === b.nodeName && (b.style.position = ob), c = this.bBox = {
                    x: b.offsetLeft,
                    y: b.offsetTop,
                    width: b.offsetWidth,
                    height: b.offsetHeight
                });
                return c
            },
            on: function (b, c) {
                this.element["on" + b] = function () {
                    var b = K.event;
                    b.target = b.srcElement;
                    c(b)
                };
                return this
            },
            updateTransform: function (b) {
                if (this.added) {
                    var d = this,
                        e = d.element,
                        f = d.translateX || 0,
                        g = d.translateY || 0;
                    b = d.x || 0;
                    var h = d.y || 0,
                        k = d.textAlign || "left",
                        m = {
                            left: 0,
                            center: 0.5,
                            right: 1
                        }[k],
                        p = k && "left" !== k;
                    (f || g) && d.css({
                        marginLeft: f,
                        marginTop: g
                    });
                    d.inverted && A(e.childNodes, function (b) {
                        d.renderer.invertChild(b, e)
                    });
                    if ("SPAN" === e.tagName) {
                        var n, q, f = d.rotation,
                            t;
                        n = 0;
                        var g = 1,
                            v = 0,
                            x;
                        t = c(d.textWidth);
                        var Ea = d.xCorr || 0;
                        x = d.yCorr || 0;
                        var E = [f, k, e.innerHTML, d.textWidth].join();
                        E !== d.cTT && (l(f) && (n = f * da, g = Z(n), v = ja(n), w(e, {
                            filter: f ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", g, ", M12=", -v, ", M21=", v, ", M22=", g, ", sizingMethod='auto expand')"].join("") : va
                        })), n = e.offsetWidth, q = e.offsetHeight, n > t && (w(e, {
                            width: t + Na,
                            display: "block",
                            whiteSpace: "normal"
                        }), n = t), t = B(1.2 * (c(e.style.fontSize) || 12)), x = 0 > g * v, Ea = (0 > g && -n) + v * t * (x ? 1 - m : m), x = (0 > v && -q) - g * t * (f ? x ? m : 1 - m : 1), p && (Ea -= n * m * (0 > g ? -1 : 1), f && (x -= q * m * (0 > v ? -1 : 1)), w(e, {
                            textAlign: k
                        })), d.xCorr = Ea, d.yCorr = x);
                        w(e, {
                            left: b + Ea,
                            top: h + x
                        });
                        d.cTT = E
                    }
                } else this.alignOnAdd = !0
            },
            shadow: function (b, d) {
                var e = [],
                    f, g = this.element,
                    h = this.renderer,
                    l, k = g.style,
                    m, n = g.path;
                n && "string" !== typeof n.value && (n = "x");
                if (b) {
                    for (f = 1; 3 >= f; f++) m = ['<shape isShadow="true" strokeweight="', 7 - 2 * f, '" filled="false" path="', n, '" coordsize="100,100" style="', g.style.cssText, '" />'], l = p(h.prepVML(m), null, {
                        left: c(k.left) + 1,
                        top: c(k.top) + 1
                    }), m = ['<stroke color="black" opacity="', 0.05 * f, '"/>'], p(h.prepVML(m), null, null, l), d ? d.element.appendChild(l) : g.parentNode.insertBefore(l, g), e.push(l);
                    this.shadows = e
                }
                return this
            }
        });
        nb = function () {
            this.init.apply(this, arguments)
        };
        nb.prototype = fa(Nb.prototype, {
            Element: tc,
            isIE8: -1 < ka.indexOf("MSIE 8.0"),
            init: function (b, c, d) {
                var e;
                this.alignedObjects = [];
                e = this.createElement(jb);
                b.appendChild(e.element);
                this.box = e.element;
                this.boxWrapper = e;
                this.setSize(c, d, !1);
                O.namespaces.hcv || (O.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), O.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
            },
            clipRect: function (c, d, e, f) {
                var g = this.createElement();
                return b(g, {
                    members: [],
                    left: c,
                    top: d,
                    width: e,
                    height: f,
                    getCSS: function (c) {
                        var d = this.top,
                            e = this.left,
                            f = e + this.width,
                            g = d + this.height,
                            d = {
                                clip: "rect(" + B(c ? e : d) + "px," + B(c ? g : f) + "px," + B(c ? f : g) + "px," + B(c ? d : e) + "px)"
                            };
                        !c && ya && b(d, {
                            width: f + Na,
                            height: g + Na
                        });
                        return d
                    },
                    updateClipping: function () {
                        A(g.members, function (b) {
                            b.css(g.getCSS(b.inverted))
                        })
                    }
                })
            },
            color: function (b, c, d) {
                var e, f = /^rgba/;
                if (b && b.linearGradient) {
                    var g, h, l = b.linearGradient,
                        k, m, n, q;
                    A(b.stops, function (b, c) {
                        f.test(b[1]) ? (e = ua(b[1]), g = e.get("rgb"), h = e.get("a")) : (g = b[1], h = 1);
                        c ? (n = g, q = h) : (k = g, m = h)
                    });
                    b = 90 - 180 * L.atan((l[3] - l[1]) / (l[2] - l[0])) / oa;
                    d = ["<", d, ' colors="0% ', k, ",100% ", n, '" angle="', b, '" opacity="', q, '" o:opacity2="', m, '" type="gradient" focus="100%" />'];
                    p(this.prepVML(d), null, null, c)
                } else return f.test(b) && "IMG" !== c.tagName ? (e = ua(b), d = ["<", d, ' opacity="', e.get("a"), '"/>'], p(this.prepVML(d), null, null, c), e.get("rgb")) : b
            },
            prepVML: function (b) {
                var c = this.isIE8;
                b = b.join("");
                c ? (b = b.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), b = -1 === b.indexOf('style="') ? b.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : b.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : b = b.replace("<", "<hcv:");
                return b
            },
            text: function (b, c, d) {
                var e = Ga.chart.style;
                return this.createElement("span").attr({
                    text: b,
                    x: B(c),
                    y: B(d)
                }).css({
                    whiteSpace: "nowrap",
                    fontFamily: e.fontFamily,
                    fontSize: e.fontSize
                })
            },
            path: function (b) {
                return this.createElement("shape").attr({
                    coordsize: "100 100",
                    d: b
                })
            },
            circle: function (b, c, d) {
                return this.symbol("circle").attr({
                    x: b,
                    y: c,
                    r: d
                })
            },
            g: function (b) {
                var c;
                b && (c = {
                    className: ub + b,
                    "class": ub + b
                });
                return this.createElement(jb).attr(c)
            },
            image: function (b, c, d, e, f) {
                var g = this.createElement("img").attr({
                    src: b
                });
                1 < arguments.length && g.css({
                    left: c,
                    top: d,
                    width: e,
                    height: f
                });
                return g
            },
            rect: function (b, c, d, e, g, h) {
                f(b) && (c = b.y, d = b.width, e = b.height, g = b.r, h = b.strokeWidth, b = b.x);
                var l = this.symbol("rect");
                l.r = g;
                return l.attr(l.crisp(h, b, c, I(d, 0), I(e, 0)))
            },
            invertChild: function (b, d) {
                var e = d.style;
                w(b, {
                    flip: "x",
                    left: c(e.width) - 10,
                    top: c(e.height) - 10,
                    rotation: -90
                })
            },
            symbols: {
                arc: function (b, c, d, e) {
                    var f = e.start,
                        g = e.end,
                        h = Z(f),
                        l = ja(f),
                        k = Z(g),
                        m = ja(g);
                    e = e.innerR;
                    var n = 0.07 / d,
                        p = e && 0.1 / e || 0;
                    if (0 === g - f) return ["x"];
                    2 * oa - g + f < n ? k = -n : g - f < p && (k = Z(f + p));
                    return ["wa", b - d, c - d, b + d, c + d, b + d * h, c + d * l, b + d * k, c + d * m, "at", b - e, c - e, b + e, c + e, b + e * k, c + e * m, b + e * h, c + e * l, "x", "e"]
                },
                circle: function (b, c, d) {
                    return ["wa", b - d, c - d, b + d, c + d, b + d, c, b + d, c, "e"]
                },
                rect: function (b, c, d, e) {
                    if (!l(e)) return [];
                    var f = e.width;
                    e = e.height;
                    var g = b + f,
                        h = c + e;
                    d = T(d, f, e);
                    return [Ma, b + d, c, ra, g - d, c, "wa", g - 2 * d, c, g, c + 2 * d, g - d, c, g, c + d, ra, g, h - d, "wa", g - 2 * d, h - 2 * d, g, h, g, h - d, g - d, h, ra, b + d, h, "wa", b, h - 2 * d, b + 2 * d, h, b + d, h, b, h - d, ra, b, c + d, "wa", b, c, b + 2 * d, c + 2 * d, b, c + d, b + d, c, "x", "e"]
                }
            }
        });
        ab = nb
    }
    N.prototype.callbacks = [];
    var $a = function () {};
    $a.prototype = {
        init: function (b, c) {
            var d = b.chart.counters,
                e;
            this.series = b;
            this.applyOptions(c);
            this.pointAttr = {};
            b.options.colorByPoint && (e = b.chart.options.colors, this.options || (this.options = {}), this.color = this.options.color = this.color || e[d.color++], d.wrapColor(e.length));
            b.chart.pointCount++;
            return this
        },
        applyOptions: function (c) {
            var g = this.series;
            this.config = c;
            d(c) || null === c ? this.y = c : f(c) && !d(c.length) ? (b(this, c), this.options = c) : e(c[0]) ? (this.name = c[0], this.y = c[1]) : d(c[0]) && (this.x = c[0], this.y = c[1]);
            this.x === Ha && (this.x = g.autoIncrement())
        },
        destroy: function () {
            var b = this,
                c = b.series,
                d;
            c.chart.pointCount--;
            if (b === c.chart.hoverPoint) b.onMouseOut();
            c.chart.hoverPoints = null;
            Da(b);
            A(["graphic", "tracker", "group", "dataLabel", "connector"], function (c) {
                b[c] && b[c].destroy()
            });
            b.legendItem && b.series.chart.legend.destroyItem(b);
            for (d in b) b[d] = null
        },
        getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        select: function (b, c) {
            var d = this,
                e = d.series.chart;
            d.selected = b = n(b, !d.selected);
            d.firePointEvent(b ? "select" : "unselect");
            d.setState(b && "select");
            c || A(e.getSelectedPoints(), function (b) {
                b.selected && b !== d && (b.selected = !1, b.setState(ma), b.firePointEvent("unselect"))
            })
        },
        onMouseOver: function () {
            var b = this.series.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            if (d && d !== this) d.onMouseOut();
            this.firePointEvent("mouseOver");
            c && !c.shared && c.refresh(this);
            this.setState(Ca);
            b.hoverPoint = this
        },
        onMouseOut: function () {
            this.firePointEvent("mouseOut");
            this.setState();
            this.series.chart.hoverPoint = null
        },
        tooltipFormatter: function (b) {
            var c = this.series;
            return ['<span style="color:' + c.color + '">', this.name || c.name, "</span>: ", b ? "" : "<b>x = " + (this.name || this.x) + ",</b> ", "<b>", b ? "" : "y = ", this.y, "</b>"].join("")
        },
        update: function (b, c, d) {
            var e = this,
                g = e.series,
                h = e.graphic,
                l = g.chart;
            c = n(c, !0);
            e.firePointEvent("update", {
                options: b
            }, function () {
                e.applyOptions(b);
                f(b) && (g.getAttribs(), h && h.attr(e.pointAttr[g.state]));
                g.isDirty = !0;
                c && l.redraw(d)
            })
        },
        remove: function (b, c) {
            var d = this,
                e = d.series,
                f = e.chart,
                h = e.data;
            m(c, f);
            b = n(b, !0);
            d.firePointEvent("remove", null, function () {
                g(h, d);
                d.destroy();
                e.isDirty = !0;
                b && f.redraw()
            })
        },
        firePointEvent: function (b, c, d) {
            var e = this,
                f = this.series.options;
            (f.point.events[b] || e.options && e.options.events && e.options.events[b]) && this.importEvents();
            "click" === b && f.allowPointSelect && (d = function (b) {
                e.select(null, b.ctrlKey || b.metaKey || b.shiftKey)
            });
            wa(this, b, c, d)
        },
        importEvents: function () {
            if (!this.hasImportedEvents) {
                var b = fa(this.series.options.point, this.options).events,
                    c;
                this.events = b;
                for (c in b) Aa(this, c, b[c]);
                this.hasImportedEvents = !0
            }
        },
        setState: function (b) {
            var c = this.series,
                d = c.options.states,
                e = xa[c.type].marker && c.options.marker,
                f = e && !e.enabled,
                g = (e = e && e.states[b]) && !1 === e.enabled,
                h = c.stateMarkerGraphic,
                l = c.chart,
                k = this.pointAttr;
            b = b || ma;
            if (!(b === this.state || this.selected && "select" !== b || d[b] && !1 === d[b].enabled || b && (g || f && !e.enabled))) {
                if (this.graphic) this.graphic.attr(k[b]);
                else if (b && (h || (c.stateMarkerGraphic = h = l.renderer.circle(0, 0, k[b].r).attr(k[b]).add(c.group)), h.translate(this.plotX, this.plotY)), h) h[b ? "show" : "hide"]();
                this.state = b
            }
        }
    };
    var na = function () {};
    na.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: $a,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        init: function (c, d) {
            var e, f;
            f = c.series.length;
            this.chart = c;
            d = this.setOptions(d);
            b(this, {
                index: f,
                options: d,
                name: d.name || "Series " + (f + 1),
                state: ma,
                pointAttr: {},
                visible: !1 !== d.visible,
                selected: !0 === d.selected
            });
            f = d.events;
            for (e in f) Aa(this, e, f[e]);
            if (f && f.click || d.point && d.point.events && d.point.events.click || d.allowPointSelect) c.runTrackerClick = !0;
            this.getColor();
            this.getSymbol();
            this.setData(d.data, !1)
        },
        autoIncrement: function () {
            var b = this.options,
                c = this.xIncrement,
                c = n(c, b.pointStart, 0);
            this.pointInterval = n(this.pointInterval, b.pointInterval, 1);
            this.xIncrement = c + this.pointInterval;
            return c
        },
        cleanData: function () {
            var b = this.chart,
                c = this.data,
                d, e, f = b.smallestInterval,
                g, h;
            c.sort(function (b, c) {
                return b.x - c.x
            });
            if (this.options.connectNulls) for (h = c.length - 1; 0 <= h; h--) null === c[h].y && (c[h - 1] && c[h + 1]) && c.splice(h, 1);
            for (h = c.length - 1; 0 <= h; h--) c[h - 1] && (g = c[h].x - c[h - 1].x, 0 < g && (e === Ha || g < e) && (e = g, d = h));
            if (f === Ha || e < f) b.smallestInterval = e;
            this.closestPoints = d
        },
        getSegments: function () {
            var b = -1,
                c = [],
                d = this.data;
            A(d, function (e, f) {
                null === e.y ? (f > b + 1 && c.push(d.slice(b + 1, f)), b = f) : f === d.length - 1 && c.push(d.slice(b + 1, f + 1))
            });
            this.segments = c
        },
        setOptions: function (b) {
            var c = this.chart.options.plotOptions;
            return fa(c[this.type], c.series, b)
        },
        getColor: function () {
            var b = this.chart.options.colors,
                c = this.chart.counters;
            this.color = this.options.color || b[c.color++] || "#0000ff";
            c.wrapColor(b.length)
        },
        getSymbol: function () {
            var b = this.chart.options.symbols,
                c = this.chart.counters;
            this.symbol = this.options.marker.symbol || b[c.symbol++];
            c.wrapSymbol(b.length)
        },
        addPoint: function (b, c, d, e) {
            var f = this.data,
                g = this.graph,
                h = this.area,
                l = this.chart;
            b = (new this.pointClass).init(this, b);
            m(e, l);
            g && d && (g.shift = d);
            h && (h.shift = d, h.isArea = !0);
            c = n(c, !0);
            f.push(b);
            d && f[0].remove(!1);
            this.getAttribs();
            this.isDirty = !0;
            c && l.redraw()
        },
        setData: function (b, c) {
            var d = this,
                e = d.data,
                f = d.initialColor,
                g = d.chart,
                h = e && e.length || 0;
            d.xIncrement = null;
            l(f) && (g.counters.color = f);
            for (b = tb(q(b || []), function (b) {
                return (new d.pointClass).init(d, b)
            }); h--;) e[h].destroy();
            d.data = b;
            d.cleanData();
            d.getSegments();
            d.getAttribs();
            d.isDirty = !0;
            g.isDirtyBox = !0;
            n(c, !0) && g.redraw(!1)
        },
        remove: function (b, c) {
            var d = this,
                e = d.chart;
            b = n(b, !0);
            d.isRemoving || (d.isRemoving = !0, wa(d, "remove", null, function () {
                d.destroy();
                e.isDirtyLegend = e.isDirtyBox = !0;
                b && e.redraw(c)
            }));
            d.isRemoving = !1
        },
        translate: function () {
            for (var b = this.chart, c = this.options.stacking, d = this.xAxis.categories, e = this.yAxis, f = this.data, g = f.length; g--;) {
                var h = f[g],
                    k = h.x,
                    m = h.y,
                    n = h.low,
                    p = e.stacks[(0 > m ? "-" : "") + this.stackKey];
                h.plotX = this.xAxis.translate(k);
                c && (this.visible && p && p[k]) && (n = p[k], k = n.total, n.cum = n = n.cum - m, m = n + m, "percent" === c && (n = k ? 100 * n / k : 0, m = k ? 100 * m / k : 0), h.percentage = k ? 100 * h.y / k : 0, h.stackTotal = k);
                l(n) && (h.yBottom = e.translate(n, 0, 1, 0, 1));
                null !== m && (h.plotY = e.translate(m, 0, 1, 0, 1));
                h.clientX = b.inverted ? b.plotHeight - h.plotX : h.plotX;
                h.category = d && d[h.x] !== Ha ? d[h.x] : h.x
            }
        },
        setTooltipPoints: function (b) {
            var c = this.chart,
                d = c.inverted,
                e = [],
                f = B((d ? c.plotTop : c.plotLeft) + c.plotSizeX),
                g, h, l = [];
            b && (this.tooltipPoints = null);
            A(this.segments, function (b) {
                e = e.concat(b)
            });
            this.xAxis && this.xAxis.reversed && (e = e.reverse());
            A(e, function (b, c) {
                g = e[c - 1] ? e[c - 1]._high + 1 : 0;
                for (h = b._high = e[c + 1] ? ca((b.plotX + (e[c + 1] ? e[c + 1].plotX : f)) / 2) : f; g <= h;) l[d ? f - g++ : g++] = b
            });
            this.tooltipPoints = l
        },
        onMouseOver: function () {
            var b = this.chart,
                c = b.hoverSeries;
            if (za || !b.mouseIsDown) {
                if (c && c !== this) c.onMouseOut();
                this.options.events.mouseOver && wa(this, "mouseOver");
                this.tracker && this.tracker.toFront();
                this.setState(Ca);
                b.hoverSeries = this
            }
        },
        onMouseOut: function () {
            var b = this.options,
                c = this.chart,
                d = c.tooltip,
                e = c.hoverPoint;
            if (e) e.onMouseOut();
            this && b.events.mouseOut && wa(this, "mouseOut");
            d && !b.stickyTracking && d.hide();
            this.setState();
            c.hoverSeries = null
        },
        animate: function (b) {
            var c = this.chart,
                d = this.clipRect,
                e = this.options.animation;
            e && !f(e) && (e = {});
            b ? d.isAnimating || (d.attr("width", 0), d.isAnimating = !0) : (d.animate({
                width: c.plotSizeX
            }, e), this.animate = null)
        },
        drawPoints: function () {
            var b, c = this.data,
                d = this.chart,
                e, f, g, h, l, k;
            if (this.options.marker.enabled) for (g = c.length; g--;) h = c[g], e = h.plotX, f = h.plotY, k = h.graphic, f === Ha || isNaN(f) || (b = h.pointAttr[h.selected ? "select" : ma], l = b.r, k ? k.animate({
                x: e,
                y: f,
                r: l
            }) : h.graphic = d.renderer.symbol(n(h.marker && h.marker.symbol, this.symbol), e, f, l).attr(b).add(this.group))
        },
        convertAttribs: function (b, c, d, e) {
            var f = this.pointAttrToOptions,
                g, h, l = {};
            b = b || {};
            c = c || {};
            d = d || {};
            e = e || {};
            for (g in f) h = f[g], l[g] = n(b[h], c[g], d[g], e[g]);
            return l
        },
        getAttribs: function () {
            var b = this,
                c = xa[b.type].marker ? b.options.marker : b.options,
                d = c.states,
                e = d[Ca],
                f, g = b.color,
                h = {
                    stroke: g,
                    fill: g
                },
                k = b.data,
                m = [],
                n, p = b.pointAttrToOptions,
                q;
            b.options.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color || ua(e.color || g).brighten(e.brightness).get();
            m[ma] = b.convertAttribs(c, h);
            A([Ca, "select"], function (c) {
                m[c] = b.convertAttribs(d[c], m[ma])
            });
            b.pointAttr = m;
            for (g = k.length; g--;) {
                h = k[g];
                (c = h.options && h.options.marker || h.options) && !1 === c.enabled && (c.radius = 0);
                f = !1;
                if (h.options) for (q in p) l(c[p[q]]) && (f = !0);
                f ? (n = [], d = c.states || {}, f = d[Ca] = d[Ca] || {}, b.options.marker || (f.color = ua(f.color || h.options.color).brighten(f.brightness || e.brightness).get()), n[ma] = b.convertAttribs(c, m[ma]), n[Ca] = b.convertAttribs(d[Ca], m[Ca], n[ma]), n.select = b.convertAttribs(d.select, m.select, n[ma])) : n = m;
                h.pointAttr = n
            }
        },
        destroy: function () {
            var b = this,
                c = b.chart,
                d = /\/5[0-9\.]+ (Safari|Mobile)\//.test(ka),
                e, f;
            wa(b, "destroy");
            Da(b);
            b.legendItem && b.chart.legend.destroyItem(b);
            A(b.data, function (b) {
                b.destroy()
            });
            A(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (c) {
                b[c] && (e = d && "group" === c ? "hide" : "destroy", b[c][e]())
            });
            c.hoverSeries === b && (c.hoverSeries = null);
            g(c.series, b);
            for (f in b) delete b[f]
        },
        drawDataLabels: function () {
            if (this.options.dataLabels.enabled) {
                var b = this,
                    d, e, f = b.data,
                    g = b.options.dataLabels,
                    h, k = b.dataLabelsGroup,
                    m = b.chart,
                    p = m.inverted,
                    q = b.type,
                    t;
                t = b.options.stacking;
                var w = "column" === q || "bar" === q,
                    v = null === g.verticalAlign,
                    x = null === g.y;
                w && (t ? (v && (g = fa(g, {
                    verticalAlign: "middle"
                })), x && (g = fa(g, {
                    y: {
                        top: 14,
                        middle: 4,
                        bottom: -6
                    }[g.verticalAlign]
                }))) : v && (g = fa(g, {
                    verticalAlign: "top"
                })));
                k || (k = b.dataLabelsGroup = m.renderer.g("data-labels").attr({
                    visibility: b.visible ? Wa : Va,
                    zIndex: 6
                }).translate(m.plotLeft, m.plotTop).add());
                t = g.color;
                "auto" === t && (t = null);
                g.style.color = n(t, b.color);
                A(f, function (f, t) {
                    var C = f.barX,
                        v = C && C + f.barW / 2 || f.plotX || -999,
                        A = n(f.plotY, -999),
                        R = f.dataLabel,
                        B = g.align,
                        E = x ? 0 < f.y ? -6 : 12 : g.y;
                    h = g.formatter.call(f.getLabelConfig());
                    d = (p ? m.plotWidth - A : v) + g.x;
                    e = (p ? m.plotHeight - v : A) + E;
                    "column" === q && (d += {
                        left: -1,
                        right: 1
                    }[B] * f.barW / 2 || 0);
                    p && 0 > f.y && (B = "right", d -= 10);
                    "first" == f.id && (B = "left");
                    R ? (p && !g.y && (e = e + 0.9 * c(R.styles.lineHeight) - R.getBBox().height / 2), R.attr({
                        text: h
                    }).animate({
                        x: d,
                        y: e
                    })) : l(h) && (R = f.dataLabel = m.renderer.text(h, d, e).attr({
                        align: B,
                        rotation: g.rotation,
                        zIndex: 1
                    }).css(g.style).add(k), p && !g.y && R.attr({
                        y: e + 0.9 * c(R.styles.lineHeight) - R.getBBox().height / 2
                    }));
                    w && b.options.stacking && (v = f.barY, A = f.barW, B = f.barH, R.align(g, null, {
                        x: p ? m.plotWidth - v - B : C,
                        y: p ? m.plotHeight - C - A : v,
                        width: p ? B : A,
                        height: p ? A : B
                    }))
                })
            }
        },
        drawGraph: function (b) {
            var c = this,
                d = c.options,
                e = c.graph,
                f = [],
                g, h = c.area;
            b = c.group;
            var l = d.lineColor || c.color,
                k = d.lineWidth,
                m = d.dashStyle,
                p, q = c.chart.renderer,
                t = c.yAxis.getThreshold(d.threshold || 0),
                w = /^area/.test(c.type),
                v = [],
                x = [];
            A(c.segments, function (b) {
                p = [];
                A(b, function (e, f) {
                    c.getPointSpline ? p.push.apply(p, c.getPointSpline(b, e, f)) : (p.push(f ? ra : Ma), f && d.step && p.push(e.plotX, b[f - 1].plotY), p.push(e.plotX, e.plotY))
                });
                1 < b.length ? f = f.concat(p) : v.push(b[0]);
                if (w) {
                    var e = [],
                        g, h = p.length;
                    for (g = 0; g < h; g++) e.push(p[g]);
                    3 === h && e.push(ra, p[1], p[2]);
                    if (d.stacking && "areaspline" !== c.type) for (g = b.length - 1; 0 <= g; g--) e.push(b[g].plotX, b[g].yBottom);
                    else e.push(ra, b[b.length - 1].plotX, t, ra, b[0].plotX, t);
                    x = x.concat(e)
                }
            });
            c.graphPath = f;
            c.singlePoints = v;
            w && (g = n(d.fillColor, ua(c.color).setOpacity(d.fillOpacity || 0.75).get()), h ? h.animate({
                d: x
            }) : c.area = c.chart.renderer.path(x).attr({
                fill: g
            }).add(b));
            e ? e.animate({
                d: f
            }) : k && (e = {
                stroke: l,
                "stroke-width": k
            }, m && (e.dashstyle = m), c.graph = q.path(f).attr(e).add(b).shadow(d.shadow))
        },
        render: function () {
            var b = this,
                c = b.chart,
                d, e, f = b.options,
                g = f.animation,
                h = g && b.animate,
                g = h ? g && g.duration || 500 : 0,
                l = b.clipRect,
                k = c.renderer;
            l || (l = b.clipRect = !c.hasRendered && c.clipRect ? c.clipRect : k.clipRect(0, 0, c.plotSizeX, c.plotSizeY), c.clipRect || (c.clipRect = l));
            b.group || (d = b.group = k.g("series"), c.inverted && (e = function () {
                d.attr({
                    width: c.plotWidth,
                    height: c.plotHeight
                }).invert()
            }, e(), Aa(c, "resize", e), Aa(b, "destroy", function () {
                Da(c, "resize", e)
            })), d.clip(b.clipRect).attr({
                visibility: b.visible ? Wa : Va,
                zIndex: f.zIndex
            }).translate(c.plotLeft, c.plotTop).add(c.seriesGroup));
            b.drawDataLabels();
            h && b.animate(!0);
            b.drawGraph && b.drawGraph();
            b.drawPoints();
            !1 !== b.options.enableMouseTracking && b.drawTracker();
            h && b.animate();
            setTimeout(function () {
                l.isAnimating = !1;
                (d = b.group) && (l !== c.clipRect && l.renderer) && (d.clip(b.clipRect = c.clipRect), l.destroy())
            }, g);
            b.isDirty = !1
        },
        redraw: function () {
            var b = this.chart,
                c = this.group;
            c && (b.inverted && c.attr({
                width: b.plotWidth,
                height: b.plotHeight
            }), c.animate({
                translateX: b.plotLeft,
                translateY: b.plotTop
            }));
            this.translate();
            this.setTooltipPoints(!0);
            this.render()
        },
        setState: function (b) {
            var c = this.options,
                d = this.graph,
                e = c.states,
                c = c.lineWidth;
            b = b || ma;
            this.state !== b && (this.state = b, e[b] && !1 === e[b].enabled || (b && (c = e[b].lineWidth || c + 1), d && !d.dashstyle && d.attr({
                "stroke-width": c
            }, b ? 0 : 500)))
        },
        setVisible: function (b, c) {
            var d = this.chart,
                e = this.legendItem,
                f = this.group,
                g = this.tracker,
                h = this.dataLabelsGroup,
                l, k = this.data,
                m = d.options.chart.ignoreHiddenSeries;
            l = this.visible;
            l = (this.visible = b = b === Ha ? !l : b) ? "show" : "hide";
            if (f) f[l]();
            if (g) g[l]();
            else for (f = k.length; f--;) if (g = k[f], g.tracker) g.tracker[l]();
            if (h) h[l]();
            e && d.legend.colorizeItem(this, b);
            this.isDirty = !0;
            this.options.stacking && A(d.series, function (b) {
                b.options.stacking && b.visible && (b.isDirty = !0)
            });
            m && (d.isDirtyBox = !0);
            !1 !== c && d.redraw();
            wa(this, l)
        },
        show: function () {
            this.setVisible(!0)
        },
        hide: function () {
            this.setVisible(!1)
        },
        select: function (b) {
            this.selected = b = b === Ha ? !this.selected : b;
            this.checkbox && (this.checkbox.checked = b);
            wa(this, b ? "select" : "unselect")
        },
        drawTracker: function () {
            var b = this,
                c = b.options,
                d = [].concat(b.graphPath),
                e = d.length,
                f = b.chart,
                g = f.options.tooltip.snap,
                h = b.tracker,
                l = c.cursor,
                l = l && {
                    cursor: l
                },
                k = b.singlePoints,
                m;
            if (e) for (m = e + 1; m--;) d[m] === Ma && d.splice(m + 1, 0, d[m + 1] - g, d[m + 2], ra), (m && d[m] === Ma || m === e) && d.splice(m, 0, ra, d[m - 2] + g, d[m - 1]);
            for (m = 0; m < k.length; m++) e = k[m], d.push(Ma, e.plotX - g, e.plotY, ra, e.plotX + g, e.plotY);
            h ? h.attr({
                d: d
            }) : b.tracker = f.renderer.path(d).attr({
                isTracker: !0,
                stroke: Bb,
                fill: va,
                "stroke-width": c.lineWidth + 2 * g,
                visibility: b.visible ? Wa : Va,
                zIndex: 1
            }).on(za ? "touchstart" : "mouseover", function () {
                if (f.hoverSeries !== b) b.onMouseOver()
            }).on("mouseout", function () {
                if (!c.stickyTracking) b.onMouseOut()
            }).css(l).add(f.trackerGroup)
        }
    };
    var uc = k(na);
    Ta.line = uc;
    var vc = k(na, {
        type: "area"
    });
    Ta.area = vc;
    var Cb = k(na, {
        type: "spline",
        getPointSpline: function (b, c, d) {
            var e = c.plotX,
                f = c.plotY,
                g = b[d - 1],
                h = b[d + 1],
                l, k, m, n;
            if (d && d < b.length - 1) {
                b = g.plotY;
                m = h.plotX;
                var h = h.plotY,
                    p;
                l = (1.5 * e + g.plotX) / 2.5;
                k = (1.5 * f + b) / 2.5;
                m = (1.5 * e + m) / 2.5;
                n = (1.5 * f + h) / 2.5;
                p = (n - k) * (m - e) / (m - l) + f - n;
                k += p;
                n += p;
                k > b && k > f ? (k = I(b, f), n = 2 * f - k) : k < b && k < f && (k = T(b, f), n = 2 * f - k);
                n > h && n > f ? (n = I(h, f), k = 2 * f - n) : n < h && n < f && (n = T(h, f), k = 2 * f - n);
                c.rightContX = m;
                c.rightContY = n
            }
            d ? (c = ["C", g.rightContX || g.plotX, g.rightContY || g.plotY, l || e, k || f, e, f], g.rightContX = g.rightContY = null) : c = [Ma, e, f];
            return c
        }
    });
    Ta.spline = Cb;
    var wc = k(Cb, {
        type: "areaspline"
    });
    Ta.areaspline = wc;
    var wb = k(na, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color",
            r: "borderRadius"
        },
        init: function () {
            na.prototype.init.apply(this, arguments);
            var b = this,
                c = b.chart;
            c.hasColumn = !0;
            c.hasRendered && A(c.series, function (c) {
                c.type === b.type && (c.isDirty = !0)
            })
        },
        translate: function () {
            var c = this,
                d = c.chart,
                e = c.options,
                f = e.stacking,
                g = e.borderWidth,
                h = 0,
                k = c.xAxis.reversed,
                m = c.xAxis.categories,
                p = {},
                q, t;
            na.prototype.translate.apply(c);
            A(d.series, function (b) {
                b.type === c.type && b.visible && (b.options.stacking ? (q = b.stackKey, p[q] === Ha && (p[q] = h++), t = p[q]) : t = h++, b.columnIndex = t)
            });
            var w = c.data,
                v = c.closestPoints,
                m = ga(w[1] ? w[v].plotX - w[v - 1].plotX : d.plotSizeX / (m && m.length || 1)),
                v = m * e.groupPadding,
                x = (m - 2 * v) / h,
                B = e.pointWidth,
                E = l(B) ? (x - B) / 2 : x * e.pointPadding,
                P = I(n(B, x - 2 * E), 1),
                H = E + (v + ((k ? h - c.columnIndex : c.columnIndex) || 0) * x - m / 2) * (k ? -1 : 1),
                J = c.yAxis.getThreshold(e.threshold || 0),
                L = n(e.minPointLength, 5);
            A(w, function (h) {
                var k = h.plotY,
                    m = h.yBottom || J,
                    n = h.plotX + H,
                    p = pa(T(k, m)),
                    q = pa(I(k, m) - p),
                    t = c.yAxis.stacks[(0 > h.y ? "-" : "") + c.stackKey],
                    z;
                f && (c.visible && t && t[h.x]) && t[h.x].setOffset(H, P);
                ga(q) < L && (L && (q = L, p = ga(p - J) > L ? m - L : J - (k <= J ? L : 0)), z = p - 3);
                b(h, {
                    barX: n,
                    barY: p,
                    barW: P,
                    barH: q
                });
                h.shapeType = "rect";
                k = b(d.renderer.Element.prototype.crisp.apply({}, [g, n, p, P, q]), {
                    r: e.borderRadius
                });
                g % 2 && (k.y -= 1, k.height += 1);
                h.shapeArgs = k;
                h.trackerArgs = l(z) && fa(h.shapeArgs, {
                    height: I(6, q + 3),
                    y: z
                })
            })
        },
        getSymbol: function () {},
        drawGraph: function () {},
        drawPoints: function () {
            var b = this,
                c = b.options,
                d = b.chart.renderer,
                e, f;
            A(b.data, function (g) {
                var h = g.plotY;
                h === Ha || (isNaN(h) || null === g.y) || (e = g.graphic, f = g.shapeArgs, e ? (Lb(e), e.animate(f)) : g.graphic = d[g.shapeType](f).attr(g.pointAttr[g.selected ? "select" : ma]).add(b.group).shadow(c.shadow))
            })
        },
        drawTracker: function () {
            var b = this,
                c = b.chart,
                d = c.renderer,
                e, f, g = +new Date,
                k = b.options.cursor,
                l = k && {
                    cursor: k
                },
                m;
            A(b.data, function (k) {
                f = k.tracker;
                e = k.trackerArgs || k.shapeArgs;
                delete e.strokeWidth;
                null !== k.y && (f ? f.attr(e) : k.tracker = d[k.shapeType](e).attr({
                    isTracker: g,
                    fill: Bb,
                    visibility: b.visible ? Wa : Va,
                    zIndex: 1
                }).on(za ? "touchstart" : "mouseover", function (d) {
                    m = d.relatedTarget || d.fromElement;
                    if (c.hoverSeries !== b && h(m, "isTracker") !== g) b.onMouseOver();
                    k.onMouseOver()
                }).on("mouseout", function (c) {
                    if (!b.options.stickyTracking && (m = c.relatedTarget || c.toElement, h(m, "isTracker") !== g)) b.onMouseOut()
                }).css(l).add(k.group || c.trackerGroup))
            })
        },
        animate: function (b) {
            var c = this,
                d = c.data;
            b || (A(d, function (b) {
                var d = b.graphic;
                b = b.shapeArgs;
                d && (d.attr({
                    height: 0,
                    y: c.yAxis.translate(0, 0, 1)
                }), d.animate({
                    height: b.height,
                    y: b.y
                }, c.options.animation))
            }), c.animate = null)
        },
        remove: function () {
            var b = this,
                c = b.chart;
            c.hasRendered && A(c.series, function (c) {
                c.type === b.type && (c.isDirty = !0)
            });
            na.prototype.remove.apply(b, arguments)
        }
    });
    Ta.column = wb;
    var xc = k(wb, {
        type: "bar",
        init: function (b) {
            b.inverted = this.inverted = !0;
            wb.prototype.init.apply(this, arguments)
        }
    });
    Ta.bar = xc;
    var yc = k(na, {
        type: "scatter",
        translate: function () {
            var b = this;
            na.prototype.translate.apply(b);
            A(b.data, function (c) {
                c.shapeType = "circle";
                c.shapeArgs = {
                    x: c.plotX,
                    y: c.plotY,
                    r: b.chart.options.tooltip.snap
                }
            })
        },
        drawTracker: function () {
            var b = this,
                c = b.options.cursor,
                d = c && {
                    cursor: c
                },
                e;
            A(b.data, function (c) {
                (e = c.graphic) && e.attr({
                    isTracker: !0
                }).on("mouseover", function (d) {
                    b.onMouseOver();
                    c.onMouseOver()
                }).on("mouseout", function (c) {
                    if (!b.options.stickyTracking) b.onMouseOut()
                }).css(d)
            })
        },
        cleanData: function () {}
    });
    Ta.scatter = yc;
    var zc = k($a, {
        init: function () {
            $a.prototype.init.apply(this, arguments);
            var c = this,
                d;
            b(c, {
                visible: !1 !== c.visible,
                name: n(c.name, "Slice")
            });
            d = function () {
                c.slice()
            };
            Aa(c, "select", d);
            Aa(c, "unselect", d);
            return c
        },
        setVisible: function (b) {
            var c = this.series.chart,
                d = this.tracker,
                e = this.dataLabel,
                f = this.connector,
                g = this.shadowGroup,
                h;
            h = (this.visible = b = b === Ha ? !this.visible : b) ? "show" : "hide";
            this.group[h]();
            if (d) d[h]();
            if (e) e[h]();
            if (f) f[h]();
            if (g) g[h]();
            this.legendItem && c.legend.colorizeItem(this, b)
        },
        slice: function (b, c, d) {
            var e = this.series.chart,
                f = this.slicedTranslation;
            m(d, e);
            n(c, !0);
            b = this.sliced = l(b) ? b : !this.sliced;
            b = {
                translateX: b ? f[0] : e.plotLeft,
                translateY: b ? f[1] : e.plotTop
            };
            this.group.animate(b);
            this.shadowGroup && this.shadowGroup.animate(b)
        }
    }),
        Ac = k(na, {
            type: "pie",
            isCartesian: !1,
            pointClass: zc,
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            getColor: function () {
                this.initialColor = this.chart.counters.color
            },
            animate: function (b) {
                var c = this;
                A(c.data, function (b) {
                    var d = b.graphic;
                    b = b.shapeArgs;
                    var e = -oa / 2;
                    d && (d.attr({
                        r: 0,
                        start: e,
                        end: e
                    }), d.animate({
                        r: b.r,
                        start: b.start,
                        end: b.end
                    }, c.options.animation))
                });
                c.animate = null
            },
            translate: function () {
                var b = 0,
                    d = this,
                    e = -0.25,
                    f = d.options,
                    g = f.slicedOffset,
                    h = g + f.borderWidth,
                    k = f.center.concat([f.size, f.innerSize || 0]),
                    l = d.chart,
                    m = l.plotWidth,
                    n = l.plotHeight,
                    p, q, t, w = d.data,
                    v = 2 * oa,
                    x, E = T(m, n),
                    H, J, I, K = f.dataLabels.distance,
                    k = tb(k, function (b, d) {
                        return (H = /%$/.test(b)) ? [m, n, E, E][d] * c(b) / 100 : b
                    });
                d.getX = function (b, c) {
                    t = L.asin((b - k[1]) / (k[2] / 2 + K));
                    return k[0] + (c ? -1 : 1) * Z(t) * (k[2] / 2 + K)
                };
                d.center = k;
                A(w, function (c) {
                    b += c.y
                });
                A(w, function (c) {
                    x = b ? c.y / b : 0;
                    p = B(1E3 * e * v) / 1E3;
                    e += x;
                    q = B(1E3 * e * v) / 1E3;
                    c.shapeType = "arc";
                    c.shapeArgs = {
                        x: k[0],
                        y: k[1],
                        r: k[2] / 2,
                        innerR: k[3] / 2,
                        start: p,
                        end: q
                    };
                    t = (q + p) / 2;
                    c.slicedTranslation = tb([Z(t) * g + l.plotLeft, ja(t) * g + l.plotTop], B);
                    J = Z(t) * k[2] / 2;
                    d.radiusY = I = ja(t) * k[2] / 2;
                    c.tooltipPos = [k[0] + 0.7 * J, k[1] + 0.7 * I];
                    c.labelPos = [k[0] + J + Z(t) * K, k[1] + I + ja(t) * K, k[0] + J + Z(t) * h, k[1] + I + ja(t) * h, k[0] + J, k[1] + I, 0 > K ? "center" : t < v / 4 ? "left" : "right", t];
                    c.percentage = 100 * x;
                    c.total = b
                });
                this.setTooltipPoints()
            },
            render: function () {
                this.drawPoints();
                !1 !== this.options.enableMouseTracking && this.drawTracker();
                this.drawDataLabels();
                this.options.animation && this.animate && this.animate();
                this.isDirty = !1
            },
            drawPoints: function () {
                var c = this.chart,
                    d = c.renderer,
                    e, f, g, h = this.options.shadow,
                    k, l;
                A(this.data, function (m) {
                    f = m.graphic;
                    l = m.shapeArgs;
                    g = m.group;
                    k = m.shadowGroup;
                    h && !k && (k = m.shadowGroup = d.g("shadow").attr({
                        zIndex: 4
                    }).add());
                    g || (g = m.group = d.g("point").attr({
                        zIndex: 5
                    }).add());
                    e = m.sliced ? m.slicedTranslation : [c.plotLeft, c.plotTop];
                    g.translate(e[0], e[1]);
                    k && k.translate(e[0], e[1]);
                    f ? f.animate(l) : m.graphic = d.arc(l).attr(b(m.pointAttr[ma], {
                        "stroke-linejoin": "round"
                    })).add(m.group).shadow(h, k);
                    !1 === m.visible && m.setVisible(!1)
                })
            },
            drawDataLabels: function () {
                var b = this.data,
                    d, e = this.chart,
                    f = this.options.dataLabels,
                    g = n(f.connectorPadding, 10),
                    h = n(f.connectorWidth, 1),
                    k, l, m = f.distance,
                    p = this.radiusY,
                    q = 0 < m,
                    t = this.center[1],
                    w = [
                        [],
                        []
                    ],
                    v, x, B, E, I = 2,
                    J;
                if (f.enabled) for (na.prototype.drawDataLabels.apply(this), A(b, function (b) {
                    w[b.labelPos[7] < oa / 2 ? 0 : 1].push(b)
                }), w[1].reverse(), E = function (b, c) {
                    return c.y - b.y
                }, b = w[0][0] && w[0][0].dataLabel && c(w[0][0].dataLabel.styles.lineHeight); I--;) {
                    var H = [],
                        L = [],
                        K = w[I],
                        O = K.length,
                        N;
                    for (J = t + p - m; J <= t - p + m; J += b) H.push(J);
                    B = H.length;
                    if (O > B) {
                        l = [].concat(K);
                        l.sort(E);
                        for (J = O; J--;) l[J].rank = J;
                        for (J = O; J--;) K[J].rank >= B && K.splice(J, 1);
                        O = K.length
                    }
                    for (J = 0; J < O; J++) {
                        d = K[J];
                        l = d.labelPos;
                        d = 9999;
                        for (x = 0; x < B; x++) k = ga(H[x] - l[1]), k < d && (d = k, N = x);
                        if (N < J && null !== H[J]) N = J;
                        else if (B < O - J + N && null !== H[J]) N = B - O + J;
                        else for (; null === H[N];) N++;
                        L.push({
                            i: N,
                            y: H[N]
                        });
                        H[N] = null
                    }
                    L.sort(E);
                    for (J = 0; J < O; J++) {
                        d = K[J];
                        l = d.labelPos;
                        k = d.dataLabel;
                        x = L.pop();
                        v = l[1];
                        B = !1 === d.visible ? Va : Wa;
                        N = x.i;
                        x = x.y;
                        if (v > x && null !== H[N + 1] || v < x && null !== H[N - 1]) x = v;
                        v = this.getX(x, I);
                        k.attr({
                            visibility: B,
                            align: l[6]
                        })[k.moved ? "animate" : "attr"]({
                            x: v + f.x + ({
                                left: g,
                                right: -g
                            }[l[6]] || 0),
                            y: x + f.y
                        });
                        k.moved = !0;
                        q && h && (k = d.connector, l = [Ma, v + ("left" === l[6] ? 5 : -5), x, ra, v, x, ra, l[2], l[3], ra, l[4], l[5]], k ? (k.animate({
                            d: l
                        }), k.attr("visibility", B)) : d.connector = k = this.chart.renderer.path(l).attr({
                            "stroke-width": h,
                            stroke: f.connectorColor || "#606060",
                            visibility: B,
                            zIndex: 3
                        }).translate(e.plotLeft, e.plotTop).add())
                    }
                }
            },
            drawTracker: wb.prototype.drawTracker,
            getSymbol: function () {}
        });
    Ta.pie = Ac;
    K.Highcharts = {
        Chart: N,
        dateFormat: Db,
        pathAnim: ib,
        getOptions: function () {
            return Ga
        },
        numberFormat: t,
        Point: $a,
        Color: ua,
        Renderer: ab,
        seriesTypes: Ta,
        setOptions: function (b) {
            Ga = fa(Ga, b);
            H();
            return Ga
        },
        Series: na,
        addEvent: Aa,
        createElement: p,
        discardElement: E,
        css: w,
        each: A,
        extend: b,
        map: tb,
        merge: fa,
        pick: n,
        extendClass: k,
        product: "Highcharts",
        version: "2.1.6"
    }
})();
var dateFormat = function () {
        var b = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            e = /[^-+\dA-Z]/g,
            f = function (b, c) {
                b = String(b);
                for (c = c || 2; b.length < c;) b = "0" + b;
                return b
            };
        return function (d, g, l) {
            var h = dateFormat;
            h.masks = {
                "default": "ddd mmm dd yyyy HH:MM:ss",
                shortDate: "mm/dd/yyyy",
                mediumDate: "mmm d, yyyy",
                longDate: "mmmm d, yyyy",
                fullDate: "dddd, mmmm d, yyyy",
                fullDateNoYear: "dddd, mmm d",
                shortTime: "h:MM TT",
                mediumTime: "h:MM:ss TT",
                longTime: "h:MM:ss TT Z",
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
            h.i18n = {
                dayNames: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                monthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")
            };
            1 != arguments.length || ("[object String]" != Object.prototype.toString.call(d) || /\d/.test(d)) || (g = d, d = void 0);
            d = d ? new Date(d) : new Date;
            if (isNaN(d)) throw SyntaxError("invalid date");
            g = String(h.masks[g] || g || h.masks["default"]);
            "UTC:" == g.slice(0, 4) && (g = g.slice(4), l = !0);
            var q = l ? "getUTC" : "get",
                n = d[q + "Date"](),
                w = d[q + "Day"](),
                p = d[q + "Month"](),
                k = d[q + "FullYear"](),
                t = d[q + "Hours"](),
                v = d[q + "Minutes"](),
                m = d[q + "Seconds"](),
                q = d[q + "Milliseconds"](),
                H = l ? 0 : d.getTimezoneOffset(),
                E = {
                    d: n,
                    dd: f(n),
                    ddd: h.i18n.dayNames[w],
                    dddd: h.i18n.dayNames[w + 7],
                    m: p + 1,
                    mm: f(p + 1),
                    mmm: h.i18n.monthNames[p],
                    mmmm: h.i18n.monthNames[p + 12],
                    yy: String(k).slice(2),
                    yyyy: k,
                    h: t % 12 || 12,
                    hh: f(t % 12 || 12),
                    H: t,
                    HH: f(t),
                    M: v,
                    MM: f(v),
                    s: m,
                    ss: f(m),
                    l: f(q, 3),
                    L: f(99 < q ? Math.round(q / 10) : q),
                    t: 12 > t ? "a" : "p",
                    tt: 12 > t ? "am" : "pm",
                    T: 12 > t ? "A" : "P",
                    TT: 12 > t ? "AM" : "PM",
                    Z: l ? "UTC" : (String(d).match(c) || [""]).pop().replace(e, ""),
                    o: (0 < H ? "-" : "+") + f(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4),
                    S: ["th", "st", "nd", "rd"][3 < n % 10 ? 0 : (10 != n % 100 - n % 10) * n % 10]
                };
            return g.replace(b, function (b) {
                return b in E ? E[b] : b.slice(1, b.length - 1)
            })
        }
    }();
Date.prototype.format = function (b, c) {
    return dateFormat(this, b, c)
};
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function (b, c) {
    if (b.cleanData) {
        var e = b.cleanData;
        b.cleanData = function (c) {
            for (var f = 0, l; null != (l = c[f]); f++) try {
                b(l).triggerHandler("remove")
            } catch (h) {}
            e(c)
        }
    } else {
        var f = b.fn.remove;
        b.fn.remove = function (c, e) {
            return this.each(function () {
                e || c && !b.filter(c, [this]).length || b("*", this).add([this]).each(function () {
                    try {
                        b(this).triggerHandler("remove")
                    } catch (c) {}
                });
                return f.call(b(this), c, e)
            })
        }
    }
    b.widget = function (c, e, f) {
        var h = c.split(".")[0],
            q;
        c = c.split(".")[1];
        q = h + "-" + c;
        f || (f = e, e = b.Widget);
        b.expr[":"][q] = function (e) {
            return !!b.data(e, c)
        };
        b[h] = b[h] || {};
        b[h][c] = function (b, c) {
            arguments.length && this._createWidget(b, c)
        };
        e = new e;
        e.options = b.extend(!0, {}, e.options);
        b[h][c].prototype = b.extend(!0, e, {
            namespace: h,
            widgetName: c,
            widgetEventPrefix: b[h][c].prototype.widgetEventPrefix || c,
            widgetBaseClass: q
        }, f);
        b.widget.bridge(c, b[h][c])
    };
    b.widget.bridge = function (d, e) {
        b.fn[d] = function (f) {
            var h = "string" === typeof f,
                q = Array.prototype.slice.call(arguments, 1),
                n = this;
            f = !h && q.length ? b.extend.apply(null, [!0, f].concat(q)) : f;
            if (h && "_" === f.charAt(0)) return n;
            h ? this.each(function () {
                var e = b.data(this, d),
                    g = e && b.isFunction(e[f]) ? e[f].apply(e, q) : e;
                if (g !== e && g !== c) return n = g, !1
            }) : this.each(function () {
                var c = b.data(this, d);
                c ? c.option(f || {})._init() : b.data(this, d, new e(f, this))
            });
            return n
        }
    };
    b.Widget = function (b, c) {
        arguments.length && this._createWidget(b, c)
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (c, e) {
            b.data(e, this.widgetName, this);
            this.element = b(e);
            this.options = b.extend(!0, {}, this.options, this._getCreateOptions(), c);
            var f = this;
            this.element.bind("remove." + this.widgetName, function () {
                f.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function () {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (d, e) {
            var f = d;
            if (0 === arguments.length) return b.extend({}, this.options);
            if ("string" === typeof d) {
                if (e === c) return this.options[d];
                f = {};
                f[d] = e
            }
            this._setOptions(f);
            return this
        },
        _setOptions: function (c) {
            var e = this;
            b.each(c, function (b, c) {
                e._setOption(b, c)
            });
            return this
        },
        _setOption: function (b, c) {
            this.options[b] = c;
            "disabled" === b && this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (c, e, f) {
            var h, q = this.options[c];
            f = f || {};
            e = b.Event(e);
            e.type = (c === this.widgetEventPrefix ? c : this.widgetEventPrefix + c).toLowerCase();
            e.target = this.element[0];
            if (c = e.originalEvent) for (h in c) h in e || (e[h] = c[h]);
            this.element.trigger(e, f);
            return !(b.isFunction(q) && !1 === q.call(this.element[0], e, f) || e.isDefaultPrevented())
        }
    }
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(window.jQuery)
})(function (b) {
    var c = 0;
    b.ajaxTransport("iframe", function (e) {
        if (e.async && ("POST" === e.type || "GET" === e.type)) {
            var f, d;
            return {
                send: function (g, l) {
                    f = b('<form style="display:none;"></form>');
                    d = b('<iframe src="javascript:false;" name="iframe-transport-' + (c += 1) + '"></iframe>').bind("load", function () {
                        var c, g = b.isArray(e.paramName) ? e.paramName : [e.paramName];
                        d.unbind("load").bind("load", function () {
                            var c;
                            try {
                                if (c = d.contents(), !c.length || !c[0].firstChild) throw Error();
                            } catch (e) {
                                c = void 0
                            }
                            l(200, "success", {
                                iframe: c
                            });
                            b('<iframe src="javascript:false;"></iframe>').appendTo(f);
                            f.remove()
                        });
                        f.prop("target", d.prop("name")).prop("action", e.url).prop("method", e.type);
                        e.formData && b.each(e.formData, function (c, d) {
                            b('<input type="hidden"/>').prop("name", d.name).val(d.value).appendTo(f)
                        });
                        e.fileInput && (e.fileInput.length && "POST" === e.type) && (c = e.fileInput.clone(), e.fileInput.after(function (b) {
                            return c[b]
                        }), e.paramName && e.fileInput.each(function (c) {
                            b(this).prop("name", g[c] || e.paramName)
                        }), f.append(e.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"));
                        f.submit();
                        c && c.length && e.fileInput.each(function (d, e) {
                            var f = b(c[d]);
                            b(e).prop("name", f.prop("name"));
                            f.replaceWith(e)
                        })
                    });
                    f.append(d).appendTo(document.body)
                },
                abort: function () {
                    d && d.unbind("load").prop("src", "javascript".concat(":false;"));
                    f && f.remove()
                }
            }
        }
    });
    b.ajaxSetup({
        converters: {
            "iframe text": function (c) {
                return b(c[0].body).text()
            },
            "iframe json": function (c) {
                return b.parseJSON(b(c[0].body).text())
            },
            "iframe html": function (c) {
                return b(c[0].body).html()
            },
            "iframe script": function (c) {
                return b.globalEval(b(c[0].body).text())
            }
        }
    })
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], b) : b(window.jQuery)
})(function (b) {
    b.support.xhrFileUpload = !(!window.XMLHttpRequestUpload || !window.FileReader);
    b.support.xhrFormDataFileUpload = !! window.FormData;
    b.widget("blueimp.fileupload", {
        options: {
            namespace: void 0,
            dropZone: b(document),
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function (b) {
                return b.serializeArray()
            },
            add: function (b, e) {
                e.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["namespace", "dropZone", "fileInput", "multipart", "forceIframeTransport"],
        _BitrateTimer: function () {
            this.timestamp = +new Date;
            this.bitrate = this.loaded = 0;
            this.getBitrate = function (b, e, f) {
                var d = b - this.timestamp;
                if (!this.bitrate || !f || d > f) this.bitrate = 8 * (e - this.loaded) * (1E3 / d), this.loaded = e, this.timestamp = b;
                return this.bitrate
            }
        },
        _isXHRUpload: function (c) {
            return !c.forceIframeTransport && (!c.multipart && b.support.xhrFileUpload || b.support.xhrFormDataFileUpload)
        },
        _getFormData: function (c) {
            var e;
            return "function" === typeof c.formData ? c.formData(c.form) : b.isArray(c.formData) ? c.formData : c.formData ? (e = [], b.each(c.formData, function (b, c) {
                e.push({
                    name: b,
                    value: c
                })
            }), e) : []
        },
        _getTotal: function (c) {
            var e = 0;
            b.each(c, function (b, c) {
                e += c.size || 1
            });
            return e
        },
        _onProgress: function (b, e) {
            if (b.lengthComputable) {
                var f = +new Date,
                    d, g;
                e._time && e.progressInterval && f - e._time < e.progressInterval && b.loaded !== b.total || (e._time = f, d = e.total || this._getTotal(e.files), g = parseInt(b.loaded / b.total * (e.chunkSize || d), 10) + (e.uploadedBytes || 0), this._loaded += g - (e.loaded || e.uploadedBytes || 0), e.lengthComputable = !0, e.loaded = g, e.total = d, e.bitrate = e._bitrateTimer.getBitrate(f, g, e.bitrateInterval), this._trigger("progress", b, e), this._trigger("progressall", b, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(f, this._loaded, e.bitrateInterval)
                }))
            }
        },
        _initProgressListener: function (c) {
            var e = this,
                f = c.xhr ? c.xhr() : b.ajaxSettings.xhr();
            f.upload && (b(f.upload).bind("progress", function (b) {
                var f = b.originalEvent;
                b.lengthComputable = f.lengthComputable;
                b.loaded = f.loaded;
                b.total = f.total;
                e._onProgress(b, c)
            }), c.xhr = function () {
                return f
            })
        },
        _initXHRData: function (c) {
            var e, f = c.files[0],
                d = c.multipart || !b.support.xhrFileUpload,
                g = c.paramName[0];
            if (!d || c.blob)(c.headers = b.extend(c.headers, {
                "X-File-Name": f.name,
                "X-File-Type": f.type,
                "X-File-Size": f.size
            }), c.blob) ? d || (c.contentType = "application/octet-stream", c.data = c.blob) : (c.contentType = f.type, c.data = f);
            d && b.support.xhrFormDataFileUpload && (c.postMessage ? (e = this._getFormData(c), c.blob ? e.push({
                name: g,
                value: c.blob
            }) : b.each(c.files, function (b, d) {
                e.push({
                    name: c.paramName[b] || g,
                    value: d
                })
            })) : (c.formData instanceof FormData ? e = c.formData : (e = new FormData, b.each(this._getFormData(c), function (b, c) {
                e.append(c.name, c.value)
            })), c.blob ? e.append(g, c.blob, f.name) : b.each(c.files, function (b, d) {
                d instanceof Blob && e.append(c.paramName[b] || g, d, d.name)
            })), c.data = e);
            c.blob = null
        },
        _initIframeSettings: function (c) {
            c.dataType = "iframe " + (c.dataType || "");
            c.formData = this._getFormData(c);
            c.redirect && b("<a></a>").prop("href", c.url).prop("host") !== location.host && c.formData.push({
                name: c.redirectParamName || "redirect",
                value: c.redirect
            })
        },
        _initDataSettings: function (b) {
            this._isXHRUpload(b) ? (this._chunkedUpload(b, !0) || (b.data || this._initXHRData(b), this._initProgressListener(b)), b.postMessage && (b.dataType = "postmessage " + (b.dataType || ""))) : this._initIframeSettings(b, "iframe")
        },
        _getParamName: function (c) {
            var e = b(c.fileInput),
                f = c.paramName;
            f ? b.isArray(f) || (f = [f]) : (f = [], e.each(function () {
                for (var c = b(this), e = c.prop("name") || "files[]", c = (c.prop("files") || [1]).length; c;) f.push(e), c -= 1
            }), f.length || (f = [e.prop("name") || "files[]"]));
            return f
        },
        _initFormSettings: function (c) {
            c.form && c.form.length || (c.form = b(c.fileInput.prop("form")));
            c.paramName = this._getParamName(c);
            c.url || (c.url = c.form.prop("action") || location.href);
            c.type = (c.type || c.form.prop("method") || "").toUpperCase();
            "POST" !== c.type && "PUT" !== c.type && (c.type = "POST")
        },
        _getAJAXSettings: function (c) {
            c = b.extend({}, this.options, c);
            this._initFormSettings(c);
            this._initDataSettings(c);
            return c
        },
        _enhancePromise: function (b) {
            b.success = b.done;
            b.error = b.fail;
            b.complete = b.always;
            return b
        },
        _getXHRPromise: function (c, e, f) {
            var d = b.Deferred(),
                g = d.promise();
            e = e || this.options.context || g;
            !0 === c ? d.resolveWith(e, f) : !1 === c && d.rejectWith(e, f);
            g.abort = d.promise;
            return this._enhancePromise(g)
        },
        _chunkedUpload: function (c, e) {
            var f = this,
                d = c.files[0],
                g = d.size,
                l = c.uploadedBytes = c.uploadedBytes || 0,
                h = c.maxChunkSize || g,
                q = d.webkitSlice || d.mozSlice || d.slice,
                n, w;
            if (!(this._isXHRUpload(c) && q && (l || h < g)) || c.data) return !1;
            if (e) return !0;
            if (l >= g) return d.error = "uploadedBytes", this._getXHRPromise(!1, c.context, [null, "error", d.error]);
            g = Math.ceil((g - l) / h);
            n = function (e) {
                return e ? n(e -= 1).pipe(function () {
                    var g = b.extend({}, c);
                    g.blob = q.call(d, l + e * h, l + (e + 1) * h);
                    g.chunkSize = g.blob.size;
                    f._initXHRData(g);
                    f._initProgressListener(g);
                    return w = (b.ajax(g) || f._getXHRPromise(!1, g.context)).done(function () {
                        g.loaded || f._onProgress(b.Event("progress", {
                            lengthComputable: !0,
                            loaded: g.chunkSize,
                            total: g.chunkSize
                        }), g);
                        c.uploadedBytes = g.uploadedBytes += g.chunkSize
                    })
                }) : f._getXHRPromise(!0, c.context)
            };
            g = n(g);
            g.abort = function () {
                return w.abort()
            };
            return this._enhancePromise(g)
        },
        _beforeSend: function (b, e) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer);
            this._active += 1;
            this._loaded += e.uploadedBytes || 0;
            this._total += this._getTotal(e.files)
        },
        _onDone: function (c, e, f, d) {
            this._isXHRUpload(d) || this._onProgress(b.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), d);
            d.result = c;
            d.textStatus = e;
            d.jqXHR = f;
            this._trigger("done", null, d)
        },
        _onFail: function (b, e, f, d) {
            d.jqXHR = b;
            d.textStatus = e;
            d.errorThrown = f;
            this._trigger("fail", null, d);
            d.recalculateProgress && (this._loaded -= d.loaded || d.uploadedBytes || 0, this._total -= d.total || this._getTotal(d.files))
        },
        _onAlways: function (b, e, f, d) {
            this._active -= 1;
            d.textStatus = e;
            f && f.always ? (d.jqXHR = f, d.result = b) : (d.jqXHR = b, d.errorThrown = f);
            this._trigger("always", null, d);
            0 === this._active && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null)
        },
        _onSend: function (c, e) {
            var f = this,
                d, g, l, h = f._getAJAXSettings(e),
                q = function (e, g) {
                    f._sending += 1;
                    h._bitrateTimer = new f._BitrateTimer;
                    return d = d || (!1 !== e && !1 !== f._trigger("send", c, h) && (f._chunkedUpload(h) || b.ajax(h)) || f._getXHRPromise(!1, h.context, g)).done(function (b, c, d) {
                        f._onDone(b, c, d, h)
                    }).fail(function (b, c, d) {
                        f._onFail(b, c, d, h)
                    }).always(function (b, c, d) {
                        f._sending -= 1;
                        f._onAlways(b, c, d, h);
                        if (h.limitConcurrentUploads && h.limitConcurrentUploads > f._sending) for (b = f._slots.shift(); b;) {
                            if (!b.isRejected()) {
                                b.resolve();
                                break
                            }
                            b = f._slots.shift()
                        }
                    })
                };
            this._beforeSend(c, h);
            return this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (g = b.Deferred(), this._slots.push(g), l = g.pipe(q)) : l = this._sequence = this._sequence.pipe(q, q), l.abort = function () {
                var b = [void 0, "abort", "abort"];
                return d ? d.abort() : (g && g.rejectWith(b), q(!1, b))
            }, this._enhancePromise(l)) : q()
        },
        _onAdd: function (c, e) {
            var f = this,
                d = !0,
                g = b.extend({}, this.options, e),
                l = g.limitMultiFileUploads,
                h = this._getParamName(g),
                q, n, w;
            if ((g.singleFileUploads || l) && this._isXHRUpload(g)) if (!g.singleFileUploads && l) for (n = [], q = [], w = 0; w < e.files.length; w += l) n.push(e.files.slice(w, w + l)), g = h.slice(w, w + l), g.length || (g = h), q.push(g);
            else q = h;
            else n = [e.files], q = [h];
            e.originalFiles = e.files;
            b.each(n || e.files, function (g, h) {
                var l = b.extend({}, e);
                l.files = n ? h : [h];
                l.paramName = q[g];
                l.submit = function () {
                    return l.jqXHR = this.jqXHR = !1 !== f._trigger("submit", c, this) && f._onSend(c, this)
                };
                return d = f._trigger("add", c, l)
            });
            return d
        },
        _normalizeFile: function (b, e) {
            void 0 === e.name && void 0 === e.size && (e.name = e.fileName, e.size = e.fileSize)
        },
        _replaceFileInput: function (c) {
            var e = c.clone(!0);
            b("<form></form>").append(e)[0].reset();
            c.after(e).detach();
            b.cleanData(c.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function (b, d) {
                return d === c[0] ? e[0] : d
            });
            c[0] === this.element[0] && (this.element = e)
        },
        _onChange: function (c) {
            var e = c.data.fileupload,
                f = {
                    files: b.each(b.makeArray(c.target.files), e._normalizeFile),
                    fileInput: b(c.target),
                    form: b(c.target.form)
                };
            f.files.length || (f.files = [{
                name: c.target.value.replace(/^.*\\/, "")
            }]);
            e.options.replaceFileInput && e._replaceFileInput(f.fileInput);
            if (!1 === e._trigger("change", c, f) || !1 === e._onAdd(c, f)) return !1
        },
        _onPaste: function (c) {
            var e = c.data.fileupload,
                f = c.originalEvent.clipboardData,
                d = {
                    files: []
                };
            b.each(f && f.items || [], function (b, c) {
                var e = c.getAsFile && c.getAsFile();
                e && d.files.push(e)
            });
            if (!1 === e._trigger("paste", c, d) || !1 === e._onAdd(c, d)) return !1
        },
        _onDrop: function (c) {
            var e = c.data.fileupload,
                f = c.dataTransfer = c.originalEvent.dataTransfer,
                f = {
                    files: b.each(b.makeArray(f && f.files), e._normalizeFile)
                };
            if (!1 === e._trigger("drop", c, f) || !1 === e._onAdd(c, f)) return !1;
            c.preventDefault()
        },
        _onDragOver: function (b) {
            var e = b.data.fileupload,
                f = b.dataTransfer = b.originalEvent.dataTransfer;
            if (!1 === e._trigger("dragover", b)) return !1;
            f && (f.dropEffect = f.effectAllowed = "copy");
            b.preventDefault()
        },
        _initEventHandlers: function () {
            var b = this.options.namespace;
            this._isXHRUpload(this.options) && this.options.dropZone.bind("dragover." + b, {
                fileupload: this
            }, this._onDragOver).bind("drop." + b, {
                fileupload: this
            }, this._onDrop).bind("paste." + b, {
                fileupload: this
            }, this._onPaste);
            this.options.fileInput.bind("change." + b, {
                fileupload: this
            }, this._onChange)
        },
        _destroyEventHandlers: function () {
            var b = this.options.namespace;
            this.options.dropZone.unbind("dragover." + b, this._onDragOver).unbind("drop." + b, this._onDrop).unbind("paste." + b, this._onPaste);
            this.options.fileInput.unbind("change." + b, this._onChange)
        },
        _setOption: function (c, e) {
            var f = -1 !== b.inArray(c, this._refreshOptionsList);
            f && this._destroyEventHandlers();
            b.Widget.prototype._setOption.call(this, c, e);
            f && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var c = this.options;
            void 0 === c.fileInput ? c.fileInput = this.element.is("input:file") ? this.element : this.element.find("input:file") : c.fileInput instanceof b || (c.fileInput = b(c.fileInput));
            c.dropZone instanceof b || (c.dropZone = b(c.dropZone))
        },
        _create: function () {
            var c = this.options;
            b.extend(c, b(this.element[0].cloneNode(!1)).data());
            c.namespace = c.namespace || this.widgetName;
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(!0);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers()
        },
        destroy: function () {
            this._destroyEventHandlers();
            b.Widget.prototype.destroy.call(this)
        },
        enable: function () {
            b.Widget.prototype.enable.call(this);
            this._initEventHandlers()
        },
        disable: function () {
            this._destroyEventHandlers();
            b.Widget.prototype.disable.call(this)
        },
        add: function (c) {
            c && !this.options.disabled && (c.files = b.each(b.makeArray(c.files), this._normalizeFile), this._onAdd(null, c))
        },
        send: function (c) {
            return c && !this.options.disabled && (c.files = b.each(b.makeArray(c.files), this._normalizeFile), c.files.length) ? this._onSend(null, c) : this._getXHRPromise(!1, c && c.context)
        }
    })
});
(function (b, c) {
    "$:nomunge";
    var e = b.jQuery || b.Zepto || b.Cowboy || (b.Cowboy = {}),
        f;
    e.throttle = f = function (b, f, l, h) {
        function q() {
            function e() {
                w = +new Date;
                l.apply(q, m)
            }
            function k() {
                n = c
            }
            var q = this,
                v = +new Date - w,
                m = arguments;
            h && !n && e();
            n && clearTimeout(n);
            h === c && v > b ? e() : !0 !== f && (n = setTimeout(h ? k : e, h === c ? b - v : b))
        }
        var n, w = 0;
        "boolean" !== typeof f && (h = l, l = f, f = c);
        e.guid && (q.guid = l.guid = l.guid || e.guid++);
        return q
    };
    e.debounce = function (b, e, l) {
        return l === c ? f(b, e, !1) : f(b, l, !1 !== e)
    }
})(this);
