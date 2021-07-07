# AKEA-Comics

## Project Description

AKEA-Comics is a mobile first web-app that allows comic book fans to browse an inventory of Marvel and DC comic books for sale. Once a user signs up for an account they will be given access to adding their own comic books for sale, along with editing and deleting their own posts.  Wishlist functionality will also be available to users.

## Wireframes

<a href='https://www.figma.com/file/gB4MT2PpxvD37yNjfYvO1H/Akea-Comics?node-id=4%3A2' rel="nofollow">Figma Screens</a>

## Component Hierarchy

<a href='https://whimsical.com/component-hierarchy-v1-2-5b9piMi9M2te5wL6bknmnc' rel="nofollow">Component Hierarchy</a>

## Team Expectations Template

<a href='https://docs.google.com/document/d/1HI1UQxEjJpgUCtooSCzJ-FHl192krMwmM2SGplIyFws/edit' rel="nofollow">Expectations Template</a>

## Schema

```
const Comic = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: false },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, required: true }
  },
  { timestamps: true }
)
```

```
const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'comics' }]
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
- Create wishlist for users to add to
- Create modules for the sign-in/login forms
- Utilize a component library
- Styled more detailed with overlaping images
- Carousel
- Update Password
- Filter Comics


## Project Schedule

| Day        | Deliverable                                                                           | Status     |
| ---------- | ------------------------------------------------------------------------------------- | ---------- |
| June 26-28 | Prompt / Wireframes / Priority Matrix / Timeframes                                    | Complete |
| June 28    | Project Approval / Build File Structure According to Component Heirarchy / Pseudocode | Complete |
| June 29    | Build Out Backend CRUD Functionality / Begin Front-End CRUD Functionality             | Complete |
| June 30    | Reach MVP for Funtionality                                                            | Complete |
| July 1     | Begin Styling                                                                         | Complete |
| July 2     | Finish MVP for Styling                                                                | Complete |
| July 5     | Begin Implementing PMVP Functionality and Styling                                     | Complete |
| July 6     | Complete PMVP                                                                         | Complete |
| July 7     | Presentations                                                                         | Complete |

## Timeframes

| Component                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Basic MVP Design                     |    H     |      5hrs      |      5hrs      |     5hrs     |
| Polished MVP Desgin                  |    H     |      5hrs      |      5hrs      |     5hrs     |
| Finished MVP Design                  |    H     |      5hrs      |      5hrs      |     5hrs     |
| File Structure for Backend           |    H     |      3hrs      |      3hrs      |     3hrs     |
| Pseudocode                           |    H     |      3hrs      |      3hrs      |     3hrs     |
| Backend CRUD                         |    H     |      3hrs      |      3hrs      |     3hrs     |
| Backend CRUD Route Testing           |    H     |      3hrs      |      3hrs      |     3hrs     |
| Front End File Build                 |    H     |      3hrs      |      3hrs      |     3hrs     |
| Create Routes and Links              |    H     |      3hrs      |      3hrs      |     3hrs     |
| Front End CRUD Functionality         |    H     |      3hrs      |      3hrs      |     3hrs     |
| Front End CRUD Route Testing         |    H     |      3hrs      |      3hrs      |     3hrs     |
| Rendering data to Home Screen        |    H     |      3hrs      |      3hrs      |     3hrs     |
| Rendering data to All Comics Screen  |    H     |      3hrs      |      3hrs      |     3hrs     |
| Rendering data to Details Screen     |    H     |      3hrs      |      3hrs      |     3hrs     |
| Create Edit Form Screen              |    H     |      3hrs      |      3hrs      |     3hrs     |
| Test Edit Form Functions and routes  |    H     |      3hrs      |      3hrs      |     3hrs     |
| Test Delete Form Funtions and routes |    H     |      3hrs      |      3hrs      |     3hrs     |
| Link Buttons                         |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Home Screen              |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling All Comics Screen        |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Details Screen           |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Create Screen            |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Edit Screen              |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Delete Screen            |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Login Screen             |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS Styling Sign-Up Screen           |    H     |      3hrs      |      3hrs      |     3hrs     |
| CSS polished styling                 |    H     |      3hrs      |      3hrs      |     3hrs     |
| Total                                |    H     |     87hrs      |     87hrs      |    87hrs     |
