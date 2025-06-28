---
layout: default
title: Blog
permalink: /blog/
---

<div class="container mx-auto px-4 py-12 max-w-6xl">
  <h1 class="text-4xl font-bold mb-12 text-center md:text-left">Últimos Artículos</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for post in site.posts %}
      <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <a href="{{ post.url }}" class="block h-full">
          {% if post.image %}
            <img 
              src="{{ post.image }}" 
              alt="{{ post.title }}"
              loading="lazy"
              width="400"
              height="267"
              class="w-full h-48 object-cover">
          {% endif %}
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt | strip_html | truncatewords: 25 }}
            </p>
            <time class="text-sm text-gray-500">
              {{ post.date | date: "%d %B, %Y" }}
            </time>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
</div>