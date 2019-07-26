---
layout: single
title: Posts
author_profile: true 
---

 <ul>
  {% for post in site.posts %}
    <li>
      <font size="5"><a href="{{ post.url }}">{{ post.title }}</a>
      <font size="4">{{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
