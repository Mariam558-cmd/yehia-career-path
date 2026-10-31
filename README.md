# Yehia's Career Path

**Name:** Mariam Atwy

**Course:** TechTalks · Ultimate Next.js 16 Course · Assignment 1 (Routing System)

## About the project

Yehia is a Computer Science graduate from the Lebanese University who wants
to find a job within two months. This small website turns his scattered ideas
into a clear journey: a home page with his goal, a three-step plan, a list of
opportunities with a details page for each one, and a dashboard that shows his
applications.

The project was built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.
It uses local sample data only, so there is no database or login.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Home page with Yehia's goal |
| `/plan` | The three-step plan: Prepare, Practice, Apply |
| `/opportunities` | A list of three opportunities |
| `/opportunities/[id]` | Details of one opportunity, or a friendly "not found" message |
| `/dashboard` | Overview with the number of applications |
| `/dashboard/applications` | The list of applications |

## How to run it locally

1. Make sure Node.js and Git are installed.
2. Clone the repository and open the project folder:

```bash
git clone https://github.com/Mariam558-cmd/yehia-career-path.git
cd yehia-career-path
git checkout assignment-1-routing
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

To check the production build, run `npm run build`.

## Questions

### 1. Why did you use `await` when reading `params`?

In Next.js 16, `params` is a Promise, which means its value is not ready
immediately. Using `await` makes the page wait until the route information is
available, so I can read the `id` from it. This is why the page component is
`async` that it allows function to use await because `params` is `async` 


### 2. Why is the route ID a string?

Everything in a URL is text. When Yehia opens `/opportunities/1`, the `1` is
the text `"1"`, not a number. I kept the IDs in my data as strings too, so the
comparison `opportunity.id === id` works. A number `1` and a string `"1"` are
not equal when compared with `===`.

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout holds what is shared by all dashboard pages like the sidebar
with the Overview and Applications links and the content.
It stays on screen when Yehia moves between pages and this is because of using `children`that is the place where the current page appears so dashboard page holds only its own content.
