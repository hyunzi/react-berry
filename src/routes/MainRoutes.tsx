import React from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';

// dashboard routing
const DashboardDefault = React.lazy(() => import('@/views/dashboard'));

// utilities routing
const UtilsTypography = React.lazy(() => import('@/views/utilities/Typography'));
const UtilsColor = React.lazy(() => import('@/views/utilities/Color'));
const UtilsShadow = React.lazy(() => import('@/views/utilities/Shadow'));
// const UtilsMaterialIcons = React.lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = React.lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = React.lazy(() => import('@/views/sample-page'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
