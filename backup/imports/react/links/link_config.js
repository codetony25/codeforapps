/**
 * Links config:
 *
 * We have an idea of "contextLinks" and "actionLinks". We consider context links to be
 * links that are generally only useful in the view that you're on (or the context you're in).
 * These can be links for scrolling to a certain point in the page, or something that will take
 * you to somewhere related.
 * 
 * A single link object can have:
 *  title: The link as it will be displayed
 *  link: If this exists, it is the route for <Link />
 *  directLink: If this exists, it is the route for <DirectLink />
 *  href: the good ol trusty anchor tag
 *  user: If true, only a logged in user can see this link
 *  noUser: If true, only someone who is not a logged in user would see it
 *    If neither user or noUser is present, either can see the link
 *  
 * RecentlyViewedLink simply holds a key 'recentlyViewed'
 * with a value of true to let the component know that either of those items should
 * be displayed. If they shouldn't be displayed, simply leave them out of the page of links object.
 *  
 * A page of links is an object with two keys, each are arrays. contextLinks holds an array
 * of link objects that are meant for the context section, and actionLinks for the action section.
 * Link objects in these arrays will appear in their sections in the order in which they are placed here.
 *
 * We've also set up a few helpers for rendering these links in the proper conditions.
 */
import React from 'react';
import { AnimateScroll } from 'react-scroll';

// Links that will probably be reused
const BooksLink = { title: 'browse for books', link: '/books' };
const ContactLink = { title: 'contact us', link: '/contact' };
const DashboardLink = { title: 'my account', link: '/dashboard', user: true };
const LoginLink = { title: 'login', link: '/login', noUser: true };
const LogoutLink = { title: 'logout', link: '/logout', user: true };
const RegisterLink = { title: 'register', link: '/register', noUser: true };
const ProfileLink = { title: 'profile', link: '/profile', user: true };
const FaqLink = { title: 'faq', longTitle: 'Frequently Asked Questions', link: '/faq' };
const FacebookLink = { title: 'facebook', link: 'https://facebook.com/everlib' };
const TwitterLink = { title: 'twitter', link: 'https://twitter.com/learn_everlib' };
const GithubLink = { title: 'github', link: 'https://github.com/everlib' };
const RecentlyViewedLink = { recentlyViewedLink: true };

// Let's create some sets that we'll repeat a lot
const StandardActionLinks = [
  RegisterLink, LoginLink, ProfileLink, LogoutLink
];

export const StandardContextAndActionLinks = {
  contextLinks: [ RecentlyViewedLink ],
  actionLinks: StandardActionLinks
};

/******************************************************************************
 * Links for routes
 *
 * Now that we are set up, let's build out the entire link config for each
 * of our routes. Alphabetical to find easier.
 */
export const BookEditLinks = StandardContextAndActionLinks;
export const BookNewLinks = StandardContextAndActionLinks;
export const BookProfileLinks = StandardContextAndActionLinks;
export const BooksLinks = StandardContextAndActionLinks;
export const ContactLinks = StandardContextAndActionLinks;
export const DashboardLinks = StandardContextAndActionLinks;
export const FaqLinks = StandardContextAndActionLinks;

export const LandingLinks = {
  contextLinks: [
    { title: 'features', directLink: 'features' },
    { title: 'benefits', directLink: 'benefits' },
    { title: 'how it works', directLink: 'workflow' },
    { title: 'testimonials', directLink: 'testimonials' }
  ],
  actionLinks: StandardActionLinks
};

export const LoginLinks = StandardContextAndActionLinks;
export const LogoutLinks = StandardContextAndActionLinks;
export const RegisterLinks = StandardContextAndActionLinks;
export const UnsubscribeLinks = StandardContextAndActionLinks;

/******************************************************************************
 * Links for other components
 *
 * These can simply be pulled in from the component
 */

export const SidebarLinks = {
  actionLinks: [
    DashboardLink,
    LogoutLink,
    RegisterLink,
    LoginLink,
    BooksLink
  ],
  contextLinks: [
    FaqLink,
    ContactLink
  ]
};

// Footer will have a few different sections that follow the same guidelines
// We'll probably attach some of the current pages context links under navigation
export const FooterLinks = {
  companyLinks: [
    { title: 'blog', href: '#' },
    { title: 'company', href: '#' },
    { title: 'services', href: '#' },
    { title: 'privacy policy', href: '#' },
    { title: 'terms & conditions', href: '#' }
  ],
  gettingStartedLinks: [
    FaqLink,
    { title: 'quickstart', href: '#' },
    { title: 'tutorial', href: '#' }
  ],
  communityLinks: [
    { title: 'events', href: '#' },
    { title: 'podcasts', href: '#' },
    FacebookLink,
    TwitterLink,
    GithubLink
  ]
};
