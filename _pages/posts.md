---
layout: single
author_profile: true 
classes: wide
---
<style>
div.ex1 {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
}
</style>

<img src="set.jpg" style="border-radius: 15px; margin-bottom: -10px;"/>

# Posts
---

<div class="ex1">
  <ul>
    {% for post in site.posts %}
      <li>
        <font size="5"><a href="{{ post.url }}">{{ post.title }}</a></font>
        <font size="4">{{ post.excerpt }}</font>
      </li>
    {% endfor %} 
  </ul>
</div>

<br>
*Scroll for More Posts*
