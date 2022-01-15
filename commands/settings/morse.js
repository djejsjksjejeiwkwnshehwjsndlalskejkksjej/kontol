const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'morse',
    description: "Converts your message into morse code!",
    usage: "?morse <message>",
    aliases: ['morsecode'],
    run: async(client, message, args) => {
      if (args.length == 0)
      return message.channel
        .send(`<:667737932035129344:891461376277618739> *Usage: lisa morse <text>* <:667737932035129344:891461376277618739>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));
        args = args.join(" ").toLowerCase();
        const dot = "•";
        const dash = "–";
        const morseCode = {
            a: dot + dash,
            b: dash + dot + dot + dot,
            c: dash + dot + dash + dot,
            d: dash + dot + dot,
            e: dot,
            f: dot + dot + dash + dot,
            g: dash + dash + dot,
            h: dot + dot + dot + dot,
            i: dot + dot,
            j: dot + dash + dash + dash,
            k: dash + dot + dash,
            l: dot + dash + dot + dot,
            m: dash + dash,
            n: dash + dot,
            o: dash + dash + dash,
            p: dot + dash + dash + dot,
            q: dash + dash + dot + dash,
            r: dot + dash + dot,
            s: dot + dot + dot,
            t: dash,
            u: dot + dot + dash,
            v: dot + dot + dot + dash,
            w: dot + dash + dash,
            x: dash + dot + dot + dash,
            y: dash + dot + dash + dash,
            z: dash + dash + dot + dot,
            "0": dash + dash + dash + dash + dash,
            "1": dot + dash + dash + dash + dash,
            "2": dot + dot + dash + dash + dash,
            "3": dot + dot + dot + dash + dash,
            "4": dot + dot + dot + dot + dash,
            "5": dot + dot + dot + dot + dot,
            "6": dash + dot + dot + dot + dot,
            "7": dash + dash + dot + dot + dot,
            "8": dash + dash + dash + dot + dot,
            "9": dash + dash + dash + dash + dot,
            ".": dot + dash + dot + dash + dot + dash,
            ",": dash + dash + dot + dot + dash + dash,
            "?": dot + dot + dash + dash + dot + dot,
            "'": dot + dash + dash + dash + dash + dot,
            "!": dash + dot + dash + dot + dash + dash,
            "/": dash + dot + dot + dash + dot,
            "(": dash + dot + dash + dash + dot,
            ")": dash + dot + dash + dash + dot + dash,
            "&": dot + dash + dot + dot + dot,
            ":": dash + dash + dash + dot + dot + dot,
            ";": dash + dot + dash + dot + dash + dot,
            "=": dash + dot + dot + dot + dash,
            "+": dot + dash + dot + dash + dot,
            "-": dash + dot + dot + dot + dot + dash,
            "\"": dot + dash + dot + dot + dash + dot,
            $: dot + dot + dot + dash + dot + dot + dash,
            "@": dot + dash + dash + dot + dash + dot,
            à: dot + dash + dash + dot + dash,
            ä: dot + dash + dot + dash,
            å: dot + dash + dash + dot + dash,
            ą: dot + dash + dot + dash,
            æ: dot + dash + dot + dash,
            ć: dash + dot + dash + dot + dot,
            ĉ: dash + dot + dash + dot + dot,
            ç: dash + dot + dash + dot + dot,
            ch: dash + dash + dash + dash,
            đ: dot + dot + dash + dot + dot,
            ð: dot + dot + dash + dash + dot,
            é: dot + dot + dash + dot + dot,
            è: dot + dash + dot + dot + dash,
            ę: dot + dot + dash + dot + dot,
            ĝ: dash + dash + dot + dash + dot,
            ĥ: dash + dash + dash + dash,
            ĵ: dot + dash + dash + dash + dot,
            ł: dot + dash + dot + dot + dash,
            ń: dash + dash + dot + dash + dash,
            ñ: dash + dash + dot + dash + dash,
            ó: dash + dash + dash + dot,
            ö: dash + dash + dash + dot,
            ø: dash + dash + dash + dot,
            ś: dot + dot + dot + dash + dot + dot + dot,
            ŝ: dot + dot + dot + dash + dot,
            š: dash + dash + dash + dash,
            þ: dot + dash + dash + dot + dot,
            ü: dot + dot + dash + dash,
            ŭ: dot + dot + dash + dash,
            ź: dash + dash + dot + dot + dash + dot,
            ż: dash + dash + dot + dot + dash,
            " ": "\u2007"
        };
        args = args.replace(/./g, x => `${morseCode[x]}\u2001`).trim();

        const embed = new MessageEmbed()
        .setDescription(args)
        .setColor('BLUE')

        message.channel.send(embed)
    }
              }