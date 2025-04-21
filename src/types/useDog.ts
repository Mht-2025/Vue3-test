import { reactive } from "vue";
import axios from "axios";

export default function () {

const dogList = reactive(["https://images.dog.ceo//breeds//pembroke//n02113023_3687.jpg"]);
async function getDog() {
  try {
    const result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");
    console.log(result.data);
    dogList.push(result.data.message);
  } catch (error) {
    // 申请失败
    alert(error);
  }
}
return [dogList,getDog]
}
