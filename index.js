// const VkBot = require('node-vk-bot-api');
// const Markup = require('node-vk-bot-api/lib/markup')
// const Session = require('node-vk-bot-api/lib/session');
 
// const bot = new VkBot('18614b7401348a2e78551d2a96425f4bbab362b8cb1edd702afe532ff1a8a527fcac4336b6d8710be71ae');

// // bot.on((ctx) => {
// //   ctx.reply('Снова привет, посмотри на эти команды, чтобы узнать как пользоваться ботом');
// // });

// bot.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (e) {
//     console.error(e);
//   }
// });
 
// bot.command('start', async (ctx) => {
//   await bot.start();
//   await ctx.reply('Привет! Это бот для отслеживания расписания в Московском Политехе. Чтобы вывести список комманд для управления ботом введи команду /help');
// });

// bot.command('/help', async (ctx) => {
//   await ctx.reply('Список комманд для бота: /rasp - Вывести рассписание занятий. /exams - Вевысти рассписание зачётов и экзаминов');
// });
 
// bot.command('/rasp', async (ctx) => {
//   await ctx.reply('Список комманд для бота: /rasp - Вывести рассписание занятий. /exams - Вевысти рассписание зачётов и экзаминов');
// });

// bot.command('/stop', async (ctx) => {
//   await bot.stop()
// });

// bot.command('/auth', async (ctx) => {
//   let data = ctx.message.text
//   console.log(data)
//   let login =  data.split('/')[2]
//   let password = data.split('/')[3]
//   console.log(login,password)
// });


// // Вывод кнопки с ссылкой
// bot.command('/btn', async (ctx) => {
//   await ctx.reply('Hey!', null, Markup
//     .keyboard([
//       Markup.button({
//         action: {
//           type: 'open_link',
//           link: 'https://google.com',
//           label: 'Open Google',
//           payload: JSON.stringify({
//             url: 'https://google.com',
//           }),
//         }
//         // color: 'default',
//       }),
//     ]),
//   );
// });

// bot.command('/btn-def', async (ctx) => {
//   ctx.reply('How are you doing?', null, Markup
//   .keyboard([
//     [
//       Markup.button('Normally', 'primary'),
//     ],
//     [
//       Markup.button('Fine', 'positive'),
//       Markup.button('Bad', 'negative'),
//     ],
//   ]),
// );
// });





// bot.startPolling( () => {console.log('Bot is running')});




const VkBot = require('node-vk-bot-api');
const Scene = require('node-vk-bot-api/lib/scene');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const app = require('express')

const bot = new VkBot("18614b7401348a2e78551d2a96425f4bbab362b8cb1edd702afe532ff1a8a527fcac4336b6d8710be71ae");
const scene = new Scene('meet',
  (ctx) => {
    ctx.scene.next();
    ctx.reply('How old are you?');
  },
  (ctx) => {
    ctx.session.age = +ctx.message.text;

    ctx.scene.next();
    ctx.reply('What is your name?');
  },
  (ctx) => {
    ctx.session.name = ctx.message.text;

    ctx.scene.leave();
    ctx.reply(`Nice to meet you, ${ctx.session.name} (${ctx.session.age} years old)`);
  },
);
const session = new Session();
const stage = new Stage(scene);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('/meet', (ctx) => {
  ctx.scene.enter('meet');
});

bot.command(, (ctx) => {
  console.log('hui')
});

bot.startPolling();