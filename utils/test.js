import { Command, InvalidArgumentError } from 'commander'

const program = new Command()

function opValidate(value, dummyPrevious) {
    console.log('opValidate------------------------------------------------------------------------------------------------------------')
    console.log(value, dummyPrevious)
  if (typeof value != 'string') {
    throw new InvalidArgumentError('必须输入正确的字符串')
  }
  return value
}

function opArrValidate(value, dummyPrevious) {
    console.log('opArrValidate------------------------------------------------------------------------------------------------------------')    
    console.log(value, dummyPrevious)
  if (typeof value != 'string') {
    throw new InvalidArgumentError('必须输入正确的字符串')
  }
  if (dummyPrevious) {
    return [...dummyPrevious, value]
  }
  return [value]
}

program
  .argument('<name>', '登录用户名')
  .argument('[password]', '登录密码， 默认密码123456', '123456')
  .argument('[other...]', '其他参数', opArrValidate, ['other初始值'])
  .option('-o, --output <output>', '文件生成位置', opValidate)
  .option('-l, --no-log ', '是否输出日志')
  .option('-s, --sendto <user...> ', '发送到用户', opArrValidate)
  .action(async (url, password, other, option) => {
    console.log(url, password, other, option)
    try {
      // 这里执行代码
      // await wat??
    } catch (e) {
      console.log(e)
      process.exit(-1)
    }
  })
  .parse()