import home from "./routes/views/Home.svelte";
import FormOne from "./routes/views/SignUp/formOne.svelte";
import FormSecond from "./routes/views/SignUp/formSecond.svelte";
import Result from "./routes/views/Result/Result.svelte";
const routes ={
    '/':home,
    '/FormOne':FormOne,
    '/FormSecond':FormSecond,
    '/Result':Result,

};

export default routes;