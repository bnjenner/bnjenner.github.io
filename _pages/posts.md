---
layout: single
title: Posts
---

 <ul>
  {% for post in site.posts %}
    <li>
      <font size="10"><a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
