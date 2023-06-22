import React from 'react';
import { SOCIAL_LINKS } from '../site_info/constants';

const { GITHUB, LINKED_IN, FACEBOOK } = SOCIAL_LINKS;

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href={GITHUB} className="fa fa-github" />
      <a href={LINKED_IN} className="fa fa-linkedin-square" />
      <a href={FACEBOOK} className="fa fa-facebook-square" />

    </div >
  );
}
