/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:n,command:t})=>{if(!n)return e.reply(`*[ ! ] Use bien el comando :*\n${Prefijo+t} @tag|mensaje|respuesta`);if(!n.includes("|"))return e.reply(`*[ ! ] Agrege barras entre cada palabra todo junto*\n\n_Ejemplo de uso_ : \n${Prefijo+t} @usuarioetiquetado|bendiceme|bendecido\n~No olvide usar esta barra~ : " | "`);const r=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?a.user.jid:e.sender,s=n.split("|")[1]?n.split("|")[1]:"No hay texto :v",i=n.split("|")[2]?n.split("|")[2]:"@"+e.sender.split("@")[0]+" use 2 barras\n@tag|mensaje|respuesta ✓";await a.sendMessage(e.chat,{text:i},{quoted:{key:{fromMe:!1,participant:r,...e.chat?{remoteJid:e.chat}:{}},message:{conversation:s}}}),reacMoji(e.chat,a,"🤫",e)};handler.help=["calumnia"],handler.tags=["games"],handler.command=/^calumnia$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/