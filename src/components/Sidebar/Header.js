import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading }) {
  return (
    <div id="logo">
      <Link to="/">
        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
