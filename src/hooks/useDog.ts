import { reactive ,onMounted} from "vue";
import axios from "axios";

export default function () {
// 数据
const dogList = reactive(["https://images.dog.ceo//breeds//pembroke//n02113023_3687.jpg"]);

// 方法
/**
 * 异步获取狗狗图片
 * 本函数尝试从API获取一张随机的威尔士柯基犬的图片，并将其添加到狗狗图片列表中
 * 如果请求失败，将弹出一个包含错误信息的警告框
 */
async function getDog() {
  try {
    // 发起HTTP GET请求获取狗狗图片URL
    const result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");
    // 打印整个响应数据，用于调试目的
    console.log(result.data);
    // 将获取到的狗狗图片URL添加到狗狗图片列表中
    dogList.push(result.data.message);
  } catch (error) {
    // 请求失败时执行的代码块
    alert(error);
  }
}

  // 钩子
  onMounted(()=>{
    getDog()
  })
  // 返回一个包含狗狗图片列表和获取狗狗图片函数的对象
  return {dogList, getDog};
}
