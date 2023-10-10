import Bai1 from "../components/Bai01/Bai1";

import Bai04 from "../components/Bai04/Bai04";
import Home from "../components/Home/Home";
import configs from "../configs";
const router = [
     {
       name: configs.routes.Home.name,
        component: Home,
         options: { title: configs.routes.Home.title },
     },   
    {
       name: configs.routes.Bai1.name,
      component: Bai1,
       options: { title: configs.routes.Bai1.title },
     },
    {
        name: configs.routes.Bai4.name,
        component: Bai04,
        options: { title: configs.routes.Bai4.title ,Headers:false},
    }



];

export default router;