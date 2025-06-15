---
layout: default
title: Home
lang: en
---

<div class="hero">
    <h1>AI Olympiad</h1>
    <p>Advancing AI education and research through international competitions</p>
</div>

<div class="cards">
    <div class="card">
        <h2>Resources</h2>
        <p>Access learning materials, competition guidelines, and previous year's problems to prepare for the competition.</p>
        <a href="/resources" class="lang-btn" style="margin-top:1rem;display:inline-block;">Go to Resources</a>
    </div>
</div>

# Welcome to My Website

This is my personal website built with Jekyll and hosted on GitHub Pages.

## Recent Posts

{% for post in site.posts %}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </article>
{% endfor %} 