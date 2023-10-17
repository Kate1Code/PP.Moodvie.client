# Moodvie README

## Overview

**Moodvie** is an interactive app dedicated to helping couples or groups of friends select a movie for their date or hangout night. By taking into account the preferences of all involved, it ensures a delightful cinematic experience without the hassle of indecision.

## Table of Contents
- [Description](#description)
- [Problem Statement](#problem-statement)
- [User Persona](#user-persona)
- [Features](#features)
- [Tech Stack & APIs](#tech-stack-and-apis)
- [Client-Side Implementation](#client-side-implementation)
- [Server-Side Implementation](#server-side-implementation)
- [Project Roadmap](#project-roadmap)
- [Demo Day Information](#demo-day-information)

## Description
**Moodvie** allows users to input their movie preferences. The app then matches these preferences against their date's or friend's preferences, eventually suggesting movies that will be enjoyed by both.

## Problem Statement
Movie selection can often lead to long, indecisive discussions, especially during dates. The challenge Moodvie addresses is to find mutual movie interests without scrolling through numerous choices.

## User Persona
The app targets couples or groups of friends intending to watch a movie together. With an intuitive design backed by a romantic or fun style, Moodvie enhances the overall mood for a date or gathering.

## Features
- User account creation and personalization.
- Movie categorization: 'yes', 'maybe', or 'no'.
- A pool for 'yes' and 'maybe' categorized movies.
- Trailer Display.
- Integration with IMDb for real-time movie data and trailers.

## Tech Stack and APIs
- **Frontend**: React, video integration, Axios
- **Backend**: Node.js, express.js, JWT
- **Database**: MySQL
- **API**: [IMDb API](https://www.imdb.com/)

## Client-Side Implementation
Please refer to the sitemap and screen details for a comprehensive overview of the client-side structure. Mockups and screen details can provide further insight into UI/UX aspects.

## Server-Side Implementation
### Endpoints
- `HTTP POST` /user/register
- `HTTP POST` /user/login
- `HTTP GET` /movies/match
- `HTTP GET, POST` /movies/preferences
- `HTTP GET, POST` /movies/pool

### External APIs
Moodvie utilizes [The Movie Database API](https://www.imdb.com/) to fetch movie data based on users' preferences.

### Database Structure
Table: MoviePool
- movieID
- title

### Security
JWT (JSON Web Token) ensures user authentication and session management.
