const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot('18614b7401348a2e78551d2a96425f4bbab362b8cb1edd702afe532ff1a8a527fcac4336b6d8710be71ae');

bot.on((ctx) => {
  ctx.reply('Снова привет, посмотри на эти команды, чтобы узнать как пользоваться ботом');
});

bot.use(async (ctx, next) => {

  try {
    await next();
  } catch (e) {
    console.error(e);
  }
});
 
bot.command('/start', async (ctx) => {
  await ctx.reply('Привет! Это бот для отслеживания расписания в Московском Политехе. Чтобы вывести список комманд для управления ботом введи команду /help');
});

bot.command('/help', async (ctx) => {
  await ctx.reply('Список комманд для бота: /rasp - Вывести рассписание занятий. /exams - Вевысти рассписание зачётов и экзаминов');
});
 
bot.command('/rasp', async (ctx) => {
  await ctx.reply('Список комманд для бота: /rasp - Вывести рассписание занятий. /exams - Вевысти рассписание зачётов и экзаминов');
});

bot.command('/exams', async (ctx) => {
  await ctx.reply('Список комманд для бота: /rasp - Вывести рассписание занятий. /exams - Вевысти рассписание зачётов и экзаминов');
});

bot.startPolling( () => {console.log('Bot is running')});