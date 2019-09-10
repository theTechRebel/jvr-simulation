# JVR Simulation App

## Requirements

1.	Clone the repository at https://github.com/dimsavva/angular-bootstrap-starter
2.	Create a new repository for your project
3.	Use Api Services as specified in swagger specification at http://stratisqtest-001-site1.mysitepanel.net
4.	The following Service Endpoints are required for this project. All other services can be safely ignored. No Authentication is required for this project.

    a.	TeacherService

    b.	StudentService

    c.	LectureService

    d.	LectureStudentService

5.	Create navigation for the following pages

    a.	Home

    b.	Teachers

    c.	Students

    d.	Lecture

6.	On the Teacher's page, create a Bootstrap Datatable and implement the Create, Read, Update and Delete functionality for Teachers as illustrated below.
7.	The Students and Lecture Pages are NOT required, and are completely optional. Use the StudentService and LectureService via the Swagger interface or Postman to create your test data.
8.	On the Home Page (As Illustrated below):
    a.	List all lectures in a Bootstrap Datatable from the LectureService.

    b.	When a lecture has been selected, show a Radiogroup with a list of teachers, and allow selection of the teacher for the selected lecture.

    c.	When a lecture has been selected, show a Bootstrap Datatable below, allowing Add and Remove functionality using the LectureStudentService.

## Solution

This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Clone the project

`cd` into any directory you like

`git clone https://github.com/theTechRebel/jvr-simulation.git`

## Development server

`cd` into `jvr-simulation` directory

Run `npm install` to install all packages and dependencies

After it's done Run `npm start` to compile app and serve from dev server

Open your browser and Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).