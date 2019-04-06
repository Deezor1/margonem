// ==UserScript==
// @name         Podgląd postu na forum
// @version      0.1
// @author       Deezor
// @match        https://www.margonem.pl/?task=forum&show=posts&id=*
// ==/UserScript==

(() => {
    const a = document.getElementsByTagName('center');
    const b = a[a.length-5];
    if(b.innerHTML.indexOf("i") == 1){ //Sprawdzenie czy temat jest otwarty
        const but = document.createElement("button");
        but.style.cssText = 'width: 200px; height: 30px';
        but.id = 'postPreview';
        const t = document.createTextNode('Podgląd postu');
        but.appendChild(t);
        b.appendChild(but);
        const bu = document.getElementById('postPreview');
        const d = document.createElement('div');
        d.style.cssText = 'width: auto; height: auto; text-align: left; margin-bottom: 20px;';
        b.appendChild(d);
        bu.addEventListener('click', (e) => {
            e.preventDefault();
            let c = document.getElementById('content').value;
            //BBCode
            c = c.replace(/\[b\](.+?)\[\/b\]/g, (match, a1) => {return '<strong>' + a1 + '</strong>';});
            c = c.replace(/\[i\](.+?)\[\/i\]/g, (match, a1) => {return '<em>' + a1 + '</em>';});
            c = c.replace(/\[u\](.+?)\[\/u\]/g, (match, a1) => {return '<u>' + a1 + '</u>';});
            c = c.replace(/\n/g, (match, a1, a2) => {return ' <br> ';});
            c = c.replace(/\[center\](.+?)\[\/center\]/g, (match, a1) => {return '<center>' + a1 + '</center>';});
            c = c.replace(/\[code\]/g, (match, a1) => {return '<code>';});
            c = c.replace(/\[\/code\]/g, (match, a1) => {return '</code>';});
            c = c.replace(/\[cytat\]/g, (match, a1) => {return '<blockquote>';});
            c = c.replace(/\[\/cytat\]/g, (match, a1) => {return '</blockquote>';});
            //Emotki
            c = c.replace(/(?=http)(.+?)(?= )|(?=http)(.+?)($)/g, '<a href="$&">$&</a>');
            c = c.replace(/ ;\)\)\)/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/lol.gif">';});
            c = c.replace(/ ;\)/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/wink.gif">';});
            c = c.replace(/ :\)/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/smile.gif">';});
            c = c.replace(/ :>/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/evileye.gif">';});
            c = c.replace(/ ;p| ;P/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/razz.gif">';});
            c = c.replace(/ :p| :P/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/8p.gif">';});
            c = c.replace(/ :d| :D| ;d| ;D/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/biggrin.gif">';});
            c = c.replace(/ :o| :O| ;o| ;O/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/o_o.gif">';});
            c = c.replace(/ xd| xD| Xd| XD/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/xd.gif">';});
            c = c.replace(/ x\(| X\(/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/mad.gif">';});
            c = c.replace(/ x\|| X\|/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/doh.gif">';});
            c = c.replace(/ :\|/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/eek.gif">';});
            c = c.replace(/ :\(/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/sad.gif">';});
            c = c.replace(/ ;\(/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/crying.gif">';});
            c = c.replace(/ :\/| ;\//g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/upset.gif">';});
            c = c.replace(/ :\\| ;\\/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/hmm.gif">';});
            c = c.replace(/ ]\:->/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/evillaugh.gif">';});
            c = c.replace(/ :thx/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/thanks.gif">';});
            c = c.replace(/ :ahh/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/aww.gif">';});
            c = c.replace(/ :wstydnis/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/blush.gif">';});
            c = c.replace(/ :tanczy/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/boogie.gif">';});
            c = c.replace(/ :oops/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/oops.gif">';});
            c = c.replace(/ :zombie/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/zombie.gif">';});
            c = c.replace(/ :\]| ;\]/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/smirk.gif">';});
            c = c.replace(/ :\*| ;\*/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/kiss.gif">';});
            c = c.replace(/ :rotfl/g, () => {return ' <img src="http://www.margonem.pl/obrazki/emots/rotfl.gif">';});
            c = c.replace(/ITEM#(.+?)(?= )|ITEM#(.+?)($)/g, (match, a1) => {return ' <img src="https://i.imgur.com/0eOUPIz.png" align="left">';});
            d.innerHTML = c;
        });
    }
})();
