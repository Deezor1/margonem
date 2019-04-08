// ==UserScript==
// @name         Podgląd postu na forum
// @version      0.1
// @author       Deezor
// @updateURL    https://deezor1.github.io/margonem/post_preview.user.js
// @match        https://www.margonem.pl/?task=forum&show=posts&id=*
// ==/UserScript==

(() => {
    const a = document.querySelectorAll('center');
    const b = a[a.length-5];
    if(b.innerHTML.indexOf("i") == 1){
        const but = document.createElement("button");
        but.style.cssText = 'width: 200px; height: 30px';
        but.appendChild(document.createTextNode('Podgląd postu'));
        b.appendChild(but);
        const d = document.createElement('div');
        d.style.cssText = 'text-align: left; margin-bottom: 20px;';
        b.appendChild(d);
        but.addEventListener('click', (e) => {
            e.preventDefault();
            let c = document.querySelector('#content').value;
            c = c.replace(/\n/g, ' <br>');
            c = c.replace(/\[code\](.+?)\[\/code\]/g, (match, a1) => {return '<code>' + a1 + ' </code>';});
            c = c.replace(/\[code\](.+?)\[\/code\]/g, (match, a1) => {return '<code>' + a1 + ' </code>';});
            c = c.replace(/\[code\](.+?)\[\/code\]/g, (match, a1) => {return '<code>' + a1 + ' </code>';});
            c = c.replace(/\[code\](.+?)\[\/code\]/g, (match, a1) => {return '<code>' + a1 + ' </code>';});
            c = c.replace(/\[code\](.+?)\[\/code\]/g, (match, a1) => {return '<code>' + a1 + ' </code>';});
            c = c.replace(/\[cytat\](.+?)\[\/cytat\]/g, (match, a1) => {return '<blockquote>' + a1 + ' </blockquote>';});//z tego co widziałem to tak samo jest napisane forum ¯\_(ツ)_/¯
            c = c.replace(/\[cytat\](.+?)\[\/cytat\]/g, (match, a1) => {return '<blockquote>' + a1 + ' </blockquote>';});
            c = c.replace(/\[cytat\](.+?)\[\/cytat\]/g, (match, a1) => {return '<blockquote>' + a1 + ' </blockquote>';});
            c = c.replace(/\[cytat\](.+?)\[\/cytat\]/g, (match, a1) => {return '<blockquote>' + a1 + ' </blockquote>';});
            c = c.replace(/\[cytat\](.+?)\[\/cytat\]/g, (match, a1) => {return '<blockquote>' + a1 + ' </blockquote>';});
            c = c.replace(/\[center\]/g, '<center>');
            c = c.replace(/\[\/center\]/g, '</center>');
            c = c.replace(/\[b\](.+?)\[\/b\]/g, (match, a1) => {return ' <strong>' + a1 + ' </strong>';});
            c = c.replace(/\[b\](.+?)\[\/b\]/g, (match, a1) => {return ' <strong>' + a1 + ' </strong>';});
            c = c.replace(/\[i\](.+?)\[\/i\]/g, (match, a1) => {return ' <em>' + a1 + ' </em>';});
            c = c.replace(/\[i\](.+?)\[\/i\]/g, (match, a1) => {return ' <em>' + a1 + ' </em>';});
            c = c.replace(/\[u\](.+?)\[\/u\]/g, (match, a1) => {return ' <u>' + a1 + ' </u>';});
            c = c.replace(/\[u\](.+?)\[\/u\]/g, (match, a1) => {return ' <u>' + a1 + ' </u>';});
            c = c.replace(/http:\/\/.*?.margonem.pl\/obrazki\/npc\/(.+?)(?= )/g, (match, a1) => {return ' <img src="/obrazki/npc/' + a1 + '">';});
            c = c.replace(/http:\/\/.*?.margonem.pl\/obrazki\/npc\/(.+?)$/g, (match, a1) => {return ' <img src="/obrazki/npc/' + a1 + '">';});
            c = c.replace(/(?=http:\/\/)(.+?)(?= )|(?=http:\/\/)(.+?)$|(?=https:\/\/)(.+?)(?= )|(?=https:\/\/)(.+?)$/g, '<a href="$&" target="_blank">$&</a>');
            c = c.replace(/ ;\)\)\)/g, ' <img src="/obrazki/emots/lol.gif">');
            c = c.replace(/ ;\)/g, ' <img src="/obrazki/emots/wink.gif">');
            c = c.replace(/ :\)/g, ' <img src="/obrazki/emots/smile.gif">');
            c = c.replace(/ :>/g, ' <img src="/obrazki/emots/evileye.gif">');
            c = c.replace(/ ;p| ;P/g, ' <img src="/obrazki/emots/razz.gif">');
            c = c.replace(/ :p| :P/g, ' <img src="/obrazki/emots/8p.gif">');
            c = c.replace(/ :d| :D| ;d| ;D/g, ' <img src="/obrazki/emots/biggrin.gif">');
            c = c.replace(/ :o| :O| ;o| ;O/g, ' <img src="/obrazki/emots/o_o.gif">');
            c = c.replace(/ xd| xD| Xd| XD/g, ' <img src="/obrazki/emots/xd.gif">');
            c = c.replace(/ x\(| X\(/g, ' <img src="/obrazki/emots/mad.gif">');
            c = c.replace(/ x\|| X\|/g, ' <img src="/obrazki/emots/doh.gif">');
            c = c.replace(/ :\|/g, ' <img src="/obrazki/emots/eek.gif">');
            c = c.replace(/ :\(/g, ' <img src="/obrazki/emots/sad.gif">');
            c = c.replace(/ ;\(/g, ' <img src="/obrazki/emots/crying.gif">');
            c = c.replace(/ :\/| ;\//g, ' <img src="/obrazki/emots/upset.gif">');
            c = c.replace(/ :\\| ;\\/g, ' <img src="/obrazki/emots/hmm.gif">');
            c = c.replace(/ ]\:->/g, ' <img src="/obrazki/emots/evillaugh.gif">');
            c = c.replace(/ :thx/g, ' <img src="/obrazki/emots/thanks.gif">');
            c = c.replace(/ :ahh/g, ' <img src="/obrazki/emots/aww.gif">');
            c = c.replace(/ :wstydnis/g, ' <img src="/obrazki/emots/blush.gif">');
            c = c.replace(/ :tanczy/g, ' <img src="/obrazki/emots/boogie.gif">');
            c = c.replace(/ :oops/g, ' <img src="/obrazki/emots/oops.gif">');
            c = c.replace(/ :zombie/g, ' <img src="/obrazki/emots/zombie.gif">');
            c = c.replace(/ :\]| ;\]/g, ' <img src="/obrazki/emots/smirk.gif">');
            c = c.replace(/ :\*| ;\*/g, ' <img src="/obrazki/emots/kiss.gif">');
            c = c.replace(/ :rotfl/g, ' <img src="/obrazki/emots/rotfl.gif">');
            c = c.replace(/ITEM#.+?(?= )|ITEM#.+?$/g, ' <img src="https://i.imgur.com/0eOUPIz.png" align="left">');
            c = c.replace(/ \<strong\>/g, '<strong>');
            c = c.replace(/ \<\/strong\>/g, '</strong>');
            c = c.replace(/ \<em\>/g, '<em>');
            c = c.replace(/ \<\/em\>/g, '</em>');
            c = c.replace(/ \<u\>/g, '<u>');
            c = c.replace(/ \<\/u\>/g, '</u>');
            d.innerHTML = c;
        });
    }
})();
