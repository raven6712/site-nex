import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import {
  HomePage,
  AboutPage,
  ProjectsPage,
  ProjectDetailPage,
  EventsPage,
  ShopPage,
  ContactPage,
  NotFoundPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'a-propos',
        element: <AboutPage />,
      },
      {
        path: 'projets',
        element: <ProjectsPage />,
      },
      {
        path: 'projets/:id',
        element: <ProjectDetailPage />,
      },
      {
        path: 'evenements',
        element: <EventsPage />,
      },
      {
        path: 'boutique',
        element: <ShopPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);
