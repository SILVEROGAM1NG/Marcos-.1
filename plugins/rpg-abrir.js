/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const rewards={ordinario:{nkoins:101,exp:201,basura:11,elixir:[0,1,0,1,0,0,0,0,0],ordinario:[0,1,0,1,0,0,0,0,0,0],singular:[0,1,0,0,0,0,0,0,0,0,0,0]},singular:{nkoins:201,exp:401,basura:31,elixir:[0,1,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0,0,0,0,0],ordinario:[0,1,0,0,0,0,0,0],singular:[0,1,0,0,0,0,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0,0,0,0,0],madera:[0,1,0,0,0,0],roca:[0,1,0,0,0,0],cuerda:[0,1,0,0,0,0]},mitico:{nkoins:301,exp:551,basura:61,elixir:[0,1,0,0,0,0],esmeralda:[0,1,0,0,0,0,0,0,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0,0],oro:[0,1,0,0,0,0,0,0,0],hierro:[0,1,0,0,0,0,0,0],ordinario:[0,1,0,0,0,0],singular:[0,1,0,0,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0,0],legendario:[0,1,0,0,0,0,0,0,0,0,0,0,0],mascota:[0,1,0,0,0,0,0,0,0,0,0],madera:[0,1,0,0,0],roca:[0,1,0,0,0],cuerda:[0,1,0,0,0]},legendario:{nkoins:401,exp:601,basura:101,elixir:[0,1,0,0,0],esmeralda:[0,1,0,0,0,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0],oro:[0,1,0,0,0,0,0,0],hierro:[0,1,0,0,0,0,0],ordinario:[0,1,0,0],singular:[0,1,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0],legendario:[0,1,0,0,0,0,0,0,0,0],mascota:[0,1,0,0,0,0,0,0,0,0],madera:[0,1,0,0],roca:[0,1,0,0],cuerda:[0,1,0,0]}};let handler=async(e,{command:a,args:r})=>{const i=db.data.users[e.sender],o=Object.fromEntries(Object.entries(rewards).filter((([e])=>e&&e in i))),n=`\nUse formato *${Prefijo}${a} [caja] [valor]*\nEjemplo de uso: \n\n${Prefijo}${a} ordinario 1\n\n📍Lista de cajas: \n${Object.keys(o).map((e=>`\n${rpg.emoticon(e)}${e}\n`.trim())).join("\n")}\n`.trim(),t=(r[0]||"").toLowerCase(),s=1*Math.floor(isNumber(r[1])?Math.min(Math.max(parseInt(r[1]),1),Number.MAX_SAFE_INTEGER):1);if(!(t in o))return e.reply(n);if(i[t]<s)return e.reply(`\nSu *caja tipo ${rpg.emoticon(t)}${t}* no es suficiente!, tienes ${i[t]} caja tipo *${rpg.emoticon(t)}${t}*\nuse el comando:\n\n${Prefijo}comprar ${t} ${s-i[t]}\n\n`.trim());let m={};for(let e=0;e<s;e++)for(let[e,a]of Object.entries(o[t]))if(e in i){const r=a.getRandom();r&&(i[e]+=1*r,m[e]=(m[e]||0)+1*r)}i[t]-=1*s,e.reply(`\nHas abierto *${s}* caja(s) tipo ${global.rpg.emoticon(t)}${t} y obtienes:\n${Object.keys(m).filter((e=>e&&m[e]&&!/legendario|mascota|mitico|diamante|esmeralda/i.test(e))).map((e=>`\n*${global.rpg.emoticon(e)}${e}:* ${m[e]}\n`.trim())).join("\n")}\n`.trim());const c=m.diamante,d=m.mitico,l=m.mascota,$=m.legendario,p=m.esmeralda;(d||c)&&e.reply(`\nFelicidades, tienes un artículo raro, que es: ${c?`*${c}* ${rpg.emoticon("diamante")}diamante`:""}${c&&d?"y ":""}${d?`*${d}* ${rpg.emoticon("mitico")}mitico`:""}\n`.trim()),(l||$||p)&&e.reply(`\nFelicidades, tienes un artículo épico, que es: ${l?`*${l}* ${rpg.emoticon("mascota")}mascota`:""}${l&&$&&p?", ":l&&$||$&&p||p&&l?"y ":""}${$?`*${$}* ${rpg.emoticon("legendario")}legendario`:""}${l&&$&&p?"y ":""}${p?`*${p}* ${rpg.emoticon("esmeralda")}esmeralda`:""}\n`.trim())};handler.help=["abrir [caja] [valor]"],handler.tags=["games"],handler.command=/^abrir$/i;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/