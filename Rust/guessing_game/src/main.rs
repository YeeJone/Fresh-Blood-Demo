use std::io;

fn main() {
    println!("请开始玩猜数字游戏吧~");

    let mut guess = String::new();
    println!("请输入你的数字");
    io::stdin().read_line(&mut guess).expect("读取失败");

    println!("你猜的数字是: {}", guess);
}