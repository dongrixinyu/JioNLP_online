import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePageBase from "@/views/HomePageBase.vue";
import JionlpOnlineBase from "@/views/jionlp_online/JionlpOnlineBase.vue";
import LecturesBase from "@/views/lecture/LectureBase.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePageBase, // () => import('@/views/HomePageBase.vue'),
    children: [
      {
        path: "",
        name: "HomePageContent",
        component: () => import("@/views/HomePageContent.vue"),
      },
      {
        path: "contact_us",
        name: "ContactUs",
        component: () => import("@/components/others/ContactUs.vue"),
      },
    ],
  },

  {
    path: "/jionlp_online",
    name: "JionlpOnline",
    component: JionlpOnlineBase,
    children: [
      {
        path: "",
        name: "JionlpOnlineHome",
        component: () =>
          import("@/views/jionlp_online/JionlpOnlineDefaultContent.vue"),
      },
      // {
      //   path: "extract_keyphrase",
      //   name: "ExtractKeyphrase",
      //   component: () =>
      //     import("@/components/jionlp_online/ExtractKeyphrase.vue"),
      // },
      // {
      //   path: "cws_pos",
      //   name: "CwsPos",
      //   component: () => import("@/components/jionlp_online/CwsPos.vue"),
      // },
      {
        path: "parse_time",
        name: "ParseTime",
        component: () => import("@/components/jionlp_online/ParseTime.vue"),
      },
      {
        path: "extract_time",
        name: "ExtractTime",
        component: () => import("@/components/jionlp_online/ExtractTime.vue"),
      },
      {
        path: "parse_location",
        name: "ParseLocation",
        component: () => import("@/components/jionlp_online/ParseLocation.vue"),
      },
      {
        path: "clean_text",
        name: "CleanText",
        component: () => import("@/components/jionlp_online/CleanText.vue"),
      },
      {
        path: "parse_money",
        name: "ParseMoney",
        component: () => import("@/components/jionlp_online/ParseMoney.vue"),
      },
      {
        path: "parse_id_card",
        name: "ParseIDCard",
        component: () => import("@/components/jionlp_online/ParseIDCard.vue"),
      },
      // {
      //   path: "back_translation",
      //   name: "BackTranslation",
      //   component: () =>
      //     import("@/components/jionlp_online/BackTranslation.vue"),
      // },

      // {
      //   path: "homophone_substitution",
      //   name: "HomophoneSubstitution",
      //   component: () =>
      //     import("@/components/jionlp_online/HomophoneSubstitution.vue"),
      // },
    ],
  },

  {
    path: "/product",
    name: "Product",
    component: () => import("@/advertisements/TuiJuhe.vue"),
    children: [
      {
        path: "tui_juhe",
        name: "TuiJuhe",
        component: () => import("@/advertisements/TuiJuhe.vue"),
      },
    ],
  },

  {
    path: "/lecture/:lecture_name",
    name: "Lecture",
    component: LecturesBase,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
