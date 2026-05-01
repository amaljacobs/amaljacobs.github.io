# Adding Project Content

Projects are stored as Markdown files in `src/content/projects`.

To add a new project, create a new `.md` file in that folder:

```md
---
title: "Project Name"
type: "Experiment"
status: "In progress"
summary: "One short sentence about the project."
year: "2026"
tags: ["React", "Java"]
order: 4
---

Write the project details here.

You can include notes, links, screenshots, what you learned, and what you want to add next.
```

The Projects page is generated from these files automatically. The `order` value controls the display order.
