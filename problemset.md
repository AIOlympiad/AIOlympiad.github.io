---
layout: default
title: Problem Set
lang: en
---

# Problem Set

Below you can find excersices for each section.

## Probability and Statistics
{% assign files = site.static_files | where_exp: "file", "file.path contains 'problemset/probability-statistics/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | replace:'.zip','' }}</a></li>
{% endfor %}
</ul>

## Linear Algebra
{% assign files = site.static_files | where_exp: "file", "file.path contains 'problemset/linear-algebra/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | replace:'.zip','' }}</a></li>
{% endfor %}
</ul>

## Machine Learning
{% assign files = site.static_files | where_exp: "file", "file.path contains 'problemset/machine-learning/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | replace:'.zip','' }}</a></li>
{% endfor %}
</ul>
