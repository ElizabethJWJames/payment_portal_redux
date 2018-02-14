import { Router, Route, Switch } from 'react-router';
import React, { Component } from 'react';
import HomeRoute from './homeRoute.js';
import FAQRoute from './faqRoute.js';
import ContactUsRoute from './contactUsRoute.js';
import App from './../App.js';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: HomeRoute
      },
      { path: '/faq',
        component: FAQRoute
      },
      { path: '/contactUs',
        component: ContactUsRoute
      }
    ]
  }
]

export default routes;
