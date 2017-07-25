/*******************************************************************************
 * Set up some render helpers that handle a bit of the logic
 *
 * Current options handled:
 *   option.longTitles: <bool>
 *     Uses the long title attribute of each link object unless it doesnt exist
 */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { AnimateScroll, DirectLink } from 'react-scroll';
import { Sessions } from '/imports/api/sessions';

export const renderLinks = (links = [], options = {}) => {

  if (!Array.isArray(links)) {
    throw new Error('renderLinks: Incorrect links argument.');
  }

  return links.map(link => {
    // Return null if certain conditions aren't met
    if (link.user && !Meteor.user()) {
      return null;
    }
    if (link.noUser && Meteor.user()) {
      return null;
    }
    if (link.recentlyViewedLink) {
      return (
        <li key={link.title}>
          <Link to={'/'}>
            <span className="highlight">Previously Viewed: </span>
            Codetony is Awesome
          </Link>
        </li>
      );
    }
    // For each link object sent to us, let's return the proper <li>
    if (link.href) {
      return (
        <li key={link.title}>
          <a href={link.href}>
            {options.longTitles && link.longTitle ? link.longTitle : link.title}
          </a>
        </li>
      );
    }
    if (link.directLink) {
      return (
        <li key={link.title}>
          <DirectLink
            to={link.directLink}
            smooth={true}
            offset={-Session.get('headerHeight')}
          >
            {options.longTitles && link.longTitle ? link.longTitle : link.title}
          </DirectLink>
        </li>
      );
    }
    if (link.link) {
      return (
        <li key={link.title}>
          <Link to={link.link}>
            {options.longTitles && link.longTitle ? link.longTitle : link.title}
          </Link>
        </li>
      );
    }
    return null;
  });
};