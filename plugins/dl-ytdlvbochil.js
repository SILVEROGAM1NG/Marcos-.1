/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{youtubedl as e,youtubedlv2 as a,youtubedlv3 as i}from"@bochilteam/scraper";let handler=async(t,{conn:r,args:o})=>{if(!o[0])return t.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+command} https://youtu.be/ed-6VSF-GGc`);if(!isUrl(o[0])&&!o[0].includes("youtu"))return reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let n;await t.reply(MultiNK.Proces(await r.getName(t.sender)));try{let l=(o[1]||"360")+"p",d=o[0],c=await e(d).catch(async()=>await a(d)).catch(async()=>await i(d)),s=await c.video[l].download(),u=await c.title,p=await c.video[l].fileSizeH;if(p.split("MB")[0]>=50)return t.reply("[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v");await r.sendMessage(t.chat,{video:{url:s},fileName:`${u}.mp4`,mimetype:"video/mp4",caption:`Titulo: ${u}
Tama\xf1o: ${p}
Extencion: .mp4`},{quoted:t})}catch{await r.reply(t.chat,MultiNK.Error1(),t)}};handler.help=["ytvbochi <link>"],handler.tags=["servicio"],handler.command=/^(ytvbochi)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/