import { lazy } from 'react';
import URLInfo from './constants/URLInfo';

export const routes = [
  {
    path: URLInfo.MAIN,
    exact: true,
    component: lazy(() => import('@src/pages/Main')),
  },
  {
    path: URLInfo.NOT_FOUND,
    exact: true,
    component: lazy(() => import('@src/pages/NotFound')),
  },
  {
    path: URLInfo.INTRODUCE_ABOUT,
    exact: true,
    component: lazy(() => import('@src/pages/IntroduceAbout')),
  },
  {
    path: URLInfo.INTRODUCE_HISTORY,
    exact: true,
    component: lazy(() => import('@src/pages/IntroduceHistory')),
  },
  {
    path: URLInfo.INTRODUCE_INFOMATION,
    exact: true,
    component: lazy(() => import('@src/pages/IntroduceInfomation')),
  },
  {
    path: URLInfo.INTRODUCE_PARTNERS,
    exact: true,
    component: lazy(() => import('@src/pages/IntroducePartners')),
  },
  {
    path: URLInfo.INTRODUCE_LOCATION,
    exact: true,
    component: lazy(() => import('@src/pages/IntroduceLocation')),
  },
  {
    path: URLInfo.SERVICE_INDEX,
    exact: true,
    component: lazy(() => import('@src/pages/ServiceIndex')),
  },
  {
    path: URLInfo.SERVICE_CLOUD,
    exact: true,
    component: lazy(() => import('@src/pages/ServiceCloud')),
  },
  {
    path: URLInfo.SERVICE_G_CLOUD,
    exact: true,
    component: lazy(() => import('@src/pages/ServiceGCloud')),
  },
  {
    path: URLInfo.SERVICE_IDC,
    exact: true,
    component: lazy(() => import('@src/pages/ServiceIDC')),
  },
  {
    path: URLInfo.BOARD_PRESS,
    exact: true,
    component: lazy(() => import('@src/pages/BoardPress')),
  },
  {
    path: URLInfo.BOARD_PRESS_DETAIL,
    exact: true,
    component: lazy(() => import('@src/pages/BoardPressDetail')),
  },
  {
    path: URLInfo.BOARD_NOTICE,
    exact: true,
    component: lazy(() => import('@src/pages/BoardNotice')),
  },
  {
    path: URLInfo.BOARD_NOTICE_DETAIL,
    exact: true,
    component: lazy(() => import('@src/pages/BoardNoticeDetail')),
  },
];
