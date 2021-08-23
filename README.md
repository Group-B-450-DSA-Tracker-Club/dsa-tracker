# Contributors
Kevin Chang (Project Coordinator)
Oswaldo (Ozzy) Castillo
Juan Mendoza
Nicholas Recino
Uros Vorkapic

# dsa-tracker
This repository contains our 450 DSA tracker for Group B.
Project title: 450 DSA Tracker

Objective:
To build a PSDS progress tracker using React and TypeScript along with using other features like IndexedDB, Context API, reducer, and custom hooks.

Project Context:
You will build this project using Typescript and the React library, yet a simple project which utilizes the Context API and reducer features of React.js, and uses browser realtime IndexedDB, that means the app will not have a physical database, rather it caches for the particular browser.

Project stages:
- Fetch the data to be populated in the database in JSON format,
- Initializing IndexedDB using LocalBase, along with seeding the JSON data,
- Setup React Context and React Hooks,
- Designing the UI/UX,
- Deploy.

High-Level Approach:
 - Seed the Data to IndexedDB
 - Fetch the same data from the database and load the React Context.
 - User must be able to see different DSA modules with the curated list of questions with checkboxes which signifies the completion of each.

Primary goals:
- You must able to make firebase like functionality with Localbase module by using browser's indexedDB.
- Learn to write your own custom hooks, contexts, and reducer.
