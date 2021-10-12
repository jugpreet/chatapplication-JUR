import { lazy } from "react";

export const routes = {
  active: {
    name: "active",
    path: "/active",
    component: lazy(() => import("../pages/ActiveUser/ActiveUser")),
  },
  chatRoom: {
    name: "chatroom",
    path: "/chatroom",
    component: lazy(() => import("../pages/chatRoom/ChatRoom")),
  },
  startConversation: {
    name: "StartConversation",
    path: "/startConversation",
    component: lazy(() => import("../pages/StartConversation/StartConversation")),
  },
  emptyRoute: {
    name: "DefautlRoute",
    path: "/",
    component: lazy(() => import("../pages/UsersList/Userslist")),
  },
  startNewConv: {
    name: "StartNewConversation",
    path: "/startNewConversation",
    component: lazy(() => import("../pages/SelectUsersForConv/SelectUsersForConv")),
  },
};

export const renderRoutes = Object.entries(routes);