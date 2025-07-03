# Movie Review App (Laravel + React + Inertia.js) 🎥🎬

This is a **Movie Review App** built using **Laravel** as the backend, **React** as the frontend, and **Inertia.js** for smooth page transitions. The application includes features such as:

## Features ✨

- **Movies Page**: Browse all movies.
- **Watchlist**: Users can add movies to their watchlist. 
- **Profile**: Each user has a profile page. 
- **Admin Role**: Admins can add movies and actors. 
- **Likes & Comments**: Users can like and comment on movies. 
- **Movie Single Page**: A dedicated page for each movie with comments, likes, and details. 
- **Comment Likes**: Users can like individual comments. 


## Technologies Used 🛠️

- **Backend**: Laravel 12
- **Frontend**: React.js
- **Inertia.js**: To bridge the gap between React and Laravel for smooth navigation.
- **Database**: MySQL
- **Authentication**: Laravel authentication system.
- **State Management**: React Context API.

---

## Prerequisites 📃

- PHP 8.1+ and Composer
- Node.js and npm
- MySQL

## Getting started 🚀 

### 1. Clone the repository

```bash
$ git clone https://github.com/DimaShamoev/movie_review
$ cd movie-review
```

### 2. Backend (Laravel)
```bash
$ composer install
```

#### Generate application key
```bash
$ php artisan key:generate
```

#### Migrate the database:
```bash
$ php artisan migrate 
```

### 3. Frontend (React with Inertia.js)
```bash
$ npm intall
$ npm run dev 
```











