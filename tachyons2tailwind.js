// https://codepen.io/diomed/pen/VddymX <--- ironic!
// https://stackoverflow.com/questions/14177087/replace-a-string-in-a-file-with-nodejs
// https://stackoverflow.com/questions/46390733/recursively-read-a-directories-with-a-folder

var fs = require('fs');
var path = require('path');
var util = require('util');
console.log("\n SWITCHING SECRET FBI FILES:\n ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ \n");
var traverse = function(dir, result = []) {

    fs.readdirSync(dir).forEach((file) => {

        var fPath = path.resolve(dir, file);
        var fileStats = { file, path: fPath };

        if (fs.statSync(fPath).isDirectory()) {
            fileStats.type = 'folder';
            fileStats.files = [];
            result.push(fileStats);
            return traverse(fPath, fileStats.files)
        }

        fileStats.type = 'file';
        result.push(fileStats);

        var secretFBIfile = fPath;

        fs.readFile(secretFBIfile, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }

        var result = data.replace();


  const codeWords = [
    [/(?:\s|\"|\'|hover\-)(\b(sans-serif)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-sans"],
    [/(?:\s|\"|\'|hover\-)(\b(serif)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-serif"],
    [/(?:\s|\"|\'|hover\-)(\b(code)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-mono"],
    [/(?:\s|\"|\'|hover\-)(\b(i)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "italic"],
    [/(?:\s|\"|\'|hover\-)(\b(b)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-bold"],
    [/(?:\s|\"|\'|hover\-)(\b(normal)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-normal"],
    [/(?:\s|\"|\'|hover\-)(\b(tc)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-center"],
    [/(?:\s|\"|\'|hover\-)(\b(tr)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-right"],
    [/(?:\s|\"|\'|hover\-)(\b(tl)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-left"],
    [/(?:\s|\"|\'|hover\-)(\b(center)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-auto"],
    [/(?:\s|\"|\'|hover\-)(\b(cover)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-cover"],
    [/(?:\s|\"|\'|hover\-)(\b(contain)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-contain"],
    [/(?:\s|\"|\'|hover\-)(\b(ba)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid"],
    [/(?:\s|\"|\'|hover\-)(\b(bt)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid border-t"],
    [/(?:\s|\"|\'|hover\-)(\b(br)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid border-r"],
    [/(?:\s|\"|\'|hover\-)(\b(bb)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid border-b"],
    [/(?:\s|\"|\'|hover\-)(\b(bl)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid border-l"],
    [/(?:\s|\"|\'|hover\-)(\b(bn)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-none"],
    [/(?:\s|\"|\'|hover\-)(\b(pre)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "whitespace-pre"],
    [/(?:\s|\"|\'|hover\-)(\b(di)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "inline"],
    [/(?:\s|\"|\'|hover\-)(\b(fl)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "float-left inline"],
    [/(?:\s|\"|\'|hover\-)(\b(fr)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "float-right inline"],
    [/(?:\s|\"|\'|hover\-)(\b(fn)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "float-none"],
    [/(?:\s|\"|\'|hover\-)(\b(h1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-4"],
    [/(?:\s|\"|\'|hover\-)(\b(h2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-8"],
    [/(?:\s|\"|\'|hover\-)(\b(h3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-16"],
    [/(?:\s|\"|\'|hover\-)(\b(h4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-32"],
    [/(?:\s|\"|\'|hover\-)(\b(h5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-64"],
    [/(?:\s|\"|\'|hover\-)(\b(list)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "list-none"],
    [/(?:\s|\"|\'|hover\-)(\b(transparent)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-transparent"],
    [/(?:\s|\"|\'|hover\-)(\b(dt)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "table"],
    [/(?:\s|\"|\'|hover\-)(\b(collapse)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-collapse"],
    // See https://github.com/tailwindcss/tailwindcss/releases/tag/v1.1.0 for more on pseudo-classes
    [/(?:\s|\"|\'|hover\-)(\b(striped--light-silver:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-600"],
    [/(?:\s|\"|\'|hover\-)(\b(striped--moon-gray:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-500"],
    [/(?:\s|\"|\'|hover\-)(\b(striped--light-gray:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-400"],
    [/(?:\s|\"|\'|hover\-)(\b(striped--near-white:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-300"],
    [/(?:\s|\"|\'|hover\-)(\b(stripe-light:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-200"],
    [/(?:\s|\"|\'|hover\-)(\b(stripe-dark:nth-child(odd))\b)(?:\s|\"|\'|-l|-m|-ns)/g, "odd:bg-gray-100"],
    [/(?:\s|\"|\'|hover\-)(\b(strike)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "line-through"],
    [/(?:\s|\"|\'|hover\-)(\b(tj)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-justify"],
    [/(?:\s|\"|\'|hover\-)(\b(ttc)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "capitalize"],
    [/(?:\s|\"|\'|hover\-)(\b(ttl)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "lowercase"],
    [/(?:\s|\"|\'|hover\-)(\b(ttu)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "uppercase"],
    [/(?:\s|\"|\'|hover\-)(\b(ttn)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "normal-case"],
    //f-6,.f-headline & f-5,.f-subheadline not supported (2381)
    [/(?:\s|\"|\'|hover\-)(\b(f1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-5xl"],
    [/(?:\s|\"|\'|hover\-)(\b(f2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-4xl"],
    [/(?:\s|\"|\'|hover\-)(\b(f3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-2xl"],
    [/(?:\s|\"|\'|hover\-)(\b(f4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-xl"],
    [/(?:\s|\"|\'|hover\-)(\b(f5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-2xl"],
    [/(?:\s|\"|\'|hover\-)(\b(f6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-sm"],
    [/(?:\s|\"|\'|hover\-)(\b(f7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-xs"],
    //.measure {max-width:30em} whereas .max-w-md {max-width: 28rem}
    [/(?:\s|\"|\'|hover\-)(\b(measure)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "max-w-md"],
    //.measure-wide {max-width:34em} whereas .max-w-xl {	max-width: 36rem;}
    [/(?:\s|\"|\'|hover\-)(\b(measure-wide)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "max-w-xl"],
    //.measure-narrow {max-width:20em} whereas .max-w-xs {	max-width: 20rem;}
    [/(?:\s|\"|\'|hover\-)(\b(measure-narrow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "max-w-xs"],
    //.indent & .small-caps not supported (2417)
    [/(?:\s|\"|\'|hover\-)(\b(overflow-container)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "overflow-y-scroll"],
    //.clip not supported
    [/(?:\s|\"|\'|hover\-)(\b(ws-normal)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "whitespace-normal"],
    [/(?:\s|\"|\'|hover\-)(\b(nowrap)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "whitespace-no-wrap"],
    [/(?:\s|\"|\'|hover\-)(\b(v-base)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "align-baseline"],
    [/(?:\s|\"|\'|hover\-)(\b(v-mid)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "align-middle"],
    [/(?:\s|\"|\'|hover\-)(\b(v-top)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "align-top"],
    [/(?:\s|\"|\'|hover\-)(\b(v-btm)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "align-bottom"],
    //.dim (2471) to .bg-animate (2550) not supported
    //z-index increments differ but should stack in the same order
    //.z-inherit & .z-unset not supported
    [/(?:\s|\"|\'|hover\-)(\b(z-1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-10"],
    [/(?:\s|\"|\'|hover\-)(\b(z-2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-20"],
    [/(?:\s|\"|\'|hover\-)(\b(z-3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-30"],
    [/(?:\s|\"|\'|hover\-)(\b(z-4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-40"],
    [/(?:\s|\"|\'|hover\-)(\b(z-5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-50"],
    [/(?:\s|\"|\'|hover\-)(\b(z-initial)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "z-auto"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-bottom)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-bottom bg-no-repeat"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-center)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-center bg-no-repeat"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-top)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-top bg-no-repeat"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-right)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-right bg-no-repeat"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-left)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-left bg-no-repeat"],
    [/(?:\s|\"|\'|hover\-)(\b(outline-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "outline-none"],
     //.outline & .outline-transparent not supported (205)
    [/(?:\s|\"|\'|hover\-)(\b(br0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-none"],
    [/(?:\s|\"|\'|hover\-)(\b(br1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-sm"],
    [/(?:\s|\"|\'|hover\-)(\b(br2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded"],
    [/(?:\s|\"|\'|hover\-)(\b(br3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-lg"],
     // .br4 & .br-100 not supported (436)
     // border-radius backwardness worth noting (445)
    [/(?:\s|\"|\'|hover\-)(\b(br--bottom)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-t-none"],
    [/(?:\s|\"|\'|hover\-)(\b(br--top)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-b-none"],
    [/(?:\s|\"|\'|hover\-)(\b(br--right)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-l-none"],
    [/(?:\s|\"|\'|hover\-)(\b(br--left)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "rounded-r-none"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dotted)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-dotted"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dashed)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-dashed"],
    [/(?:\s|\"|\'|hover\-)(\b(b--solid)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-solid"],
    [/(?:\s|\"|\'|hover\-)(\b(b--none)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-none"],
    //border-width not exact match - rem vs px, .bw5 not supported (447)
    [/(?:\s|\"|\'|hover\-)(\b(bw0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-0"],
    [/(?:\s|\"|\'|hover\-)(\b(bw1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border"],
    [/(?:\s|\"|\'|hover\-)(\b(bw2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-2"],
    [/(?:\s|\"|\'|hover\-)(\b(bw3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-4"],
    [/(?:\s|\"|\'|hover\-)(\b(bw4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-8"],
    [/(?:\s|\"|\'|hover\-)(\b(bt-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-t-0"],
    [/(?:\s|\"|\'|hover\-)(\b(br-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-r-0"],
    [/(?:\s|\"|\'|hover\-)(\b(bb-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-b-0"],
    [/(?:\s|\"|\'|hover\-)(\b(bl-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-l-0"],
    //shadows not exact match (504)
    [/(?:\s|\"|\'|hover\-)(\b(shadow-1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "shadow"],
    [/(?:\s|\"|\'|hover\-)(\b(shadow-2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "shadow-md"],
    [/(?:\s|\"|\'|hover\-)(\b(shadow-3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "shadow-lg"],
    [/(?:\s|\"|\'|hover\-)(\b(shadow-4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "shadow-xl"],
    [/(?:\s|\"|\'|hover\-)(\b(shadow-5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "shadow-2xl"],
    // absolute positions not supported except 0  which is exact match (524)
    [/(?:\s|\"|\'|hover\-)(\b(absolute--fill)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "inset-0"],
    //.cf:before not supported
    [/(?:\s|\"|\'|hover\-)(\b(cf)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "clearfix"],
    //clear options not supported (597)
    //.dit, dt-row-group, dt-column not supported (612)
    [/(?:\s|\"|\'|hover\-)(\b(dn)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "hidden"],
    [/(?:\s|\"|\'|hover\-)(\b(db)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "block"],
    [/(?:\s|\"|\'|hover\-)(\b(dib)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "inline-block"],
    [/(?:\s|\"|\'|hover\-)(\b(dtc)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "table-cell"],
    [/(?:\s|\"|\'|hover\-)(\b(dt-row)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "table-row"],
    [/(?:\s|\"|\'|hover\-)(\b(dt--fixed)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "table-fixed"],
    [/(?:\s|\"|\'|hover\-)(\b(order-0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "order-none"],
    // other font families not supported (801)
    [/(?:\s|\"|\'|hover\-)(\b(fs-normal)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "not-italic"],
    [/(?:\s|\"|\'|hover\-)(\b(fw1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-hairline"],
    [/(?:\s|\"|\'|hover\-)(\b(fw2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-thin"],
    [/(?:\s|\"|\'|hover\-)(\b(fw3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-light"],
    [/(?:\s|\"|\'|hover\-)(\b(fw4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-normal"],
    [/(?:\s|\"|\'|hover\-)(\b(fw5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-medium"],
    [/(?:\s|\"|\'|hover\-)(\b(fw6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-semibold"],
    [/(?:\s|\"|\'|hover\-)(\b(fw7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-bold"],
    [/(?:\s|\"|\'|hover\-)(\b(fw8)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-extrabold"],
    [/(?:\s|\"|\'|hover\-)(\b(fw9)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "font-black"],
    [/(?:\s|\"|\'|hover\-)(\b(input-reset)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "appearance-none"],
    [/(?:\s|\"|\'|hover\-)(\b(button-reset)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-0  p-0"],
    [/(?:\s|\"|\'|hover\-)(\b(input-reset)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-0  p-0"],
    // inherit & partial heights are not supported (908)
    [/(?:\s|\"|\'|hover\-)(\b(h-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-full"],
    [/(?:\s|\"|\'|hover\-)(\b(min-h-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "min-h-full"],
    [/(?:\s|\"|\'|hover\-)(\b(vh-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "h-screen"],
    [/(?:\s|\"|\'|hover\-)(\b(min-vh-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "min-h-screen"],
    //.tracked-mega not supported (950)
    [/(?:\s|\"|\'|hover\-)(\b(tracked)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "tracking-widest"],
    [/(?:\s|\"|\'|hover\-)(\b(tracked-tight)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "tracking-tighter"],
    [/(?:\s|\"|\'|hover\-)(\b(lh-solid)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "leading-none"],
    [/(?:\s|\"|\'|hover\-)(\b(lh-title)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "leading-tight"],
    [/(?:\s|\"|\'|hover\-)(\b(lh-copy)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "leading-normal"],
    //.link not supported (971)
    [/(?:\s|\"|\'|hover\-)(\b(mw-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "max-w-full"],
    // max-width in rems not compatible (977)
    [/(?:\s|\"|\'|hover\-)(\b(w1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-4"],
    [/(?:\s|\"|\'|hover\-)(\b(w2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-8"],
    [/(?:\s|\"|\'|hover\-)(\b(w3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-16"],
    [/(?:\s|\"|\'|hover\-)(\b(w4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-32"],
    [/(?:\s|\"|\'|hover\-)(\b(w5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-64"],
    // not all % widths supported (1022)
    [/(?:\s|\"|\'|hover\-)(\b(w-25)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-1/4"],
    [/(?:\s|\"|\'|hover\-)(\b(w-third)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-1/3"],
    [/(?:\s|\"|\'|hover\-)(\b(w-50)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-1/2"],
    [/(?:\s|\"|\'|hover\-)(\b(w-75)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-3/4"],
    [/(?:\s|\"|\'|hover\-)(\b(w-two-thirds)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-2/3"],
    [/(?:\s|\"|\'|hover\-)(\b(w-60)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-3/5"],
    [/(?:\s|\"|\'|hover\-)(\b(w-40)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-2/5"],
    [/(?:\s|\"|\'|hover\-)(\b(w-80)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-4/5"],
    [/(?:\s|\"|\'|hover\-)(\b(w-100)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-full"],
    [/(?:\s|\"|\'|hover\-)(\b(w-auto)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "w-auto"],
    //opacity  not compatible (1120)
    //rotate not supported (1160)
    [/(?:\s|\"|\'|hover\-)(\b(black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-black"],
    [/(?:\s|\"|\'|hover\-)(\b(white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-white"],
    [/(?:\s|\"|\'|hover\-)(\b(red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-red-600"],
    [/(?:\s|\"|\'|hover\-)(\b(orange)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-orange-600"],
    [/(?:\s|\"|\'|hover\-)(\b(gold)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-yellow-600"],
    [/(?:\s|\"|\'|hover\-)(\b(yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-yellow-500"],
    [/(?:\s|\"|\'|hover\-)(\b(purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-purple-700"],
    [/(?:\s|\"|\'|hover\-)(\b(green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-green-400"],
    [/(?:\s|\"|\'|hover\-)(\b(blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-blue-500"],
    [/(?:\s|\"|\'|hover\-)(\b(navy)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-blue-900"],
    [/(?:\s|\"|\'|hover\-)(\b(pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-pink-400"],
    [/(?:\s|\"|\'|hover\-)(\b(pa0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pa1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pa2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pa3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pa4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pa5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pa6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pa7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "p-64"],
    [/(?:\s|\"|\'|hover\-)(\b(pl0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pl1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pl2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pl3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pl4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pl5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pl6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pl7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pl-64"],
    [/(?:\s|\"|\'|hover\-)(\b(pr0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pr1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pr2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pr3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pr4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pr5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pr6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pr7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pr-64"],
    [/(?:\s|\"|\'|hover\-)(\b(pt0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pt1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pt2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pt3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pt4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pt5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pt6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pt7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pt-64"],
    [/(?:\s|\"|\'|hover\-)(\b(pb0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pb1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pb2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pb3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pb4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pb5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pb6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pb7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "pb-64"],
    [/(?:\s|\"|\'|hover\-)(\b(pv0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-0"],
    [/(?:\s|\"|\'|hover\-)(\b(pv1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-1"],
    [/(?:\s|\"|\'|hover\-)(\b(pv2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-2"],
    [/(?:\s|\"|\'|hover\-)(\b(pv3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-4"],
    [/(?:\s|\"|\'|hover\-)(\b(pv4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-8"],
    [/(?:\s|\"|\'|hover\-)(\b(pv5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-16"],
    [/(?:\s|\"|\'|hover\-)(\b(pv6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-32"],
    [/(?:\s|\"|\'|hover\-)(\b(pv7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "py-64"],
    [/(?:\s|\"|\'|hover\-)(\b(ph0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-0"],
    [/(?:\s|\"|\'|hover\-)(\b(ph1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-1"],
    [/(?:\s|\"|\'|hover\-)(\b(ph2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-2"],
    [/(?:\s|\"|\'|hover\-)(\b(ph3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-4"],
    [/(?:\s|\"|\'|hover\-)(\b(ph4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-8"],
    [/(?:\s|\"|\'|hover\-)(\b(ph5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-16"],
    [/(?:\s|\"|\'|hover\-)(\b(ph6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-32"],
    [/(?:\s|\"|\'|hover\-)(\b(ph7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "px-64"],
    [/(?:\s|\"|\'|hover\-)(\b(ma0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-0"],
    [/(?:\s|\"|\'|hover\-)(\b(ma1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-1"],
    [/(?:\s|\"|\'|hover\-)(\b(ma2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-2"],
    [/(?:\s|\"|\'|hover\-)(\b(ma3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-4"],
    [/(?:\s|\"|\'|hover\-)(\b(ma4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-8"],
    [/(?:\s|\"|\'|hover\-)(\b(ma5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-16"],
    [/(?:\s|\"|\'|hover\-)(\b(ma6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-32"],
    [/(?:\s|\"|\'|hover\-)(\b(ma7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "m-64"],
    [/(?:\s|\"|\'|hover\-)(\b(ml0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-0"],
    [/(?:\s|\"|\'|hover\-)(\b(ml1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-1"],
    [/(?:\s|\"|\'|hover\-)(\b(ml2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-2"],
    [/(?:\s|\"|\'|hover\-)(\b(ml3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-4"],
    [/(?:\s|\"|\'|hover\-)(\b(ml4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-8"],
    [/(?:\s|\"|\'|hover\-)(\b(ml5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-16"],
    [/(?:\s|\"|\'|hover\-)(\b(ml6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-32"],
    [/(?:\s|\"|\'|hover\-)(\b(ml7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "ml-64"],
    [/(?:\s|\"|\'|hover\-)(\b(mr0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-0"],
    [/(?:\s|\"|\'|hover\-)(\b(mr1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-1"],
    [/(?:\s|\"|\'|hover\-)(\b(mr2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-2"],
    [/(?:\s|\"|\'|hover\-)(\b(mr3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-4"],
    [/(?:\s|\"|\'|hover\-)(\b(mr4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-8"],
    [/(?:\s|\"|\'|hover\-)(\b(mr5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-16"],
    [/(?:\s|\"|\'|hover\-)(\b(mr6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-32"],
    [/(?:\s|\"|\'|hover\-)(\b(mr7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mr-64"],
    [/(?:\s|\"|\'|hover\-)(\b(mt0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-0"],
    [/(?:\s|\"|\'|hover\-)(\b(mt1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-1"],
    [/(?:\s|\"|\'|hover\-)(\b(mt2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-2"],
    [/(?:\s|\"|\'|hover\-)(\b(mt3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-4"],
    [/(?:\s|\"|\'|hover\-)(\b(mt4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-8"],
    [/(?:\s|\"|\'|hover\-)(\b(mt5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-16"],
    [/(?:\s|\"|\'|hover\-)(\b(mt6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-32"],
    [/(?:\s|\"|\'|hover\-)(\b(mt7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mt-64"],
    [/(?:\s|\"|\'|hover\-)(\b(mb0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-0"],
    [/(?:\s|\"|\'|hover\-)(\b(mb1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-1"],
    [/(?:\s|\"|\'|hover\-)(\b(mb2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-2"],
    [/(?:\s|\"|\'|hover\-)(\b(mb3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-4"],
    [/(?:\s|\"|\'|hover\-)(\b(mb4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-8"],
    [/(?:\s|\"|\'|hover\-)(\b(mb5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-16"],
    [/(?:\s|\"|\'|hover\-)(\b(mb6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-32"],
    [/(?:\s|\"|\'|hover\-)(\b(mb7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mb-64"],
    [/(?:\s|\"|\'|hover\-)(\b(mv0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-0"],
    [/(?:\s|\"|\'|hover\-)(\b(mv1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-1"],
    [/(?:\s|\"|\'|hover\-)(\b(mv2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-2"],
    [/(?:\s|\"|\'|hover\-)(\b(mv3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-4"],
    [/(?:\s|\"|\'|hover\-)(\b(mv4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-8"],
    [/(?:\s|\"|\'|hover\-)(\b(mv5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-16"],
    [/(?:\s|\"|\'|hover\-)(\b(mv6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-32"],
    [/(?:\s|\"|\'|hover\-)(\b(mv7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "my-64"],
    [/(?:\s|\"|\'|hover\-)(\b(mh0)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-0"],
    [/(?:\s|\"|\'|hover\-)(\b(mh1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-1"],
    [/(?:\s|\"|\'|hover\-)(\b(mh2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-2"],
    [/(?:\s|\"|\'|hover\-)(\b(mh3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-4"],
    [/(?:\s|\"|\'|hover\-)(\b(mh4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-8"],
    [/(?:\s|\"|\'|hover\-)(\b(mh5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-16"],
    [/(?:\s|\"|\'|hover\-)(\b(mh6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-32"],
    [/(?:\s|\"|\'|hover\-)(\b(mh7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "mx-64"],
    [/(?:\s|\"|\'|hover\-)(\b(na1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-1"],
    [/(?:\s|\"|\'|hover\-)(\b(na2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-2"],
    [/(?:\s|\"|\'|hover\-)(\b(na3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-4"],
    [/(?:\s|\"|\'|hover\-)(\b(na4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-8"],
    [/(?:\s|\"|\'|hover\-)(\b(na5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-16"],
    [/(?:\s|\"|\'|hover\-)(\b(na6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-32"],
    [/(?:\s|\"|\'|hover\-)(\b(na7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-m-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nl1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nl2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nl3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nl4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nl5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nl6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nl7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-ml-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nr1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nr2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nr3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nr4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nr5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nr6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nr7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mr-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nt1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nt2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nt3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nt4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nt5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nt6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nt7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mt-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nb1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nb2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nb3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nb4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nb5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nb6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nb7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mb-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nv1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nv2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nv3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nv4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nv5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nv6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nv7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-my-64"],
    [/(?:\s|\"|\'|hover\-)(\b(nh1)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-1"],
    [/(?:\s|\"|\'|hover\-)(\b(nh2)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-2"],
    [/(?:\s|\"|\'|hover\-)(\b(nh3)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-4"],
    [/(?:\s|\"|\'|hover\-)(\b(nh4)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-8"],
    [/(?:\s|\"|\'|hover\-)(\b(nh5)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-16"],
    [/(?:\s|\"|\'|hover\-)(\b(nh6)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-32"],
    [/(?:\s|\"|\'|hover\-)(\b(nh7)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "-mx-64"],
     //border colours are not an exact match
    [/(?:\s|\"|\'|hover\-)(\b(b--black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-black"],
    [/(?:\s|\"|\'|hover\-)(\b(b--near-black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-900"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dark-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-800"],
    [/(?:\s|\"|\'|hover\-)(\b(b--mid-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-700"],
    [/(?:\s|\"|\'|hover\-)(\b(b--gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-500"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-400"],
    [/(?:\s|\"|\'|hover\-)(\b(b--moon-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-300"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-200"],
    [/(?:\s|\"|\'|hover\-)(\b(b--near-white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-gray-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-white"],
     // .b--white-(n) & .b--black-(n) not supported (271)
    [/(?:\s|\"|\'|hover\-)(\b(b--dark-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-red-700"],
    [/(?:\s|\"|\'|hover\-)(\b(b--red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-red-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-red-500"],
    [/(?:\s|\"|\'|hover\-)(\b(b--orange)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-orange-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--gold)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-yellow-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-yellow-500"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-yellow-300"],
    [/(?:\s|\"|\'|hover\-)(\b(b--purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-purple-700"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-purple-400"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dark-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-pink-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--hot-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-pink-500"],
    [/(?:\s|\"|\'|hover\-)(\b(b--pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-pink-400"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-pink-300"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dark-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-green-600"],
    [/(?:\s|\"|\'|hover\-)(\b(b--green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-green-400"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-green-200"],
    [/(?:\s|\"|\'|hover\-)(\b(b--navy)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-blue-900"],
    [/(?:\s|\"|\'|hover\-)(\b(b--dark-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-blue-700"],
    [/(?:\s|\"|\'|hover\-)(\b(b--blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-blue-500"],
    [/(?:\s|\"|\'|hover\-)(\b(b--light-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-blue-300"],
    [/(?:\s|\"|\'|hover\-)(\b(b--lightest-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-blue-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--washed-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-indigo-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--washed-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-green-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--washed-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-yellow-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--washed-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-red-100"],
    [/(?:\s|\"|\'|hover\-)(\b(b--transparent)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "border-transparent"],

    //.white-(n) & .black-(n) not supported (1181)
    [/(?:\s|\"|\'|hover\-)(\b(near-black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-900"],
    [/(?:\s|\"|\'|hover\-)(\b(dark-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-800"],
    [/(?:\s|\"|\'|hover\-)(\b(mid-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-700"],
    [/(?:\s|\"|\'|hover\-)(\b(gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-600"],
    [/(?:\s|\"|\'|hover\-)(\b(silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-500"],
    [/(?:\s|\"|\'|hover\-)(\b(light-silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-400"],
    [/(?:\s|\"|\'|hover\-)(\b(moon-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-300"],
    [/(?:\s|\"|\'|hover\-)(\b(light-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-200"],
    [/(?:\s|\"|\'|hover\-)(\b(near-white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-gray-100"],
    [/(?:\s|\"|\'|hover\-)(\b(dark-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-red-700"],
    [/(?:\s|\"|\'|hover\-)(\b(light-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-red-500"],
    [/(?:\s|\"|\'|hover\-)(\b(light-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-yellow-300"],
    [/(?:\s|\"|\'|hover\-)(\b(light-purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-purple-400"],
    [/(?:\s|\"|\'|hover\-)(\b(dark-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-pink-600"],
    [/(?:\s|\"|\'|hover\-)(\b(hot-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-pink-500"],
    [/(?:\s|\"|\'|hover\-)(\b(light-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-pink-300"],
    [/(?:\s|\"|\'|hover\-)(\b(dark-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-green-600"],
    [/(?:\s|\"|\'|hover\-)(\b(light-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-green-200"],
    [/(?:\s|\"|\'|hover\-)(\b(dark-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-blue-700"],
    [/(?:\s|\"|\'|hover\-)(\b(light-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-blue-300"],
    [/(?:\s|\"|\'|hover\-)(\b(lightest-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-blue-100"],
    [/(?:\s|\"|\'|hover\-)(\b(washed-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-indigo-100"],
    [/(?:\s|\"|\'|hover\-)(\b(washed-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-green-100"],
    [/(?:\s|\"|\'|hover\-)(\b(washed-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-yellow-100"],
    [/(?:\s|\"|\'|hover\-)(\b(washed-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "text-red-100"],
    //.color-inherit not supported (1346)
    // .bg-white-(n) & .bg-black-(n) not supported (1349)
    [/(?:\s|\"|\'|hover\-)(\b(bg-black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-black"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-near-black)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-900"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-dark-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-800"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-mid-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-700"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-500"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-silver)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-400"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-moon-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-300"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-gray)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-200"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-near-white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-gray-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-white)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-white"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-dark-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-red-700"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-red-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-red-500"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-orange)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-orange-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-gold)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-yellow-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-yellow-500"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-yellow-300"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-purple-700"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-purple)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-purple-400"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-dark-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-pink-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-hot-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-pink-500"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-pink-400"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-pink)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-pink-300"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-dark-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-green-600"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-green-400"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-green-200"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-navy)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-blue-900"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-dark-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-blue-700"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-blue-500"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-light-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-blue-300"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-lightest-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-blue-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-washed-blue)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-indigo-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-washed-green)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-green-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-washed-yellow)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-yellow-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-washed-red)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-red-100"],
    [/(?:\s|\"|\'|hover\-)(\b(bg-transparent)\b)(?:\s|\"|\'|-l|-m|-ns)/g, "bg-transparent"],
    //.bg-inherit not supported (1517)
    //group hover not supported via cdn (1520)
  ]; 



     codeWords.forEach(item => {

            let w;
            let slice;
            while ((w = item[0].exec(result)) !== null) {
                if (w.index === item[0].lastIndex) {
                    item[0].lastIndex++;
                }
                
                w.forEach((match, groupIndex) => {

                    if (new RegExp("\\b"+match+"\\b").test(match)) {
                    
                             var qslicesp = '"'+match+' ';
                             var qsliceq = '"'+match+'"';
                             var spsliceq = ' '+match+'"';
                             var apslicesp = '\''+match+' ';
                             var apsliceap = '\''+match+'\'';
                             var spsliceap = ' '+match+'\'';
                             var spslicesp = ' '+match+' ';
                             var hslice = 'hover-'+match;
                             var slicens = match+'-ns';
                             var slicem = match+'-m';
                             var slicel = match+'-l';
                    }
                    if (match = qslicesp) {
                            let stingOperation = result.split(match).join('"'+item[1]+' ');
                            result= stingOperation;
                    }
                    if (match = qsliceq) {
                            let stingOperation = result.split(match).join('"'+item[1]+'"');
                            result= stingOperation;
                    }
                    if (match = spsliceq) {
                            let stingOperation = result.split(match).join(' '+item[1]+'"');
                            result= stingOperation;
                    }
                    if (match = apslicesp) {
                            let stingOperation = result.split(match).join('\''+item[1]+' ');
                            result= stingOperation;
                    }
                    if (match = apsliceap) {
                            let stingOperation = result.split(match).join('\''+item[1]+'\'');
                            result= stingOperation;
                    }
                    if (match = spsliceap) {
                            let stingOperation = result.split(match).join(' '+item[1]+'\'');
                            result= stingOperation;
                    }
                    if (match = spslicesp) {
                            let stingOperation = result.split(match).join(' '+item[1]+' ');
                            result= stingOperation;
                    }
                    if (match = hslice) {
                            let stingOperation = result.split(match).join('hover\:'+item[1]);
                            result= stingOperation;
                    }
                    if (match = slicens) {
                            let stingOperation = result.split(match).join('sm\:'+item[1]);
                            result= stingOperation;
                    }
                    if (match = slicem) {
                            let stingOperation = result.split(match).join('md\:'+item[1]);
                            result= stingOperation;
                    }
                    if (match = slicel) {
                            let stingOperation = result.split(match).join('lg\:'+item[1]);
                            result= stingOperation;
                    }
                });
            }
      });



          fs.writeFile(secretFBIfile, result, 'utf8', function (err) {
             if (err) return console.log(err); 
             else {console.log("..." + file + " has been switched")};
          });
        });
    });
    return result;
};

console.log(util.inspect(traverse(process.argv[2]), false, null));
console.log("\n MISSION COMPLETE (▀̿Ĺ̯▀̿ ̿)...\n");

//run in command line $ node /path/to/thisFile.js /path/to/target/dir
