# Reply Pilot

## Overview
ReplyPilot is an **AI-powered smart reply generator** built using **Spring Boot** and **Gemini 2.0 Flash API**.  
It helps users craft intelligent responses based on the message context and desired tone (e.g., professional, friendly, casual).  
Designed to be fast, minimal, and cross-platform ready, ReplyPilot is your co-pilot for everyday communication.

## How it works

- User enters a message context (e.g., an email they received).
- Selects a tone: **Professional**, **Friendly**, **Casual**, etc.
- ReplyPilot sends this to the **Gemini 2.0 Flash** model via API.
- AI generates a well-crafted response for the selected tone.
- They user can copy and use the response directly.

---

## Tech Stack

- **Backend**: Spring Boot + Spring AI
- **AI Model**: Google Gemini 2.0 Flash (`/v1beta/models/gemini-2.0-flash:generateContent`)
- **Frontend**: React (for UI, in development)
- **Build Tool**: Maven
- **Authentication**: None currently (planned for future)
- **Database**: Not yet integrated (planned for future)

---

## Features

- ✅ AI-generated replies using real-time Gemini API
- ✅ Support for multiple tones (Professional, Friendly, etc.)
- ✅ Lightweight and fast — no database needed for now
- ✅ Simple Spring Boot REST API
- ✅ Designed for future extension as a **browser plugin** (e.g., Gmail, WhatsApp)
- ✅ Easily extendable with DB, login, or other services

