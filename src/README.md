Есть полезные параметры, такие как "per_page" и "Since", проверьте их.

Cоздать одностраничное приложение, которое позволяет получать список пользователей github.
Каждая строка содержит логин, ссылку на профиль (html_url) и предварительный просмотр аватара (100x100).
Нажатие на строку должно привести к открытию нового маршрута с большей версией аватара и дополнительной информацией о пользователе из «https://api.github.com/users/:username», такой как имя, подписчики, подписка, created_at, компания, адрес электронной почты, местоположение. , блог, биография.

There are helpfull parameters like "per_page" and "since", check them.
You need to create a single page application, which allows to get list of github users.
Each row contains login, profile link (html_url) and avatar preview(100x100).
Clicking on row should result in opening new route with bigger avatar version and additional user info from "https://api.github.com/users/:username”, such as name, followers, following, created_at, company, email, location, blog, bio.
