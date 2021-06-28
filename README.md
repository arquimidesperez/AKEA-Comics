# AKEA-Comics

## Project Description

AKEA-Comics is a web-app that allows comic book fans to browse an inventory of Marvel and DC comic books for sale. Once a user signs up for an account they will be given the ablility to add their own comic books for sale. They will be able to edit or delete their own posts as well.

## Wireframes
<a href='https://www.figma.com/file/gB4MT2PpxvD37yNjfYvO1H/Akea-Comics?node-id=4%3A2' rel="nofollow">Figma Screens</a>

## Component Hierarchy
<a href='https://whimsical.com/component-hierarchy-v1-2-5b9piMi9M2te5wL6bknmnc' rel="nofollow">Component Hierarchy</a>

## Team Expectations Template
<a href='https://docs.google.com/document/d/1HI1UQxEjJpgUCtooSCzJ-FHl192krMwmM2SGplIyFws/edit' rel="nofollow">Expectations Template</a>


## Schema
```
const comic = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: false },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true } 
  },
  { timestamps: true }
)
```

#### MVP

- Full backend and font end CRUD
- Implement User Authentication
- Styled with a Marvel/DC theme

#### PostMVP

- Create a hamburger slide menu
- Create shopping cart for users to add to
- Create modules for the sign-in/login forms
- Utilize a component library
- Styled more detailed with overlaping images

## Project Schedule

| Day        | Deliverable                                                                           | Status     |
| ---------- | ------------------------------------------------------------------------------------- | ---------- |
| June 26-28 | Prompt / Wireframes / Priority Matrix / Timeframes                                    | Incomplete |
| June 28    | Project Approval / Build File Structure According to Component Heirarchy / Pseudocode | Incomplete |
| June 29    | Build Out Backend CRUD Functionality / Begin Front-End CRUD Functionality             | Incomplete |
| June 30    | Reach MVP for Funtionality                                                            | Incomplete |
| July 1     | Begin Styling                                                                         | Incomplete |
| July 2     | Finish MVP for Styling                                                                | Incomplete |
| July 5     | Begin Implementing PMVP Functionality and Styling                                     | Incomplete |
| July 6     | Complete PMVP                                                                         | Incomplete |
| July 7     | Presentations                                                                         | Incomplete |

## Timeframes

| Component                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Basic MVP Design                     |   H   |      5hrs      |      hrs      |     hrs     |
| Polished MVP Desgin                  |   H   |      5hrs      |      hrs      |     hrs     |
| Finished MVP Design                  |   H   |      5hrs      |      5hrs     |    5hrs
| File Structure for Backend           |    H    |      3hrs       |      hrs      |     hrs     |
| Pseudocode                           |    H    |      3hrs       |      hrs      |     hrs     |
| Backend CRUD                         |    H    |      3hrs       |      hrs      |     hrs     |
| Backend CRUD Route Testing           |    H    |      3hrs       |      hrs      |     hrs     |
| Front End File Build                 |    H    |      3hrs       |      hrs      |     hrs     |
| Create Routes and Links              |    H    |      3hrs       |      hrs      |     hrs     |
| Front End CRUD Functionality         |    H    |      3hrs       |      hrs      |     hrs     |
| Front End CRUD Route Testing         |    H    |      3hrs       |      hrs      |     hrs     |
| Rendering data to Home Screen        |    H    |      3hrs       |      hrs      |     hrs     |
| Rendering data to All Comics Screen  |    H    |      3hrs       |      hrs      |     hrs     |
| Rendering data to Details Screen     |    H    |      3hrs       |      hrs      |     hrs     |
| Create Edit Form Screen              |    H    |      3hrs       |      hrs      |     hrs     |
| Test Edit Form Functions and routes  |    H    |      3hrs       |      hrs      |     hrs     |
| Test Delete Form Funtions and routes |    H    |      3hrs       |      hrs      |     hrs     |
| Link Buttons                         |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Home Screen              |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling All Comics Screen        |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Details Screen           |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Create Screen            |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Edit Screen              |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Delete Screen            |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Login Screen             |    H    |      3hrs       |      hrs      |     hrs     |
| CSS Styling Sign-Up Screen           |    H    |      3hrs       |      hrs      |     hrs     |
| CSS polished styling                 |    H    |      3hrs       |      hrs      |     hrs     |
| Total                                |    H     |     81hrs      |      hrs      |     hrs     |
