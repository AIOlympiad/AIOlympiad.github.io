---
layout: default
title: منابع
lang: fa
---

# منابع

در این بخش می‌توانید محتوای آموزشی هر بخش را مشاهده و دانلود کنید. برای افزودن فایل، آن را در پوشه مربوطه در دایرکتوری `resources/` قرار دهید.

## احتمال و آمار
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/probability-statistics/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## جبر خطی
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/linear-algebra/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## یادگیری ماشین
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/machine-learning/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

## سایر
{% assign files = site.static_files | where_exp: "file", "file.path contains 'resources/other/'" %}
<ul class="download-list">
{% for file in files %}
  <li><a href="{{ file.path | relative_url }}" class="download-btn" download><i class="fas fa-file-download"></i>{{ file.name | slice: 2, 100 | replace:'.pdf','' }}</a></li>
{% endfor %}
</ul>

- [راهنمای مسابقه](#)
- [مطالب آموزشی](#)
- [سوالات سال‌های گذشته](#)
- [پرسش‌های متداول](#) 