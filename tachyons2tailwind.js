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


        var encryptKeys = [
               [/(?:\s|"|\')(\b(serif)\b)(?:\s|"|\'|-l|-m|-sn)/g, "font-serif"],
               [/(?:\s|"|\')(\b(sans-serif)\b)(?:\s|"|\'|-l|-m|-sn)/g, "font-sans"],
               [/(?:\s|"|\')(\b(code)\b)(?:\s|"|\'|-l|-m|-sn)/g, "font-mono"],
               [/(?:\s|"|\')(\b(i)\b)(?:\s|"|\'|-l|-m|-sn)/g, "italic"],
               [/(?:\s|"|\')(\b(b)\b)(?:\s|"|\'|-l|-m|-sn)/g, "font-bold"],
               [/(?:\s|"|\')(\b(normal)\b)(?:\s|"|\'|-l|-m|-sn)/g, "font-normal"],
               [/(?:\s|"|\')(\b(tc)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-center"],
               [/(?:\s|"|\')(\b(tr)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-right"],
               [/(?:\s|"|\')(\b(tl)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-left"],
               [/(?:\s|"|\')(\b(center)\b)(?:\s|"|\'|-l|-m|-sn)/g, "mx-auto"],
               [/(?:\s|"|\')(\b(cover)\b)(?:\s|"|\'|-l|-m|-sn)/g, "bg-cover"],
               [/(?:\s|"|\')(\b(contain)\b)(?:\s|"|\'|-l|-m|-sn)/g, "bg-contain"],
               [/(?:\s|"|\')(\b(ba)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-solid"],
               [/(?:\s|"|\')(\b(bt)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-solid border-t"],
               [/(?:\s|"|\')(\b(br)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-solid border-r"],
               [/(?:\s|"|\')(\b(bb)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-solid border-b"],
               [/(?:\s|"|\')(\b(bl)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-solid border-l"],
               [/(?:\s|"|\')(\b(bn)\b)(?:\s|"|\'|-l|-m|-sn)/g, "border-none"],
               [/(?:\s|"|\')(\b(pre)\b)(?:\s|"|\'|-l|-m|-sn)/g, "overflow-x-auto overflow-y-hidden overflow-scroll whitespace-pre"],
               [/(?:\s|"|\')(\b(di)\b)(?:\s|"|\'|-l|-m|-sn)/g, "inline"],
               [/(?:\s|"|\')(\b(fl)\b)(?:\s|"|\'|-l|-m|-sn)/g, "float-left inline"],
               [/(?:\s|"|\')(\b(fr)\b)(?:\s|"|\'|-l|-m|-sn)/g, "float-right inline"],
               [/(?:\s|"|\')(\b(fn)\b)(?:\s|"|\'|-l|-m|-sn)/g, "float-none"],
               [/(?:\s|"|\')(\b(h1)\b)(?:\s|"|\'|-l|-m|-sn)/g, "h-4"],
               [/(?:\s|"|\')(\b(h2)\b)(?:\s|"|\'|-l|-m|-sn)/g, "h-8"],
               [/(?:\s|"|\')(\b(h3)\b)(?:\s|"|\'|-l|-m|-sn)/g, "h-16"],
               [/(?:\s|"|\')(\b(h4)\b)(?:\s|"|\'|-l|-m|-sn)/g, "h-32"],
               [/(?:\s|"|\')(\b(h5)\b)(?:\s|"|\'|-l|-m|-sn)/g, "h-64"],
               [/(?:\s|"|\')(\b(list)\b)(?:\s|"|\'|-l|-m|-sn)/g, "list-none"],
               [/(?:\s|"|\')(\b(transparent)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-transparent"],
               [/(?:\s|"|\')(\b(dt)\b)(?:\s|"|\'|-l|-m|-sn)/g, "table"],
               [/(?:\s|"|\')(\b(black)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-black"],
               [/(?:\s|"|\')(\b(white)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-white"],
               [/(?:\s|"|\')(\b(red)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-red-600"],
               [/(?:\s|"|\')(\b(orange)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-orange-600"],
               [/(?:\s|"|\')(\b(gold)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-yellow-600"],
               [/(?:\s|"|\')(\b(yellow)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-yellow-500"],
               [/(?:\s|"|\')(\b(purple)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-purple-700"],
               [/(?:\s|"|\')(\b(green)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-green-400"],
               [/(?:\s|"|\')(\b(blue)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-blue-500"],
               [/(?:\s|"|\')(\b(navy)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-blue-900"],
               [/(?:\s|"|\')(\b(pink)\b)(?:\s|"|\'|-l|-m|-sn)/g, "text-pink-400"],
          ]; 

         var codeWords = [
                [/pa0/g, "p-0"],
                [/pa1/g, "p-1"],
                [/pa2/g, "p-2"],
                [/pa3/g, "p-4"],
                [/pa4/g, "p-8"],
                [/pa5/g, "p-16"],
                [/pa6/g, "p-32"],
                [/pa7/g, "p-64"],
                [/pl0/g, "pl-0"],
                [/pl1/g, "pl-1"],
                [/pl2/g, "pl-2"],
                [/pl3/g, "pl-4"],
                [/pl4/g, "pl-8"],
                [/pl5/g, "pl-16"],
                [/pl6/g, "pl-32"],
                [/pl7/g, "pl-64"],
                [/pr0/g, "pr-0"],
                [/pr1/g, "pr-1"],
                [/pr2/g, "pr-2"],
                [/pr3/g, "pr-4"],
                [/pr4/g, "pr-8"],
                [/pr5/g, "pr-16"],
                [/pr6/g, "pr-32"],
                [/pr7/g, "pr-64"],
                [/pt0/g, "pt-0"],
                [/pt1/g, "pt-1"],
                [/pt2/g, "pt-2"],
                [/pt3/g, "pt-4"],
                [/pt4/g, "pt-8"],
                [/pt5/g, "pt-16"],
                [/pt6/g, "pt-32"],
                [/pt7/g, "pt-64"],
                [/pb0/g, "pb-0"],
                [/pb1/g, "pb-1"],
                [/pb2/g, "pb-2"],
                [/pb3/g, "pb-4"],
                [/pb4/g, "pb-8"],
                [/pb5/g, "pb-16"],
                [/pb6/g, "pb-32"],
                [/pb7/g, "pb-64"],
                [/pv0/g, "py-0"],
                [/pv1/g, "py-1"],
                [/pv2/g, "py-2"],
                [/pv3/g, "py-4"],
                [/pv4/g, "py-8"],
                [/pv5/g, "py-16"],
                [/pv6/g, "py-32"],
                [/pv7/g, "py-64"],
                [/ph0/g, "px-0"],
                [/ph1/g, "px-1"],
                [/ph2/g, "px-2"],
                [/ph3/g, "px-4"],
                [/ph4/g, "px-8"],
                [/ph5/g, "px-16"],
                [/ph6/g, "px-32"],
                [/ph7/g, "px-64"],
                [/ma0/g, "m-0"],
                [/ma1/g, "m-1"],
                [/ma2/g, "m-2"],
                [/ma3/g, "m-4"],
                [/ma4/g, "m-8"],
                [/ma5/g, "m-16"],
                [/ma6/g, "m-32"],
                [/ma7/g, "m-64"],
                [/ml0/g, "ml-0"],
                [/ml1/g, "ml-1"],
                [/ml2/g, "ml-2"],
                [/ml3/g, "ml-4"],
                [/ml4/g, "ml-8"],
                [/ml5/g, "ml-16"],
                [/ml6/g, "ml-32"],
                [/ml7/g, "ml-64"],
                [/mr0/g, "mr-0"],
                [/mr1/g, "mr-1"],
                [/mr2/g, "mr-2"],
                [/mr3/g, "mr-4"],
                [/mr4/g, "mr-8"],
                [/mr5/g, "mr-16"],
                [/mr6/g, "mr-32"],
                [/mr7/g, "mr-64"],
                [/mt0/g, "mt-0"],
                [/mt1/g, "mt-1"],
                [/mt2/g, "mt-2"],
                [/mt3/g, "mt-4"],
                [/mt4/g, "mt-8"],
                [/mt5/g, "mt-16"],
                [/mt6/g, "mt-32"],
                [/mt7/g, "mt-64"],
                [/mb0/g, "mb-0"],
                [/mb1/g, "mb-1"],
                [/mb2/g, "mb-2"],
                [/mb3/g, "mb-4"],
                [/mb4/g, "mb-8"],
                [/mb5/g, "mb-16"],
                [/mb6/g, "mb-32"],
                [/mb7/g, "mb-64"],
                [/mv0/g, "my-0"],
                [/mv1/g, "my-1"],
                [/mv2/g, "my-2"],
                [/mv3/g, "my-4"],
                [/mv4/g, "my-8"],
                [/mv5/g, "my-16"],
                [/mv6/g, "my-32"],
                [/mv7/g, "my-64"],
                [/mh0/g, "mx-0"],
                [/mh1/g, "mx-1"],
                [/mh2/g, "mx-2"],
                [/mh3/g, "mx-4"],
                [/mh4/g, "mx-8"],
                [/mh5/g, "mx-16"],
                [/mh6/g, "mx-32"],
                [/mh7/g, "mx-64"],
                [/na1/g, "-m-1"],
                [/na2/g, "-m-2"],
                [/na3/g, "-m-4"],
                [/na4/g, "-m-8"],
                [/na5/g, "-m-16"],
                [/na6/g, "-m-32"],
                [/na7/g, "-m-64"],
                [/nl1/g, "-ml-1"],
                [/nl2/g, "-ml-2"],
                [/nl3/g, "-ml-4"],
                [/nl4/g, "-ml-8"],
                [/nl5/g, "-ml-16"],
                [/nl6/g, "-ml-32"],
                [/nl7/g, "-ml-64"],
                [/nr1/g, "-mr-1"],
                [/nr2/g, "-mr-2"],
                [/nr3/g, "-mr-4"],
                [/nr4/g, "-mr-8"],
                [/nr5/g, "-mr-16"],
                [/nr6/g, "-mr-32"],
                [/nr7/g, "-mr-64"],
                [/nt1/g, "-mt-1"],
                [/nt2/g, "-mt-2"],
                [/nt3/g, "-mt-4"],
                [/nt4/g, "-mt-8"],
                [/nt5/g, "-mt-16"],
                [/nt6/g, "-mt-32"],
                [/nt7/g, "-mt-64"],
                [/nb1/g, "-mb-1"],
                [/nb2/g, "-mb-2"],
                [/nb3/g, "-mb-4"],
                [/nb4/g, "-mb-8"],
                [/nb5/g, "-mb-16"],
                [/nb6/g, "-mb-32"],
                [/nb7/g, "-mb-64"],
                [/nv1/g, "-my-1"],
                [/nv2/g, "-my-2"],
                [/nv3/g, "-my-4"],
                [/nv4/g, "-my-8"],
                [/nv5/g, "-my-16"],
                [/nv6/g, "-my-32"],
                [/nv7/g, "-my-64"],
                [/nh1/g, "-mx-1"],
                [/nh2/g, "-mx-2"],
                [/nh3/g, "-mx-4"],
                [/nh4/g, "-mx-8"],
                [/nh5/g, "-mx-16"],
                [/nh6/g, "-mx-32"],
                [/nh7/g, "-mx-64"],
                [/collapse/g, "border-collapse"],
                // See https://github.com/tailwindcss/tailwindcss/releases/tag/v1.1.0 for more on pseudo-classes
                [/striped--light-silver:nth-child(odd)/g, "odd:bg-gray-600"],
                [/striped--moon-gray:nth-child(odd)/g, "odd:bg-gray-500"],
                [/striped--light-gray:nth-child(odd)/g, "odd:bg-gray-400"],
                [/striped--near-white:nth-child(odd)/g, "odd:bg-gray-300"],
                [/stripe-light:nth-child(odd)/g, "odd:bg-gray-200"],
                [/stripe-dark:nth-child(odd)/g, "odd:bg-gray-100"],
                [/strike/g, "line-through"],
                [/tj/g, "text-justify"],
                [/ttc/g, "capitalize"],
                [/ttl/g, "lowercase"],
                [/ttu/g, "uppercase"],
                [/ttn/g, "normal-case"],
                //f-6,.f-headline & f-5,.f-subheadline not supported (2381)
                [/f1/g, "text-5xl"],
                [/f2/g, "text-4xl"],
                [/f3/g, "text-2xl"],
                [/f4/g, "text-xl"],
                [/f5/g, "text-2xl"],
                [/f6/g, "text-sm"],
                [/f7/g, "text-xs"],
                //.measure {max-width:30em} whereas .max-w-md {max-width: 28rem}
                [/measure/g, "max-w-md"],
                //.measure-wide {max-width:34em} whereas .max-w-xl {	max-width: 36rem;}
                [/measure-wide/g, "max-w-xl"],
                //.measure-narrow {max-width:20em} whereas .max-w-xs {	max-width: 20rem;}
                [/measure-narrow/g, "max-w-xs"],
                //.indent & .small-caps not supported (2417)
                [/overflow-container/g, "overflow-y-scroll"],
                //.clip not supported
                [/ws-normal/g, "whitespace-normal"],
                [/nowrap/g, "whitespace-no-wrap"],
                [/v-base/g, "align-baseline"],
                [/v-mid/g, "align-middle"],
                [/v-top/g, "align-top"],
                [/v-btm/g, "align-bottom"],
                //.dim (2471) to .bg-animate (2550) not supported
                //z-index increments differ but should stack in the same order
                //.z-inherit & .z-unset not supported
                [/z-1/g, "z-10"],
                [/z-2/g, "z-20"],
                [/z-3/g, "z-30"],
                [/z-4/g, "z-40"],
                [/z-5/g, "z-50"],
                [/z-initial/g, "z-auto"],
                [/bg-bottom/g, "bg-bottom bg-no-repeat"],
                [/bg-center/g, "bg-center bg-no-repeat"],
                [/bg-top/g, "bg-top bg-no-repeat"],
                [/bg-right/g, "bg-right bg-no-repeat"],
                [/bg-left/g, "bg-left bg-no-repeat"],
                [/outline-0/g, "outline-none"],
                 //.outline & .outline-transparent not supported (205)
                 //border colours are not an exact match
                [/b--black/g, "border-black"],
                [/b--near-black/g, "border-gray-900"],
                [/b--dark-gray/g, "border-gray-800"],
                [/b--mid-gray/g, "border-gray-700"],
                [/b--gray/g, "border-gray-600"],
                [/b--silver/g, "border-gray-500"],
                [/b--light-silver/g, "border-gray-400"],
                [/b--moon-gray/g, "border-gray-300"],
                [/b--light-gray/g, "border-gray-200"],
                [/b--near-white/g, "border-gray-100"],
                [/b--white/g, "border-white"],
                 // .b--white-(n) & .b--black-(n) not supported (271)
                [/b--dark-red/g, "border-red-700"],
                [/b--red/g, "border-red-600"],
                [/b--light-red/g, "border-red-500"],
                [/b--orange/g, "border-orange-600"],
                [/b--gold/g, "border-yellow-600"],
                [/b--yellow/g, "border-yellow-500"],
                [/b--light-yellow/g, "border-yellow-300"],
                [/b--purple/g, "border-purple-700"],
                [/b--light-purple/g, "border-purple-400"],
                [/b--dark-pink/g, "border-pink-600"],
                [/b--hot-pink/g, "border-pink-500"],
                [/b--pink/g, "border-pink-400"],
                [/b--light-pink/g, "border-pink-300"],
                [/b--dark-green/g, "border-green-600"],
                [/b--green/g, "border-green-400"],
                [/b--light-green/g, "border-green-200"],
                [/b--navy/g, "border-blue-900"],
                [/b--dark-blue/g, "border-blue-700"],
                [/b--blue/g, "border-blue-500"],
                [/b--light-blue/g, "border-blue-300"],
                [/b--lightest-blue/g, "border-blue-100"],
                [/b--washed-blue/g, "border-indigo-100"],
                [/b--washed-green/g, "border-green-100"],
                [/b--washed-yellow/g, "border-yellow-100"],
                [/b--washed-red/g, "border-red-100"],
                [/b--transparent/g, "border-transparent"],
                 // .b--inherit not supported (421)
                [/br0/g, "rounded-none"],
                [/br1/g, "rounded-sm"],
                [/br2/g, "rounded"],
                [/br3/g, "rounded-lg"],
                 // .br4 & .br-100 not supported (436)
                 // border-radius backwardness worth noting (445)
                [/br--bottom/g, "rounded-t-none"],
                [/br--top/g, "rounded-b-none"],
                [/br--right/g, "rounded-l-none"],
                [/br--left/g, "rounded-r-none"],
                [/b--dotted/g, "border-dotted"],
                [/b--dashed/g, "border-dashed"],
                [/b--solid/g, "border-solid"],
                [/b--none/g, "border-none"],
                //border-width not exact match - rem vs px, .bw5 not supported (447)
                [/bw0/g, "border-0"],
                [/bw1/g, "border"],
                [/bw2/g, "border-2"],
                [/bw3/g, "border-4"],
                [/bw4/g, "border-8"],
                [/bt-0/g, "border-t-0"],
                [/br-0/g, "border-r-0"],
                [/bb-0/g, "border-b-0"],
                [/bl-0/g, "border-l-0"],
                //shadows not exact match (504)
                [/shadow-1/g, "shadow"],
                [/shadow-2/g, "shadow-md"],
                [/shadow-3/g, "shadow-lg"],
                [/shadow-4/g, "shadow-xl"],
                [/shadow-5/g, "shadow-2xl"],
                // absolute positions not supported except 0  which is exact match (524)
                [/absolute--fill/g, "inset-0"],
                //.cf:before not supported
                [/cf/g, "clearfix"],
                //clear options not supported (597)
                //.dit, dt-row-group, dt-column not supported (612)
                [/dn/g, "hidden"],
                [/db/g, "block"],
                [/dib/g, "inline-block"],
                [/dtc/g, "table-cell"],
                [/dt-row/g, "table-row"],
                [/dt--fixed/g, "table-fixed w-full"],
                [/order-0/g, "order-none"],
                // other font families not supported (801)
                [/fs-normal/g, "not-italic"],
                [/fw1/g, "font-hairline"],
                [/fw2/g, "font-thin"],
                [/fw3/g, "font-light"],
                [/fw4/g, "font-normal"],
                [/fw5/g, "font-medium"],
                [/fw6/g, "font-semibold"],
                [/fw7/g, "font-bold"],
                [/fw8/g, "font-extrabold"],
                [/fw9/g, "font-black"],
                [/input-reset/g, "appearance-none"],
                [/button-reset/g, "border-0  p-0"],
                [/input-reset/g, "border-0  p-0"],
                // inherit & partial heights are not supported (908)
                [/h-100/g, "h-full"],
                [/min-h-100/g, "min-h-full"],
                [/vh-100/g, "h-screen"],
                [/min-vh-100/g, "min-h-screen"],
                //.tracked-mega not supported (950)
                [/tracked/g, "tracking-widest"],
                [/tracked-tight/g, "tracking-tighter"],
                [/lh-solid/g, "leading-none"],
                [/lh-title/g, "leading-tight"],
                [/lh-copy/g, "leading-normal"],
                //.link not supported (971)
                [/mw-100/g, "max-w-full"],
                // max-width in rems not compatible (977)
                [/w1/g, "w-4"],
                [/w2/g, "w-8"],
                [/w3/g, "w-16"],
                [/w4/g, "w-32"],
                [/w5/g, "w-64"],
                // not all % widths supported (1022)
                [/w-25/g, "w-1/4"],
                [/w-third/g, "w-1/3"],
                [/w-50/g, "w-1/2"],
                [/w-75/g, "w-3/4"],
                [/w-two-thirds/g, "w-2/3"],
                [/w-60/g, "w-3/5"],
                [/w-40/g, "w-2/5"],
                [/w-80/g, "w-4/5"],
                [/w-100/g, "w-full"],
                [/w-auto/g, "w-auto"],
                //opacity  not compatible (1120)
                //rotate not supported (1160)
                //.white-(n) & .black-(n) not supported (1181)
                [/near-black/g, "text-gray-900"],
                [/dark-gray/g, "text-gray-800"],
                [/mid-gray/g, "text-gray-700"],
                [/gray/g, "text-gray-600"],
                [/silver/g, "text-gray-500"],
                [/light-silver/g, "text-gray-400"],
                [/moon-gray/g, "text-gray-300"],
                [/light-gray/g, "text-gray-200"],
                [/near-white/g, "text-gray-100"],
                [/dark-red/g, "text-red-700"],
                [/light-red/g, "text-red-500"],
                [/light-yellow/g, "text-yellow-300"],
                [/light-purple/g, "text-purple-400"],
                [/dark-pink/g, "text-pink-600"],
                [/hot-pink/g, "text-pink-500"],
                [/light-pink/g, "text-pink-300"],
                [/dark-green/g, "text-green-600"],
                [/light-green/g, "text-green-200"],
                [/dark-blue/g, "text-blue-700"],
                [/light-blue/g, "text-blue-300"],
                [/lightest-blue/g, "text-blue-100"],
                [/washed-blue/g, "text-indigo-100"],
                [/washed-green/g, "text-green-100"],
                [/washed-yellow/g, "text-yellow-100"],
                [/washed-red/g, "text-red-100"],
                //.color-inherit not supported (1346)
                // .bg-white-(n) & .bg-black-(n) not supported (1349)
                [/bg-black/g, "bg-black"],
                [/bg-near-black/g, "bg-gray-900"],
                [/bg-dark-gray/g, "bg-gray-800"],
                [/bg-mid-gray/g, "bg-gray-700"],
                [/bg-gray/g, "bg-gray-600"],
                [/bg-silver/g, "bg-gray-500"],
                [/bg-light-silver/g, "bg-gray-400"],
                [/bg-moon-gray/g, "bg-gray-300"],
                [/bg-light-gray/g, "bg-gray-200"],
                [/bg-near-white/g, "bg-gray-100"],
                [/bg-white/g, "bg-white"],
                [/bg-dark-red/g, "bg-red-700"],
                [/bg-red/g, "bg-red-600"],
                [/bg-light-red/g, "bg-red-500"],
                [/bg-orange/g, "bg-orange-600"],
                [/bg-gold/g, "bg-yellow-600"],
                [/bg-yellow/g, "bg-yellow-500"],
                [/bg-light-yellow/g, "bg-yellow-300"],
                [/bg-purple/g, "bg-purple-700"],
                [/bg-light-purple/g, "bg-purple-400"],
                [/bg-dark-pink/g, "bg-pink-600"],
                [/bg-hot-pink/g, "bg-pink-500"],
                [/bg-pink/g, "bg-pink-400"],
                [/bg-light-pink/g, "bg-pink-300"],
                [/bg-dark-green/g, "bg-green-600"],
                [/bg-green/g, "bg-green-400"],
                [/bg-light-green/g, "bg-green-200"],
                [/bg-navy/g, "bg-blue-900"],
                [/bg-dark-blue/g, "bg-blue-700"],
                [/bg-blue/g, "bg-blue-500"],
                [/bg-light-blue/g, "bg-blue-300"],
                [/bg-lightest-blue/g, "bg-blue-100"],
                [/bg-washed-blue/g, "bg-indigo-100"],
                [/bg-washed-green/g, "bg-green-100"],
                [/bg-washed-yellow/g, "bg-yellow-100"],
                [/bg-washed-red/g, "bg-red-100"],
                [/bg-transparent/g, "bg-transparent"],
                //.bg-inherit not supported (1517)
                [/hover-/g, "hover\:"],
                //group hover not supported via cdn (1520)
          ];


    const sx = /class=".*?\s?(\w+(\-ns))(?:\s|")/g;
    const mx = /class=".*?\s?(\w+(\-m))(?:\s|")/g;
    const lx = /class=".*?\s?(\w+(\-l))(?:\s|")/g;
    let s;
    let m;
    let l;

     encryptKeys.forEach(item => {

            let w;
            let slice;
            while ((w = item[0].exec(result)) !== null) {
                if (w.index === item[0].lastIndex) {
                    item[0].lastIndex++;
                }
                
                w.forEach((match, groupIndex) => {

                    if (groupIndex == 0) {
                        if (match.indexOf('-ns') !== -1) {
                            let stingOperation = result.split(match).join(" sm\\:"+item[1]);
                            result= stingOperation;
                        }
                        if (match.indexOf('-m') !== -1) {
                            let stingOperation = result.split(match).join(" md\\:"+item[1]);
                            result= stingOperation;
                        }
                        if (match.indexOf('-l') !== -1) {
                            let stingOperation = result.split(match).join(" lg\\:"+item[1]);
                            result= stingOperation;
                        }
                    }

                    if (new RegExp("\\b"+match+"\\b").test(match)) {
                    
                             var qslicesp = '"'+match+' ';
                             var qsliceq = '"'+match+'"';
                             var spsliceq = ' '+match+'"';
                             var apslicesp = '\''+match+' ';
                             var apsliceap = '\''+match+'\'';
                             var spsliceap = ' '+match+'\'';
                             var spslicesp = ' '+match+' ';
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
                });
            }
      });

        while ((s = sx.exec(result)) !== null) {
            if (s.index === sx.lastIndex) {
                s.lastIndex++;
            }
            
            s.forEach((match, groupIndex) => {
                if (groupIndex == 1) {
                const prepended =  "sm\\:" + match;
                const replaced = prepended.replace(/\-ns$/, "");
                let stingOperation = result.replace(match, replaced);
                result= stingOperation;
                }
            });
        }

        while ((m = mx.exec(result)) !== null) {
            if (m.index === mx.lastIndex) {
                m.lastIndex++;
            }
            
            m.forEach((match, groupIndex) => {
                if (groupIndex == 1) {
                const prepended =  "md\\:" + match;
                const replaced = prepended.replace(/\-m$/, "");
                let stingOperation = result.replace(match, replaced);
                result= stingOperation;
                }
            });
        }

        while ((l = lx.exec(result)) !== null) {
            if (l.index === lx.lastIndex) {
                l.lastIndex++;
            }
            
            l.forEach((match, groupIndex) => {
                if (groupIndex == 1) {
                const prepended =  "lg\\:" + match;
                const replaced = prepended.replace(/\-l$/, "");
                let stingOperation = result.replace(match, replaced);
                result= stingOperation;
                }
            });
        }

          codeWords.forEach(item => {
            let stingOperation = result.replace(item[0], item[1]);
            result= stingOperation;
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
