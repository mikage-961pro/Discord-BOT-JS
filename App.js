//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzM2MTE2NzEyNTQ1NDUyMDMy.XxqIHA.KtgHmImFtHj3ylgQSuwN4--O0l0';
client.on('ready', () => {
    console.log('ready...');
});
//Bot自身の発言を無視する呪い
client.on('message', message =>{
    if(message.author.bot){
        return;
   }
//↓ここに後述のコードをコピペする↓
if (message.content === '寒いね') {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `寒いね`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}
if (message.content === '生放送') {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `7月24日(金)20:00~の通常枠と23:00~のプレミアムの待機準備はできてますか？P配信の際はお飲み物お食事ご用意くださいね。エウレカも用意しています♪`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}




if (message.content.match(/こんば/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text =`こんばんは〜`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}

if (message.content.match(/おはよ/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text =`おはようございます！`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}

if (message.content.match(/女子力/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text =`女子力が高い女性と一緒にいると、男性も「頑張らねば！」と思ってしまいますが、女子力が低めの女性であればありのままの自分でいることができ男性も楽なよう。あまりに女子力を磨き過ぎている女性を見ると、近寄り難いと感じて声をかけられないこともあるので、女磨きはほどほどにね。`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}
if (message.content.match(/大好き/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text =`さん、私も大好き♪`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}

if (message.content.match(/おはよ/)) {
    message.channel.send(`${author}さん、おはようございます！`)
}
//↑ここに後述のコードをコピペする↑
});
client.login(token);