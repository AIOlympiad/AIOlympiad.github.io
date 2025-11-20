---
layout: default
title: Resources
lang: en
---

# Resources

Below you can find educational content for each section.

## Probability and Statistics
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/probability-statistics/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## Linear Algebra
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/linear-algebra/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## Machine Learning
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/machine-learning/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## Other
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/other/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

- [Competition Guidelines](#)
- [Learning Materials](#)
- [Previous Problems](#)
- [FAQ](#) 
