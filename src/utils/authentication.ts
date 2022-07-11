import { Md5 } from 'ts-md5/dist/md5';

const config = require('@/global_config');

const api_id = config.api_id;
const text_length = config.text_length;


function authentication_hash_code(text: string) {
    let whole_text: string;
    let random_num: number;
    let random_int: number;
    random_num = Math.random();
    random_int = 30000 + Math.round(random_num * 20000);
    // console.log("random_int");
    // console.log(random_int);  // 范围在 30000 ~ 50000

    if (text == "") {
        whole_text = random_int.toString() + "-" + "-".repeat(text_length) + "-" + api_id
    } else {
        whole_text = random_int.toString() + "-" + text.slice(0, text_length) + "-" + api_id
    }

    let hash_code = Md5.hashStr(whole_text);

    return {
        random_int: random_int,
        hash_code: hash_code,
        // whole_text: whole_text,
    };
}

export default authentication_hash_code;
