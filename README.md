# Flagquiz
POC of a flag quiz to assign flags to the correct countries. Is implemented with Angular in the frontend.

# Coding conventions

- Use comments
- Meaningful naming of attributes
- Use #id if something is unique 
- Use .class if something needs to be named indefinitely often

# Component structure

- app-component: Is the main component of the application. The app-component is the main layout and the basic structure of the application. Global data and services can also be initialized there.
- flag-quiz.component: This component can contain the main logic of the quiz, including the display of questions, evaluation of answers, etc.
- flag.component: This component can be reusable and handle the display of a single flag.
- quiz.service: Uses Angular services to share data between components. If necessary, creates a service for managing quiz questions or loading flags.