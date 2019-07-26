---
layout: single
title: Posts
author_profile: true 
classes: wide
---

 <ul>
  {% for post in site.posts %}
    <li>
      <font size="5"><a href="{{ post.url }}">{{ post.title }}</a></font>
      <font size="4">{{ post.excerpt }}</font>
    </li>
  {% endfor %}
</ul>
